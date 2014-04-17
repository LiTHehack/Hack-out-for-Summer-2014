$(document).ready(function(){
	$('.smoothscroll').smoothScroll();

});


$('#eventguide a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
  console.log(e);
})

/*$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  var href = $(e.target).attr("href");


})*/