import { useCallback, useEffect, useRef, useState } from 'react';
import { getCountryData } from '../Injectors/Axios.tsx';
import SearchBox from './SearchBox';
import FilterDropdown from './FilterDropdown'
import Country from './Country'
import CountryShimmer from './CountryShimmer.tsx';

export default function CountryList() {
    const [query, setQuery] = useState('')
    const [filter, setFilter] = useState('')
    const [regionList, setRegionList] = useState<string[] | null>(null)
    const [countryData, setCountryData] = useState<any>([])
    const TotalRecordsToGet = 10
    const [page, setPage] = useState<number>(1)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const totalData = useRef<number>(0)
    const totalReceiveData = useRef<number>(0)

    const getData = async () => {
        try {
            const res = await getCountryData();
            const _countryData = res.data;
            totalData.current = _countryData.length
            const _startNo = ((page - 1) * TotalRecordsToGet)
            const _endNo = (page * TotalRecordsToGet)
            totalReceiveData.current = _endNo
            //console.log(res.data);
            const _slicedData = _countryData.slice(_startNo, _endNo)
            setCountryData((prev: any) => [...prev, ..._slicedData])
            
            const distinctRegion = _countryData.map((d:any) => d.region).filter((item:string, index:Number, self:string) => self.indexOf(item) === index)
            setRegionList(distinctRegion)

            setIsLoading(false)
        } catch(err) {
            console.log("hii")
            console.log(err);
        }
    }
    const filterAllData = () => {
        if (totalData.current > totalReceiveData.current) {
            setIsLoading(true)
            setPage((prev) => prev + 1)
        }
    }
    const handleScroll = useCallback(() => {
        let userScrollHeight = window.innerHeight + window.scrollY;
        let windowBottomHeight = document.documentElement.offsetHeight;

        if (userScrollHeight >= windowBottomHeight) {
            filterAllData();
        }
    }, [])

    useEffect(() => {
        getData();
    }, [page])
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [handleScroll])

  return (
    <>
        <div className="row mb-3">
            <div className="col">
                <SearchBox setQuery={setQuery} />
            </div>
            <div className="col">
                <FilterDropdown setFilter={setFilter} region={regionList} />
            </div>
        </div>

        <div className="row">
            {
                (countryData) ? (
                    countryData
                    .filter((con:any) => con.name.common.toLowerCase().includes(query)
                        && con.region.toLowerCase().includes(filter))
                    //.slice(0, 5)
                    .map((country:any, index:number) => {
                        return <Country key={index} callFrom="list" country={country} />
                    })
                )
                : <CountryShimmer callFrom='list' />
            }
            {
                isLoading && <CountryShimmer callFrom='list' />
            }
        </div>
    </>
  )
}
