import React, { Component } from 'react'

export default class ClickityClick extends Component {

    state = { 
        count: 0
    }
    handleClick = (prevState) => { 
        this.setState(prevState => { 
         return {   count: prevState+1 
         }
        })
    }
    render() {
        return (
            <div>
                <p>I have {this.state.count} times been clicked!</p>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}
