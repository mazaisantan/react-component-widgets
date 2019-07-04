import React from 'react'
import './simpleItem.scss'

class SimpleItem extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
        <div className="simple-item">
            <div className="item-header">
                <span className="time">2018</span><span className="title">狄仁杰之四大天王</span><span className="score">评分：6.5</span><span className="category">动作</span>
            </div>
            <div className="item-body">
                <p>导演:徐克 Hark Tsui | 主演:赵又廷 Mark Chao | 冯绍峰 Shaofeng Feng | 林更新 Gengxin Lin </p>
                <p>简介：狄仁杰（赵又廷 饰）大破神都龙王案后，高宗（盛鉴 饰）御赐神器亢龙锏，遭天后武则天（刘嘉玲 饰）嫉妒，天后为盗取亢龙锏陷害狄仁杰，召集了一帮会方术的“异人组”图谋不轨，并命令尉迟真金（冯绍峰 饰）带队。狄仁杰在医官沙陀忠（林更新 饰）的帮助下成功摆脱“异人组”迫害，并和尉迟真金商议和解，与此同时“异人组”刺客水月（马思纯 饰）却发现都城出现不明势力，在狄仁杰周旋于武则天的埋伏时，大唐陷入更深的危机，“封魔族”携异术登场，一场“屠魔”大战即将爆发……</p>
            </div>
            <div className="item-footer">
                <span className="view">浏览：1000</span><span className="time">日期：2018-10-20</span>
            </div>
        </div>)
    }
}

export default SimpleItem