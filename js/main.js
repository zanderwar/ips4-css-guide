$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 280) {
        //clearHeader, not clearheader - caps H
        $("#guideSidebar").addClass("fixedMenu");
    }
	else {
		$("#guideSidebar").removeClass("fixedMenu");
	}
}); 