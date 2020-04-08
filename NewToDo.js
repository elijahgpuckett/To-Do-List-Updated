//This Function adds a new list item, also making it a button!
function addListItem() {
    text = $("#addtoList").val();
    $("#todoList").append('<button><li>'+text+'</li></button><br>');
    $("#addtoList").val('');

}
//This makes the "Add" button on the page work
$(function(){
    $("#add").on('click', addListItem);
})

//When this isn't commented out, it will remove listed items once clicked
//Unfortunately I am still having an issue getting this and the next function working together ):

//$("ul").on('click', 'li', function() {
//$(this).remove();
//});

//This adds a strikethrough the text on the listed items
$('li').on('click', function(){
    $(this).css('text-decoration', 'line-through');
    });
