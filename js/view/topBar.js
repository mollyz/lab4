var TopBar= function(container, model) {
	
	this.totalNum = container.find("#totalNum");
	this.editMenu = container.find("#editMenu");

	model.addObserver(this);

	this.totalNum.html("<h2>My Dinner: "+model.getNumberOfGuests()+" People.</h2>");

	this.update=function(obj){
		if(obj=="num"){
			this.totalNum.html("<h2>My Dinner: "+model.getNumberOfGuests()+" People.</h2>");
		}

	}
	
}