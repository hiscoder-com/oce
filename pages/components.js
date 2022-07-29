import Filter from '../components/Filter'
import ComponentsList from '../components/ComponentsList'

function componentsPage() {
  return (
    <div className="divide-y divide-dashed px-28">
      <div className="mt-40 text-center pb-14">
        <div className="text-6xl font-bold">Components</div>
        <div className="mt-5">
          <div className="inline-block">Repozitories: </div>
          <div className="inline-block">Stargaziers: </div>
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
        <div className="mt-24 font-bold text-3xl">Text Tree</div>
        <div className="my-8 grid grid-cols-5 gap-8">
          <ComponentsList />
        </div>
      </div>
    </div>
  )
}

export default componentsPage
