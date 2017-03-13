
var listener = function(element) {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = 'Click Me'
    btn.addEventListener('click', listener)
    document.getElementById('btnContainer')
    .append(btn)    
}

Array.prototype.slice.call(document.getElementsByTagName('button'))
.forEach(function(element) {
  element.addEventListener('click', listener)
 })

https://jsfiddle.net/ye6wwaza/
