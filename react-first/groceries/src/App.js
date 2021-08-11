import logo from './logo.svg';
import './App.css';
import React from 'react';
import NewItemForm from './NewItemForm';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          name: "Broc",
          number: 3,
          purchased: false,
        },
        {
          name: "Bannana",
          number: 5,
          purchased: true,
        }
      ]
    }

    this.addGrocceryItem = this.addGrocceryItem.bind(this)
  }



  addGrocceryItem(grocceryItem) {
    let items = this.state.slice()
    items.push(grocceryItem)
    this.setState({items: items})
  }

  render() {
    return (
      <section className="section">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="titel">Croccery Lsit</h1>

              <NewItemForm addItem={this.addGrocceryItem} />

              <div className="my-5">
                <ul>
                  {this.state.items.map((item, index) => (
                    <li key={index}>
                      <label
                        className="checkbox"
                        style={{
                          textDecoration: item.purchased
                          ? "line-through"
                          : "none",
                        }}
                      >
                        <input checked={item.purchased} className="mr-3" type="checkbox" />
                        {item.name} <span className="has-text-weight-light">({item.number})</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>


    );
  }
}

export default App;
