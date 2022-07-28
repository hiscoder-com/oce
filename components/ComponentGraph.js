import { Tab } from '@headlessui/react'
import useComponentGraph from '../hooks/useComponentGraph'
import { timeSince } from '../utils/helper'
import Labels from './Labels'
import SidePanelGraph from './SidePanelGraph'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const tabs = ['Readme', 'Apps']

function Component({ address }) {
  const { data, isLoading, isError } = useComponentGraph(address)
  const repo = data?.repository
  return (
    <div className="mt-12">
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error</div>
      ) : (
        <>
          <h1 className="text-6xl font-bold">{repo.name}</h1>
          <p className="my-4">{repo.description}</p>
          <div className="text-gray-500">
            {repo?.language?.name} • Updated {timeSince(repo.pushedAt)} ago
          </div>
          <div className="my-8">
            <Labels
              isFull={true}
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
                  <Tab.Panel>Readme Content</Tab.Panel>
                  <Tab.Panel>Apps List</Tab.Panel>
                </Tab.Panels>
              </div>
              <div className="w-1/3">
                <SidePanelGraph
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
