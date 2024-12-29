import { Link } from 'react-router-dom'

export default function Country({country, callFrom} : {country:any, callFrom:string}) {
  return (
    <>
        {
            (callFrom == "list") ? 
                (<div className='col-md-3 col-sm-6 mb-3 cardDetail'>
                    <Link to={`/${country.name.common}`}>
                        <div className="card text-start">
                            <img className="card-img-top" src={country.flags.png} alt="Title" />
                            <div className="card-body">
                                <h4 className="card-title">{country.name.common}</h4>
                                <p className="card-text"><b>Population: </b>{country.population}</p>
                                <p className="card-text"><b>Area: </b>{country.area}</p>
                            </div>
                        </div>
                    </Link>
                </div>)
                : (<>
                    <div className="row singleCard">
                        <div className="col">
                            <img src={country.imageUrl} alt="" />
                        </div>
                        <div className="col">
                            <p className='detailRow'>
                            <b>Name:</b> {country.name}
                            </p>
                            <p className='detailRow'>
                            <b>Region:</b> {country.region}
                            </p>
                            <p className='detailRow'>
                            <b>Sub-Region:</b> {country.subRegion}
                            </p>
                            <p className='detailRow'>
                            <b>Population:</b> {country.population}
                            </p>
                            <p className='detailRow'>
                            <b>Area:</b> {country.area}
                            </p>
                            <p className='detailRow'>
                            <b>Languages:</b> {country.languages}
                            </p>
                            <p className='detailRow'>
                            <b>Currencies:</b> {country.currencies}
                            </p>
                            <p className='detailRow'>
                            <b>Continents:</b> {country.continents}
                            </p>
                            <p className='detailRow'>
                            <b>Capital:</b> {country.capital}
                            </p>
                        </div>
                    </div>
                </>)
        }
    </>
  )
}
