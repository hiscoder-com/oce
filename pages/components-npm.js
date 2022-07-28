import { useState } from 'react'
import ComponentsListNpm from '../components/ComponentsListNpm'

function ComponentsPage() {
  const [total, setTotal] = useState()
  return (
    <div className="divide-y divide-dashed px-28">
      <div className="mt-40 text-center pb-14">
        <div className="text-6xl font-bold">Components</div>
        <div className="mt-5">
          <div className="inline-block">Repositories: {total}</div>
        </div>
      </div>
      <div className="pt-12">
        <div className="flex justify-between">
          <div className="flex justify-between">
            <div className="px-2">Labels </div>
          </div>
          <div>Search for components</div>
        </div>
        <ComponentsListNpm setTotal={setTotal} />
      </div>
    </div>
  )
}

export default ComponentsPage
