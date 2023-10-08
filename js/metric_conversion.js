/**
  *Conversion Functions
  @purpose- To convert metric units of Area,Volume,Force,
   Time,Velocity,Outflow of Hydraulic Cylinder
   for both piston side as well as rod side user piston side
  @author-Ritwik Mukhopadhyay
  **/

/********************************************
 **Unit Conversion in Input Panel DropDowns**
 ********************************************/


/**unit conversion in Piston/Bore Diamater**/

$(document).ready(function() {
    var prev = null;
    var cur = $('#unit1').val();
    var flag = true;

    $('select#unit1').change(function() {
        //Changed By Prakhar
        $(".unit_selection_new").click(function(event) {
            if (flagForNotChangingMeasurementFields == false) {
                return;
            }
            if (measurementUnitFlag.toLowerCase() == "metric") {
                cur = "mm";
            }
        });
        //Changes By Prakhar
        $('#clear').click(function() {
            $("#unit1").prop('selectedIndex', 0);
            $("#unit1").resetSS();
            prev = null;
            cur = $('#unit1').val();
        });
        // End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }

        if ($('#piston').val() > 0) {

            if (prev == "mm") {
                if (cur == "cm") {
                    document.getElementById("piston").value = document.getElementById("piston").value / 10;
                } else if (cur == "m") {
                    document.getElementById("piston").value = document.getElementById("piston").value / 1000;
                }
            } else if (prev == 'cm') {
                if (cur == 'm')
                    document.getElementById("piston").value = document.getElementById("piston").value / 100;
                else if (cur == 'mm')
                    document.getElementById("piston").value = document.getElementById("piston").value * 10;
            } else if (prev == 'm') {
                if (cur == 'cm')
                    document.getElementById("piston").value = document.getElementById("piston").value * 100;
                else if (cur == 'mm')
                    document.getElementById("piston").value = document.getElementById("piston").value * 1000;
            }
        }


    });
});

/**unit conversion for Rod Diameter**/
$(document).ready(function() {
    var prev = null;
    var cur = $('#unit2').val();
    var flag = true;
    $('select#unit2').change(function() {
        $(".unit_selection_new").click(function(event) {
            if (flagForNotChangingMeasurementFields == false) {
                return;
            }
            if (measurementUnitFlag.toLowerCase() == "metric") {
                cur = "mm";
            }
        });
        //Changes By Prakhar
        $('#clear').click(function() {
            $("#unit2").prop('selectedIndex', 0);
            $("#unit2").resetSS();
            prev = null;
            cur = $('#unit2').val();
        });
        // End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }

        if ($('#rod').val() > 0) {
            if (prev == "mm") {
                if (cur == "cm") {
                    document.getElementById("rod").value = document.getElementById("rod").value / 10;
                } else if (cur == "m") {
                    document.getElementById("rod").value = document.getElementById("rod").value / 1000;
                }
            } else if (prev == 'cm') {
                if (cur == 'm')
                    document.getElementById("rod").value = document.getElementById("rod").value / 100;
                else if (cur == 'mm')
                    document.getElementById("rod").value = document.getElementById("rod").value * 10;
            } else if (prev == 'm') {
                if (cur == 'cm')
                    document.getElementById("rod").value = document.getElementById("rod").value * 100;
                else if (cur == 'mm')
                    document.getElementById("rod").value = document.getElementById("rod").value * 1000;
            }
        }
    });
});


/**unit conversion for Stroke**/
$(document).ready(function() {
    var prev = null;
    var cur = $('#unit3').val();
    var flag = true;
    $('select#unit3').change(function() {
        $(".unit_selection_new").click(function(event) {
            if (flagForNotChangingMeasurementFields == false) {
                return;
            }
            if (measurementUnitFlag.toLowerCase() == "metric") {
                cur = "mm";
            }
        });
        //Changes By Prakhar
        $('#clear').click(function() {
            $("#unit3").prop('selectedIndex', 0);
            $("#unit3").resetSS();
            prev = null;
            cur = $('#unit3').val();
        });
        // End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }

        if ($('#stroke').val() > 0) {
            if (prev == "mm") {
                if (cur == "cm") {
                    document.getElementById("stroke").value = document.getElementById("stroke").value / 10;
                } else if (cur == "m") {
                    document.getElementById("stroke").value = document.getElementById("stroke").value / 1000;
                }
            } else if (prev == 'cm') {
                if (cur == 'm')
                    document.getElementById("stroke").value = document.getElementById("stroke").value / 100;
                else if (cur == 'mm')
                    document.getElementById("stroke").value = document.getElementById("stroke").value * 10;
            } else if (prev == 'm') {
                if (cur == 'cm')
                    document.getElementById("stroke").value = document.getElementById("stroke").value * 100;
                else if (cur == 'mm')
                    document.getElementById("stroke").value = document.getElementById("stroke").value * 1000;
            }
        }
    });
});

/**unit conversion for Pressure**/

