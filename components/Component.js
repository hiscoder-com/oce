import { useState, useEffect } from 'react'

import { Tab } from '@headlessui/react'

import Labels from './Labels'
import SidePanel from './SidePanel'
import ComponentApp from './ComponentApp'
import MarkdownViewer from './MarkdownViewer'

import useComponent from '../hooks/useComponent'
import useRepo from '../hooks/useRepo'

import { timeSince } from '../utils/helper'
import ComponentCard from './ComponentCard'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const tabs = ['Readme', 'Apps', 'Dependents', 'Dependencies']

function Component({ address }) {
  const [readme, setReadme] = useState()
  const [apps, setApps] = useState(null)
  const [dependents, setDependents] = useState(null)
  const [dependencies, setDependencies] = useState(null)
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/${address}/master/README.md`)
      .then((response) => response.text())
      .then((text) => {
        setReadme(text)
      })
  }, [address])

  const { data: repo, isLoading, isError } = useComponent(address)

  const { data: repoOCE, isLoading: isLoadingOCE, isError: isErrorOCE } = useRepo(address)

  useEffect(() => {
    setApps(() =>
      repoOCE?.dTo?.filter((el) => {
        return el.topics.some((f) => f.topicId === 'scripture-open-apps')
      })
    )
    setDependents(() =>
      repoOCE?.dTo?.filter((el) => {
        return el.topics.some((f) => f.topicId === 'scripture-open-components')
      })
    )
    setDependencies(() =>
      repoOCE?.dFrom?.filter((el) => {
        return el.topics.some((f) => f.topicId === 'scripture-open-components')
      })
    )
  }, [repoOCE])

  return (
    <div className="mt-12">
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div></div>
      ) : (
        <>
          <h1 className="font-bold text-3xl text-primary-600 md:text-4xl lg:text-5xl xl:text-6xl">
            {repo.name}
          </h1>
          <p className="my-5 text-text-600">{repo.description}</p>
          <div className="text-text-500">
            {repo?.language?.name} • Updated {timeSince(repo.pushedAt)} ago
          </div>
          <div className="my-10">
            <Labels
              full
              labels={repo?.repositoryTopics?.nodes
                ?.filter(
                  (el) =>
                    !['scripture-open-components', 'scripture-open-apps'].includes(
                      el.topic.name
                    )
                )
                .map((el) => el.topic.name)}
            />
          </div>
          <Tab.Group>
            <Tab.List className="border-b border-slate-400 border-dotted mb-12">
              {tabs.map((tab) => (
                <Tab
                  key={tab}
                  className={({ selected }) =>
                    classNames(
                      'tab text-text-800 text-xs md:text-sm lg:text-base ',
                      selected ? 'active' : ''
                    )
                  }
                >
                  {tab}
                </Tab>
              ))}
            </Tab.List>
            <div className="flex flex-col md:flex-row">
              <div className="w-full mb-6 md:w-2/3 pr-0 md:pr-6 lg:pr-24">
                <Tab.Panels>
                  <Tab.Panel>
                    <MarkdownViewer address={address} className={'markdown-body'}>
                      {readme ?? 'Loading...'}
                    </MarkdownViewer>
                  </Tab.Panel>
                  <Tab.Panel>
                    <ComponentApp
                      apps={apps?.map((el) => ({
                        nameWithOwner: el.repo,
                        name: el?.repo.split('/')?.[1],
                        description: el.description,
                        logo: el.logo,
                        owner: {
                          login: el?.repo.split('/')?.[0],
                          avatarUrl: el.ownerAvatar,
                        },
                      }))}
                    />
                  </Tab.Panel>
                  <Tab.Panel>
                    {dependents?.length ? (
                      <div className="my-1 md:my-2 xl:my-8 grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 2xl:grid-cols-3 2xl:gap-8">
                        {dependents?.map((el) =>
                          ComponentCard({
                            repo: {
                              nameWithOwner: el.repo,
                              name: el?.repo.split('/')?.[1],
                              description: el.description,
                              owner: {
                                login: el?.repo.split('/')?.[0],
                                avatarUrl: el?.ownerAvatar,
                              },
                              latestRelease: { tag: { name: el.release } },
                              repositoryTopics: {
                                nodes: el?.topics.map((t) => ({
                                  topic: { name: t.topicId },
                                })),
                              },
                            },
                          })
                        )}
                      </div>
                    ) : (
                      <p className="text-text-500">
                        No Components
                        <br />
                        <br />
                        If you are the owner of the component or app and want more
                        information to be displayed here, read the{' '}
                        <a
                          className="underline text-primary-600"
                          href="https://github.com/texttree/oce/wiki/English-Version#how-to-add-a-component-or-app"
                          target="_blank"
                          rel="noreferrer"
                        >
                          instructions at the link
                        </a>
                      </p>
                    )}
                  </Tab.Panel>
                  <Tab.Panel>
                    {dependencies?.length ? (
                      <div className="my-1 md:my-2 xl:my-8 grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 2xl:grid-cols-3 2xl:gap-8">
                        {dependencies?.map((el) =>
                          ComponentCard({
                            repo: {
                              nameWithOwner: el.repo,
                              name: el?.repo.split('/')?.[1],
                              description: el.description,
                              owner: {
                                login: el?.repo.split('/')?.[0],
                                avatarUrl: el?.ownerAvatar,
                              },
                              latestRelease: { tag: { name: el.release } },
                              repositoryTopics: {
                                nodes: el?.topics.map((t) => ({
                                  topic: { name: t.topicId },
                                })),
                              },
                            },
                          })
                        )}
                      </div>
                    ) : (
                      <p className="text-text-500">
                        No Components
                        <br />
                        <br />
                        If you are the owner of the component or app and want more
                        information to be displayed here, read the{' '}
                        <a
                          className="underline text-primary-600"
                          href="https://github.com/texttree/oce/wiki/English-Version#how-to-add-a-component-or-app"
                          target="_blank"
                          rel="noreferrer"
                        >
                          instructions at the link
                        </a>
                      </p>
                    )}
                  </Tab.Panel>
                </Tab.Panels>
              </div>
              <div className="w-full md:w-1/3">
                <SidePanel
                  license={repo?.licenseInfo?.name}
                  homepage={repo?.homepageUrl}
                  repository={repo?.url}
                  owner={{ url: repo.owner?.avatarUrl, name: repo.owner?.login }}
                  release={{
                    tagName: repoOCE?.r?.release,
                    publishedAt: repoOCE?.r?.releaseDate,
                  }}
                />
              </div>
            </div>
          </Tab.Group>
        </>
      )}
    </div>
  )
}

export default Component
