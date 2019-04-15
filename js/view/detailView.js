var DetailView = function (container, model) {
	this.backToSelect=container.find("#backToSelect");
	this.confirmDish=container.find("#confirmDish");
	

	model.addObserver(this);

	this.update=function(obj){
		if(obj=="num" || obj=="detail"){
			var DetailID=model.getDetailID();
			console.log("DetailID+"+DetailID);
			if(DetailID!=0){
				var detailDish= model.getDish(DetailID);
				console.log("detailDish+"+detailDish);
				var dishIngredients=detailDish.ingredients;
				var totalPrice=model.getPriceForDish(DetailID);
		
				var numberOfGuests=model.getNumberOfGuests();
		
				var ingredientHtml = "";
				var dishHtml="";
		
				for (i = 0; i < dishIngredients.length; i++) { 
				ingredientHtml += "<div class='col-md-2'>"+dishIngredients[i].quantity*numberOfGuests+" "+dishIngredients[i].unit
									+"</div><div class='col-md-6'>"+dishIngredients[i].name
									+"</div><div class='col-md-2'>SEK</div><div class='col-md-2'>"
									+dishIngredients[i].price*numberOfGuests+"</div>";
		
		   		}
		   		dishHtml="<h2>"+detailDish.name+"</h2><img src='./images/"
		   			+detailDish.image+"'><p>"
		   			+detailDish.description
		   			+"</p><br>";


			    $("#dishPortion").html("INGREDIENTS FOR "+numberOfGuests+"  People");
			    $("#detailDish").html(dishHtml);
				$("#ingredientTable").html(ingredientHtml);
				$("#ingredientTotal").html(totalPrice*numberOfGuests);	
			}
		}
	}

	
	
}