$(document).ready(function() {
    var prev = null;
    var cur = $('#unit4').val();
    var flag = true;
    $('select#unit4').change(function() {
        $(".unit_selection_new").click(function(event) {
            if (flagForNotChangingMeasurementFields == false) {
                return;
            }
            if (measurementUnitFlag.toLowerCase() == "metric") {
                cur = "bar";
            }
        });
        //Changes By Prakhar
        $('#clear').click(function() {
            $("#unit4").prop('selectedIndex', 0);
            $("#unit4").resetSS();
            prev = null;
            cur = $('#unit4').val();
        });
        // End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }

        if ($('#preassure').val() > 0) {

            if (prev == "bar") {
                if (cur == "P") {
                    //document.getElementById("preassure").value = document.getElementById("preassure").value*100000;
                    document.getElementById("preassure").value = (parseFloat(parseFloat(document.getElementById("preassure").value).toFixed(20) * 100000)).toFixed(20);
                } else if (cur == "MPa") {
                    //document.getElementById("preassure").value = document.getElementById("preassure").value/10;
                    document.getElementById("preassure").value = (parseFloat(parseFloat(document.getElementById("preassure").value).toFixed(20) / 10)).toFixed(20);
                }
            } else if (prev == 'P') {
                if (cur == 'MPa') {
                    //document.getElementById("preassure").value=document.getElementById("preassure").value/1000000;
                    document.getElementById("preassure").value = (parseFloat(parseFloat(document.getElementById("preassure").value).toFixed(20) / 1000000)).toFixed(20);
                } else if (cur == 'bar') {
                    //document.getElementById("preassure").value=document.getElementById("preassure").value/100000;	
                    document.getElementById("preassure").value = (parseFloat(parseFloat(document.getElementById("preassure").value).toFixed(20) / 100000)).toFixed(20);
                }
            } else if (prev == 'MPa') {
                if (cur == 'bar') {
                    //document.getElementById("preassure").value=document.getElementById("preassure").value*10;
                    document.getElementById("preassure").value = (parseFloat(parseFloat(document.getElementById("preassure").value).toFixed(20) * 10)).toFixed(20);
                } else if (cur == 'P') {
                    //document.getElementById("preassure").value=document.getElementById("preassure").value*1000000;
                    document.getElementById("preassure").value = (parseFloat(parseFloat(document.getElementById("preassure").value).toFixed(20) * 1000000)).toFixed(20);
                }
            }
        }
    });
});

/**unit conversion for Oilflow**/

$(document).ready(function() {

    var prev = null;
    var cur = $('#unit5').val();
    var flag = true;
    $('select#unit5').change(function() {
        $(".unit_selection_new").click(function(event) {
            if (flagForNotChangingMeasurementFields == false) {
                return;
            }
            if (measurementUnitFlag.toLowerCase() == "metric") {
                cur = "lpm";
            }
        });
        //Changes By Prakhar
        $('#clear').click(function() {
            $("#unit5").prop('selectedIndex', 0);
            $("#unit5").resetSS();
            prev = null;
            cur = $('#unit5').val();
        });
        // End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }


        if ($('#oilflow').val() > 0) {
            if (prev == "lpm") {
                if (cur == "m3/min") {
                    //document.getElementById("oilflow").value = document.getElementById("oilflow").value*0.001;
                    document.getElementById("oilflow").value = (parseFloat(parseFloat(document.getElementById("oilflow").value).toFixed(20) * 0.001)).toFixed(20);
                } else if (cur == "cm3/min") {
                    //document.getElementById("oilflow").value = document.getElementById("oilflow").value*1000;
                    document.getElementById("oilflow").value = (parseFloat(parseFloat(document.getElementById("oilflow").value).toFixed(20) * 1000)).toFixed(20);
                }
            } else if (prev == 'm3/min') {
                if (cur == 'cm3/min') {
                    //document.getElementById("oilflow").value=document.getElementById("oilflow").value*1000000;
                    document.getElementById("oilflow").value = (parseFloat(parseFloat(document.getElementById("oilflow").value).toFixed(20) * 1000000)).toFixed(20);
                } else if (cur == 'lpm') {
                    //document.getElementById("oilflow").value=document.getElementById("oilflow").value*1000;	
                    document.getElementById("oilflow").value = (parseFloat(parseFloat(document.getElementById("oilflow").value).toFixed(20) * 1000)).toFixed(20);
                }
            } else if (prev == 'cm3/min') {
                if (cur == 'lpm') {
                    //document.getElementById("oilflow").value=document.getElementById("oilflow").value*0.001;
                    document.getElementById("oilflow").value = (parseFloat(parseFloat(document.getElementById("oilflow").value).toFixed(20) * 0.001)).toFixed(20);
                } else if (cur == 'm3/min') {
                    //document.getElementById("oilflow").value=document.getElementById("oilflow").value/1000000;
                    document.getElementById("oilflow").value = (parseFloat(parseFloat(document.getElementById("oilflow").value).toFixed(20) / 1000000)).toFixed(20);
                }
            }

        }
    });
});


/**********************************************
 ** Unit Conversion in Output Panel Dropdowns**
 **********************************************/

/**unit conversion for Area**/


/**unit conversion for Piston/Bore side Area**/

