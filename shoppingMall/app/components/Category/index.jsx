import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import ReactSwipe from 'react-swipe'
import React_Swipe from '../Swipe/swipe.jsx'
import { Link } from 'react-router-dom'
import RoutePath from '../../router/routePath.js'

import './category.scss'

class Category extends React.Component {
    /*
    轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe 根据其文档要求需要安装插件，
    即`npm install react swipe-js-iso react-swipe --save`，这个插件的日常使用我已经验证过，大家可放心使用
    */
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {
        const opt = {
            auto: 2500,
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
            }.bind(this)
        }
        let {root} = RoutePath

        return (
            <div id="home-category">
                <React_Swipe swipeOptions={opt} footer={false}>
                    <div className="">
                        <ul className="clear-fix carousel-item">
                            <Link to={root+"/search/jingdian"}><li className="float-left jingdian">景点</li></Link>
                            <Link to={root+"/search/ktv"}><li className="float-left ktv">KTV</li></Link>
                            <Link to={root+"/search/gouwu"}><li className="float-left gouwu">购物</li></Link>
                            <Link to={root+"/search/shenghuofuwu"}><li className="float-left shenghuofuwu">生活服务</li></Link>
                            <Link to={root+"/search/jianshenyundong"}><li className="float-left jianshenyundong">健身运动</li></Link>
                            <Link to={root+"/search/meifa"}><li className="float-left meifa">美发</li></Link>
                            <Link to={root+"/search/qinzi"}><li className="float-left qinzi">亲子</li></Link>
                            <Link to={root+"/search/xiaochikuaican"}><li className="float-left xiaochikuaican">小吃快餐</li></Link>
                            <Link to={root+"/search/zizhucan"}><li className="float-left zizhucan">自助餐</li></Link>
                            <Link to={root+"/search/jiuba"}><li className="float-left jiuba">酒吧</li></Link>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="clear-fix carousel-item">
                            <Link to={root+"/search/meishi"}><li className="float-left meishi">美食</li></Link>
                            <Link to={root+"/search/dianying"}><li className="float-left dianying">电影</li></Link>
                            <Link to={root+"/search/jiudian"}><li className="float-left jiudian">酒店</li></Link>
                            <Link to={root+"/search/xuixianyule"}><li className="float-left xuixianyule">休闲娱乐</li></Link>
                            <Link to={root+"/search/waimai"}><li className="float-left waimai">外卖</li></Link>
                            <Link to={root+"/search/huoguo"}><li className="float-left huoguo">火锅</li></Link>
                            <Link to={root+"/search/liren"}><li className="float-left liren">丽人</li></Link>
                            <Link to={root+"/search/dujiachuxing"}><li className="float-left dujiachuxing">度假出行</li></Link>
                            <Link to={root+"/search/zuliaoanmo"}><li className="float-left zuliaoanmo">足疗按摩</li></Link>
                            <Link to={root+"/search/zhoubianyou"}><li className="float-left zhoubianyou">周边游</li></Link>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="clear-fix carousel-item">
                            <Link to={root+"/search/ribencai"}><li className="float-left ribencai">日本菜</li></Link>
                            <Link to={root+"/search/spa"}><li className="float-left SPA">SPA</li></Link>
                            <Link to={root+"/search/jiehun"}><li className="float-left jiehun">结婚</li></Link>
                            <Link to={root+"/search/xuexipeixun"}><li className="float-left xuexipeixun">学习培训</li></Link>
                            <Link to={root+"/search/xican"}><li className="float-left xican">西餐</li></Link>
                            <Link to={root+"/search/huochejipiao"}><li className="float-left huochejipiao">火车机票</li></Link>
                            <Link to={root+"/search/shaokao"}><li className="float-left shaokao">烧烤</li></Link>
                            <Link to={root+"/search/jiazhuang"}><li className="float-left jiazhuang">家装</li></Link>
                            <Link to={root+"/search/chongwu"}><li className="float-left chongwu">宠物</li></Link>
                            <Link to={root+"/search/all"}><li className="float-left quanbufenlei">全部分类</li></Link>
                        </ul>
                    </div>
                </React_Swipe>
                {/* <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div> */}
            </div>
        )
    }
}

export default Category