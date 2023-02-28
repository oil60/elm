<javascript>
  $('#counter').html(0); // Set the initial value

$('#clicker').click(function(){
   var count =  Number($('#counter').html()); // Get the current value
   $('#counter').html(count+1); // Add 1 to the counter
});
