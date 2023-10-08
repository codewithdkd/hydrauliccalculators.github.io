var ddpumpHeaderMap = {};
$(document).ready(function() {
    ddpumpHeaderMap = {
        1: pumpHDDFlowRateText,
        2: pumpHDDDiplacementText,
        3: pumpHDDElectMotPowerText,
        4: pumpHDDTotEffText
    }
});

function commadotPump() {
    if ($('#inppumpDisplacement').val() && $('#inppumpDisplacement').val().indexOf(",") >= 0) {
        $('#inppumpDisplacement').val($('#inppumpDisplacement').val().replace(/\,/g, "."));
    }
    if ($('#inppumpSpeed').val() && $('#inppumpSpeed').val().indexOf(",") >= 0) {
        $('#inppumpSpeed').val($('#inppumpSpeed').val().replace(/\,/g, "."));
    }
    if ($('#inppumpVolEff').val() && $('#inppumpVolEff').val().indexOf(",") >= 0) {
        $('#inppumpVolEff').val($('#inppumpVolEff').val().replace(/\,/g, "."));
    }
    if ($('#inppumpFlowRate').val() && $('#inppumpFlowRate').val().indexOf(",") >= 0) {
        $('#inppumpFlowRate').val($('#inppumpFlowRate').val().replace(/\,/g, "."));
    }
    if ($('#inppumpPressure').val() && $('#inppumpPressure').val().indexOf(",") >= 0) {
        $('#inppumpPressure').val($('#inppumpPressure').val().replace(/\,/g, "."));
    }
    if ($('#inppumpMechEff').val() && $('#inppumpMechEff').val().indexOf(",") >= 0) {
        $('#inppumpMechEff').val($('#inppumpMechEff').val().replace(/\,/g, "."));
    }

    if ($('#inppumpDisplacement').val()) {
        $('#inppumpDisplacement').val($('#inppumpDisplacement').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#inppumpSpeed').val()) {
        $('#inppumpSpeed').val($('#inppumpSpeed').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#inppumpVolEff').val()) {
        $('#inppumpVolEff').val($('#inppumpVolEff').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#inppumpFlowRate').val()) {
        $('#inppumpFlowRate').val($('#inppumpFlowRate').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#inppumpPressure').val()) {
        $('#inppumpPressure').val($('#inppumpPressure').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#inppumpMechEff').val()) {
        $('#inppumpMechEff').val($('#inppumpMechEff').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
}



function pumpDDChange() {
    var ddValue = $('#pumpHeaderDD').val();
    var ddValuePrev = $("#pumpHeaderDD").data("prev");
    if (ddValue && ddValue !== "") {
        if (ddpumpHeaderMap[ddValue]) {
            //$("#pumpOutputLabel").text(ddpumpHeaderMap[ddValue]);
            //also change the dropdown accordingly
            //ToDo -->> change units based on dd value
            if (ddValue != ddValuePrev) {
                initPumpdd();
            }
            $("#pumpHeaderDD").data("prev", $('#pumpHeaderDD').val());
            resetImageTagsAndState();
        }
    }
}

function calculatePump(event) {
    var keycode = event.keyCode;
    var elementId = event.target.id;
    var ddValue = $("#pumpHeaderDD").val();
    commadotPump();
    if ((keycode >= 48 && keycode <= 57) || keycode == 46 || keycode == 8 || (keycode >= 96 && keycode <= 105) || keycode == 110) {
        if (ddValue == 1) {
            //flow rate
            calculateFlowRatePump();
        } else if (ddValue == 2) {
            //displacement
            calculateDisplacementPump();
        } else if (ddValue == 3) {
            //electric motor power
            calculateElecMotPowPump();
        } else if (ddValue == 4) {
            //total efficiency
            calculateTotalEffPump();
        }
    }
}

function calculatePumpKeyDown(e) {
    var elementId = e.target.id;
    var keyCode = e.keyCode;
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
        if ($("#" + elementId).val().indexOf(".") > -1) {
            e.preventDefault();
        }
    }
    var patt1 = new RegExp("^[0-9]*\[.]?[0-9]{0,3}$");
    if (keyCode == 9 || keyCode == 46) {
        return;
    }
    var cursonPosition = document.getElementById(elementId).selectionStart;

    var indexOfDot = $('#' + elementId).val().indexOf(".");
    if (!patt1.exec($("#" + elementId).val())) {
        if (keyCode == 8 || keyCode == 37 || keyCode == 39 || cursonPosition <= indexOfDot) {
            return;
        }
        e.preventDefault();
    }
}

function onChangePumpDropDD(event) {
    var elementId = event.target.id;
    var ddValue = $("#pumpHeaderDD").val();
    if (ddValue == 1) {
        //flow rate
        var displacement = $("#inppumpDisplacement").val();
        var speed = $("#inppumpSpeed").val();

        var flowRate = $("#outpump").val();

        var displacementUnit = $("#selpumpDisplacement").val();
        var speedUnit = $("#selpumpSpeed").val();
        var flowRateUnit = $("#outselpump").val();

        var displacementUnitPrev = $("#selpumpDisplacement").data("prev");
        var speedUnitPrev = $("#selpumpSpeed").data("prev");
        var flowRateUnitPrev = $("#outselpump").data("prev");

        if (elementId == "outselpump" && (flowRateUnitPrev != flowRateUnit)) {
            if (flowRate.length > 0) {
                convertPumpFlowRate(flowRateUnitPrev, flowRateUnit, flowRate, elementId);
            }
            $("#outselpump").data("prev", $("#outselpump").val());
        } else if (elementId == "selpumpDisplacement" && (displacementUnitPrev != displacementUnit)) {
            if (displacement.length > 0) {
                convertPumpDisplacement(displacementUnitPrev, displacementUnit, displacement, elementId);
            }
            $("#selpumpDisplacement").data("prev", $("#selpumpDisplacement").val());
        } else if (elementId == "selpumpSpeed" && (speedUnitPrev != speedUnit)) {
            if (speed.length > 0) {
                convertPumpSpeed(speedUnitPrev, speedUnit, speed, elementId);
            }
            $("#selpumpSpeed").data("prev", $("#selpumpSpeed").val());
        }
    } else if (ddValue == 2) {
        //displacement
        var flowRate = $("#inppumpFlowRate").val();
        var speed = $("#inppumpSpeed").val();
        var displacement = $("#outpump").val();

        var flowRateUnit = $("#selpumpFlowRate").val();
        var speedUnit = $("#selpumpSpeed").val();
        var displacementUnit = $("#outselpump").val();

        var flowRateUnitPrev = $("#selpumpFlowRate").data("prev");
        var speedUnitPrev = $("#selpumpSpeed").data("prev");
        var displacementUnitPrev = $("#outselpump").data("prev");
        /*console.log("inside onchangepumpdropdd",displacementUnitPrev,displacementUnit,displacement);*/
        if (elementId == "outselpump" && (displacementUnitPrev != displacementUnit)) {
            if (displacement.length > 0) {
                convertPumpDisplacement(displacementUnitPrev, displacementUnit, displacement, elementId);
            }
            $("#outselpump").data("prev", $("#outselpump").val());
        } else if (elementId == "selpumpFlowRate" && (flowRateUnitPrev != flowRateUnit)) {
            if (flowRate.length > 0) {
                convertPumpFlowRate(flowRateUnitPrev, flowRateUnit, flowRate, elementId);
            }
            $("#selpumpFlowRate").data("prev", $("#selpumpFlowRate").val());
        } else if (elementId == "selpumpSpeed" && (speedUnitPrev != speedUnit)) {
            if (speed.length > 0) {
                convertPumpSpeed(speedUnitPrev, speedUnit, speed, elementId);
            }
            $("#selpumpSpeed").data("prev", $("#selpumpSpeed").val());
        }


    } else if (ddValue == 3) {
        //electric motor power
        var displacement = $("#inppumpDisplacement").val();
        var pressure = $("#inppumpPressure").val();
        var speed = $("#inppumpSpeed").val();
        var flowRate = $("#inppumpFlowRate").val();

        var electricMotorPower = $("#outpump").val();

        var displacementUnit = $("#selpumpDisplacement").val();
        var pressureUnit = $("#selpumpPressure").val();
        var speedUnit = $("#selpumpSpeed").val();
        var flowRateUnit = $("#selpumpFlowRate").val();
        var electricMotorPowerUnit = $("#outselpump").val();

        var displacementUnitPrev = $("#selpumpDisplacement").data("prev");
        var pressureUnitPrev = $("#selpumpPressure").data("prev");
        var speedUnitPrev = $("#selpumpSpeed").data("prev");
        var flowRateUnitPrev = $("#selpumpFlowRate").data("prev");
        var electricMotorPowerUnitPrev = $("#outselpump").data("prev");

        if (elementId == "outselpump" && (electricMotorPowerUnitPrev != electricMotorPowerUnit)) {
            if (electricMotorPower.length > 0) {
                convertPumpPower(electricMotorPowerUnitPrev, electricMotorPowerUnit, electricMotorPower, elementId);
            }
            $("#outselpump").data("prev", $("#outselpump").val());
        } else if (elementId == "selpumpDisplacement" && (displacementUnitPrev != displacementUnit)) {
            if (displacement.length > 0) {
                convertPumpDisplacement(displacementUnitPrev, displacementUnit, displacement, elementId);
            }
            $("#selpumpDisplacement").data("prev", $("#selpumpDisplacement").val());
        } else if (elementId == "selpumpPressure" && (pressureUnitPrev != pressureUnit)) {
            if (pressure.length > 0) {
                convertPumpPressure(pressureUnitPrev, pressureUnit, pressure, elementId);
            }
            $("#selpumpPressure").data("prev", $("#selpumpPressure").val());
        } else if (elementId == "selpumpSpeed" && (speedUnitPrev != speedUnit)) {
            if (speed.length > 0) {
                convertPumpSpeed(speedUnitPrev, speedUnit, speed, elementId);
            }
            $("#selpumpSpeed").data("prev", $("#selpumpSpeed").val());
        } else if (elementId == "selpumpFlowRate" && (flowRateUnitPrev != flowRateUnit)) {
            if (flowRate.length > 0) {
                convertPumpFlowRate(flowRateUnitPrev, flowRateUnit, flowRate, elementId);
            }
            $("#selpumpFlowRate").data("prev", $("#selpumpFlowRate").val());
        }
    } else if (ddValue == 4) {
        //total eff

    }
    resetImageTagsAndState();
}

function getHTMLTemplatePump(id, mainText) {
    var html = '<div class="listElement" id=' + 'inp' + id + 'list' + '>' +
        '<div class="leftListElement">' +
        '<label id="lbl' + id + '">' + mainText + '</label>' +
        '</div>' +
        '<div class="rightListElement">' +
        '<div class="innerListElement padding-right-10">' +
        '<input onfocus="selectActiveElementBackground(this)" onfocusout="removeActiveElementBackground(this)" class="innerListElementInput" type="text" name="inp' + id + '" value="" id="inp' + id + '" autocomplete="off" onkeydown="calculatePumpKeyDown(event)" onkeyup="calculatePump(event)"></input> ' +
        '</div>' +
        '<div class="innerListElement">' +
        '<select class="innerListSelect" onchange="onChangePumpDropDD(event)" id="sel' + id + '"  name="sel' + id + '">  </select>' +
        '</div>' +
        '</div>' +
        '</div>';
    return html;
}



function getOutputHTMLTemplatePump(id, mainText) {
    var html = '<div style="padding-top:0px;" class="listElement">' +
        '<div class="leftListElement">' +
        '<label class="outputFooterColor" id="pumpOutputLabel">' + mainText + '</label>  ' +
        '</div>' +
        '<div class="rightListElement">' +
        '<div class="innerListElement padding-right-10">' +
        '<input style="background-color:#F1F1F1" class="innerListElementInput decimal" type="text" name="outpump" value="" id="outpump"  autocomplete="off" >  ' +
        '</div>' +
        '<div class="innerListElement">' +
        '<select class="innerListSelect" onchange="onChangePumpDropDD(event)" id="outselpump" name="outselpump" >  ' +
        '</select>  ' +
        '</div>' +
        '</div>' +
        '</div>';
    return html;
}



function getEmailPump(ddValue) {

}


function updateFlowRatePumpDD(id, type) {
    if (type === "metric") {
        $("#" + id).empty();
        $("<option value='m3/min'>m&sup3;/min</option>").appendTo("#" + id);
        $("<option value='m3/s'>m&sup3;/s</option>").appendTo("#" + id);
        $("<option value='lpm'>lpm</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    } else {
        $("#" + id).empty();
        $("<option value='gpm'>gpm</option>").appendTo("#" + id);
        $("<option value='cfm'>cfm</option>").appendTo("#" + id);
        $("<option value='cfs'>cfs</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    }
}

function updateSpeedPumpDD(id, type) {
    if (type === "metric") {
        $("#" + id).empty();
        $("<option value='rpm'>rpm</option>").appendTo("#" + id);
        $("<option value='rad/s'>rad/s</option>").appendTo("#" + id);
        $("<option value='rps'>rps</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    } else {
        $("#" + id).empty();
        $("<option value='rpm'>rpm</option>").appendTo("#" + id);
        $("<option value='rps'>rps</option>").appendTo("#" + id);
        $("<option value='rad/s'>rad/s</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    }
}

function updateTotalEffDD(id, type) {
    if (type === "metric") {
        $("#" + id).empty();
        $("<option value='%'>%</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    } else {
        $("#" + id).empty();
        $("<option value='%'>%</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    }
}

function initPumpdd() {
    disableCopyP();
    disableResetP();
    disableEmailP();
    var unitsOfMeasurementVal = measurementUnitFlag.toLowerCase();
    var ddValue = $("#pumpHeaderDD").val();
    //creating html here
    var phtmlFlowRate = getHTMLTemplatePump("pumpFlowRate", pumpHDDFlowRateText);
    var phtmlDisplacement = getHTMLTemplatePump("pumpDisplacement", pumpHDDDiplacementText);
    var phtmlSpeed = getHTMLTemplatePump("pumpSpeed", pumpHDDSpeedText);
    var phtmlPressure = getHTMLTemplatePump("pumpPressure", pumpHDDPressureText);
    var phtmlVolEff = getHTMLTemplatePump("pumpVolEff", pumpHDDVolEffText);
    var phtmlMechEff = getHTMLTemplatePump("pumpMechEff", pumpHDDMechEffText);
    var phtmlDivider = getDivider();
    /*var topHtml = '<div class="overlayPage_updated" style="display:none;"></div>';*/
    var outputHtml = getOutputHTMLTemplatePump("", ddpumpHeaderMap[ddValue]);
    var emailTemplate = getEmailPump(ddValue);
    if (ddValue == 1) {
        //flow rate
        //to show -->> displacement , speed , vol eff
        $(".inputPumpX").html();
        var htmlToShow = phtmlDisplacement + phtmlSpeed + phtmlVolEff +
            phtmlDivider + outputHtml;
        $(".inputPumpX").html(htmlToShow);

        //input DDs
        updateDisplacementDD("selpumpDisplacement", unitsOfMeasurementVal);
        updateSpeedPumpDD("selpumpSpeed", unitsOfMeasurementVal);
        updateVolEffDD("selpumpVolEff", unitsOfMeasurementVal);

        //output DDs
        updateFlowRatePumpDD("outselpump", unitsOfMeasurementVal);

        //update all prev values
        $("#selpumpDisplacement").data("prev", $("#selpumpDisplacement").val());
        $("#selpumpSpeed").data("prev", $("#selpumpSpeed").val());
        $("#selpumpVolEff").data("prev", $("#selpumpVolEff").val());
        $("#outselpump").data("prev", $("#outselpump").val());
    } else if (ddValue == 2) {
        //displacement
        //to show -->> flow rate,speed ,vol eff
        $(".inputPumpX").html();
        var htmlToShow = phtmlFlowRate + phtmlSpeed + phtmlVolEff +
            phtmlDivider + outputHtml;
        $(".inputPumpX").html(htmlToShow);

        //input DDs
        updateFlowRatePumpDD("selpumpFlowRate", unitsOfMeasurementVal);
        updateSpeedPumpDD("selpumpSpeed", unitsOfMeasurementVal);
        updateVolEffDD("selpumpVolEff", unitsOfMeasurementVal);

        //output DDs
        updateDisplacementDD("outselpump", unitsOfMeasurementVal);

        //update all prev values
        $("#selpumpFlowRate").data("prev", $("#selpumpFlowRate").val());
        $("#selpumpSpeed").data("prev", $("#selpumpSpeed").val());
        $("#selpumpVolEff").data("prev", $("#selpumpVolEff").val());
        $("#outselpump").data("prev", $("#outselpump").val());
    } else if (ddValue == 3) {
        //electric motor power
        //to show -->> displacement , pressure , speed , mech eff , flow rate , vol eff
        $(".inputPumpX").html();
        var htmlToShow = phtmlDisplacement + phtmlPressure + phtmlSpeed +
            phtmlMechEff + phtmlFlowRate + phtmlVolEff + phtmlDivider + outputHtml;
        $(".inputPumpX").html(htmlToShow);

        //input DDs
        updateDisplacementDD("selpumpDisplacement", unitsOfMeasurementVal);
        updatePressureDD("selpumpPressure", unitsOfMeasurementVal);
        updateSpeedPumpDD("selpumpSpeed", unitsOfMeasurementVal);
        updateMechEffDD("selpumpMechEff", unitsOfMeasurementVal);
        updateFlowRatePumpDD("selpumpFlowRate", unitsOfMeasurementVal);
        updateVolEffDD("selpumpVolEff", unitsOfMeasurementVal);

        //output DDs
        updatePowerDD("outselpump", unitsOfMeasurementVal);

        //update all prev values
        $("#selpumpDisplacement").data("prev", $("#selpumpDisplacement").val());
        $("#selpumpPressure").data("prev", $("#selpumpPressure").val());
        $("#selpumpSpeed").data("prev", $("#selpumpSpeed").val());
        $("#selpumpDisplacement").data("prev", $("#selpumpDisplacement").val());
        $("#selpumpFlowRate").data("prev", $("#selpumpFlowRate").val());
        $("#outselpump").data("prev", $("#outselpump").val());
    } else if (ddValue == 4) {
        //total efficiency
        //to show -->> vol eff , mech eff 
        $(".inputPumpX").html();
        var htmlToShow = phtmlVolEff + phtmlMechEff + phtmlDivider + outputHtml;
        $(".inputPumpX").html(htmlToShow);

        //input DDs
        updateVolEffDD("selpumpVolEff", unitsOfMeasurementVal);
        updateMechEffDD("selpumpMechEff", unitsOfMeasurementVal);

        //output DDs
        updateTotalEffDD("outselpump", unitsOfMeasurementVal);

        //update all prev values
        $("#selpumpVolEff").data("prev", $("#selpumpVolEff").val());
        $("#selpumpMechEff").data("prev", $("#selpumpMechEff").val());
        $("#outselpump").data("prev", $("#outselpump").val());
    }
    disablePumpOutput();
    populateTabs();
}

function enableAllPumpFields() {
    $("#inppumpDisplacement").prop("disabled", false);
    $("#inppumpSpeed").prop("disabled", false);
    $("#inppumpVolEff").prop("disabled", false);
    $("#inppumpFlowRate").prop("disabled", false);
    $("#inppumpPressure").prop("disabled", false);
    $("#inppumpMechEff").prop("disabled", false);

    $("#inppumpDisplacement").css("background-color", 'white');
    $("#inppumpSpeed").css("background-color", 'white');
    $("#inppumpVolEff").css("background-color", 'white');
    $("#inppumpFlowRate").css("background-color", 'white');
    $("#inppumpPressure").css("background-color", 'white');
    $("#inppumpMechEff").css("background-color", 'white');
}

function enableAllPumpSelectFields() {
    $("#selpumpDisplacement").prop("disabled", false);
    $("#selpumpSpeed").prop("disabled", false);
    $("#selpumpVolEff").prop("disabled", false);
    $("#selpumpFlowRate").prop("disabled", false);
    $("#selpumpPressure").prop("disabled", false);
    $("#selpumpMechEff").prop("disabled", false);

    $("#selpumpDisplacement").next().css({
        'background-color': 'white',
        'color': 'black'
    });
    $("#selpumpSpeed").next().css({
        'background-color': 'white',
        'color': 'black'
    });
    $("#selpumpVolEff").next().css({
        'background-color': 'white',
        'color': 'black'
    });
    $("#selpumpFlowRate").next().css({
        'background-color': 'white',
        'color': 'black'
    });
    $("#selpumpPressure").next().css({
        'background-color': 'white',
        'color': 'black'
    });
    $("#selpumpMechEff").next().css({
        'background-color': 'white',
        'color': 'black'
    });
}


function calculateFlowRatePump() {
    enableAllPumpFields();
    enableAllPumpSelectFields();
    var isOutputHit = false;
    var isResetEnabled = false;
    var unitsOfMeasurementVal = measurementUnitFlag.toLowerCase();
    var displacement = $("#inppumpDisplacement").val();
    var speed = $("#inppumpSpeed").val();
    var volEff = $("#inppumpVolEff").val();
    var flowRate = 0;

    var displacementUnit = $("#selpumpDisplacement").val();
    var speedUnit = $("#selpumpSpeed").val();
    /*var volEffUnit = $("#inppumpDisplacement").val();*/
    var flowRateUnit = $("#outselpump").val();

    var flowRateDefault = 0;
    if (displacement.length > 0 || speed.length > 0 || volEff.length > 0) {
        isResetEnabled = true;
    }
    if (displacement.length > 0 && speed.length > 0 && volEff.length > 0) {
        if (unitsOfMeasurementVal == "metric") {
            //disp - m3/rev , speed - rpm , flowRate - m3/min
            var displacementDefault = (displacementUnit != "m3/rev") ? convertPumpDisplacement(displacementUnit, "m3/rev", displacement) : displacement;
            var speedDefault = (speedUnit != "rpm") ? convertPumpSpeed(speedUnit, "rpm", speed) : speed;
            flowRateDefault = (displacementDefault * speedDefault * (volEff / 100));
            flowRate = (flowRateUnit != "m3/min") ? convertPumpFlowRate("m3/min", flowRateUnit, flowRateDefault) : flowRateDefault;
            flowRate.toString() == "Infinity" ? $("#outpump").val('') : $("#outpump").val(scientificToDecimal(flowRate));
            /*$("#outpump").val(scientificToDecimal(flowRate));*/
            //enableResetP();
            enableEmailP();
            enableCopyP();
            isOutputHit = true;
        } else {
            //disp - in3/rev , speed - rpm , flowRate - gpm
            var displacementDefault = (displacementUnit != "in3/rev") ? convertPumpDisplacement(displacementUnit, "in3/rev", displacement) : displacement;
            var speedDefault = (speedUnit != "rpm") ? convertPumpSpeed(speedUnit, "rpm", speed) : speed;
            flowRateDefault = (displacementDefault * speedDefault * (volEff / 100)) / 231;
            flowRate = (flowRateUnit != "gpm") ? convertPumpFlowRate("gpm", flowRateUnit, flowRateDefault) : flowRateDefault;
            flowRate.toString() == "Infinity" ? $("#outpump").val('') : $("#outpump").val(scientificToDecimal(flowRate));
            /*$("#outpump").val(scientificToDecimal(flowRate));*/
            //enableResetP();
            enableEmailP();
            enableCopyP();
            isOutputHit = true;
        }
    }
    if (isOutputHit == false) {
        //disableResetP();
        disableEmailP();
        disableCopyP();
        disablePumpOutput();
        $("#outpump").val('');
    }
    if (isResetEnabled == true) {
        enableResetP();
    } else {
        disableResetP();
    }
}

function enableResetP() {
    $("#uBtnResetP").removeClass("utilityBtnDisabled");
    $("#uBtnResetP").addClass("utilityBtnEnabled");
}

function disableResetP() {
    $("#uBtnResetP").removeClass("utilityBtnEnabled");
    $("#uBtnResetP").addClass("utilityBtnDisabled");
}

function enableCopyP() {
    $("#uBtnCopyP").removeClass("utilityBtnDisabled");
    $("#uBtnCopyP").addClass("utilityBtnEnabled");
}

function disableCopyP() {
    $("#uBtnCopyP").removeClass("utilityBtnEnabled");
    $("#uBtnCopyP").addClass("utilityBtnDisabled");
}

function enableEmailP() {
    $("#uBtnEmailP").removeClass("utilityBtnDisabled");
    $("#uBtnEmailP").addClass("utilityBtnEnabled");
}

function disableEmailP() {
    $("#uBtnEmailP").removeClass("utilityBtnEnabled");
    $("#uBtnEmailP").addClass("utilityBtnDisabled");
}

function disablePumpOutput() {
    $("#outpump").prop("disabled", true);
}

function enablePumpOutput() {
    $("#outpump").prop("disabled", false);
}

function calculateDisplacementPump() {
    enableAllPumpFields();
    enableAllPumpSelectFields();
    var isOutputHit = false;
    var isResetEnabled = false;
    var unitsOfMeasurementVal = measurementUnitFlag.toLowerCase();
    var flowRate = $("#inppumpFlowRate").val();
    var speed = $("#inppumpSpeed").val();
    var volEff = $("#inppumpVolEff").val();

    var displacement = 0;

    var flowRateUnit = $("#selpumpFlowRate").val();
    var speedUnit = $("#selpumpSpeed").val();
    var displacementUnit = $("#outselpump").val();

    var displacementDefault = 0;

    if (flowRate.length > 0 || speed.length > 0 || volEff.length > 0) {
        isResetEnabled = true;
    }

    if (flowRate.length > 0 && speed.length > 0 && volEff.length > 0) {
        if (unitsOfMeasurementVal == "metric") {
            //displ - m3/rev , flowrate - m3/min , speed - rpm 
            var flowRateDefault = (flowRateUnit != "m3/min") ? convertPumpFlowRate(flowRateUnit, "m3/min", flowRate) : flowRate;
            var speedDefault = (speedUnit != "rpm") ? convertPumpSpeed(speedUnit, "rpm", speed) : speed;
            displacementDefault = flowRateDefault / (speedDefault * (volEff / 100));
            displacement = (displacementUnit != "m3/rev") ? convertPumpDisplacement("m3/rev", displacementUnit, displacementDefault) : displacementDefault;
            /*$("#outpump").val(scientificToDecimal(displacement));*/
            displacement.toString() == "Infinity" ? $("#outpump").val('') : $("#outpump").val(scientificToDecimal(displacement));
            //enableResetP();
            enableEmailP();
            enableCopyP();
            isOutputHit = true;
        } else {
            //displ - in3/rev , flowrate - gpm , speed - rpm 
            var flowRateDefault = (flowRateUnit != "gpm") ? convertPumpFlowRate(flowRateUnit, "gpm", flowRate) : flowRate;
            var speedDefault = (speedUnit != "rpm") ? convertPumpSpeed(speedUnit, "rpm", speed) : speed;
            displacementDefault = (flowRateDefault * 231) / (speedDefault * (volEff / 100));
            displacement = (displacementUnit != "in3/rev") ? convertPumpDisplacement("in3/rev", displacementUnit, displacementDefault) : displacementDefault;
            /*$("#outpump").val(scientificToDecimal(displacement));*/
            displacement.toString() == "Infinity" ? $("#outpump").val('') : $("#outpump").val(scientificToDecimal(displacement));
            //enableResetP();
            enableEmailP();
            enableCopyP();
            isOutputHit = true;
        }
    }
    if (isOutputHit == false) {
        //disableResetP();
        disableEmailP();
        disableCopyP();
        disablePumpOutput();
        $("#outpump").val('');
    }
    if (isResetEnabled == true) {
        enableResetP();
    } else {
        disableResetP();
    }
}

function calculateElecMotPowPump() {
    enableAllPumpFields();
    enableAllPumpSelectFields();
    var isOutputHit = false;
    var isResetEnabled = false;
    var unitsOfMeasurementVal = measurementUnitFlag.toLowerCase();
    var displacement = $("#inppumpDisplacement").val();
    var pressure = $("#inppumpPressure").val();
    var speed = $("#inppumpSpeed").val();
    var mechEff = $("#inppumpMechEff").val();
    var flowRate = $("#inppumpFlowRate").val();
    var volEff = $("#inppumpVolEff").val();

    var electricMotorPower = 0;

    var displacementUnit = $("#selpumpDisplacement").val();
    var pressureUnit = $("#selpumpPressure").val();
    var speedUnit = $("#selpumpSpeed").val();
    var flowRateUnit = $("#selpumpFlowRate").val();

    var electricMotorPowerUnit = $("#outselpump").val();

    if (displacement.length > 0 || pressure.length > 0 || speed.length > 0 || mechEff.length > 0 || flowRate.length > 0 || volEff.length > 0) {
        isResetEnabled = true;
    }

    //3 cases will be there 
    if (mechEff.length > 0 || pressure.length > 0 || speed.length > 0) {
        //both open
    }
    if (displacement.length > 0 && flowRate.length == 0 && volEff.length == 0) {
        //disable flow rate , vol eff
        $("#inppumpFlowRate").prop("disabled", true);
        $("#inppumpVolEff").prop("disabled", true);

        $("#inppumpFlowRate").css('background-color', '#F1F1F1');
        $("#inppumpVolEff").css('background-color', '#F1F1F1');

        $("#selpumpFlowRate").prop("disabled", true);
        $("#selpumpVolEff").prop("disabled", true);

        $("#selpumpFlowRate").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selpumpVolEff").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
    }
    if (volEff.length > 0 || flowRate.length > 0 && displacement.length == 0) {
        //disable displacement
        $("#inppumpDisplacement").prop("disabled", true);

        $("#inppumpDisplacement").css('background-color', '#F1F1F1');

        $("#selpumpDisplacement").prop("disabled", true);

        $("#selpumpDisplacement").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
    }
    if (displacement.length > 0 && pressure.length > 0 && speed.length > 0 && mechEff.length > 0) {
        if (unitsOfMeasurementVal == "metric") {
            //disp - m3/rev , pressure - Pa , speed - rad/s , electric motor power - W
            var displacementDefault = (displacementUnit != "m3/rev") ? convertPumpDisplacement(displacementUnit, "m3/rev", displacement) : displacement;
            var pressureDefault = (pressureUnit != "Pa") ? convertPumpPressure(pressureUnit, "Pa", pressure) : pressure;
            var speedDefault = (speedUnit != "rad/s") ? convertPumpSpeed(speedUnit, "rad/s", speed) : speed;
            electricMotorPowerDefault = (displacementDefault * pressureDefault * speedDefault) / (2 * Math.PI * (mechEff / 100));
            electricMotorPower = (electricMotorPowerUnit != "W") ? convertPumpPower("W", electricMotorPowerUnit, electricMotorPowerDefault) : electricMotorPowerDefault;
            /*$("#outpump").val(scientificToDecimal(electricMotorPower));*/
            electricMotorPower.toString() == "Infinity" ? $("#outpump").val('') : $("#outpump").val(scientificToDecimal(electricMotorPower));
            //enableResetP();
            /*console.log("disp",displacementDefault,"pres",pressureDefault,"sp",speedDefault);*/
            enableEmailP();
            enableCopyP();
            isOutputHit = true;
        } else {
            //disp - in3/rev , pressure - psi , speed - rpm , electric motor power - hp
            var displacementDefault = (displacementUnit != "in3/rev") ? convertPumpDisplacement(displacementUnit, "in3/rev", displacement) : displacement;
            var pressureDefault = (pressureUnit != "psi") ? convertPumpPressure(pressureUnit, "psi", pressure) : pressure;
            var speedDefault = (speedUnit != "rpm") ? convertPumpSpeed(speedUnit, "rpm", speed) : speed;
            electricMotorPowerDefault = (displacementDefault * pressureDefault * speedDefault) / (2 * Math.PI * (mechEff / 100) * 63025);
            electricMotorPower = (electricMotorPowerUnit != "hp") ? convertPumpPower("hp", electricMotorPowerUnit, electricMotorPowerDefault) : electricMotorPowerDefault;
            /*$("#outpump").val(scientificToDecimal(electricMotorPower));*/
            electricMotorPower.toString() == "Infinity" ? $("#outpump").val('') : $("#outpump").val(scientificToDecimal(electricMotorPower));
            //enableResetP();
            enableEmailP();
            enableCopyP();
            isOutputHit = true;
        }
    }
    if (flowRate.length > 0 && pressure.length > 0 && speed.length > 0 && volEff.length > 0 && mechEff.length > 0) {
        if (unitsOfMeasurementVal == "metric") {
            //stepone 
            //speed - rpm 
            //steptwo
            //fr - m3/min , pressure - Pa , emp - W ,speed - rpm as per new sheet
            //need to see what units will others correspond to ?? 
            var flowRateDefault = (flowRateUnit != "m3/min") ? convertPumpFlowRate(flowRateUnit, "m3/min", flowRate) : flowRate;
            var pressureDefault = (pressureUnit != "Pa") ? convertPumpPressure(pressureUnit, "Pa", pressure) : pressure;
            var speedDefault = (speedUnit != "rad/s") ? convertPumpSpeed(speedUnit, "rad/s", speed) : speed;
            var speedInRpm = (speedUnit != "rpm") ? convertPumpSpeed(speedUnit, "rpm", speed) : speed;
            var stepOneDefault = flowRateDefault / (speedInRpm * (volEff / 100));
            electricMotorPowerDefault = (stepOneDefault * pressureDefault * speedDefault) / (2 * Math.PI * (mechEff / 100));
            electricMotorPower = (electricMotorPowerUnit != "W") ? convertPumpPower("W", electricMotorPowerUnit, electricMotorPowerDefault) : electricMotorPowerDefault;
            /* $("#outpump").val(scientificToDecimal(electricMotorPower));*/
            (electricMotorPower.toString() == "Infinity" || electricMotorPower.toString() == "NaN") ? $("#outpump").val(''): $("#outpump").val(scientificToDecimal(electricMotorPower));
            //enableResetP();
            /*console.log("flowRateDefault",flowRateDefault,"pressureDefault",pressureDefault,"speedDefaultInRad/s",speedDefault,"speedInRpm",speedInRpm,"stepOneDefault",stepOneDefault);*/

            enableEmailP();
            enableCopyP();
            isOutputHit = true;
        } else {
            //stepone 
            //speed - rpm 
            //steptwo
            //fr - gpm , pressure - psi , emp - hp ,speed - rpm as per new sheet
            //need to see what units will others correspond to ?? 
            console.log("flowRateUnit", flowRateUnit);
            var flowRateDefault = (flowRateUnit != "gpm") ? convertPumpFlowRate(flowRateUnit, "gpm", flowRate) : flowRate;
            var pressureDefault = (pressureUnit != "psi") ? convertPumpPressure(pressureUnit, "psi", pressure) : pressure;
            var speedDefault = (speedUnit != "rpm") ? convertPumpSpeed(speedUnit, "rpm", speed) : speed;
            var speedInRpm = (speedUnit != "rpm") ? convertPumpSpeed(speedUnit, "rpm", speed) : speed;
            var stepOneDefault = (flowRateDefault * 231) / (speedInRpm * (volEff / 100));
            /*console.log("stepOne",stepOneDefault,"pressureDefault",pressureDefault,"flowRateDefault",flowRateDefault,"speedInRpm",speedInRpm);*/
            electricMotorPowerDefault = (stepOneDefault * pressureDefault * speedDefault) / (2 * Math.PI * (mechEff / 100) * 63025);
            electricMotorPower = (electricMotorPowerUnit != "hp") ? convertPumpPower("hp", electricMotorPowerUnit, electricMotorPowerDefault) : electricMotorPowerDefault;
            /*$("#outpump").val(scientificToDecimal(electricMotorPower));*/
            /*console.log("elect",electricMotorPower);*/
            (electricMotorPower.toString() == "Infinity" || electricMotorPower.toString() == "NaN") ? $("#outpump").val(''): $("#outpump").val(scientificToDecimal(electricMotorPower));
            //enableResetP();
            enableEmailP();
            enableCopyP();
            isOutputHit = true;
        }
    }
    if (isOutputHit == false) {
        //disableResetP();
        disableEmailP();
        disableCopyP();
        disablePumpOutput();
        $("#outpump").val('');
    }
    if (isResetEnabled == true) {
        enableResetP();
    } else {
        disableResetP();
    }
}

function calculateTotalEffPump() {
    enableAllPumpFields();
    enableAllPumpSelectFields();
    var isOutputHit = false;
    var isResetEnabled = false;
    var volEff = $("#inppumpVolEff").val();
    var mechEff = $("#inppumpMechEff").val();
    var totalEff = 0;

    if (volEff.length > 0 || mechEff.length > 0) {
        isResetEnabled = true;
    }

    if (volEff.length > 0 && mechEff.length > 0) {
        //there are no default units
        totalEff = ((volEff / 100) * (mechEff / 100) * 100);
        /*$("#outpump").val(totalEff); */
        totalEff.toString() == "Infinity" ? $("#outpump").val('') : $("#outpump").val(scientificToDecimal(totalEff));
        //enableResetP();
        enableEmailP();
        enableCopyP();
        isOutputHit = true;
    }
    if (isOutputHit == false) {
        //disableResetP();
        disableEmailP();
        disableCopyP();
        disablePumpOutput();
        $("#outpump").val('');
    }
    if (isResetEnabled == true) {
        enableResetP();
    } else {
        disableResetP();
    }
}

function convertPumpDisplacement(currentUnit, newUnit, valueToReturn, id) {
    //m3/rev , cm3/rev 
    /*console.log("inside convertPumpDisplacment");*/
    if (currentUnit == "m3/rev") {
        if (newUnit == "cm3/rev") {
            if (id == "selpumpDisplacement") {
                $("#inppumpDisplacement").val(scientificToDecimal(valueToReturn * 1000000));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * 1000000));
            }
            return scientificToDecimal(valueToReturn * 1000000);
        }
    } else if (currentUnit == "cm3/rev") {
        if (newUnit == "m3/rev") {
            if (id == "selpumpDisplacement") {
                $("#inppumpDisplacement").val(scientificToDecimal(valueToReturn / 1000000));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn / 1000000));
            }
            return scientificToDecimal(valueToReturn / 1000000);
        }
    }
    //in3/rev,ft3/rev
    else if (currentUnit == "in3/rev") {
        if (newUnit == "ft3/rev") {
            if (id == "selpumpDisplacement") {
                $("#inppumpDisplacement").val(scientificToDecimal(valueToReturn * 0.000578704));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * 0.000578704));
            }
            return scientificToDecimal(valueToReturn * 0.000578704);
        }
    } else if (currentUnit == "ft3/rev") {
        if (newUnit == "in3/rev") {
            if (id == "selpumpDisplacement") {
                $("#inppumpDisplacement").val(scientificToDecimal(valueToReturn / 0.000578704));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn / 0.000578704));
            }
            return scientificToDecimal(valueToReturn / 0.000578704);
        }
    }
}

function convertPumpSpeed(currentUnit, newUnit, valueToReturn, id) {
    //rpm , rps , rad/s
    if (currentUnit == "rpm") {
        if (newUnit == "rps") {
            if (id == "selpumpSpeed") {
                $("#inppumpSpeed").val(scientificToDecimal(valueToReturn / 60));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn / 60));
            }
            return scientificToDecimal(valueToReturn / 60);
        } else {
            //rad/s
            if (id == "selpumpSpeed") {
                $("#inppumpSpeed").val(scientificToDecimal(valueToReturn * (0.104719755)));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * (0.104719755)));
            }
            return scientificToDecimal(valueToReturn * (0.104719755));
        }
    } else if (currentUnit == "rps") {
        if (newUnit == "rpm") {
            if (id == "selpumpSpeed") {
                $("#inppumpSpeed").val(scientificToDecimal(valueToReturn * 60));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * 60));
            }
            return scientificToDecimal(valueToReturn * 60);
        } else {
            //rad/s
            if (id == "selpumpSpeed") {
                $("#inppumpSpeed").val(scientificToDecimal(valueToReturn * 6.2831853));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * 6.2831853));
            }
            return scientificToDecimal(valueToReturn * 6.2831853);
        }
    } else if (currentUnit == "rad/s") {
        if (newUnit == "rpm") {
            if (id == "selpumpSpeed") {
                $("#inppumpSpeed").val(scientificToDecimal(valueToReturn * (60 / 6.2831853)));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * (60 / 6.2831853)));
            }
            return scientificToDecimal(valueToReturn * (60 / 6.2831853));
        } else {
            //rps
            if (id == "selpumpSpeed") {
                $("#inppumpSpeed").val(scientificToDecimal(valueToReturn / 6.2831853));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn / 6.2831853));
            }
            return scientificToDecimal(valueToReturn / 6.2831853);
        }
    }
}

