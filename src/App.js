import React from 'react';
import logo from './wp3981321-astronaut-wallpapers.jpg';
import './App.css'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  addItem(todoValue){
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };

      const list = [...this.state.list];// append all existing valeues into it.
      list.push(newItem);

      this.setState({
        list: list,
        newItem: ""
      });
    };
  }

  deleteItem(id){
    const list = [...this.state.list];// gets all items that are stored in the list
    const updatedList = list.filter(item => item.id !== id);
    this.setState({
      list: updatedList
    })
  }

  updateInput(input){
    this.setState({
      newItem: input
    })
  }

  render(){
    return(
    <div>
      {/* <img src={logo} width="100" height="100" className="logo"/> */}
      <h1 className="app-title"> To- Do List</h1>
      <div className="container">
        Add an item...
        <br/>
        <input 
          type="text"
          className="input-text"
          placeholder="Write a To-Do"
          required
          value={this.state.newItem}
          onChange={e => this.updateInput(e.target.value)}
        />
        <button 
          className="add-btn"
          onClick={() => this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}// to avoid blank input
          >Add Item</button>
        <div className="list">
          <ul>
          {this.state.list.map(item => {
            return (
              <li key={item.id}>
                <input 
                  type="checkbox"
                  name="idDone"
                  checked={item.isDone}
                  onClick={() => {}}
                />
                {item.value}
                <button
                  className="btn"
                  onClick={() => this.deleteItem(item.id)}
                  >
                  Delete
                  </button>
              </li>
            );
          })}
            {/* <li>
              <input type="checkbox" name="" id="" />
              Learn React
              <button className="btn">Delete</button>
            </li> */}
          </ul>
        </div>
      </div>  
    </div>
    );
  }
}

export default App;