/**Functions to change dropdown sub units on radio button selection**/


/**Unit change for Piston/Bore Diameter,Rod Diameter and Stroke**/

function toggleMeasurement(type) {
    /*console.log("measurementUnitFlag.toLowerCase()",measurementUnitFlag.toLowerCase());*/
    if (checkIfEmailBoxIsOpen() == true) {
        return;
    }
    flagForNotChangingMeasurementFields = true;
    if (type == "metric" && measurementUnitFlag.toLowerCase() == "metric") {
        //dont do anything
        flagForNotChangingMeasurementFields = false;
    } else if (type == "imperial" && measurementUnitFlag.toLowerCase() == "imperial") {
        //dont do anything
        flagForNotChangingMeasurementFields = false;
    } else if (type == "metric" && measurementUnitFlag.toLowerCase() == "imperial") {
        measurementUnitFlag = "metric";
        if ($(".mlefty").hasClass("measurementSelectedBtn")) {
            $(".mlefty").removeClass("measurementSelectedBtn");
            $(".mlefty").addClass("measurementNonSelectedBtn");
        } else {
            $(".mlefty").removeClass("measurementNonSelectedBtn");
            $(".mlefty").addClass("measurementSelectedBtn");
        }
        if ($(".irighty").hasClass("measurementSelectedBtn")) {
            $(".irighty").removeClass("measurementSelectedBtn");
            $(".irighty").addClass("measurementNonSelectedBtn");
        } else {
            $(".irighty").removeClass("measurementNonSelectedBtn");
            $(".irighty").addClass("measurementSelectedBtn");
        }
    } else if (type == "imperial" && measurementUnitFlag.toLowerCase() == "metric") {
        measurementUnitFlag = "imperial";
        if ($(".mlefty").hasClass("measurementSelectedBtn")) {
            $(".mlefty").removeClass("measurementSelectedBtn");
            $(".mlefty").addClass("measurementNonSelectedBtn");
        } else {
            $(".mlefty").removeClass("measurementNonSelectedBtn");
            $(".mlefty").addClass("measurementSelectedBtn");
        }
        if ($(".irighty").hasClass("measurementSelectedBtn")) {
            $(".irighty").removeClass("measurementSelectedBtn");
            $(".irighty").addClass("measurementNonSelectedBtn");
        } else {
            $(".irighty").removeClass("measurementNonSelectedBtn");
            $(".irighty").addClass("measurementSelectedBtn");
        }
    }
    changeImageAfterUnitChange();
    $('#measurementSelectionMetric').prop("disabled", false);
    $("#measurementSelectionImperial").prop("disabled", false);
    $('#measurementSelectionMetric').removeAttr("disabled");
    $('#measurementSelectionImperial').removeAttr("disabled");;
}

function changeImageAfterUnitChange() {
    var currentScreenImage = getImageBasedOnCurrentScreen();
    if (currentScreen == 2) {
        //m
        document.images["mainPicMotor"].src = currentScreenImage;
    } else if (currentScreen == 3) {
        //p
        document.images["mainPicPump"].src = currentScreenImage;
    } else if (currentScreen == 4) {
        //pd
        document.images["mainPicPressureDrop"].src = currentScreenImage;
    } else if (currentScreen == 5) {
        //pip
        document.images["mainPicPiping"].src = currentScreenImage;
    }
}

