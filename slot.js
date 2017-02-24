var lastFood = 1;
var lastFilter = 1;
var lastMachine = 1;
var clickable = false;
var prizes = ['','http://bit.ly/2mbXoTa', 'http://bit.ly/2dF9NLB', 'http://bit.ly/2l3Wxza']
 $('.food, .filter, .machine').click( function(e){
  if(clickable){
  		var type = '.' + this.id.slice(0,-1)
      if(type === '.food'){
      	lastFood > 2 ? lastFood = 1: lastFood++;
      }else if(type === '.machine'){
      	lastMachine > 2 ? lastMachine = 1: lastMachine++;
      } else {
      	lastFilter > 2 ? lastFilter = 1 : lastFilter ++;
      }
      console.log('this',$(this), 'id',this.id, 'offset', $(this).offset().top)
      $(type).each( function() {
          if ($(this).offset().top < 0) {
            $(this).css("top", "190%");
          }
      });
      $(this).animate({
           top: '-150%'
       }, 200);

       if ($(this).next().size() > 0) {
           $(this).next().animate({
               top: '10%'
           }, 200);
       } else {
           $(this).prevAll().last().animate({
               top: '10%'
           }, 200);
       }
    }
}); 

$('.closeModal').click(function(){
		$('#modal').addClass('hide')
		$('#modal').removeClass('modal')
})

function displayModal(i) {
	$('#modal').removeClass('hide')
  $('#modal').addClass('modal')
	if(i){
    console.log($('.winImage')[0], i)
    $('.winImage').attr('src', prizes[i])
    $(".winMessage").html("Your Java!");
  } else {
  	$('.winImage').attr('src', 'http://bit.ly/2lAPaRn')
		$(".winMessage").html("No Java");
  }
}

function checkSpin(){
	if(lastFood === lastFilter && lastFilter === lastMachine){
  	displayModal(lastFood)
  } else {
  	displayModal()
  }
}


function callClick(i, type, remaining){
  setTimeout(() => {
    clickable = true
  	type === 'food' ? $(`#food${lastFood}`)[0].click() : '';
    type === 'machine' ? $(`#machine${lastMachine}`)[0].click() : ''
    type === 'filter' ? $(`#filter${lastFilter}`)[0].click() : ''
    setTimeout(() => {
    	if(remaining === 1) {
        console.log('done')
        checkSpin()
    	}
   		clickable = false
    },600)
  },200 * i)
}


$('button').click(function(event) {
    event.preventDefault(); 
		var foodSpins = Math.max(Math.floor(30 * Math.random()), 5)
    var filterSpins = Math.max(Math.floor(30 * Math.random()), 5)
    var machineSpins = Math.max(Math.floor(30 * Math.random()), 5)
    var i = 0;
    while( i < foodSpins || i < filterSpins || i < machineSpins){
    	var spinsRemaining = Math.max(foodSpins, filterSpins, machineSpins) - i
      console.log('rem',spinsRemaining)
    	i < foodSpins ? callClick(i, 'food', spinsRemaining) : '';
      i < filterSpins ? callClick(i, 'filter', spinsRemaining) : '';
      i < machineSpins ? callClick(i, 'machine', spinsRemaining) : '';
      i++;
    }
});

//console.log('asdfasdf',$('.box'))

http://jsfiddle.net/15chrjef/v22tx1qj/
