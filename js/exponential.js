/*Method to truncate Resultant value*/
function truncate(no) {
    //alert(no);
    var resValue = no.toString().split(".");
    if ((parseInt(resValue[1]) == 0)) {
        return resValue[0];
    } else {
        if ((parseInt(resValue[0]) == 0)) {
            if ((parseInt((resValue[1]).length) > 0)) {
                var decPart = (parseFloat(resValue[1])).toString();
                var truncDecPart = resValue[1].substring(0, 11);
                //var truncDecPart = +decPart.substring(0,);
                var truncResValue = resValue[0].concat("." + truncDecPart);
                return truncResValue;
            } else {
                return no;
            }
        } else {
            if ((parseInt((resValue[0]).length) >= 11)) {
                var truncResValue = resValue[0];
                return truncResValue;
            } else if ((parseInt((resValue[0]).length) > 8) && (parseInt((resValue[0]).length) < 11)) {
                var decPart = (parseFloat(resValue[1])).toString();
                var truncDecPart = resValue[1].substring(0, 2);
                //var truncDecPart = +decPart.substring(0,);
                var truncResValue = resValue[0].concat("." + truncDecPart);
                return truncResValue;
            } else if ((parseInt((resValue[0]).length) <= 8)) {
                //var decPart = (parseFloat(resValue[1])).toString();
                var decPart = resValue[1].toString();
                //var truncDecPart = (parseFloat(resValue[1]).toString()).substring(0,4);
                var truncDecPart = (resValue[1].toString()).substring(0, 4);

                //var truncDecPart = +decPart.substring(0,);
                var truncResValue = resValue[0].concat("." + truncDecPart);
                return truncResValue;
            } else {
                return no;
            }
        }

    }
}

function exponentialConvertor() {

    if ($('#piston_area').val().indexOf(".") != -1) {
        document.getElementById("piston_area").value = truncate(($("#piston_area").val()));
    }
    if ($('#rod_area').val().indexOf(".") != -1) {
        document.getElementById("rod_area").value = truncate(($("#rod_area").val()));
    }
    if ($('#piston_volume').val().indexOf(".") != -1) {
        document.getElementById("piston_volume").value = truncate(($("#piston_volume").val()));
    }
    if ($('#rod_volume').val().indexOf(".") != -1) {
        document.getElementById("rod_volume").value = truncate(($("#rod_volume").val()));
    }
    if ($('#piston_force').val().indexOf(".") != -1) {
        if (document.getElementById("piston_force").disabled == true) {
            document.getElementById("piston_force").value = truncate(($("#piston_force").val()));
        }
    }
    if ($('#rod_force').val().indexOf(".") != -1) {
        if (document.getElementById("rod_force").disabled == true) {
            document.getElementById("rod_force").value = truncate(($("#rod_force").val()));
        }
    }
    if ($('#piston_time').val().indexOf(".") != -1) {
        if (document.getElementById("piston_time").disabled == true) {
            document.getElementById("piston_time").value = truncate(($("#piston_time").val()));
        }
    }
    if ($('#rod_time').val().indexOf(".") != -1) {
        if (document.getElementById("rod_time").disabled == true) {
            document.getElementById("rod_time").value = truncate(($("#rod_time").val()));
        }
    }
    if ($('#piston_velocity').val().indexOf(".") != -1) {
        if (document.getElementById("piston_velocity").disabled == true) {
            document.getElementById("piston_velocity").value = truncate(($("#piston_velocity").val()));
        }
    }
    if ($('#rod_velocity').val().indexOf(".") != -1) {
        if (document.getElementById("rod_velocity").disabled == true) {
            document.getElementById("rod_velocity").value = truncate(($("#rod_velocity").val()));
        }
    }
    if ($('#piston_outflow').val().indexOf(".") != -1) {
        document.getElementById("piston_outflow").value = truncate(($("#piston_outflow").val()));
    }
    if ($('#rod_outflow').val().indexOf(".") != -1) {
        document.getElementById("rod_outflow").value = truncate(($("#rod_outflow").val()));
    }
    if ($('#ratio').val().indexOf(".") != -1) {
        document.getElementById("ratio").value = truncate(($("#ratio").val()));
    }
    if (document.getElementById("preassure").disabled == true) {

        if ($('#preassure').val().indexOf(".") != -1) {
            //alert("HIiiiiiiiii");
            if (document.getElementById("preassure").disabled == true) {
                //alert("Byeeeeeeeee");
                //document.getElementById("preassure").value = truncate(($(this).val()));
                document.getElementById("preassure").value = truncate(($("#preassure").val()));
            }
            //document.getElementById("preassure").value=	truncate(($("#preassure").val()));
        }
    }
    if ($('#oilflow').val().indexOf(".") != -1) {
        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = truncate(($("#oilflow").val()));
        }
    }

    if ($('#stroke').val().indexOf(".") != -1) {
        if (document.getElementById("stroke").disabled == true) {
            document.getElementById("stroke").value = truncate(($(this).val()));
        }
    }
    if ($('#rod').val().indexOf(".") != -1) {
        if (document.getElementById("rod").disabled == true) {
            document.getElementById("rod").value = truncate(($("#rod").val()));
        }

    }
    if ($('#piston').val().indexOf(".") != -1) {
        if (document.getElementById("piston").disabled == true) {
            document.getElementById("piston").value = truncate(($(this).val()));
        }
    }
}

function truncateDropdownEvent() {

    if ($('#stroke').val().indexOf(".") != -1) {
        document.getElementById("stroke").value = truncate(($("#stroke").val()));
    }
    if ($('#rod').val().indexOf(".") != -1) {
        document.getElementById("rod").value = truncate(($("#rod").val()));
    }
    if ($('#piston').val().indexOf(".") != -1) {
        document.getElementById("piston").value = truncate(($("#piston").val()));
    }
    if ($('#preassure').val().indexOf(".") != -1) {
        document.getElementById("preassure").value = truncate(($("#preassure").val()));
    }
    if ($('#oilflow').val().indexOf(".") != -1) {
        document.getElementById("oilflow").value = truncate(($("#oilflow").val()));
    }
    if ($('#piston_force').val().indexOf(".") != -1) {
        document.getElementById("piston_force").value = truncate(($("#piston_force").val()));
    }
    if ($('#rod_force').val().indexOf(".") != -1) {
        document.getElementById("rod_force").value = truncate(($("#rod_force").val()));
    }
    if ($('#piston_time').val().indexOf(".") != -1) {
        document.getElementById("piston_time").value = truncate(($("#piston_time").val()));
    }
    if ($('#rod_time').val().indexOf(".") != -1) {
        document.getElementById("rod_time").value = truncate(($("#rod_time").val()));
    }
    if ($('#piston_velocity').val().indexOf(".") != -1) {
        document.getElementById("piston_velocity").value = truncate(($("#piston_velocity").val()));
    }
    if ($('#rod_velocity').val().indexOf(".") != -1) {
        document.getElementById("rod_velocity").value = truncate(($("#rod_velocity").val()));
    }


}

/* Resultant value truncation code */

$(document).ready(function() {

    $("#unit1,#unit2,#unit3,#unit4,#unit5,#unit11,#unit12,#unit13,#unit14,#unit15,#unit16").change(function() {
        exponentialConvertor();
        truncateDropdownEvent();
    });
    $("#piston,#rod,#stroke,#preassure,#oilflow,#piston_force,#rod_force,#piston_time,#rod_time,#piston_velocity,#rod_velocity").keyup(function() {
        exponentialConvertor();
    });
});