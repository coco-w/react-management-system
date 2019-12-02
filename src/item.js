import React, { Component } from 'react'
import {Button} from 'antd'
import PropTypes from 'prop-types'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            handleClick: this.handleClick.bind(this, )
         }
    }
    handleClick= () => {        
        this.props.deleteItem(this.props.index)
    }
    shouldComponentUpdate() {
        return false
    }
    render() { 
        console.log('child render')
        return ( 
            <div>
                <span>{this.props.content}</span>
                <Button onClick={this.handleClick} type="danger">删除</Button>
            </div>
        )
    }
}
 
export default Item;