$(document).ready(function() {
    var flag;
    var val = measurementUnitFlag.toLowerCase();

    if (measurementUnitFlag.toLowerCase() == "metric") {
        /**unit change for Piston Diameter**/
        $('#unit1 option:contains("in")').remove();
        $('#unit1 option:contains("ft")').remove();

        /**unit change for Rod Diameter**/
        $('#unit2 option:contains("in")').remove();
        $('#unit2 option:contains("ft")').remove();

        /**unit change for Stroke**/
        $('#unit3 option:contains("in")').remove();
        $('#unit3 option:contains("ft")').remove();



        /**unit change for Piston Diameter**/
        $('#unit1').sSelect();


        if ($('#unit1').children('option').length == 0) {
            $("<option value='mm'>mm</option>").appendTo("#unit1");
            $("<option value='cm'>cm</option>").appendTo("#unit1");
            $("<option value='m'>m</option>").appendTo("#unit1");
        }
        /**unit change for Rod Diameter**/
        $('#unit2').sSelect();
        if ($('#unit2').children('option').length == 0) {
            $("<option value='mm'>mm</option>").appendTo("#unit2");
            $("<option value='cm'>cm</option>").appendTo("#unit2");
            $("<option value='m'>m</option>").appendTo("#unit2");
        }

        /**unit change for Stroke**/
        $('#unit3').sSelect();
        if ($('#unit3').children('option').length == 0) {
            $("<option value='mm'>mm</option>").appendTo("#unit3");
            $("<option value='cm'>cm</option>").appendTo("#unit3");
            $("<option value='m'>m</option>").appendTo("#unit3");
        }
        flag = false;
    }


    $(".unit_selection_new").click(function(event) {
        if (flagForNotChangingMeasurementFields == false) {
            return;
        }
        if (measurementUnitFlag.toLowerCase() == "metric") {
            //$(this).attr('disabled', 'disabled');
            $('#imperialRadio').removeAttr('disabled');
            $('#input .newListSelected').remove();
            /**unit change for Piston Diameter**/
            $('#unit1 option:contains("in")').remove();
            $('#unit1 option:contains("ft")').remove();


            /**unit change for Rod Diameter**/
            $('#unit2 option:contains("in")').remove();
            $('#unit2 option:contains("ft")').remove();


            /**unit change for Stroke**/
            $('#unit3 option:contains("in")').remove();
            $('#unit3 option:contains("ft")').remove();

            /**unit change for Piston Diameter**/
            if ($('#unit1').children('option').length == 0) {
                $("<option value='mm'>mm</option>").appendTo("#unit1");
                $("<option value='cm'>cm</option>").appendTo("#unit1");
                $("<option value='m'>m</option>").appendTo("#unit1");
                $('#unit1').sSelect();
                $('#unit1').resetSS();
            }
            /**unit change for Rod Diameter**/
            if ($('#unit2').children('option').length == 0) {
                $("<option value='mm'>mm</option>").appendTo("#unit2");
                $("<option value='cm'>cm</option>").appendTo("#unit2");
                $("<option value='m'>m</option>").appendTo("#unit2");
                $('#unit2').sSelect();
                $('#unit2').resetSS();
            }
            /**unit change for Stroke**/

            if ($('#unit3').children('option').length == 0) {
                $("<option value='mm'>mm</option>").appendTo("#unit3");
                $("<option value='cm'>cm</option>").appendTo("#unit3");
                $("<option value='m'>m</option>").appendTo("#unit3");
                $('#unit3').sSelect();
                $('#unit3').resetSS();
            }
            flag = false;

            document.getElementById("piston").value = "";
            document.getElementById("rod").value = "";
            document.getElementById("stroke").value = "";
            document.getElementById("preassure").value = "";
            document.getElementById("oilflow").value = "";
            document.getElementById("piston_area").value = "";
            document.getElementById("rod_area").value = "";
            document.getElementById("piston_volume").value = "";
            document.getElementById("rod_volume").value = "";
            document.getElementById("piston_force").value = "";
            document.getElementById("rod_force").value = "";
            document.getElementById("piston_time").value = "";
            document.getElementById("rod_time").value = "";
            document.getElementById("piston_velocity").value = "";
            document.getElementById("rod_velocity").value = "";
            document.getElementById("piston_outflow").value = "";
            document.getElementById("rod_outflow").value = "";
            document.getElementById("ratio").value = "";

            document.getElementById("preassure").disabled = false;
            document.getElementById("oilflow").disabled = false;
            document.getElementById("piston_force").disabled = false;
            document.getElementById("rod_force").disabled = false;
            document.getElementById("piston_time").disabled = false;
            document.getElementById("rod_time").disabled = false;
            document.getElementById("piston_velocity").disabled = false;
            document.getElementById("rod_velocity").disabled = false;

            $('#box').hide();
            $('#box2').hide();
            $('#box3').hide();

            $('#preassure,#oilflow,#piston_force,#rod_force,#piston_time,#rod_time,#piston_velocity,#rod_velocity').addClass("reset");
        } else {
            $('#metricRadio').removeAttr('disabled');
            $('#imperialRadio').attr('disabled', 'disabled');
            $('#input .newListSelected').remove();

            /**unit change for Piston Diameter**/
            $('#unit1 option:contains("mm")').remove();
            $('#unit1 option:contains("cm")').remove();
            $('#unit1 option:contains("m")').remove();


            /**unit change for Rod Diamteter**/
            $('#unit2 option:contains("mm")').remove();
            $('#unit2 option:contains("cm")').remove();
            $('#unit2 option:contains("m")').remove();

            /**unit change for Stroke**/
            $('#unit3 option:contains("mm")').remove();
            $('#unit3 option:contains("cm")').remove();
            $('#unit3 option:contains("m")').remove();



            /**unit change for Piston Diameter**/
            if ($('#unit1').children('option').length == 0) {

                $("<option value='in'>in</option>").appendTo("#unit1");
                $("<option value='ft'>ft</option>").appendTo("#unit1");
                $('#unit1').sSelect();
                $('#unit1').resetSS();
            }

            /**unit change for Rod Diameter**/
            if ($('#unit2').children('option').length == 0) {
                $("<option value='in'>in</option>").appendTo("#unit2");
                $("<option value='ft'>ft</option>").appendTo("#unit2");
                $('#unit2').sSelect();
                $('#unit2').resetSS();
            }

            /**unit change for Stroke**/
            if ($('#unit3').children('option').length == 0) {
                $("<option value='in'>in</option>").appendTo("#unit3");
                $("<option value='ft'>ft</option>").appendTo("#unit3");
                $('#unit3').sSelect();
                $('#unit3').resetSS();
            }
            flag = true;

            document.getElementById("piston").value = "";
            document.getElementById("rod").value = "";
            document.getElementById("stroke").value = "";
            document.getElementById("preassure").value = "";
            document.getElementById("oilflow").value = "";
            document.getElementById("piston_area").value = "";
            document.getElementById("rod_area").value = "";
            document.getElementById("piston_volume").value = "";
            document.getElementById("rod_volume").value = "";
            document.getElementById("piston_force").value = "";
            document.getElementById("rod_force").value = "";
            document.getElementById("piston_time").value = "";
            document.getElementById("rod_time").value = "";
            document.getElementById("piston_velocity").value = "";
            document.getElementById("rod_velocity").value = "";
            document.getElementById("piston_outflow").value = "";
            document.getElementById("rod_outflow").value = "";
            document.getElementById("ratio").value = "";

            document.getElementById("preassure").disabled = false;
            document.getElementById("oilflow").disabled = false;
            document.getElementById("piston_force").disabled = false;
            document.getElementById("rod_force").disabled = false;
            document.getElementById("piston_time").disabled = false;
            document.getElementById("rod_time").disabled = false;
            document.getElementById("piston_velocity").disabled = false;
            document.getElementById("rod_velocity").disabled = false;

            $('#box').hide();
            $('#box2').hide();
            $('#box3').hide();

            $('#preassure,#oilflow,#piston_force,#rod_force,#piston_time,#rod_time,#piston_velocity,#rod_velocity').addClass("reset");

        }

        //Changed By Prakhar
        $('#clear').prop("disabled", true);
        $('#copy').prop("disabled", true);
        $('#email').prop("disabled", true);
        $('.centerAlignButton div').removeClass("gradientButton");
        $('.centerAlignButton div').removeClass("resetButton_1");
        $('.centerAlignButton div').addClass("removeGradient");
        // End Changes By Prakhar

        //changes for other DD
        if (currentScreen == 1) {
            //go ahead 
        } else if (currentScreen == 2) {
            //motor
            initMotordd();
        } else if (currentScreen == 3) {
            //pump
            initPumpdd();
        } else if (currentScreen == 4) {
            //pressureDrop
            initPDdd();
        } else if (currentScreen == 5) {
            //piping
            initPipingdd();
        }
    });

});
/**Unit change for Pressure**/

