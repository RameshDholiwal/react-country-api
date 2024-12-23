import { useEffect, useState } from 'react';
import { getCountryData } from '../Injectors/Axios.tsx';
import SearchBox from './SearchBox';
import FilterDropdown from './FilterDropdown'
import Country from './Country'

export default function CountryList() {
    const [query, setQuery] = useState('')
    const [filter, setFilter] = useState('')
    const [regionList, setRegionList] = useState<string[] | null>(null)
    const [countryData, setCountryData] = useState<any>(null)

    const getData = async () => {
        try {
            const res = await getCountryData();
            //console.log(res.data);
            setCountryData(res.data)

            const distinctRegion = res.data.map((d:any) => d.region).filter((item:string, index:Number, self:string) => self.indexOf(item) === index)
            setRegionList(distinctRegion)
        } catch(err) {
            console.log("hii")
            console.log(err);
        }
    }
    useEffect(() => {
        getData();
    }, [])

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
                        return <Country key={index} country={country} />
                    })
                )
                : (
                    <div className='col text-center'>Loading....</div>
                )
            }
        </div>
    </>
  )
}
