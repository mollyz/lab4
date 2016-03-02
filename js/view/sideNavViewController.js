//ExampleView Object constructor
var SideNavViewController = function (view, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	view.plusButton.click(function(){

	 	model.setNumberOfGuests(model.getNumberOfGuests() + 1);

	});
	 
	view.minusButton.click(function(){

	 	model.setNumberOfGuests(model.getNumberOfGuests() - 1);

	});

	view.confirmDinnerButton.click(function(){
		model.setMenuReady();
		model.setPendingID(0);
		$("#SecondPage").css('display','none');
		$("#topBar").css('display','block');
		$("#dinnerOverview").css('display','block');
		
	});

	view.PriceTable.on('click','img',function(){
		 var removeID=$(this).attr("id");
		 console.log("removeID= "+removeID);
		 model.removeDishFromMenu(removeID);

    });
}



