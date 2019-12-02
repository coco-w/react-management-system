import React,{Component, Fragment} from 'react'
import { Form, Icon, Input, Button, List, Typography } from 'antd';
import Item from './item'

class Todolist extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue: '',
            list: ["头部按摩","精油推背"]
        }
    }
    handleValueChange(e) {
        const { value } = e.target
        this.setState({
            inputValue: value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({
                    list: [...this.state.list, this.props.form.getFieldValue('item')],            
                })
                this.props.form.resetFields();
            }
        })
    }
    handleDeletList(index) {
        const arr = this.state.list
        arr.splice(index,1)
        this.setState({
            list: arr
        })
    }
    render() {        
        const { getFieldDecorator } = this.props.form
        console.log('father render')
        return (
            <Fragment>
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <Form.Item label="服务：">
                        {
                            getFieldDecorator('item', {
                                rules: [{required: true, message: '不能为空'}]
                            })(<Input  onChange={this.handleValueChange.bind(this)}/>)
                        }
                        {/* <Input value={this.state.inputValue}</Input> */}
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary" htmlType="submit">
                        添加
                    </Button>
                    </Form.Item>
                </Form>
                <List
                    header={<div>服务表单</div>}                    
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (                        
                    <List.Item>
                        <Typography.Text >
                            <Item content={item} index={index} deleteItem={this.handleDeletList.bind(this)}></Item>
                            {/* <span>{item}</span>
                            <Button type="danger" onClick={this.handleDeletList.bind(this,index)}>删除</Button> */}
                        </Typography.Text> 
                        
                    </List.Item>
                    )}
                />
            </Fragment>
            
        )
    }    
}
export default Form.create({ name: 'normal_login' })(Todolist);