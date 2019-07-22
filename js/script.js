// script.js

$(() => {
  $("button").click(() => $("#box").fadeOut(1000));

  /* --------------------
       jQUERY EVENT METHODS
       -------------------- */

  $("#box").click(() => alert("you just clicked the box"));

  $("input").blur(() => {
    if ($(this).val() == "") {
      $(this).css("border", "solid 1px red");
      $("#box").text("Forgot to add text?");
    }
  });

  $("input").keydown(() => {
    if ($(this).val() !== "") {
      $(this).css("border", "solid 1px #777");
      $("#box").text("Thanks for that!");
    }
  });

  $("#box").hover(
    () => $(this).text("you hovered in!"),
    () => $(this).text("you hovered out!")
  );

  // Click the GO button
  $("#go").click(() => {
    // build a function that checks to see if a car has won the race
    checkIfComplete = () => {
      if (isComplete == false) {
        isComplete = true;
      } else {
        place = "second";
      }
    };

    // get the width of the cars
    const carWidth = $("#car1").width();

    // get the width of the racetrack
    const raceTrackWidth = $(window).width() - carWidth;

    // generate a random # between 1 and 5000

    const raceTime1 = Math.floor(Math.random() * 5000 + 1);
    const raceTime2 = Math.floor(Math.random() * 5000 + 1);

    // set a flag variable to FALSE by default
    let isComplete = false;

    // set a flag variable to FIRST by default
    let place = "first";

    // animate car 1
    $("#car1").animate(
      {
        // move the car width of the racetrack
        left: raceTrackWidth
      },
      raceTime1,
      () => {
        // animation is complete

        // run a function
        checkIfComplete();

        // give some text feedback in the race info box
        $("#raceInfo1 span").text(
          "Finished in " +
            place +
            " place and clocked in at " +
            raceTime1 +
            " milliseconds!"
        );
      }
    );

    // animate car 2
    $("#car2").animate(
      {
        // move the car width of the racetrack
        left: raceTrackWidth
      },
      raceTime2,
      () => {
        // animation is complete

        // run a function
        checkIfComplete();

        // give some text feedback in the race info box
        $("#raceInfo2 span").text(
          "Finished in " +
            place +
            " place and clocked in at " +
            raceTime2 +
            " milliseconds!"
        );
      }
    );
  });

  // reset the race
  $("#reset").click(() => {
    $(".car").css("left", "0");
    $(".raceInfo span").text("");
  });
});
