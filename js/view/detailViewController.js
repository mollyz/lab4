//Bug. 跳转

var DetailViewController = function (view,model) {
	//$(document).on('click','#backToSelect',function(){
	//view.backToSelect.on('click',function(){
	view.backToSelect.click(function(){
		model.setPendingID(0);
		$("#searchArea").css('display','block');
		$("#detailView").css('display','none');
	});

	view.confirmDish.click(function(){
		model.setPendingID(0);
		model.addDishToMenu(model.getDetailID());




		$("#searchArea").css('display','block');
		$("#detailView").css('display','none');
	});





}