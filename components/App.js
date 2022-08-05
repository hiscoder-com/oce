import { useState, useEffect } from 'react'

import { Tab } from '@headlessui/react'
import rehypeRaw from 'rehype-raw'

import SidePanel from './SidePanel'
import ComponentCard from './ComponentCard'
import MarkdownViewer from './MarkdownViewer'

import useApp from '../hooks/useApp'

import { components, timeSince } from '../utils/helper'

import 'github-markdown-css/github-markdown-light.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const tabs = ['Readme', 'Components']

function App({ address }) {
  const [readme, setReadme] = useState()

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/${address}/master/README.md`)
      .then((response) => response.text())
      .then((text) => {
        setReadme(text)
      })
  }, [address])
  const { data: repo, isLoading, isError } = useApp(address)
  return (
    <div className="mt-12">
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error</div>
      ) : (
        <>
          <h1 className="text-5xl font-bold uppercase">{repo.name}</h1>
          <p className="my-5">{repo.description}</p>
          <div className="text-gray-500 mb-8">
            {repo?.language?.name} • Updated {timeSince(repo.pushedAt)} ago
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
                    <MarkdownViewer
                      address={address}
                      rehypePlugins={[rehypeRaw]}
                      className={'markdown-body'}
                    >
                      {readme ?? 'Loading...'}
                    </MarkdownViewer>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="my-1 md:my-2 xl:my-8 grid grid-cols-2 gap-1 sm:grid-cols-2 sm:gap-2 2xl:grid-cols-3 2xl:gap-8">
                      {components.map((el) => ComponentCard({ repo: el }))}
                    </div>
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

export default App
