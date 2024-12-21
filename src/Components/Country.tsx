import { Link } from 'react-router-dom'

export default function Country({country} : {country:any}) {
  return (
    <>
        <div className='col-md-3 col-sm-6 mb-3 cardDetail'>
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
        </div>
    </>
  )
}