$(document).ready(function() {
    var prev = null;
    var cur = $('#unit11').val();
    var flag = true;
    $('select#unit11').change(function() {
        $(".unit_selection_new").click(function(event) {
            if (flagForNotChangingMeasurementFields == false) {
                return;
            }
            if (measurementUnitFlag.toLowerCase() == "metric") {
                cur = "cm2";
            }
        });
        //Changes By Prakhar
        $('#clear').click(function() {
            $("#unit11").prop('selectedIndex', 0);
            $("#unit11").resetSS();
            prev = null;
            cur = $('#unit11').val();
        });
        // End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }

        if ($('#piston_area').val() > 0) {
            if (prev == "cm2") {
                if (cur == "m2") {
                    //var test14 = (parseFloat(parseFloat(document.getElementById("piston_area").value).toFixed(20)*0.0001)).toFixed(20);
                    document.getElementById("piston_area").value = (parseFloat(parseFloat(document.getElementById("piston_area").value).toFixed(20) * 0.0001)).toFixed(20);
                } else if (cur == "mm2") {
                    document.getElementById("piston_area").value = (parseFloat(parseFloat(document.getElementById("piston_area").value).toFixed(20) * 100)).toFixed(20);
                    //document.getElementById("piston_area").value = document.getElementById("piston_area").value*100;
                }
            } else if (prev == 'm2') {
                if (cur == 'mm2') {
                    //document.getElementById("piston_area").value=document.getElementById("piston_area").value*1000000;
                    document.getElementById("piston_area").value = (parseFloat(parseFloat(document.getElementById("piston_area").value).toFixed(20) * 1000000)).toFixed(20);
                } else if (cur == 'cm2') {
                    //var test23 = (parseFloat(parseFloat(document.getElementById("piston_area").value).toFixed(20)*10000)).toFixed(20);
                    document.getElementById("piston_area").value = (parseFloat(parseFloat(document.getElementById("piston_area").value).toFixed(20) * 10000)).toFixed(20);
                }
            } else if (prev == 'mm2') {
                if (cur == 'm2') {
                    //document.getElementById("piston_area").value=document.getElementById("piston_area").value/1000000;
                    document.getElementById("piston_area").value = (parseFloat(parseFloat(document.getElementById("piston_area").value).toFixed(20) / 1000000)).toFixed(20);
                } else if (cur == 'cm2') {
                    //document.getElementById("piston_area").value=document.getElementById("piston_area").value/100;
                    document.getElementById("piston_area").value = (parseFloat(parseFloat(document.getElementById("piston_area").value).toFixed(20) / 100)).toFixed(20);
                }
            }
        }
    });
});

/**unit conversion for Rod side Area**/
$(document).ready(function() {
    var prev = null;
    var cur = $('#unit11').val();
    var flag = true;
    var rod_area = document.getElementById("rod_area").value - 0;

    $('select#unit11').change(function() {
        $(".unit_selection_new").click(function(event) {
            if (flagForNotChangingMeasurementFields == false) {
                return;
            }
            if (measurementUnitFlag.toLowerCase() == "metric") {
                cur = "cm2";
            }
        });
        //Changes By Prakhar
        $('#clear').click(function() {
            $("#unit11").prop('selectedIndex', 0);
            $("#unit11").resetSS();
            prev = null;
            cur = $('#unit11').val();
        });
        // End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }

        if ($('#rod_area').val() > 0) {

            if (prev == "cm2") {
                if (cur == "m2") {
                    document.getElementById("rod_area").value = (parseFloat(parseFloat(document.getElementById("rod_area").value).toFixed(20) * 0.0001)).toFixed(20);

                    //document.getElementById("rod_area").value = document.getElementById("rod_area").value*0.0001;
                } else if (cur == "mm2") {
                    document.getElementById("rod_area").value = (parseFloat(parseFloat(document.getElementById("rod_area").value).toFixed(20) * 100)).toFixed(20);
                    //document.getElementById("rod_area").value = document.getElementById("rod_area").value*100;
                }
            } else if (prev == 'm2') {
                if (cur == 'mm2') {
                    //document.getElementById("rod_area").value=document.getElementById("rod_area").value*1000000;
                    document.getElementById("rod_area").value = (parseFloat(parseFloat(document.getElementById("rod_area").value).toFixed(20) * 1000000)).toFixed(20);
                } else if (cur == 'cm2') {
                    //document.getElementById("rod_area").value=document.getElementById("rod_area").value*10000; 
                    document.getElementById("rod_area").value = (parseFloat(parseFloat(document.getElementById("rod_area").value).toFixed(20) * 10000)).toFixed(20);
                }
            } else if (prev == 'mm2') {
                if (cur == 'm2') {
                    //document.getElementById("rod_area").value=document.getElementById("rod_area").value/1000000;
                    document.getElementById("rod_area").value = (parseFloat(parseFloat(document.getElementById("rod_area").value).toFixed(20) / 1000000)).toFixed(20);
                } else if (cur == 'cm2') {
                    //document.getElementById("rod_area").value=document.getElementById("rod_area").value/100;
                    document.getElementById("rod_area").value = (parseFloat(parseFloat(document.getElementById("rod_area").value).toFixed(20) / 100)).toFixed(20);
                }
            }
        }

    });
});

/**code ends here**/

/**Unit Conversion for Volume**/

/**unit conversion for Piston/Bore side Volume**/
$(document).ready(function() {
    var prev = null;
    var cur = $('#unit12').val();
    var flag = true;
    var rod_area = document.getElementById("rod_area").value - 0;

    $('select#unit12').change(function() {
        $(".unit_selection_new").click(function(event) {
            if (flagForNotChangingMeasurementFields == false) {
                return;
            }
            if (measurementUnitFlag.toLowerCase() == "metric") {
                cur = "l";
            }
        });
        //Changes By Prakhar
        $('#clear').click(function() {
            $("#unit12").prop('selectedIndex', 0);
            $("#unit12").resetSS();
            prev = null;
            cur = $('#unit12').val();
        });
        // End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }

        if ($('#piston_volume').val() > 0) {

            if (prev == "l") {
                if (cur == "cm3") {
                    //document.getElementById("piston_volume").value = document.getElementById("piston_volume").value*1000;
                    document.getElementById("piston_volume").value = (parseFloat(parseFloat(document.getElementById("piston_volume").value).toFixed(20) * 1000)).toFixed(20);
                } else if (cur == "m3") {
                    //document.getElementById("piston_volume").value = document.getElementById("piston_volume").value*0.001;
                    document.getElementById("piston_volume").value = (parseFloat(parseFloat(document.getElementById("piston_volume").value).toFixed(20) * 0.001)).toFixed(20);
                }
            } else if (prev == 'cm3') {
                if (cur == 'm3') {
                    //document.getElementById("piston_volume").value=document.getElementById("piston_volume").value/1000000;
                    document.getElementById("piston_volume").value = (parseFloat(parseFloat(document.getElementById("piston_volume").value).toFixed(20) / 1000000)).toFixed(20);
                } else if (cur == 'l') {
                    //document.getElementById("piston_volume").value=document.getElementById("piston_volume").value*0.001;
                    document.getElementById("piston_volume").value = (parseFloat(parseFloat(document.getElementById("piston_volume").value).toFixed(20) * 0.001)).toFixed(20);
                }
            } else if (prev == 'm3') {
                if (cur == 'l') {
                    //document.getElementById("piston_volume").value=document.getElementById("piston_volume").value*1000;
                    document.getElementById("piston_volume").value = (parseFloat(parseFloat(document.getElementById("piston_volume").value).toFixed(20) * 1000)).toFixed(20);
                } else if (cur == 'cm3') {
                    //document.getElementById("piston_volume").value=document.getElementById("piston_volume").value*1000000;
                    document.getElementById("piston_volume").value = (parseFloat(parseFloat(document.getElementById("piston_volume").value).toFixed(20) * 1000000)).toFixed(20);
                }
            }
        }

    });
});


