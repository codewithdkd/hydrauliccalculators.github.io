/**
 *Purpose-Restricting users to input only 
  Numeric values and four digits after 
  decimals for Piston/Bore Dia,Rod Dia,
  Stroke,Preassure,Oilflow and Force,Time
  and Velocity for both Piston/rod side
 @author-Ritwik Mukhopadhyay
 *
 */
$(document).ready(function() {

    //Changes By Prakhar
    var dbClick = false;
    var patt1 = new RegExp("^[0-9]*\[.]?[0-9]{0,3}$");
    $("#piston,#rod,#stroke,#preassure,#oilflow,#piston_force,#rod_force,#piston_time,#rod_time,#piston_velocity,#rod_velocity").select(function() {
        dbClick = true;
    });
    $("#piston,#rod,#stroke,#preassure,#oilflow,#piston_force,#rod_force,#piston_time,#rod_time,#piston_velocity,#rod_velocity").click(function() {
        dbClick = false;
    });
    // End changes By Prakhar.
    /**Piston Diameter**/
    $('#piston').keydown(function(e) {

        var keyCode = e.which;
        if (keyCode != 8 && keyCode != 9 && keyCode != 37 && keyCode != 38 && keyCode != 39 && keyCode != 40 && keyCode != 46 && keyCode != 110 && keyCode != 190 && keyCode != 188) {
            if (keyCode < 48) {
                e.preventDefault();
            } else if (keyCode > 57 && keyCode < 96) {
                e.preventDefault();
            } else if (keyCode > 105) {
                e.preventDefault();
            }
        }
        if (keyCode == 190 || keyCode == 188 || keyCode == 110) {
            if ($("#piston").val().indexOf(".") > -1) {
                e.preventDefault();
            }
        }
    });

    $("#piston").keydown(function(e) {

        keycode = e.which;
        var cursonPosition = document.getElementById('piston').selectionStart;

        var indexOfDot = $('#piston').val().indexOf(".");
        //alert(cursonPosition);
        //alert(indexOfDot);
        if (patt1.exec($(this).val()) || keycode == "8" || keycode == "9" || keycode == "46" || (keycode > 36 && keycode < 41) || dbClick == true || cursonPosition <= indexOfDot) {
            dbClick = false;
            return true;
        } else {
            return false;
        }
    });
    /**Rod Diameter**/
    $('#rod').keydown(function(e) {

        var keyCode = e.which; // Capture the event

        //190 is the key code of decimal if you dont want decimals remove this condition keyCode != 190
        if (keyCode != 8 && keyCode != 9 && keyCode != 37 && keyCode != 38 && keyCode != 39 && keyCode != 40 && keyCode != 46 && keyCode != 110 && keyCode != 190 && keyCode != 188) {
            if (keyCode < 48) {
                e.preventDefault();
            } else if (keyCode > 57 && keyCode < 96) {
                e.preventDefault();
            } else if (keyCode > 105) {
                e.preventDefault();
            }
        }
        if (keyCode == 190 || keyCode == 188 || keyCode == 110) {
            if ($("#rod").val().indexOf(".") > -1) {
                e.preventDefault();
            }
        }
    });

    $("#rod").keydown(function(e) {
        keycode = e.which;

        var cursonPosition = document.getElementById('rod').selectionStart;
        var indexOfDot = $('#rod').val().indexOf(".");

        if (patt1.exec($(this).val()) || keycode == "8" || keycode == "9" || keycode == "46" || (keycode > 36 && keycode < 41) || dbClick == true || cursonPosition <= indexOfDot) {
            dbClick = false;
            return true;
        } else {
            return false;
        }
    });
    /**Stroke**/
    $('#stroke').keydown(function(e) {

        var keyCode = e.which; // Capture the event

        //190 is the key code of decimal if you dont want decimals remove this condition keyCode != 190
        if (keyCode != 8 && keyCode != 9 && keyCode != 37 && keyCode != 38 && keyCode != 39 && keyCode != 40 && keyCode != 46 && keyCode != 110 && keyCode != 190 && keyCode != 188) {
            if (keyCode < 48) {
                e.preventDefault();
            } else if (keyCode > 57 && keyCode < 96) {
                e.preventDefault();
            } else if (keyCode > 105) {
                e.preventDefault();
            }
        }
        if (keyCode == 190 || keyCode == 188 || keyCode == 110) {
            if ($("#stroke").val().indexOf(".") > -1) {
                e.preventDefault();
            }
        }
    });


    $("#stroke").keydown(function(e) {
        keycode = e.which;

        var cursonPosition = document.getElementById('stroke').selectionStart;
        var indexOfDot = $('#stroke').val().indexOf(".");
        if (patt1.exec($(this).val()) || keycode == "8" || keycode == "9" || keycode == "46" || (keycode > 36 && keycode < 41) || dbClick == true || cursonPosition <= indexOfDot) {
            dbClick = false;
            return true;
        } else {
            return false;
        }
    });

    /**Pressure**/
    $('#preassure').keydown(function(e) {

        var keyCode = e.which; // Capture the event

        //190 is the key code of decimal if you dont want decimals remove this condition keyCode != 190
        if (keyCode != 8 && keyCode != 9 && keyCode != 37 && keyCode != 38 && keyCode != 39 && keyCode != 40 && keyCode != 46 && keyCode != 110 && keyCode != 190 && keyCode != 188) {
            if (keyCode < 48) {
                e.preventDefault();
            } else if (keyCode > 57 && keyCode < 96) {
                e.preventDefault();
            } else if (keyCode > 105) {
                e.preventDefault();
            }
        }
        if (keyCode == 190 || keyCode == 188 || keyCode == 110) {
            if ($("#preassure").val().indexOf(".") > -1) {
                e.preventDefault();
            }
        }
    });

    $("#preassure").keydown(function(e) {
        keycode = e.which;

        var cursonPosition = document.getElementById('preassure').selectionStart;
        var indexOfDot = $('#preassure').val().indexOf(".");
        if (patt1.exec($(this).val()) || keycode == "8" || keycode == "9" || keycode == "46" || (keycode > 36 && keycode < 41) || dbClick == true || cursonPosition <= indexOfDot) {
            dbClick = false;
            return true;
        } else {
            return false;
        }
    });

    /**Oilflow**/
    $('#oilflow').keydown(function(e) {

        var keyCode = e.which; // Capture the event

        //190 is the key code of decimal if you dont want decimals remove this condition keyCode != 190
        if (keyCode != 8 && keyCode != 9 && keyCode != 37 && keyCode != 38 && keyCode != 39 && keyCode != 40 && keyCode != 46 && keyCode != 110 && keyCode != 190 && keyCode != 188) {
            if (keyCode < 48) {
                e.preventDefault();
            } else if (keyCode > 57 && keyCode < 96) {
                e.preventDefault();
            } else if (keyCode > 105) {
                e.preventDefault();
            }
        }
        if (keyCode == 190 || keyCode == 188 || keyCode == 110) {
            if ($("#oilflow").val().indexOf(".") > -1) {
                e.preventDefault();
            }
        }
    });

    $("#oilflow").keydown(function(e) {
        keycode = e.which;

        var cursonPosition = document.getElementById('oilflow').selectionStart;
        var indexOfDot = $('#oilflow').val().indexOf(".");
        if (patt1.exec($(this).val()) || keycode == "8" || keycode == "9" || keycode == "46" || (keycode > 36 && keycode < 41) || dbClick == true || cursonPosition <= indexOfDot) {
            dbClick = false;
            return true;
        } else {
            return false;
        }
    });

    /**Piston Force**/
    $('#piston_force').keydown(function(e) {

        var keyCode = e.which; // Capture the event

        //190 is the key code of decimal if you dont want decimals remove this condition keyCode != 190
        if (keyCode != 8 && keyCode != 9 && keyCode != 37 && keyCode != 38 && keyCode != 39 && keyCode != 40 && keyCode != 46 && keyCode != 110 && keyCode != 190 && keyCode != 188) {
            if (keyCode < 48) {
                e.preventDefault();
            } else if (keyCode > 57 && keyCode < 96) {
                e.preventDefault();
            } else if (keyCode > 105) {
                e.preventDefault();
            }
        }
        if (keyCode == 190 || keyCode == 188 || keyCode == 110) {
            if ($("#piston_force").val().indexOf(".") > -1) {
                e.preventDefault();
            }
        }

    });

    $("#piston_force").keydown(function(e) {
        keycode = e.which;

        var cursonPosition = document.getElementById('piston_force').selectionStart;
        var indexOfDot = $('#piston_force').val().indexOf(".");
        if (patt1.exec($(this).val()) || keycode == "8" || keycode == "9" || keycode == "46" || (keycode > 36 && keycode < 41) || dbClick == true || cursonPosition <= indexOfDot) {
            dbClick = false;
            return true;
        } else {
            return false;
        }
    });

    /**Rod Force**/
    $('#rod_force').keydown(function(e) {

        var keyCode = e.which; // Capture the event

        //190 is the key code of decimal if you dont want decimals remove this condition keyCode != 190
        if (keyCode != 8 && keyCode != 9 && keyCode != 37 && keyCode != 38 && keyCode != 39 && keyCode != 40 && keyCode != 46 && keyCode != 110 && keyCode != 190 && keyCode != 188) {
            if (keyCode < 48) {
                e.preventDefault();
            } else if (keyCode > 57 && keyCode < 96) {
                e.preventDefault();
            } else if (keyCode > 105) {
                e.preventDefault();
            }
        }
        if (keyCode == 190 || keyCode == 188 || keyCode == 110) {
            if ($("#rod_force").val().indexOf(".") > -1) {
                e.preventDefault();
            }
        }
    });

    $("#rod_force").keydown(function(e) {
        keycode = e.which;

        var cursonPosition = document.getElementById('rod_force').selectionStart;
        var indexOfDot = $('#rod_force').val().indexOf(".");
        if (patt1.exec($(this).val()) || keycode == "8" || keycode == "9" || keycode == "46" || (keycode > 36 && keycode < 41) || dbClick == true || cursonPosition <= indexOfDot) {
            dbClick = false;
            return true;
        } else {
            return false;
        }
    });

    /**Piston Time**/
    $('#piston_time').keydown(function(e) {

        var keyCode = e.which; // Capture the event

        //190 is the key code of decimal if you dont want decimals remove this condition keyCode != 190
        if (keyCode != 8 && keyCode != 9 && keyCode != 37 && keyCode != 38 && keyCode != 39 && keyCode != 40 && keyCode != 46 && keyCode != 110 && keyCode != 190 && keyCode != 188) {
            if (keyCode < 48) {
                e.preventDefault();
            } else if (keyCode > 57 && keyCode < 96) {
                e.preventDefault();
            } else if (keyCode > 105) {
                e.preventDefault();
            }
        }
        if (keyCode == 190 || keyCode == 188 || keyCode == 110) {
            if ($("#piston_time").val().indexOf(".") > -1) {
                e.preventDefault();
            }
        }
    });

    $("#piston_time").keydown(function(e) {
        keycode = e.which;

        var cursonPosition = document.getElementById('piston_time').selectionStart;
        var indexOfDot = $('#piston_time').val().indexOf(".");
        if (patt1.exec($(this).val()) || keycode == "8" || keycode == "9" || keycode == "46" || (keycode > 36 && keycode < 41) || dbClick == true || cursonPosition <= indexOfDot) {
            dbClick = false;
            return true;
        } else {
            return false;
        }
    });

    /**Rod Time**/
    $('#rod_time').keydown(function(e) {

        var keyCode = e.which; // Capture the event

        //190 is the key code of decimal if you dont want decimals remove this condition keyCode != 190
        if (keyCode != 8 && keyCode != 9 && keyCode != 37 && keyCode != 38 && keyCode != 39 && keyCode != 40 && keyCode != 46 && keyCode != 110 && keyCode != 190 && keyCode != 188) {
            if (keyCode < 48) {
                e.preventDefault();
            } else if (keyCode > 57 && keyCode < 96) {
                e.preventDefault();
            } else if (keyCode > 105) {
                e.preventDefault();
            }
        }
        if (keyCode == 190 || keyCode == 188 || keyCode == 110) {
            if ($("#rod_time").val().indexOf(".") > -1) {
                e.preventDefault();
            }
        }
    });

    $("#rod_time").keydown(function(e) {
        keycode = e.which;

        var cursonPosition = document.getElementById('rod_time').selectionStart;
        var indexOfDot = $('#rod_time').val().indexOf(".");
        if (patt1.exec($(this).val()) || keycode == "8" || keycode == "9" || keycode == "46" || (keycode > 36 && keycode < 41) || dbClick == true || cursonPosition <= indexOfDot) {
            dbClick = false;
            return true;
        } else {
            return false;
        }
    });

    /**Piston Velocity**/
    $('#piston_velocity').keydown(function(e) {

        var keyCode = e.which; // Capture the event

        //190 is the key code of decimal if you dont want decimals remove this condition keyCode != 190
        if (keyCode != 8 && keyCode != 9 && keyCode != 37 && keyCode != 38 && keyCode != 39 && keyCode != 40 && keyCode != 46 && keyCode != 110 && keyCode != 190 && keyCode != 188) {
            if (keyCode < 48) {
                e.preventDefault();
            } else if (keyCode > 57 && keyCode < 96) {
                e.preventDefault();
            } else if (keyCode > 105) {
                e.preventDefault();
            }
        }
        if (keyCode == 190 || keyCode == 188 || keyCode == 110) {
            if ($("#piston_velocity").val().indexOf(".") > -1) {
                e.preventDefault();
            }
        }
    });

    $("#piston_velocity").keydown(function(e) {
        keycode = e.which;
        var cursonPosition = document.getElementById('piston_velocity').selectionStart;
        var indexOfDot = $('#piston_velocity').val().indexOf(".");
        if (patt1.exec($(this).val()) || keycode == "8" || keycode == "9" || keycode == "46" || (keycode > 36 && keycode < 41) || dbClick == true || cursonPosition <= indexOfDot) {
            dbClick = false;
            return true;
        } else {
            return false;
        }
    });

    /**Rod Velocity**/
    $('#rod_velocity').keydown(function(e) {

        var keyCode = e.which; // Capture the event

        //190 is the key code of decimal if you dont want decimals remove this condition keyCode != 190
        if (keyCode != 8 && keyCode != 9 && keyCode != 37 && keyCode != 38 && keyCode != 39 && keyCode != 40 && keyCode != 46 && keyCode != 110 && keyCode != 190 && keyCode != 188) {
            if (keyCode < 48) {
                e.preventDefault();
            } else if (keyCode > 57 && keyCode < 96) {
                e.preventDefault();
            } else if (keyCode > 105) {
                e.preventDefault();
            }
        }
        if (keyCode == 190 || keyCode == 188 || keyCode == 110) {
            if ($("#rod_velocity").val().indexOf(".") > -1) {
                e.preventDefault();
            }
        }
    });

    $("#rod_velocity").keydown(function(e) {
        keycode = e.which;
        var cursonPosition = document.getElementById('rod_velocity').selectionStart;
        var indexOfDot = $('#rod_velocity').val().indexOf(".");
        if (patt1.exec($(this).val()) || keycode == "8" || keycode == "9" || keycode == "46" || (keycode > 36 && keycode < 41) || dbClick == true || cursonPosition <= indexOfDot) {
            dbClick = false;
            return true;
        } else {
            return false;
        }
    });


});