function convertPumpVolEff(currentUnit, newUnit, valueToReturn, id) {
    //not needed
}

function convertPumpPower(currentUnit, newUnit, valueToReturn, id) {
    //W,kW,hp
    if (currentUnit == "W") {
        if (newUnit == "kW") {
            if (id == "selpumpPower") {
                $("#inppumpPower").val(scientificToDecimal(valueToReturn * 0.001));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * 0.001));
            }
            return scientificToDecimal(valueToReturn * 0.001);
        } else {
            //hp
            if (id == "selpumpPower") {
                $("#inppumpPower").val(scientificToDecimal(valueToReturn * 0.00134102));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * 0.00134102));
            }
            return scientificToDecimal(valueToReturn * 0.00134102);
        }
    } else if (currentUnit == "kW") {
        if (newUnit == "W") {
            if (id == "selpumpPower") {
                $("#inppumpPower").val(scientificToDecimal(valueToReturn / 0.001));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn / 0.001));
            }
            return scientificToDecimal(valueToReturn / 0.001);
        } else {
            //hp
            if (id == "selpumpPower") {
                $("#inppumpPower").val(scientificToDecimal(valueToReturn * (0.00134102 / 0.001)));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * (0.00134102 / 0.001)));
            }
            return scientificToDecimal(valueToReturn * (0.00134102 / 0.001));
        }
    } else if (currentUnit == "hp") {
        if (newUnit == "W") {
            if (id == "selpumpPower") {
                $("#inppumpPower").val(scientificToDecimal(valueToReturn / 0.00134102));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn / 0.00134102));
            }
            return scientificToDecimal(valueToReturn / 0.00134102);
        } else {
            //kW
            if (id == "selpumpPower") {
                $("#inppumpPower").val(scientificToDecimal(valueToReturn * (0.001 / 0.00134102)));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * (0.001 / 0.00134102)));
            }
            return scientificToDecimal(valueToReturn * (0.001 / 0.00134102));
        }
    }
}

