import React, { useState } from 'react'
/* import {data} from "./Data" */

function SearchBar() {

  const [search,setSearch] = useState("")
  
/*   const [list, setList] = useState(data);

  



  
  const addItem = e => {
    if (userInput !== "") {
      setList([...list, userInput]);
      setUserInput("");
    }
  };

  const removeItem = item => {
    const updatedList = list.filter(listItem => listItem !== item);
    setList(updatedList);
  };
 */
  const eventHandler = (e)=> {
    e.preventDefault();

  }
/*   const addItem = e => {
    if (userInput !== "") {
      setList([...list, userInput]);
      setUserInput("");
    }
  }; */
  return (
    <div>
      <form onSubmit={eventHandler}>
        <div className="form-row my-5">
          <div className="col-12">
            <input 
            onChange={(e)=>setSearch(e.target.value)} 
            value={search}
            
            type="text" 
            className='form-control' 
            placeholder='Search a movie' />

            <button type="button" >
            {'Add Item'}
            </button>
            
          </div>
        </div>
      </form>
    </div>
     )
    }

    // App.js






/*   return (
    <Fragment>
      <List list={list} removeItem={removeItem} />
      <hr />
      <form>
        <input
          placeholder="Something that needs to be done..."
          value={userInput}
          onChange={handleChange}
        />
        <button type="button" onClick={addItem}>
          {'Add Item'}
        </button>
      </form>
    </Fragment>
  );
}

export default App;
  )
}
 */

   
export default SearchBar ;