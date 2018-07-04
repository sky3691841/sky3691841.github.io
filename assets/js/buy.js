//check off specific todos by clicking
$("ul").on("click", "#item", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click",  "#erase", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//create new todo
$("input[type = 'text']").on("keypress", function(event){
	if(event.which === 13) {
		//grab new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li class='todo'><span><i class='fas fa-eraser'></i></span> " + todoText + "</li>")
	}
});

//click on pencil
$("#pencil").click(function(){
	$("input[type = 'text']").fadeToggle();
});

