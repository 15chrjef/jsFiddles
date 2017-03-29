var searchBox = document.getElementById('search')

const findLetters = (word) => {
	var target = searchBox.value
  for(var i = 0; i < word.length; i++){
  	if(word[i] === target[0] && i+ target.length - 1 < word.length){
    	console.log('targer',target, 'word',word.slice(i, i + target.length))
    	if(word.slice(i, i + target.length) === target){
      	return true
      }
    }
  }
  return false
} 

function filterTable() {
console.log('filtering')
  var tbl = document.getElementsByTagName('table')
  var tBodies =tbl[0].tBodies[0].children
  var tBodyArr= Array.prototype.slice.call( tBodies, 1 )
  tBodyArr = tBodyArr.forEach( tBody => {
  	if(searchBox.value.length > 0){
      var tCells = Array.prototype.slice.call(tBody.children)
      var flag;
      tCells.forEach(tCell => {
        var cText = tCell.childNodes[0].data
        flag = flag === true || findLetters(cText) ? true: false;
      })
      tBody.style.display = flag === true ? '' : 'none';
     }else {
      tBody.style.display = '';
     }
  })
}

document.getElementById('search').addEventListener('input', filterTable)
