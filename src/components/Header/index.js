import React, { Component } from 'react';
import { Row, Col} from 'antd'
import './index.less'
import Util from '@/utils/utils.js'
import axios from '@/axios/index.js'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state ={
            userName: '王林强',
            sysTime: '',
            weather: '晴',
            dayPictureUrl: '#',
        }
    }
    componentWillMount() {
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime())
            this.setState({
                sysTime,
            })
        }, 1000)
        this.getWeatherAPIData()
    }
    getWeatherAPIData(){
        let city = '长沙'
        axios.jsonp({
            url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=60bbc7a792d17ed66522c0869577c39e`
        }).then(res => {
            const val = res.results[0].weather_data[0]
            this.setState({
                weather: val.weather,
                dayPictureUrl: val.dayPictureUrl,
            })
        })
    }
    render(h) {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎,{this.state.userName} </span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl}/>
                        </span>
                        <span className="weather-detail">
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header