/**unit conversion for Rod side Volume**/
$(document).ready(function() {
    var prev = null;
    var cur = $('#unit12').val();
    var flag = true;
    var rod_area = document.getElementById("rod_area").value - 0;

    $('select#unit12').change(function() {
        $(".unit_selection_new").click(function(event) {
            if (flagForNotChangingMeasurementFields == false) {
                return;
            }
            if (measurementUnitFlag.toLowerCase() == "metric") {
                cur = "l";
            }
        });
        //Changes By Prakhar
        $('#clear').click(function() {
            $("#unit12").prop('selectedIndex', 0);
            $("#unit12").resetSS();
            prev = null;
            cur = $('#unit12').val();
        });
        // End Changes By Prakhar

        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }

        if ($('#rod_volume').val() > 0) {
            if (prev == "l") {
                if (cur == "cm3") {
                    //document.getElementById("rod_volume").value = document.getElementById("rod_volume").value*1000;
                    document.getElementById("rod_volume").value = (parseFloat(parseFloat(document.getElementById("rod_volume").value).toFixed(20) * 1000)).toFixed(20);
                } else if (cur == "m3") {
                    //document.getElementById("rod_volume").value = document.getElementById("rod_volume").value*0.001;
                    document.getElementById("rod_volume").value = (parseFloat(parseFloat(document.getElementById("rod_volume").value).toFixed(20) * .001)).toFixed(20);
                }
            } else if (prev == 'cm3') {
                if (cur == 'm3') {
                    //document.getElementById("rod_volume").value=document.getElementById("rod_volume").value/1000000;
                    document.getElementById("rod_volume").value = (parseFloat(parseFloat(document.getElementById("rod_volume").value).toFixed(20) / 1000000)).toFixed(20);
                } else if (cur == 'l') {
                    //document.getElementById("rod_volume").value=document.getElementById("rod_volume").value*0.001; 
                    document.getElementById("rod_volume").value = (parseFloat(parseFloat(document.getElementById("rod_volume").value).toFixed(20) * 0.001)).toFixed(20);
                }
            } else if (prev == 'm3') {
                if (cur == 'l') {
                    //document.getElementById("rod_volume").value=document.getElementById("rod_volume").value*1000;
                    document.getElementById("rod_volume").value = (parseFloat(parseFloat(document.getElementById("rod_volume").value).toFixed(20) * 1000)).toFixed(20);
                } else if (cur == 'cm3') {
                    //document.getElementById("rod_volume").value=document.getElementById("rod_volume").value*1000000;
                    document.getElementById("rod_volume").value = (parseFloat(parseFloat(document.getElementById("rod_volume").value).toFixed(20) * 1000000)).toFixed(20);
                }
            }
        }

    });
});

/**code ends here**/

/**Unit Conversion for Force**/

