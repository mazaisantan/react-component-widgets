
class ChartScale{
    static continuous = 0
    static discontinuous = 1
    constructor(){
        this.xCoord = undefined
        this.yCoord = undefined
        this.range = {
            xAxis:{
                paddingBegin:0,
                paddingEnd:0,
                length:0
            },
            yAxis:{
                paddingBegin:0,
                paddingEnd:0,
                length:0
            }
        }
        this.domain = {
            type:'continuous',
            xAxis:[],
            yAxis:[]
        }
    }

    x(data){
        data = data+''
        let index = this.domain.xAxis.indexOf(data)
        let dataCnt = this.domain.xAxis.length
        if(index>-1 && dataCnt > 1){
            let validLength = this.range.xAxis.length - this.range.xAxis.paddingBegin-this.range.xAxis.paddingEnd
            this.xCoord = index*(validLength/(dataCnt-1))
            return this.xCoord
        }else{
            console.log('data invalid')
        }
    }

    y(data){
        if(this.domain.type == 'continuous'){
            if(this.domain.yAxis[1] == this.domain.yAxis[0] || this.domain.yAxis[1] == undefined || this.domain.yAxis[0] == undefined){
                console.log('invaild this.domain data')
                return
            }
            let y = this.range.yAxis.paddingBegin+(data - this.domain.yAxis[0])*(this.range.yAxis.length-this.range.yAxis.paddingBegin-this.range.yAxis.paddingEnd)/(this.domain.yAxis[1]-this.domain.yAxis[0])
            return y
        }else{
            data = data+''
            let index = this.domain.yAxis.indexOf(data)
            let dataCnt = this.domain.yAxis.length
            if(index>-1 && dataCnt > 1){
                let validLength = this.range.yAxis.length - this.range.yAxis.paddingBegin-this.range.yAxis.paddingEnd
                this.yCoord = index*(validLength/(dataCnt-1))
                return this.yCoord
            }else{
                console.log('data invalid')
            }
        }
        
    }

}