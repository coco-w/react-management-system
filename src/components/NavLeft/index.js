import React, { Component } from 'react';
import menuList from '@/resource/menuConfig'
import { Menu, Icon } from 'antd'
import './index.less'
const { SubMenu } = Menu

class Navleft extends Component {  
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         menuTreeNode: []
    //     }
    // }  
    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuList)
        this.setState({
            menuTreeNode
        })
    }
    renderMenu = data => {
        return data.map(ele => {
            if (ele.children) {
                return (
                    <SubMenu title={ele.title} key={ele.key}>
                        {this.renderMenu(ele.children)}
                    </SubMenu>
                )                
            }
            return <Menu.Item key={ele.key}>{ele.title}</Menu.Item>
            
        })
    }
    render(h) {        
        return (
            <div>
                <div className="logo">
                    <img src='assets/dota2.png' alt=""></img>                    
                </div>
                {/* {
                    menuList.map(ele => {
                        return (
                            
                        )
                    })
                } */}
                <Menu theme="dark">
                   {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}

export default Navleft