import React, { Component } from 'react'
import "./App.css"


export class AppList extends Component {
    state = {
        list: [
            {
                id: 1,
                item: "toilet paper"
            },
            {
                id: 2,
                item: "papertowel",
            },
            {
                id: 3,
                item: "dish soap",
            },
        ],
    }

    showItemList = () => {
        return (
            <ul>
                {this.state.list.map(({ item, id }) => (
                    <li key={id}>{item}</li>
                ))}
            </ul>

        )

    }

    render() {
        return (
            <div className="App">
                <h1>hello</h1>
                <p>We're going to MAP data</p>
                <ul>
                    {this.state.list.map((element) => {
                        return <li key={element.id}>{element.item}</li>
                    })}
                    {this.state.list.map(({ item, id }) => (
                        <li key={id}>{item}</li>
                    ))}
                    <br></br>
                    {this.showItemList()}

                </ul>
            </div>
        )
    }
}

export default AppList
