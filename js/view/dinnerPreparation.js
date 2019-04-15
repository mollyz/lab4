var DinnerPreparation = function (container, model) {
	this.dinnerPre=container.find("#dinnerPre");

	model.addObserver(this);

	this.update=function(obj){
		if(obj=="preparationReady"){
			var html='';
			var newDishes = model.getFullMenu();
			for (i = 0; i < newDishes.length; i++) { 
				html+="<div class='row padding' ><div class='col-md-2'><img class='borderAll' src='./images/"+newDishes[i].image
						+"' alt='"+newDishes[i].name+"'></div><div class='col-md-4'><h2>"
						+newDishes[i].name+"</h2><p>"+newDishes[i].description+"</p></div><div class='col-md-6'><h4>Preparation</h4><p>jldjlf jljelj ljbekl jla;lheoim n kaldn khsnekj "
						+"bsikebjghabjg ,hgdn len lsneu nknalble kjndbkie nks ksjh tmecje j sem j mslem ks. jdjldjlf jljelj ljbekl jla;lheoim n kaldn khsnekj bsikebjghabjg ,hgdn len lsneu nknalble kjn</p><p>jldjlf jljelj ljbekl jla;lheoim n kaldn khsnekj bsikebjghabjg ,hgdn len lsneu nknalble kjndbkie nks ksjh tmecje j sem j mslem ks. jdjldjlf jljelj ljbekl jla;lheoim n kaldn khsnekj bsikebjghabjg ,hgdn len lsneu nknalble kjn</p>"
						+"<p>jldjlf jljelj ljbekl jla;lheoim n kaldn khsnekj bsikebjghabjg ,hgdn len lsneu nknalble kjndbkie nks ksjh tmecje j sem j mslem ks. jdjldjlf jljelj ljbekl jla;lheoim n kaldn khsnekj bsikebjghabjg ,hgdn len lsneu nknalble kjn</p></div></div>";
			}
		this.dinnerPre.html(html);				
		}


	}
   
    
}
