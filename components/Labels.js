function Labels({ full = false, labels }) {
  return (
    <>
      {
        <div className={`${full && 'flex flex-wrap'} truncate gap-2`}>
          {labels?.map((el, index) => {
            return <Label isFull={full} key={index} label={el} />
          })}
        </div>
      }
    </>
  )
}

const colors = [
  'bg-slate-100 text-slate-600',
  'bg-rose-100 text-rose-600',
  'bg-lime-100 text-lime-600',
  'bg-cyan-100 text-cyan-600',
  'bg-stone-100 text-stone-600',
  'bg-red-100 text-red-600',
  'bg-violet-100 text-violet-600',
  'bg-orange-100 text-orange-600',
  'bg-amber-100 text-amber-600',
  'bg-yellow-100 text-yellow-600',
  'bg-green-100 text-green-600',
  'bg-emerald-100 text-emerald-600',
  'bg-teal-100 text-teal-600',
  'bg-sky-100 text-sky-600',
  'bg-blue-100 text-blue-600',
  'bg-indigo-100 text-indigo-600',
  'bg-purple-100 text-purple-600',
  'bg-fuchsia-100 text-fuchsia-600',
  'bg-pink-100 text-pink-600',
  'bg-neutral-100 text-neutral-600',
  'bg-zinc-100 text-zinc-600',
]

function Label({ isFull, label }) {
  const labelColor =
    label && label.length > 0 ? colors[label.length % colors.length] : 'white'
  return (
    <div
      className={`${labelColor} uppercase ${
        !isFull ? 'text-xxs p-1 inline-block mx-1' : 'text-base p-2'
      } font-bold w-fit rounded-lg self-center`}
    >
      {label}
    </div>
  )
}

export default Labels