function convertPumpPressure(currentUnit, newUnit, valueToReturn, id) {
    //Pa,kPa,bar
    if (currentUnit == "Pa") {
        if (newUnit == "kPa") {
            if (id == "selpumpPressure") {
                $("#inppumpPressure").val(scientificToDecimal(valueToReturn / 1000));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn / 1000));
            }
            return scientificToDecimal(valueToReturn / 1000);
        } else {
            //bar
            if (id == "selpumpPressure") {
                $("#inppumpPressure").val(scientificToDecimal(valueToReturn / 100000));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn / 100000));
            }
            return scientificToDecimal(valueToReturn / 100000);
        }
    } else if (currentUnit == "kPa") {
        if (newUnit == "Pa") {
            if (id == "selpumpPressure") {
                $("#inppumpPressure").val(scientificToDecimal(valueToReturn * 1000));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * 1000));
            }
            return scientificToDecimal(valueToReturn * 1000);
        } else {
            //bar
            if (id == "selpumpPressure") {
                $("#inppumpPressure").val(scientificToDecimal(valueToReturn / 100));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn / 100));
            }
            return scientificToDecimal(valueToReturn / 100);
        }
    } else if (currentUnit == "bar") {
        if (newUnit == "Pa") {
            if (id == "selpumpPressure") {
                $("#inppumpPressure").val(scientificToDecimal(valueToReturn * 100000));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * 100000));
            }
            return scientificToDecimal(valueToReturn * 100000);
        } else {
            //kPa
            if (id == "selpumpPressure") {
                $("#inppumpPressure").val(scientificToDecimal(valueToReturn * 100));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * 100));
            }
            return scientificToDecimal(valueToReturn * 100);
        }
    }
    //psi,lb/ft2,atm
    else if (currentUnit == "psi") {
        if (newUnit == "lb/ft2") {
            if (id == "selpumpPressure") {
                $("#inppumpPressure").val(scientificToDecimal(valueToReturn * 144));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * 144));
            }
            return scientificToDecimal(valueToReturn * 144);
        } else {
            //atm
            if (id == "selpumpPressure") {
                $("#inppumpPressure").val(scientificToDecimal(valueToReturn * 0.0680459));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * 0.0680459));
            }
            return scientificToDecimal(valueToReturn * 0.0680459);
        }
    } else if (currentUnit == "lb/ft2") {
        if (newUnit == "psi") {
            if (id == "selpumpPressure") {
                $("#inppumpPressure").val(scientificToDecimal(valueToReturn / 144));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn / 144));
            }
            return scientificToDecimal(valueToReturn / 144);
        } else {
            //atm
            if (id == "selpumpPressure") {
                $("#inppumpPressure").val(scientificToDecimal(valueToReturn * (0.0680459 / 144)));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * (0.0680459 / 144)));
            }
            return scientificToDecimal(valueToReturn * (0.0680459 / 144));
        }
    } else if (currentUnit == "atm") {
        if (newUnit == "psi") {
            if (id == "selpumpPressure") {
                $("#inppumpPressure").val(scientificToDecimal(valueToReturn / 0.0680459));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn / 0.0680459));
            }
            return scientificToDecimal(valueToReturn / 0.0680459);
        } else {
            //lb/ft2
            if (id == "selpumpPressure") {
                $("#inppumpPressure").val(scientificToDecimal(valueToReturn / (0.0680459 / 144)));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn / (0.0680459 / 144)));
            }
            return scientificToDecimal(valueToReturn / (0.0680459 / 144));
        }
    }

}