$(document).ready(function() {
    var flag;
    var val = measurementUnitFlag.toLowerCase();

    if (measurementUnitFlag.toLowerCase() == "metric") {

        $('#unit4 option:contains("psi")').remove();

        $('#unit4').sSelect();
        if ($('#unit4').children('option').length == 0) {
            $("<option value='bar'>bar</option>").appendTo("#unit4");
            $("<option value='P'>P</option>").appendTo("#unit4");
            $("<option value='MPa'>MPa</option>").appendTo("#unit4");


        }
        flag = false;
    }
    $(".unit_selection_new").click(function(event) {
        if (flagForNotChangingMeasurementFields == false) {
            return;
        }
        if (measurementUnitFlag.toLowerCase() == "metric") {

            //$(this).attr('disabled', 'disabled');
            $('#imperialRadio').removeAttr('disabled');

            $('#unit4 option:contains("psi")').remove();


            if ($('#unit4').children('option').length == 0) {
                $("<option value='bar'>bar</option>").appendTo("#unit4");
                $("<option value='P'>P</option>").appendTo("#unit4");
                $("<option value='MPa'>MPa</option>").appendTo("#unit4");
                $('#unit4').sSelect();
                $('#unit4').resetSS();

            }
            flag = false;
        } else {

            $('#metricRadio').removeAttr('disabled');
            //$(this).attr('disabled', 'disabled');
            $('#unit4 option:contains("bar")').remove();
            $('#unit4 option:contains("P")').remove();
            $('#unit4 option:contains("MPa")').remove();


            if ($('#unit4').children('option').length == 0) {
                $("<option value='psi'>psi</option>").appendTo("#unit4");
                $('#unit4').sSelect();
                $('#unit4').resetSS();
            }
            flag = true;

        }
    });

});



