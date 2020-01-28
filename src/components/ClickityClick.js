
import React, { Component } from 'react'

export class ClickityClick extends Component {

    constructor() {
        super();

        this.state = {
            hasBeenClicked: false
        };
    }

    handleClick = () => {

    }



    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked? null : 'not'} been clicked!</p>
                <button onClick = {this.handleClick}>Click Me!</button>
            </div>
        )
    }
}

export default ClickityClick
