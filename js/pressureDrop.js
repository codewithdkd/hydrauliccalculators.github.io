//1)Add the select to motor dds
//2)populate drop down using metric or inches units
function commadotPD() {
    if ($('#inppDFlowRate').val().indexOf(",") >= 0) {
        $('#inppDFlowRate').val($('#inppDFlowRate').val().replace(/\,/g, "."));
    }
    if ($('#inppDDiameter').val().indexOf(",") >= 0) {
        $('#inppDDiameter').val($('#inppDDiameter').val().replace(/\,/g, "."));
    }
    if ($('#inppDOrifice').val().indexOf(",") >= 0) {
        $('#inppDOrifice').val($('#inppDOrifice').val().replace(/\,/g, "."));
    }
    if ($('#inppDGravity').val().indexOf(",") >= 0) {
        $('#inppDGravity').val($('#inppDGravity').val().replace(/\,/g, "."));
    }

    if ($('#inppDFlowRate').val()) {
        $('#inppDFlowRate').val($('#inppDFlowRate').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#inppDDiameter').val()) {
        $('#inppDDiameter').val($('#inppDDiameter').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#inppDOrifice').val()) {
        $('#inppDOrifice').val($('#inppDOrifice').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#inppDGravity').val()) {
        $('#inppDGravity').val($('#inppDGravity').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
}

function convertPressureDropUnits(type, currentUnit, newUnit, valueToReturn, id) {
    //if id is found as a drop down
    if (type == "flowRate") {
        //m3/s,m3/min,lpn 
        if (currentUnit == "m3/s") {
            if (newUnit == "m3/min") {
                if (id == "selpDFlowRate") {
                    //change the corresponding box
                    $("#inppDFlowRate").val(scientificToDecimal(valueToReturn * 60));
                }
                return scientificToDecimal(valueToReturn * 60);
            } else {
                //lpm
                if (id == "selpDFlowRate") {
                    $("#inppDFlowRate").val(scientificToDecimal(valueToReturn * 60000));
                }
                return scientificToDecimal(valueToReturn * 60000);
            }
        } else if (currentUnit == "m3/min") {
            if (newUnit == "m3/s") {
                if (id == "selpDFlowRate") {
                    $("#inppDFlowRate").val(scientificToDecimal(valueToReturn / 60));
                }
                return scientificToDecimal(valueToReturn / 60);
            } else {
                //lpm
                if (id == "selpDFlowRate") {
                    $("#inppDFlowRate").val(scientificToDecimal(valueToReturn * 1000));
                }
                return scientificToDecimal(valueToReturn * 1000);
            }
        } else if (currentUnit == "lpm") {
            if (newUnit == "m3/s") {
                if (id == "selpDFlowRate") {
                    $("#inppDFlowRate").val(scientificToDecimal(valueToReturn / 60000));
                }
                return scientificToDecimal(valueToReturn / 60000);
            } else {
                //m3/min
                if (id == "selpDFlowRate") {
                    $("#inppDFlowRate").val(scientificToDecimal(valueToReturn / 1000));
                }
                return scientificToDecimal(valueToReturn / 1000);
            }
        }
        //gpm,cfm,cfs
        else if (currentUnit == "gpm") {
            if (newUnit == "cfm") {
                if (id == "selpDFlowRate") {
                    //change the corresponding box
                    $("#inppDFlowRate").val(scientificToDecimal(valueToReturn * 0.1336806));
                }
                return scientificToDecimal(valueToReturn * 0.1336806);
            } else {
                //cfs
                if (id == "selpDFlowRate") {
                    //change the corresponding box
                    $("#inppDFlowRate").val(scientificToDecimal(valueToReturn * 3.85));
                }
                return scientificToDecimal(valueToReturn * 3.85);
            }
        } else if (currentUnit == "cfm") {
            if (newUnit == "gpm") {
                if (id == "selpDFlowRate") {
                    //change the corresponding box
                    $("#inppDFlowRate").val(scientificToDecimal(valueToReturn / 0.1336806));
                }
                return scientificToDecimal(valueToReturn / 0.1336806);
            } else {
                //cfs
                if (id == "selpDFlowRate") {
                    //change the corresponding box
                    $("#inppDFlowRate").val(scientificToDecimal(valueToReturn * (3.85 / 0.1336806)));
                }
                return scientificToDecimal(valueToReturn * (3.85 / 0.1336806));
            }
        } else if (currentUnit == "cfs") {
            if (newUnit == "gpm") {
                if (id == "selpDFlowRate") {
                    //change the corresponding box
                    $("#inppDFlowRate").val(scientificToDecimal(valueToReturn / 3.85));
                }
                return scientificToDecimal(valueToReturn / 3.85);
            } else {
                //cfm
                if (id == "selpDFlowRate") {
                    //change the corresponding box
                    $("#inppDFlowRate").val(scientificToDecimal(valueToReturn / (3.85 / 0.1336806)));
                }
                return scientificToDecimal(valueToReturn / (3.85 / 0.1336806));
            }
        }
    } else if (type == "diameter") {
        //mm,cm,m
        if (currentUnit == "mm") {
            if (newUnit == "cm") {
                if (id == "selpDDiameter") {
                    $("#inppDDiameter").val(scientificToDecimal(valueToReturn / 10));
                }
                return scientificToDecimal(valueToReturn / 10);
            } else {
                //m
                if (id == "selpDDiameter") {
                    $("#inppDDiameter").val(scientificToDecimal(valueToReturn / 1000));
                }
                return scientificToDecimal(valueToReturn / 1000);
            }
        } else if (currentUnit == "cm") {
            if (newUnit == "mm") {
                if (id == "selpDDiameter") {
                    $("#inppDDiameter").val(scientificToDecimal(valueToReturn * 10));
                }
                return scientificToDecimal(valueToReturn * 10);
            } else {
                //m
                if (id == "selpDDiameter") {
                    $("#inppDDiameter").val(scientificToDecimal(valueToReturn / 100));
                }
                return scientificToDecimal(valueToReturn / 100);
            }
        } else if (currentUnit == "m") {
            if (newUnit == "mm") {
                if (id == "selpDDiameter") {
                    $("#inppDDiameter").val(scientificToDecimal(valueToReturn * 1000));
                }
                return scientificToDecimal(valueToReturn * 1000);
            } else {
                //cm
                if (id == "selpDDiameter") {
                    $("#inppDDiameter").val(scientificToDecimal(valueToReturn * 100));
                }
                return scientificToDecimal(valueToReturn * 100);
            }
        }
        //in,ft
        else if (currentUnit == "in") {
            if (newUnit == "ft") {
                if (id == "selpDDiameter") {
                    $("#inppDDiameter").val(scientificToDecimal(valueToReturn * 0.0833333));
                }
                return scientificToDecimal(valueToReturn * 0.0833333);
            }
        } else if (currentUnit == "ft") {
            if (newUnit == "in") {
                if (id == "selpDDiameter") {
                    $("#inppDDiameter").val(scientificToDecimal(valueToReturn / 0.0833333));
                }
                return scientificToDecimal(valueToReturn / 0.0833333);
            }
        }
    } else if (type == "pressureDrop") {
        //Pa,kPa,bar
        if (currentUnit == "Pa") {
            if (newUnit == "kPa") {
                if (id == "selpDPressureDrop") {
                    $("#outpD").val(scientificToDecimal(valueToReturn / 1000));
                }
                return scientificToDecimal(valueToReturn / 1000);
            } else {
                //bar
                if (id == "selpDPressureDrop") {
                    $("#outpD").val(scientificToDecimal(valueToReturn / 100000));
                }
                return scientificToDecimal(valueToReturn / 100000);
            }
        } else if (currentUnit == "kPa") {
            if (newUnit == "Pa") {
                if (id == "selpDPressureDrop") {
                    $("#outpD").val(scientificToDecimal(valueToReturn * 1000));
                }
                return scientificToDecimal(valueToReturn * 1000);
            } else {
                //bar
                if (id == "selpDPressureDrop") {
                    $("#outpD").val(scientificToDecimal(valueToReturn * 0.01));
                }
                return scientificToDecimal(valueToReturn * 0.01);
            }
        } else if (currentUnit == "bar") {
            if (newUnit == "Pa") {
                if (id == "selpDPressureDrop") {
                    $("#outpD").val(scientificToDecimal(valueToReturn * 100000));
                }
                return scientificToDecimal(valueToReturn / 100000);
            } else {
                //kPa
                if (id == "selpDPressureDrop") {
                    $("#outpD").val(scientificToDecimal(valueToReturn / 0.01));
                }
                return scientificToDecimal(valueToReturn / 0.01);
            }
        }
        //psi,lb/ft2,atm
        else if (currentUnit == "psi") {
            if (newUnit == "lb/ft2") {
                if (id == "selpDPressureDrop") {
                    $("#outpD").val(scientificToDecimal(valueToReturn * 144));
                }
                return scientificToDecimal(valueToReturn * 144);
            } else {
                //atm
                if (id == "selpDPressureDrop") {
                    $("#outpD").val(scientificToDecimal(valueToReturn * 0.0680459));
                }
                return scientificToDecimal(valueToReturn * 0.0680459);
            }
        } else if (currentUnit == "lb/ft2") {
            if (newUnit == "psi") {
                if (id == "selpDPressureDrop") {
                    $("#outpD").val(scientificToDecimal(valueToReturn / 144));
                }
                return scientificToDecimal(valueToReturn / 144);
            } else {
                //atm
                if (id == "selpDPressureDrop") {
                    $("#outpD").val(scientificToDecimal(valueToReturn * (0.0680459 / 144)));
                }
                return scientificToDecimal(valueToReturn * (0.0680459 / 144));
            }
        } else if (currentUnit == "atm") {
            if (newUnit == "psi") {
                if (id == "selpDPressureDrop") {
                    $("#outpD").val(scientificToDecimal(valueToReturn / 0.0680459));
                }
                return scientificToDecimal(valueToReturn / 0.0680459);
            } else {
                //lb/ft2
                if (id == "selpDPressureDrop") {
                    $("#outpD").val(scientificToDecimal(valueToReturn / (0.0680459 / 144)));
                }
                return scientificToDecimal(valueToReturn / (0.0680459 / 144));
            }
        }
    }
}

//can use the same function above to change the values also 

function onChangePressureDropDD(event) {
    var elementId = event.target.id;
    var pressureDropUnit = $("#selpDPressureDrop").val();
    var flowRateUnit = $("#selpDFlowRate").val();
    var diameterUnit = $("#selpDDiameter").val();
    var flowRate = $("#inppDFlowRate").val();
    var diameter = $("#inppDDiameter").val();
    var pressureDrop = $("#outpD").val();
    var pressureDropUnitPrev = $("#selpDPressureDrop").data("prev");
    var flowRateUnitPrev = $("#selpDFlowRate").data("prev");
    var diameterUnitPrev = $("#selpDDiameter").data("prev");
    if (elementId == "selpDPressureDrop" && (pressureDropUnitPrev != pressureDropUnit)) {
        if (pressureDrop.length > 0) {
            var x = convertPressureDropUnits("pressureDrop", pressureDropUnitPrev, pressureDropUnit, pressureDrop, elementId);
        }
        $("#selpDPressureDrop").data("prev", $("#selpDPressureDrop").val());
    } else if (elementId == "selpDFlowRate" && (flowRateUnitPrev != flowRateUnit)) {
        if (flowRate.length > 0) {
            var x = convertPressureDropUnits("flowRate", flowRateUnitPrev, flowRateUnit, flowRate, elementId);
        }
        $("#selpDFlowRate").data("prev", $("#selpDFlowRate").val());
    } else if (elementId == "selpDDiameter" && (diameterUnitPrev != diameterUnit)) {
        if (diameter.length > 0) {
            convertPressureDropUnits("diameter", diameterUnitPrev, diameterUnit, diameter, elementId);
        }
        $("#selpDDiameter").data("prev", $("#selpDDiameter").val());
    }
    resetImageTagsAndState();
}

function calculatePressureDrop(event) {
    enableAllPDFields();
    var isOutputHit = false;
    var isResetEnabled = false;
    var keycode = event.keyCode;
    var elementId = event.target.id;
    var unitsOfMeasurementVal = measurementUnitFlag.toLowerCase()
    commadotPD();

    if ((keycode >= 48 && keycode <= 57) || keycode == 46 || keycode == 8 || (keycode >= 96 && keycode <= 105) || keycode == 110) {
        //add units here only for conversion
        var flowRate = $("#inppDFlowRate").val();
        var diameter = $("#inppDDiameter").val();
        var orificeFlowCoefficient = $("#inppDOrifice").val();
        var specificGravityFluid = $("#inppDGravity").val();
        var flowRateUnit = $("#selpDFlowRate").val();
        var diameterUnit = $("#selpDDiameter").val();
        var pressureDropUnit = $("#selpDPressureDrop").val();
        var pressureDrop = 0;
        var pressureDropDefault = 0;
        if (flowRate.length > 0 || diameter.length > 0 || orificeFlowCoefficient.length > 0 || specificGravityFluid.length > 0) {
            isResetEnabled = true;
        }
        if (flowRate.length > 0 && diameter.length > 0 && orificeFlowCoefficient.length > 0 && specificGravityFluid.length > 0) {
            //calculate everything in kPa 
            if (unitsOfMeasurementVal == "metric") {
                //fr - m3/s , dia - mm, pd - kPa 
                var flowRateDefault = (flowRateUnit != "m3/s") ? convertPressureDropUnits("flowRate", flowRateUnit, "m3/s", flowRate) : flowRate;
                var diameterDefault = (diameterUnit != "mm") ? convertPressureDropUnits("diameter", diameterUnit, "mm", diameter) : diameter;
                pressureDropDefault = Math.pow((flowRateDefault / (0.021275 * Math.PI * orificeFlowCoefficient * (Math.pow(diameterDefault, 2)))), 2) * specificGravityFluid;

                pressureDrop = (pressureDropUnit != "kPa") ? convertPressureDropUnits("pressureDrop", "kPa", pressureDropUnit, pressureDropDefault) : pressureDropDefault;
                //if change is coming from output dropdown
                /*$("#outpD").val(scientificToDecimal(pressureDrop)); */
                (pressureDrop.toString() == "Infinity" || pressureDrop.toString() == "NaN") ? $("#outpD").val(''): $("#outpD").val(scientificToDecimal(pressureDrop));
                //enableResetPD();
                enableEmailPD();
                enableCopyPD();
                isOutputHit = true;
            } else {
                //inch
                //fr - gpm , dia - in , pd - psi 
                var flowRateDefault = (flowRateUnit != "gpm") ? convertPressureDropUnits("flowRate", flowRateUnit, "gpm", flowRate) : flowRate;
                var diameterDefault = (diameterUnit != "in") ? convertPressureDropUnits("diameter", diameterUnit, "in", diameter) : diameter;
                pressureDropDefault = Math.pow((flowRateDefault / (9.525 * Math.PI * orificeFlowCoefficient * (Math.pow(diameterDefault, 2)))), 2) * specificGravityFluid;

                pressureDrop = (pressureDropUnit != "psi") ? convertPressureDropUnits("pressureDrop", "psi", pressureDropUnit, pressureDropDefault) : pressureDropDefault;
                /*$("#outpD").val(scientificToDecimal(pressureDrop));*/
                (pressureDrop.toString() == "Infinity" || pressureDrop.toString() == "NaN") ? $("#outpD").val(''): $("#outpD").val(scientificToDecimal(pressureDrop));
                //enableResetPD();
                enableEmailPD();
                enableCopyPD();
                isOutputHit = true;
            }
        }
        if (isOutputHit == false) {
            //disableResetPD();
            disableEmailPD();
            disableCopyPD();
            $("#outpD").prop("disabled", true);
            $("#outpD").val('');
        }
        if (isResetEnabled == true) {
            enableResetPD();
        } else {
            disableResetPD();
        }
    }
}

//to be used when units of measurement changes and when user clicks on reset
function resetAllPressureDropFields() {

}

function getHTMLTemplatePd() {
    var html = '<div class="listElement" id=' + 'inp' + 'pDFlowRate' + 'list' + '>' +
        '<div class="leftListElement">' +
        '<label id="lblpDFlowRate">' + pDFlowRateText + '</label>' +
        '</div>' +
        '<div class="rightListElement">' +
        '<div class="innerListElement padding-right-10">' +
        '<input onfocus="selectActiveElementBackground(this)" onfocusout="removeActiveElementBackground(this)" class="innerListElementInput" type="text" name="inppDFlowRate" value="" id="inppDFlowRate" autocomplete="off" onkeydown="calculateMotorKeyDown(event)" onkeyup="calculatePressureDrop(event)"></input> ' +
        '</div>' +
        '<div class="innerListElement">' +
        '<select  class="innerListSelect" onchange="onChangePressureDropDD(event)" id="selpDFlowRate"  name="selpDFlowRate">  </select>' +
        '</div>' +
        '</div>' +
        '</div>' +
        //
        '<div class="listElement" id=' + 'inp' + 'pDDiameter' + 'list' + '>' +
        '<div class="leftListElement">' +
        '<label id="lblpDDiameter">' + pDDiameterText + '</label>' +
        '</div>' +
        '<div class="rightListElement">' +
        '<div class="innerListElement padding-right-10">' +
        '<input onfocus="selectActiveElementBackground(this)" onfocusout="removeActiveElementBackground(this)" class="innerListElementInput" type="text" name="inppDDiameter" value="" id="inppDDiameter" autocomplete="off" onkeydown="calculateMotorKeyDown(event)" onkeyup="calculatePressureDrop(event)"></input> ' +
        '</div>' +
        '<div class="innerListElement">' +
        '<select class="innerListSelect" onchange="onChangePressureDropDD(event)" id="selpDDiameter"  name="selpDDiameter">  </select>' +
        '</div>' +
        '</div>' +
        '</div>' +
        //
        '<div class="listElement" id=' + 'inp' + 'pDOrifice' + 'list' + '>' +
        '<div class="leftListElement">' +
        '<label id="lblpDOrifice">' + pDOrificeText + '</label>' +
        '</div>' +
        '<div class="rightListElement">' +
        '<div class="innerListElement padding-right-10">' +
        '<input onfocus="selectActiveElementBackground(this)" onfocusout="removeActiveElementBackground(this)" class="innerListElementInput" type="text" name="inppDOrifice" value="" id="inppDOrifice" autocomplete="off" onkeydown="calculateMotorKeyDown(event)" onkeyup="calculatePressureDrop(event)"></input> ' +
        '</div>' +
        '<div class="innerListElement">' +
        '<select style="visibility:hidden" id="selpDOrifice" class="innerListSelect" onchange="onChangePressureDropDD(event)" >  </select>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="listElement" id=' + 'inp' + 'pDGravity' + 'list' + '>' +
        '<div class="leftListElement">' +
        '<label id="lblpDGravity">' + pDGravityText + '</label>' +
        '</div>' +
        '<div class="rightListElement">' +
        '<div class="innerListElement padding-right-10">' +
        '<input onfocus="selectActiveElementBackground(this)" onfocusout="removeActiveElementBackground(this)" class="innerListElementInput" type="text" name="inppDGravity" value="" id="inppDGravity" autocomplete="off" onkeydown="calculateMotorKeyDown(event)" onkeyup="calculatePressureDrop(event)"></input> ' +
        '</div>' +
        '<div class="innerListElement">' +
        '<select class="innerListSelect" id="selpDGravity" onchange="onChangePressureDropDD(event)" style="visibility:hidden">  </select>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="ioDivider">' +
        '<div class="ioInnerDiv"></div>' +
        '</div>' +
        //output
        '<div style="padding-top:0px;" class="listElement">' +
        '<div class="leftListElement">' +
        '<label class="outputFooterColor" id="pDOutputLabel">' + pDOutputText + '</label>  ' +
        '</div>' +
        '<div class="rightListElement">' +
        '<div class="innerListElement padding-right-10">' +
        '<input style="background-color:#F1F1F1" class="innerListElementInput decimal" type="text" name="outpD" value="" id="outpD"  autocomplete="off" >  ' +
        '</div>' +
        '<div class="innerListElement">' +
        '<select class="innerListSelect" onchange="onChangePressureDropDD(event)" id="selpDPressureDrop" name="selpDPressureDrop" >  ' +
        '</select>  ' +
        '</div>' +
        '</div>' +
        '</div>';
    return html;
}



function enableResetPD() {
    $("#uBtnResetPD").removeClass("utilityBtnDisabled");
    $("#uBtnResetPD").addClass("utilityBtnEnabled");
}

function disableResetPD() {
    $("#uBtnResetPD").removeClass("utilityBtnEnabled");
    $("#uBtnResetPD").addClass("utilityBtnDisabled");
}

function enableCopyPD() {
    $("#uBtnCopyPD").removeClass("utilityBtnDisabled");
    $("#uBtnCopyPD").addClass("utilityBtnEnabled");
}

function disableCopyPD() {
    $("#uBtnCopyPD").removeClass("utilityBtnEnabled");
    $("#uBtnCopyPD").addClass("utilityBtnDisabled");
}

function enableEmailPD() {
    $("#uBtnEmailPD").removeClass("utilityBtnDisabled");
    $("#uBtnEmailPD").addClass("utilityBtnEnabled");
}

function disableEmailPD() {
    $("#uBtnEmailPD").removeClass("utilityBtnEnabled");
    $("#uBtnEmailPD").addClass("utilityBtnDisabled");
}

function enableAllPDFields() {
    $("#inppDFlowRate").prop("disabled", false);
    $("#inppDDiameter").prop("disabled", false);
    $("#inppDOrifice").prop("disabled", false);
    $("#inppDGravity").prop("disabled", false);
}

function disablePDOutput() {
    $("#outpD").prop("disabled", true);
}

function enablePDOutput() {
    $("#outpD").prop("disabled", false);
}

function initPDdd() {
    disableCopyPD();
    disableResetPD();
    disableEmailPD();
    $(".inputPdX").html();
    var htmlToShow = getHTMLTemplatePd();
    $(".inputPdX").html(htmlToShow);
    var unitsOfMeasurementVal = measurementUnitFlag.toLowerCase();
    //metric , imperial
    if (unitsOfMeasurementVal == "metric") {
        //flow rate
        $("#selpDFlowRate").empty();
        $("<option value='m3/s' >m&sup3;/s</option>").appendTo("#selpDFlowRate");
        $("<option value='m3/min' >m&sup3;/min</option>").appendTo("#selpDFlowRate");
        $("<option value='lpm' >lpm</option>").appendTo("#selpDFlowRate");
        $("#selpDFlowRate").sSelect();
        $('#selpDFlowRate').resetSS();
        //diameter
        $("#selpDDiameter").empty();
        $("<option value='mm' >mm</option>").appendTo("#selpDDiameter");
        $("<option value='cm' >cm</option>").appendTo("#selpDDiameter");
        $("<option value='m' >m</option>").appendTo("#selpDDiameter");
        $("#selpDDiameter").sSelect();
        $('#selpDDiameter').resetSS();
        //pressure drop
        $("#selpDPressureDrop").empty();
        $("<option value='kPa' >kPa</option>").appendTo("#selpDPressureDrop");
        $("<option value='Pa' >Pa</option>").appendTo("#selpDPressureDrop");
        $("<option value='bar' >bar</option>").appendTo("#selpDPressureDrop");
        $("#selpDPressureDrop").sSelect();
        $('#selpDPressureDrop').resetSS();
    } else {
        //flow rate
        $("#selpDFlowRate").empty();
        $("<option value='gpm'>gpm</option>").appendTo("#selpDFlowRate");
        $("<option value='cfm'>cfm</option>").appendTo("#selpDFlowRate");
        $("<option value='cfs'>cfs</option>").appendTo("#selpDFlowRate");
        $("#selpDFlowRate").sSelect();
        $('#selpDFlowRate').resetSS();
        //diameter
        $("#selpDDiameter").empty();
        $("<option value='in'>in</option>").appendTo("#selpDDiameter");
        $("<option value='ft'>ft</option>").appendTo("#selpDDiameter");
        $("#selpDDiameter").sSelect();
        $('#selpDDiameter').resetSS();
        //pressure drop
        $("#selpDPressureDrop").empty();
        $("<option value='psi'>psi</option>").appendTo("#selpDPressureDrop");
        $("<option value='lb/ft2'>lb/ft&sup2;</option>").appendTo("#selpDPressureDrop");
        $("<option value='atm'>atm</option>").appendTo("#selpDPressureDrop");
        $("#selpDPressureDrop").sSelect();
        $('#selpDPressureDrop').resetSS();
    }
    updateNonUnits("selpDOrifice", '');
    updateNonUnits("selpDGravity", '');
    //storing prev value for initial load
    $("#selpDFlowRate").data("prev", $("#selpDFlowRate").val());
    $("#selpDDiameter").data("prev", $("#selpDDiameter").val());
    $("#selpDPressureDrop").data("prev", $("#selpDPressureDrop").val());

    disablePDOutput();
    populateTabs();
}