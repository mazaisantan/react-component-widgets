//将数据映射到坐标轴的位置
class AxisMap{
	constructor(props){
		let {scale,length,padding,type} = this.props
		this.config = {
			scale: scale || [0,100],
			length: length || 100,
			padding:{
				begin:0,
				end:0,
				...padding
			},
			type: type || 'number' //'number'则以数字的方式映射，'str'则以字符串的映射
		}
	}

	//数据映射
	from(data){
		let {type} = this.config
		if(type == 'number'){
			return this.numMap(data)
		}else if(type == 'string'){
			return this.strMap(data)
		}else{
			return 'error'//没有指定映射方式
		}
	}

	//坐标映射，由于svg的坐标是从上到下，而一般的坐标是从下到上递增，所以需要镜像
	mirror(coord){
		let {length,padding} = this.config
		let contentL = length-padding.begin-padding.end//除去首尾间隔，剩下内容的长度
		if(coord <= contentL && coord >= 0){
			return length - coord
		}else{
			return 0 //映射值超过范围，返回0
		}
	}

	//number方式映射
	numMap(num){
		let {scale,length,padding} = this.config
		let contentL = length-padding.begin-padding.end//除去首尾间隔，剩下内容的长度
		//取得num值的映射值
		let offset = padding.begin + (num - 0)*contentL/(Math.max(scale)-0)
		return offset
	}

	//str方式映射
	strMap(str){
		let {scale,length,padding} = this.config
		let index = scale.indexOf(str)
		let contentL = length - padding.begin - padding.end//除去首尾间隔，剩下内容的长度
		if(index > -1){
			let offset = padding.begin + index*contentL/(scale.length-1)//返回指定str的映射值
			return offset
		}else{
			return 0//没有找到目标值就返回起始点
		}
	}
}