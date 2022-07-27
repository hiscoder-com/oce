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
            <div className="px-2">Labels </div>
            <div className="px-2">Size </div>
            <div className="px-2">Language </div>
          </div>
          <div>Search for components</div>
        </div>
        <div className="mt-24 font-bold text-3xl">Text Tree</div>
        <div className="my-8 grid grid-cols-5 gap-8">
          {[...Array(20).keys()].map((el) => {
            return (
              <div key={el} className="h-56 bg-blue-75">
                {el + 1}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default componentsPage
