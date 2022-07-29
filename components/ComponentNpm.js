import { useState, useEffect } from 'react'

import { Tab } from '@headlessui/react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import Labels from './Labels'
import SidePanel from './SidePanel'
import ComponentApp from './ComponentApp'
import useComponent from '../hooks/useComponent'

import { apps, timeSince } from '../utils/helper'

import 'github-markdown-css/github-markdown-light.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const tabs = ['Readme', 'Apps']

function ComponentNpm({ address }) {
  const [log, setLog] = useState()

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/${address}/master/README.md`)
      .then((response) => response.text())
      .then((text) => {
        setLog({ text: text })
      })
  }, [address])
  const { data: repo, isLoading, isError } = useComponent(address)
  return (
    <div className="mt-12">
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error</div>
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
            <div className="flex flex-row">
              <div className="w-2/3">
                <Tab.Panels className="">
                  <Tab.Panel>
                    <ReactMarkdown
                      rehypePlugins={[rehypeRaw]}
                      className={'markdown-body'}
                    >
                      {log ? log.text : 'Version of application'}
                    </ReactMarkdown>
                  </Tab.Panel>
                  <Tab.Panel>
                    <ComponentApp apps={apps} />
                  </Tab.Panel>
                </Tab.Panels>
              </div>
              <div className="w-1/3">
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

export default ComponentNpm
