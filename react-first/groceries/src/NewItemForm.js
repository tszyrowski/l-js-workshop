import React from 'react'

class NewItemForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            itemCount: 1,
            itemName: "",
        }

        this.submitForm = this.submitForm.bind(this)
        this.updateItemCount = this.updateItemCount.bind(this)
        this.updateItemName = this.updateItemName.bind(this)
    }

    updateItemCount(event) {
        this.setState({
            itemCount: event.target.value
        })
    }

    updateItemName(event) {
        this.setState({
            itemName: event.target.value
        })
    }

    submitForm(event) {
        event.preventDefault()

        let item = {
            number: this.state.itemCount,
            name: this.state.itemName,
            purchased: false
        }

        this.props.addItem(item)

        this.setState({
            itemCount: 1,
            itemName: ""
        })

    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div className="field has-addons">
                  <div className="control">
                    <input
                      style={{maxWidth: "6em" }}
                      className="input"
                      value={this.state.itemCount}
                      onChange={this.updateItemCount}
                      type="number"
                      placeholder="2"
                      min="1"
                      aria-label="number to pushcase" />
                  </div>
                  <div className="control is-expanded">
                    <input
                      // style={{maxWidth: "16em" }}
                      className="input"
                      type="text"
                      value={this.state.itemName}
                      onChange={this.updateItemName}
                      placeholder="item to buy"
                      min="1"
                      aria-label="item to pushcase" />
                  </div>
                  <div className="control">
                    <input
                      className="button is-info"
                      type="submit"
                      value="add Item" />
                  </div>
                </div>
            </form>
        )
    }
}

export default NewItemForm;