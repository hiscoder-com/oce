import { Tab } from '@headlessui/react'
import SidePanel from './SidePanel'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const tabs = ['Readme', 'Apps']
function Component() {
  return (
    <div className="mt-12">
      <h1 className="text-6xl font-bold">Timeline-poc</h1>
      <p className="my-4">
        Library of components for convenient viewing of various biblical events
      </p>
      <div className="text-gray-500">18.2.0 • Published a month ago</div>
      <div>LABLES HERE</div>
      <Tab.Group>
        <Tab.List className="border-b border-slate-400 border-dotted mb-12">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) => classNames('tab ', selected ? 'active' : '')}
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
            <SidePanel />
          </div>
        </div>
      </Tab.Group>
    </div>
  )
}

export default Component
