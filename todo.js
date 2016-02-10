
// event handler
$(document).ready(function() {
  $(".ov").on("click", addItem);
  // $(".link-delete").on("click", deleteItem);
  $("ol").on("click", ".link-delete", deleteItem);
});

// This function prompts the user for a to-do item
// and then appends it to the existing list of items.
// It also updates the counter at the top of the screen.
function addItem() {
  var text = window.prompt("New member");
  var delete_link = '<a href="#" class="link-delete">(Delete)</a>'

  $("ol").append("<li>" + text + " " + delete_link + "</li>");
  var numItems = $("li").length;

  // Challenge: Differentiate between 1 item vs. more items
  if (numItems == 1) {
    $(".total").html(numItems + " member");
  }
  else {
    $(".total").html(numItems + " members");
  }
}

// This function deletes an item from the list.
// The "event" parameter holds information on which
// item the user wishes to remove.
function deleteItem(event) {
  console.info(event);
  // $(event.target).remove();
  $(event.target).parent().fadeOut();

}
