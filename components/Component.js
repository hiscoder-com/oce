import { useState, useEffect } from 'react'

import { Tab } from '@headlessui/react'

import Labels from './Labels'
import SidePanel from './SidePanel'
import ComponentApp from './ComponentApp'
import MarkdownViewer from './MarkdownViewer'

import useComponent from '../hooks/useComponent'
import useRepo from '../hooks/useRepo'

import { timeSince } from '../utils/helper'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const tabs = ['Readme', 'Dependents', 'Dependencies']

function Component({ address }) {
  const [readme, setReadme] = useState()

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/${address}/master/README.md`)
      .then((response) => response.text())
      .then((text) => {
        setReadme(text)
      })
  }, [address])

  const { data: repo, isLoading, isError } = useComponent(address)

  const { data: repoOCE, isLoading: isLoadingOCE, isError: isErrorOCE } = useRepo(address)
  return (
    <div className="mt-12">
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div></div>
      ) : (
        <>
          <h1 className="text-6xl font-bold">{repo.name}</h1>
          <p className="my-5">{repo.description}</p>
          <div className="text-gray-500">
            {repo?.language?.name} • Updated {timeSince(repo.pushedAt)} ago
          </div>
          <div className="my-10">
            <Labels
              full
              labels={repo?.repositoryTopics?.nodes
                ?.filter((el) => !['scripture-open-components'].includes(el.topic.name))
                .map((el) => el.topic.name)}
            />
          </div>
          <Tab.Group>
            <Tab.List className="border-b border-slate-400 border-dotted mb-12">
              {tabs.map((tab) => (
                <Tab
                  key={tab}
                  className={({ selected }) =>
                    classNames('tab ', selected ? 'active' : '')
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
                    {JSON.stringify(repoOCE?.dTo, null, 2)}
                    {/* Получаем список, кто от него зависит. Сначала наши приложения, потом наши компоненты, потом все остальное (либо не будем отображать их) */}
                    <ComponentApp
                      apps={repoOCE?.dTo?.map((el) => ({
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
                    {/* Получаем список, от чего он зависит. Сначала наши компоненты, потом все остальное (либо не будем отображать их) */}
                  </Tab.Panel>
                </Tab.Panels>
              </div>
              <div className="w-full md:w-1/3">
                <SidePanel
                  license={repo?.licenseInfo?.name}
                  homepage={repo?.homepageUrl}
                  repository={repo?.url}
                  owner={{ url: repo.owner?.avatarUrl, name: repo.owner?.login }}
                  release={repo?.latestRelease}
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
