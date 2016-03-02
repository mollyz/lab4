
var SearchArea = function (container, model) {
	this.searchButton = container.find("#searchButton");
	this.inputKeyword = container.find("#inputKeyword")
	this.courseType = container.find("#courseType");
	this.showList= container.find("#showList");

	model.addObserver(this);

	var Filter = model.getSearchFilter();
		var Type= model.getSearchType();
		//console.log("F="+Filter);
		var myDishes= model.getAllDishes(Type,Filter);
		//console.log(myDishes);
		var html = "";

		for (i = 0; i < myDishes.length; i++) { 
			html += "<div class='floating-box' ><div><img id="+myDishes[i].id+" class='borderAll' src='./images/"+myDishes[i].image
					+"' alt='"+myDishes[i].name+"'></div><div class='textMiddle'>"+myDishes[i].name
					+"</div><div style='padding: 5px;overflow: auto;'>"+myDishes[i].description+"</div></div>";
    	}
    //console.log("function well");	
	this.showList.html(html);


	this.update=function(obj){
		if(obj=="changeOption"){
			var Filter = model.getSearchFilter();
			var Type= model.getSearchType();
			//console.log("F="+Filter);
			var myDishes= model.getAllDishes(Type,Filter);
			//console.log(myDishes);
			var html = "";

			for (i = 0; i < myDishes.length; i++) { 
				html += "<div class='floating-box' ><div><img id="+myDishes[i].id+" class='borderAll' src='./images/"+myDishes[i].image
						+"' alt='"+myDishes[i].name+"'></div><div class='textMiddle'>"+myDishes[i].name
						+"</div><div style='padding: 5px;overflow: auto;'>"+myDishes[i].description+"</div></div>";
	    	}
	    //console.log("function well");	
		this.showList.html(html);

		}
	};
	


	
 	
}
