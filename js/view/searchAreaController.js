
var SearchAreaController = function (view, model) {
	//$(document).on('click','#searchButton',function(){

//Bug关于页面被强制刷新了
	view.searchButton.on('click',function(){
		var Filter=view.inputKeyword.val();
		model.setSearchFilter(Filter);
		
	});
	view.courseType.change(function(){
		var Type=view.courseType.find(':selected').val();
		model.setSearchType(Type);
		
	});
	
	
	
	$(view.showList).on('click','img',function(){
		 var imgID=$(this).attr("id");
		 console.log("imgID= "+imgID);
		 model.setDetailID(imgID);
		 model.setPendingID(imgID);
		  		$("#searchArea").css('display','none');
		  		$("#detailView").css('display','block');
    });
	
	
}
