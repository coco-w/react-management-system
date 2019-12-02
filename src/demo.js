import React, { Component } from 'react'

class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            conut: 0,
        }
    }
    handleAdd = () => {
        this.setState({            
            conut: this.state.conut + 1
        })
    }
    handleClick() {
        this.setState({
            conut: this.state.conut + 1
        })
    }
    render() {
        return (             
            <div className="me">
                <div>Recat</div>
                <button onClick={this.handleAdd}>点击</button>
                <button onClick={this.handleClick.bind(this)}>点击</button>
                {this.state.conut}
            </div>
            
        )
    }
}

export default Demo