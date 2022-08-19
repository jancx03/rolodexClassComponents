import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
class App extends Component {
  constructor() {
    super();

    // manage the state and create an array
    this.state = {
      monsters: [], // monsters from api
      searchField: '' // filtered monsters 
    };
  }

/* when the component mounts will fetch from api, then given a response transform that to json, then get the user,
  change the state return to the array the associated user from api
  * */
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((user) =>
        this.setState(
          () => {
            return { monsters: user };
          },
          () => {
            console.log(this.state);
          }
        )
      );

          


  }
  onSaveChange = (event) => {
            // console.log(event.target.value); // ABCSD
            const searchField = event.target.value.toLocaleLowerCase(); // abcsd
            this.setState(() => {
              return { searchField};
            });
          }
  

  // render the elements
  render() {
    const {monsters, searchField} = this.state
    const {onSaveChange} = this;
     const filteredMonster = monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(searchField);
            
            });
    return (
      <div className="App">
          <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox onSearchChange={onSaveChange} placeholder={'search monsters'} className='search-box'/>
        <CardList monster={filteredMonster}/>
      </div>
    );
  }
}

export default App;
