 /*********************************
  **ISO standard value suggession**
  *********************************/

 /**
  *Function to predict ISO standard value
  *ISO standard value suggession for Piston,
   Rod Diameter and Stroke
  */

 function closest(num, arr) {
     var curr = arr[0];
     var diff = Math.abs(num - curr);
     for (var val = 0; val < arr.length; val++) {
         // Changes By Prakhar
         if (newdiff == 0) {
             return 0;
         }
         // End Changes By Prakhar
         var newdiff = Math.abs(num - arr[val]);
         if (newdiff <= diff) {
             diff = newdiff;
             curr = arr[val];
         }
     }
     if (newdiff == 0) {
         return 0;
     }
     return curr;
 }


 /**
  *ISO standard value suggession for 
   Piston Diameter
  *Metric System 
  *Only for mm unit
  */

 $(document).ready(function() {
     $('#piston').keyup(function() {
         if (measurementUnitFlag.toLowerCase() == "metric") {
             if ($('#unit1').val() == 'mm') {
                 array1 = [8, 10, 12, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125, 160, 200, 250, 320, 400, 500];
                 var piston_dia = document.getElementById("piston").value - 0;
                 var sugg1 = (closest(piston_dia, array1));

                 if (sugg1 != 0 && piston_dia > 0 && piston_dia < 9999.9999) {
                     document.getElementById("innerbox").innerHTML = msg_suggestion1 + " " + parseFloat($('#piston').val()).toFixed(4) + " " + msg_suggestion2 + "" + sugg1 + " mm" + msg_suggestion10;
                     $('#box').show();
                     $('#box2').hide();
                     $('#box3').hide();
                 } else if (piston_dia == 0 || piston_dia > 9999.9999) {
                     $('#box').hide();
                     document.getElementById("innerbox").innerHTML = "";
                 } else if (sugg1 == 0) {
                     document.getElementById("innerbox").innerHTML = msg_suggestion1 + " " + parseFloat($('#piston').val()).toFixed(4) + " " + msg_suggestion4;
                     $('#box').show();
                     $('#box2').hide();
                     $('#box3').hide();
                 }

             }
         } // Changes By Prakhar
         else {
             if ($('#unit1').val() == 'in') {
                 array3 = [0.75, 1, 1.125, 1.5, 2, 2.5, 3.25, 4, 5, 6, 7, 8, 10, 12, 14];
                 var piston_dia = document.getElementById("piston").value - 0;
                 var sugg3 = (closest(piston_dia, array3));
                 if (sugg3 != 0 && piston_dia > 0 && piston_dia <= 9999.9999) {
                     document.getElementById("innerbox").innerHTML = msg_suggestion1 + " " + parseFloat($('#piston').val()).toFixed(4) + " " + msg_suggestion5 + sugg3 + " in" + msg_suggestion10;
                     $('#box').show();
                     $('#box2').hide();
                     $('#box3').hide();
                 } else if (piston_dia == 0 || piston_dia > 9999.9999) {
                     $('#box').hide();
                     document.getElementById("innerbox").innerHTML = "";
                 } else if (sugg3 == 0) {
                     document.getElementById("innerbox").innerHTML = msg_suggestion10 + " " + parseFloat($('#piston').val()).toFixed(4) + " " + msg_suggestion11;
                     $('#box').show();
                     $('#box2').hide();
                     $('#box3').hide();
                 }
             } else {
                 $('#box').hide();
             }
         }
         // End Changes By Prakhar
     });

     $('#unit1').change(function() {

         if (measurementUnitFlag.toLowerCase() == "metric") {
             if ($('#unit1').val() == 'mm') {
                 array1 = [8, 10, 12, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125, 160, 200, 250, 320, 400, 500];
                 var piston_dia = document.getElementById("piston").value - 0;
                 var sugg1 = (closest(piston_dia, array1));

                 if (sugg1 != 0 && piston_dia > 0 && piston_dia <= 9999.9999) {
                     document.getElementById("innerbox").innerHTML = msg_suggestion1 + " " + parseFloat($('#piston').val()).toFixed(4) + " " + msg_suggestion7 + sugg1 + " mm" + msg_suggestion10;
                     $('#box').show();
                     $('#box2').hide();
                     $('#box3').hide();
                 } else if (piston_dia == 0 || piston_dia > 9999.9999) {
                     $('#box').hide();
                     document.getElementById("innerbox").innerHTML = "";
                 } else if (sugg1 == 0) {
                     document.getElementById("innerbox").innerHTML = msg_suggestion1 + " " + parseFloat($('#piston').val()).toFixed(4) + " " + msg_suggestion4;
                     $('#box').show();
                     $('#box2').hide();
                     $('#box3').hide();
                 }
             } else {
                 $('#box').hide();
             }
         } //Changes By Prakhar
         //Changes By Aman
         else {
             if ($('#unit1').val() == 'in') {
                 array3 = [0.75, 1, 1.125, 1.5, 2, 2.5, 3.25, 4, 5, 6, 7, 8, 10, 12, 14];
                 var piston_dia = document.getElementById("piston").value - 0;
                 var sugg3 = (closest(piston_dia, array3));

                 if (sugg3 != 0 && piston_dia > 0 && piston_dia <= 9999.9999) {
                     document.getElementById("innerbox").innerHTML = msg_suggestion1 + " " + parseFloat($('#piston').val()).toFixed(4) + " " + msg_suggestion5 + sugg3 + " in" + msg_suggestion10;
                     $('#box').show();
                     $('#box2').hide();
                     $('#box3').hide();
                 } else if (piston_dia == 0 || piston_dia > 9999.9999) {
                     $('#box').hide();
                     document.getElementById("innerbox").innerHTML = "";
                 } else if (sugg3 == 0) {
                     document.getElementById("innerbox").innerHTML = msg_suggestion10 + parseFloat($('#piston').val()).toFixed(4) + " " + msg_suggestion11;
                     $('#box').show();
                     $('#box2').hide();
                     $('#box3').hide();
                 }
             } else {
                 $('#box').hide();
             }
         }

         // End Changes BY Prakhar
     });

     $('#piston').blur(function() {
         $('#box').hide();
     });

 });


 /**
   *ISO standard value suggession
    for Rod Diameter
   *Metric System
   *Only for mm
   */

 $(document).ready(function() {
     $('#rod').keyup(function() {
         if (measurementUnitFlag.toLowerCase() == "metric") {
             if ($('#unit2').val() == 'mm') {
                 array2 = [4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 25, 28, 30, 32, 36, 40, 45, 50, 56, 60, 63, 70, 80, 90, 100, 110, 120, 125, 140, 160, 180, 200, 220, 250, 280, 320, 360, 400, 450];
                 var rod_dia = document.getElementById("rod").value - 0;
                 var sugg2 = (closest(rod_dia, array2));

                 if (sugg2 != 0 && rod_dia > 0 && rod_dia <= 9999.9999) {
                     document.getElementById("innerbox2").innerHTML = msg_suggestion1 + " " + parseFloat($('#rod').val()).toFixed(4) + " " + msg_suggestion7 + sugg2 + " mm" + msg_suggestion10;
                     $('#box2').show();
                     $('#box').hide();
                     $('#box3').hide();
                 } else if (rod_dia == 0 || rod_dia > 9999.9999) {
                     $('#box2').hide();
                     document.getElementById("innerbox2").innerHTML = "";
                 } else if (sugg2 == 0) {
                     document.getElementById("innerbox2").innerHTML = msg_suggestion1 + " " + parseFloat($('#rod').val()).toFixed(4) + " " + msg_suggestion4;
                     $('#box2').show();
                     $('#box').hide();
                     $('#box3').hide();
                 }
             }
         } //Changes BY Prakhar
         else {
             if ($('#unit2').val() == 'in') {
                 array4 = [0.25, 0.3125, 0.375, 0.5, 0.625, 1, 1.375, 1.75, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 7, 8.5, 10];
                 var rod_dia = document.getElementById("rod").value - 0;
                 var sugg4 = (closest(rod_dia, array4));

                 if (sugg4 != 0 && rod_dia > 0 && rod_dia <= 9999.9999) {
                     document.getElementById("innerbox2").innerHTML = msg_suggestion1 + " " + parseFloat($('#rod').val()).toFixed(4) + " " + msg_suggestion5 + sugg4 + " in" + msg_suggestion10;
                     $('#box2').show();
                     $('#box').hide();
                     $('#box3').hide();
                 } else if (rod_dia == 0 || rod_dia > 9999.9999) {
                     $('#box2').hide();
                     document.getElementById("innerbox2").innerHTML = "";
                 } else if (sugg4 == 0) {
                     document.getElementById("innerbox2").innerHTML = msg_suggestion10 + " " + parseFloat($('#rod').val()).toFixed(4) + " " + msg_suggestion11;
                     $('#box2').show();
                     $('#box').hide();
                     $('#box3').hide();
                 }
             } else {
                 $('#box2').hide();
             }
             // End Changes BY Prakhar
         }
     });

     $('#unit2').change(function() {

         if (measurementUnitFlag.toLowerCase() == "metric") {
             if (($('#unit2').val() == 'mm')) {
                 array2 = [4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 25, 28, 30, 32, 36, 40, 45, 50, 56, 60, 63, 70, 80, 90, 100, 110, 120, 125, 140, 160, 180, 200, 220, 250, 280, 320, 360, 400, 450];
                 var rod_dia = document.getElementById("rod").value - 0;
                 var sugg2 = (closest(rod_dia, array2));

                 if (sugg2 != 0 && rod_dia > 0 && rod_dia <= 9999.9999) {
                     document.getElementById("innerbox2").innerHTML = msg_suggestion1 + " " + parseFloat($('#rod').val()).toFixed(4) + " " + msg_suggestion7 + sugg2 + " mm" + msg_suggestion10;
                     $('#box2').show();
                     $('#box3').hide();
                     $('#box').hide();
                 } else if (rod_dia == 0 || rod_dia > 9999.9999) {
                     $('#box2').hide();
                     document.getElementById("innerbox2").innerHTML = "";
                 } else if (sugg2 == 0) {
                     document.getElementById("innerbox2").innerHTML = msg_suggestion1 + " " + parseFloat($('#rod').val()).toFixed(4) + " " + msg_suggestion4;
                     $('#box2').show();
                     $('#box3').hide();
                     $('#box').hide();
                 }
             } else {
                 $('#box2').hide();
             }
         } // End Changes BY Prakhar
         else {
             if ($('#unit2').val() == 'in') {
                 //$('#rod').keyup(function()
                 //{   
                 array4 = [0.25, 0.3125, 0.375, 0.5, 0.625, 1, 1.375, 1.75, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 7, 8.5, 10];
                 var rod_dia = document.getElementById("rod").value - 0;
                 //var rod_dia3=parseFloat($('#rod').val()).toFixed(4);
                 var sugg4 = (closest(rod_dia, array4));

                 if (rod_dia > 0 && rod_dia <= 9999.9999 && sugg4 != 0) {
                     document.getElementById("innerbox2").innerHTML = msg_suggestion1 + " " + parseFloat($('#rod').val()).toFixed(4) + " " + msg_suggestion5 + sugg4 + " in" + msg_suggestion10;
                     $('#box2').show();
                 } else if (rod_dia == 0 || rod_dia > 9999.9999) {
                     $('#box2').hide();
                     document.getElementById("innerbox2").innerHTML = "";
                 } else if (sugg4 == 0) {
                     document.getElementById("innerbox2").innerHTML = msg_suggestion1 + " " + parseFloat($('#rod').val()).toFixed(4) + " " + msg_suggestion6;
                     $('#box2').show();
                     $('#box').hide();
                     $('#box3').hide();
                 }

             } else {
                 $('#box2').hide();
             }
         }
     });


     /**
      *ISO standard value suggession
       for stroke
      *Metric System
      *Only for mm
      */

     $('#stroke').keyup(function() {
         if (measurementUnitFlag.toLowerCase() == "metric") {
             if ($('#unit3').val() == 'mm') {
                 array5 = [25, 50, 80, 100, 125, 160, 200, 250, 320, 400, 500];
                 var stroke = document.getElementById("stroke").value - 0;
                 var sugg5 = (closest(stroke, array5));

                 if (sugg5 != 0 && stroke > 0 && stroke <= 9999.9999) {
                     document.getElementById("innerbox3").innerHTML = msg_suggestion9 + " " + parseFloat($('#stroke').val()).toFixed(4) + " " + msg_suggestion2 + sugg5 + " mm" + msg_suggestion10;
                     $('#box3').show();
                     $('#box2').hide();
                     $('#box').hide();
                 } else if (stroke == 0 || stroke > 9999.9999) {
                     $('#box3').hide();
                     document.getElementById("innerbox3").innerHTML = "";
                 } else if (sugg5 == 0) {
                     document.getElementById("innerbox3").innerHTML = msg_suggestion9 + " " + parseFloat($('#stroke').val()).toFixed(4) + " " + msg_suggestion8;
                     $('#box3').show();
                     $('#box2').hide();
                     $('#box').hide();
                 }
             } else {
                 $('#box3').hide();
             }
         }
     });

     $('#unit3').change(function() {

         if (measurementUnitFlag.toLowerCase() == "metric") {
             if ($('#unit3').val() == 'mm') {
                 array5 = [25, 50, 80, 100, 125, 160, 200, 250, 320, 400, 500];
                 var stroke = document.getElementById("stroke").value - 0;
                 var sugg5 = (closest(stroke, array5));

                 if (sugg5 != 0 && stroke > 0 && stroke <= 9999.9999) {
                     document.getElementById("innerbox3").innerHTML = msg_suggestion9 + " " + parseFloat($('#stroke').val()).toFixed(4) + " " + msg_suggestion2 + sugg5 + " mm" + msg_suggestion10;
                     $('#box3').show();
                     $('#box2').hide();
                     $('#box').hide();
                 } else if (stroke == 0 || stroke > 9999.9999) {
                     $('#box3').hide();
                     document.getElementById("innerbox3").innerHTML = "";
                 } else if (sugg5 == 0) {
                     document.getElementById("innerbox3").innerHTML = msg_suggestion9 + " " + parseFloat($('#stroke').val()).toFixed(4) + " " + msg_suggestion8;
                     $('#box3').show();
                     $('#box2').hide();
                     $('#box').hide();
                 }
                 //});
             } else {
                 $('#box3').hide();
             }
         }
     });


     $('#rod').blur(function() {
         $('#box2').hide();

     });

     $('#stroke').blur(function() {
         $('#box3').hide();

     });

 });
 /**
  *ISO standard value suggession
   for Stroke
  *Imperial system
  *Only for in
  */



 /**
  *Event for closing message boxes
  */
 $(document).ready(function() {

     $('#crossIcon').click(function() {
         $('#box').hide();
     });
     $('#crossIcon2').click(function() {
         $('#box2').hide();
     });
     $('#crossIcon3').click(function() {
         $('#box3').hide();
     });

 });

 $(document).ready(function() {
     $('#piston').focus(function() {
         //$('#box').hide();
         $('#box2').hide();
         $('#box3').hide();
     });
     $('#rod').focus(function() {
         $('#box').hide();
         //$('#box2').hide();
         $('#box3').hide();
     });
     $('#stroke').focus(function() {
         $('#box').hide();
         $('#box2').hide();
         //$('#box3').hide();
     });
     $('#preassure').focus(function() {
         $('#box').hide();
         $('#box2').hide();
         $('#box3').hide();
     });

 });