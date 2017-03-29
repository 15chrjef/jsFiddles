var btns = document.getElementsByTagName('button')
btns[0].addEventListener('click', function(){
	console.log(this)
  var styleT = this.style.top
  if(!this.style.top){
  	this.style.position = 'absolute'
  	this.style.top = '100px'
  }else {
  	this.style.top = Number(styleT.substr(0,styleT.length -2)) + 100 + 'px'
  }
})