/**Error Message Validations**/

$(document).ready(function() {

    var pistonDia;
    var rodDia;
    var stroke;
    var pressure;
    var oilflow;
    var pistonForce;
    var rodForce;
    var pistonTime;
    var rodTime;
    var pistonVelocity;
    var rodVelocity;


    /*For Piston Dia**/ //#rod has been removed By Prakhar from keyup event.
    $('#piston').keyup(function() {

        if ($('#piston').val() > 9999.9999) {
            document.getElementById("errorbox").innerHTML = allowedValue;
            if (pistonDia != this.value) {
                $('#error').show();
                $('#piston').css({
                    border: "1px solid red"
                });
            }
            //$('#piston').addClass("errorshow");

        } else {
            $('#error').hide();
            if ($('#piston').css('border-bottom-color') == "rgb(255, 0, 0)") {
                $('#piston').css({
                    border: "1px solid #49B1BB"
                });
            } else {
                /*console.log("piston 494 focus 33",$("#piston").is(":focus"));*/
                if ($('#piston').css('border-bottom-color') == "rgb(255, 0, 0)") {
                    $('#piston').css({
                        border: "1px solid #DBDBDB"
                    });
                }
            }
        }
        //Changes By Prakhar
        pistonDia = document.getElementById("piston").value;
        //End Changes By Prakhar
    });

    $('#unit1').change(function() {
        pistonDia = document.getElementById("piston").value;
    });

    $('#crossIcon4').click(function() {
        $('#error').hide();
    });

    $('#piston').blur(function() {
        $('#error').hide();
    });

    /*For Rod Dia**/

    $('#rod').keyup(function() {
        if ($('#rod').val() > 9999.9999) {
            document.getElementById("errorbox2").innerHTML = allowedValue;
            if (rodDia != this.value) {
                $('#error2').show();
                $('#rod').css({
                    border: "1px solid red"
                });
            }

        } else {
            $('#error2').hide();
            if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                $('#rod').css({
                    border: "1px solid #49B1BB"
                });
            } else {
                /*console.log("rod 539 focus 32",$("#rod").is(":focus"));*/
                if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                    $('#rod').css({
                        border: "1px solid #DBDBDB"
                    });
                }
            }
        }
        //Changes By Prakhar
        rodDia = document.getElementById("rod").value;
        //End Changes By Prakhar
    });
    $('#unit2').change(function() {
        rodDia = document.getElementById("rod").value;
    });

    $('#crossIcon5').click(function() {
        $('#error2').hide();
    });

    $('#rod').blur(function() {
        $('#error2').hide();
    });

    /*For Stroke**/

    $('#stroke').keyup(function() {
        if ($('#stroke').val() > 9999.9999) {
            document.getElementById("errorbox3").innerHTML = allowedValue;
            if (stroke != this.value) {
                $('#error3').show();
                $('#stroke').css({
                    border: "1px solid red"
                });
            }

        } else {
            $('#error3').hide();
            if ($('#stroke').css('border-bottom-color') == "rgb(255, 0, 0)") {
                $('#stroke').css({
                    border: "1px solid #49B1BB"
                });
            } else {
                /*console.log("stroke 583 31",$("#piston").is(":focus"));*/
                if ($('#stroke').css('border-bottom-color') == "rgb(255, 0, 0)") {
                    $('#stroke').css({
                        border: "1px solid #DBDBDB"
                    });
                }
            }
        }
        //Changes By Prakhar
        stroke = document.getElementById("stroke").value;
        //End Changes By Prakhar
    });

    $('#unit3').change(function() {
        stroke = document.getElementById("stroke").value;
    });

    $('#crossIcon6').click(function() {
        $('#error3').hide();
    });

    $('#stroke').blur(function() {
        $('#error3').hide();
    });


    /*For Pressure*/

    $('#preassure').keyup(function() {
        if ($('#preassure').val() > 9999.9999) {
            document.getElementById("errorbox4").innerHTML = allowedValue;
            if (pressure != this.value) {
                $('#error4').show();
                $('#preassure').css({
                    border: "1px solid red"
                });
            }

        } else {
            $('#error4').hide();
            if ($('#preassure').css('border-bottom-color') == "rgb(255, 0, 0)") {
                $('#preassure').css({
                    border: "1px solid #49B1BB"
                });
            } else {
                /*console.log("preassure 629 30",$("#preassure").is(":focus"));*/
                if ($('#preassure').css('border-bottom-color') == "rgb(255, 0, 0)") {
                    $('#preassure').css({
                        border: "1px solid #DBDBDB"
                    });
                    if ($("#preassure").is(":focus") == true) {
                        $('#preassure').css({
                            border: "1px solid #49B1BB"
                        });
                    }
                }
            }
        }
        //Changes By Prakhar
        pressure = document.getElementById("preassure").value;
        //End Changes By Prakhar
    });

    $('#unit4').change(function() {
        pressure = document.getElementById("preassure").value;
    });

    $('#crossIcon7').click(function() {
        $('#error4').hide();
    });

    $('#preassure').blur(function() {
        $('#error4').hide();
    });
    /*For Oilflow*/

    $('#oilflow').keyup(function() {
        if ($('#oilflow').val() > 9999.9999) {
            document.getElementById("errorbox5").innerHTML = allowedValue;
            if (oilflow != this.value) {
                $('#error5').show();
                $('#oilflow').css({
                    border: "1px solid red"
                });
            }

        } else {
            $('#error5').hide();
            if ($('#oilflow').css('border-bottom-color') == "rgb(255, 0, 0)") {
                $('#oilflow').css({
                    border: "1px solid #49B1BB"
                });
            } else {
                /*console.log("oilflow 673 29",$("#oilflow").is(":focus"));*/
                if ($('#oilflow').css('border-bottom-color') == "rgb(255, 0, 0)") {
                    $('#oilflow').css({
                        border: "1px solid #DBDBDB"
                    });
                    if ($("#oilflow").is(":focus") == true) {
                        $('#oilflow').css({
                            border: "1px solid #49B1BB"
                        });
                    }
                }
            }
        }
        //Changes By Prakhar
        oilflow = document.getElementById("oilflow").value;
        //End Changes By Prakhar
    });

    $('#unit5').change(function() {
        oilflow = document.getElementById("oilflow").value;
    });

    $('#crossIcon8').click(function() {
        $('#error5').hide();
    });

    $('#oilflow').blur(function() {
        $('#error5').hide();
    });


    /**For Piston Force**/
    $('#piston_force').keyup(function() {
        if ($('#piston_force').val() > 9999.9999) {
            document.getElementById("errorbox6").innerHTML = allowedValue;
            if (pistonForce != this.value) {
                $('#error6').show();
                $('#piston_force').css({
                    border: "1px solid red"
                });
            }

        } else {
            $('#error6').hide();
            if ($('#piston_force').css('border-bottom-color') == "rgb(255, 0, 0)") {
                $('#piston_force').css({
                    border: "1px solid #49B1BB"
                });
            } else {
                /*console.log("piston_force 718 28",$("#piston_force").is(":focus"));*/
                if ($('#piston_force').css('border-bottom-color') == "rgb(255, 0, 0)") {
                    $('#piston_force').css({
                        border: "1px solid #DBDBDB"
                    });
                    if ($("#piston_force").is(":focus") == true) {
                        $('#piston_force').css({
                            border: "1px solid #49B1BB"
                        });
                    }
                }
            }
        }
        //Changes By Prakhar
        pistonForce = document.getElementById("piston_force").value;

        //End Changes By Prakhar
    });

    $('#unit13').change(function() {
        pistonForce = document.getElementById("piston_force").value;
        rodForce = document.getElementById("rod_force").value;
    });

    $('#crossIcon9').click(function() {
        $('#error6').hide();
    });

    $('#piston_force').blur(function() {
        $('#error6').hide();
    });

    /**For Rod Force**/
    $('#rod_force').keyup(function() {
        if ($('#rod_force').val() > 9999.9999) {
            document.getElementById("errorbox6").innerHTML = allowedValue;
            if (rodForce != this.value) {
                $('#error6').show();
                $('#rod_force').css({
                    border: "1px solid red"
                });
            }

        } else {
            $('#error6').hide();
            if ($('#rod_force').css('border-bottom-color') == "rgb(255, 0, 0)") {
                $('#rod_force').css({
                    border: "1px solid #49B1BB"
                });
            } else {
                /*console.log("rod_force 764 27",$("#rod_force").is(":focus"));*/
                if ($('#rod_force').css('border-bottom-color') == "rgb(255, 0, 0)") {
                    $('#rod_force').css({
                        border: "1px solid #DBDBDB"
                    });
                    if ($("#rod_force").is(":focus") == true) {
                        $('#rod_force').css({
                            border: "1px solid #49B1BB"
                        });
                    }
                }
            }
        }
        //Changes By Prakhar
        rodForce = document.getElementById("rod_force").value;
        //End Changes By Prakhar
    });



    $('#crossIcon9').click(function() {
        $('#error6').hide();
    });

    $('#rod_force').blur(function() {
        $('#error6').hide();
    });



    /**For Piston Time**/
    $('#piston_time').keyup(function() {
        if ($('#piston_time').val() > 9999.9999) {
            document.getElementById("errorbox7").innerHTML = allowedValue;
            if (pistonTime != this.value) {
                $('#error7').show();
                $('#piston_time').css({
                    border: "1px solid red"
                });
            }

        } else {
            $('#error7').hide();
            if ($('#piston_time').css('border-bottom-color') == "rgb(255, 0, 0)") {
                $('#piston_time').css({
                    border: "1px solid #49B1BB"
                });
            } else {
                /*console.log("piston_time 808 26",$("#piston_time").is(":focus"));*/
                if ($('#piston_time').css('border-bottom-color') == "rgb(255, 0, 0)") {
                    $('#piston_time').css({
                        border: "1px solid #DBDBDB"
                    });
                    if ($("#piston_time").is(":focus") == true) {
                        $('#piston_time').css({
                            border: "1px solid #49B1BB"
                        });
                    }
                }
            }
        }
        //Changes By Prakhar
        pistonTime = document.getElementById("piston_time").value;
        //End Changes By Prakhar
    });

    $('#unit14').change(function() {
        pistonTime = document.getElementById("piston_time").value;
        rodTime = document.getElementById("rod_time").value;
    });

    $('#crossIcon10').click(function() {
        $('#error6').hide();
    });

    $('#piston_time').blur(function() {
        $('#error7').hide();
    });


    /**For Rod Time**/
    $('#rod_time').keyup(function() {
        if ($('#rod_time').val() > 9999.9999) {
            document.getElementById("errorbox7").innerHTML = allowedValue;
            if (rodTime != this.value) {
                $('#error7').show();
                $('#rod_time').css({
                    border: "1px solid red"
                });
            }
        } else {
            $('#error7').hide();
            if ($('#rod_time').css('border-bottom-color') == "rgb(255, 0, 0)") {
                $('#rod_time').css({
                    border: "1px solid #49B1BB"
                });
            } else {
                /*console.log("rod_time 853 25",$("#rod_time").is(":focus"));*/
                if ($('#rod_time').css('border-bottom-color') == "rgb(255, 0, 0)") {
                    $('#rod_time').css({
                        border: "1px solid #DBDBDB"
                    });
                    if ($("#rod_time").is(":focus") == true) {
                        $('#rod_time').css({
                            border: "1px solid #49B1BB"
                        });
                    }
                }
            }
        }
        //Changes By Prakhar
        rodTime = document.getElementById("rod_time").value;
        //End Changes By Prakhar

    });

    $('#crossIcon10').click(function() {
        $('#error6').hide();
    });

    $('#rod_time').blur(function() {
        $('#error7').hide();
    });


    /**For Piston Velocity**/
    $('#piston_velocity').keyup(function() {
        if ($('#piston_velocity').val() > 9999.9999) {
            document.getElementById("errorbox8").innerHTML = allowedValue;
            if (pistonVelocity != this.value) {
                $('#error8').show();
                $('#piston_velocity').css({
                    border: "1px solid red"
                });
            }
        } else {
            $('#error8').hide();
            if ($('#piston_velocity').css('border-bottom-color') == "rgb(255, 0, 0)") {
                $('#piston_velocity').css({
                    border: "1px solid #49B1BB"
                });
            } else {
                /*console.log("piston_velocity 894 24",$("#piston_velocity").is(":focus"));*/
                if ($('#piston_velocity').css('border-bottom-color') == "rgb(255, 0, 0)") {
                    $('#piston_velocity').css({
                        border: "1px solid #DBDBDB"
                    });
                    if ($("#piston_velocity").is(":focus") == true) {
                        $('#piston_velocity').css({
                            border: "1px solid #49B1BB"
                        });
                    }
                }
            }
        }
        //Changes By Prakhar
        pistonVelocity = document.getElementById("piston_velocity").value;
        //End Changes By Prakhar
    });

    $('#unit15').change(function() {
        pistonVelocity = document.getElementById("piston_velocity").value;
        rodVelocity = document.getElementById("rod_velocity").value;
    });

    $('#crossIcon11').click(function() {
        ('#error8').hide();
    });

    $('#piston_velocity').blur(function() {
        $('#error8').hide();
    });

    /**For Rod Velocity**/
    $('#rod_velocity').keyup(function() {
        if ($('#rod_velocity').val() > 9999.9999) {
            document.getElementById("errorbox8").innerHTML = allowedValue;
            if (rodVelocity != this.value) {
                $('#error8').show();
                $('#rod_velocity').css({
                    border: "1px solid red"
                });
            }


        } else {
            $('#error8').hide();
            if ($('#rod_velocity').css('border-bottom-color') == "rgb(255, 0, 0)") {
                $('#rod_velocity').css({
                    border: "1px solid #49B1BB"
                });
            } else {
                /*console.log("rod_velocity 940 23",$("#piston_velocity").is(":focus"));*/
                if ($('#rod_velocity').css('border-bottom-color') == "rgb(255, 0, 0)") {
                    $('#rod_velocity').css({
                        border: "1px solid #DBDBDB"
                    });
                    if ($("#rod_velocity").is(":focus") == true) {
                        $('#rod_velocity').css({
                            border: "1px solid #49B1BB"
                        });
                    }
                }
            }
        }
        //Changes By Prakhar
        rodVelocity = document.getElementById("rod_velocity").value;
        //End Changes By Prakhar
    });

    $('#crossIcon11').click(function() {
        $('#error8').hide();
    });

    $('#rod_velocity').blur(function() {
        $('#error8').hide();
    });


});



