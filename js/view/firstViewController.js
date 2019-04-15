var FirstViewController = function (view, model) {
	

	view.createButton.click(function(){
		
		$("#hover-div").css('display','none');
  		$("#SecondPage").css('display','block');
  		$("#searchArea").css('display','block');
  		$('body').css('background-image','none');
 	
 	});

}