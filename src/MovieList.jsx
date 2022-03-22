import React from 'react'

function MovieList(movie) {  

console.log(movie);
  return (
    <div className="row col-lg-4" key={movie.keyProp}>
        <div className="card bg-dark text-white text-start p-3 m-3" >
                <img src={movie.resim} className="card-img-top" alt="Sample Movie" />
                <div className="card-body" >
                    <h5 className="card-title">{movie.ad}</h5> 
                    <p className="card-text">{movie.aciklama} </p>
                    <div className="d-flex justify-content-between"> 
                   <button type="button" onClick={()=> movie.handleRemoveProp(movie.keyProp)} className="btn btn-md btn-outline-danger">delete</button>
                   <h2 className="" ><span className="badge badge-info text-secondary">9.0</span></h2> 
                    </div>
                  
                  </div>
                
            </div>
        </div>


  )
}

export default MovieList ;