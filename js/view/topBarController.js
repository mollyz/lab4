var TopBarController= function(view, model) {
	view.editMenu.click(function(){
		
		$("#topBar").css('display','none');
		$("#dinnerOverview").css('display','none');
		$("#dinnerPreparation").css('display','none');
	 	$("#SecondPage").css('display','block');
		

	});
}