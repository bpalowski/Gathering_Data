$(document).ready(function(){
$("#formOne").submit(function(event){
  var address = $("input#Address_1").val();
  var name = $("input#Name").val();
var together='john';


  $(".address").append('<li>' +name +'</li>'+address );
//  $(".name").append('<li>' +name+'</li>');//
  event.preventDefault();
});
});
