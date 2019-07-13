class PromiseImp {
	constructor(fun) {
		this.PromiseValue = ''
		this.PromiseStatus = 'pending'
		this.PromiseList = []
		if (fun) {
			fun(this.resolve.bind(this), this.reject.bind(this))
		}
	}
	then(fun) {
		this.PromiseList.push(fun)
		return this
	}

	resolve(v) {
		this.PromiseStatus = 'resolved'
		this.PromiseValue = v
		this.run()
	}

	reject(v) {
		this.PromiseStatus = 'rejected'
		this.PromiseValue = v
		this.run()
	}

	// 递归函数
	run() {
		if (this.PromiseStatus !== 'pending' && this.PromiseList.length) {
			const a = this.PromiseList.shift()(this.PromiseValue)
			if (a instanceof PromiseImp) {
				a.PromiseList = this.PromiseList
				// a.run()
			} else {
				this.PromiseValue = a
				this.run()
			}
		}
	}
}

function MapImp(callback,context){
	let arr = Array.prototype.slice.call(this)
	let mapArr = []
	for(let i in arr){
		if(!arr.hasOwnProperty(i))continue
		mapArr.push(callback.call(contex,arr[i],i))
	}
	return mapArr
}

function filterImp(callback,context){
	let arr = Array.prototype.slice.call(this)
	let filterArr = []
	for(let i in arr){
		if(!arr.hasOwnProperty(i))continue
		callback.call(contex,arr[i],i)) &&filterArr.push(arr[i])
	}
	return filterArr
}

function curry(func){
	if(func.length <= 1) return func
	const generator = (...args)=>{
		if(args.length >= func.length){
			return func(...args)
		}else{
			return (...args1)=>{
				generator(...args,...args1)
			}	
		}
	}
	return generator
}

function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

class EventEmmiter{
	constructor(){
		this.stubs = {}
	}

	on(event,cb){
		this.stubs[event] = this.stubs[event] || []
		this.stubs[event].push(cb)
	}

	trigger(event,...args){
		this.stubs[event] &&
			this.stubs[event].forEach(cb => {
				cb(...args)
			})
	}

	once(event,cbOnce){
		let cb = (...args)=>{
			cbOnce(...args)
			this.off(event)
		}
		this.on(event,cb)
	}

	off(event,offCb){
		let offIndex = this.stubs[event].findIndex(cb => cb == offCb)
		this.stubs[event].splice(offIndex,1)
		if(!this.stubs[event].length)delete this.stubs[event]
	}
}

//来自loadsh
function throttle(method , duration ,delay ){
	var timer = null, 
			// 记录下开始执行函数的时间
			begin = new Date();

	return function(){
			var context = this, 
					args = arguments, 
					// 记录下当前时间
					current = new Date();
			// 函数节流里的思路
			clearTimeout(timer);

			// 记录下的两个时间相减再与duration进行比较
			if(current - begin >= duration){
					 method.apply(context , args);
					 begin = current;
			}else{  
					timer = setTimeout(function(){
							method.apply(context , args);
					} , delay);
			}
	}
}

//来自loadsh
function debounce(fn, delay, immediate){
  var timeout,
      args,
      context,
      timestamp,
      result;
  var later = function(){
      var last = Date.now() - timestamp;

      if(last < delay && last >= 0){
          timeout = setTimeout(later, delay - last);
      }else{
          timeout = null;
          if(!immediate){
              result = fn.apply(context, args);

              if(!timeout){
                  context = args = null;
              }
          }
      }
  };

  return function(){
      context = this;
      args = arguments;
      timestamp = Date.now();
      //console.log(timestamp);
      var callNow = immediate && !timeout;
      if(!timeout){
          timeout = setTimeout(later, delay);
      }
      if(callNow){
          result = fn.apply(context, args);
          context = args = null;
      }
      return result
  }
}

function invariant(condition, format, a, b, c, d, e, f) {
	validateFormat(format);

	if (!condition) {
		var error = void 0;

		if (format === undefined) {
			error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
		} else {
			let args = [a, b, c, d, e, f];
			let argIndex = 0;
			error = new Error(format.replace(/%s/g, function () {
				return args[argIndex++];
			}));
			error.name = 'Invariant Violation';
		}

		error.framesToPop = 1; // we don't care about invariant's own frame

		throw error;
	}

	function validateFormat(format) {
			if (format === undefined) {
					throw new Error('invariant requires an error message argument');
			}
	}
} 

function deepClone(obj){
	var newObject = obj.constructor === Array ? []:{};
	if(typeof obj != 'object'){
			return;
	}else{
			for(let i = 0;i < obj.length;i++){
					newObj[i] = typeof obj[i] =='object' ? deepClone(obj[i]):obj[i]; 
			}
			console.log(newObject);
			return newObject;
	}
}