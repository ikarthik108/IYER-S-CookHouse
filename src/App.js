import React from 'react';
import CardList from './CardList';
import {items} from './items';
import SearchBox from './SearchBox';
import './App.css'


class App extends React.Component {
  constructor() {
    super()
    this.state = { 
      items:items,
      searchField:''
    }
  }
  onSearchChange= (event) => {
    this.setState({searchField:event.target.value})
    
    
  }
  render() {
    const filteredItems= this.state.items.filter(item => {
      return item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    });
    return (
    <div className='tc'>
      <h1 className='f1'>IYER'S COOKHOUSE</h1>
      <SearchBox searchChange={this.onSearchChange}/>     
      <CardList items={filteredItems}/>
    </div>
    );
  }
  
}

export default App;