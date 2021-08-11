import logo from './logo.svg';
import './App.css';

import React from 'react';
import Header from './Header';
import Item from './item';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newItemValue: "",
      items: [
        {text: "First Todo", done: false},
        {text: "Second Todo", done: true},
      ]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
  } 

  handleChange(event) {
    this.setState({ newItemValue: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();

    let items = this.state.items.slice()

    items.push({
      text: this.state.newItemValue,
      done: false,
    })

    this.setState({
      newItemValue: '',
      items: items
    })
  }

  toggleTodo(index) {
    let items = this.state.items.slice()

    let item =items[index]
    item.done = !item.done

    this.setState({
      items: items
    })
  }

  render() {
    return (
      <div className="App">
        <Header />

        <form onSubmit={this.handleChange.Submit}>
          <input type="text" value={this.state.newItemValue} placeholder="New todo..." onChange={this.handleChange} />
          <input type="submit" value="Add Item" />
         </form>


        <ol>
          {this.state.items.map((item, index) => (
            <Item key={index} clickHandler={() => this.toggleTodo(index)} done={item.done} text={item.text} />
          ))}
        </ol>
      </div>
    );    
  }
}

export default App;
