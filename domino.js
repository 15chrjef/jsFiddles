(function(){
	  var domObj = {
    	1: '5',
      2: '19',
      3: '159',
      4: '1379',
      5: '13579',
      6: '134679'
    }
  
  $('input').click(function(){
  	function hideBoxes(num, domNum){
    	var str = domObj[num]
    	for(var i = 1; i < 10; i++){
      	var strI = i.toString()
      	if(str.indexOf(strI) === -1){
        	$(`#b${domNum}${strI}`).addClass('black')
        }else {
        	$(`#b${domNum}${strI}`).removeClass('black')
        }
      }
    }
    
  	$('#container').removeClass('hide')
    var random1 = Math.floor(Math.random() * 6) + 1
    var random2 = Math.floor(Math.random() * 6) + 1
    hideBoxes(random1, '1')
    hideBoxes(random2, '2')
  })
  
  
}(jQuery))
