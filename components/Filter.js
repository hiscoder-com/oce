import { Fragment, useState } from 'react'

import { useRouter } from 'next/router'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const filters = {
  order: [
    { id: 0, name: 'order', hidden: true },
    { id: 1, name: 'popularity', value: 'popularity' },
    { id: 2, name: 'updated', value: 'updated' },
  ],
  direction: [
    { id: 0, name: 'direction', hidden: true },
    { id: 1, name: 'ascending', value: 'asc' },
    { id: 2, name: 'descending', value: 'desc' },
  ],
  topics: [
    { id: 0, name: 'topics', hidden: true, disabled: true },
    { id: 1, name: 'typeScript', value: 'typeScript' },
    { id: 2, name: 'bible', value: 'bible' },
    { id: 3, name: 'reference', value: 'reference' },
  ],
}

export default function Filter({ type }) {
  const router = useRouter()
  const [selectedFilters, setSelectedFilters] = useState([filters?.[type]?.[0]])
  const [selectedFilter, setSelectedFilter] = useState(filters?.[type]?.[0])
  const [searchQuery, setSearchQuery] = useState('')

  const handleSendUrl = (param) => {
    if (!param || !router.isReady) {
      return
    }

    if (type === 'topics') {
      router.replace({
        query: { ...router.query, 'topics[]': param },
      })
      return
    }

    router.replace({
      query: { ...router.query, [type]: param },
    })
  }

  return (
    <>
      {type === 'query' ? (
        <div className="flex justify-center">
          <div className="flex mb-3 xl:w-96">
            <input
              onBlur={(e) => setSearchQuery(e.target.value)}
              type="text"
              className="form-control input"
              placeholder="Search"
            />
            <button
              className="btn"
              type="button"
              onClick={() => handleSendUrl(searchQuery)}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <Listbox
          value={type === 'topics' ? selectedFilters : selectedFilter}
          onChange={(e) => {
            if (type === 'topics') {
              handleSendUrl(e.map((el) => el.value))
              setSelectedFilters(e)
              return
            }
            handleSendUrl(e.value)
            setSelectedFilter(e)
          }}
          multiple={type === 'topics'}
        >
          <div className="input form-select relative mt-1">
            <Listbox.Button>
              <span className="block truncate">
                {type === 'topics' ? 'topics' : selectedFilter?.name}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="options">
                {filters[type].map((filter, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    hidden={filter.hidden}
                    disabled={filter.disabled}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-gray-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                    value={filter}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {filter.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      )}
    </>
  )
}