/**unit conversion for Piston/Bore side Force**/
$(document).ready(function() {
    var prev = null;
    var cur = $('#unit13').val();
    var flag = true;
    var rod_area = document.getElementById("rod_area").value - 0;

    $('select#unit13').change(function() {
        $(".unit_selection_new").click(function(event) {
            if (flagForNotChangingMeasurementFields == false) {
                return;
            }
            if (measurementUnitFlag.toLowerCase() == "metric") {
                cur = "kN";
            }
        });
        //Changes By Prakhar
        $('#clear').click(function() {
            $("#unit13").prop('selectedIndex', 0);
            $("#unit13").resetSS();
            prev = null;
            cur = $('#unit13').val();
        });
        // End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }

        if ($('#piston_force').val() > 0) {
            if (prev == "kN") {
                if (cur == "N") {
                    //document.getElementById("piston_force").value = (document.getElementById("piston_force").value*1000);
                    document.getElementById("piston_force").value = (parseFloat(parseFloat(document.getElementById("piston_force").value).toFixed(20) * 1000)).toFixed(20);
                    //alert((parseFloat(parseFloat(document.getElementById("piston_force").value).toFixed(20)*1000)).toFixed(20));
                } else if (cur == "dyn") {
                    //document.getElementById("piston_force").value = (document.getElementById("piston_force").value*100000000);
                    document.getElementById("piston_force").value = (parseFloat(parseFloat(document.getElementById("piston_force").value).toFixed(20) * 100000000)).toFixed(20);
                } else if (cur == 'kgf') {
                    //document.getElementById("piston_force").value = (document.getElementById("piston_force").value*101.971621);
                    document.getElementById("piston_force").value = (parseFloat(parseFloat(document.getElementById("piston_force").value).toFixed(20) * 101.971621)).toFixed(20);
                    //alert("kN to Kgf"+(parseFloat(parseFloat(document.getElementById("piston_force").value).toFixed(20)*101.971621)).toFixed(20));
                }
            } else if (prev == 'N') {
                if (cur == 'dyn') {
                    //document.getElementById("piston_force").value=(document.getElementById("piston_force").value*100000);
                    document.getElementById("piston_force").value = (parseFloat(parseFloat(document.getElementById("piston_force").value).toFixed(20) * 100000)).toFixed(20);
                } else if (cur == 'kN') {
                    //document.getElementById("piston_force").value=(document.getElementById("piston_force").value*0.001); 
                    document.getElementById("piston_force").value = (parseFloat(parseFloat(document.getElementById("piston_force").value).toFixed(20) * 0.001)).toFixed(20);
                } else if (cur == 'kgf') {
                    //document.getElementById("piston_force").value=(document.getElementById("piston_force").value*0.101971621);
                    document.getElementById("piston_force").value = (parseFloat(parseFloat(document.getElementById("piston_force").value).toFixed(20) * 0.101971621)).toFixed(20);
                }
            } else if (prev == 'dyn') {
                if (cur == 'kN') {
                    //document.getElementById("piston_force").value=(document.getElementById("piston_force").value/100000000);
                    document.getElementById("piston_force").value = (parseFloat(parseFloat(document.getElementById("piston_force").value).toFixed(20) / 100000000)).toFixed(20);
                } else if (cur == 'N') {
                    //document.getElementById("piston_force").value=(document.getElementById("piston_force").value/100000);
                    document.getElementById("piston_force").value = (parseFloat(parseFloat(document.getElementById("piston_force").value).toFixed(20) / 100000)).toFixed(20);
                } else if (cur == 'kgf') {
                    //document.getElementById("piston_force").value=(document.getElementById("piston_force").value*0.00000101971621);
                    document.getElementById("piston_force").value = (parseFloat(parseFloat(document.getElementById("piston_force").value).toFixed(20) * 0.00000101971621)).toFixed(20);
                }
            } else if (prev == 'kgf') {
                if (cur == 'kN') {
                    //document.getElementById("piston_force").value=(document.getElementById("piston_force").value*0.00980665);
                    document.getElementById("piston_force").value = (parseFloat(parseFloat(document.getElementById("piston_force").value).toFixed(20) * 0.00980665)).toFixed(20);
                    //alert("Kgf to DN"+(parseFloat(parseFloat(document.getElementById("piston_force").value).toFixed(20)*0.00980665)).toFixed(20));
                } else if (cur == 'N') {
                    //document.getElementById("piston_force").value=(document.getElementById("piston_force").value*9.80665);
                    document.getElementById("piston_force").value = (parseFloat(parseFloat(document.getElementById("piston_force").value).toFixed(20) * 9.80665)).toFixed(20);
                } else if (cur == 'dyn') {
                    //document.getElementById("piston_force").value=(document.getElementById("piston_force").value*980665);
                    document.getElementById("piston_force").value = (parseFloat(parseFloat(document.getElementById("piston_force").value).toFixed(20) * 980665)).toFixed(20);
                }
            }

        }

    });
});


/**unit conversion for Rod side Force**/
$(document).ready(function() {
    var prev = null;
    var cur = $('#unit13').val();
    var flag = true;
    var rod_area = document.getElementById("rod_area").value - 0;

    $('select#unit13').change(function() {
        $(".unit_selection_new").click(function(event) {
            if (flagForNotChangingMeasurementFields == false) {
                return;
            }
            if (measurementUnitFlag.toLowerCase() == "metric") {
                cur = "kN";
            }
        });
        //Changes By Prakhar
        $('#clear').click(function() {
            $("#unit13").prop('selectedIndex', 0);
            $("#unit13").resetSS();
            prev = null;
            cur = $('#unit13').val();
        });
        // End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }

        if ($('#rod_force').val() > 0) {

            if (prev == "kN") {
                if (cur == "N") {
                    //document.getElementById("rod_force").value = (document.getElementById("rod_force").value*1000);
                    document.getElementById("rod_force").value = (parseFloat(parseFloat(document.getElementById("rod_force").value).toFixed(20) * 1000)).toFixed(20);
                } else if (cur == "dyn") {
                    //document.getElementById("rod_force").value = (document.getElementById("rod_force").value*100000000);
                    document.getElementById("rod_force").value = (parseFloat(parseFloat(document.getElementById("rod_force").value).toFixed(20) * 100000000)).toFixed(20);
                } else if (cur == 'kgf') {
                    //document.getElementById("rod_force").value = (document.getElementById("rod_force").value*101.971621);
                    document.getElementById("rod_force").value = (parseFloat(parseFloat(document.getElementById("rod_force").value).toFixed(20) * 101.971621)).toFixed(20);
                }
            } else if (prev == 'N') {
                if (cur == 'dyn') {
                    //document.getElementById("rod_force").value=(document.getElementById("rod_force").value*100000);
                    document.getElementById("rod_force").value = (parseFloat(parseFloat(document.getElementById("rod_force").value).toFixed(20) * 100000)).toFixed(20);
                } else if (cur == 'kN') {
                    //document.getElementById("rod_force").value=(document.getElementById("rod_force").value*0.001); 
                    document.getElementById("rod_force").value = (parseFloat(parseFloat(document.getElementById("rod_force").value).toFixed(20) * 0.001)).toFixed(20);
                } else if (cur == 'kgf') {
                    //document.getElementById("rod_force").value=(document.getElementById("rod_force").value*0.101971621);
                    document.getElementById("rod_force").value = (parseFloat(parseFloat(document.getElementById("rod_force").value).toFixed(20) * 0.101971621)).toFixed(20);
                }
            } else if (prev == 'dyn') {
                if (cur == 'kN') {
                    //document.getElementById("rod_force").value=(document.getElementById("rod_force").value/100000000);
                    document.getElementById("rod_force").value = (parseFloat(parseFloat(document.getElementById("rod_force").value).toFixed(20) / 100000000)).toFixed(20);
                } else if (cur == 'N') {
                    //document.getElementById("rod_force").value=(document.getElementById("rod_force").value/100000);
                    document.getElementById("rod_force").value = (parseFloat(parseFloat(document.getElementById("rod_force").value).toFixed(20) / 100000)).toFixed(20);
                } else if (cur == 'kgf') {
                    //document.getElementById("rod_force").value=(document.getElementById("rod_force").value*0.00000101971621);
                    document.getElementById("rod_force").value = (parseFloat(parseFloat(document.getElementById("rod_force").value).toFixed(20) * 0.00000101971621)).toFixed(20);
                }
            } else if (prev == 'kgf') {
                if (cur == 'kN') {
                    //document.getElementById("rod_force").value=(document.getElementById("rod_force").value*0.00980665);
                    document.getElementById("rod_force").value = (parseFloat(parseFloat(document.getElementById("rod_force").value).toFixed(20) * 0.00980665)).toFixed(20);
                } else if (cur == 'N') {
                    //document.getElementById("rod_force").value=(document.getElementById("rod_force").value*9.80665);
                    document.getElementById("rod_force").value = (parseFloat(parseFloat(document.getElementById("rod_force").value).toFixed(20) * 9.80665)).toFixed(20);
                } else if (cur == 'dyn') {
                    //document.getElementById("rod_force").value=(document.getElementById("rod_force").value*980665);
                    document.getElementById("rod_force").value = (parseFloat(parseFloat(document.getElementById("rod_force").value).toFixed(20) * 980665)).toFixed(20);
                }
            }
        }


    });
});
/**code ends here**/