$(document).ready(function() {

    $('#crossIcon61').click(function() {
        $('#error31').hide();
    });

    $('#piston,#rod,#stroke,#preassure').keyup(function() {

        if (measurementUnitFlag.toLowerCase() == "metric") {
            var val1 = $('#unit1').val();
            var val2 = $('#unit2').val();
            var piston_dia = document.getElementById("piston").value;
            var rod_dia = document.getElementById("rod").value;


            if ((val1 == 'mm' && val2 == 'mm') || (val1 == 'cm' && val2 == 'cm') || (val1 == 'm' && val2 == 'm')) {
                if (piston_dia >= 0 && rod_dia >= 0) {
                    if ((parseFloat(piston_dia) == parseFloat(rod_dia)) || (parseFloat(rod_dia) > parseFloat(piston_dia))) {

                        document.getElementById("errorbox31").innerHTML = rodDiaGrPiston;
                        $('#rod_volume').val('');

                        $('#error31').show();
                        $('#rod').css({
                            border: "1px solid red"
                        });
                    } else {
                        $('#error31').hide();
                        /*$('#rod').css({
                            border: "1px solid #C0C0C0"
                        });*/
                        if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                            $('#rod').css({
                                border: "1px solid #49B1BB"
                            });
                        } else {
                            /*console.log("rod 1004 22",$("#rod").is(":focus"));*/
                            if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                                $('#rod').css({
                                    border: "1px solid #DBDBDB"
                                });
                                if ($("#rod").is(":focus") == true) {
                                    $('#rod').css({
                                        border: "1px solid #49B1BB"
                                    });
                                }
                            }
                        }
                    }
                }
            }

            if (val1 == 'cm' && val2 == 'mm') {
                var piston_dia = ($('#piston').val()) * 10;
                if (piston_dia >= 0 && rod_dia >= 0) {
                    if ((parseFloat(piston_dia) == parseFloat(rod_dia)) || (parseFloat(rod_dia) > parseFloat(piston_dia))) {
                        document.getElementById("errorbox31").innerHTML = rodDiaGrPiston;
                        $('#rod_volume').val('');
                        /*$('#rod_force').val('');*/
                        $('#error31').show();
                        $('#rod').css({
                            border: "1px solid red"
                        });
                    } else {
                        $('#error31').hide();
                        /*$('#rod').css({
                            border: "1px solid #C0C0C0"
                        });*/
                        if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                            $('#rod').css({
                                border: "1px solid #49B1BB"
                            });
                        } else {
                            /*console.log("rod 1036 21",$("#rod").is(":focus"));*/
                            if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                                $('#rod').css({
                                    border: "1px solid #DBDBDB"
                                });
                                if ($("#rod").is(":focus") == true) {
                                    $('#rod').css({
                                        border: "1px solid #49B1BB"
                                    });
                                }
                            }
                        }
                    }
                }
            }

            if (val1 == 'm' && val2 == 'mm') {
                var piston_dia = ($('#piston').val()) * 1000;
                if (piston_dia >= 0 && rod_dia >= 0) {
                    if ((parseFloat(piston_dia) == parseFloat(rod_dia)) || (parseFloat(rod_dia) > parseFloat(piston_dia))) {
                        document.getElementById("errorbox31").innerHTML = rodDiaGrPiston;
                        $('#rod_volume').val('');
                        /*$('#rod_force').val('');*/
                        $('#error31').show();
                        $('#rod').css({
                            border: "1px solid red"
                        });
                    } else {
                        $('#error31').hide();
                        /* $('#rod').css({
                             border: "1px solid #C0C0C0"
                         });*/
                        if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                            $('#rod').css({
                                border: "1px solid #49B1BB"
                            });
                        } else {
                            /*console.log("rod 1069 20",$("#rod").is(":focus"));*/
                            if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                                $('#rod').css({
                                    border: "1px solid #DBDBDB"
                                });
                                if ($("#rod").is(":focus") == true) {
                                    $('#rod').css({
                                        border: "1px solid #49B1BB"
                                    });
                                }
                            }
                        }
                    }
                }
            }

            if (val1 == 'mm' && val2 == 'cm') {
                var rod_dia = ($('#rod').val()) * 10;
                if (piston_dia >= 0 && rod_dia >= 0) {
                    if ((parseFloat(piston_dia) == parseFloat(rod_dia)) || (parseFloat(rod_dia) > parseFloat(piston_dia))) {
                        document.getElementById("errorbox31").innerHTML = rodDiaGrPiston;
                        $('#rod_volume').val('');
                        /*$('#rod_force').val('');*/
                        $('#error31').show();
                        $('#rod').css({
                            border: "1px solid red"
                        });
                    } else {
                        $('#error31').hide();
                        /*$('#rod').css({
                            border: "1px solid #C0C0C0"
                        });*/
                        if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                            $('#rod').css({
                                border: "1px solid #49B1BB"
                            });
                        } else {
                            /*console.log("rod 1102 19",$("#rod").is(":focus"));*/
                            if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                                $('#rod').css({
                                    border: "1px solid #DBDBDB"
                                });
                                if ($("#rod").is(":focus") == true) {
                                    $('#rod').css({
                                        border: "1px solid #49B1BB"
                                    });
                                }
                            }
                        }
                    }
                }
            }

            if (val1 == 'mm' && val2 == 'm') {
                var rod_dia = ($('#rod').val()) * 1000;
                if (piston_dia >= 0 && rod_dia >= 0) {
                    if ((parseFloat(piston_dia) == parseFloat(rod_dia)) || (parseFloat(rod_dia) > parseFloat(piston_dia))) {
                        document.getElementById("errorbox31").innerHTML = rodDiaGrPiston;
                        $('#rod_volume').val('');
                        /*$('#rod_force').val('');*/
                        $('#error31').show();
                        $('#rod').css({
                            border: "1px solid red"
                        });
                    } else {
                        $('#error31').hide();
                        /*$('#rod').css({
                            border: "1px solid #C0C0C0"
                        });*/
                        if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                            $('#rod').css({
                                border: "1px solid #49B1BB"
                            });
                        } else {
                            /*console.log("rod 1135 18",$("#rod").is(":focus"));*/
                            if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                                $('#rod').css({
                                    border: "1px solid #DBDBDB"
                                });
                                if ($("#rod").is(":focus") == true) {
                                    $('#rod').css({
                                        border: "1px solid #49B1BB"
                                    });
                                }
                            }
                        }
                    }
                }
            }

            if (val1 == 'cm' && val2 == 'm') {
                var rod_dia = ($('#rod').val()) * 100;
                if (piston_dia >= 0 && rod_dia >= 0) {
                    if ((parseFloat(piston_dia) == parseFloat(rod_dia)) || (parseFloat(rod_dia) > parseFloat(piston_dia))) {
                        document.getElementById("errorbox31").innerHTML = rodDiaGrPiston;
                        $('#rod_volume').val('');
                        /*$('#rod_force').val('');*/
                        $('#error31').show();
                        $('#rod').css({
                            border: "1px solid red"
                        });
                    } else {
                        $('#error31').hide();
                        /*$('#rod').css({
                            border: "1px solid #C0C0C0"
                        });*/
                        if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                            $('#rod').css({
                                border: "1px solid #49B1BB"
                            });
                        } else {
                            /*console.log("rod 1168 17",$("#rod").is(":focus"));*/
                            if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                                $('#rod').css({
                                    border: "1px solid #DBDBDB"
                                });
                                if ($("#rod").is(":focus") == true) {
                                    $('#rod').css({
                                        border: "1px solid #49B1BB"
                                    });
                                }
                            }
                        }
                    }
                }
            }

            if (val1 == 'm' && val2 == 'cm') {
                var piston_dia = ($('#piston').val()) * 100;
                if (piston_dia >= 0 && rod_dia >= 0) {
                    if ((parseFloat(piston_dia) == parseFloat(rod_dia)) || (parseFloat(rod_dia) > parseFloat(piston_dia))) {
                        document.getElementById("errorbox31").innerHTML = rodDiaGrPiston;
                        $('#rod_volume').val('');
                        /*$('#rod_force').val('');*/
                        $('#error31').show();
                        $('#rod').css({
                            border: "1px solid red"
                        });
                    } else {
                        $('#error31').hide();
                        /* $('#rod').css({
                             border: "1px solid #C0C0C0"
                         });*/
                        if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                            $('#rod').css({
                                border: "1px solid #49B1BB"
                            });
                        } else {
                            /*console.log("rod 1201 16",$("#rod").is(":focus"));*/
                            if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                                $('#rod').css({
                                    border: "1px solid #DBDBDB"
                                });
                                if ($("#rod").is(":focus") == true) {
                                    $('#rod').css({
                                        border: "1px solid #49B1BB"
                                    });
                                }
                            }
                        }
                    }
                }
            }

        }

    });


    /**custom js code**/


    $('#piston').keyup(function() {

        if (measurementUnitFlag.toLowerCase() == "metric") {
            var val1 = $('#unit1').val();
            var val2 = $('#unit2').val();
            var piston_dia = document.getElementById("piston").value;
            var rod_dia = document.getElementById("rod").value;


            if ((val1 == 'mm' && val2 == 'mm') || (val1 == 'cm' && val2 == 'cm') || (val1 == 'm' && val2 == 'm')) {
                if (piston_dia >= 0 && rod_dia >= 0) {
                    if ((parseFloat(piston_dia) == parseFloat(rod_dia)) || (parseFloat(rod_dia) > parseFloat(piston_dia))) {

                        document.getElementById("errorbox31").innerHTML = rodDiaGrPiston;
                        $('#error31').show();
                        $('#rod').css({
                            border: "1px solid red"
                        });
                    } else {
                        $('#error31').hide();
                        /*$('#rod').css({
                            border: "1px solid #C0C0C0"
                        });*/
                        if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                            $('#rod').css({
                                border: "1px solid #49B1BB"
                            });
                        } else {
                            /*console.log("rod 1249 15",$("#rod").is(":focus"));*/
                            if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                                $('#rod').css({
                                    border: "1px solid #DBDBDB"
                                });
                                if ($("#rod").is(":focus") == true) {
                                    $('#rod').css({
                                        border: "1px solid #49B1BB"
                                    });
                                }
                            }
                        }
                    }
                }
            }

            if (val1 == 'cm' && val2 == 'mm') {
                var piston_dia = ($('#piston').val()) * 10;
                if (piston_dia >= 0 && rod_dia >= 0) {
                    if ((parseFloat(piston_dia) == parseFloat(rod_dia)) || (parseFloat(rod_dia) > parseFloat(piston_dia))) {
                        document.getElementById("errorbox31").innerHTML = rodDiaGrPiston;
                        $('#error31').show();
                        $('#rod').css({
                            border: "1px solid red"
                        });
                    } else {
                        $('#error31').hide();
                        /*$('#rod').css({
                            border: "1px solid #C0C0C0"
                        });*/
                        if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                            $('#rod').css({
                                border: "1px solid #49B1BB"
                            });
                        } else {
                            /*console.log("rod 1280 14",$("#rod").is(":focus"));*/
                            if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                                $('#rod').css({
                                    border: "1px solid #DBDBDB"
                                });
                                if ($("#rod").is(":focus") == true) {
                                    $('#rod').css({
                                        border: "1px solid #49B1BB"
                                    });
                                }
                            }
                        }
                    }
                }
            }

            if (val1 == 'm' && val2 == 'mm') {
                var piston_dia = ($('#piston').val()) * 1000;
                if (piston_dia >= 0 && rod_dia >= 0) {
                    if ((parseFloat(piston_dia) == parseFloat(rod_dia)) || (parseFloat(rod_dia) > parseFloat(piston_dia))) {
                        document.getElementById("errorbox31").innerHTML = rodDiaGrPiston;
                        $('#error31').show();
                        $('#rod').css({
                            border: "1px solid red"
                        });
                    } else {
                        $('#error31').hide();
                        /*$('#rod').css({
                            border: "1px solid #C0C0C0"
                        });*/
                        if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                            $('#rod').css({
                                border: "1px solid #49B1BB"
                            });
                        } else {
                            /*console.log("rod 1311 13",$("#rod").is(":focus"));*/
                            if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                                $('#rod').css({
                                    border: "1px solid #DBDBDB"
                                });
                                if ($("#rod").is(":focus") == true) {
                                    $('#rod').css({
                                        border: "1px solid #49B1BB"
                                    });
                                }
                            }
                        }
                    }
                }
            }

            if (val1 == 'mm' && val2 == 'cm') {
                var rod_dia = ($('#rod').val()) * 10;
                if (piston_dia >= 0 && rod_dia >= 0) {
                    if ((parseFloat(piston_dia) == parseFloat(rod_dia)) || (parseFloat(rod_dia) > parseFloat(piston_dia))) {
                        document.getElementById("errorbox31").innerHTML = rodDiaGrPiston;
                        $('#error31').show();
                        $('#rod').css({
                            border: "1px solid red"
                        });
                    } else {
                        $('#error31').hide();
                        /*$('#rod').css({
                            border: "1px solid #C0C0C0"
                        });*/
                        if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                            $('#rod').css({
                                border: "1px solid #49B1BB"
                            });
                        } else {
                            /*console.log("rod 1342 12",$("#rod").is(":focus"));*/
                            if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                                $('#rod').css({
                                    border: "1px solid #DBDBDB"
                                });
                                if ($("#rod").is(":focus") == true) {
                                    $('#rod').css({
                                        border: "1px solid #49B1BB"
                                    });
                                }
                            }
                        }
                    }
                }
            }

            if (val1 == 'mm' && val2 == 'm') {
                var rod_dia = ($('#rod').val()) * 1000;
                if (piston_dia >= 0 && rod_dia >= 0) {
                    if ((parseFloat(piston_dia) == parseFloat(rod_dia)) || (parseFloat(rod_dia) > parseFloat(piston_dia))) {
                        document.getElementById("errorbox31").innerHTML = rodDiaGrPiston;
                        $('#error31').show();
                        $('#rod').css({
                            border: "1px solid red"
                        });
                    } else {
                        $('#error31').hide();
                        /*$('#rod').css({
                            border: "1px solid #C0C0C0"
                        });*/
                        if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                            $('#rod').css({
                                border: "1px solid #49B1BB"
                            });
                        } else {
                            /*console.log("rod 1373 11",$("#rod").is(":focus"));*/
                            if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                                $('#rod').css({
                                    border: "1px solid #DBDBDB"
                                });
                                if ($("#rod").is(":focus") == true) {
                                    $('#rod').css({
                                        border: "1px solid #49B1BB"
                                    });
                                }
                            }
                        }
                    }
                }
            }

            if (val1 == 'cm' && val2 == 'm') {
                var rod_dia = ($('#rod').val()) * 100;
                if (piston_dia >= 0 && rod_dia >= 0) {
                    if ((parseFloat(piston_dia) == parseFloat(rod_dia)) || (parseFloat(rod_dia) > parseFloat(piston_dia))) {
                        document.getElementById("errorbox31").innerHTML = rodDiaGrPiston;
                        $('#error31').show();
                        $('#rod').css({
                            border: "1px solid red"
                        });
                    } else {
                        $('#error31').hide();
                        /*$('#rod').css({
                            border: "1px solid #C0C0C0"
                        });*/
                        if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                            $('#rod').css({
                                border: "1px solid #49B1BB"
                            });
                        } else {
                            /*console.log("rod 1404 10",$("#rod").is(":focus"));*/
                            if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                                $('#rod').css({
                                    border: "1px solid #DBDBDB"
                                });
                                if ($("#rod").is(":focus") == true) {
                                    $('#rod').css({
                                        border: "1px solid #49B1BB"
                                    });
                                }
                            }
                        }
                    }
                }
            }

            if (val1 == 'm' && val2 == 'cm') {
                var piston_dia = ($('#piston').val()) * 100;
                if (piston_dia >= 0 && rod_dia >= 0) {
                    if ((parseFloat(piston_dia) == parseFloat(rod_dia)) || (parseFloat(rod_dia) > parseFloat(piston_dia))) {
                        document.getElementById("errorbox31").innerHTML = rodDiaGrPiston;
                        $('#error31').show();
                        $('#rod').css({
                            border: "1px solid red"
                        });
                    } else {
                        $('#error31').hide();
                        /* $('#rod').css({
                             border: "1px solid #C0C0C0"
                         });*/
                        if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                            $('#rod').css({
                                border: "1px solid #49B1BB"
                            });
                        } else {
                            /*console.log("rod 1435 9",$("#rod").is(":focus"));*/
                            if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                                $('#rod').css({
                                    border: "1px solid #DBDBDB"
                                });
                                if ($("#rod").is(":focus") == true) {
                                    $('#rod').css({
                                        border: "1px solid #49B1BB"
                                    });
                                }
                            }
                        }
                    }
                }
            }

            if (parseFloat(piston_dia) == 0 && parseFloat(rod_dia) == 0) {
                $('#error31').hide();
                /*$('#rod').css({
                    border: "1px solid #C0C0C0"
                });*/
                if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                    $('#rod').css({
                        border: "1px solid #49B1BB"
                    });
                } else {
                    /*console.log("rod 1457 8",$("#rod").is(":focus"));*/
                    if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                        $('#rod').css({
                            border: "1px solid #DBDBDB"
                        });
                        if ($("#rod").is(":focus") == true) {
                            $('#rod').css({
                                border: "1px solid #49B1BB"
                            });
                        }
                    }
                }
            }

        }

    });




    $('#piston,#rod').keyup(function() {
        if ($('#piston').val() == '' && $('#rod').val() == '') {
            $('#error31').hide();
            /*$('#rod').css({
                border: "1px solid #C0C0C0"
            });*/
            if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                $('#rod').css({
                    border: "1px solid #49B1BB"
                });
            } else {
                /*console.log("rod 1485 7",$("#rod").is(":focus"));*/
                if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                    $('#rod').css({
                        border: "1px solid #DBDBDB"
                    });
                    if ($("#rod").is(":focus") == true) {
                        $('#rod').css({
                            border: "1px solid #49B1BB"
                        });
                    }
                }
            }
        }

    });




    $('#rod').keyup(function() {
        if (measurementUnitFlag.toLowerCase() == "imperial") {

            var val1 = $('#unit1').val();
            var val2 = $('#unit2').val();
            var piston_dia = $('#piston').val();
            var rod_dia = $('#rod').val();
            if ((val1 == 'in' && val2 == 'in') || (val1 == 'ft' && val2 == 'ft')) {
                if (piston_dia >= 0 && rod_dia >= 0) {
                    if ((parseFloat(piston_dia) == parseFloat(rod_dia)) || (parseFloat(rod_dia) > parseFloat(piston_dia))) {
                        document.getElementById("errorbox31").innerHTML = rodDiaGrPiston;
                        $('#error31').show();
                        $('#rod').css({
                            border: "1px solid red"
                        });
                    } else {
                        $('#error31').hide();
                        /*$('#rod').css({
                            border: "1px solid #C0C0C0"
                        });*/
                        if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                            $('#rod').css({
                                border: "1px solid #49B1BB"
                            });
                        } else {
                            /*console.log("rod 1525 6",$("#rod").is(":focus"));*/
                            if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                                $('#rod').css({
                                    border: "1px solid #DBDBDB"
                                });
                                if ($("#rod").is(":focus") == true) {
                                    $('#rod').css({
                                        border: "1px solid #49B1BB"
                                    });
                                }
                            }
                        }
                    }
                }
            }

            if ((val1 == 'in' && val2 == 'ft')) {
                var rod_dia = ($('#rod').val() * 12);
                if (piston_dia >= 0 && rod_dia >= 0) {
                    if ((parseFloat(piston_dia) == parseFloat(rod_dia)) || (parseFloat(rod_dia) > parseFloat(piston_dia))) {
                        document.getElementById("errorbox31").innerHTML = rodDiaGrPiston;
                        $('#error31').show();
                        $('#rod').css({
                            border: "1px solid red"
                        });
                    } else {
                        $('#error31').hide();
                        /* $('#rod').css({
                             border: "1px solid #C0C0C0"
                         });*/
                        if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                            $('#rod').css({
                                border: "1px solid #49B1BB"
                            });
                        } else {
                            /*console.log("rod 1556 5",$("#rod").is(":focus"));*/
                            if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                                $('#rod').css({
                                    border: "1px solid #DBDBDB"
                                });
                                if ($("#rod").is(":focus") == true) {
                                    $('#rod').css({
                                        border: "1px solid #49B1BB"
                                    });
                                }
                            }
                        }
                    }
                }
            }

            if ((val1 == 'ft' && val2 == 'in')) {
                var piston_dia = ($('#piston').val() * 12);

                if (piston_dia >= 0 && rod_dia >= 0) {
                    if ((parseFloat(piston_dia) == parseFloat(rod_dia)) || (parseFloat(rod_dia) > parseFloat(piston_dia))) {
                        document.getElementById("errorbox31").innerHTML = rodDiaGrPiston;
                        $('#error31').show();
                        $('#rod').css({
                            border: "1px solid red"
                        });
                    } else {
                        $('#error31').hide();
                        /*$('#rod').css({
                            border: "1px solid #C0C0C0"
                        });*/
                        if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                            $('#rod').css({
                                border: "1px solid #49B1BB"
                            });
                        } else {
                            /*console.log("rod 1588 4",$("#rod").is(":focus"));*/
                            if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                                $('#rod').css({
                                    border: "1px solid #DBDBDB"
                                });
                                if ($("#rod").is(":focus") == true) {
                                    $('#rod').css({
                                        border: "1px solid #49B1BB"
                                    });
                                }
                            }
                        }
                    }
                }
            }

            /**custom js code**/


            $('#piston').keyup(function() {
                if (measurementUnitFlag.toLowerCase() == "imperial") {

                    var val1 = $('#unit1').val();
                    var val2 = $('#unit2').val();
                    var piston_dia = $('#piston').val();
                    var rod_dia = $('#rod').val();
                    if ((val1 == 'in' && val2 == 'in') || (val1 == 'ft' && val2 == 'ft')) {
                        if (piston_dia >= 0 && rod_dia >= 0) {
                            if ((parseFloat(piston_dia) == parseFloat(rod_dia)) || (parseFloat(rod_dia) > parseFloat(piston_dia))) {
                                document.getElementById("errorbox31").innerHTML = rodDiaGrPiston;
                                $('#error31').show();
                                $('#rod').css({
                                    border: "1px solid red"
                                });
                            } else {
                                $('#error31').hide();
                                /*$('#rod').css({
                                    border: "1px solid #C0C0C0"
                                });*/
                                if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                                    $('#rod').css({
                                        border: "1px solid #49B1BB"
                                    });
                                } else {
                                    /*console.log("rod 1628 3",$("#rod").is(":focus"));*/
                                    if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                                        $('#rod').css({
                                            border: "1px solid #DBDBDB"
                                        });
                                        if ($("#rod").is(":focus") == true) {
                                            $('#rod').css({
                                                border: "1px solid #49B1BB"
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    }

                    if ((val1 == 'in' && val2 == 'ft')) {
                        var rod_dia = ($('#rod').val() * 12);
                        if (piston_dia >= 0 && rod_dia >= 0) {
                            if ((parseFloat(piston_dia) == parseFloat(rod_dia)) || (parseFloat(rod_dia) > parseFloat(piston_dia))) {
                                document.getElementById("errorbox31").innerHTML = rodDiaGrPiston;
                                $('#error31').show();
                                $('#rod').css({
                                    border: "1px solid red"
                                });
                            } else {
                                $('#error31').hide();
                                /*$('#rod').css({
                                    border: "1px solid #C0C0C0"
                                });*/
                                if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                                    $('#rod').css({
                                        border: "1px solid #49B1BB"
                                    });
                                } else {
                                    /*console.log("rod 1659 2",$("#rod").is(":focus"));*/
                                    if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                                        $('#rod').css({
                                            border: "1px solid #DBDBDB"
                                        });
                                        if ($("#rod").is(":focus") == true) {
                                            $('#rod').css({
                                                border: "1px solid #49B1BB"
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    }

                    if ((val1 == 'ft' && val2 == 'in')) {
                        var piston_dia = ($('#piston').val() * 12);

                        if (piston_dia >= 0 && rod_dia >= 0) {
                            if ((parseFloat(piston_dia) == parseFloat(rod_dia)) || (parseFloat(rod_dia) > parseFloat(piston_dia))) {
                                document.getElementById("errorbox31").innerHTML = rodDiaGrPiston;
                                $('#error31').show();
                                $('#rod').css({
                                    border: "1px solid red"
                                });
                            } else {
                                $('#error31').hide();
                                /*$('#rod').css({
                                    border: "1px solid #C0C0C0"
                                });*/
                                if ($('#rod').css('border-bottom-color') == "rgb(255, 0, 0)") {
                                    $('#rod').css({
                                        border: "1px solid #49B1BB"
                                    });
                                } else {
                                    /*console.log("rod 1691 1",$("#rod").is(":focus"));*/
                                    if ($('#rod').css('border-bottom-color') != "rgb(255, 0, 0)") {
                                        $('#rod').css({
                                            border: "1px solid #DBDBDB"
                                        });
                                        if ($("#rod").is(":focus") == true) {
                                            $('#rod').css({
                                                border: "1px solid #49B1BB"
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
        }
    });
});