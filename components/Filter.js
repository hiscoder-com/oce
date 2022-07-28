import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Listbox } from '@headlessui/react'

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

  const [filter, setFilter] = useState(null)
  const handleSendUrl = (param) => {
    if (!param) {
      return
    }
    if (type === 'topics' && router.isReady) {
      router.replace({
        query: { ...router.query, 'topics[]': param },
      })
      return
    }
    if (router.isReady) {
      console.log(router, 'all')

      router.replace({
        query: { ...router.query, [type]: param },
      })
    }

    // router.push({ pathname: router.pathname, query: { [type]: param } })
  }

  useEffect(() => {
    switch (type) {
      case 'topics':
        setFilter(
          <Listbox
            value={selectedFilters}
            onChange={(e) => {
              handleSendUrl(e.map((el) => el.value))
              setSelectedFilters(e)
            }}
            multiple
          >
            <div className="input form-select ">
              <Listbox.Button>
                {selectedFilters.map((filter) => filter.name).join(', ')}
              </Listbox.Button>
              <Listbox.Options>
                {filters[type].map((filter) => (
                  <Listbox.Option key={filter.id} value={filter} disabled={filter.hidden}>
                    {filter.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        )
        break
      case 'query':
        setFilter(
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
        )
        break

      default:
        setFilter(
          <Listbox
            value={selectedFilter}
            onChange={(e) => {
              handleSendUrl(e.value)
              setSelectedFilter(e)
            }}
          >
            <div className="input form-select  ">
              <Listbox.Button>
                <span className="block">{selectedFilter?.name}</span>
              </Listbox.Button>
              <Listbox.Options>
                {filters[type].map((filter) => (
                  <Listbox.Option key={filter.id} value={filter} hidden={filter.hidden}>
                    {filter.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        )
        break
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter, selectedFilters, type, searchQuery, router])

  return <>{filter}</>
}
