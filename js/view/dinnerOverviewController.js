var DinnerOverviewController = function (view, model) {
	view.printButton.click(function(){

		model.setPreparationReady();

		$("#dinnerOverview").css('display','none');
		$("#dinnerPreparation").css('display','block');

	});
}