/**Unit Conversion for Time**/

/**unit conversion for Piston/Bore side Time**/
$(document).ready(function() {
    var prev = null;
    var cur = $('#unit14').val();
    var flag = true;
    var rod_area = document.getElementById("rod_area").value - 0;

    $('select#unit14').change(function() {
        $(".unit_selection_new").click(function(event) {
            if (flagForNotChangingMeasurementFields == false) {
                return;
            }
            if (measurementUnitFlag.toLowerCase() == "metric") {
                cur = "sec";
            }
        });
        //Changes By Prakhar
        $('#clear').click(function() {
            $("#unit14").prop('selectedIndex', 0);
            $("#unit14").resetSS();
            prev = null;
            cur = $('#unit14').val();
        });
        // End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }

        if ($('#piston_time').val() > 0) {
            if (prev == "sec") {
                if (cur == "min") {
                    //document.getElementById("piston_time").value = document.getElementById("piston_time").value*0.0166667;
                    document.getElementById("piston_time").value = (parseFloat(parseFloat(document.getElementById("piston_time").value).toFixed(20) * 0.0166667)).toFixed(20);
                } else if (cur == "ms") {
                    //document.getElementById("piston_time").value = document.getElementById("piston_time").value*1000;
                    document.getElementById("piston_time").value = (parseFloat(parseFloat(document.getElementById("piston_time").value).toFixed(20) * 1000)).toFixed(20);
                }
            } else if (prev == 'min') {
                if (cur == 'ms') {
                    //document.getElementById("piston_time").value=document.getElementById("piston_time").value*60000;
                    document.getElementById("piston_time").value = (parseFloat(parseFloat(document.getElementById("piston_time").value).toFixed(20) * 60000)).toFixed(20);
                } else if (cur == 'sec') {
                    //document.getElementById("piston_time").value=document.getElementById("piston_time").value*60;    
                    document.getElementById("piston_time").value = (parseFloat(parseFloat(document.getElementById("piston_time").value).toFixed(20) * 60)).toFixed(20);
                }
            } else if (prev == 'ms') {
                if (cur == 'sec') {
                    //document.getElementById("piston_time").value=document.getElementById("piston_time").value*0.001;
                    document.getElementById("piston_time").value = (parseFloat(parseFloat(document.getElementById("piston_time").value).toFixed(20) * 0.001)).toFixed(20);
                } else if (cur == 'min') {
                    //document.getElementById("piston_time").value=document.getElementById("piston_time").value*0.000016666666666666667;
                    document.getElementById("piston_time").value = (parseFloat(parseFloat(document.getElementById("piston_time").value).toFixed(20) * 0.000016666666666666667)).toFixed(20);
                }
            }
        }

    });
});

