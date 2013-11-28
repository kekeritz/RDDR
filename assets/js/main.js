function init(){
	$(".collapse:not(navbar-collapse)").collapse()
}

onload=function (){
  init();
};

onresize=function (){
  init();
};
