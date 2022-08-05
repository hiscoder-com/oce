import { useState } from 'react'

import AppsList from '../components/AppsList'

function AppsPage() {
  const [total, setTotal] = useState()
  return (
    <div className=" px-2 md:px-5 lg:px-12 2xl:px-28">
      <div className="text-center pb-10 border-b-2 border-dashed">
        <div className="text-6xl font-bold text-primary-600">Apps</div>
        <div className="mt-5">
          <div className="inline-block">Repositories: {total}</div>
        </div>
      </div>
      <div>
        <AppsList setTotal={setTotal} />
      </div>
    </div>
  )
}

export default AppsPage
