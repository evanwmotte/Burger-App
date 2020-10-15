$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("newdevour");
  
      var newEaten = {
        devoured: newEat
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEaten
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
    });
  });