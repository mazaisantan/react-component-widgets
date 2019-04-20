class SvgPosition{
    constructor(width,height){
        this.svgX = 0
        this.svgY = 0
        this.width = width
        this.height = height
    }

    left(num){
        this.svgX = num
        if(num > this.widht){
            this.svgX = width
        }
        return this
    }
    right(num){
        this.svgX = width - num
        if(num > this.width){
            this.svgX = 0
        }
        return this
    }
    top(num){
        this.svgY = num
        if(num > this.height){
            this.svgY = height
        }
        return this
    }
    bottom(num){
        this.svgY = height - num
        if(num > this.height){
            this.svgY = 0
        }
        return this
    }

    p(){
        return{x:this.svgX,y:this.svgY}
    }
}