/**unit conversion for Rod side Time**/
$(document).ready(function() {
    var prev = null;
    var cur = $('#unit14').val();
    var flag = true;
    var rod_area = document.getElementById("rod_area").value - 0;

    $('select#unit14').change(function() {
        $(".unit_selection_new").click(function(event) {
            if (flagForNotChangingMeasurementFields == false) {
                return;
            }
            if (measurementUnitFlag.toLowerCase() == "metric") {
                cur = "sec";
            }
        });
        //Changes By Prakhar
        $('#clear').click(function() {
            $("#unit14").prop('selectedIndex', 0);
            $("#unit14").resetSS();
            prev = null;
            cur = $('#unit14').val();
        });
        // End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }

        if ($('#rod_time').val() > 0) {
            if (prev == "sec") {
                if (cur == "min") {
                    //document.getElementById("rod_time").value = document.getElementById("rod_time").value*0.0166667;
                    document.getElementById("rod_time").value = (parseFloat(parseFloat(document.getElementById("rod_time").value).toFixed(20) * 0.0166667)).toFixed(20);
                } else if (cur == "ms") {
                    //document.getElementById("rod_time").value = document.getElementById("rod_time").value*1000;
                    document.getElementById("rod_time").value = (parseFloat(parseFloat(document.getElementById("rod_time").value).toFixed(20) * 1000)).toFixed(20);
                }
            } else if (prev == 'min') {
                if (cur == 'ms') {
                    //document.getElementById("rod_time").value=document.getElementById("rod_time").value*60000;
                    document.getElementById("rod_time").value = (parseFloat(parseFloat(document.getElementById("rod_time").value).toFixed(20) * 60000)).toFixed(20);
                } else if (cur == 'sec') {
                    //document.getElementById("rod_time").value=document.getElementById("rod_time").value*60;
                    document.getElementById("rod_time").value = (parseFloat(parseFloat(document.getElementById("rod_time").value).toFixed(20) * 60)).toFixed(20);
                }
            } else if (prev == 'ms') {
                if (cur == 'sec') {
                    //document.getElementById("rod_time").value=document.getElementById("rod_time").value*0.001;
                    document.getElementById("rod_time").value = (parseFloat(parseFloat(document.getElementById("rod_time").value).toFixed(20) * 0.001)).toFixed(20);
                } else if (cur == 'min') {
                    //document.getElementById("rod_time").value=document.getElementById("rod_time").value*0.000016666666666666667;
                    document.getElementById("rod_time").value = (parseFloat(parseFloat(document.getElementById("rod_time").value).toFixed(20) * 0.000016666666666666667)).toFixed(20);
                }
            }
        }

    });
});
/**code ends here**/

/**Unit Conversion for Velocity**/

/**unit conversion for Piston/Bore Velocity**/
$(document).ready(function() {
    var prev = null;
    var cur = $('#unit15').val();
    var flag = true;
    $("#unit15").change(function() {
        $(".unit_selection_new").click(function(event) {
            if (flagForNotChangingMeasurementFields == false) {
                return;
            }
            if (measurementUnitFlag.toLowerCase() == "metric") {
                cur = "m/s";
            }
        });
        //Changes By Prakhar
        $('#clear').click(function() {
            $("#unit15").prop('selectedIndex', 0);
            $("#unit15").resetSS();
            prev = null;
            cur = $('#unit15').val();
        });
        // End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }
        if ($('#piston_velocity').val() > 0) {
            if (prev == "m/s") {
                if (cur == "cm/s") {
                    document.getElementById("piston_velocity").value = (parseFloat(parseFloat(document.getElementById("piston_velocity").value).toFixed(20) * 100)).toFixed(20);
                }
            }
            if (prev == "cm/s") {
                if (cur == "m/s") {
                    document.getElementById("piston_velocity").value = (parseFloat(parseFloat(document.getElementById("piston_velocity").value).toFixed(20) / 100)).toFixed(20);
                }
            }
        }

        /*
       if($('#piston_velocity').val()>0) 
      {  
        if ($(this).val() == "cm/s") 
		{
            //$("#piston_velocity").val( $("#piston_velocity").val()*100)
			document.getElementById("piston_velocity").value = (parseFloat(parseFloat(document.getElementById("piston_velocity").value).toFixed(20)*100)).toFixed(20);
        } else if($(this).val()=="m/s"){
            //$("#piston_velocity").val( $("#piston_velocity").val()/100)
			document.getElementById("piston_velocity").value = (parseFloat(parseFloat(document.getElementById("piston_velocity").value).toFixed(20)/100)).toFixed(20);
        }
      } 
*/
    });
});

/**unit conversion for Rod side Velocity**/
$(document).ready(function() {

    var prev = null;
    var cur = $('#unit15').val();
    var flag = true;

    $("#unit15").change(function() {
        $(".unit_selection_new").click(function(event) {
            if (flagForNotChangingMeasurementFields == false) {
                return;
            }
            if (measurementUnitFlag.toLowerCase() == "metric") {
                cur = "m/s";
            }
        });
        //Changes By Prakhar
        $('#clear').click(function() {
            $("#unit15").prop('selectedIndex', 0);
            $("#unit15").resetSS();
            prev = null;
            cur = $('#unit15').val();
        });
        // End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }
        if ($('#rod_velocity').val() > 0) {
            if (prev == "m/s") {
                if (cur == "cm/s") {
                    document.getElementById("rod_velocity").value = (parseFloat(parseFloat(document.getElementById("rod_velocity").value).toFixed(20) * 100)).toFixed(20);
                }
            }
            if (prev == "cm/s") {
                if (cur == "m/s") {
                    document.getElementById("rod_velocity").value = (parseFloat(parseFloat(document.getElementById("rod_velocity").value).toFixed(20) / 100)).toFixed(20);
                }
            }
        }
        /*
      if($('#rod_velocity').val()>0)
      {  
        if ($(this).val() == "cm/s") {
            //$("#rod_velocity").val( $("#rod_velocity").val()*100)
			document.getElementById("rod_velocity").value = (parseFloat(parseFloat(document.getElementById("rod_velocity").value).toFixed(20)*100)).toFixed(20);
        } else if($(this).val()=="m/s") {
            //$("#rod_velocity").val( $("#rod_velocity").val()/100)
			document.getElementById("rod_velocity").value = (parseFloat(parseFloat(document.getElementById("rod_velocity").value).toFixed(20)/100)).toFixed(20);
        }
      } 
*/

    });
});
/**code ends here**/


/**Unit Conversion for Outflow**/

