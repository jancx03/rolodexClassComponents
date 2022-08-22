import './App.css';
// import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {

  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((user)=>{
      setMonsters(user)
    })
  },[])

  useEffect(()=>{

    const newFilteredMonster = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
    });
      setFilteredMonsters(newFilteredMonster);
  },[searchField, monsters])

    const onSaveChange = (event) => 
    {
      // console.log(event.target.value); // ABCSD
      const searchFieldString= event.target.value.toLocaleLowerCase(); // abcsd
      setSearchField(searchFieldString)
    }
  return (
  <div className="App">
          <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox onSearchChange={onSaveChange} placeholder={'search monsters'} className='search-box'/>
        <CardList monster={filteredMonsters}/>
      </div>
    )    
}

export default App;