/**Unit change for Oilflow**/
$(document).ready(function() {
    var flag;
    var val = measurementUnitFlag.toLowerCase();

    if (measurementUnitFlag.toLowerCase() == "metric") {
        $('#unit5 option:contains("gpm")').remove();
        $('#unit5 option[value="in3\\/min"]').remove();
        $('#unit5').sSelect();
        if ($('#unit5').children('option').length == 0) {
            $("<option value='lpm'>lpm</option>").appendTo("#unit5");
            $("<option value='m3/min'>m&sup3;/min</option>").appendTo("#unit5");
            $("<option value='cm3/min'>cm&sup3;/min</option>").appendTo("#unit5");

        }
        flag = false;
    }
    $(".unit_selection_new").click(function(event) {
        if (flagForNotChangingMeasurementFields == false) {
            return;
        }
        if (measurementUnitFlag.toLowerCase() == "metric") {

            //$(this).attr('disabled', 'disabled');
            $('#imperialRadio').removeAttr('disabled');
            $('#unit5 option:contains("gpm")').remove();
            $('#unit5 option[value="in3\\/min"]').remove();
            //alert("Length of outflow dropdown::"+$('#unit5').children('option').length);
            if ($('#unit5').children('option').length == 0) {
                $("<option value='lpm'>lpm</option>").appendTo("#unit5");
                $("<option value='m3/min'>m&sup3;/min</option>").appendTo("#unit5");
                $("<option value='cm3/min'>cm&sup3;/min</option>").appendTo("#unit5");
                $('#unit5').sSelect();
                $('#unit5').resetSS();

            }
            flag = false;
        } else if (measurementUnitFlag.toLowerCase() == "imperial") {
            //$('#metricRadio').removeAttr('disabled');
            $(this).attr('disabled', 'disabled');
            $('#unit5 option:contains("lpm")').remove();
            $('#unit5 option[value="m3\\/min"]').remove();
            $('#unit5 option[value="cm3\\/min"]').remove();


            if ($('#unit5').children('option').length == 0) {
                $("<option value='gpm'>gpm</option>").appendTo("#unit5");
                $("<option value='in3/min'>in&sup3;/min</option>").appendTo("#unit5");
                $('#unit5').sSelect();
                $('#unit5').resetSS();
            }
            flag = true;
        }

    });
});



