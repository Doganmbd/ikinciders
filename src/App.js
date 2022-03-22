import React, { useState } from 'react'
import SearchBar from "./SearchBar"
import MovieList from "./MovieList"
import {data} from "./Data"

const App = () => {
  
const [list, setList] = useState(data);

const handleRemoveItem = (e) => {
  
 
   const nametwo = list.filter(itemssss => itemssss.id !== e);
   console.log(nametwo.id);
 /*   console.log(id); */
   setList(
      nametwo
   )
  };

console.log(list);
  return (
    <>
    <div className = "container">
      <div className="row">
        <div className="col-lg-12">
          <SearchBar/>
     
         
      {list.map((country) => {
       return(
      <MovieList 
      keyProp={country.id} 
      ad ={country.title} 
      aciklama={country.desc} 
      resim ={country.image}
      handleRemoveProp={handleRemoveItem}

      
      /> ) 
      } ) }
      </div>
    </div>
     
  </div>
  </>
   )
}

export default App

