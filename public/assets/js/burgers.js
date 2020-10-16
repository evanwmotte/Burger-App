$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("newdevour");
      var newEaten = {
        devoured: newEat
      };
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
      console.log("IT WORKED")
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: 0
      };
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