/**Unit change for Area**/

$(document).ready(function() {
    var flag;
    var val = measurementUnitFlag.toLowerCase();

    if (measurementUnitFlag.toLowerCase() == "metric") {
        $('#unit11 option[value="in2"]').remove();
        $('#unit11 option[value="ft2"]').remove();
        $('#unit11').sSelect();
        if ($('#unit11').children('option').length == 0) {
            $("<option value='cm2'>cm&sup2;</option>").appendTo("#unit11");
            $("<option value='m2'>m&sup2;</option>").appendTo("#unit11");
            $("<option value='mm2'>mm&sup2;</option>").appendTo("#unit11");

        }
        flag = false;
    }
    $(".unit_selection_new").click(function(event) {
        if (flagForNotChangingMeasurementFields == false) {
            return;
        }
        if (measurementUnitFlag.toLowerCase() == "metric") {
            //$(this).attr('disabled', 'disabled');
            $('#imperialRadio').removeAttr('disabled');
            $('#output .newListSelected').remove();
            $('#unit11 option[value="in2"]').remove();
            $('#unit11 option[value="ft2"]').remove();
            //alert("Length of outflow dropdown::"+$('#unit11').children('option').length);
            if ($('#unit11').children('option').length == 0) {
                $("<option value='cm2'>cm&sup2;</option>").appendTo("#unit11");
                $("<option value='m2'>m&sup2;</option>").appendTo("#unit11");
                $("<option value='mm2'>mm&sup2;</option>").appendTo("#unit11");
                $('#unit11').sSelect();
                $('#unit11').resetSS();
            }
            flag = false;
        } else if (measurementUnitFlag.toLowerCase() == "imperial") {

            $('#metricRadio').removeAttr('disabled');
            //$(this).attr('disabled', 'disabled');
            $('#output .newListSelected').remove();
            $('#unit11 option[value="cm2"]').remove();
            $('#unit11 option[value="m2"]').remove();
            $('#unit11 option[value="mm2"]').remove();


            if ($('#unit11').children('option').length == 0) {
                $("<option value='in2'>in&sup2;</option>").appendTo("#unit11");
                $("<option value='ft2'>ft&sup2;</option>").appendTo("#unit11");
                $('#unit11').sSelect();
                $('#unit11').resetSS();
            }
            flag = true;

        }
    });

});



/**Unit change for Volume**/

