
$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var firstView = new FirstView($("#hover-div"), model);
	var firstViewController = new FirstViewController(firstView,model);
	
	var sideNavView = new SideNavView($("#sideNavView"), model);
	var sideNavViewController = new SideNavViewController(sideNavView,model);
	var searchArea = new SearchArea($("#searchArea"), model);
	var searchAreaController = new SearchAreaController(searchArea,model);
	var detailView = new DetailView($("#detailView"), model);
	var detailViewController = new DetailViewController(detailView,model);
	var topBar= new TopBar($("#topBar"),model);
	var topBarController= new TopBarController(topBar,model);
	var dinnerOverview= new DinnerOverview($("#dinnerOverview"),model);
	var dinnerOverviewController = new DinnerOverviewController(dinnerOverview,model);
 	var dinnerPreparation= new DinnerPreparation($("#dinnerPreparation"),model);
	var dinnerPreparationController = new DinnerPreparationController(dinnerPreparation,model);
 	

});