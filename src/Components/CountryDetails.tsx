import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCountryDetailsByName } from '../Injectors/Axios.tsx';
import { FaArrowLeft } from 'react-icons/fa';
import Country from './Country.tsx';
import CountryShimmer from './CountryShimmer.tsx';

type countryformat = {
  name: string,
  imageUrl: string,
  region: string,
  subRegion: string,
  population: string,
  area: string,
  languages: string[],
  currencies: string[],
  continents: string,
  capital: string
}
export default function CountryDetails() {
    const {country} = useParams<string>()
    const navigate = useNavigate()
    const [countryDetail, setCountryDetail] = useState<countryformat | null>(null);


    const getCountryDetail = async () => {
      try {
        const resCountryData = await getCountryDetailsByName(country);
        //console.log(resCountryData.data[0]);
        const resData = resCountryData.data[0];

        const detailObj: countryformat = {
          name: resData.name.common,
          imageUrl: resData.flags.png,
          region: resData.region,
          subRegion: resData.subregion,
          population: resData.population,
          area: resData.area,
          languages: Object.values(resData.languages),
          currencies: Object.keys(resData.currencies),
          continents: Object.values(resData.continents).join(","),
          capital: Object.values(resData.capital).join(",")
        };
        setCountryDetail(detailObj)
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      getCountryDetail()
    }, [])

  return (
    <>
        <div className="row mb-2">
          <div className="col">
            <button className='btn btn-sm btn-outline-secondary' onClick={() => navigate(-1)}><FaArrowLeft /> Back</button>
          </div>
          <div className="col"></div>
        </div>
        {
          countryDetail ? 
            <Country callFrom='detail' country={countryDetail} />
            : <CountryShimmer callFrom='detail' />
        }
        
    </>
  )
}