$(document).ready(function() {
    var flag;
    var val = measurementUnitFlag.toLowerCase();

    if (measurementUnitFlag.toLowerCase() == "metric") {
        $('#unit12 option[value="in3"]').remove();
        $('#unit12 option[value="ft3"]').remove();
        $('#unit12 option[value="gal"]').remove();
        $('#unit12').sSelect();

        $('#unit14').sSelect();
        if ($('#unit12').children('option').length == 0) {
            $("<option value='l'>l</option>").appendTo("#unit12");
            $("<option value='cm3'>cm&sup3;</option>").appendTo("#unit12");
            $("<option value='m3'>m&sup3;</option>").appendTo("#unit12");

        }
        flag = false;
    }
    $(".unit_selection_new").click(function(event) {
        if (flagForNotChangingMeasurementFields == false) {
            return;
        }
        if (measurementUnitFlag.toLowerCase() == "metric") {

            //$(this).attr('disabled', 'disabled');
            $('#imperialRadio').removeAttr('disabled');
            $('#unit12 option[value="in3"]').remove();
            $('#unit12 option[value="ft3"]').remove();
            $('#unit12 option[value="gal"]').remove();
            //alert("Length of outflow dropdown::"+$('#unit12').children('option').length);
            if ($('#unit12').children('option').length == 0) {
                $("<option value='l'>l</option>").appendTo("#unit12");
                $("<option value='cm3'>cm&sup3;</option>").appendTo("#unit12");
                $("<option value='m3'>m&sup3;</option>").appendTo("#unit12");
                $('#unit12').sSelect();
                $('#unit12').resetSS();
                $('#unit14').sSelect();
                $('#unit14').resetSS();
            }
            flag = false;
        } else if (measurementUnitFlag.toLowerCase() == "imperial") {

            $('#metricRadio').removeAttr('disabled');
            //$(this).attr('disabled', 'disabled');
            $('#unit12 option[value="l"]').remove();
            $('#unit12 option[value="cm3"]').remove();
            $('#unit12 option[value="m3"]').remove();

            if ($('#unit12').children('option').length == 0) {
                $("<option value='in3'>in&sup3;</option>").appendTo("#unit12");
                $("<option value='ft3'>ft&sup3;</option>").appendTo("#unit12");
                $("<option value='gal'>gal</option>").appendTo("#unit12");
                $('#unit12').sSelect();
                $('#unit12').resetSS();
                $('#unit14').sSelect();
                $('#unit14').resetSS();
            }
            flag = true;

        }
    });

});



/**Unit change for Force**/

$(document).ready(function() {
    var flag;
    var val = measurementUnitFlag.toLowerCase();

    if (measurementUnitFlag.toLowerCase() == "metric") {

        $('#unit13 option:contains("lbf")').remove();
        $('#unit13 option:contains("pdl")').remove();
        $('#unit13').sSelect();
        if ($('#unit13').children('option').length == 0) {
            $("<option value='kN'>kN</option>").appendTo("#unit13");
            $("<option value='N'>N</option>").appendTo("#unit13");
            $("<option value='dyn'>dyn</option>").appendTo("#unit13");
            $("<option value='kgf'>kgf</option>").appendTo("#unit13");
        }
        flag = false;
    }
    $(".unit_selection_new").click(function(event) {
        if (flagForNotChangingMeasurementFields == false) {
            return;
        }
        if (measurementUnitFlag.toLowerCase() == "metric") {

            //$(this).attr('disabled', 'disabled');
            $('#imperialRadio').removeAttr('disabled');
            $('#unit13 option:contains("lbf")').remove();
            $('#unit13 option:contains("pdl")').remove();

            if ($('#unit13').children('option').length == 0) {
                $("<option value='kN'>kN</option>").appendTo("#unit13");
                $("<option value='N'>N</option>").appendTo("#unit13");
                $("<option value='dyn'>dyn</option>").appendTo("#unit13");
                $("<option value='kgf'>kgf</option>").appendTo("#unit13");
                $('#unit13').sSelect();
                $('#unit13').resetSS();
            }
            flag = false;
        } else {
            $('#metricRadio').removeAttr('disabled');
            //$(this).attr('disabled', 'disabled');
            $('#unit13 option:contains("kN")').remove();
            $('#unit13 option:contains("N")').remove();
            $('#unit13 option:contains("dyn")').remove();
            $('#unit13 option:contains("kgf")').remove();
            if ($('#unit13').children('option').length == 0) {
                $("<option value='lbf'>lbf</option>").appendTo("#unit13");
                $("<option value='pdl'>pdl</option>").appendTo("#unit13");
                $('#unit13').sSelect();
                $('#unit13').resetSS();
            }
            flag = true;

        }
    });

});

/**Unit change for Velocity**/

