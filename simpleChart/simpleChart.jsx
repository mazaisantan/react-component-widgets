import React from 'react'
import './simpleChart.scss'

class SimpleChart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data:[
                ['First Name','Last Name','Points'],
                ['Jill','Smith','50'],
                ['Eve','Jackson','94'],
                ['Adam','Johnson','67'],
            ]
        } 

        this.titleArr = this.state.data[0]
        this.dataArrs = this.state.data.slice(1)
        let arrTransposition = this.arrTransposition(this.dataArrs,this.titleArr.length)
        this.numberArrFlag = this.numberArrFlag(arrTransposition)
    }

    //对数组进行转置，获得以列为一组的数组
    arrTransposition(dataArrs,length){
        if(!length)return null
        let result = []
        for(let i = 0;i < length;i++){
            let tempArr = []
            for(let j in dataArrs){
                tempArr.push(dataArrs[j][i])
            }
            result.push(tempArr)
        }
        return result
    }

    //判断数组各列是否为数字，如果是则为true
    numberArrFlag(arr){
        let numberArrFlag = []
        for(let i in arr){
            numberArrFlag[i] = false
            for(let j in arr[i]){
                let itemType = parseInt(arr[i][j])
                if(typeof itemType == 'number' && !isNaN(itemType)){
                    numberArrFlag[i] = true
                    console.log('i:'+i+'j:'+j+';'+parseInt(arr[i][j]))
                    break
                }
            }
        }
        return numberArrFlag
    }

    //降序排列
    arrSortDsc(i){
        this.dataArrs = this.dataArrs.sort((a,b)=>{
            return parseInt(b[i]) - parseInt(a[i])
        })
        this.setState({})
    }

    //升序排列
    arrSortAsc(i){
        this.dataArrs = this.dataArrs.sort((a,b)=>{
            return parseInt(a[i]) - parseInt(b[i])
        })
        this.setState({})
    }

    render(i) {
        let {data} = this.state
        let {titleArr,dataArrs,numberArrFlag} = this
        return (
            <div className="simple-chart">
                <table>
                    <tr>
                    {
                        //title
                        titleArr.map((item,i)=>{
                            return (
                                <th>
                                    {item}
                                    {
                                        numberArrFlag[i] == true ?
                                        <div className='material-icon-container'>
                                            <i className='material-icons' onClick={this.arrSortAsc.bind(this,i)}>keyboard_arrow_up</i>
                                            <i className='material-icons' onClick={this.arrSortDsc.bind(this,i)}>keyboard_arrow_down</i>
                                        </div>
                                        :
                                        null
                                    }
                                </th>
                            )
                        })
                    }
                    </tr>
                    {
                        //body
                        dataArrs.map((item)=>{
                            return (
                            <tr>
                            {
                                item.map((item)=>{
                                    return (
                                        <td key = {item}>{item}</td>
                                    )
                                })
                            }
                            </tr>
                            )
                        })
                    }
                </table>
            </div>)
    }
}

export default SimpleChart