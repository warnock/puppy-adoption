var i = 1;                     //  set your counter to 1

function myLoop () {           //  create a loop function
   setTimeout(function () {
      var day = i;                          //  call a 3s setTimeout when the loop is called
      console.log("Day: " + i);
      var rollNumber = Math.random()*(100 - 1) + 1;
      if (rollNumber < 15) {
        alert("DISEASE");
      }
                                  //  your code here
      i++;                     //  increment the counter
      if (i < 10) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another
      }                        //  ..  setTimeout()
   }, 1500)
}

myLoop();