/**unit conversion for Piston/Bore side Outflow**/
$(document).ready(function() {
    var prev = null;
    var cur = $('#unit16').val();
    var flag = true;
    var rod_area = document.getElementById("rod_area").value - 0;

    $('select#unit16').change(function() {
        $(".unit_selection_new").click(function(event) {
            if (flagForNotChangingMeasurementFields == false) {
                return;
            }
            if (measurementUnitFlag.toLowerCase() == "metric") {
                cur = "lpm";
            }
        });

        //Changes By Prakhar
        $('#clear').click(function() {
            $("#unit16").prop('selectedIndex', 0);
            $("#unit16").resetSS();
            prev = null;
            cur = $('#unit16').val();
        });
        // End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }

        if ($('#piston_outflow').val() > 0) {

            if (prev == "lpm") {
                if (cur == "m3/min") {
                    //document.getElementById("piston_outflow").value = document.getElementById("piston_outflow").value*0.001;
                    document.getElementById("piston_outflow").value = (parseFloat(parseFloat(document.getElementById("piston_outflow").value).toFixed(20) * 0.001)).toFixed(20);
                } else if (cur == "cm3/min") {
                    //document.getElementById("piston_outflow").value = document.getElementById("piston_outflow").value*1000;
                    document.getElementById("piston_outflow").value = (parseFloat(parseFloat(document.getElementById("piston_outflow").value).toFixed(20) * 1000)).toFixed(20);
                }
            } else if (prev == 'm3/min') {
                if (cur == 'cm3/min') {
                    //document.getElementById("piston_outflow").value=document.getElementById("piston_outflow").value*1000000;
                    document.getElementById("piston_outflow").value = (parseFloat(parseFloat(document.getElementById("piston_outflow").value).toFixed(20) * 1000000)).toFixed(20);
                } else if (cur == 'lpm') {
                    //document.getElementById("piston_outflow").value=document.getElementById("piston_outflow").value*1000; 
                    document.getElementById("piston_outflow").value = (parseFloat(parseFloat(document.getElementById("piston_outflow").value).toFixed(20) * 1000)).toFixed(20);
                }
            } else if (prev == 'cm3/min') {
                if (cur == 'lpm') {
                    //document.getElementById("piston_outflow").value=document.getElementById("piston_outflow").value*0.001;
                    document.getElementById("piston_outflow").value = (parseFloat(parseFloat(document.getElementById("piston_outflow").value).toFixed(20) * 0.001)).toFixed(20);
                } else if (cur == 'm3/min') {
                    //document.getElementById("piston_outflow").value=document.getElementById("piston_outflow").value/1000000;
                    document.getElementById("piston_outflow").value = (parseFloat(parseFloat(document.getElementById("piston_outflow").value).toFixed(20) / 1000000)).toFixed(20);
                }
            }

        }

    });
});

/**unit conversion for Rod side Outflow**/
$(document).ready(function() {
    var prev = null;
    var cur = $('#unit16').val();
    var flag = true;
    var rod_area = document.getElementById("rod_area").value - 0;

    $('select#unit16').change(function() {

        $(".unit_selection_new").click(function(event) {
            if (flagForNotChangingMeasurementFields == false) {
                return;
            }
            if (measurementUnitFlag.toLowerCase() == "metric") {
                cur = "lpm";
            }
        });
        //Changes By Prakhar
        $('#clear').click(function() {
            $("#unit16").prop('selectedIndex', 0);
            $("#unit16").resetSS();
            prev = null;
            cur = $('#unit16').val();
        });
        // End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }

        if ($('#rod_outflow').val() > 0) {
            if (prev == "lpm") {
                if (cur == "m3/min") {
                    //document.getElementById("rod_outflow").value = document.getElementById("rod_outflow").value*0.001;
                    document.getElementById("rod_outflow").value = (parseFloat(parseFloat(document.getElementById("rod_outflow").value).toFixed(20) * 0.001)).toFixed(20);
                } else if (cur == "cm3/min") {
                    //document.getElementById("rod_outflow").value = document.getElementById("rod_outflow").value*1000;
                    document.getElementById("rod_outflow").value = (parseFloat(parseFloat(document.getElementById("rod_outflow").value).toFixed(20) * 1000)).toFixed(20);
                }
            } else if (prev == 'm3/min') {
                if (cur == 'cm3/min') {
                    //document.getElementById("rod_outflow").value=document.getElementById("rod_outflow").value*1000000;
                    document.getElementById("rod_outflow").value = (parseFloat(parseFloat(document.getElementById("rod_outflow").value).toFixed(20) * 1000000)).toFixed(20);
                } else if (cur == 'lpm') {
                    //document.getElementById("rod_outflow").value=document.getElementById("rod_outflow").value*1000;    
                    document.getElementById("rod_outflow").value = (parseFloat(parseFloat(document.getElementById("rod_outflow").value).toFixed(20) * 1000)).toFixed(20);
                }
            } else if (prev == 'cm3/min') {
                if (cur == 'lpm') {
                    //document.getElementById("rod_outflow").value=document.getElementById("rod_outflow").value*0.001;
                    document.getElementById("rod_outflow").value = (parseFloat(parseFloat(document.getElementById("rod_outflow").value).toFixed(20) * 0.001)).toFixed(20);
                } else if (cur == 'm3/min') {
                    //document.getElementById("rod_outflow").value=document.getElementById("rod_outflow").value/1000000;
                    document.getElementById("rod_outflow").value = (parseFloat(parseFloat(document.getElementById("rod_outflow").value).toFixed(20) / 1000000)).toFixed(20);
                }
            }
        }

    });
    $(document).scrollTop(0);
});
/**code ends here**/