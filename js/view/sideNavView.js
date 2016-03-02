//ExampleView Object constructor  OK
var SideNavView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
 	this.minusButton = container.find("#minusGuest");
 	this.confirmDinnerButton = container.find("#confirmDinner");

	this.PriceTable = container.find("#PriceTable");

	model.addObserver(this);
	





//改变人数
 	this.numberOfGuests.html(model.getNumberOfGuests());


			//输出标题
			var html="";
			html+="<div class='row' id='Heading'><div class='col-sm-7'>Name:</div><div class='col-sm-4'>Cost:</div></div>";


	 		
	 		//得出菜单
			var menuDish= model.getFullMenu();
			
			//输出菜单
			menuDish.forEach(function(item,index){
				
			  	var priceForSingle= model.getPriceForDish(item.id);
			  	
			  	var priceForAllPeople=priceForSingle*model.getNumberOfGuests();
			  	html+="<div class='row'><div class='col-sm-7'>"+item.name+"</div><div class='col-sm-3'>"+priceForAllPeople +"</div><div class='col-sm-1'><img id='"+item.id+"'src='remove.png'></div></div>";

			});


			var pendingID=model.getPendingID();
			html+="<div class='row'><div class='col-sm-7'>Pending</div>";

			if(pendingID!=0){
				var pendingDish=model.getDish(pendingID);
				var priceForPending= model.getPriceForDish(pendingID);
				var priceForPendingAll=priceForPending*model.getNumberOfGuests();
			
				html+="<div class='col-sm-3'>"+priceForPendingAll+"</div><div class='col-sm-1'></div></div>";
				var totalPriceForMenu=model.getTotalMenuPrice()+priceForPendingAll;
				
			}else{
				html+="<div class='col-sm-3'>0</div><div class='col-sm-1'></div></div>";
				var totalPriceForMenu=model.getTotalMenuPrice();
			}
			

			
		
			//输出总价 
			html+="<div class='row'><div class='col-sm-7'>"+"Total:"+"</div><div class='col-sm-4' > "+totalPriceForMenu+" SEK</div></div>";
			
			this.PriceTable.html(html);





	this.update= function(obj){
		//改变人数
 		this.numberOfGuests.html(model.getNumberOfGuests());
 		if(obj=="num"||obj=="dishChange" ||obj=="pendingChange"){
			//输出标题
			var html="";

			html+="<div class='row' id='Heading'><div class='col-sm-7'>Name:</div><div class='col-sm-4'>Cost:</div></div>";


	 		
	 		//得出菜单
			var menuDish= model.getFullMenu();
			
			//输出菜单
			menuDish.forEach(function(item,index){
				
			  	var priceForSingle= model.getPriceForDish(item.id);
			  	
			  	var priceForAllPeople=priceForSingle*model.getNumberOfGuests();

			  	html+="<div class='row'><div class='col-sm-7'>"+item.name+"</div><div class='col-sm-3'>"+priceForAllPeople +"</div><div class='col-sm-1'><img id='"+item.id+"'src='remove.png'></div></div>";

			});

			var pendingID=model.getPendingID();

			html+="<div class='row'><div class='col-sm-7'>Pending</div>";

			if(pendingID!=0){
				var pendingDish=model.getDish(pendingID);
				var priceForPending= model.getPriceForDish(pendingID);
				var priceForPendingAll=priceForPending*model.getNumberOfGuests();
			

				html+="<div class='col-sm-3'>"+priceForPendingAll+"</div><div class='col-sm-1'></div></div>";
				var totalPriceForMenu=model.getTotalMenuPrice()+priceForPendingAll;
				
			}else{
				html+="<div class='col-sm-3'>0</div><div class='col-sm-1'></div></div>";
alPriceForMenu=model.getTotalMenuPrice();
				}
			

			
		
			//输出总价 

			html+="<div class='row'><div class='col-sm-7'>"+"Total:"+"</div><div class='col-sm-4'> "+totalPriceForMenu+" SEK</div></div>";

			
			this.PriceTable.html(html);

 		}


		
 				
		
 	}
 	
	
 	
 }




