import { useState } from 'react'

import ComponentsList from '../components/ComponentsList'
import Filter from '../components/Filter'
function ComponentsPage() {
  const [total, setTotal] = useState()

  return (
    <div className="divide-y divide-dashed px-2 md:px-5 lg:px-12 2xl:px-28">
      <div className="mt-40 text-center pb-14">
        <div className="text-6xl font-bold">Components</div>
        <div className="mt-5">
          <div className="inline-block">Repositories: {total}</div>
        </div>
      </div>
      <div className="pt-12">
        <div className="flex justify-between">
          <div className="flex justify-between">
            <div className="px-2 w-40 ">
              <Filter type="topics" />
            </div>
            <div className="px-2 w-40">
              <Filter type="direction" />
            </div>
            <div className="px-2 w-40">
              <Filter type="order" />
            </div>
          </div>
          <Filter type="query" />
        </div>
        <ComponentsList setTotal={setTotal} />
      </div>
    </div>
  )
}

export default ComponentsPage
