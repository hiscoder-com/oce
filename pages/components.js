import { useState } from 'react'

import ComponentsList from '../components/ComponentsList'
import Filter from '../components/Filter'
import useLabels from '../hooks/useLabels'
function ComponentsPage() {
  const [total, setTotal] = useState()

  const { data: labels, isLoading, isError } = useLabels()

  return (
    <div className="px-2 md:px-5 lg:px-12 2xl:px-28">
      <div className="text-center pb-3 border-b-2 border-dashed lg:pb-10">
        <div className="text-2xl font-bold text-primary-600 md:text-3xl lg:text-4xl xl:text-5xl">
          Components
        </div>
        <div className="text-lg mt-3 md:mt-8 text-text-800 md:text-2xl">
          <div className="inline-block">Repositories: {total}</div>
        </div>
      </div>
      <div className="pt-5 lg:pt-10">
        <div className="flex flex-col gap-2 justify-between lg:flex-row">
          <div className="flex flex-col gap-2 justify-between lg:flex-row">
            <div className="px-2">
              <Filter type="topics" multiple values={isLoading ? [] : labels} />
            </div>
            <div className="px-2">
              <Filter type="direction" values={['desc', 'asc']} />
            </div>
            <div className="px-2">
              <Filter type="order" values={['updated', 'interactions']} />
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
