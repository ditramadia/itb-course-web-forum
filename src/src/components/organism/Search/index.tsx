import { InferQueryOutput, trpc } from '@/utils/trpc'
import { SubjectType } from '@prisma/client'
import React, { useEffect, useState } from 'react'

export interface SearchData {
  keyword: string
  majorId: number | undefined
  type: SubjectType | undefined
}

interface Props {
  onSearch: (result: InferQueryOutput<'subject.search'> | undefined) => void
}

export default function Search({ onSearch }: Props) {
  const { data: faculty } = trpc.useQuery(['faculty.findAll'])

  const [fetch, setFetch] = useState(false)

  const [searchData, setSearchData] = useState<SearchData>({
    keyword: '',
    majorId: undefined,
    type: undefined,
  })

  const { data, refetch } = trpc.useQuery(['subject.search', searchData], {
    enabled: fetch,
  })

  useEffect(() => {
    onSearch(data)
  }, [onSearch, data])

  const handleSearch = () => {
    setFetch(true)
  }

  return (
    <div className="search-wrapper">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSearch()
        }}
      >
        <div className="form-wrapper">
          <input
            id="keyword-input"
            type="text"
            placeholder="Masukkan kata kunci"
            value={searchData.keyword}
            onChange={(e) =>
              setSearchData((data) => {
                return {
                  ...data,
                  keyword: e.target.value,
                }
              })
            }
          />
          {/* <input id="major-input" type="text" placeholder="Jurusan" /> */}
          <select
            name="major"
            id="major-input"
            placeholder="Jurusan"
            key="major"
            value={searchData.majorId}
            defaultValue="default"
            onChange={(e) =>
              setSearchData((data) => {
                return {
                  ...data,
                  majorId:
                    e.target.value === 'default' || e.target.value === 'all'
                      ? undefined
                      : parseInt(e.target.value),
                }
              })
            }
          >
            <option value="default" disabled key="faculty-default">
              Jurusan
            </option>
            <option value="all" key="faculty-all">
              Semua Jurusan
            </option>
            {faculty &&
              faculty.map((each) => {
                return (
                  <>
                    <option value="" disabled key={`faculty-${each.id}`}>
                      {each.name}
                    </option>
                    {each.majors.map((major) => {
                      return (
                        <option
                          value={major.id}
                          key={`major-${major.id}`}
                        >{`${major.code} - ${major.name}`}</option>
                      )
                    })}
                  </>
                )
              })}
          </select>
          <select
            name="category"
            id="category-input"
            placeholder="Kategori"
            value={searchData.type}
            key="type"
            defaultValue="default"
            onChange={(e) =>
              setSearchData((data) => {
                return {
                  ...data,
                  type:
                    e.target.value === 'COMPULSORY'
                      ? SubjectType.COMPULSORY
                      : e.target.value === 'ELECTIVE'
                      ? SubjectType.ELECTIVE
                      : undefined,
                }
              })
            }
          >
            <option value="default" disabled key="type-all">
              Kategori
            </option>
            <option value="all" key="type-default">
              Semua Kategori
            </option>
            <option value={SubjectType.COMPULSORY} key="type-compulsory">
              Matkul Wajib
            </option>
            <option value={SubjectType.ELECTIVE} key="type-elective">
              Matkul Pilihan
            </option>
          </select>
          <button type="submit" onClick={handleSearch}>
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
