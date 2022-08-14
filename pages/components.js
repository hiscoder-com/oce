import { useState } from 'react'

import ComponentsList from '../components/ComponentsList'
import Filter from '../components/Filter'
import useLabels from '../hooks/useLabels'
function ComponentsPage() {
  const [total, setTotal] = useState()

  const { data: labels, isLoading, isError } = useLabels()

  return (
    <div className="px-2 md:px-5 lg:px-12 2xl:px-28">
      <div className="text-center pb-10 border-b-2 border-dashed">
        <div className="text-6xl font-bold text-primary-600">Components</div>
        <div className="mt-5">
          <div className="inline-block">Repositories: {total}</div>
        </div>
      </div>
      <div className="pt-8">
        <div className="flex justify-between">
          <div className="flex justify-between">
            <div className="px-2">
              <Filter type="topics" multiple values={isLoading ? [] : labels} />
            </div>
            <div className="px-2">
              <Filter type="direction" values={['desc', 'asc']} />
            </div>
            <div className="px-2">
              <Filter type="order" values={['interactions', 'updated']} />
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

export async function getServerSideProps(context) {
  return {
    props: {},
  }
}
