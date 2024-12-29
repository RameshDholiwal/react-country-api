export default function CountryShimmer({callFrom} : {callFrom: string}) {
  return (
    <>
      {
        (callFrom == "list") ?
          (Array.from({length:4}).map((_item: any, index: number) => {
            return (
              <div key={index} className='col-md-3 col-sm-6 mb-3 cardDetailShimmer'>
                  <div className="card text-start">
                      <div className="card-img-top"></div>
                      <div className="card-body">
                          <h4 className="card-title"><span></span></h4>
                          <p className="card-text"><span></span></p>
                          <p className="card-text"><span></span></p>
                      </div>
                  </div>
              </div>
            )
          }))
          : (
            <>
              <div className="row singleCardDetailShimmer">
                <div className="col">
                    <div className="cardImg"></div>
                </div>
                <div className="col">
                    <p className='detailRow'><span></span></p>
                    <p className='detailRow'>
                    <span></span>
                    </p>
                    <p className='detailRow'>
                    <span></span>
                    </p>
                    <p className='detailRow'>
                    <span></span>
                    </p>
                    <p className='detailRow'>
                    <span></span>
                    </p>
                    <p className='detailRow'>
                    <span></span>
                    </p>
                    <p className='detailRow'>
                    <span></span>
                    </p>
                    <p className='detailRow'>
                    <span></span>
                    </p>
                    <p className='detailRow'>
                    <span></span>
                    </p>
                </div>
            </div>
            </>
          )
      }
    </>
  )
}
