import React,{Component,Fragment} from 'react'
import { Row, Col } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import Navleft from './components/NavLeft'
import './style/commit.less'
class App extends Component{
    render() {
        return (
            <Fragment>
                <Row className="container">
                    <Col span={3} className="nav-left">
                        <Navleft/>
                    </Col>
                    <Col span={21} className="main">
                        <Header/>
                        <div className="content">
                            content
                        </div>
                        <Footer/>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default App