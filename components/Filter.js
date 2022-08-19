import { Fragment, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon, XIcon } from '@heroicons/react/solid'

export default function Filter({ type, multiple, values }) {
  const router = useRouter()
  const { pathname, query, asPath } = router
  const [selectedFilters, setSelectedFilters] = useState(() => {
    const val = query?.[type + '[]']
    if (val) {
      if (Array.isArray(val)) {
        return val
      } else {
        return [val]
      }
    } else {
      return []
    }
  })
  const [selectedFilter, setSelectedFilter] = useState(() => query?.[type] ?? values?.[0])

  const handleSendUrl = (param) => {
    if (!param || !router.isReady) {
      return
    }

    router.push(
      {
        query: { ...router.query, [type + (multiple ? '[]' : '')]: param },
      },
      undefined,
      { scroll: false }
    )
  }

  const handleCleanRouter = (e) => {
    e.preventDefault()
    const params = new URLSearchParams(query)
    params.delete(type + '[]')
    router.replace({ pathname, query: params.toString() }, undefined, { scroll: false })
    setSelectedFilters([])
  }

  useEffect(() => {
    if (!selectedFilter) {
      return
    }

    if (!multiple && !Object.keys(query).includes(type)) {
      router.replace(
        {
          query: { ...query, [type]: selectedFilter },
        },
        undefined,
        { scroll: false, shallow: true }
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath, selectedFilter])

  useEffect(() => {
    if (Object.keys(query).includes(type) && !multiple) {
      values?.forEach((el) => {
        if (el === query[type]) {
          setSelectedFilter(el)
        }
      })
    }

    if (Object.keys(query).includes(type + '[]') && multiple) {
      const selectedFromUrl = []
      values.forEach((el) => {
        if (query[type + '[]'].includes(el)) {
          selectedFromUrl.push(el)
        }

        setSelectedFilters(selectedFromUrl)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath])

  return (
    <>
      {type === 'query' ? (
        <Input handleSendUrl={handleSendUrl} />
      ) : (
        <Listbox
          open={false}
          value={multiple ? selectedFilters : selectedFilter}
          onChange={(e) => {
            if (!multiple) {
              handleSendUrl(e)
              setSelectedFilter(e)
            } else {
              setSelectedFilters(e)
            }
          }}
          multiple={multiple}
        >
          <div
            className={`input px-3 ${
              selectedFilters?.length > 0 && multiple
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 '
            } relative mt-1`}
          >
            <Listbox.Button className={'w-full text-left'}>
              <span className="truncate mr-6">
                {multiple ? type : selectedFilter ? selectedFilter : type}
              </span>
              {multiple && selectedFilters.length > 0 && (
                <span className="truncate mr-6 float-right">
                  {' '}
                  {selectedFilters.length}
                </span>
              )}

              <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                {multiple && selectedFilters.length > 0 ? (
                  <XIcon
                    className="h-5 w-5 text-black-400"
                    aria-hidden="true"
                    onClick={handleCleanRouter}
                  />
                ) : (
                  <ChevronDownIcon
                    className="h-5 w-5 text-black-400"
                    aria-hidden="true"
                  />
                )}
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="options w-fit z-10">
                {({ open }) => {
                  if (multiple && !open) {
                    handleSendUrl(selectedFilters)
                  }
                  return (
                    <>
                      {values.map((filter, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 ${
                              multiple ? 'pl-10' : 'pl-4'
                            } pr-4 ${
                              active ? 'bg-gray-100 text-amber-900' : 'text-gray-900'
                            }`
                          }
                          value={filter}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {filter}
                              </span>
                              {multiple &&
                                (selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                                    <CheckIcon
                                      className="h-5 w-5 border border-gray-300 rounded"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                                    <div className="h-5 border border-gray-300 w-5 rounded">
                                      {' '}
                                    </div>
                                  </span>
                                ))}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </>
                  )
                }}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      )}
    </>
  )
}

function Input({ handleSendUrl }) {
  const router = useRouter()

  const [searchQuery, setSearchQuery] = useState(() => router.query.query ?? '')

  const handleCleanQuery = () => {
    const params = new URLSearchParams(router.query)
    params.delete('query')
    router.replace({ pathname: router.pathname, query: params.toString() }, undefined, {
      scroll: false,
    })
    setSearchQuery('')
  }

  return (
    <div className="flex justify-center">
      <div className="relative flex w-full px-2 xl:w-96">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          onBlur={() => {
            if (!searchQuery) {
              handleCleanQuery()
            }
          }}
          type="text"
          className="input pl-3 pr-16 text-gray-700"
          placeholder="Search"
          value={searchQuery}
          onKeyDown={(e) => {
            searchQuery && e.key === 'Enter' && handleSendUrl(searchQuery)
          }}
        />
        <button
          className={`absolute top-0 bottom-0 right-12 pl-3 pr-2 py-2 text-black-40 ${
            !searchQuery ? 'hidden' : ''
          }`}
          type="button"
        >
          <XIcon className="w-5" aria-hidden="true" onClick={handleCleanQuery} />
        </button>

        <button
          className={'pl-2 pr-3 py-2 absolute top-0 bottom-0 right-2'}
          type="button"
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
            onClick={() => handleSendUrl(searchQuery)}
          >
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