function convertPumpMechEff(currentUnit, newUnit, valueToReturn, id) {

}


//
function convertPumpFlowRate(currentUnit, newUnit, valueToReturn, id) {
    /*console.log("inside pump flow rate",currentUnit,newUnit,valueToReturn,id);*/
    //m3/s,m3/min,lpn 
    if (currentUnit == "m3/s") {
        if (newUnit == "m3/min") {
            if (id == "selpumpFlowRate") {
                $("#inppumpFlowRate").val(scientificToDecimal(valueToReturn * 60));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * 60));
            }
            return scientificToDecimal(valueToReturn * 60);
        } else {
            //lpm
            if (id == "selpumpFlowRate") {
                $("#inppumpFlowRate").val(scientificToDecimal(valueToReturn * 60000));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * 60000));
            }
            return scientificToDecimal(valueToReturn * 60000);
        }
    } else if (currentUnit == "m3/min") {
        if (newUnit == "m3/s") {
            if (id == "selpumpFlowRate") {
                $("#inppumpFlowRate").val(scientificToDecimal(valueToReturn / 60));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn / 60));
            }
            return scientificToDecimal(valueToReturn / 60);
        } else {
            //lpm
            if (id == "selpumpFlowRate") {
                $("#inppumpFlowRate").val(scientificToDecimal(valueToReturn * 1000));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * 1000));
            }
            return scientificToDecimal(valueToReturn * 1000);
        }
    } else if (currentUnit == "lpm") {
        if (newUnit == "m3/s") {
            if (id == "selpumpFlowRate") {
                $("#inppumpFlowRate").val(scientificToDecimal(valueToReturn / 60000));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn / 60000));
            }
            return scientificToDecimal(valueToReturn / 60000);
        } else {
            //m3/min
            if (id == "selpumpFlowRate") {
                $("#inppumpFlowRate").val(scientificToDecimal(valueToReturn / 1000));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn / 1000));
            }
            return scientificToDecimal(valueToReturn / 1000);
        }
    }
    //gpm,cfm,cfs
    else if (currentUnit == "gpm") {
        if (newUnit == "cfm") {
            if (id == "selpumpFlowRate") {
                $("#inppumpFlowRate").val(scientificToDecimal(valueToReturn * 0.1336806));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * 0.1336806));
            }
            return scientificToDecimal(valueToReturn * 0.1336806);
        } else {
            //cfs
            if (id == "selpumpFlowRate") {
                $("#inppumpFlowRate").val(scientificToDecimal(valueToReturn * 3.85));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * 3.85));
            }
            return scientificToDecimal(valueToReturn * 3.85);
        }
    } else if (currentUnit == "cfm") {
        if (newUnit == "gpm") {
            if (id == "selpumpFlowRate") {
                $("#inppumpFlowRate").val(scientificToDecimal(valueToReturn / 0.1336806));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn / 0.1336806));
            }
            return scientificToDecimal(valueToReturn / 0.1336806);
        } else {
            //cfs
            if (id == "selpumpFlowRate") {
                $("#inppumpFlowRate").val(scientificToDecimal(valueToReturn * (3.85 / 0.1336806)));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn * (3.85 / 0.1336806)));
            }
            return scientificToDecimal(valueToReturn * (3.85 / 0.1336806));
        }
    } else if (currentUnit == "cfs") {
        if (newUnit == "gpm") {
            if (id == "selpumpFlowRate") {
                $("#inppumpFlowRate").val(scientificToDecimal(valueToReturn / 3.85));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn / 3.85));
            }
            return scientificToDecimal(valueToReturn / 3.85);
        } else {
            //cfm
            if (id == "selpumpFlowRate") {
                $("#inppumpFlowRate").val(scientificToDecimal(valueToReturn / (3.85 / 0.1336806)));
            } else if (id == "outselpump") {
                $("#outpump").val(scientificToDecimal(valueToReturn / (3.85 / 0.1336806)));
            }
            return scientificToDecimal(valueToReturn / (3.85 / 0.1336806));
        }
    }
}