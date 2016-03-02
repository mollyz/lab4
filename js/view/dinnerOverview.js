var DinnerOverview = function (container, model) {
	this.dinnerAll = container.find("#dinnerAll");
	this.printButton = container.find("#printButton");
	this.printPrice = container.find("#printPrice");
	
	model.addObserver(this);


	this.update=function(obj){
		if(obj=="menuReady"){

			var newDishes = model.getFullMenu();

			var html = "";
	   
			for (i = 0; i < newDishes.length; i++) { 
				html += "<div class='floating-box2 RightAlign' ><div><img class='borderAll' src='./images/"+newDishes[i].image
						+"' alt='"+newDishes[i].name+"'></div><div class='textMiddle'>"+newDishes[i].name
						+"</div><div class='RightAlign' style='padding: 5px;'>"+model.getPriceForDish(newDishes[i].id)+" SEK</div></div>"; 
	       //console.log("TotalPrice for"+newDishes[i].name+"="+model.getPriceForDish(newDishes[i]));               
	    	}
		
			this.dinnerAll.html(html);
			this.printPrice.html("<h3>Total:</h3><h3>"+model.getTotalMenuPrice()+" SEK</h3>");
				
		}
	}


	
   
    
}