$(document).ready(function() {
    var flag;
    var val = measurementUnitFlag.toLowerCase();

    if (measurementUnitFlag.toLowerCase() == "metric") {

        $('#unit15 option:contains("in/s")').remove();
        $('#unit15 option:contains("ft/s")').remove();
        $('#unit15').sSelect();
        if ($('#unit15').children('option').length == 0) {
            $("<option value='m/s'>m/s</option>").appendTo("#unit15");
            $("<option value='cm/s'>cm/s</option>").appendTo("#unit15");

        }
        flag = false;
    }
    $(".unit_selection_new").click(function(event) {
        if (flagForNotChangingMeasurementFields == false) {
            return;
        }
        if (measurementUnitFlag.toLowerCase() == "metric") {

            //$(this).attr('disabled', 'disabled');
            $('#imperialRadio').removeAttr('disabled');

            $('#unit15 option:contains("in/s")').remove();
            $('#unit15 option:contains("ft/s")').remove();

            if ($('#unit15').children('option').length == 0) {
                $("<option value='m/s'>m/s</option>").appendTo("#unit15");
                $("<option value='cm/s'>cm/s</option>").appendTo("#unit15");
                $('#unit15').sSelect();
                $('#unit15').resetSS();
            }
            flag = false;
        } else {
            $('#metricRadio').removeAttr('disabled');
            //$(this).attr('disabled', 'disabled');
            $('#unit15 option:contains("m/s")').remove();
            $('#unit15 option:contains("cm/s")').remove();

            if ($('#unit15').children('option').length == 0) {
                $("<option value='in/s'>in/s</option>").appendTo("#unit15");
                $("<option value='ft/s'>ft/s</option>").appendTo("#unit15");
                $('#unit15').sSelect();
                $('#unit15').resetSS();
            }
            flag = true;

        }
    });

});


/**Unit change for Outflow**/
$(document).ready(function() {
    var flag;
    var val = measurementUnitFlag.toLowerCase();

    if (measurementUnitFlag.toLowerCase() == "metric") {
        $('#unit16 option:contains("gpm")').remove();
        $('#unit16 option[value="in3\\/min"]').remove();
        $('#unit16').sSelect();
        if ($('#unit16').children('option').length == 0) {
            $("<option value='lpm'>lpm</option>").appendTo("#unit16");
            $("<option value='m3/min'>m&sup3;/min</option>").appendTo("#unit16");
            $("<option value='cm3/min'>cm&sup3;/min</option>").appendTo("#unit16");

        }
        flag = false;
    }
    $(".unit_selection_new").click(function(event) {
        if (flagForNotChangingMeasurementFields == false) {
            return;
        }
        if (measurementUnitFlag.toLowerCase() == "metric") {

            //$(this).attr('disabled', 'disabled');
            $('#imperialRadio').removeAttr('disabled');
            $('#unit16 option:contains("gpm")').remove();
            $('#unit16 option[value="in3\\/min"]').remove();
            //alert("Length of outflow dropdown::"+$('#unit16').children('option').length);
            if ($('#unit16').children('option').length == 0) {
                $("<option value='lpm'>lpm</option>").appendTo("#unit16");
                $("<option value='m3/min'>m&sup3;/min</option>").appendTo("#unit16");
                $("<option value='cm3/min'>cm&sup3;/min</option>").appendTo("#unit16");
                $('#unit16').sSelect();
                $('#unit16').resetSS();


            }
            flag = false;
        } else if (measurementUnitFlag.toLowerCase() == "imperial") {

            $('#metricRadio').removeAttr('disabled');
            //$(this).attr('disabled', 'disabled');
            $('#unit16 option:contains("lpm")').remove();
            $('#unit16 option[value="m3\\/min"]').remove();
            $('#unit16 option[value="cm3\\/min"]').remove();


            if ($('#unit16').children('option').length == 0) {
                $("<option value='gpm'>gpm</option>").appendTo("#unit16");
                $("<option value='in3/min'>in&sup3;/min</option>").appendTo("#unit16");
                $('#unit16').sSelect();
                $('#unit16').resetSS();
            }
            flag = true;

        }
        //$(document).scrollTop(0);
    });
});