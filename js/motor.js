//1)Add the select to motor dds
//2)populate drop down using metric or inches units

var ddmotHeaderMap = {};
$(document).ready(function() {
    ddmotHeaderMap = {
        1: motHDDFlowRateText,
        2: motHDDPressureText,
        3: motHDDDiplacementText,
        4: motHDDSpeedText,
        5: motHDDTorqueText,
        6: motHDDPowerText
    }
});
motorOutput = false;

function commadotMot() {
    if ($('#inpmotPower').val() && $('#inpmotPower').val().indexOf(",") >= 0) {
        $('#inpmotPower').val($('#inpmotPower').val().replace(/\,/g, "."));
    }
    if ($('#inpmotPower').val()) {
        $('#inpmotPower').val($('#inpmotPower').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }

    if ($('#inpmotPressure').val() && $('#inpmotPressure').val().indexOf(",") >= 0) {
        $('#inpmotPressure').val($('#inpmotPressure').val().replace(/\,/g, "."));
    }
    if ($('#inpmotPressure').val()) {
        $('#inpmotPressure').val($('#inpmotPressure').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }

    if ($('#inpmotMechEff').val() && $('#inpmotMechEff').val().indexOf(",") >= 0) {
        $('#inpmotMechEff').val($('#inpmotMechEff').val().replace(/\,/g, "."));
    }
    if ($('#inpmotDisplacement').val() && $('#inpmotDisplacement').val().indexOf(",") >= 0) {
        $('#inpmotDisplacement').val($('#inpmotDisplacement').val().replace(/\,/g, "."));
    }
    if ($('#inpmotSpeed').val() && $('#inpmotSpeed').val().indexOf(",") >= 0) {
        $('#inpmotSpeed').val($('#inpmotSpeed').val().replace(/\,/g, "."));
    }
    if ($('#inpmotTorque').val() && $('#inpmotTorque').val().indexOf(",") >= 0) {
        $('#inpmotTorque').val($('#inpmotTorque').val().replace(/\,/g, "."));
    }
    if ($('#inpmotFlowRate').val() && $('#inpmotFlowRate').val().indexOf(",") >= 0) {
        $('#inpmotFlowRate').val($('#inpmotFlowRate').val().replace(/\,/g, "."));
    }
    if ($('#inpmotVolEff').val() && $('#inpmotVolEff').val().indexOf(",") >= 0) {
        $('#inpmotVolEff').val($('#inpmotVolEff').val().replace(/\,/g, "."));
    }

    if ($('#inpmotMechEff').val()) {
        $('#inpmotMechEff').val($('#inpmotMechEff').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#inpmotDisplacement').val()) {
        $('#inpmotDisplacement').val($('#inpmotDisplacement').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#inpmotSpeed').val()) {
        $('#inpmotSpeed').val($('#inpmotSpeed').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#inpmotTorque').val()) {
        $('#inpmotTorque').val($('#inpmotTorque').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#inpmotFlowRate').val()) {
        $('#inpmotFlowRate').val($('#inpmotFlowRate').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#inpmotVolEff').val()) {
        $('#inpmotVolEff').val($('#inpmotVolEff').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
}

function calculateMotorKeyDown(e) {
    //new code to remove special characters
    /*var key;
    var keychar;
    key = e.which;
    keychar = String.fromCharCode(key);
  
    if(!(("0123456789").indexOf(keychar) > -1) && key != 8 && key != 9 && key != 37 && key != 38 && key != 39 && key != 40 && key != 46 && key != 110 && key != 190 && key != 188){
      e.preventDefault();
      return;
    }*/



    //resetImageTagsAndState();
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
    /*$("#" + elementId).prev()*/
    var cursonPosition = document.getElementById(elementId).selectionStart;

    var indexOfDot = $('#' + elementId).val().indexOf(".");
    /*console.log("came here here",keyCode,$("#"+elementId).val(),"currentPosition",cursonPosition,"indexOfDot",indexOfDot);*/
    //see if the value entered is before decimal
    if (!patt1.exec($("#" + elementId).val())) {
        if (keyCode == 8 || keyCode == 37 || keyCode == 39 || cursonPosition <= indexOfDot) {
            return;
        }
        e.preventDefault();
    }
}

function calculateMotor(event) {
    var keycode = event.keyCode;
    var elementId = event.target.id;
    var ddValue = $("#motorHeaderDD").val();
    //String.fromCharCode(event.keyCode)//to get the character put
    commadotMot();
    if ((keycode >= 48 && keycode <= 57) || keycode == 46 || keycode == 8 || (keycode >= 96 && keycode <= 105) || keycode == 110) {
        if (ddValue == 1) {
            //flow rate
            calculateFlowRateMotor(elementId);
        } else if (ddValue == 2) {
            //pressure  
            calculatePressureMotor(elementId);
        } else if (ddValue == 3) {
            //displacement
            calculateDisplacementMotor(elementId);
        } else if (ddValue == 4) {
            //speed
            calculateSpeedMotor(elementId);
        } else if (ddValue == 5) {
            //torque
            calculateTorqueMotor(elementId);
        } else if (ddValue == 6) {
            //power
            calculatePowerMotor(elementId);
        }
    } else {
        //$("#" + elementId).val($("#" + elementId).val().substring(0, $("#" + elementId).val().length - 1));
    }
}

function motorDDChange() {
    var ddValue = $('#motorHeaderDD').val();
    var ddValuePrev = $("#motorHeaderDD").data("prev");
    if (ddValue && ddValue !== "") {
        if (ddmotHeaderMap[ddValue]) {
            //also change the dropdown accordingly
            //ToDo -->> change units based on dd value
            if (ddValue != ddValuePrev) {
                initMotordd();
            }
            $("#motorHeaderDD").data("prev", $('#motorHeaderDD').val());
            resetImageTagsAndState();
        }
    }
}

function selectActiveElementBackground(obj) {
    var id = obj.id + 'list';
    $(".listElement").removeClass('activeSelected');
    $("#" + id).addClass('activeSelected');
    resetImageTagsAndState();
}

function removeActiveElementBackground(obj) {
    var id = obj.id + 'list';
    /* $(".listElement").removeClass('activeSelected');*/
    $("#" + id).removeClass('activeSelected');
    /* resetImageTagsAndState();*/
}

function getHTMLTemplate(id, mainText) {
    var html = '<div class="listElement" id=' + 'inp' + id + 'list' + '>' +
        '<div class="leftListElement">' +
        '<label id="lbl' + id + '">' + mainText + '</label>' +
        '</div>' +
        '<div class="rightListElement">' +
        '<div class="innerListElement padding-right-10">' +
        '<input onfocus="selectActiveElementBackground(this)" onfocusout="removeActiveElementBackground(this)" class="innerListElementInput" type="text" name="inp' + id + '" value="" id="inp' + id + '" autocomplete="off" onkeydown="calculateMotorKeyDown(event)" onkeyup="calculateMotor(event)"></input> ' +
        '</div>' +
        '<div class="innerListElement">' +
        '<select class="innerListSelect" onchange="onChangeMotorDropDD(event)" id="sel' + id + '"  name="sel' + id + '">  </select>' +
        '</div>' +
        '</div>' +
        '</div>';
    return html;
}

function getEmailHeaderMotor(headerText) {
    var html = '<div class="nmailHead">' +
        '<div class="nmailLeftHead"></div>' +
        '<div class="nmailRightHead"></div>' +
        '</div>';
    return html;
}

function getEmailBodyHeaderMotor(headerText) {
    var html = '<div class="nbodyHead">' +
        '<div class="nbodyHeadTxt"></div>' +
        '<div class="nbodyHeadImg"></div>' +
        '</div>';
    return html;
}

function getEmailBodyTableTrMotor(leftText, value, unit) {
    var html = '<tr>' +
        '<td>' +
        leftText '</td>' +
        '<td>' +
        value + unit +
        '</td>' +
        '</tr>';
    return html;
}

function getEmailBodyMotor(ddValue) {
    return;
    var flowVal = $("#inpmotFlowRate").val();
    var pressVal = $("#inpmotPressure").val();
    var dispVal = $("#inpmotDisplacement").val();
    var speedVal = $("#inpmotSpeed").val();
    var torVal = $("#inpmotTorque").val();
    var powVal = $("#inpmotPower").val();
    var volEffVal = $("#inpmotVolEff").val();
    var mechEffVal = $("#inpmotMechEff").val();
    var outVal = $("#outmot").val();

    var flowUnit = $("#selmotFlowRate").val();
    var pressUnit = $("#selmotPressure").val();
    var dispUnit = $("#selmotDisplacement").val();
    var speedUnit = $("#selmotSpeed").val();
    var torUnit = $("#selmotTorque").val();
    var powUnit = $("#selmotPower").val();
    var volEffUnit = $("#selmotVolEff").val();
    var mechEffUnit = $("#selmotMechEff").val();
    var outVal = $("#outselmot").val();

    if (ddValue == 1) {
        var disphtml = getEmailBodyTableTrMotor(motHDDDiplacementText, dispVal, dispUnit);
        var speedhtml = getEmailBodyTableTrMotor(motHDDSpeedText, speedVal, speedUnit);
        var volEffhtml = getEmailBodyTableTrMotor(motHDDVolEffText, volEffVal, volEffUnit);
        var powerhtml = getEmailBodyTableTrMotor(motHDDPowerText, powVal, powUnit);
        var mechEffhtml = getEmailBodyTableTrMotor(motHDDMechEffText, mechEffVal, mechEffUnit);
        return '<table>' + disphtml + speedhtml + volEffhtml + powerhtml + mechEffhtml + '</table>';

    } else if (ddValue == 2) {
        var powerhtml = getEmailBodyTableTrMotor(motHDDPowerText, powVal, powUnit);
        var flowhtml = getEmailBodyTableTrMotor(motHDDFlowRateText, flowVal, flowUnit);
        var volEffhtml = getEmailBodyTableTrMotor(motHDDVolEffText, volEffVal, volEffUnit);
        var mechEffhtml = getEmailBodyTableTrMotor(motHDDMechEffText, mechEffVal, mechEffUnit);
        var torquehtml = getEmailBodyTableTrMotor(motHDDTorqueText, torVal, torUnit);
        var disphtml = getEmailBodyTableTrMotor(motHDDDiplacementText, dispVal, dispUnit);
        return '<table>' + powerhtml + flowhtml + volEffhtml + mechEffhtml + torquehtml + disphtml + '</table>';
    } else if (ddValue == 3) {
        var torquehtml = getEmailBodyTableTrMotor(motHDDTorqueText, torVal, torUnit);
        var mechEffhtml = getEmailBodyTableTrMotor(motHDDMechEffText, mechEffVal, mechEffUnit);
        var pressurehtml = getEmailBodyTableTrMotor(motHDDPressureText, presVal, pressUnit);
        var flowratehtml = getEmailBodyTableTrMotor(motHDDFlowRateText, flowVal, flowUnit);
        var volEffhtml = getEmailBodyTableTrMotor(motHDDVolEffText, volEffVal, volEffUnit);
        var speedhtml = getEmailBodyTableTrMotor(motHDDSpeedText, speeVal, speedUnit);
        return '<table>' + torquehtml + mechEffhtml + pressurehtml + flowratehtml + volEffhtml + speedhtml + '</table>';
    } else if (ddValue == 4) {
        var flowhtml = getEmailBodyTableTrMotor(motHDDFlowRateText, flowVal, flowUnit);
        var volEffhtml = getEmailBodyTableTrMotor(motHDDVolEffText, volEffVal, volEffUnit);
        var disphtml = getEmailBodyTableTrMotor(motHDDDiplacementText, dispVal, dispUnit);
        var powerhtml = getEmailBodyTableTrMotor(motHDDPowerText, powVal, powUnit);
        var torquehtml = getEmailBodyTableTrMotor(motHDDTorqueText, torVal, torUnit);
        return '<table>' + flowhtml + volEffhtml + disphtml + powerhtml + torquehtml + '</table>';
    } else if (ddValue == 5) {
        var mechEffhtml = getEmailBodyTableTrMotor(motHDDMechEffText, mechEffVal, mechEffUnit);
        var disphtml = getEmailBodyTableTrMotor(motHDDDiplacementText, dispVal, dispUnit);
        var pressurehtml = getEmailBodyTableTrMotor(motHDDPressureText, presVal, pressUnit);
        var powerhtml = getEmailBodyTableTrMotor(motHDDPowerText, powVal, powUnit);
        var speedhtml = getEmailBodyTableTrMotor(motHDDSpeedText, speedVal, speedUnit);
        return '<table>' + mechEffhtml + disphtml + pressurehtml + powerhtml + speedhtml + '</table>';
    } else if (ddValue == 6) {
        var torquehtml = getEmailBodyTableTrMotor(motHDDTorqueText, torVal, torUnit);
        var speedhtml = getEmailBodyTableTrMotor(motHDDSpeedText, speedVal, speedUnit);
        var flowhtml = getEmailBodyTableTrMotor(motHDDFlowRateText, flowVal, flowUnit);
        var pressurehtml = getEmailBodyTableTrMotor(motHDDPressureText, presVal, pressUnit);
        var volEffhtml = getEmailBodyTableTrMotor(motHDDVolEffText, volEffVal, volEffUnit);
        var mechEffhtml = getEmailBodyTableTrMotor(motHDDMechEffText, mechEffVal, mechEffUnit);
        return '<table>' + torquehtml + speedhtml + flowhtml + pressurehtml + volEffhtml + mechEffhtml + '</table>';
    }
}

function getEmailToCcMotor() {
    var html = '<div>' +
        '<div class="nToEmail">' +
        '<div class="nToEmailLeft">' + +'</div>' +
        '<div class="nToEmailRight">' + +'</div>' +
        '</div>' +
        '<div class="nCcEmail">' +
        '<div class="nCcEmailLeft">' + +'</div>' +
        '<div class="nCcEmailRight">' + +'</div>' +
        '</div>'
    '</div>';
    return html;
}

function getEmailFooterMotor() {
    var html = '<div>' +
        '<div id="nDisclaimer">' +
        '<label>' +
        lowerDisclaimerText '</label>' +
        '</div>' +
        '<div id="nDisclaimerText">' +
        '<label>' +
        disclaimerText '</label>' +
        '</div>' +
        '<div id="nCopyright">' +
        '<label>' +
        '</label>' +
        '</div>' +
        '</div>';
    return html;
}

function getEmailMotor(ddValue) {
    var html = "";
    var headerHtml = "";
    var alertSuccessHtml = "";
    var alertFailureHtml = "";
    var toccHtml = "";
    var bodyHtml = "";
    var footerHtml = "";
    var htmlNew = "";
    if (ddValue == 1) {
        headerHtml = getEmailHeaderMotor(emailTopHeaderTxt);
        toccHtml = getEmailToCcMotor();
        footerHtml = getEmailFooterMotor();
        bodyHtml = getEmailBodyMotor(ddValue);
        htmlNew = '<div id="outerMotor" style="display:none"' +
            headerHtml + toccHtml + bodyHtml + footerHtml +
            '</div>';
    } else if (ddValue == 2) {
        headerHtml = getEmailHeaderMotor(emailTopHeaderTxt);
        toccHtml = getEmailToCcMotor();
        footerHtml = getEmailFooterMotor();
        bodyHtml = getEmailBodyMotor(ddValue);
        htmlNew = '<div id="outerMotor" style="display:none"' +
            headerHtml + toccHtml + bodyHtml + footerHtml +
            '</div>';
    } else if (ddValue == 3) {
        headerHtml = getEmailHeaderMotor(emailTopHeaderTxt);
        toccHtml = getEmailToCcMotor();
        footerHtml = getEmailFooterMotor();
        bodyHtml = getEmailBodyMotor(ddValue);
        htmlNew = '<div id="outerMotor" style="display:none"' +
            headerHtml + toccHtml + bodyHtml + footerHtml +
            '</div>';
    } else if (ddValue == 4) {
        headerHtml = getEmailHeaderMotor(emailTopHeaderTxt);
        toccHtml = getEmailToCcMotor();
        footerHtml = getEmailFooterMotor();
        bodyHtml = getEmailBodyMotor(ddValue);
        htmlNew = '<div id="outerMotor" style="display:none"' +
            headerHtml + toccHtml + bodyHtml + footerHtml +
            '</div>';
    } else if (ddValue == 5) {
        headerHtml = getEmailHeaderMotor(emailTopHeaderTxt);
        toccHtml = getEmailToCcMotor();
        footerHtml = getEmailFooterMotor();
        bodyHtml = getEmailBodyMotor(ddValue);
        htmlNew = '<div id="outerMotor" style="display:none"' +
            headerHtml + toccHtml + bodyHtml + footerHtml +
            '</div>';
    } else if (ddValue == 6) {
        headerHtml = getEmailHeaderMotor(emailTopHeaderTxt);
        toccHtml = getEmailToCcMotor();
        footerHtml = getEmailFooterMotor();
        bodyHtml = getEmailBodyMotor(ddValue);
        htmlNew = '<div id="outerMotor" style="display:none"' +
            headerHtml + toccHtml + bodyHtml + footerHtml +
            '</div>';
    }
    return htmlNew;
}

function getOutputHTMLTemplate(id, mainText) {
    var html = '<div style="padding-top:0px;" class="listElement">' +
        '<div class="leftListElement">' +
        '<label class="outputFooterColor" id="motOutputLabel">' + mainText + '</label>  ' +
        '</div>' +
        '<div class="rightListElement">' +
        '<div class="innerListElement padding-right-10">' +
        '<input style="background-color:#F1F1F1" class="innerListElementInput decimal" type="text" name="outmot" value="" id="outmot"  autocomplete="off" >  ' +
        '</div>' +
        '<div class="innerListElement">' +
        '<select class="innerListSelect" onchange="onChangeMotorDropDD(event)" id="outselmot" name="outselmot" >  ' +
        '</select>  ' +
        '</div>' +
        '</div>' +
        '</div>';
    return html;
}

function getDivider() {
    var html = '<div class="ioDivider">' +
        '<div class="ioInnerDiv"></div>' +
        '</div>';
    return html;
}


function updateNonUnits(id, type) {
    $("#" + id).empty();
    $("#" + id).sSelect();
    $("#" + id).resetSS();
}

function updateDisplacementDD(id, type) {
    if (type === "metric") {
        $("#" + id).empty();
        $("<option value='m3/rev'>m&sup3;/rev</option>").appendTo("#" + id);
        $("<option value='cm3/rev'>cm&sup3;/rev</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    } else {
        $("#" + id).empty();
        $("<option value='in3/rev'>in&sup3;/rev</option>").appendTo("#" + id);
        $("<option value='ft3/rev'>ft&sup3;/rev</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    }
}

function updateSpeedDD(id, type) {
    if (type === "metric") {
        $("#" + id).empty();
        $("<option value='rps'>rps</option>").appendTo("#" + id);
        $("<option value='rad/s'>rad/s</option>").appendTo("#" + id);
        $("<option value='rpm'>rpm</option>").appendTo("#" + id);
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

function updateVolEffDD(id, type) {
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

function updatePowerDD(id, type) {
    if (type === "metric") {
        $("#" + id).empty();
        $("<option value='W'>W</option>").appendTo("#" + id);
        $("<option value='kW'>kW</option>").appendTo("#" + id);
        $("<option value='hp'>hp</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    } else {
        $("#" + id).empty();
        $("<option value='hp'>hp</option>").appendTo("#" + id);
        $("<option value='W'>W</option>").appendTo("#" + id);
        $("<option value='kW'>kW</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    }
}

function updatePressureDD(id, type) {
    if (type === "metric") {
        $("#" + id).empty();
        $("<option value='Pa'>Pa</option>").appendTo("#" + id);
        $("<option value='kPa'>kPa</option>").appendTo("#" + id);
        $("<option value='bar'>bar</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    } else {
        $("#" + id).empty();
        $("<option value='psi'>psi</option>").appendTo("#" + id);
        $("<option value='lb/ft2'>lb/ft&sup2;</option>").appendTo("#" + id);
        $("<option value='atm'>atm</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    }
}

function updateMechEffDD(id, type) {
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

function updateFlowRateDD(id, type) {
    if (type === "metric") {
        $("#" + id).empty();
        $("<option value='m3/s'>m&sup3;/s</option>").appendTo("#" + id);
        $("<option value='m3/min'>m&sup3;/min</option>").appendTo("#" + id);
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

function updateTorqueDD(id, type) {
    if (type === "metric") {
        $("#" + id).empty();
        $("<option value='Nm'>Nm</option>").appendTo("#" + id);
        $("<option value='kNm'>kNm</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    } else {
        $("#" + id).empty();
        $("<option value='lbf-in'>lbf-in</option>").appendTo("#" + id);
        $("<option value='lbf-ft'>lbf-ft</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    }
}

function onChangeMotorDropDD(event) {
    var elementId = event.target.id;
    var ddValue = $("#motorHeaderDD").val();
    if (ddValue == 1) {
        var displacementVal = $("#inpmotDisplacement").val();
        var speedVal = $("#inpmotSpeed").val();
        var volEffVal = $("#inpmotVolEff").val();
        var powerVal = $("#inpmotPower").val();
        var pressureVal = $("#inpmotPressure").val();
        var mechEffVal = $("#inpmotMechEff").val();
        var flowRateVal = $("#outmot").val();

        var flowRateValUnit = $("#outselmot").val();
        var displacementValUnit = $("#selmotDisplacement").val();
        var speedValUnit = $("#selmotSpeed").val();
        var volEffValUnit = $("#selmotVolEff").val();
        var powerValUnit = $("#selmotPower").val();
        var pressureValUnit = $("#selmotPressure").val();
        var mechEffValUnit = $("#selmotMechEff").val();

        var flowRateValUnitPrev = $("#outselmot").data("prev");
        var displacementValUnitPrev = $("#selmotDisplacement").data("prev");
        var speedValUnitPrev = $("#selmotSpeed").data("prev");
        var volEffValUnitPrev = $("#selmotVolEff").data("prev");
        var powerValUnitPrev = $("#selmotPower").data("prev");
        var pressureValUnitPrev = $("#selmotPressure").data("prev");
        var mechEffValUnitPrev = $("#selmotMechEff").data("prev");

        if (elementId == "outselmot" && (flowRateValUnitPrev != flowRateValUnit)) {
            if (flowRateVal.length > 0) {
                convertMotFlowRate(flowRateValUnitPrev, flowRateValUnit, flowRateVal, elementId);
            }
            $("#outselmot").data("prev", $("#outselmot").val());
        } else if (elementId == "selmotDisplacement" && (displacementValUnitPrev != displacementValUnit)) {
            if (displacementVal.length > 0) {
                convertMotDisplacement(displacementValUnitPrev, displacementValUnit, displacementVal, elementId);
            }
            $("#selmotDisplacement").data("prev", $("#selmotDisplacement").val());
        } else if (elementId == "selmotSpeed" && (speedValUnitPrev != speedValUnit)) {
            if (speedVal.length > 0) {
                convertMotSpeed(speedValUnitPrev, speedValUnit, speedVal, elementId);
            }
            $("#selmotSpeed").data("prev", $("#selmotSpeed").val());
        } else if (elementId == "selmotVolEff" && (volEffValUnitPrev != volEffValUnit)) {
            if (volEffVal.length > 0) {
                convertMotVolEff(volEffValUnitPrev, volEffValUnit, volEffVal, elementId);
            }
            $("#selmotVolEff").data("prev", $("#selmotVolEff").val());
        }
        //
        else if (elementId == "selmotPower" && (powerValUnitPrev != powerValUnit)) {
            if (powerVal.length > 0) {
                convertMotPower(powerValUnitPrev, powerValUnit, powerVal, elementId);
            }
            $("#selmotPower").data("prev", $("#selmotPower").val());
        } else if (elementId == "selmotPressure" && (pressureValUnitPrev != pressureValUnit)) {
            if (pressureVal.length > 0) {
                convertMotPressure(pressureValUnitPrev, pressureValUnit, pressureVal, elementId);
            }
            $("#selmotPressure").data("prev", $("#selmotPressure").val());
        }
    } else if (ddValue == 2) {
        var pressure = $("#outmot").val();
        var flowRate = $("#inpmotFlowRate").val();
        var torque = $("#inpmotTorque").val();
        var displacement = $("#inpmotDisplacement").val();
        var power = $("#inpmotPower").val();

        var pressureUnit = $("#outselmot").val();
        var flowRateUnit = $("#selmotFlowRate").val();
        var torqueUnit = $("#selmotTorque").val();
        var displacementUnit = $("#selmotDisplacement").val();
        var powerUnit = $("#selmotPower").val();

        var pressureUnitPrev = $("#outselmot").data("prev");
        var flowRateUnitPrev = $("#selmotFlowRate").data("prev");
        var torqueUnitPrev = $("#selmotTorque").data("prev");
        var displacementUnitPrev = $("#selmotDisplacement").data("prev");
        var powerUnitPrev = $("#selmotPower").data("prev");

        if (elementId == "outselmot" && (pressureUnitPrev != pressureUnit)) {
            if (pressure.length > 0) {
                convertMotPressure(pressureUnitPrev, pressureUnit, pressure, elementId);
            }
            $("#outselmot").data("prev", $("#outselmot").val());
        } else if (elementId == "selmotFlowRate" && (flowRateUnitPrev != flowRateUnit)) {
            if (flowRate.length > 0) {
                convertMotFlowRate(flowRateUnitPrev, flowRateUnit, flowRate, elementId);
            }
            $("#selmotFlowRate").data("prev", $("#selmotFlowRate").val());
        } else if (elementId == "selmotTorque" && (torqueUnitPrev != torqueUnit)) {
            if (torque.length > 0) {
                convertMotTorque(torqueUnitPrev, torqueUnit, torque, elementId);
            }
            $("#selmotTorque").data("prev", $("#selmotTorque").val());
        } else if (elementId == "selmotDisplacement" && (displacementUnitPrev != displacementUnit)) {
            if (displacement.length > 0) {
                convertMotDisplacement(displacementUnitPrev, displacementUnit, displacement, elementId);
            }
            $("#selmotDisplacement").data("prev", $("#selmotDisplacement").val());
        } else if (elementId == "selmotPower" && (powerUnitPrev != powerUnit)) {
            if (power.length > 0) {
                convertMotPower(powerUnitPrev, powerUnit, power, elementId);
            }
            $("#selmotPower").data("prev", $("#selmotPower").val());
        }
    } else if (ddValue == 3) {
        var torque = $("#inpmotTorque").val();
        var pressure = $("#inpmotPressure").val();
        var flowRate = $("#inpmotFlowRate").val();
        var speed = $("#inpmotSpeed").val();

        var displacement = $("#outmot").val();

        var torqueUnit = $("#selmotTorque").val();
        var pressureUnit = $("#selmotPressure").val();
        var flowRateUnit = $("#selmotFlowRate").val();
        var speedUnit = $("#selmotSpeed").val();

        var displacementUnit = $("#outselmot").val();

        var torqueUnitPrev = $("#selmotTorque").data("prev");
        var pressureUnitPrev = $("#selmotPressure").data("prev");
        var flowRateUnitPrev = $("#selmotFlowRate").data("prev");
        var speedUnitPrev = $("#selmotSpeed").data("prev");
        var displacementUnitPrev = $("#outselmot").data("prev");
        /*console.log("displacementUnitPrev",displacementUnitPrev,displacementUnit);*/
        if (elementId == "outselmot" && (displacementUnitPrev != displacementUnit)) {
            if (displacement.length > 0) {
                convertMotDisplacement(displacementUnitPrev, displacementUnit, displacement, elementId);
            }
            $("#outselmot").data("prev", $("#outselmot").val());
        } else if (elementId == "selmotTorque" && (torqueUnitPrev != torqueUnit)) {
            if (torque.length > 0) {
                convertMotTorque(torqueUnitPrev, torqueUnit, torque, elementId);
            }
            $("#selmotTorque").data("prev", $("#selmotTorque").val());
        } else if (elementId == "selmotPressure" && (pressureUnitPrev != pressureUnit)) {
            if (pressure.length > 0) {
                convertMotPressure(pressureUnitPrev, pressureUnit, pressure, elementId);
            }
            $("#selmotPressure").data("prev", $("#selmotPressure").val());
        } else if (elementId == "selmotFlowRate" && (flowRateUnitPrev != flowRateUnit)) {
            if (flowRate.length > 0) {
                convertMotFlowRate(flowRateUnitPrev, flowRateUnit, flowRate, elementId);
            }
            $("#selmotFlowRate").data("prev", $("#selmotFlowRate").val());
        } else if (elementId == "selmotSpeed" && (speedUnitPrev != speedUnit)) {
            if (speed.length > 0) {
                convertMotSpeed(speedUnitPrev, speedUnit, speed, elementId);
            }
            $("#selmotSpeed").data("prev", $("#selmotSpeed").val());
        }
    } else if (ddValue == 4) {
        var flowRate = $("#inpmotFlowRate").val();
        var displacement = $("#inpmotDisplacement").val();
        var power = $("#inpmotPower").val();
        var torque = $("#inpmotTorque").val();

        var speed = $("#outmot").val();

        var flowRateUnit = $("#selmotFlowRate").val();
        var displacementUnit = $("#selmotDisplacement").val();
        var powerUnit = $("#selmotPower").val();
        var torqueUnit = $("#selmotTorque").val();

        var speedUnit = $("#outselmot").val();

        var flowRateUnitPrev = $("#selmotFlowRate").data("prev");
        var displacementUnitPrev = $("#selmotDisplacement").data("prev");
        var powerUnitPrev = $("#selmotPower").data("prev");
        var torqueUnitPrev = $("#selmotTorque").data("prev");
        var speedUnitPrev = $("#outselmot").data("prev");

        if (elementId == "outselmot" && (speedUnitPrev != speedUnit)) {
            if (speed.length > 0) {
                convertMotSpeed(speedUnitPrev, speedUnit, speed, elementId);
            }
            $("#outselmot").data("prev", $("#outselmot").val());
        } else if (elementId == "selmotFlowRate" && (flowRateUnitPrev != flowRateUnit)) {
            if (flowRate.length > 0) {
                convertMotFlowRate(flowRateUnitPrev, flowRateUnit, flowRate, elementId);
            }
            $("#selmotFlowRate").data("prev", $("#selmotFlowRate").val());
        } else if (elementId == "selmotDisplacement" && (displacementUnitPrev != displacementUnit)) {
            if (displacement.length > 0) {
                convertMotDisplacement(displacementUnitPrev, displacementUnit, displacement, elementId);
            }
            $("#selmotDisplacement").data("prev", $("#selmotDisplacement").val());
        } else if (elementId == "selmotPower" && (powerUnitPrev != powerUnit)) {
            if (power.length > 0) {
                convertMotPower(powerUnitPrev, powerUnit, power, elementId);
            }
            $("#selmotPower").data("prev", $("#selmotPower").val());
        } else if (elementId == "selmotTorque" && (torqueUnitPrev != torqueUnit)) {
            if (torque.length > 0) {
                convertMotTorque(torqueUnitPrev, torqueUnit, torque, elementId);
            }
            $("#selmotTorque").data("prev", $("#selmotTorque").val());
        }
    } else if (ddValue == 5) {
        var displacement = $("#inpmotDisplacement").val();
        var pressure = $("#inpmotPressure").val();
        var power = $("#inpmotPower").val();
        var speed = $("#inpmotSpeed").val();

        var torque = $("#outmot").val();

        var displacementUnit = $("#selmotDisplacement").val();
        var pressureUnit = $("#selmotPressure").val();
        var powerUnit = $("#selmotPower").val();
        var speedUnit = $("#selmotSpeed").val();

        var torqueUnit = $("#outselmot").val();

        var displacementUnitPrev = $("#selmotDisplacement").data("prev");
        var pressureUnitPrev = $("#selmotPressure").data("prev");
        var powerUnitPrev = $("#selmotPower").data("prev");
        var speedUnitPrev = $("#selmotSpeed").data("prev");
        var torqueUnitPrev = $("#outselmot").data("prev");

        if (elementId == "outselmot" && (torqueUnitPrev != torqueUnit)) {
            if (torque.length > 0) {
                convertMotTorque(torqueUnitPrev, torqueUnit, torque, elementId);
            }
            $("#outselmot").data("prev", $("#outselmot").val());
        } else if (elementId == "selmotDisplacement" && (displacementUnitPrev != displacementUnit)) {
            if (displacement.length > 0) {
                convertMotDisplacement(displacementUnitPrev, displacementUnit, displacement, elementId);
            }
            $("#selmotDisplacement").data("prev", $("#selmotDisplacement").val());
        } else if (elementId == "selmotPressure" && (pressureUnitPrev != pressureUnit)) {
            if (pressure.length > 0) {
                convertMotPressure(pressureUnitPrev, pressureUnit, pressure, elementId);
            }
            $("#selmotPressure").data("prev", $("#selmotPressure").val());
        } else if (elementId == "selmotPower" && (powerUnitPrev != powerUnit)) {
            if (power.length > 0) {
                convertMotPower(powerUnitPrev, powerUnit, power, elementId);
            }
            $("#selmotPower").data("prev", $("#selmotPower").val());
        } else if (elementId == "selmotSpeed" && (speedUnitPrev != speedUnit)) {
            if (speed.length > 0) {
                convertMotSpeed(speedUnitPrev, speedUnit, speed, elementId);
            }
            $("#selmotSpeed").data("prev", $("#selmotSpeed").val());
        }

    } else if (ddValue == 6) {
        var torque = $("#inpmotTorque").val();
        var speed = $("#inpmotSpeed").val();
        var flowRate = $("#inpmotFlowRate").val();
        var pressure = $("#inpmotPressure").val();
        var power = $("#outmot").val();

        var torqueUnit = $("#selmotTorque").val();
        var speedUnit = $("#selmotSpeed").val();
        var flowRateUnit = $("#selmotFlowRate").val();
        var pressureUnit = $("#selmotPressure").val();
        var powerUnit = $("#outselmot").val();

        var torqueUnitPrev = $("#selmotTorque").data("prev");
        var speedUnitPrev = $("#selmotSpeed").data("prev");
        var flowRateUnitPrev = $("#selmotFlowRate").data("prev");
        var pressureUnitPrev = $("#selmotPressure").data("prev");
        var powerUnitPrev = $("#outselmot").data("prev");

        if (elementId == "outselmot" && (powerUnitPrev != powerUnit)) {
            if (power.length > 0) {
                convertMotPower(powerUnitPrev, powerUnit, power, elementId);
            }
            $("#outselmot").data("prev", $("#outselmot").val());
        } else if (elementId == "selmotTorque" && (torqueUnitPrev != torqueUnit)) {
            if (torque.length > 0) {
                convertMotTorque(torqueUnitPrev, torqueUnit, torque, elementId);
            }
            $("#selmotTorque").data("prev", $("#selmotTorque").val());
        } else if (elementId == "selmotSpeed" && (speedUnitPrev != speedUnit)) {
            if (speed.length > 0) {
                convertMotSpeed(speedUnitPrev, speedUnit, speed, elementId);
            }
            $("#selmotSpeed").data("prev", $("#selmotSpeed").val());
        } else if (elementId == "selmotFlowRate" && (flowRateUnitPrev != flowRateUnit)) {
            if (flowRate.length > 0) {
                convertMotFlowRate(flowRateUnitPrev, flowRateUnit, flowRate, elementId);
            }
            $("#selmotFlowRate").data("prev", $("#selmotFlowRate").val());
        } else if (elementId == "selmotPressure" && (pressureUnitPrev != pressureUnit)) {
            if (pressure.length > 0) {
                convertMotPressure(pressureUnitPrev, pressureUnit, pressure, elementId);
            }
            $("#selmotPressure").data("prev", $("#selmotPressure").val());
        }

    }
    resetImageTagsAndState();
}

function disableMotorOutput() {
    $("#outmot").prop("disabled", true);
}

function enableMotorOutput() {
    $("#outmot").prop("disabled", false);
}

function initMotordd() {
    motorOutput = false;
    disableCopy();
    disableReset();
    disableEmail();
    var unitsOfMeasurementVal = measurementUnitFlag.toLowerCase();
    var ddValue = $("#motorHeaderDD").val();
    //based on ddValue decide which tabs to show or hide
    //create the html here only
    var mhtmlFlowRate = getHTMLTemplate("motFlowRate", motHDDFlowRateText);
    var mhtmlPressure = getHTMLTemplate("motPressure", motHDDPressureText);
    var mhtmlDisplacement = getHTMLTemplate("motDisplacement", motHDDDiplacementText);
    var mhtmlSpeed = getHTMLTemplate("motSpeed", motHDDSpeedText);
    var mhtmlPower = getHTMLTemplate("motPower", motHDDPowerText);
    var mhtmlVolEff = getHTMLTemplate("motVolEff", motHDDVolEffText);
    var mhtmlMechEff = getHTMLTemplate("motMechEff", motHDDMechEffText);
    var mhtmlTorque = getHTMLTemplate("motTorque", motHDDTorqueText);
    var mhtmlDivider = getDivider();
    var outputHtml = getOutputHTMLTemplate("", ddmotHeaderMap[ddValue]);
    var emailTemplate = getEmailMotor(ddValue);
    if (ddValue == 1) {
        $(".inputMotorX").html();
        var htmlToShow = mhtmlDisplacement + mhtmlSpeed + mhtmlVolEff +
            mhtmlPower + mhtmlPressure + mhtmlMechEff + mhtmlDivider + outputHtml;
        $(".inputMotorX").html(htmlToShow);
        $("#motorEmail").html();
        $("#motorEmail").html(emailTemplate);
        updateDisplacementDD("selmotDisplacement", unitsOfMeasurementVal);
        updateSpeedDD("selmotSpeed", unitsOfMeasurementVal);
        updateVolEffDD("selmotVolEff", unitsOfMeasurementVal);
        updatePowerDD("selmotPower", unitsOfMeasurementVal);
        updatePressureDD("selmotPressure", unitsOfMeasurementVal);
        updateMechEffDD("selmotMechEff", unitsOfMeasurementVal);
        updateFlowRateDD("outselmot", unitsOfMeasurementVal);
        $("#selmotDisplacement").data("prev", $("#selmotDisplacement").val());
        $("#selmotSpeed").data("prev", $("#selmotSpeed").val());
        $("#selmotPower").data("prev", $("#selmotPower").val());
        $("#selmotPressure").data("prev", $("#selmotPressure").val());
        $("#outselmot").data("prev", $("#outselmot").val());
    } else if (ddValue == 2) {
        $(".inputMotorX").html();
        var htmlToShow = mhtmlPower + mhtmlFlowRate + mhtmlVolEff +
            mhtmlMechEff + mhtmlTorque + mhtmlDisplacement + mhtmlDivider + outputHtml;
        $(".inputMotorX").html(htmlToShow);
        updatePowerDD("selmotPower", unitsOfMeasurementVal);
        updateFlowRateDD("selmotFlowRate", unitsOfMeasurementVal);
        updateVolEffDD("selmotVolEff", unitsOfMeasurementVal);
        updateMechEffDD("selmotMechEff", unitsOfMeasurementVal);
        updateTorqueDD("selmotTorque", unitsOfMeasurementVal);
        updateDisplacementDD("selmotDisplacement", unitsOfMeasurementVal);
        updatePressureDD("outselmot", unitsOfMeasurementVal);

        $("#selmotPower").data("prev", $("#selmotPower").val());
        $("#selmotFlowRate").data("prev", $("#selmotFlowRate").val());
        $("#selmotTorque").data("prev", $("#selmotTorque").val());
        $("#selmotDisplacement").data("prev", $("#selmotDisplacement").val());
        $("#outselmot").data("prev", $("#outselmot").val());

    } else if (ddValue == 3) {

        $(".inputMotorX").html();
        var htmlToShow = mhtmlTorque + mhtmlMechEff + mhtmlPressure +
            mhtmlFlowRate + mhtmlVolEff + mhtmlSpeed + mhtmlDivider + outputHtml;
        $(".inputMotorX").html(htmlToShow);


        updateTorqueDD("selmotTorque", unitsOfMeasurementVal);
        updateMechEffDD("selmotMechEff", unitsOfMeasurementVal);
        updatePressureDD("selmotPressure", unitsOfMeasurementVal);
        updateFlowRateDD("selmotFlowRate", unitsOfMeasurementVal);
        updateVolEffDD("selmotVolEff", unitsOfMeasurementVal);
        updateSpeedDD("selmotSpeed", unitsOfMeasurementVal);

        updateDisplacementDD("outselmot", unitsOfMeasurementVal);

        $("#selmotTorque").data("prev", $("#selmotTorque").val());
        $("#selmotPressure").data("prev", $("#selmotPressure").val());
        $("#selmotFlowRate").data("prev", $("#selmotFlowRate").val());
        $("#selmotSpeed").data("prev", $("#selmotSpeed").val());
        $("#outselmot").data("prev", $("#outselmot").val());
    } else if (ddValue == 4) {

        $(".inputMotorX").html();
        var htmlToShow = mhtmlFlowRate + mhtmlVolEff + mhtmlDisplacement +
            mhtmlPower + mhtmlTorque + mhtmlDivider + outputHtml;
        $(".inputMotorX").html(htmlToShow);


        updateFlowRateDD("selmotFlowRate", unitsOfMeasurementVal);
        updateVolEffDD("selmotVolEff", unitsOfMeasurementVal);
        updateDisplacementDD("selmotDisplacement", unitsOfMeasurementVal);
        updatePowerDD("selmotPower", unitsOfMeasurementVal);
        updateTorqueDD("selmotTorque", unitsOfMeasurementVal);


        updateSpeedDD("outselmot", unitsOfMeasurementVal);


        $("#selmotFlowRate").data("prev", $("#selmotFlowRate").val());
        $("#selmotDisplacement").data("prev", $("#selmotDisplacement").val());
        $("#selmotPower").data("prev", $("#selmotPower").val());
        $("#selmotTorque").data("prev", $("#selmotTorque").val());
        $("#outselmot").data("prev", $("#outselmot").val());
    } else if (ddValue == 5) {

        $(".inputMotorX").html();
        var htmlToShow = mhtmlMechEff + mhtmlDisplacement + mhtmlPressure +
            mhtmlPower + mhtmlSpeed + mhtmlDivider + outputHtml;
        $(".inputMotorX").html(htmlToShow);


        updateMechEffDD("selmotMechEff", unitsOfMeasurementVal);
        updateDisplacementDD("selmotDisplacement", unitsOfMeasurementVal);
        updatePressureDD("selmotPressure", unitsOfMeasurementVal);
        updatePowerDD("selmotPower", unitsOfMeasurementVal);
        updateSpeedDD("selmotSpeed", unitsOfMeasurementVal);


        updateTorqueDD("outselmot", unitsOfMeasurementVal);


        $("#selmotDisplacement").data("prev", $("#selmotDisplacement").val());
        $("#selmotPressure").data("prev", $("#selmotPressure").val());
        $("#selmotPower").data("prev", $("#selmotPower").val());
        $("#selmotSpeed").data("prev", $("#selmotSpeed").val());
        $("#outselmot").data("prev", $("#outselmot").val());
    } else if (ddValue == 6) {

        $(".inputMotorX").html();
        var htmlToShow = mhtmlTorque + mhtmlSpeed + mhtmlFlowRate +
            mhtmlPressure + mhtmlVolEff + mhtmlMechEff + mhtmlDivider + outputHtml;
        $(".inputMotorX").html(htmlToShow);


        updateTorqueDD("selmotTorque", unitsOfMeasurementVal);
        updateSpeedDD("selmotSpeed", unitsOfMeasurementVal);
        updateFlowRateDD("selmotFlowRate", unitsOfMeasurementVal);
        updatePressureDD("selmotPressure", unitsOfMeasurementVal);
        updateVolEffDD("selmotVolEff", unitsOfMeasurementVal);
        updateMechEffDD("selmotMechEff", unitsOfMeasurementVal);


        updatePowerDD("outselmot", unitsOfMeasurementVal);

        $("#selmotTorque").data("prev", $("#selmotTorque").val());
        $("#selmotSpeed").data("prev", $("#selmotSpeed").val());
        $("#selmotFlowRate").data("prev", $("#selmotFlowRate").val());
        $("#selmotPressure").data("prev", $("#selmotPressure").val());
        $("#outselmot").data("prev", $("#outselmot").val());
    }
    disableMotorOutput();
    populateTabs();
}

function enableAllMotorFields() {
    $("#inpmotPower").prop("disabled", false);
    $("#inpmotPressure").prop("disabled", false);
    $("#inpmotMechEff").prop("disabled", false);
    $("#inpmotDisplacement").prop("disabled", false);
    $("#inpmotSpeed").prop("disabled", false);
    $("#inpmotTorque").prop("disabled", false);
    $("#inpmotFlowRate").prop("disabled", false);
    $("#inpmotVolEff").prop("disabled", false);

    $("#inpmotPower").css("background-color", 'white');
    $("#inpmotPressure").css("background-color", 'white');
    $("#inpmotMechEff").css("background-color", 'white');
    $("#inpmotDisplacement").css("background-color", 'white');
    $("#inpmotSpeed").css("background-color", 'white');
    $("#inpmotTorque").css("background-color", 'white');
    $("#inpmotFlowRate").css("background-color", 'white');
    $("#inpmotVolEff").css("background-color", 'white');
}

function enableAllMotorSelectFields() {
    $("#selmotPower").prop("disabled", false);
    $("#selmotPressure").prop("disabled", false);
    $("#selmotMechEff").prop("disabled", false);
    $("#selmotDisplacement").prop("disabled", false);
    $("#selmotSpeed").prop("disabled", false);
    $("#selmotTorque").prop("disabled", false);
    $("#selmotFlowRate").prop("disabled", false);
    $("#selmotVolEff").prop("disabled", false);


    $("#selmotPower").next().css({
        'background-color': 'white',
        'color': 'black'
    });
    $("#selmotPressure").next().css({
        'background-color': 'white',
        'color': 'black'
    });
    $("#selmotMechEff").next().css({
        'background-color': 'white',
        'color': 'black'
    });
    $("#selmotDisplacement").next().css({
        'background-color': 'white',
        'color': 'black'
    });
    $("#selmotSpeed").next().css({
        'background-color': 'white',
        'color': 'black'
    });
    $("#selmotTorque").next().css({
        'background-color': 'white',
        'color': 'black'
    });
    $("#selmotFlowRate").next().css({
        'background-color': 'white',
        'color': 'black'
    });
    $("#selmotVolEff").next().css({
        'background-color': 'white',
        'color': 'black'
    });


}

function calculateFlowRateMotor(elementId) {
    enableAllMotorFields();
    enableAllMotorSelectFields();
    var isOutputHit = false;
    var isResetEnabled = false;
    var unitsOfMeasurementVal = measurementUnitFlag.toLowerCase();
    var displacementVal = $("#inpmotDisplacement").val();
    var speedVal = $("#inpmotSpeed").val();
    var volEffVal = $("#inpmotVolEff").val();
    var powerVal = $("#inpmotPower").val();
    var pressureVal = $("#inpmotPressure").val();
    var mechEffVal = $("#inpmotMechEff").val();
    var flowRate = 0;
    var flowRateUnit = $("#outselmot").val();
    var displacementValUnit = $("#selmotDisplacement").val();
    var speedValUnit = $("#selmotSpeed").val();
    var volEffValUnit = $("#selmotVolEff").val();
    var powerValUnit = $("#selmotPower").val();
    var pressureValUnit = $("#selmotPressure").val();
    var mechEffValUnit = $("#selmotMechEff").val();
    if (displacementVal.length > 0 || speedVal.length > 0 || volEffVal.length > 0 || powerVal.length > 0 || pressureVal.length > 0 || mechEffVal.length > 0) {
        isResetEnabled = true;
    }
    var flowRateDefault = 0;
    if (volEffVal.length > 0) {}

    if (displacementVal.length > 0 || speedVal.length > 0 && powerVal.length == 0 && pressureVal.length == 0 && mechEffVal.length == 0) {

        $("#inpmotPower").prop("disabled", true);
        $("#inpmotPressure").prop("disabled", true);
        $("#inpmotMechEff").prop("disabled", true);

        $("#inpmotPower").css('background-color', '#F1F1F1');
        $("#inpmotPressure").css('background-color', '#F1F1F1');
        $("#inpmotMechEff").css('background-color', '#F1F1F1');


        $("#selmotPower").prop("disabled", true);
        $("#selmotPressure").prop("disabled", true);
        $("#selmotMechEff").prop("disabled", true);

        $("#selmotPower").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selmotPressure").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selmotMechEff").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });

    }
    if (powerVal.length > 0 || pressureVal.length > 0 || mechEffVal.length > 0 && displacementVal.length == 0 && speedVal.length == 0) {

        $("#inpmotDisplacement").prop("disabled", true);
        $("#inpmotSpeed").prop("disabled", true);

        $("#inpmotDisplacement").css('background-color', '#F1F1F1');
        $("#inpmotSpeed").css('background-color', '#F1F1F1');

        $("#selmotDisplacement").prop("disabled", true);
        $("#selmotSpeed").prop("disabled", true);

        $("#selmotDisplacement").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selmotSpeed").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
    }
    if (displacementVal.length > 0 && speedVal.length > 0 && volEffVal.length > 0) {
        if (unitsOfMeasurementVal == "metric") {
            var displacementValDefault = (displacementValUnit != "m3/rev") ? convertMotDisplacement(displacementValUnit, "m3/rev", displacementVal) : displacementVal;
            var speedValDefault = (speedValUnit != "rps") ? convertMotSpeed(speedValUnit, "rps", speedVal) : speedVal;
            flowRateDefault = (displacementValDefault * speedValDefault) / (volEffVal / 100); //(displace * speed) / (volEff/100)
            if (flowRateDefault != 0) {
                flowRate = flowRateUnit != "m3/s" ? convertMotFlowRate("m3/s", flowRateUnit, flowRateDefault) : flowRateDefault;
                /*$("#outmot").val(scientificToDecimal(flowRate));*/
                flowRate.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(flowRate));
                enableEmail();
                enableCopy();
                isOutputHit = true;
                $("#inpmotPower").prop("disabled", true);
                $("#inpmotPressure").prop("disabled", true);
                $("#inpmotMechEff").prop("disabled", true);

                $("#inpmotPower").css('background-color', '#F1F1F1');
                $("#inpmotPressure").css('background-color', '#F1F1F1');
                $("#inpmotMechEff").css('background-color', '#F1F1F1');

                $("#selmotPower").prop("disabled", true);
                $("#selmotPressure").prop("disabled", true);
                $("#selmotMechEff").prop("disabled", true);

                $("#selmotPower").next().css({
                    'background-color': '#F1F1F1',
                    'color': '#a0a0a0'
                });
                $("#selmotPressure").next().css({
                    'background-color': '#F1F1F1',
                    'color': '#a0a0a0'
                });
                $("#selmotMechEff").next().css({
                    'background-color': '#F1F1F1',
                    'color': '#a0a0a0'
                });
            }
        } else {
            var displacementValDefault = (displacementValUnit != "in3/rev") ? convertMotDisplacement(displacementValUnit, "in3/rev", displacementVal) : displacementVal;
            var speedValDefault = (speedValUnit != "rpm") ? convertMotSpeed(speedValUnit, "rpm", speedVal) : speedVal;
            flowRateDefault = (displacementValDefault * speedValDefault) / (231 * (volEffVal / 100)); //(displace * speed) / (volEff/100)
            if (flowRateDefault != 0) {
                flowRate = flowRateUnit != "gpm" ? convertMotFlowRate("gpm", flowRateUnit, flowRateDefault) : flowRateDefault;
                /*$("#outmot").val(scientificToDecimal(flowRate));*/
                flowRate.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(flowRate));
                enableEmail();
                enableCopy();
                isOutputHit = true;
                $("#inpmotPower").prop("disabled", true);
                $("#inpmotPressure").prop("disabled", true);
                $("#inpmotMechEff").prop("disabled", true);

                $("#inpmotPower").css('background-color', '#F1F1F1');
                $("#inpmotPressure").css('background-color', '#F1F1F1');
                $("#inpmotMechEff").css('background-color', '#F1F1F1');

                $("#selmotPower").prop("disabled", true);
                $("#selmotPressure").prop("disabled", true);
                $("#selmotMechEff").prop("disabled", true);

                $("#selmotPower").next().css({
                    'background-color': '#F1F1F1',
                    'color': '#a0a0a0'
                });
                $("#selmotPressure").next().css({
                    'background-color': '#F1F1F1',
                    'color': '#a0a0a0'
                });
                $("#selmotMechEff").next().css({
                    'background-color': '#F1F1F1',
                    'color': '#a0a0a0'
                });
            }
        }
    }
    if (powerVal.length > 0 && pressureVal.length > 0 && mechEffVal.length > 0 && volEffVal.length > 0) {
        if (unitsOfMeasurementVal == "metric") {
            var powerValDefault = (powerValUnit != "W") ? convertMotPower(powerValUnit, "W", powerVal) : powerVal;
            var pressureValDefault = (pressureValUnit != "Pa") ? convertMotPressure(pressureValUnit, "Pa", pressureVal) : pressureVal;
            flowRateDefault = powerValDefault / (pressureValDefault * (mechEffVal / 100) * (volEffVal / 100));
            flowRate = flowRateUnit != "m3/s" ? convertMotFlowRate("m3/s", flowRateUnit, flowRateDefault) : flowRateDefault;
            /*console.log("powerValDefault",powerValDefault,"pressureValDefault",pressureValDefault,"flowRateDefault",flowRateDefault,"flowRate",flowRate);*/
            /*$("#outmot").val(scientificToDecimal(flowRate));*/
            flowRate.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(flowRate));
            enableEmail();
            enableCopy();
            isOutputHit = true;
            $("#inpmotDisplacement").prop("disabled", true);
            $("#inpmotSpeed").prop("disabled", true);

            $("#inpmotDisplacement").css('background-color', '#F1F1F1');
            $("#inpmotSpeed").css('background-color', '#F1F1F1');

            $("#selmotDisplacement").prop("disabled", true);
            $("#selmotSpeed").prop("disabled", true);

            $("#selmotDisplacement").next().css({
                'background-color': '#F1F1F1',
                'color': '#a0a0a0'
            });
            $("#selmotSpeed").next().css({
                'background-color': '#F1F1F1',
                'color': '#a0a0a0'
            });
        } else {
            var powerValDefault = (powerValUnit != "hp") ? convertMotPower(powerValUnit, "hp", powerVal) : powerVal;
            var pressureValDefault = (pressureValUnit != "psi") ? convertMotPressure(pressureValUnit, "psi", pressureVal) : pressureVal;
            /*console.log("powerValDefault",powerValDefault,"pressureValDefault",pressureValDefault,"mechEffVal",mechEffVal,"volEffVal",volEffVal);*/
            flowRateDefault = (powerValDefault * 1714) / (pressureValDefault * (mechEffVal / 100) * (volEffVal / 100));
            flowRate = flowRateUnit != "gpm" ? convertMotFlowRate("gpm", flowRateUnit, flowRateDefault) : flowRateDefault;
            /*$("#outmot").val(scientificToDecimal(flowRate));*/
            flowRate.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(flowRate));
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
            $("#inpmotDisplacement").prop("disabled", true);
            $("#inpmotSpeed").prop("disabled", true);

            $("#inpmotDisplacement").css('background-color', '#F1F1F1');
            $("#inpmotSpeed").css('background-color', '#F1F1F1');

            $("#selmotDisplacement").prop("disabled", true);
            $("#selmotSpeed").prop("disabled", true);

            $("#selmotDisplacement").next().css({
                'background-color': '#F1F1F1',
                'color': '#a0a0a0'
            });
            $("#selmotSpeed").next().css({
                'background-color': '#F1F1F1',
                'color': '#a0a0a0'
            });
        }
    }
    if (isOutputHit == false) {
        //disableReset();
        disableEmail();
        disableCopy();
        $("#outmot").prop("disabled", true);
        $("#outmot").val('');
    }
    if (isResetEnabled == true) {
        enableReset();
    } else {
        disableReset();
    }
}

function enableReset() {
    $("#uBtnReset").removeClass("utilityBtnDisabled");
    $("#uBtnReset").addClass("utilityBtnEnabled");
}

function disableReset() {
    $("#uBtnReset").removeClass("utilityBtnEnabled");
    $("#uBtnReset").addClass("utilityBtnDisabled");
}

function enableCopy() {
    $("#uBtnCopy").removeClass("utilityBtnDisabled");
    $("#uBtnCopy").addClass("utilityBtnEnabled");
}

function disableCopy() {
    $("#uBtnCopy").removeClass("utilityBtnEnabled");
    $("#uBtnCopy").addClass("utilityBtnDisabled");
}

function enableEmail() {
    $("#uBtnEmail").removeClass("utilityBtnDisabled");
    $("#uBtnEmail").addClass("utilityBtnEnabled");
}

function disableEmail() {
    $("#uBtnEmail").removeClass("utilityBtnEnabled");
    $("#uBtnEmail").addClass("utilityBtnDisabled");
}

function calculatePressureMotor(elementId) {
    enableAllMotorFields();
    enableAllMotorSelectFields();
    var isOutputHit = false;
    var isResetEnabled = false;
    var unitsOfMeasurementVal = measurementUnitFlag.toLowerCase();
    var power = $("#inpmotPower").val();
    var flowRate = $("#inpmotFlowRate").val();
    var volEff = $("#inpmotVolEff").val();
    var mechEff = $("#inpmotMechEff").val();
    var torque = $("#inpmotTorque").val();
    var mechEff = $("#inpmotMechEff").val();
    var displacement = $("#inpmotDisplacement").val();
    var pressure = 0;
    var pressureUnit = $("#outselmot").val();
    var powerUnit = $("#selmotPower").val();
    var flowRateUnit = $("#selmotFlowRate").val();
    var volEffUnit = $("#selmotVolEff").val();
    var mechEffUnit = $("#selmotMechEff").val();
    var torqueUnit = $("#selmotTorque").val();
    var mechEffUnit = $("#selmotMechEff").val();
    var displacementUnit = $("#selmotDisplacement").val();
    if (power.length > 0 || flowRate.length > 0 || mechEff.length > 0 || torque.length > 0 || mechEff.length > 0 || displacement.length > 0) {
        isResetEnabled = true;
    }
    var pressureDefault = 0;
    if (mechEff.length > 0) {
        //dont disbale any fields
    }
    if (power.length > 0 || flowRate.length > 0 || volEff.length > 0 && torque.length == 0 && displacement.length == 0) {
        $("#inpmotDisplacement").prop("disabled", true);
        $("#inpmotTorque").prop("disabled", true);

        $("#inpmotDisplacement").css('background-color', '#F1F1F1');
        $("#inpmotTorque").css('background-color', '#F1F1F1');

        $("#selmotDisplacement").prop("disabled", true);
        $("#selmotTorque").prop("disabled", true);

        $("#selmotDisplacement").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selmotTorque").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
    }
    if (torque.length > 0 || displacement.length < 0 && power.length == 0 && flowRate.length == 0) {
        $("#inpmotPower").prop("disabled", true);
        $("#inpmotFlowRate").prop("disabled", true);
        $("#inpmotVolEff").prop("disabled", true);

        $("#inpmotPower").css('background-color', '#F1F1F1');
        $("#inpmotFlowRate").css('background-color', '#F1F1F1');
        $("#inpmotVolEff").css('background-color', '#F1F1F1');

        $("#selmotPower").prop("disabled", true);
        $("#selmotFlowRate").prop("disabled", true);
        $("#selmotVolEff").prop("disabled", true);

        $("#selmotPower").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selmotFlowRate").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selmotVolEff").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
    }
    if (power.length > 0 && flowRate.length > 0 && volEff.length > 0 && mechEff.length > 0) {
        if (unitsOfMeasurementVal == "metric") {
            var powerDefault = (powerUnit != "W") ? convertMotPower(powerUnit, "W", power) : power;
            var flowRateDefault = (flowRateUnit != "m3/s") ? convertMotFlowRate(flowRateUnit, "m3/s", flowRate) : flowRate;
            pressureDefault = (powerDefault) / (flowRateDefault * (volEff / 100) * (mechEff / 100));
            pressure = pressureUnit != "Pa" ? convertMotPressure("Pa", pressureUnit, pressureDefault) : pressureDefault;
            $("#inpmotDisplacement").prop("disabled", true);
            $("#inpmotTorque").prop("disabled", true);

            $("#inpmotDisplacement").css('background-color', '#F1F1F1');
            $("#inpmotTorque").css('background-color', '#F1F1F1');

            $("#selmotDisplacement").prop("disabled", true);
            $("#selmotTorque").prop("disabled", true);

            $("#selmotDisplacement").next().css({
                'background-color': '#F1F1F1',
                'color': '#a0a0a0'
            });
            $("#selmotTorque").next().css({
                'background-color': '#F1F1F1',
                'color': '#a0a0a0'
            });

            /*$("#outmot").val(scientificToDecimal(pressure));*/
            pressure.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(pressure));
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
        } else {
            var powerDefault = (powerUnit != "hp") ? convertMotPower(powerUnit, "hp", power) : power;
            var flowRateDefault = (flowRateUnit != "gpm") ? convertMotFlowRate(flowRateUnit, "gpm", flowRate) : flowRate;
            pressureDefault = (powerDefault * 1714) / (flowRateDefault * (volEff / 100) * (mechEff / 100));
            pressure = pressureUnit != "psi" ? convertMotPressure("psi", pressureUnit, pressureDefault) : pressureDefault;
            /*console.log("powerDefault",powerDefault,"flowRateDefault",flowRateDefault,"pressureDefault",pressureDefault);*/
            $("#inpmotDisplacement").prop("disabled", true);
            $("#inpmotTorque").prop("disabled", true);

            $("#inpmotDisplacement").css('background-color', '#F1F1F1');
            $("#inpmotTorque").css('background-color', '#F1F1F1');

            $("#selmotDisplacement").prop("disabled", true);
            $("#selmotTorque").prop("disabled", true);

            $("#selmotDisplacement").next().css({
                'background-color': '#F1F1F1',
                'color': '#a0a0a0'
            });
            $("#selmotTorque").next().css({
                'background-color': '#F1F1F1',
                'color': '#a0a0a0'
            });

            /*$("#outmot").val(scientificToDecimal(pressure));*/
            pressure.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(pressure));
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
        }
    }
    if (torque.length > 0 && displacement.length > 0 && mechEff.length > 0) {
        if (unitsOfMeasurementVal == "metric") {
            var torqueDefault = (torqueUnit != "Nm") ? convertMotTorque(torqueUnit, "Nm", torque) : torque;
            var displacementDefault = (displacementUnit != "m3/rev") ? convertMotDisplacement(displacementUnit, "m3/rev", displacement) : displacement;
            pressureDefault = (torqueDefault * 2 * Math.PI) / ((mechEff / 100) * displacementDefault);
            pressure = pressureUnit != "Pa" ? convertMotPressure("Pa", pressureUnit, pressureDefault) : pressureDefault;
            $("#inpmotPower").prop("disabled", true);
            $("#inpmotFlowRate").prop("disabled", true);
            $("#inpmotVolEff").prop("disabled", true);

            $("#inpmotPower").css('background-color', '#F1F1F1');
            $("#inpmotFlowRate").css('background-color', '#F1F1F1');
            $("#inpmotVolEff").css('background-color', '#F1F1F1');

            $("#selmotPower").prop("disabled", true);
            $("#selmotFlowRate").prop("disabled", true);
            $("#selmotVolEff").prop("disabled", true);

            $("#selmotPower").next().css({
                'background-color': '#F1F1F1',
                'color': '#a0a0a0'
            });
            $("#selmotFlowRate").next().css({
                'background-color': '#F1F1F1',
                'color': '#a0a0a0'
            });
            $("#selmotVolEff").next().css({
                'background-color': '#F1F1F1',
                'color': '#a0a0a0'
            });

            /*$("#outmot").val(scientificToDecimal(pressure));*/
            pressure.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(pressure));
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
        } else {
            var torqueDefault = (torqueUnit != "lbf-in") ? convertMotTorque(torqueUnit, "lbf-in", torque) : torque;
            var displacementDefault = (displacementUnit != "in3/rev") ? convertMotDisplacement(displacementUnit, "in3/rev", displacement) : displacement;
            pressureDefault = (torqueDefault * 2 * Math.PI) / ((mechEff / 100) * displacementDefault);
            pressure = pressureUnit != "psi" ? convertMotPressure("psi", pressureUnit, pressureDefault) : pressureDefault;
            $("#inpmotPower").prop("disabled", true);
            $("#inpmotFlowRate").prop("disabled", true);
            $("#inpmotVolEff").prop("disabled", true);

            $("#inpmotPower").css('background-color', '#F1F1F1');
            $("#inpmotFlowRate").css('background-color', '#F1F1F1');
            $("#inpmotVolEff").css('background-color', '#F1F1F1');

            $("#selmotPower").prop("disabled", true);
            $("#selmotFlowRate").prop("disabled", true);
            $("#selmotVolEff").prop("disabled", true);

            $("#selmotPower").next().prop("disabled", true);
            $("#selmotFlowRate").next().prop("disabled", true);
            $("#selmotVolEff").next().prop("disabled", true);
            pressure.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(pressure));
            /*$("#outmot").val(scientificToDecimal(pressure));*/
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
        }
    }
    if (isOutputHit == false) {
        //disableReset();
        disableEmail();
        disableCopy();
        $("#outmot").prop("disabled", true);
        $("#outmot").val('');
    }
    if (isResetEnabled == true) {
        enableReset();
    } else {
        disableReset();
    }
}

function calculateDisplacementMotor(elementId) {
    enableAllMotorFields();
    enableAllMotorSelectFields();
    var isOutputHit = false;
    var isResetEnabled = false;
    var unitsOfMeasurementVal = measurementUnitFlag.toLowerCase();
    var torque = $("#inpmotTorque").val();
    var mechEff = $("#inpmotMechEff").val();
    var pressure = $("#inpmotPressure").val();
    var flowRate = $("#inpmotFlowRate").val();
    var volEff = $("#inpmotVolEff").val();
    var speed = $("#inpmotSpeed").val();
    var displacement = 0;

    var torqueUnit = $("#selmotTorque").val();
    var pressureUnit = $("#selmotPressure").val();
    var flowRateUnit = $("#selmotFlowRate").val();
    var speedUnit = $("#selmotSpeed").val();
    var displacementUnit = $("#outselmot").val();

    var displacementDefault = 0;

    if (torque.length > 0 || mechEff.length > 0 || pressure.length > 0 || flowRate.length > 0 || volEff.length > 0 || speed.length > 0) {
        isResetEnabled = true;
    }


    if (torque.length > 0 || mechEff.length > 0 || pressure.length > 0 && flowRate.length == 0 && volEff.length == 0 && speed.length == 0) {
        //disable flowrate , vol eff , speed
        $("#inpmotFlowRate").prop("disabled", true);
        $("#inpmotVolEff").prop("disabled", true);
        $("#inpmotSpeed").prop("disabled", true);

        $("#inpmotFlowRate").css('background-color', '#F1F1F1');
        $("#inpmotVolEff").css('background-color', '#F1F1F1');
        $("#inpmotSpeed").css('background-color', '#F1F1F1');

        $("#selmotFlowRate").prop("disabled", true);
        $("#selmotVolEff").prop("disabled", true);
        $("#selmotSpeed").prop("disabled", true);

        $("#selmotFlowRate").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selmotVolEff").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selmotSpeed").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
    }
    if (flowRate.length > 0 || volEff.length > 0 || speed.length > 0 && torque.length == 0 && mechEff.length == 0 && pressure.length == 0) {
        //disable torque , mechEff , pressure
        $("#inpmotTorque").prop("disabled", true);
        $("#inpmotMechEff").prop("disabled", true);
        $("#inpmotPressure").prop("disabled", true);

        $("#inpmotTorque").css('background-color', '#F1F1F1');
        $("#inpmotMechEff").css('background-color', '#F1F1F1');
        $("#inpmotPressure").css('background-color', '#F1F1F1');

        $("#selmotTorque").prop("disabled", true);
        $("#selmotMechEff").prop("disabled", true);
        $("#selmotPressure").prop("disabled", true);

        $("#selmotTorque").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selmotMechEff").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selmotPressure").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
    }
    if (torque.length > 0 && mechEff.length > 0 && pressure.length > 0) {
        if (unitsOfMeasurementVal == "metric") {

            var torqueDefault = (torqueUnit != "Nm") ? convertMotTorque(torqueUnit, "Nm", torque) : torque;
            var pressureDefault = (pressureUnit != "Pa") ? convertMotPressure(pressureUnit, "Pa", pressure) : pressure;
            displacementDefault = (torqueDefault * 2 * Math.PI) / ((mechEff / 100) * pressureDefault);
            displacement = displacementUnit != "m3/rev" ? convertMotDisplacement("m3/rev", displacementUnit, displacementDefault) : displacementDefault;
            /*$("#outmot").val(scientificToDecimal(displacement));*/
            displacement.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(displacement));
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
        } else {

            var torqueDefault = (torqueUnit != "lbf-in") ? convertMotTorque(torqueUnit, "lbf-in", torque) : torque;
            var pressureDefault = (pressureUnit != "psi") ? convertMotPressure(pressureUnit, "psi", pressure) : pressure;
            displacementDefault = (torqueDefault * 2 * Math.PI) / ((mechEff / 100) * pressureDefault);
            displacement = displacementUnit != "in3/rev" ? convertMotDisplacement("in3/rev", displacementUnit, displacementDefault) : displacementDefault;
            /*$("#outmot").val(scientificToDecimal(displacement));*/
            displacement.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(displacement));
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
        }
    }
    if (flowRate.length > 0 && volEff.length > 0 && speed.length > 0) {
        if (unitsOfMeasurementVal == "metric") {

            var flowRateDefault = (flowRateUnit != "m3/s") ? convertMotFlowRate(flowRateUnit, "m3/s", flowRate) : flowRate;
            var speedDefault = (speedUnit != "rps") ? convertMotSpeed(speedUnit, "rps", speed) : speed;
            displacementDefault = (flowRateDefault * (volEff / 100)) / speedDefault;
            displacement = displacementUnit != "m3/rev" ? convertMotDisplacement("m3/rev", displacementUnit, displacementDefault) : displacementDefault;
            /*$("#outmot").val(scientificToDecimal(displacement)); */
            displacement.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(displacement));
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
        } else {

            var flowRateDefault = (flowRateUnit != "gpm") ? convertMotFlowRate(flowRateUnit, "gpm", flowRate) : flowRate;
            var speedDefault = (speedUnit != "rpm") ? convertMotSpeed(speedUnit, "rpm", speed) : speed;
            displacementDefault = (flowRateDefault * (volEff / 100) * (231)) / speedDefault;
            displacement = displacementUnit != "in3/rev" ? convertMotDisplacement("in3/rev", displacementUnit, displacementDefault) : displacementDefault;
            /*console.log("flowRateDefault",flowRateDefault,"speedDefault",speedDefault,"displacementDefault",displacementDefault);*/
            displacement.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(displacement));
            /*$("#outmot").val(scientificToDecimal(displacement)); */
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
        }
    }
    if (isOutputHit == false) {
        //disableReset();
        disableEmail();
        disableCopy();
        $("#outmot").prop("disabled", true);
        $("#outmot").val('');
    }
    if (isResetEnabled == true) {
        enableReset();
    } else {
        disableReset();
    }
}

function calculateSpeedMotor(elementId) {
    enableAllMotorFields();
    enableAllMotorSelectFields();
    var isOutputHit = false;
    var isResetEnabled = false;
    var unitsOfMeasurementVal = measurementUnitFlag.toLowerCase();
    var flowRate = $("#inpmotFlowRate").val();
    var volEff = $("#inpmotVolEff").val();
    var displacement = $("#inpmotDisplacement").val();
    var power = $("#inpmotPower").val();
    var torque = $("#inpmotTorque").val();
    var speed = 0;

    var flowRateUnit = $("#selmotFlowRate").val();
    /*var volEffUnit = */
    var displacementUnit = $("#selmotDisplacement").val();
    var powerUnit = $("#selmotPower").val();
    var torqueUnit = $("#selmotTorque").val();
    var speedUnit = $("#outselmot").val();
    var speedDefault = 0;

    if (flowRate.length > 0 || volEff.length > 0 || displacement.length > 0 || power.length > 0 || torque.length > 0) {
        isResetEnabled = true;
    }

    //here only 2 conditions possible
    if (flowRate.length > 0 || volEff.length > 0 || displacement.length > 0 && power.length == 0 && torque.length == 0) {
        //diable power and torque
        $("#inpmotPower").prop("disabled", true);
        $("#inpmotTorque").prop("disabled", true);

        $("#inpmotPower").css('background-color', '#F1F1F1');
        $("#inpmotTorque").css('background-color', '#F1F1F1');

        $("#selmotPower").prop("disabled", true);
        $("#selmotTorque").prop("disabled", true);

        $("#selmotPower").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selmotTorque").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
    }
    if (power.length > 0 || torque.length > 0 && flowRate.length == 0 && volEff.length == 0 && displacement.length == 0) {
        //disable flowrate,voleff,displacemetn
        $("#inpmotFlowRate").prop("disabled", true);
        $("#inpmotVolEff").prop("disabled", true);
        $("#inpmotDisplacement").prop("disabled", true);

        $("#inpmotFlowRate").css('background-color', '#F1F1F1');
        $("#inpmotVolEff").css('background-color', '#F1F1F1');
        $("#inpmotDisplacement").css('background-color', '#F1F1F1');

        $("#selmotFlowRate").prop("disabled", true);
        $("#selmotVolEff").prop("disabled", true);
        $("#selmotDisplacement").prop("disabled", true);

        $("#selmotFlowRate").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selmotVolEff").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selmotDisplacement").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
    }
    if (flowRate.length > 0 && volEff.length > 0 && displacement.length > 0) {
        if (unitsOfMeasurementVal == "metric") {
            //fr - m3/s ,disp - m3/rev,speed - rad/s
            var flowRateDefault = (flowRateUnit != "m3/s") ? convertMotFlowRate(flowRateUnit, "m3/s", flowRate) : flowRate;
            var displacementDefault = (displacementUnit != "m3/rev") ? convertMotDisplacement(displacementUnit, "m3/rev", displacement) : displacement;
            speedDefault = (flowRateDefault * (volEff / 100)) / displacementDefault;
            speed = (speedUnit != "rps") ? convertMotSpeed("rps", speedUnit, speedDefault) : speedDefault;
            speed.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(speed));
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
        } else {
            //fr - gpm ,disp - in3/rev, speed - rpm
            var flowRateDefault = (flowRateUnit != "gpm") ? convertMotFlowRate(flowRateUnit, "gpm", flowRate) : flowRate;
            var displacementDefault = (displacementUnit != "in3/rev") ? convertMotDisplacement(displacementUnit, "in3/rev", displacement) : displacement;
            speedDefault = (flowRateDefault * (volEff / 100) * (231)) / displacementDefault;
            speed = (speedUnit != "rpm") ? convertMotSpeed("rpm", speedUnit, speedDefault) : speedDefault;
            speed.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(speed));
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
        }
    }
    if (power.length > 0 && torque.length > 0) {
        if (unitsOfMeasurementVal == "metric") {
            //power - W , torque - Nm , speed - rad/s
            var powerDefault = (powerUnit != "W") ? convertMotPower(powerUnit, "W", power) : power;
            var torqueDefault = (torqueUnit != "Nm") ? convertMotTorque(torqueUnit, "Nm", torque) : torque;
            speedDefault = powerDefault / torqueDefault;
            speed = (speedUnit != "rad/s") ? convertMotSpeed("rad/s", speedUnit, speedDefault) : speedDefault;
            speed.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(speed));
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
        } else {
            //power - hp , tor - lbf-in , speed - rpm
            var powerDefault = (powerUnit != "hp") ? convertMotPower(powerUnit, "hp", power) : power;
            var torqueDefault = (torqueUnit != "lbf-in") ? convertMotTorque(torqueUnit, "lbf-in", torque) : torque;
            speedDefault = (powerDefault * 63025) / torqueDefault;
            speed = (speedUnit != "rpm") ? convertMotSpeed("rpm", speedUnit, speedDefault) : speedDefault;
            speed.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(speed));
            //$("#outmot").val(scientificToDecimal(speed));
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
        }
    }
    if (isOutputHit == false) {
        //disableReset();
        disableEmail();
        disableCopy();
        $("#outmot").prop("disabled", true);
        $("#outmot").val('');
    }
    if (isResetEnabled == true) {
        enableReset();
    } else {
        disableReset();
    }
}

function calculateTorqueMotor(elementId) {
    enableAllMotorFields();
    enableAllMotorSelectFields();
    var isOutputHit = false;
    var isResetEnabled = false;
    var unitsOfMeasurementVal = measurementUnitFlag.toLowerCase();
    var mechEff = $("#inpmotMechEff").val();
    var displacement = $("#inpmotDisplacement").val();
    var pressure = $("#inpmotPressure").val();
    var power = $("#inpmotPower").val();
    var speed = $("#inpmotSpeed").val();

    var torque = 0;

    /*var mechEffUnit = */
    var displacementUnit = $("#selmotDisplacement").val();
    var pressureUnit = $("#selmotPressure").val();
    var powerUnit = $("#selmotPower").val();
    var speedUnit = $("#selmotSpeed").val();
    var torqueUnit = $("#outselmot").val();

    var torqueDefault = 0;

    if (mechEff.length > 0 || displacement.length > 0 || pressure.length > 0 || power.length > 0 || speed.length > 0) {
        isResetEnabled = true;
    }

    //here only 2 conditions possible
    if (mechEff.length > 0 || displacement.length > 0 || pressure.length > 0 && power.length == 0 && speed.length == 0) {
        //disable power and speed
        $("#inpmotPower").prop("disabled", true);
        $("#inpmotSpeed").prop("disabled", true);

        $("#inpmotPower").css('background-color', '#F1F1F1');
        $("#inpmotSpeed").css('background-color', '#F1F1F1');

        $("#selmotPower").prop("disabled", true);
        $("#selmotSpeed").prop("disabled", true);

        $("#selmotPower").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selmotSpeed").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
    }
    if (power.length > 0 || speed.length > 0 && mechEff.length == 0 && displacement.length == 0 && pressure.length == 0) {
        //disable mechEff , displacement , pressure
        $("#inpmotMechEff").prop("disabled", true);
        $("#inpmotDisplacement").prop("disabled", true);
        $("#inpmotPressure").prop("disabled", true);

        $("#inpmotMechEff").css('background-color', '#F1F1F1');
        $("#inpmotDisplacement").css('background-color', '#F1F1F1');
        $("#inpmotPressure").css('background-color', '#F1F1F1');

        $("#selmotMechEff").prop("disabled", true);
        $("#selmotDisplacement").prop("disabled", true);
        $("#selmotPressure").prop("disabled", true);

        $("#selmotMechEff").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selmotDisplacement").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selmotPressure").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
    }
    if (mechEff.length > 0 && displacement.length > 0 && pressure.length > 0) {
        if (unitsOfMeasurementVal == "metric") {
            //disp - m3/rev , press - Pa , torque - Nm 
            var displacementDefault = (displacementUnit != "m3/rev") ? convertMotDisplacement(displacementUnit, "m3/rev", displacement) : displacement;
            var pressureDefault = (pressureUnit != "Pa") ? convertMotPressure(pressureUnit, "Pa", pressure) : pressure;
            torqueDefault = ((mechEff / 100) * displacementDefault * pressureDefault) / (2 * Math.PI);
            torque = (torqueUnit != "Nm") ? convertMotTorque("Nm", torqueUnit, torqueDefault) : torqueDefault;
            torque.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(torque));
            /* $("#outmot").val(scientificToDecimal(torque));*/
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
        } else {
            //disp - in3/rev , press - psi , torque - lbf-in 
            var displacementDefault = (displacementUnit != "in3/rev") ? convertMotDisplacement(displacementUnit, "in3/rev", displacement) : displacement;
            var pressureDefault = (pressureUnit != "psi") ? convertMotPressure(pressureUnit, "psi", pressure) : pressure;
            torqueDefault = ((mechEff / 100) * displacementDefault * pressureDefault) / (2 * Math.PI);
            torque = (torqueUnit != "lbf-in") ? convertMotTorque("lbf-in", torqueUnit, torqueDefault) : torqueDefault;
            /*$("#outmot").val(scientificToDecimal(torque));*/
            torque.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(torque));
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
        }
    }
    if (power.length > 0 && speed.length > 0) {
        if (unitsOfMeasurementVal == "metric") {
            //pow - W , sp - rad/s , tor - Nm
            var powerDefault = (powerUnit != "W") ? convertMotPower(powerUnit, "W", power) : power;
            var speedDefault = (speedUnit != "rad/s") ? convertMotSpeed(speedUnit, "rad/s", speed) : speed;
            torqueDefault = powerDefault / speedDefault;
            torque = (torqueUnit != "Nm") ? convertMotTorque("Nm", torqueUnit, torqueDefault) : torqueDefault;
            /*$("#outmot").val(scientificToDecimal(torque));*/
            torque.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(torque));
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
        } else {
            //pow - hp , sp - rpm , tor - lbf-in
            var powerDefault = (powerUnit != "hp") ? convertMotPower(powerUnit, "hp", power) : power;
            var speedDefault = (speedUnit != "rpm") ? convertMotSpeed(speedUnit, "rpm", speed) : speed;
            torqueDefault = (powerDefault * 63025) / speedDefault;
            torque = (torqueUnit != "lbf-in") ? convertMotTorque("lbf-in", torqueUnit, torqueDefault) : torqueDefault;
            /*$("#outmot").val(scientificToDecimal(torque));*/
            torque.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(torque));
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
        }
    }
    if (isOutputHit == false) {
        //disableReset();
        disableEmail();
        disableCopy();
        $("#outmot").prop("disabled", true);
        $("#outmot").val('');
    }
    if (isResetEnabled == true) {
        enableReset();
    } else {
        disableReset();
    }
}

function calculatePowerMotor(elementId) {
    enableAllMotorFields();
    enableAllMotorSelectFields();
    var isOutputHit = false;
    var isResetEnabled = false;
    var unitsOfMeasurementVal = measurementUnitFlag.toLowerCase();
    var torque = $("#inpmotTorque").val();
    var speed = $("#inpmotSpeed").val();
    var flowRate = $("#inpmotFlowRate").val();
    var pressure = $("#inpmotPressure").val();
    var volEff = $("#inpmotVolEff").val();
    var mechEff = $("#inpmotMechEff").val();
    var power = 0;

    var torqueUnit = $("#selmotTorque").val();
    var speedUnit = $("#selmotSpeed").val();
    var flowRateUnit = $("#selmotFlowRate").val();
    var pressureUnit = $("#selmotPressure").val();
    /*var volEffUnit = 
    var mechEffUnit = */
    var powerUnit = $("#outselmot").val();

    var powerDefault = 0;

    if (torque.length > 0 || speed.length > 0 || flowRate.length > 0 || pressure.length > 0 || volEff.length > 0 || mechEff.length > 0) {
        isResetEnabled = true;
    }

    if (torque.length > 0 || speed.length > 0 && flowRate.length == 0 && pressure.length == 0 && volEff.length == 0 && mechEff.length == 0) {
        //disable flowrate,pressutre,voleff,mecheff
        $("#inpmotFlowRate").prop("disabled", true);
        $("#inpmotPressure").prop("disabled", true);
        $("#inpmotVolEff").prop("disabled", true);
        $("#inpmotMechEff").prop("disabled", true);

        $("#inpmotFlowRate").css('background-color', '#F1F1F1');
        $("#inpmotPressure").css('background-color', '#F1F1F1');
        $("#inpmotVolEff").css('background-color', '#F1F1F1');
        $("#inpmotMechEff").css('background-color', '#F1F1F1');

        $("#selmotFlowRate").prop("disabled", true);
        $("#selmotPressure").prop("disabled", true);
        $("#selmotVolEff").prop("disabled", true);
        $("#selmotMechEff").prop("disabled", true);

        $("#selmotFlowRate").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selmotPressure").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selmotVolEff").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selmotMechEff").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
    }
    if (flowRate.length > 0 || pressure.length > 0 || volEff.length > 0 || mechEff.length > 0 && torque.length == 0 && speed.length == 0) {
        //disable torque,speed
        $("#inpmotTorque").prop("disabled", true);
        $("#inpmotSpeed").prop("disabled", true);

        $("#inpmotTorque").css('background-color', '#F1F1F1');
        $("#inpmotSpeed").css('background-color', '#F1F1F1');

        $("#selmotTorque").prop("disabled", true);
        $("#selmotSpeed").prop("disabled", true);

        $("#selmotTorque").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
        $("#selmotSpeed").next().css({
            'background-color': '#F1F1F1',
            'color': '#a0a0a0'
        });
    }
    if (torque.length > 0 && speed.length > 0) {
        if (unitsOfMeasurementVal == "metric") {
            //t - Nm , s - rad/s , pow - W
            var torqueDefault = (torqueUnit != "Nm") ? convertMotTorque(torqueUnit, "Nm", torque) : torque;
            var speedDefault = (speedUnit != "rad/s") ? convertMotSpeed(speedUnit, "rad/s", speed) : speed;
            powerDefault = torqueDefault * speedDefault;
            power = (powerUnit != "W") ? convertMotPower("W", powerUnit, powerDefault) : powerDefault;
            power.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(power));
            /*$("#outmot").val(scientificToDecimal(power));*/
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
        } else {
            //t - lbf-in , s - rpm , pow - hp
            var torqueDefault = (torqueUnit != "lbf-in") ? convertMotTorque(torqueUnit, "lbf-in", torque) : torque;
            var speedDefault = (speedUnit != "rpm") ? convertMotSpeed(speedUnit, "rpm", speed) : speed;
            powerDefault = (torqueDefault * speedDefault) / 63025;
            power = (powerUnit != "hp") ? convertMotPower("hp", powerUnit, powerDefault) : powerDefault;
            power.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(power));
            /*$("#outmot").val(scientificToDecimal(power));*/
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
        }
    }
    if (flowRate.length > 0 && pressure.length > 0 && volEff.length > 0 && mechEff.length > 0) {
        if (unitsOfMeasurementVal == "metric") {
            //fr -  m3/s , pressure - Pa , power - W
            var flowRateDefault = (flowRateUnit != "m3/s") ? convertMotFlowRate(flowRateUnit, "m3/s", flowRate) : flowRate;
            var pressureDefault = (pressureUnit != "Pa") ? convertMotPressure(pressureUnit, "Pa", pressure) : pressure;
            powerDefault = flowRateDefault * pressureDefault * (volEff / 100) * (mechEff / 100);
            /*console.log("powerDefault , flowRateDefault",flowRateDefault,pressureDefault,volEff,mechEff);*/
            power = (powerUnit != "W") ? convertMotPower("W", powerUnit, powerDefault) : powerDefault;
            power.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(power));
            /*$("#outmot").val(scientificToDecimal(power)); */
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
        } else {
            //fr -  gpm , pressure - psi , power - hp
            var flowRateDefault = (flowRateUnit != "gpm") ? convertMotFlowRate(flowRateUnit, "gpm", flowRate) : flowRate;
            var pressureDefault = (pressureUnit != "psi") ? convertMotPressure(pressureUnit, "psi", pressure) : pressure;
            powerDefault = (flowRateDefault * pressureDefault * (volEff / 100) * (mechEff / 100)) / 1714;
            power = (powerUnit != "hp") ? convertMotPower("hp", powerUnit, powerDefault) : powerDefault;
            power.toString() == "Infinity" ? $("#outmot").val('') : $("#outmot").val(scientificToDecimal(power));
            /*$("#outmot").val(scientificToDecimal(power)); */
            //enableReset();
            enableEmail();
            enableCopy();
            isOutputHit = true;
        }
    }
    if (isOutputHit == false) {
        //disableReset();
        disableEmail();
        disableCopy();
        $("#outmot").prop("disabled", true);
        $("#outmot").val('');
    }
    if (isResetEnabled == true) {
        enableReset();
    } else {
        disableReset();
    }
}

function convertMotDisplacement(currentUnit, newUnit, valueToReturn, id) {
    //m3/rev , cm3/rev
    if (currentUnit == "m3/rev") {
        if (newUnit == "cm3/rev") {
            if (id == "selmotDisplacement") {
                $("#inpmotDisplacement").val(scientificToDecimal(valueToReturn * 1000000));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * 1000000));
            }
            return scientificToDecimal(valueToReturn * 1000000);
        }
    } else if (currentUnit == "cm3/rev") {
        if (newUnit == "m3/rev") {
            if (id == "selmotDisplacement") {
                $("#inpmotDisplacement").val(scientificToDecimal(valueToReturn / 1000000));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn / 1000000));
            }
            return scientificToDecimal(valueToReturn / 1000000);
        }
    }
    //in3/rev,ft3/rev
    else if (currentUnit == "in3/rev") {
        if (newUnit == "ft3/rev") {
            if (id == "selmotDisplacement") {
                $("#inpmotDisplacement").val(scientificToDecimal(valueToReturn * 0.000578704));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * 0.000578704));
            }
            return scientificToDecimal(valueToReturn * 0.000578704);
        }
    } else if (currentUnit == "ft3/rev") {
        if (newUnit == "in3/rev") {
            if (id == "selmotDisplacement") {
                $("#inpmotDisplacement").val(scientificToDecimal(valueToReturn / 0.000578704));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn / 0.000578704));
            }
            return scientificToDecimal(valueToReturn / 0.000578704);
        }
    }
}

function convertMotSpeed(currentUnit, newUnit, valueToReturn, id) {
    //rpm , rps , rad/s
    if (currentUnit == "rpm") {
        if (newUnit == "rps") {
            if (id == "selmotSpeed") {
                $("#inpmotSpeed").val(scientificToDecimal(valueToReturn / 60));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn / 60));
            }
            return scientificToDecimal(valueToReturn / 60);
        } else {
            //rad/s
            if (id == "selmotSpeed") {
                $("#inpmotSpeed").val(scientificToDecimal(valueToReturn * (0.104719755)));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * (0.104719755)));
            }
            return scientificToDecimal(valueToReturn * (0.104719755));
        }
    } else if (currentUnit == "rps") {
        if (newUnit == "rpm") {
            if (id == "selmotSpeed") {
                $("#inpmotSpeed").val(scientificToDecimal(valueToReturn * 60));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * 60));
            }
            return scientificToDecimal(valueToReturn * 60);
        } else {
            //rad/s
            if (id == "selmotSpeed") {
                $("#inpmotSpeed").val(scientificToDecimal(valueToReturn * 6.2831853));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * 6.2831853));
            }
            return scientificToDecimal(valueToReturn * 6.2831853);
        }
    } else if (currentUnit == "rad/s") {
        if (newUnit == "rpm") {
            if (id == "selmotSpeed") {
                $("#inpmotSpeed").val(scientificToDecimal(valueToReturn * (60 / 6.2831853)));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * (60 / 6.2831853)));
            }
            return scientificToDecimal(valueToReturn * (60 / 6.2831853));
        } else {
            //rps
            if (id == "selmotSpeed") {
                $("#inpmotSpeed").val(scientificToDecimal(valueToReturn / 6.2831853));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn / 6.2831853));
            }
            return scientificToDecimal(valueToReturn / 6.2831853);
        }
    }
}

function convertMotVolEff(currentUnit, newUnit, valueToReturn, id) {
    //not needed
}

function convertMotPower(currentUnit, newUnit, valueToReturn, id) {
    //W,kW,hp
    if (currentUnit == "W") {
        if (newUnit == "kW") {
            if (id == "selmotPower") {
                $("#inpmotPower").val(scientificToDecimal(valueToReturn * 0.001));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * 0.001));
            }
            return scientificToDecimal(valueToReturn * 0.001);
        } else {
            //hp
            if (id == "selmotPower") {
                $("#inpmotPower").val(scientificToDecimal(valueToReturn * 0.00134102));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * 0.00134102));
            }
            return scientificToDecimal(valueToReturn * 0.00134102);
        }
    } else if (currentUnit == "kW") {
        if (newUnit == "W") {
            if (id == "selmotPower") {
                $("#inpmotPower").val(scientificToDecimal(valueToReturn / 0.001));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn / 0.001));
            }
            return scientificToDecimal(valueToReturn / 0.001);
        } else {
            //hp
            if (id == "selmotPower") {
                $("#inpmotPower").val(scientificToDecimal(valueToReturn * (0.00134102 / 0.001)));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * (0.00134102 / 0.001)));
            }
            return scientificToDecimal(valueToReturn * (0.00134102 / 0.001));
        }
    } else if (currentUnit == "hp") {
        if (newUnit == "W") {
            if (id == "selmotPower") {
                $("#inpmotPower").val(scientificToDecimal(valueToReturn / 0.00134102));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn / 0.00134102));
            }
            return scientificToDecimal(valueToReturn / 0.00134102);
        } else {
            //kW
            if (id == "selmotPower") {
                $("#inpmotPower").val(scientificToDecimal(valueToReturn * (0.001 / 0.00134102)));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * (0.001 / 0.00134102)));
            }
            return scientificToDecimal(valueToReturn * (0.001 / 0.00134102));
        }
    }
}

function convertMotPressure(currentUnit, newUnit, valueToReturn, id) {
    //Pa,kPa,bar
    if (currentUnit == "Pa") {
        if (newUnit == "kPa") {
            if (id == "selmotPressure") {
                $("#inpmotPressure").val(scientificToDecimal(valueToReturn / 1000));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn / 1000));
            }
            return scientificToDecimal(valueToReturn / 1000);
        } else {
            //bar
            if (id == "selmotPressure") {
                $("#inpmotPressure").val(scientificToDecimal(valueToReturn / 100000));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn / 100000));
            }
            return scientificToDecimal(valueToReturn / 100000);
        }
    } else if (currentUnit == "kPa") {
        if (newUnit == "Pa") {
            if (id == "selmotPressure") {
                $("#inpmotPressure").val(scientificToDecimal(valueToReturn * 1000));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * 1000));
            }
            return scientificToDecimal(valueToReturn * 1000);
        } else {
            //bar
            if (id == "selmotPressure") {
                $("#inpmotPressure").val(scientificToDecimal(valueToReturn * 0.01));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * 0.01));
            }
            return scientificToDecimal(valueToReturn * 0.01);
        }
    } else if (currentUnit == "bar") {
        if (newUnit == "Pa") {
            if (id == "selmotPressure") {
                $("#inpmotPressure").val(scientificToDecimal(valueToReturn * 100000));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * 100000));
            }
            return scientificToDecimal(valueToReturn * 100000);
        } else {
            //kPa
            if (id == "selmotPressure") {
                $("#inpmotPressure").val(scientificToDecimal(valueToReturn / 0.01));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn / 0.01));
            }
            return scientificToDecimal(valueToReturn / 0.01);
        }
    }
    //psi,lb/ft2,atm
    else if (currentUnit == "psi") {
        if (newUnit == "lb/ft2") {
            if (id == "selmotPressure") {
                $("#inpmotPressure").val(scientificToDecimal(valueToReturn * 144));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * 144));
            }
            return scientificToDecimal(valueToReturn * 144);
        } else {
            //atm
            if (id == "selmotPressure") {
                $("#inpmotPressure").val(scientificToDecimal(valueToReturn * 0.0680459));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * 0.0680459));
            }
            return scientificToDecimal(valueToReturn * 0.0680459);
        }
    } else if (currentUnit == "lb/ft2") {
        if (newUnit == "psi") {
            if (id == "selmotPressure") {
                $("#inpmotPressure").val(scientificToDecimal(valueToReturn / 144));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn / 144));
            }
            return scientificToDecimal(valueToReturn / 144);
        } else {
            //atm
            if (id == "selmotPressure") {
                $("#inpmotPressure").val(scientificToDecimal(valueToReturn * (0.0680459 / 144)));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * (0.0680459 / 144)));
            }
            return scientificToDecimal(valueToReturn * (0.0680459 / 144));
        }
    } else if (currentUnit == "atm") {
        if (newUnit == "psi") {
            if (id == "selmotPressure") {
                $("#inpmotPressure").val(scientificToDecimal(valueToReturn / 0.0680459));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn / 0.0680459));
            }
            return scientificToDecimal(valueToReturn / 0.0680459);
        } else {
            //lb/ft2
            if (id == "selmotPressure") {
                $("#inpmotPressure").val(scientificToDecimal(valueToReturn / (0.0680459 / 144)));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn / (0.0680459 / 144)));
            }
            return scientificToDecimal(valueToReturn / (0.0680459 / 144));
        }
    }

}

function convertMotMechEff(currentUnit, newUnit, valueToReturn, id) {

}

function convertMotTorque(currentUnit, newUnit, valueToReturn, id) {
    //Nm,kNm
    if (currentUnit == "Nm") {
        if (newUnit == "kNm") {
            if (id == "selmotTorque") {
                $("#inpmotTorque").val(scientificToDecimal(valueToReturn * 0.001));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * 0.001));
            }
            return scientificToDecimal(valueToReturn * 0.001);
        }
    } else if (currentUnit == "kNm") {
        if (newUnit == "Nm") {
            if (id == "selmotTorque") {
                $("#inpmotTorque").val(scientificToDecimal(valueToReturn / 0.001));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn / 0.001));
            }
            return scientificToDecimal(valueToReturn / 0.001);
        }
    }
    //lbf-in,lbf-ft
    else if (currentUnit == "lbf-in") {
        if (newUnit == "lbf-ft") {
            if (id == "selmotTorque") {
                $("#inpmotTorque").val(scientificToDecimal(valueToReturn * 0.0833333));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * 0.0833333));
            }
            return scientificToDecimal(valueToReturn * 0.0833333);
        }
    } else if (currentUnit == "lbf-ft") {
        if (newUnit == "lbf-in") {
            if (id == "selmotTorque") {
                $("#inpmotTorque").val(scientificToDecimal(valueToReturn / 0.0833333));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn / 0.0833333));
            }
            return scientificToDecimal(valueToReturn / 0.0833333);
        }
    }
}

//
function convertMotFlowRate(currentUnit, newUnit, valueToReturn, id) {
    //m3/s,m3/min,lpn 
    if (currentUnit == "m3/s") {
        if (newUnit == "m3/min") {
            if (id == "selmotFlowRate") {
                $("#inpmotFlowRate").val(scientificToDecimal(valueToReturn * 60));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * 60));
            }
            return scientificToDecimal(valueToReturn * 60);
        } else {
            //lpm
            if (id == "selmotFlowRate") {
                $("#inpmotFlowRate").val(scientificToDecimal(valueToReturn * 60000));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * 60000));
            }
            return scientificToDecimal(valueToReturn * 60000);
        }
    } else if (currentUnit == "m3/min") {
        if (newUnit == "m3/s") {
            if (id == "selmotFlowRate") {
                $("#inpmotFlowRate").val(scientificToDecimal(valueToReturn / 60));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn / 60));
            }
            return scientificToDecimal(valueToReturn / 60);
        } else {
            //lpm
            if (id == "selmotFlowRate") {
                $("#inpmotFlowRate").val(scientificToDecimal(valueToReturn * 1000));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * 1000));
            }
            return scientificToDecimal(valueToReturn * 1000);
        }
    } else if (currentUnit == "lpm") {
        if (newUnit == "m3/s") {
            if (id == "selmotFlowRate") {
                $("#inpmotFlowRate").val(scientificToDecimal(valueToReturn / 60000));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn / 60000));
            }
            return scientificToDecimal(valueToReturn / 60000);
        } else {
            //m3/min
            if (id == "selmotFlowRate") {
                $("#inpmotFlowRate").val(scientificToDecimal(valueToReturn / 1000));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn / 1000));
            }
            return scientificToDecimal(valueToReturn / 1000);
        }
    }
    //gpm,cfm,cfs
    else if (currentUnit == "gpm") {
        if (newUnit == "cfm") {
            if (id == "selmotFlowRate") {
                $("#inpmotFlowRate").val(scientificToDecimal(valueToReturn * 0.1336806));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * 0.1336806));
            }
            return scientificToDecimal(valueToReturn * 0.1336806);
        } else {
            //cfs
            if (id == "selmotFlowRate") {
                $("#inpmotFlowRate").val(scientificToDecimal(valueToReturn * 3.85));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * 3.85));
            }
            return scientificToDecimal(valueToReturn * 3.85);
        }
    } else if (currentUnit == "cfm") {
        if (newUnit == "gpm") {
            if (id == "selmotFlowRate") {
                $("#inpmotFlowRate").val(scientificToDecimal(valueToReturn / 0.1336806));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn / 0.1336806));
            }
            return scientificToDecimal(valueToReturn / 0.1336806);
        } else {
            //cfs
            if (id == "selmotFlowRate") {
                $("#inpmotFlowRate").val(scientificToDecimal(valueToReturn * (3.85 / 0.1336806)));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn * (3.85 / 0.1336806)));
            }
            return scientificToDecimal(valueToReturn * (3.85 / 0.1336806));
        }
    } else if (currentUnit == "cfs") {
        if (newUnit == "gpm") {
            if (id == "selmotFlowRate") {
                $("#inpmotFlowRate").val(scientificToDecimal(valueToReturn / 3.85));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn / 3.85));
            }
            return scientificToDecimal(valueToReturn / 3.85);
        } else {
            //cfm
            if (id == "selmotFlowRate") {
                $("#inpmotFlowRate").val(scientificToDecimal(valueToReturn / (3.85 / 0.1336806)));
            } else if (id == "outselmot") {
                $("#outmot").val(scientificToDecimal(valueToReturn / (3.85 / 0.1336806)));
            }
            return scientificToDecimal(valueToReturn / (3.85 / 0.1336806));
        }
    }
}

//type will be motor,pump,pressureDrop,piping
//subtype can be found using ddValue = $("#motorHeaderDD").val()
function copyCalc(type) {
    var copyFlag = false;
    if (type == "motor") {
        if ($("#uBtnCopy").hasClass('utilityBtnDisabled')) {
            return;
        }
        //console.log("",$(".imgContainerM").is(":visible"));
        if ($(".imgContainerM").is(":visible")) {
            $(".copyToaster").css('top', 'calc(1vh + 709px)');
        } else {
            $(".copyToaster").css('top', 'calc(1vh + 480px)');
        }
        var ddValue = $("#motorHeaderDD").val();
        if (ddValue == 1) {
            //fr
            //inp
            var i1lbl = $("#lblmotDisplacement").text();
            var i2lbl = $("#lblmotSpeed").text();
            var i3lbl = $("#lblmotVolEff").text();
            var i4lbl = $("#lblmotPower").text();
            var i5lbl = $("#lblmotPressure").text();
            var i6lbl = $("#lblmotMechEff").text();
            //
            var i1Val = $("#inpmotDisplacement").val();
            var i2Val = $("#inpmotSpeed").val();
            var i3Val = $("#inpmotVolEff").val();
            var i4Val = $("#inpmotPower").val();
            var i5Val = $("#inpmotPressure").val();
            var i6Val = $("#inpmotMechEff").val();
            //
            var i1Unit = $("#selmotDisplacement option:selected").html()
            var i2Unit = $("#selmotSpeed option:selected").html()
            var i3Unit = $("#selmotVolEff option:selected").html()
            var i4Unit = $("#selmotPower option:selected").html()
            var i5Unit = $("#selmotPressure option:selected").html()
            var i6Unit = $("#selmotMechEff option:selected").html()
            //out
            var o1lbl = $("#motOutputLabel").text();
            var o1Val = $("#outmot").val();
            var o1Unit = $("#outselmot option:selected").html()
            var clipTxt = i1lbl + '\t' + i1Val + '\t\t' + i1Unit + "\r\n" +
                i2lbl + '\t' + i2Val + '\t\t' + i2Unit + "\r\n" +
                i3lbl + '\t' + i3Val + '\t\t' + i3Unit + "\r\n" +
                i4lbl + '\t' + i4Val + '\t\t' + i4Unit + "\r\n" +
                i5lbl + '\t' + i5Val + '\t\t' + i5Unit + "\r\n" +
                i6lbl + '\t' + i6Val + '\t\t' + i6Unit + "\r\n" +
                o1lbl + '\t' + o1Val + '\t\t' + o1Unit + "\r\n";
            var e1 = document.createElement('textarea');
            e1.value = clipTxt;
            e1.setAttribute('readonly', '');
            e1.style.position = 'absolute';
            e1.style.left = '-9999px';
            document.body.appendChild(e1);
            e1.select();
            copyFlag = document.execCommand('copy');
            document.body.removeChild(e1);
        } else if (ddValue == 2) {
            //pressure
            //inp
            var i1lbl = $("#lblmotPower").text();
            var i2lbl = $("#lblmotFlowRate").text();
            var i3lbl = $("#lblmotVolEff").text();
            var i4lbl = $("#lblmotMechEff").text();
            var i5lbl = $("#lblmotTorque").text();
            var i6lbl = $("#lblmotDisplacement").text();
            //
            var i1Val = $("#inpmotPower").val();
            var i2Val = $("#inpmotFlowRate").val();
            var i3Val = $("#inpmotVolEff").val();
            var i4Val = $("#inpmotMechEff").val();
            var i5Val = $("#inpmotTorque").val();
            var i6Val = $("#inpmotDisplacement").val();
            //
            var i1Unit = $("#selmotPower option:selected").html()
            var i2Unit = $("#selmotFlowRate option:selected").html()
            var i3Unit = $("#selmotVolEff option:selected").html()
            var i4Unit = $("#selmotMechEff option:selected").html()
            var i5Unit = $("#selmotTorque option:selected").html()
            var i6Unit = $("#selmotDisplacement option:selected").html()
            //out
            var o1lbl = $("#motOutputLabel").text();
            var o1Val = $("#outmot").val();
            var o1Unit = $("#outselmot option:selected").html()
            var clipTxt = i1lbl + '\t' + i1Val + '\t\t' + i1Unit + "\r\n" +
                i2lbl + '\t' + i2Val + '\t\t' + i2Unit + "\r\n" +
                i3lbl + '\t' + i3Val + '\t\t' + i3Unit + "\r\n" +
                i4lbl + '\t' + i4Val + '\t\t' + i4Unit + "\r\n" +
                i5lbl + '\t' + i5Val + '\t\t' + i5Unit + "\r\n" +
                i6lbl + '\t' + i6Val + '\t\t' + i6Unit + "\r\n" +
                o1lbl + '\t' + o1Val + '\t\t' + o1Unit + "\r\n";
            var e1 = document.createElement('textarea');
            e1.value = clipTxt;
            e1.setAttribute('readonly', '');
            e1.style.position = 'absolute';
            e1.style.left = '-9999px';
            document.body.appendChild(e1);
            e1.select();
            copyFlag = document.execCommand('copy');
            document.body.removeChild(e1);
        } else if (ddValue == 3) {
            //displacement
            //inp
            var i1lbl = $("#lblmotTorque").text();
            var i2lbl = $("#lblmotMechEff").text();
            var i3lbl = $("#lblmotPressure").text();
            var i4lbl = $("#lblmotFlowRate").text();
            var i5lbl = $("#lblmotVolEff").text();
            var i6lbl = $("#lblmotSpeed").text();
            //
            var i1Val = $("#inpmotTorque").val();
            var i2Val = $("#inpmotMechEff").val();
            var i3Val = $("#inpmotPressure").val();
            var i4Val = $("#inpmotFlowRate").val();
            var i5Val = $("#inpmotVolEff").val();
            var i6Val = $("#inpmotSpeed").val();
            //
            var i1Unit = $("#selmotTorque option:selected").html()
            var i2Unit = $("#selmotMechEff option:selected").html()
            var i3Unit = $("#selmotPressure option:selected").html()
            var i4Unit = $("#selmotFlowRate option:selected").html()
            var i5Unit = $("#selmotVolEff option:selected").html()
            var i6Unit = $("#selmotSpeed option:selected").html()
            //out
            var o1lbl = $("#motOutputLabel").text();
            var o1Val = $("#outmot").val();
            var o1Unit = $("#outselmot option:selected").html()

            var clipTxt = i1lbl + '\t' + i1Val + '\t\t' + i1Unit + "\r\n" +
                i2lbl + '\t' + i2Val + '\t\t' + i2Unit + "\r\n" +
                i3lbl + '\t' + i3Val + '\t\t' + i3Unit + "\r\n" +
                i4lbl + '\t' + i4Val + '\t\t' + i4Unit + "\r\n" +
                i5lbl + '\t' + i5Val + '\t\t' + i5Unit + "\r\n" +
                i6lbl + '\t' + i6Val + '\t\t' + i6Unit + "\r\n" +
                o1lbl + '\t' + o1Val + '\t\t' + o1Unit + "\r\n";
            var e1 = document.createElement('textarea');
            e1.value = clipTxt;
            e1.setAttribute('readonly', '');
            e1.style.position = 'absolute';
            e1.style.left = '-9999px';
            document.body.appendChild(e1);
            e1.select();
            copyFlag = document.execCommand('copy');
            document.body.removeChild(e1);
        } else if (ddValue == 4) {
            //speed
            //inp
            var i1lbl = $("#lblmotFlowRate").text();
            var i2lbl = $("#lblmotVolEff").text();
            var i3lbl = $("#lblmotDisplacement").text();
            var i4lbl = $("#lblmotPower").text();
            var i5lbl = $("#lblmotTorque").text();
            //
            var i1Val = $("#inpmotFlowRate").val();
            var i2Val = $("#inpmotVolEff").val();
            var i3Val = $("#inpmotDisplacement").val();
            var i4Val = $("#inpmotPower").val();
            var i5Val = $("#inpmotTorque").val();
            //
            var i1Unit = $("#selmotFlowRate option:selected").html()
            var i2Unit = $("#selmotVolEff option:selected").html()
            var i3Unit = $("#selmotDisplacement option:selected").html()
            var i4Unit = $("#selmotPower option:selected").html()
            var i5Unit = $("#selmotTorque option:selected").html()
            //out
            var o1lbl = $("#motOutputLabel").text();
            var o1Val = $("#outmot").val();
            var o1Unit = $("#outselmot option:selected").html()

            var clipTxt = i1lbl + '\t' + i1Val + '\t\t' + i1Unit + "\r\n" +
                i2lbl + '\t' + i2Val + '\t\t' + i2Unit + "\r\n" +
                i3lbl + '\t' + i3Val + '\t\t' + i3Unit + "\r\n" +
                i4lbl + '\t' + i4Val + '\t\t' + i4Unit + "\r\n" +
                i5lbl + '\t' + i5Val + '\t\t' + i5Unit + "\r\n" +
                o1lbl + '\t' + o1Val + '\t\t' + o1Unit + "\r\n";

            var e1 = document.createElement('textarea');
            e1.value = clipTxt;
            e1.setAttribute('readonly', '');
            e1.style.position = 'absolute';
            e1.style.left = '-9999px';
            document.body.appendChild(e1);
            e1.select();
            copyFlag = document.execCommand('copy');
            document.body.removeChild(e1);

        } else if (ddValue == 5) {
            //torque
            //inp
            var i1lbl = $("#lblmotMechEff").text();
            var i2lbl = $("#lblmotDisplacement").text();
            var i3lbl = $("#lblmotPressure").text();
            var i4lbl = $("#lblmotPower").text();
            var i5lbl = $("#lblmotSpeed").text();
            //
            var i1Val = $("#inpmotMechEff").val();
            var i2Val = $("#inpmotDisplacement").val();
            var i3Val = $("#inpmotPressure").val();
            var i4Val = $("#inpmotPower").val();
            var i5Val = $("#inpmotSpeed").val();
            //
            var i1Unit = $("#selmotMechEff option:selected").html()
            var i2Unit = $("#selmotDisplacement option:selected").html()
            var i3Unit = $("#selmotPressure option:selected").html()
            var i4Unit = $("#selmotPower option:selected").html()
            var i5Unit = $("#selmotSpeed option:selected").html()
            //out
            var o1lbl = $("#motOutputLabel").text();
            var o1Val = $("#outmot").val();
            var o1Unit = $("#outselmot option:selected").html()

            var clipTxt = i1lbl + '\t' + i1Val + '\t\t' + i1Unit + "\r\n" +
                i2lbl + '\t' + i2Val + '\t\t' + i2Unit + "\r\n" +
                i3lbl + '\t' + i3Val + '\t\t' + i3Unit + "\r\n" +
                i4lbl + '\t' + i4Val + '\t\t' + i4Unit + "\r\n" +
                i5lbl + '\t' + i5Val + '\t\t' + i5Unit + "\r\n" +
                o1lbl + '\t' + o1Val + '\t\t' + o1Unit + "\r\n";

            var e1 = document.createElement('textarea');
            e1.value = clipTxt;
            e1.setAttribute('readonly', '');
            e1.style.position = 'absolute';
            e1.style.left = '-9999px';
            document.body.appendChild(e1);
            e1.select();
            copyFlag = document.execCommand('copy');
            document.body.removeChild(e1);
        } else if (ddValue == 6) {
            //power
            //inp
            var i1lbl = $("#lblmotTorque").text();
            var i2lbl = $("#lblmotSpeed").text();
            var i3lbl = $("#lblmotFlowRate").text();
            var i4lbl = $("#lblmotPressure").text();
            var i5lbl = $("#lblmotVolEff").text();
            var i6lbl = $("#lblmotMechEff").text();
            //
            var i1Val = $("#inpmotTorque").val();
            var i2Val = $("#inpmotSpeed").val();
            var i3Val = $("#inpmotFlowRate").val();
            var i4Val = $("#inpmotPressure").val();
            var i5Val = $("#inpmotVolEff").val();
            var i6Val = $("#inpmotMechEff").val();
            //
            var i1Unit = $("#selmotTorque option:selected").html()
            var i2Unit = $("#selmotSpeed option:selected").html()
            var i3Unit = $("#selmotFlowRate option:selected").html()
            var i4Unit = $("#selmotPressure option:selected").html()
            var i5Unit = $("#selmotVolEff option:selected").html()
            var i6Unit = $("#selmotMechEff option:selected").html()
            //out
            var o1lbl = $("#motOutputLabel").text();
            var o1Val = $("#outmot").val();
            var o1Unit = $("#outselmot option:selected").html()

            var clipTxt = i1lbl + '\t' + i1Val + '\t\t' + i1Unit + "\r\n" +
                i2lbl + '\t' + i2Val + '\t\t' + i2Unit + "\r\n" +
                i3lbl + '\t' + i3Val + '\t\t' + i3Unit + "\r\n" +
                i4lbl + '\t' + i4Val + '\t\t' + i4Unit + "\r\n" +
                i5lbl + '\t' + i5Val + '\t\t' + i5Unit + "\r\n" +
                i6lbl + '\t' + i6Val + '\t\t' + i6Unit + "\r\n" +
                o1lbl + '\t' + o1Val + '\t\t' + o1Unit + "\r\n";

            var e1 = document.createElement('textarea');
            e1.value = clipTxt;
            e1.setAttribute('readonly', '');
            e1.style.position = 'absolute';
            e1.style.left = '-9999px';
            document.body.appendChild(e1);
            e1.select();
            copyFlag = document.execCommand('copy');
            document.body.removeChild(e1);
        }
    } else if (type == "pump") {
        //console.log("pump display",$("#imgContainerP").css('display'));
        if ($("#uBtnCopyP").hasClass('utilityBtnDisabled')) {
            return;
        }
        if ($(".imgContainerP").is(":visible")) {
            $(".copyToaster").css('top', 'calc(1vh + 709px)');
        } else {
            $(".copyToaster").css('top', 'calc(1vh + 480px)');
        }
        /*if($("#imgContainerP").css('display') == 'block'){
          $(".copyToaster").css('top','calc(1vh + 709px)');
        }
        else{
          $(".copyToaster").css('top','calc(1vh + 480px)');
        }*/
        var ddValue = $("#pumpHeaderDD").val();
        if (ddValue == 1) {
            //fr
            var i1lbl = $("#lblpumpDisplacement").text();
            var i2lbl = $("#lblpumpSpeed").text();
            var i3lbl = $("#lblpumpVolEff").text();
            //
            var i1Val = $("#inppumpDisplacement").val();
            var i2Val = $("#inppumpSpeed").val();
            var i3Val = $("#inppumpVolEff").val();
            //
            var i1Unit = $("#selpumpDisplacement option:selected").html()
            var i2Unit = $("#selpumpSpeed option:selected").html()
            var i3Unit = $("#selpumpVolEff option:selected").html()
            //out
            var o1lbl = $("#pumpOutputLabel").text();
            var o1Val = $("#outpump").val();
            var o1Unit = $("#outselpump option:selected").html()
            var clipTxt = i1lbl + '\t' + i1Val + '\t\t' + i1Unit + "\r\n" +
                i2lbl + '\t' + i2Val + '\t\t' + i2Unit + "\r\n" +
                i3lbl + '\t' + i3Val + '\t\t' + i3Unit + "\r\n" +
                o1lbl + '\t' + o1Val + '\t\t' + o1Unit + "\r\n";
            var e1 = document.createElement('textarea');
            e1.value = clipTxt;
            e1.setAttribute('readonly', '');
            e1.style.position = 'absolute';
            e1.style.left = '-9999px';
            document.body.appendChild(e1);
            e1.select();
            copyFlag = document.execCommand('copy');
            document.body.removeChild(e1);
        } else if (ddValue == 2) {
            //disp
            var i1lbl = $("#lblpumpFlowRate").text();
            var i2lbl = $("#lblpumpSpeed").text();
            var i3lbl = $("#lblpumpVolEff").text();
            //
            var i1Val = $("#inppumpFlowRate").val();
            var i2Val = $("#inppumpSpeed").val();
            var i3Val = $("#inppumpVolEff").val();
            //
            var i1Unit = $("#selpumpFlowRate option:selected").html()
            var i2Unit = $("#selpumpSpeed option:selected").html()
            var i3Unit = $("#selpumpVolEff option:selected").html()
            //out
            var o1lbl = $("#pumpOutputLabel").text();
            var o1Val = $("#outpump").val();
            var o1Unit = $("#outselpump option:selected").html()
            var clipTxt = i1lbl + '\t' + i1Val + '\t\t' + i1Unit + "\r\n" +
                i2lbl + '\t' + i2Val + '\t\t' + i2Unit + "\r\n" +
                i3lbl + '\t' + i3Val + '\t\t' + i3Unit + "\r\n" +
                o1lbl + '\t' + o1Val + '\t\t' + o1Unit + "\r\n";
            var e1 = document.createElement('textarea');
            e1.value = clipTxt;
            e1.setAttribute('readonly', '');
            e1.style.position = 'absolute';
            e1.style.left = '-9999px';
            document.body.appendChild(e1);
            e1.select();
            copyFlag = document.execCommand('copy');
            document.body.removeChild(e1);
        } else if (ddValue == 3) {
            //elec motor pow
            if ($(".imgContainerP").is(":visible")) {
                $(".copyToaster").css('top', 'calc(1vh + 891px)');
            } else {
                $(".copyToaster").css('top', 'calc(1vh + 480px)');
            }
            var i1lbl = $("#lblpumpDisplacement").text();
            var i2lbl = $("#lblpumpPressure").text();
            var i3lbl = $("#lblpumpSpeed").text();
            var i4lbl = $("#lblpumpMechEff").text();
            var i5lbl = $("#lblpumpFlowRate").text()
            var i6lbl = $("#lblpumpVolEff").text()
            //
            var i1Val = $("#inppumpDisplacement").val();
            var i2Val = $("#inppumpPressure").val();
            var i3Val = $("#inppumpSpeed").val();
            var i4Val = $("#inppumpMechEff").val();
            var i5Val = $("#inppumpFlowRate").val();
            var i6Val = $("#inppumpVolEff").val();
            //
            var i1Unit = $("#selpumpDisplacement option:selected").html()
            var i2Unit = $("#selpumpPressure option:selected").html()
            var i3Unit = $("#selpumpSpeed option:selected").html()
            var i4Unit = $("#selpumpMechEff option:selected").html()
            var i5Unit = $("#selpumpFlowRate option:selected").html()
            var i6Unit = $("#selpumpVolEff option:selected").html()
            //out
            var o1lbl = $("#pumpOutputLabel").text();
            var o1Val = $("#outpump").val();
            var o1Unit = $("#outselpump option:selected").html()
            var clipTxt = i1lbl + '\t' + i1Val + '\t\t' + i1Unit + "\r\n" +
                i2lbl + '\t' + i2Val + '\t\t' + i2Unit + "\r\n" +
                i3lbl + '\t' + i3Val + '\t\t' + i3Unit + "\r\n" +
                i4lbl + '\t' + i4Val + '\t\t' + i4Unit + "\r\n" +
                i5lbl + '\t' + i5Val + '\t\t' + i5Unit + "\r\n" +
                i6lbl + '\t' + i6Val + '\t\t' + i6Unit + "\r\n" +
                o1lbl + '\t' + o1Val + '\t\t' + o1Unit + "\r\n";
            var e1 = document.createElement('textarea');
            e1.value = clipTxt;
            e1.setAttribute('readonly', '');
            e1.style.position = 'absolute';
            e1.style.left = '-9999px';
            document.body.appendChild(e1);
            e1.select();
            copyFlag = document.execCommand('copy');
            document.body.removeChild(e1);
        } else if (ddValue == 4) {
            //total eff
            var i1lbl = $("#lblpumpVolEff").text();
            var i2lbl = $("#lblpumpMechEff").text();
            //
            var i1Val = $("#inppumpVolEff").val();
            var i2Val = $("#inppumpMechEff").val();
            //
            var i1Unit = $("#selpumpVolEff option:selected").html()
            var i2Unit = $("#selpumpMechEff option:selected").html()
            //out
            var o1lbl = $("#pumpOutputLabel").text();
            var o1Val = $("#outpump").val();
            var o1Unit = $("#outselpump option:selected").html()
            var clipTxt = i1lbl + '\t' + i1Val + '\t\t' + i1Unit + "\r\n" +
                i2lbl + '\t' + i2Val + '\t\t' + i2Unit + "\r\n" +
                o1lbl + '\t' + o1Val + '\t\t' + o1Unit + "\r\n";
            var e1 = document.createElement('textarea');
            e1.value = clipTxt;
            e1.setAttribute('readonly', '');
            e1.style.position = 'absolute';
            e1.style.left = '-9999px';
            document.body.appendChild(e1);
            e1.select();
            copyFlag = document.execCommand('copy');
            document.body.removeChild(e1);
        }
    } else if (type == "pressureDrop") {
        if ($(".imgContainerPD").is(":visible")) {
            $(".copyToaster").css('top', 'calc(1vh + 709px)');
        } else {
            $(".copyToaster").css('top', 'calc(1vh + 480px)');
        }
        if ($("#uBtnCopyPD").hasClass('utilityBtnDisabled')) {
            return;
        }
        //pd
        var i1lbl = $("#lblpDFlowRate").text();
        var i2lbl = $("#lblpDDiameter").text();
        var i3lbl = $("#lblpDOrifice").text();
        var i4lbl = $("#lblpDGravity").text();
        //
        var i1Val = $("#inppDFlowRate").val();
        var i2Val = $("#inppDDiameter").val();
        var i3Val = $("#inppDOrifice").val();
        var i4Val = $("#inppDGravity").val();
        //
        var i1Unit = $("#selpDFlowRate option:selected").html()
        var i2Unit = $("#selpDDiameter option:selected").html()
        var i3Unit = $("#selppDOrifice option:selected").html() == undefined ? '' : $("#selppDOrifice option:selected").html();
        var i4Unit = $("#selpDGravity option:selected").html() == undefined ? '' : $("#selpDGravity option:selected").html();
        //out
        var o1lbl = $("#pDOutputLabel").text();
        var o1Val = $("#outpD").val();
        var o1Unit = $("#selpDPressureDrop option:selected").html();
        var clipTxt = i1lbl + '\t' + i1Val + '\t\t' + i1Unit + "\r\n" +
            i2lbl + '\t' + i2Val + '\t\t' + i2Unit + "\r\n" +
            i3lbl + '\t' + i3Val + '\t\t' + i3Unit + "\r\n" +
            i4lbl + '\t' + i4Val + '\t\t' + i4Unit + "\r\n" +
            o1lbl + '\t' + o1Val + '\t\t' + o1Unit + "\r\n";
        var e1 = document.createElement('textarea');
        e1.value = clipTxt;
        e1.setAttribute('readonly', '');
        e1.style.position = 'absolute';
        e1.style.left = '-9999px';
        document.body.appendChild(e1);
        e1.select();
        copyFlag = document.execCommand('copy');
        document.body.removeChild(e1);
    } else if (type == "piping") {
        if ($(".imgContainerPiping").is(":visible")) {
            $(".copyToaster").css('top', 'calc(1vh + 709px)');
        } else {
            $(".copyToaster").css('top', 'calc(1vh + 480px)');
        }
        if ($("#uBtnCopyPip").hasClass('utilityBtnDisabled')) {
            return;
        }
        var ddValue = $("#pipingHeaderDD").val();
        if (ddValue == 1) {
            //
            var i1lbl = $("#lblpipOilFlowRate").text();
            var i2lbl = $("#lblpipSpGravity").text();
            var i3lbl = $("#lblpipPipeDiameter").text();
            var i4lbl = $("#lblpipAbsViscosity").text();
            //
            var i1Val = $("#inppipOilFlowRate").val();
            var i2Val = $("#inppipSpGravity").val();
            var i3Val = $("#inppipPipeDiameter").val();
            var i4Val = $("#inppipAbsViscosity").val();
            //
            var i1Unit = $("#selpipOilFlowRate option:selected").html();
            var i2Unit = $("#selpipSpGravity option:selected").html() == undefined ? '' : $("#selpipSpGravity option:selected").html();
            var i3Unit = $("#selpipPipeDiameter option:selected").html();
            var i4Unit = $("#selpipAbsViscosity option:selected").html();
            //out
            var o1lbl = $("#outlblpipCrossSecArea").text();
            var o1Val = $("#outpipCrossSecArea").val();
            var o1Unit = $("#selpipCrossSecArea option:selected").html();
            var o2lbl = $("#outlblpipVelocity").text();
            var o2Val = $("#outpipVelocity").val();
            var o2Unit = $("#selpipVelocity option:selected").html();
            var o3lbl = $("#outlblpipReynoldNum").text();
            var o3Val = $("#outpipReynoldNum").val();
            var o3Unit = $("#selpipReynoldNum option:selected").html() == undefined ? '' : $("#selpipReynoldNum option:selected").html();
            var clipTxt = i1lbl + '\t' + i1Val + '\t\t' + i1Unit + "\r\n" +
                i2lbl + '\t' + i2Val + '\t\t' + i2Unit + "\r\n" +
                i3lbl + '\t' + i3Val + '\t\t' + i3Unit + "\r\n" +
                i4lbl + '\t' + i4Val + '\t\t' + i4Unit + "\r\n" +
                o1lbl + '\t' + o1Val + '\t\t' + o1Unit + "\r\n" +
                o2lbl + '\t' + o2Val + '\t\t' + o2Unit + "\r\n" +
                o3lbl + '\t' + o3Val + '\t\t' + o3Unit + "\r\n";
            var e1 = document.createElement('textarea');
            e1.value = clipTxt;
            e1.setAttribute('readonly', '');
            e1.style.position = 'absolute';
            e1.style.left = '-9999px';
            document.body.appendChild(e1);
            e1.select();
            copyFlag = document.execCommand('copy');
            document.body.removeChild(e1);
        } else if (ddValue == 2) {
            //
            var i1lbl = $("#lblpipOilFlowRate").text();
            var i2lbl = $("#lblpipPipeDiameter").text();
            var i3lbl = $("#lblpipKinViscosity").text();
            //
            var i1Val = $("#inppipOilFlowRate").val();
            var i2Val = $("#inppipPipeDiameter").val();
            var i3Val = $("#inppipKinViscosity").val();
            //
            var i1Unit = $("#selpipOilFlowRate option:selected").html();
            var i2Unit = $("#selpipPipeDiameter option:selected").html();
            var i3Unit = $("#selpipKinViscosity option:selected").html();
            //out
            var o1lbl = $("#outlblpipCrossSecArea").text();
            var o1Val = $("#outpipCrossSecArea").val();
            var o1Unit = $("#selpipCrossSecArea option:selected").html();
            var o2lbl = $("#outlblpipVelocity").text();
            var o2Val = $("#outpipVelocity").val();
            var o2Unit = $("#selpipVelocity option:selected").html();
            var o3lbl = $("#outlblpipReynoldNum").text();
            var o3Val = $("#outpipReynoldNum").val();
            var o3Unit = $("#selpipReynoldNum option:selected").html() == undefined ? '' : $("#selpipReynoldNum option:selected").html();
            var clipTxt = i1lbl + '\t' + i1Val + '\t\t' + i1Unit + "\r\n" +
                i2lbl + '\t' + i2Val + '\t\t' + i2Unit + "\r\n" +
                i3lbl + '\t' + i3Val + '\t\t' + i3Unit + "\r\n" +
                o1lbl + '\t' + o1Val + '\t\t' + o1Unit + "\r\n" +
                o2lbl + '\t' + o2Val + '\t\t' + o2Unit + "\r\n" +
                o3lbl + '\t' + o3Val + '\t\t' + o3Unit + "\r\n";
            var e1 = document.createElement('textarea');
            e1.value = clipTxt;
            e1.setAttribute('readonly', '');
            e1.style.position = 'absolute';
            e1.style.left = '-9999px';
            document.body.appendChild(e1);
            e1.select();
            copyFlag = document.execCommand('copy');
            document.body.removeChild(e1);
        }
    }
    if (copyFlag == true) {
        $(".copyToaster").show(1, function() {
            setTimeout(
                function() {
                    $(".copyToaster").hide(1);
                }, 2500
            )
        });
    }

}

function resetCalc(type) {
    if (type == "motor") {
        if ($("#uBtnReset").hasClass('utilityBtnDisabled')) {
            return;
        }
        var ddValue = $("#motorHeaderDD").val();
        if (ddValue == 1) {
            //remove all values
            //reset all values also
            $("#motorHeaderDD").val(1);
            initMotordd();
        } else if (ddValue == 2) {
            $("#motorHeaderDD").val(2);
            initMotordd();
        } else if (ddValue == 3) {
            $("#motorHeaderDD").val(3);
            initMotordd();
        } else if (ddValue == 4) {
            $("#motorHeaderDD").val(4);
            initMotordd();
        } else if (ddValue == 5) {
            $("#motorHeaderDD").val(5);
            initMotordd();
        } else if (ddValue == 6) {
            $("#motorHeaderDD").val(6);
            initMotordd();
        }
    } else if (type == "pump") {
        if ($("#uBtnResetP").hasClass('utilityBtnDisabled')) {
            return;
        }
        var ddValue = $("#pumpHeaderDD").val();
        if (ddValue == 1) {
            $("#pumpHeaderDD").val(1);
            initPumpdd();
        } else if (ddValue == 2) {
            $("#pumpHeaderDD").val(2);
            initPumpdd();
        } else if (ddValue == 3) {
            $("#pumpHeaderDD").val(3);
            initPumpdd();
        } else if (ddValue == 4) {
            $("#pumpHeaderDD").val(4);
            initPumpdd();
        }
    } else if (type == "pressureDrop") {
        if ($("#uBtnResetPD").hasClass('utilityBtnDisabled')) {
            return;
        }
        initPDdd();
    } else if (type == "piping") {
        if ($("#uBtnResetPip").hasClass('utilityBtnDisabled')) {
            return;
        }
        initPipingdd();
    }
}

function changeContentHeight(type, ddValue) {
    if (type == "motor") {
        if (ddValue == 1) {
            //flowrate
            $(".contentsNew").css('height', '294px');
        } else if (ddValue == 2) {
            //pressure
            $(".contentsNew").css('height', '294px');
        } else if (ddValue == 3) {
            //displacement
            $(".contentsNew").css('height', '294px');
        } else if (ddValue == 4) {
            //speed
            $(".contentsNew").css('height', '252px');
        } else if (ddValue == 5) {
            //torque
            $(".contentsNew").css('height', '252px');
        } else if (ddValue == 6) {
            //power
            $(".contentsNew").css('height', '252px');
        }
    } else if (type == "pump") {
        if (ddValue == 1) {
            //flowrate
            $(".contentsNew").css('height', '168px');
        } else if (ddValue == 2) {
            //displacement
            $(".contentsNew").css('height', '168px');
        } else if (ddValue == 3) {
            //electric motor
            $(".contentsNew").css('height', '294px');
        } else if (ddValue == 4) {
            //total efficiency    
            $(".contentsNew").css('height', '126px');
        }
    } else if (type == "pressureDrop") {
        $(".contentsNew").css('height', '210px');
    } else if (type == "piping") {
        if (ddValue == 1) {
            //absolute    
            $(".contentsNew").css('height', '294px');
        } else if (ddValue == 2) {
            //kinetic
            $(".contentsNew").css('height', '252px');
        }
    }
}

function emailCalc(type) {
    resetImageTagsAndState();
    $("#sendNewM,#sendNewP,#sendNewPD,#sendNewPip").removeAttr('style');
    $("#sendNewM,#sendNewP,#sendNewPD,#sendNewPip").attr('disabled', 'disabled');
    $("#to,#toM,#toP,#toPD,#toPip").removeAttr('style');
    $("#cc,#ccM,#ccP,#ccPD,#ccPip").removeAttr('style');
    $(".cancelNewM,.cancelNewP,.cancelNewPD,.cancelNewPip").removeAttr('disabled');
    $(".cancelNewM,.cancelNewP,.cancelNewPD,.cancelNewPip").removeAttr('style');
    if (type == "motor") {
        if ($("#uBtnEmail").hasClass('utilityBtnDisabled')) {
            return;
        }
        var ddValue = $("#motorHeaderDD").val();
        //$("#motorEmail").show();
        //$("#outerMotor").show();
        //console.log("inside send email");
        populateMotorEmailValues(ddValue);
        changeContentHeight(type, ddValue);
        $("#toM").val('');
        $("#ccM").val('');
        $(".outerEmailMotor").slideToggle(600, function() {
            $("#toM").focus();
        });

        //$(".outerEmail").slideUp();
    } else if (type == "pump") {
        if ($("#uBtnEmailP").hasClass('utilityBtnDisabled')) {
            return;
        }
        var ddValue = $("#pumpHeaderDD").val();
        populatePumpEmailValue(ddValue);
        changeContentHeight(type, ddValue);
        $("#toP").val('');
        $("#ccP").val('');
        $(".outerEmailPump").slideToggle(600, function() {
            $("#toP").focus();
        });
    } else if (type == "pressureDrop") {
        if ($("#uBtnEmailPD").hasClass('utilityBtnDisabled')) {
            return;
        }
        populatePressureDropEmailValue();
        changeContentHeight(type, 1);
        $("#toPD").val('');
        $("#ccPD").val('');
        $(".outerEmailPD").slideToggle(600, function() {
            $("#toPD").focus();
        });
    } else if (type == "piping") {
        if ($("#uBtnEmailPip").hasClass('utilityBtnDisabled')) {
            return;
        }
        var ddValue = $("#pipingHeaderDD").val();
        populatePipingEmailValue(ddValue);
        changeContentHeight(type, ddValue);
        $("#toPip").val('');
        $("#ccPip").val('');
        $(".outerEmailPiping").slideToggle(600, function() {
            $("#toPip").focus();
        });
    }
    //for scrolling to focus
    setTimeout(function() {
        $('html,body', window.parent.document).animate({
            scrollTop: 315
        }, "slow");
        /*$(window).scrollTop(0,'slow');*/
    }, 500);
}

function populatePressureDropEmailValue() {
    $("#pDInplbl1").text($("#lblpDFlowRate").text() == undefined ? '' : $("#lblpDFlowRate").text());
    $("#pDInplbl2").text($("#lblpDDiameter").text() == undefined ? '' : $("#lblpDDiameter").text());
    $("#pDInplbl3").text($("#lblpDOrifice").text() == undefined ? '' : $("#lblpDOrifice").text());
    $("#pDInplbl4").text($("#lblpDGravity").text() == undefined ? '' : $("#lblpDGravity").text());
    $("#pDOutlbl1").text($("#pDOutputLabel").text() == undefined ? '' : $("#pDOutputLabel").text());

    $("#pDInpVal1").text($("#inppDFlowRate").val() == undefined ? '' : $("#inppDFlowRate").val());
    $("#pDInpVal2").text($("#inppDDiameter").val() == undefined ? '' : $("#inppDDiameter").val());
    $("#pDInpVal3").text($("#inppDOrifice").val() == undefined ? '' : $("#inppDOrifice").val());
    $("#pDInpVal4").text($("#inppDGravity").val() == undefined ? '' : $("#inppDGravity").val());
    $("#pDOutVal1").text($("#outpD").val() == undefined ? '' : $("#outpD").val());

    $("#pDInpUnit1").text($("#selpDFlowRate option:selected").html() == undefined ? '' : $("#selpDFlowRate option:selected").html());
    $("#pDInpUnit2").text($("#selpDDiameter option:selected").html() == undefined ? '' : $("#selpDDiameter option:selected").html());
    $("#pDInpUnit3").text('');
    $("#pDInpUnit4").text('');
    $("#pDOutUnit1").text($("#selpDPressureDrop option:selected").html() == undefined ? '' : $("#selpDPressureDrop option:selected").html());

    $("#pDEmailHeader").text(emailCalcPressureDropHeadTxt);
}

function populatePressureDropEmailFormValues() {
    $("#myFormPressureDropE").html('');
    $("#myFormPressureDropE").append('<input type="hidden" value="' + langIs + '" name="lang" id="hiddenTxt">');
    $("#myFormPressureDropE").append('<input type="hidden" name="typeEmail" value="pressureDrop" id="typeEmail">');

    var lblFlowRate = $("#lblpDFlowRate").text() == undefined ? '' : $("#lblpDFlowRate").text();
    var lblDiameter = $("#lblpDDiameter").text() == undefined ? '' : $("#lblpDDiameter").text();
    var lblOrrCoeff = $("#lblpDOrifice").text() == undefined ? '' : $("#lblpDOrifice").text();
    var lblSpeGravity = $("#lblpDGravity").text() == undefined ? '' : $("#lblpDGravity").text();

    var lblOut = $("#pDOutputLabel").text() == undefined ? '' : $("#pDOutputLabel").text();

    var valFlowRate = $("#inppDFlowRate").val() == undefined ? '' : $("#inppDFlowRate").val();
    var valDiameter = $("#inppDDiameter").val() == undefined ? '' : $("#inppDDiameter").val();
    var valOrrCoeff = $("#inppDOrifice").val() == undefined ? '' : $("#inppDOrifice").val();
    var valSpeGravity = $("#inppDGravity").val() == undefined ? '' : $("#inppDGravity").val();

    var valOut = $("#outpD").val() == undefined ? '' : $("#outpD").val();

    var unitFlowRate = $("#selpDFlowRate option:selected").html() == undefined ? '' : $("#selpDFlowRate option:selected").html();
    var unitDiameter = $("#selpDDiameter option:selected").html() == undefined ? '' : $("#selpDDiameter option:selected").html();
    var unitOrrCoeff = '';
    var unitSpeGravity = '';

    var unitOut = $("#selpDPressureDrop option:selected").html() == undefined ? '' : $("#selpDPressureDrop option:selected").html();


    var subject = $("#subjectPD").val();
    var to = $("#toPD").val();
    var cc = $("#ccPD").val();
    $("#myFormPressureDropE").append('<input type="hidden" value="' + subject + '" name="subject" id="subject">');
    $("#myFormPressureDropE").append('<input type="hidden" value="' + to + '" name="to" id="to">');
    $("#myFormPressureDropE").append('<input type="hidden" value="' + cc + '" name="cc" id="cc">');

    $("#myFormPressureDropE").append('<input type="hidden" name="subtypeEmail" class="subtypeEmailPiping" value=1 id="subtypeEmail">');

    $("#myFormPressureDropE").append('<input type="hidden" value="' + lblFlowRate + '" name="inplbl1" id="inplbl1" >');
    $("#myFormPressureDropE").append('<input type="hidden" value="' + lblDiameter + '" name="inplbl2" id="inplbl2">');
    $("#myFormPressureDropE").append('<input type="hidden" value="' + lblOrrCoeff + '" name="inplbl3" id="inplbl3">');
    $("#myFormPressureDropE").append('<input type="hidden" value="' + lblSpeGravity + '" name="inplbl4" id="inplbl4">');
    $("#myFormPressureDropE").append('<input type="hidden" value="' + lblOut + '" name="outlbl1" id="outlbl1">');

    $("#myFormPressureDropE").append('<input type="hidden" value="' + valFlowRate + '" name="inpVal1" id="inpVal1">');
    $("#myFormPressureDropE").append('<input type="hidden" value="' + valDiameter + '" name="inpVal2" id="inpVal2">');
    $("#myFormPressureDropE").append('<input type="hidden" value="' + valOrrCoeff + '" name="inpVal3" id="inpVal3">');
    $("#myFormPressureDropE").append('<input type="hidden" value="' + valSpeGravity + '" name="inpVal4" id="inpVal4">');
    $("#myFormPressureDropE").append('<input type="hidden" value="' + valOut + '" name="outVal1" id="outVal1">');

    $("#myFormPressureDropE").append('<input type="hidden" value="' + unitFlowRate + '" name="inpUnit1" id="inpUnit1">');
    $("#myFormPressureDropE").append('<input type="hidden" value="' + unitDiameter + '" name="inpUnit2" id="inpUnit2">');
    $("#myFormPressureDropE").append('<input type="hidden" value="' + unitOrrCoeff + '" name="inpUnit3" id="inpUnit3">');
    $("#myFormPressureDropE").append('<input type="hidden" value="' + unitSpeGravity + '" name="inpUnit4" id="inpUnit4">');
    $("#myFormPressureDropE").append('<input type="hidden" value="' + unitOut + '" name="outUnit1" id="outUnit1">');

    $("#myFormPressureDropE").append('<input type="hidden" value="' + emailCalcPressureDropHeadTxt + '" name="pressureDropEmailHeader" id="pressureDropEmailHeader">');
}

function populatePipingEmailValue(ddValue) {
    $("#pipingInp4").show();
    if (ddValue == 2) {
        //4 hide
        $("#pipingInp4").hide();

        $("#pipingInplbl1").text($("#lblpipOilFlowRate").text() == undefined ? '' : $("#lblpipOilFlowRate").text());
        $("#pipingInplbl2").text($("#lblpipPipeDiameter").text() == undefined ? '' : $("#lblpipPipeDiameter").text());
        $("#pipingInplbl3").text($("#lblpipKinViscosity").text() == undefined ? '' : $("#lblpipKinViscosity").text());
        $("#pipingOutlbl1").text($("#outlblpipCrossSecArea").text() == undefined ? '' : $("#outlblpipCrossSecArea").text());
        $("#pipingOutlbl2").text($("#outlblpipVelocity").text() == undefined ? '' : $("#outlblpipVelocity").text());
        $("#pipingOutlbl3").text($("#outlblpipReynoldNum").text() == undefined ? '' : $("#outlblpipReynoldNum").text());

        $("#pipingInpVal1").text($("#inppipOilFlowRate").val() == undefined ? '' : $("#inppipOilFlowRate").val());
        $("#pipingInpVal2").text($("#inppipPipeDiameter").val() == undefined ? '' : $("#inppipPipeDiameter").val());
        $("#pipingInpVal3").text($("#inppipKinViscosity").val() == undefined ? '' : $("#inppipKinViscosity").val());
        $("#pipingOutVal1").text($("#outpipCrossSecArea").val() == undefined ? '' : $("#outpipCrossSecArea").val());
        $("#pipingOutVal2").text($("#outpipVelocity").val() == undefined ? '' : $("#outpipVelocity").val());
        $("#pipingOutVal3").text($("#outpipReynoldNum").val() == undefined ? '' : $("#outpipReynoldNum").val());

        $("#pipingInpUnit1").text($("#selpipOilFlowRate option:selected").html() == undefined ? '' : $("#selpipOilFlowRate option:selected").html());
        $("#pipingInpUnit2").text($("#selpipPipeDiameter option:selected").html() == undefined ? '' : $("#selpipPipeDiameter option:selected").html());
        $("#pipingInpUnit3").text($("#selpipKinViscosity option:selected").html() == undefined ? '' : $("#selpipKinViscosity option:selected").html());
        $("#pipingOutUnit1").text($("#selpipCrossSecArea option:selected").html() == undefined ? '' : $("#selpipCrossSecArea option:selected").html());
        $("#pipingOutUnit2").text($("#selpipVelocity option:selected").html() == undefined ? '' : $("#selpipVelocity option:selected").html());
        $("#pipingOutUnit3").text('');

        $("#pipingEmailHeader").text(emailCalcPipingKinViscosityTxt);
    } else if (ddValue == 1) {
        $("#pipingInplbl1").text($("#lblpipOilFlowRate").text() == undefined ? '' : $("#lblpipOilFlowRate").text());
        $("#pipingInplbl2").text($("#lblpipSpGravity").text() == undefined ? '' : $("#lblpipSpGravity").text());
        $("#pipingInplbl3").text($("#lblpipPipeDiameter").text() == undefined ? '' : $("#lblpipPipeDiameter").text());
        $("#pipingInplbl4").text($("#lblpipAbsViscosity").text() == undefined ? '' : $("#lblpipAbsViscosity").text());
        $("#pipingOutlbl1").text($("#outlblpipCrossSecArea").text() == undefined ? '' : $("#outlblpipCrossSecArea").text());
        $("#pipingOutlbl2").text($("#outlblpipVelocity").text() == undefined ? '' : $("#outlblpipVelocity").text());
        $("#pipingOutlbl3").text($("#outlblpipReynoldNum").text() == undefined ? '' : $("#outlblpipReynoldNum").text());

        $("#pipingInpVal1").text($("#inppipOilFlowRate").val() == undefined ? '' : $("#inppipOilFlowRate").val());
        $("#pipingInpVal2").text($("#inppipSpGravity").val() == undefined ? '' : $("#inppipSpGravity").val());
        $("#pipingInpVal3").text($("#inppipPipeDiameter").val() == undefined ? '' : $("#inppipPipeDiameter").val());
        $("#pipingInpVal4").text($("#inppipAbsViscosity").val() == undefined ? '' : $("#inppipAbsViscosity").val());
        $("#pipingOutVal1").text($("#outpipCrossSecArea").val() == undefined ? '' : $("#outpipCrossSecArea").val());
        $("#pipingOutVal2").text($("#outpipVelocity").val() == undefined ? '' : $("#outpipVelocity").val());
        $("#pipingOutVal3").text($("#outpipReynoldNum").val() == undefined ? '' : $("#outpipReynoldNum").val());

        $("#pipingInpUnit1").text($("#selpipOilFlowRate option:selected").html() == undefined ? '' : $("#selpipOilFlowRate option:selected").html());
        $("#pipingInpUnit2").text('');
        $("#pipingInpUnit3").text($("#selpipPipeDiameter option:selected").html() == undefined ? '' : $("#selpipPipeDiameter option:selected").html());
        $("#pipingInpUnit4").text($("#selpipAbsViscosity option:selected").html() == undefined ? '' : $("#selpipAbsViscosity option:selected").html());
        $("#pipingOutUnit1").text($("#selpipCrossSecArea option:selected").html() == undefined ? '' : $("#selpipCrossSecArea option:selected").html());
        $("#pipingOutUnit2").text($("#selpipVelocity option:selected").html() == undefined ? '' : $("#selpipVelocity option:selected").html());
        $("#pipingOutUnit3").text('');

        $("#pipingEmailHeader").text(emailCalcPipingAbsViscosityTxt);
    }
}

function populatePipingFormEmailValues(ddValue) {
    $("#myFormPipingE").html('');
    $("#myFormPipingE").append('<input type="hidden" value="' + langIs + '" name="lang" id="hiddenTxt">');
    $("#myFormPipingE").append('<input type="hidden" name="typeEmail" value="piping" id="typeEmail">');

    var lblFlowRate = $("#lblpipOilFlowRate").text() == undefined ? '' : $("#lblpipOilFlowRate").text();
    var lblSpecGravity = $("#lblpipSpGravity").text() == undefined ? '' : $("#lblpipSpGravity").text();
    var lblDiameter = $("#lblpipPipeDiameter").text() == undefined ? '' : $("#lblpipPipeDiameter").text();
    var lblAbsViscosity = $("#lblpipAbsViscosity").text() == undefined ? '' : $("#lblpipAbsViscosity").text();
    var lblKinViscosity = $("#lblpipKinViscosity").text() == undefined ? '' : $("#lblpipKinViscosity").text();

    var lblCrossSecOut = $("#outlblpipCrossSecArea").text() == undefined ? '' : $("#outlblpipCrossSecArea").text();
    var lblVelOut = $("#outlblpipVelocity").text() == undefined ? '' : $("#outlblpipVelocity").text();
    var lblReyNumOut = $("#outlblpipReynoldNum").text() == undefined ? '' : $("#outlblpipReynoldNum").text();


    var valFlowRate = $("#inppipOilFlowRate").val() == undefined ? '' : $("#inppipOilFlowRate").val();
    var valSpecGravity = $("#inppipSpGravity").val() == undefined ? '' : $("#inppipSpGravity").val();
    var valDiameter = $("#inppipPipeDiameter").val() == undefined ? '' : $("#inppipPipeDiameter").val();
    var valAbsViscosity = $("#inppipAbsViscosity").val() == undefined ? '' : $("#inppipAbsViscosity").val();
    var valKinViscosity = $("#inppipKinViscosity").val() == undefined ? '' : $("#inppipKinViscosity").val();

    var valCrossSecOut = $("#outpipCrossSecArea").val() == undefined ? '' : $("#outpipCrossSecArea").val();
    var valVelOut = $("#outpipVelocity").val() == undefined ? '' : $("#outpipVelocity").val();
    var valReyNumOut = $("#outpipReynoldNum").val() == undefined ? '' : $("#outpipReynoldNum").val();


    var unitFlowRate = $("#selpipOilFlowRate option:selected").html() == undefined ? '' : $("#selpipOilFlowRate option:selected").html();
    var unitSpecGravity = '';
    var unitDiameter = $("#selpipPipeDiameter option:selected").html() == undefined ? '' : $("#selpipPipeDiameter option:selected").html();
    var unitAbsViscosity = $("#selpipAbsViscosity option:selected").html() == undefined ? '' : $("#selpipAbsViscosity option:selected").html();
    var unitKinViscosity = $("#selpipKinViscosity option:selected").html() == undefined ? '' : $("#selpipKinViscosity option:selected").html();

    var unitCrossSecOut = $("#selpipCrossSecArea option:selected").html() == undefined ? '' : $("#selpipCrossSecArea option:selected").html();
    var unitVelOut = $("#selpipVelocity option:selected").html() == undefined ? '' : $("#selpipVelocity option:selected").html();
    var unitReyNumOut = '';

    var subject = $("#subjectPip").val();
    var to = $("#toPip").val();
    var cc = $("#ccPip").val();
    $("#myFormPipingE").append('<input type="hidden" value="' + subject + '" name="subject" id="subject">');
    $("#myFormPipingE").append('<input type="hidden" value="' + to + '" name="to" id="to">');
    $("#myFormPipingE").append('<input type="hidden" value="' + cc + '" name="cc" id="cc">');

    if (ddValue == 1) {
        $("#myFormPipingE").append('<input type="hidden" name="subtypeEmail" class="subtypeEmailPiping" value=2 id="subtypeEmail">');

        $("#myFormPipingE").append('<input type="hidden" value="' + lblFlowRate + '" name="inplbl1" id="inplbl1" >');
        $("#myFormPipingE").append('<input type="hidden" value="' + lblSpecGravity + '" name="inplbl2" id="inplbl2">');
        $("#myFormPipingE").append('<input type="hidden" value="' + lblDiameter + '" name="inplbl3" id="inplbl3">');
        $("#myFormPipingE").append('<input type="hidden" value="' + lblAbsViscosity + '" name="inplbl4" id="inplbl4">');

        $("#myFormPipingE").append('<input type="hidden" value="' + lblCrossSecOut + '" name="outlbl1" id="outlbl1">');
        $("#myFormPipingE").append('<input type="hidden" value="' + lblVelOut + '" name="outlbl2" id="outlbl2">');
        $("#myFormPipingE").append('<input type="hidden" value="' + lblReyNumOut + '" name="outlbl3" id="outlbl3">');

        $("#myFormPipingE").append('<input type="hidden" value="' + valFlowRate + '" name="inpVal1" id="inpVal1">');
        $("#myFormPipingE").append('<input type="hidden" value="' + valSpecGravity + '" name="inpVal2" id="inpVal2">');
        $("#myFormPipingE").append('<input type="hidden" value="' + valDiameter + '" name="inpVal3" id="inpVal3">');
        $("#myFormPipingE").append('<input type="hidden" value="' + valAbsViscosity + '" name="inpVal4" id="inpVal4">');

        $("#myFormPipingE").append('<input type="hidden" value="' + valCrossSecOut + '" name="outVal1" id="outVal1">');
        $("#myFormPipingE").append('<input type="hidden" value="' + valVelOut + '" name="outVal2" id="outVal2">');
        $("#myFormPipingE").append('<input type="hidden" value="' + valReyNumOut + '" name="outVal3" id="outVal3">');

        $("#myFormPipingE").append('<input type="hidden" value="' + unitFlowRate + '" name="inpUnit1" id="inpUnit1">');
        $("#myFormPipingE").append('<input type="hidden" value="' + unitSpecGravity + '" name="inpUnit2" id="inpUnit2">');
        $("#myFormPipingE").append('<input type="hidden" value="' + unitDiameter + '" name="inpUnit3" id="inpUnit3">');
        $("#myFormPipingE").append('<input type="hidden" value="' + unitAbsViscosity + '" name="inpUnit4" id="inpUnit4">');

        $("#myFormPipingE").append('<input type="hidden" value="' + unitCrossSecOut + '" name="outUnit1" id="outUnit1">');
        $("#myFormPipingE").append('<input type="hidden" value="' + unitVelOut + '" name="outUnit2" id="outUnit2">');
        $("#myFormPipingE").append('<input type="hidden" value="' + unitReyNumOut + '" name="outUnit3" id="outUnit3">');

        $("#myFormPipingE").append('<input type="hidden" value="' + emailCalcPipingAbsViscosityTxt + '" name="pipingEmailHeader" id="pipingEmailHeader">');

    } else if (ddValue == 2) {
        //hide the 4 the one
        $("#myFormPipingE").append('<input type="hidden" name="subtypeEmail" class="subtypeEmailPiping" value=1 id="subtypeEmail">');

        $("#myFormPipingE").append('<input type="hidden" value="' + lblFlowRate + '" name="inplbl1" id="inplbl1" >');
        $("#myFormPipingE").append('<input type="hidden" value="' + lblDiameter + '" name="inplbl2" id="inplbl2">');
        $("#myFormPipingE").append('<input type="hidden" value="' + lblKinViscosity + '" name="inplbl3" id="inplbl3">');

        $("#myFormPipingE").append('<input type="hidden" value="' + lblCrossSecOut + '" name="outlbl1" id="outlbl1">');
        $("#myFormPipingE").append('<input type="hidden" value="' + lblVelOut + '" name="outlbl2" id="outlbl2">');
        $("#myFormPipingE").append('<input type="hidden" value="' + lblReyNumOut + '" name="outlbl3" id="outlbl3">');

        $("#myFormPipingE").append('<input type="hidden" value="' + valFlowRate + '" name="inpVal1" id="inpVal1">');
        $("#myFormPipingE").append('<input type="hidden" value="' + valDiameter + '" name="inpVal2" id="inpVal2">');
        $("#myFormPipingE").append('<input type="hidden" value="' + valKinViscosity + '" name="inpVal3" id="inpVal3">');

        $("#myFormPipingE").append('<input type="hidden" value="' + valCrossSecOut + '" name="outVal1" id="outVal1">');
        $("#myFormPipingE").append('<input type="hidden" value="' + valVelOut + '" name="outVal2" id="outVal2">');
        $("#myFormPipingE").append('<input type="hidden" value="' + valReyNumOut + '" name="outVal3" id="outVal3">');

        $("#myFormPipingE").append('<input type="hidden" value="' + unitFlowRate + '" name="inpUnit1" id="inpUnit1">');
        $("#myFormPipingE").append('<input type="hidden" value="' + unitDiameter + '" name="inpUnit2" id="inpUnit2">');
        $("#myFormPipingE").append('<input type="hidden" value="' + unitKinViscosity + '" name="inpUnit3" id="inpUnit3">');

        $("#myFormPipingE").append('<input type="hidden" value="' + unitCrossSecOut + '" name="outUnit1" id="outUnit1">');
        $("#myFormPipingE").append('<input type="hidden" value="' + unitVelOut + '" name="outUnit2" id="outUnit2">');
        $("#myFormPipingE").append('<input type="hidden" value="' + unitReyNumOut + '" name="outUnit3" id="outUnit3">');

        $("#myFormPipingE").append('<input type="hidden" value="' + emailCalcPipingKinViscosityTxt + '" name="pipingEmailHeader" id="pipingEmailHeader">');
    }
}

function populatePumpEmailFormValues(ddValue) {
    $("#myFormPumpE").html('');
    $("#myFormPumpE").append('<input type="hidden" value="' + langIs + '" name="lang" id="hiddenTxt">');
    $("#myFormPumpE").append('<input type="hidden" name="typeEmail" value="pump" id="typeEmail">');

    var lblDisplacement = $("#lblpumpDisplacement").text() == undefined ? '' : $("#lblpumpDisplacement").text();
    var lblPressure = $("#lblpumpPressure").text() == undefined ? '' : $("#lblpumpPressure").text();
    var lblSpeed = $("#lblpumpSpeed").text() == undefined ? '' : $("#lblpumpSpeed").text();
    var lblMechEff = $("#lblpumpMechEff").text() == undefined ? '' : $("#lblpumpMechEff").text();
    var lblFlowRate = $("#lblpumpFlowRate").text() == undefined ? '' : $("#lblpumpFlowRate").text();
    var lblVolEff = $("#lblpumpVolEff").text() == undefined ? '' : $("#lblpumpVolEff").text();

    var lblOut = $("#pumpOutputLabel").text() == undefined ? '' : $("#pumpOutputLabel").text();

    var valDisplacement = $("#inppumpDisplacement").val() == undefined ? '' : $("#inppumpDisplacement").val();
    var valPressure = $("#inppumpPressure").val() == undefined ? '' : $("#inppumpPressure").val();
    var valSpeed = $("#inppumpSpeed").val() == undefined ? '' : $("#inppumpSpeed").val();
    var valMechEff = $("#inppumpMechEff").val() == undefined ? '' : $("#inppumpMechEff").val();
    var valFlowRate = $("#inppumpFlowRate").val() == undefined ? '' : $("#inppumpFlowRate").val();
    var valVolEff = $("#inppumpVolEff").val() == undefined ? '' : $("#inppumpVolEff").val();

    var valOut = $("#outpump").val() == undefined ? '' : $("#outpump").val();

    var unitDisplacement = $("#selpumpDisplacement option:selected").html() == undefined ? '' : $("#selpumpDisplacement option:selected").html();
    var unitPressure = $("#selpumpPressure option:selected").html() == undefined ? '' : $("#selpumpPressure option:selected").html();
    var unitSpeed = $("#selpumpSpeed option:selected").html() == undefined ? '' : $("#selpumpSpeed option:selected").html();
    var unitMechEff = $("#selpumpMechEff option:selected").html() == undefined ? '' : $("#selpumpMechEff option:selected").html();
    var unitFlowRate = $("#selpumpFlowRate option:selected").html() == undefined ? '' : $("#selpumpFlowRate option:selected").html();
    var unitVolEff = $("#selpumpVolEff option:selected").html() == undefined ? '' : $("#selpumpVolEff option:selected").html();

    var unitOut = $("#outselpump option:selected").html() == undefined ? '' : $("#outselpump option:selected").html();

    var subject = $("#subjectP").val();
    var to = $("#toP").val();
    var cc = $("#ccP").val();
    $("#myFormPumpE").append('<input type="hidden" value="' + subject + '" name="subject" id="subject">');
    $("#myFormPumpE").append('<input type="hidden" value="' + to + '" name="to" id="to">');
    $("#myFormPumpE").append('<input type="hidden" value="' + cc + '" name="cc" id="cc">');

    if (ddValue == 1) {
        //4,5,6 hidden
        $("#myFormPumpE").append('<input type="hidden" name="subtypeEmail" class="subtypeEmailPiping" value=1 id="subtypeEmail">');

        $("#myFormPumpE").append('<input type="hidden" value="' + lblDisplacement + '" name="inplbl1" id="inplbl1" >');
        $("#myFormPumpE").append('<input type="hidden" value="' + lblSpeed + '" name="inplbl2" id="inplbl2">');
        $("#myFormPumpE").append('<input type="hidden" value="' + lblVolEff + '" name="inplbl3" id="inplbl3">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inplbl4" id="inplbl4">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inplbl5" id="inplbl5">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inplbl6" id="inplbl6">');
        $("#myFormPumpE").append('<input type="hidden" value="' + lblOut + '" name="outlbl1" id="outlbl1">');

        $("#myFormPumpE").append('<input type="hidden" value="' + valDisplacement + '" name="inpVal1" id="inpVal1">');
        $("#myFormPumpE").append('<input type="hidden" value="' + valSpeed + '" name="inpVal2" id="inpVal2">');
        $("#myFormPumpE").append('<input type="hidden" value="' + valVolEff + '" name="inpVal3" id="inpVal3">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inpVal4" id="inpVal4">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inpVal5" id="inpVal5">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inpVal6" id="inpVal6">');
        $("#myFormPumpE").append('<input type="hidden" value="' + valOut + '" name="outVal1" id="outVal1">');

        $("#myFormPumpE").append('<input type="hidden" value="' + unitDisplacement + '" name="inpUnit1" id="inpUnit1">');
        $("#myFormPumpE").append('<input type="hidden" value="' + unitSpeed + '" name="inpUnit2" id="inpUnit2">');
        $("#myFormPumpE").append('<input type="hidden" value="' + unitVolEff + '" name="inpUnit3" id="inpUnit3">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inpUnit4" id="inpUnit4">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inpUnit5" id="inpUnit5">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inpUnit6" id="inpUnit6">');
        $("#myFormPumpE").append('<input type="hidden" value="' + unitOut + '" name="outUnit1" id="outUnit1">');

        $("#myFormPumpE").append('<input type="hidden" value="' + emailCalcPumpFlowRateTxt + '" name="pumpEmailHeader" id="pumpEmailHeader">');
    } else if (ddValue == 2) {
        //4,5,6 hidden
        $("#myFormPumpE").append('<input type="hidden" name="subtypeEmail" class="subtypeEmailPiping" value=2 id="subtypeEmail">');

        $("#myFormPumpE").append('<input type="hidden" value="' + lblFlowRate + '" name="inplbl1" id="inplbl1" >');
        $("#myFormPumpE").append('<input type="hidden" value="' + lblSpeed + '" name="inplbl2" id="inplbl2">');
        $("#myFormPumpE").append('<input type="hidden" value="' + lblVolEff + '" name="inplbl3" id="inplbl3">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inplbl4" id="inplbl4">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inplbl5" id="inplbl5">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inplbl6" id="inplbl6">');
        $("#myFormPumpE").append('<input type="hidden" value="' + lblOut + '" name="outlbl1" id="outlbl1">');

        $("#myFormPumpE").append('<input type="hidden" value="' + valFlowRate + '" name="inpVal1" id="inpVal1">');
        $("#myFormPumpE").append('<input type="hidden" value="' + valSpeed + '" name="inpVal2" id="inpVal2">');
        $("#myFormPumpE").append('<input type="hidden" value="' + valVolEff + '" name="inpVal3" id="inpVal3">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inpVal4" id="inpVal4">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inpVal5" id="inpVal5">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inpVal6" id="inpVal6">');
        $("#myFormPumpE").append('<input type="hidden" value="' + valOut + '" name="outVal1" id="outVal1">');

        $("#myFormPumpE").append('<input type="hidden" value="' + unitFlowRate + '" name="inpUnit1" id="inpUnit1">');
        $("#myFormPumpE").append('<input type="hidden" value="' + unitSpeed + '" name="inpUnit2" id="inpUnit2">');
        $("#myFormPumpE").append('<input type="hidden" value="' + unitVolEff + '" name="inpUnit3" id="inpUnit3">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inpUnit4" id="inpUnit4">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inpUnit5" id="inpUnit5">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inpUnit6" id="inpUnit6">');
        $("#myFormPumpE").append('<input type="hidden" value="' + unitOut + '" name="outUnit1" id="outUnit1">');

        $("#myFormPumpE").append('<input type="hidden" value="' + emailCalcPumpDisplacementTxt + '" name="pumpEmailHeader" id="pumpEmailHeader">');
    } else if (ddValue == 3) {
        //nothing hidden
        $("#myFormPumpE").append('<input type="hidden" name="subtypeEmail" class="subtypeEmailPiping" value=3 id="subtypeEmail">');

        $("#myFormPumpE").append('<input type="hidden" value="' + lblDisplacement + '" name="inplbl1" id="inplbl1" >');
        $("#myFormPumpE").append('<input type="hidden" value="' + lblPressure + '" name="inplbl2" id="inplbl2">');
        $("#myFormPumpE").append('<input type="hidden" value="' + lblSpeed + '" name="inplbl3" id="inplbl3">');
        $("#myFormPumpE").append('<input type="hidden" value="' + lblMechEff + '" name="inplbl4" id="inplbl4">');
        $("#myFormPumpE").append('<input type="hidden" value="' + lblFlowRate + '" name="inplbl5" id="inplbl5">');
        $("#myFormPumpE").append('<input type="hidden" value="' + lblVolEff + '" name="inplbl6" id="inplbl6">');
        $("#myFormPumpE").append('<input type="hidden" value="' + lblOut + '" name="outlbl1" id="outlbl1">');

        $("#myFormPumpE").append('<input type="hidden" value="' + valDisplacement + '" name="inpVal1" id="inpVal1">');
        $("#myFormPumpE").append('<input type="hidden" value="' + valPressure + '" name="inpVal2" id="inpVal2">');
        $("#myFormPumpE").append('<input type="hidden" value="' + valSpeed + '" name="inpVal3" id="inpVal3">');
        $("#myFormPumpE").append('<input type="hidden" value="' + valMechEff + '" name="inpVal4" id="inpVal4">');
        $("#myFormPumpE").append('<input type="hidden" value="' + valFlowRate + '" name="inpVal5" id="inpVal5">');
        $("#myFormPumpE").append('<input type="hidden" value="' + valVolEff + '" name="inpVal6" id="inpVal6">');
        $("#myFormPumpE").append('<input type="hidden" value="' + valOut + '" name="outVal1" id="outVal1">');

        $("#myFormPumpE").append('<input type="hidden" value="' + unitDisplacement + '" name="inpUnit1" id="inpUnit1">');
        $("#myFormPumpE").append('<input type="hidden" value="' + unitPressure + '" name="inpUnit2" id="inpUnit2">');
        $("#myFormPumpE").append('<input type="hidden" value="' + unitSpeed + '" name="inpUnit3" id="inpUnit3">');
        $("#myFormPumpE").append('<input type="hidden" value="' + unitMechEff + '" name="inpUnit4" id="inpUnit4">');
        $("#myFormPumpE").append('<input type="hidden" value="' + unitFlowRate + '" name="inpUnit5" id="inpUnit5">');
        $("#myFormPumpE").append('<input type="hidden" value="' + unitVolEff + '" name="inpUnit6" id="inpUnit6">');
        $("#myFormPumpE").append('<input type="hidden" value="' + unitOut + '" name="outUnit1" id="outUnit1">');

        $("#myFormPumpE").append('<input type="hidden" value="' + emailCalcPumpElectricMotorTxt + '" name="pumpEmailHeader" id="pumpEmailHeader">');
    } else if (ddValue == 4) {
        //hide 3,4,5,6
        $("#myFormPumpE").append('<input type="hidden" name="subtypeEmail" class="subtypeEmailPiping" value=4 id="subtypeEmail">');

        $("#myFormPumpE").append('<input type="hidden" value="' + lblVolEff + '" name="inplbl1" id="inplbl1" >');
        $("#myFormPumpE").append('<input type="hidden" value="' + lblMechEff + '" name="inplbl2" id="inplbl2">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inplbl3" id="inplbl3">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inplbl4" id="inplbl4">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inplbl5" id="inplbl5">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inplbl6" id="inplbl6">');
        $("#myFormPumpE").append('<input type="hidden" value="' + lblOut + '" name="outlbl1" id="outlbl1">');

        $("#myFormPumpE").append('<input type="hidden" value="' + valVolEff + '" name="inpVal1" id="inpVal1">');
        $("#myFormPumpE").append('<input type="hidden" value="' + valMechEff + '" name="inpVal2" id="inpVal2">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inpVal3" id="inpVal3">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inpVal4" id="inpVal4">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inpVal5" id="inpVal5">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inpVal6" id="inpVal6">');
        $("#myFormPumpE").append('<input type="hidden" value="' + valOut + '" name="outVal1" id="outVal1">');

        $("#myFormPumpE").append('<input type="hidden" value="' + unitVolEff + '" name="inpUnit1" id="inpUnit1">');
        $("#myFormPumpE").append('<input type="hidden" value="' + unitMechEff + '" name="inpUnit2" id="inpUnit2">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inpUnit3" id="inpUnit3">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inpUnit4" id="inpUnit4">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inpUnit5" id="inpUnit5">');
        $("#myFormPumpE").append('<input type="hidden" value="' + '' + '" name="inpUnit6" id="inpUnit6">');
        $("#myFormPumpE").append('<input type="hidden" value="' + unitOut + '" name="outUnit1" id="outUnit1">');

        $("#myFormPumpE").append('<input type="hidden" value="' + emailCalcPumpTotalEffTxt + '" name="pumpEmailHeader" id="pumpEmailHeader">');
    }
}

function populatePumpEmailValue(ddValue) {
    $("#pInp3").show();
    $("#pInp4").show();
    $("#pInp5").show();
    $("#pInp6").show();
    if (ddValue == 1) {
        //hide 4,5,6 input 
        $("#pInp4").hide();
        $("#pInp5").hide();
        $("#pInp6").hide();
        $("#pInplbl1").text($("#lblpumpDisplacement").text() == undefined ? '' : $("#lblpumpDisplacement").text());
        $("#pInplbl2").text($("#lblpumpSpeed").text() == undefined ? '' : $("#lblpumpSpeed").text());
        $("#pInplbl3").text($("#lblpumpVolEff").text() == undefined ? '' : $("#lblpumpVolEff").text());
        $("#pOutlbl1").text($("#pumpOutputLabel").text() == undefined ? '' : $("#pumpOutputLabel").text());

        $("#pInpVal1").text($("#inppumpDisplacement").val() == undefined ? '' : $("#inppumpDisplacement").val());
        $("#pInpVal2").text($("#inppumpSpeed").val() == undefined ? '' : $("#inppumpSpeed").val());
        $("#pInpVal3").text($("#inppumpVolEff").val() == undefined ? '' : $("#inppumpVolEff").val());
        $("#pOutVal1").text($("#outpump").val() == undefined ? '' : $("#outpump").val());

        $("#pInpUnit1").text($("#selpumpDisplacement option:selected").html() == undefined ? '' : $("#selpumpDisplacement option:selected").html());
        $("#pInpUnit2").text($("#selpumpSpeed option:selected").html() == undefined ? '' : $("#selpumpSpeed option:selected").html());
        $("#pInpUnit3").text($("#selpumpVolEff option:selected").html() == undefined ? '' : $("#selpumpVolEff option:selected").html());
        $("#pOutUnit1").text($("#outselpump option:selected").html() == undefined ? '' : $("#outselpump option:selected").html());

        $("#pumpEmailHeader").text(emailCalcPumpFlowRateTxt);
    } else if (ddValue == 2) {
        $("#pInp4").hide();
        $("#pInp5").hide();
        $("#pInp6").hide();
        $("#pInplbl1").text($("#lblpumpFlowRate").text() == undefined ? '' : $("#lblpumpFlowRate").text());
        $("#pInplbl2").text($("#lblpumpSpeed").text() == undefined ? '' : $("#lblpumpSpeed").text());
        $("#pInplbl3").text($("#lblpumpVolEff").text() == undefined ? '' : $("#lblpumpVolEff").text());
        $("#pOutlbl1").text($("#pumpOutputLabel").text() == undefined ? '' : $("#pumpOutputLabel").text());

        $("#pInpVal1").text($("#inppumpFlowRate").val() == undefined ? '' : $("#inppumpFlowRate").val());
        $("#pInpVal2").text($("#inppumpSpeed").val() == undefined ? '' : $("#inppumpSpeed").val());
        $("#pInpVal3").text($("#inppumpVolEff").val() == undefined ? '' : $("#inppumpVolEff").val());
        $("#pOutVal1").text($("#outpump").val() == undefined ? '' : $("#outpump").val());

        $("#pInpUnit1").text($("#selpumpFlowRate option:selected").html() == undefined ? '' : $("#selpumpFlowRate option:selected").html());
        $("#pInpUnit2").text($("#selpumpSpeed option:selected").html() == undefined ? '' : $("#selpumpSpeed option:selected").html());
        $("#pInpUnit3").text($("#selpumpVolEff option:selected").html() == undefined ? '' : $("#selpumpVolEff option:selected").html());
        $("#pOutUnit1").text($("#outselpump option:selected").html() == undefined ? '' : $("#outselpump option:selected").html());

        $("#pumpEmailHeader").text(emailCalcPumpDisplacementTxt);
    } else if (ddValue == 3) {
        $("#pInplbl1").text($("#lblpumpDisplacement").text() == undefined ? '' : $("#lblpumpDisplacement").text());
        $("#pInplbl2").text($("#lblpumpPressure").text() == undefined ? '' : $("#lblpumpPressure").text());
        $("#pInplbl3").text($("#lblpumpSpeed").text() == undefined ? '' : $("#lblpumpSpeed").text());
        $("#pInplbl4").text($("#lblpumpMechEff").text() == undefined ? '' : $("#lblpumpMechEff").text());
        $("#pInplbl5").text($("#lblpumpFlowRate").text() == undefined ? '' : $("#lblpumpFlowRate").text());
        $("#pInplbl6").text($("#lblpumpVolEff").text() == undefined ? '' : $("#lblpumpVolEff").text());
        $("#pOutlbl1").text($("#pumpOutputLabel").text() == undefined ? '' : $("#pumpOutputLabel").text());

        $("#pInpVal1").text($("#inppumpDisplacement").val() == undefined ? '' : $("#inppumpDisplacement").val());
        $("#pInpVal2").text($("#inppumpPressure").val() == undefined ? '' : $("#inppumpPressure").val());
        $("#pInpVal3").text($("#inppumpSpeed").val() == undefined ? '' : $("#inppumpSpeed").val());
        $("#pInpVal4").text($("#inppumpMechEff").val() == undefined ? '' : $("#inppumpMechEff").val());
        $("#pInpVal5").text($("#inppumpFlowRate").val() == undefined ? '' : $("#inppumpFlowRate").val());
        $("#pInpVal6").text($("#inppumpVolEff").val() == undefined ? '' : $("#inppumpVolEff").val());
        $("#pOutVal1").text($("#outpump").val() == undefined ? '' : $("#outpump").val());

        $("#pInpUnit1").text($("#selpumpDisplacement option:selected").html() == undefined ? '' : $("#selpumpDisplacement option:selected").html());
        $("#pInpUnit2").text($("#selpumpPressure option:selected").html() == undefined ? '' : $("#selpumpPressure option:selected").html());
        $("#pInpUnit3").text($("#selpumpSpeed option:selected").html() == undefined ? '' : $("#selpumpSpeed option:selected").html());
        $("#pInpUnit4").text($("#selpumpMechEff option:selected").html() == undefined ? '' : $("#selpumpMechEff option:selected").html());
        $("#pInpUnit5").text($("#selpumpFlowRate option:selected").html() == undefined ? '' : $("#selpumpFlowRate option:selected").html());
        $("#pInpUnit6").text($("#selpumpVolEff option:selected").html() == undefined ? '' : $("#selpumpVolEff option:selected").html());
        $("#pOutUnit1").text($("#outselpump option:selected").html() == undefined ? '' : $("#outselpump option:selected").html());

        $("#pumpEmailHeader").text(emailCalcPumpElectricMotorTxt);
    } else if (ddValue == 4) {
        //3,4,5,6 need to be hidden
        $("#pInp3").hide();
        $("#pInp4").hide();
        $("#pInp5").hide();
        $("#pInp6").hide();
        $("#pInplbl1").text($("#lblpumpVolEff").text() == undefined ? '' : $("#lblpumpVolEff").text());
        $("#pInplbl2").text($("#lblpumpMechEff").text() == undefined ? '' : $("#lblpumpMechEff").text());
        $("#pOutlbl1").text($("#pumpOutputLabel").text() == undefined ? '' : $("#pumpOutputLabel").text());

        $("#pInpVal1").text($("#inppumpVolEff").val() == undefined ? '' : $("#inppumpVolEff").val());
        $("#pInpVal2").text($("#inppumpMechEff").val() == undefined ? '' : $("#inppumpMechEff").val());
        $("#pOutVal1").text($("#outpump").val() == undefined ? '' : $("#outpump").val());

        $("#pInpUnit1").text($("#selpumpVolEff option:selected").html() == undefined ? '' : $("#selpumpVolEff option:selected").html());
        $("#pInpUnit2").text($("#selpumpMechEff option:selected").html() == undefined ? '' : $("#selpumpMechEff option:selected").html());
        $("#pOutUnit1").text($("#outselpump option:selected").html() == undefined ? '' : $("#outselpump option:selected").html());

        $("#pumpEmailHeader").text(emailCalcPumpTotalEffTxt);
    }
}

function populateMotorEmailFormValues(ddValue) {
    $("#myFormMotorE").html('');
    $("#myFormMotorE").append('<input type="hidden" value="' + langIs + '" name="lang" id="hiddenTxt">');
    $("#myFormMotorE").append('<input type="hidden" name="typeEmail" value="motor" id="typeEmail">');
    var lblDisp = $("#lblmotDisplacement").text() == undefined ? '' : $("#lblmotDisplacement").text();
    var lblSpeed = $("#lblmotSpeed").text() == undefined ? '' : $("#lblmotSpeed").text();
    var lblVolEff = $("#lblmotVolEff").text() == undefined ? '' : $("#lblmotVolEff").text();
    var lblPower = $("#lblmotPower").text() == undefined ? '' : $("#lblmotPower").text();
    var lblPressure = $("#lblmotPressure").text() == undefined ? '' : $("#lblmotPressure").text();
    var lblMechEff = $("#lblmotMechEff").text() == undefined ? '' : $("#lblmotMechEff").text();
    var lblFlowRate = $("#lblmotFlowRate").text() == undefined ? '' : $("#lblmotFlowRate").text();
    var lblTorque = $("#lblmotTorque").text() == undefined ? '' : $("#lblmotTorque").text();

    var lblOut = $("#motOutputLabel").text() == undefined ? '' : $("#motOutputLabel").text();

    var valDisp = $("#inpmotDisplacement").val() == undefined ? '' : $("#inpmotDisplacement").val();
    var valSpeed = $("#inpmotSpeed").val() == undefined ? '' : $("#inpmotSpeed").val();
    var valVolEff = $("#inpmotVolEff").val() == undefined ? '' : $("#inpmotVolEff").val();
    var valPower = $("#inpmotPower").val() == undefined ? '' : $("#inpmotPower").val();
    var valPressure = $("#inpmotPressure").val() == undefined ? '' : $("#inpmotPressure").val();
    var valMechEff = $("#inpmotMechEff").val() == undefined ? '' : $("#inpmotMechEff").val();
    var valFlowRate = $("#inpmotFlowRate").val() == undefined ? '' : $("#inpmotFlowRate").val();
    var valTorque = $("#inpmotTorque").val() == undefined ? '' : $("#inpmotTorque").val();

    var valOut = $("#outmot").val() == undefined ? '' : $("#outmot").val();

    var unitDisp = $("#selmotDisplacement option:selected").html() == undefined ? '' : $("#selmotDisplacement option:selected").html();
    var unitSpeed = $("#selmotSpeed option:selected").html() == undefined ? '' : $("#selmotSpeed option:selected").html();
    var unitVolEff = $("#selmotVolEff option:selected").html() == undefined ? '' : $("#selmotVolEff option:selected").html();
    var unitPower = $("#selmotPower option:selected").html() == undefined ? '' : $("#selmotPower option:selected").html();
    var unitPressure = $("#selmotPressure option:selected").html() == undefined ? '' : $("#selmotPressure option:selected").html();
    var unitMechEff = $("#selmotMechEff option:selected").html() == undefined ? '' : $("#selmotMechEff option:selected").html();
    var unitFlowRate = $("#selmotFlowRate option:selected").html() == undefined ? '' : $("#selmotFlowRate option:selected").html();
    var unitTorque = $("#selmotTorque option:selected").html() == undefined ? '' : $("#selmotTorque option:selected").html();

    var unitOut = $("#outselmot option:selected").html() == undefined ? '' : $("#outselmot option:selected").html();

    var subject = $("#subjectM").val();
    var to = $("#toM").val();
    var cc = $("#ccM").val();
    $("#myFormMotorE").append('<input type="hidden" value="' + subject + '" name="subject" id="subject">');
    $("#myFormMotorE").append('<input type="hidden" value="' + to + '" name="to" id="to">');
    $("#myFormMotorE").append('<input type="hidden" value="' + cc + '" name="cc" id="cc">');

    if (ddValue == 1) {
        $("#myFormMotorE").append('<input type="hidden" name="subtypeEmail" class="subtypeEmailPiping" value=1 id="subtypeEmail">');

        $("#myFormMotorE").append('<input type="hidden" value="' + lblDisp + '" name="inplbl1" id="inplbl1" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblSpeed + '" name="inplbl2" id="inplbl2">');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblVolEff + '" name="inplbl3" id="inplbl3">');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblPower + '" name="inplbl4" id="inplbl4">');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblPressure + '" name="inplbl5" id="inplbl5">');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblMechEff + '" name="inplbl6" id="inplbl6">');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblOut + '" name="outlbl1" id="outlbl1">');

        $("#myFormMotorE").append('<input type="hidden" value="' + valDisp + '" name="inpVal1" id="inpVal1">');
        $("#myFormMotorE").append('<input type="hidden" value="' + valSpeed + '" name="inpVal2" id="inpVal2">');
        $("#myFormMotorE").append('<input type="hidden" value="' + valVolEff + '" name="inpVal3" id="inpVal3">');
        $("#myFormMotorE").append('<input type="hidden" value="' + valPower + '" name="inpVal4" id="inpVal4">');
        $("#myFormMotorE").append('<input type="hidden" value="' + valPressure + '" name="inpVal5" id="inpVal5">');
        $("#myFormMotorE").append('<input type="hidden" value="' + valMechEff + '" name="inpVal6" id="inpVal6">');
        $("#myFormMotorE").append('<input type="hidden" value="' + valOut + '" name="outVal1" id="outVal1">');

        $("#myFormMotorE").append('<input type="hidden" value="' + unitDisp + '" name="inpUnit1" id="inpUnit1">');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitSpeed + '" name="inpUnit2" id="inpUnit2">');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitVolEff + '" name="inpUnit3" id="inpUnit3">');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitPower + '" name="inpUnit4" id="inpUnit4">');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitPressure + '" name="inpUnit5" id="inpUnit5">');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitMechEff + '" name="inpUnit6" id="inpUnit6">');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitOut + '" name="outUnit1" id="outUnit1">');

        $("#myFormMotorE").append('<input type="hidden" value="' + emailCalcMotorFlowRateTxt + '" name="motorEmailHeader" id="motorEmailHeader">');

    } else if (ddValue == 2) {
        $("#myFormMotorE").append('<input type="hidden" name="subtypeEmail" class="subtypeEmailPiping" value=2 id="subtypeEmail">');

        $("#myFormMotorE").append('<input type="hidden" value="' + lblPower + '" name="inplbl1" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblFlowRate + '" name="inplbl2" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblVolEff + '" name="inplbl3" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblMechEff + '" name="inplbl4" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblTorque + '" name="inplbl5" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblDisp + '" name="inplbl6" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblOut + '" name="outlbl1" >');

        $("#myFormMotorE").append('<input type="hidden" value="' + valPower + '" name="inpVal1" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valFlowRate + '" name="inpVal2" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valVolEff + '" name="inpVal3" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valMechEff + '" name="inpVal4" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valTorque + '" name="inpVal5" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valDisp + '" name="inpVal6" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valOut + '" name="outVal1" >');

        $("#myFormMotorE").append('<input type="hidden" value="' + unitPower + '" name="inpUnit1" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitFlowRate + '" name="inpUnit2" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitVolEff + '" name="inpUnit3" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitMechEff + '" name="inpUnit4" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitTorque + '" name="inpUnit5" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitDisp + '" name="inpUnit6" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitOut + '" name="outUnit1" >');

        $("#myFormMotorE").append('<input type="hidden" value="' + emailCalcMotorPressureTxt + '" name="motorEmailHeader" >');

    } else if (ddValue == 3) {
        $("#myFormMotorE").append('<input type="hidden" name="subtypeEmail" class="subtypeEmailPiping" value=3 id="subtypeEmail">');

        $("#myFormMotorE").append('<input type="hidden" value="' + lblTorque + '" name="inplbl1" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblMechEff + '" name="inplbl2" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblPressure + '" name="inplbl3" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblFlowRate + '" name="inplbl4" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblVolEff + '" name="inplbl5" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblSpeed + '" name="inplbl6" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblOut + '" name="outlbl1" >');

        $("#myFormMotorE").append('<input type="hidden" value="' + valTorque + '" name="inpVal1" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valMechEff + '" name="inpVal2" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valPressure + '" name="inpVal3" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valFlowRate + '" name="inpVal4" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valVolEff + '" name="inpVal5" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valSpeed + '" name="inpVal6" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valOut + '" name="outVal1" >');

        $("#myFormMotorE").append('<input type="hidden" value="' + unitTorque + '" name="inpUnit1" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitMechEff + '" name="inpUnit2" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitPressure + '" name="inpUnit3" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitFlowRate + '" name="inpUnit4" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitVolEff + '" name="inpUnit5" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitSpeed + '" name="inpUnit6" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitOut + '" name="outUnit1" >');

        $("#myFormMotorE").append('<input type="hidden" value="' + emailCalcMotorDisplacementTxt + '" name="motorEmailHeader" >');

    } else if (ddValue == 4) {
        $("#myFormMotorE").append('<input type="hidden" name="subtypeEmail" class="subtypeEmailPiping" value=4 id="subtypeEmail">');

        $("#myFormMotorE").append('<input type="hidden" value="' + lblFlowRate + '" name="inplbl1" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblVolEff + '" name="inplbl2" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblDisp + '" name="inplbl3" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblPower + '" name="inplbl4" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblTorque + '" name="inplbl5" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + '' + '" name="inplbl6" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblOut + '" name="outlbl1" >');

        $("#myFormMotorE").append('<input type="hidden" value="' + valFlowRate + '" name="inpVal1" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valVolEff + '" name="inpVal2" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valDisp + '" name="inpVal3" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valPower + '" name="inpVal4" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valTorque + '" name="inpVal5" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + '' + '" name="inpVal6" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valOut + '" name="outVal1" >');

        $("#myFormMotorE").append('<input type="hidden" value="' + unitFlowRate + '" name="inpUnit1" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitVolEff + '" name="inpUnit2" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitDisp + '" name="inpUnit3" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitPower + '" name="inpUnit4" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitTorque + '" name="inpUnit5" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + '' + '" name="inpUnit6" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitOut + '" name="outUnit1" >');

        $("#myFormMotorE").append('<input type="hidden" value="' + emailCalcMotorSpeedTxt + '" name="motorEmailHeader" >');

    } else if (ddValue == 5) {

        $("#myFormMotorE").append('<input type="hidden" name="subtypeEmail" class="subtypeEmailPiping" value=5 id="subtypeEmail">');

        $("#myFormMotorE").append('<input type="hidden" value="' + lblMechEff + '" name="inplbl1" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblDisp + '" name="inplbl2" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblPressure + '" name="inplbl3" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblPower + '" name="inplbl4" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblSpeed + '" name="inplbl5" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + '' + '" name="inplbl6" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblOut + '" name="outlbl1" >');

        $("#myFormMotorE").append('<input type="hidden" value="' + valMechEff + '" name="inpVal1" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valDisp + '" name="inpVal2" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valPressure + '" name="inpVal3" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valPower + '" name="inpVal4" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valSpeed + '" name="inpVal5" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + '' + '" name="inpVal6" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valOut + '" name="outVal1" >');

        $("#myFormMotorE").append('<input type="hidden" value="' + unitMechEff + '" name="inpUnit1" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitDisp + '" name="inpUnit2" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitPressure + '" name="inpUnit3" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitPower + '" name="inpUnit4" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitSpeed + '" name="inpUnit5" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + '' + '" name="inpUnit6" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitOut + '" name="outUnit1" >');

        $("#myFormMotorE").append('<input type="hidden" value="' + emailCalcMotorTorqueTxt + '" name="motorEmailHeader" >');

    } else if (ddValue == 6) {
        $("#myFormMotorE").append('<input type="hidden" name="subtypeEmail" class="subtypeEmailPiping" value=6 id="subtypeEmail">');


        $("#myFormMotorE").append('<input type="hidden" value="' + lblTorque + '" name="inplbl1" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblSpeed + '" name="inplbl2" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblFlowRate + '" name="inplbl3" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblPressure + '" name="inplbl4" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblVolEff + '" name="inplbl5" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblMechEff + '" name="inplbl6" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + lblOut + '" name="outlbl1" >');

        $("#myFormMotorE").append('<input type="hidden" value="' + valTorque + '" name="inpVal1" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valSpeed + '" name="inpVal2" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valFlowRate + '" name="inpVal3" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valPressure + '" name="inpVal4" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valVolEff + '" name="inpVal5" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valMechEff + '" name="inpVal6" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + valOut + '" name="outVal1" >');

        $("#myFormMotorE").append('<input type="hidden" value="' + unitTorque + '" name="inpUnit1" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitSpeed + '" name="inpUnit2" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitFlowRate + '" name="inpUnit3" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitPressure + '" name="inpUnit4" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitVolEff + '" name="inpUnit5" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitMechEff + '" name="inpUnit6" >');
        $("#myFormMotorE").append('<input type="hidden" value="' + unitOut + '" name="outUnit1" >');

        $("#myFormMotorE").append('<input type="hidden" value="' + emailCalcMotorPowerTxt + '" name="motorEmailHeader" >');
    }
}

function populateMotorEmailValues(ddValue) {
    if (ddValue == 1) {
        $("#mInplbl1").text($("#lblmotDisplacement").text() == undefined ? '' : $("#lblmotDisplacement").text());
        $("#mInplbl2").text($("#lblmotSpeed").text() == undefined ? '' : $("#lblmotSpeed").text());
        $("#mInplbl3").text($("#lblmotVolEff").text() == undefined ? '' : $("#lblmotVolEff").text());
        $("#mInplbl4").text($("#lblmotPower").text() == undefined ? '' : $("#lblmotPower").text());
        $("#mInplbl5").text($("#lblmotPressure").text() == undefined ? '' : $("#lblmotPressure").text());
        $("#mInplbl6").text($("#lblmotMechEff").text() == undefined ? '' : $("#lblmotMechEff").text());
        $("#mOutlbl1").text($("#motOutputLabel").text() == undefined ? '' : $("#motOutputLabel").text());

        $("#mInpVal1").text($("#inpmotDisplacement").val() == undefined ? '' : $("#inpmotDisplacement").val());
        $("#mInpVal2").text($("#inpmotSpeed").val() == undefined ? '' : $("#inpmotSpeed").val());
        $("#mInpVal3").text($("#inpmotVolEff").val() == undefined ? '' : $("#inpmotVolEff").val());
        $("#mInpVal4").text($("#inpmotPower").val() == undefined ? '' : $("#inpmotPower").val());
        $("#mInpVal5").text($("#inpmotPressure").val() == undefined ? '' : $("#inpmotPressure").val());
        $("#mInpVal6").text($("#inpmotMechEff").val() == undefined ? '' : $("#inpmotMechEff").val());
        $("#mOutVal1").text($("#outmot").val() == undefined ? '' : $("#outmot").val());

        $("#mInpUnit1").text($("#selmotDisplacement option:selected").html() == undefined ? '' : $("#selmotDisplacement option:selected").html());
        $("#mInpUnit2").text($("#selmotSpeed option:selected").html() == undefined ? '' : $("#selmotSpeed option:selected").html());
        $("#mInpUnit3").text($("#selmotVolEff option:selected").html() == undefined ? '' : $("#selmotVolEff option:selected").html());
        $("#mInpUnit4").text($("#selmotPower option:selected").html() == undefined ? '' : $("#selmotPower option:selected").html());
        $("#mInpUnit5").text($("#selmotPressure option:selected").html() == undefined ? '' : $("#selmotPressure option:selected").html());
        $("#mInpUnit6").text($("#selmotMechEff option:selected").html() == undefined ? '' : $("#selmotMechEff option:selected").html());
        $("#mOutUnit1").text($("#outselmot option:selected").html() == undefined ? '' : $("#outselmot option:selected").html());

        $("#motorEmailHeader").text(emailCalcMotorFlowRateTxt);
    } else if (ddValue == 2) {
        $("#mInplbl1").text($("#lblmotPower").text() == undefined ? '' : $("#lblmotPower").text());
        $("#mInplbl2").text($("#lblmotFlowRate").text() == undefined ? '' : $("#lblmotFlowRate").text());
        $("#mInplbl3").text($("#lblmotVolEff").text() == undefined ? '' : $("#lblmotVolEff").text());
        $("#mInplbl4").text($("#lblmotMechEff").text() == undefined ? '' : $("#lblmotMechEff").text());
        $("#mInplbl5").text($("#lblmotTorque").text() == undefined ? '' : $("#lblmotTorque").text());
        $("#mInplbl6").text($("#lblmotDisplacement").text() == undefined ? '' : $("#lblmotDisplacement").text());
        $("#mOutlbl1").text($("#motOutputLabel").text() == undefined ? '' : $("#motOutputLabel").text());

        $("#mInpVal1").text($("#inpmotPower").val() == undefined ? '' : $("#inpmotPower").val());
        $("#mInpVal2").text($("#inpmotFlowRate").val() == undefined ? '' : $("#inpmotFlowRate").val());
        $("#mInpVal3").text($("#inpmotVolEff").val() == undefined ? '' : $("#inpmotVolEff").val());
        $("#mInpVal4").text($("#inpmotMechEff").val() == undefined ? '' : $("#inpmotMechEff").val());
        $("#mInpVal5").text($("#inpmotTorque").val() == undefined ? '' : $("#inpmotTorque").val());
        $("#mInpVal6").text($("#inpmotDisplacement").val() == undefined ? '' : $("#inpmotDisplacement").val());
        $("#mOutVal1").text($("#outmot").val() == undefined ? '' : $("#outmot").val());

        $("#mInpUnit1").text($("#selmotPower option:selected").html() == undefined ? '' : $("#selmotPower option:selected").html());
        $("#mInpUnit2").text($("#selmotFlowRate option:selected").html() == undefined ? '' : $("#selmotFlowRate option:selected").html());
        $("#mInpUnit3").text($("#selmotVolEff option:selected").html() == undefined ? '' : $("#selmotVolEff option:selected").html());
        $("#mInpUnit4").text($("#selmotMechEff option:selected").html() == undefined ? '' : $("#selmotMechEff option:selected").html());
        $("#mInpUnit5").text($("#selmotTorque option:selected").html() == undefined ? '' : $("#selmotTorque option:selected").html());
        $("#mInpUnit6").text($("#selmotDisplacement option:selected").html() == undefined ? '' : $("#selmotDisplacement option:selected").html());
        $("#mOutUnit1").text($("#outselmot option:selected").html() == undefined ? '' : $("#outselmot option:selected").html());

        $("#motorEmailHeader").text(emailCalcMotorPressureTxt);
    } else if (ddValue == 3) {
        $("#mInplbl1").text($("#lblmotTorque").text() == undefined ? '' : $("#lblmotTorque").text());
        $("#mInplbl2").text($("#lblmotMechEff").text() == undefined ? '' : $("#lblmotMechEff").text());
        $("#mInplbl3").text($("#lblmotPressure").text() == undefined ? '' : $("#lblmotPressure").text());
        $("#mInplbl4").text($("#lblmotFlowRate").text() == undefined ? '' : $("#lblmotFlowRate").text());
        $("#mInplbl5").text($("#lblmotVolEff").text() == undefined ? '' : $("#lblmotVolEff").text());
        $("#mInplbl6").text($("#lblmotSpeed").text() == undefined ? '' : $("#lblmotSpeed").text());
        $("#mOutlbl1").text($("#motOutputLabel").text() == undefined ? '' : $("#motOutputLabel").text());

        $("#mInpVal1").text($("#inpmotTorque").val() == undefined ? '' : $("#inpmotTorque").val());
        $("#mInpVal2").text($("#inpmotMechEff").val() == undefined ? '' : $("#inpmotMechEff").val());
        $("#mInpVal3").text($("#inpmotPressure").val() == undefined ? '' : $("#inpmotPressure").val());
        $("#mInpVal4").text($("#inpmotFlowRate").val() == undefined ? '' : $("#inpmotFlowRate").val());
        $("#mInpVal5").text($("#inpmotVolEff").val() == undefined ? '' : $("#inpmotVolEff").val());
        $("#mInpVal6").text($("#inpmotSpeed").val() == undefined ? '' : $("#inpmotSpeed").val());
        $("#mOutVal1").text($("#outmot").val() == undefined ? '' : $("#outmot").val());

        $("#mInpUnit1").text($("#selmotTorque option:selected").html() == undefined ? '' : $("#selmotTorque option:selected").html());
        $("#mInpUnit2").text($("#selmotMechEff option:selected").html() == undefined ? '' : $("#selmotMechEff option:selected").html());
        $("#mInpUnit3").text($("#selmotPressure option:selected").html() == undefined ? '' : $("#selmotPressure option:selected").html());
        $("#mInpUnit4").text($("#selmotFlowRate option:selected").html() == undefined ? '' : $("#selmotFlowRate option:selected").html());
        $("#mInpUnit5").text($("#selmotVolEff option:selected").html() == undefined ? '' : $("#selmotVolEff option:selected").html());
        $("#mInpUnit6").text($("#selmotSpeed option:selected").html() == undefined ? '' : $("#selmotSpeed option:selected").html());
        $("#mOutUnit1").text($("#outselmot option:selected").html() == undefined ? '' : $("#outselmot option:selected").html());

        $("#motorEmailHeader").text(emailCalcMotorDisplacementTxt);
    } else if (ddValue == 4) {
        //hide the 6 the input here first

        $("#mInp6").hide();

        $("#mInplbl1").text($("#lblmotFlowRate").text() == undefined ? '' : $("#lblmotFlowRate").text());
        $("#mInplbl2").text($("#lblmotVolEff").text() == undefined ? '' : $("#lblmotVolEff").text());
        $("#mInplbl3").text($("#lblmotDisplacement").text() == undefined ? '' : $("#lblmotDisplacement").text());
        $("#mInplbl4").text($("#lblmotPower").text() == undefined ? '' : $("#lblmotPower").text());
        $("#mInplbl5").text($("#lblmotTorque").text() == undefined ? '' : $("#lblmotTorque").text());
        $("#mOutlbl1").text($("#motOutputLabel").text() == undefined ? '' : $("#motOutputLabel").text());

        $("#mInpVal1").text($("#inpmotFlowRate").val() == undefined ? '' : $("#inpmotFlowRate").val());
        $("#mInpVal2").text($("#inpmotVolEff").val() == undefined ? '' : $("#inpmotVolEff").val());
        $("#mInpVal3").text($("#inpmotDisplacement").val() == undefined ? '' : $("#inpmotDisplacement").val());
        $("#mInpVal4").text($("#inpmotPower").val() == undefined ? '' : $("#inpmotPower").val());
        $("#mInpVal5").text($("#inpmotTorque").val() == undefined ? '' : $("#inpmotTorque").val());
        $("#mOutVal1").text($("#outmot").val() == undefined ? '' : $("#outmot").val());

        $("#mInpUnit1").text($("#selmotFlowRate option:selected").html() == undefined ? '' : $("#selmotFlowRate option:selected").html());
        $("#mInpUnit2").text($("#selmotVolEff option:selected").html() == undefined ? '' : $("#selmotVolEff option:selected").html());
        $("#mInpUnit3").text($("#selmotDisplacement option:selected").html() == undefined ? '' : $("#selmotDisplacement option:selected").html());
        $("#mInpUnit4").text($("#selmotPower option:selected").html() == undefined ? '' : $("#selmotPower option:selected").html());
        $("#mInpUnit5").text($("#selmotTorque option:selected").html() == undefined ? '' : $("#selmotTorque option:selected").html());
        $("#mOutUnit1").text($("#outselmot option:selected").html() == undefined ? '' : $("#outselmot option:selected").html());

        $("#motorEmailHeader").text(emailCalcMotorSpeedTxt);
    } else if (ddValue == 5) {
        $("#mInp6").hide();

        $("#mInplbl1").text($("#lblmotMechEff").text() == undefined ? '' : $("#lblmotMechEff").text());
        $("#mInplbl2").text($("#lblmotDisplacement").text() == undefined ? '' : $("#lblmotDisplacement").text());
        $("#mInplbl3").text($("#lblmotPressure").text() == undefined ? '' : $("#lblmotPressure").text());
        $("#mInplbl4").text($("#lblmotPower").text() == undefined ? '' : $("#lblmotPower").text());
        $("#mInplbl5").text($("#lblmotSpeed").text() == undefined ? '' : $("#lblmotSpeed").text());
        $("#mOutlbl1").text($("#motOutputLabel").text() == undefined ? '' : $("#motOutputLabel").text());

        $("#mInpVal1").text($("#inpmotMechEff").val() == undefined ? '' : $("#inpmotMechEff").val());
        $("#mInpVal2").text($("#inpmotDisplacement").val() == undefined ? '' : $("#inpmotDisplacement").val());
        $("#mInpVal3").text($("#inpmotPressure").val() == undefined ? '' : $("#inpmotPressure").val());
        $("#mInpVal4").text($("#inpmotPower").val() == undefined ? '' : $("#inpmotPower").val());
        $("#mInpVal5").text($("#inpmotSpeed").val() == undefined ? '' : $("#inpmotSpeed").val());
        $("#mOutVal1").text($("#outmot").val() == undefined ? '' : $("#outmot").val());

        $("#mInpUnit1").text($("#selmotMechEff option:selected").html() == undefined ? '' : $("#selmotMechEff option:selected").html());
        $("#mInpUnit2").text($("#selmotDisplacement option:selected").html() == undefined ? '' : $("#selmotDisplacement option:selected").html());
        $("#mInpUnit3").text($("#selmotPressure option:selected").html() == undefined ? '' : $("#selmotPressure option:selected").html());
        $("#mInpUnit4").text($("#selmotPower option:selected").html() == undefined ? '' : $("#selmotPower option:selected").html());
        $("#mInpUnit5").text($("#selmotSpeed option:selected").html() == undefined ? '' : $("#selmotSpeed option:selected").html());
        $("#mOutUnit1").text($("#outselmot option:selected").html() == undefined ? '' : $("#outselmot option:selected").html());

        $("#motorEmailHeader").text(emailCalcMotorTorqueTxt);
    } else if (ddValue == 6) {

        $("#mInplbl1").text($("#lblmotTorque").text() == undefined ? '' : $("#lblmotTorque").text());
        $("#mInplbl2").text($("#lblmotSpeed").text() == undefined ? '' : $("#lblmotSpeed").text());
        $("#mInplbl3").text($("#lblmotFlowRate").text() == undefined ? '' : $("#lblmotFlowRate").text());
        $("#mInplbl4").text($("#lblmotPressure").text() == undefined ? '' : $("#lblmotPressure").text());
        $("#mInplbl5").text($("#lblmotVolEff").text() == undefined ? '' : $("#lblmotVolEff").text());
        $("#mInplbl6").text($("#lblmotMechEff").text() == undefined ? '' : $("#lblmotMechEff").text());
        $("#mOutlbl1").text($("#motOutputLabel").text() == undefined ? '' : $("#motOutputLabel").text());

        $("#mInpVal1").text($("#inpmotTorque").val() == undefined ? '' : $("#inpmotTorque").val());
        $("#mInpVal2").text($("#inpmotSpeed").val() == undefined ? '' : $("#inpmotSpeed").val());
        $("#mInpVal3").text($("#inpmotFlowRate").val() == undefined ? '' : $("#inpmotFlowRate").val());
        $("#mInpVal4").text($("#inpmotPressure").val() == undefined ? '' : $("#inpmotPressure").val());
        $("#mInpVal5").text($("#inpmotVolEff").val() == undefined ? '' : $("#inpmotVolEff").val());
        $("#mInpVal6").text($("#inpmotMechEff").val() == undefined ? '' : $("#inpmotMechEff").val());
        $("#mOutVal1").text($("#outmot").val() == undefined ? '' : $("#outmot").val());

        $("#mInpUnit1").text($("#selmotTorque option:selected").html() == undefined ? '' : $("#selmotTorque option:selected").html());
        $("#mInpUnit2").text($("#selmotSpeed option:selected").html() == undefined ? '' : $("#selmotSpeed option:selected").html());
        $("#mInpUnit3").text($("#selmotFlowRate option:selected").html() == undefined ? '' : $("#selmotFlowRate option:selected").html());
        $("#mInpUnit4").text($("#selmotPressure option:selected").html() == undefined ? '' : $("#selmotPressure option:selected").html());
        $("#mInpUnit5").text($("#selmotVolEff option:selected").html() == undefined ? '' : $("#selmotVolEff option:selected").html());
        $("#mInpUnit6").text($("#selmotMechEff option:selected").html() == undefined ? '' : $("#selmotMechEff option:selected").html());
        $("#mOutUnit1").text($("#outselmot option:selected").html() == undefined ? '' : $("#outselmot option:selected").html());

        $("#motorEmailHeader").text(emailCalcMotorPowerTxt);
    }
}
//for cross mark
$(document).ready(function() {
    $(".close_email").click(function() {
        if (currentScreen == 1) {
            $("#cancel").click();
        } else if (currentScreen == 2) {
            $(".outerEmailMotor").slideToggle(600);
        } else if (currentScreen == 3) {
            $(".outerEmailPump").slideToggle(600);
        } else if (currentScreen == 4) {
            $(".outerEmailPD").slideToggle(600);
        } else if (currentScreen == 5) {
            $(".outerEmailPiping").slideToggle(600);
        }
    });
});

function cancelEmailNew(type) {
    /*console.log("isEmailValidate",isEmailRequestInProcess);*/
    if (isEmailRequestInProcess == true) {

    } else {
        if (type == "motor") {
            $(".outerEmailMotor").slideToggle(600);
        } else if (type == "pump") {
            $(".outerEmailPump").slideToggle(600);
        } else if (type == "pressureDrop") {
            $(".outerEmailPD").slideToggle(600);
        } else if (type == "piping") {
            $(".outerEmailPiping").slideToggle(600);
        }
    }
}

function validateEmailNew(type) {
    var flagForEmail = true;
    if (type == "motor") {
        if ($('#toM').val() == "") {
            $('#toM').css({
                border: "1px solid red"
            });
            flagForEmail = false;
        } else if (!checkValidEmailAddress($('#toM').val())) {
            $('#toM').css({
                border: "1px solid red"
            });
            flagForEmail = false;
        }
        if ($('#ccM').val() == "") {} else if (!checkValidEmailAddress($('#ccM').val())) {
            flagForEmail = false;
            $('#ccM').css({
                border: "1px solid red"
            });
        }
    } else if (type == "pump") {
        if ($('#toP').val() == "") {
            $('#toP').css({
                border: "1px solid red"
            });
            flagForEmail = false;
        } else if (!checkValidEmailAddress($('#toP').val())) {
            $('#toP').css({
                border: "1px solid red"
            });
            flagForEmail = false;
        }
        if ($('#ccP').val() == "") {} else if (!checkValidEmailAddress($('#ccP').val())) {
            $('#ccP').css({
                border: "1px solid red"
            });
            flagForEmail = false;
        }
    } else if (type == "pressureDrop") {
        if ($('#toPD').val() == "") {
            $('#toPD').css({
                border: "1px solid red"
            });
            flagForEmail = false;
        } else if (!checkValidEmailAddress($('#toPD').val())) {
            $('#toPD').css({
                border: "1px solid red"
            });
            flagForEmail = false;
        }
        if ($('#ccPD').val() == "") {} else if (!checkValidEmailAddress($('#ccPD').val())) {
            $('#ccPD').css({
                border: "1px solid red"
            });
            flagForEmail = false;
        }
    } else if (type == "piping") {
        if ($('#toPip').val() == "") {
            $('#toPip').css({
                border: "1px solid red"
            });
            flagForEmail = false;
        } else if (!checkValidEmailAddress($('#toPip').val())) {
            $('#toPip').css({
                border: "1px solid red"
            });
            flagForEmail = false;
        }
        if ($('#ccPip').val() == "") {} else if (!checkValidEmailAddress($('#ccPip').val())) {
            $('#ccPip').css({
                border: "1px solid red"
            });
            flagForEmail = false;
        }
    }
    return flagForEmail;
}


function validateEmailAddressNew(type, subtype, event) {
    if (type == "motor") {
        var to = $("#toM").val();
        var cc = $("#ccM").val();
        if (to.length > 0 && cc.length > 0) {
            if (checkValidEmailAddress(to) == true && checkValidEmailAddress(cc) == true) {
                //enable the button and remove style for both buttons
                $("#toM").removeAttr('style');
                $("#ccM").removeAttr('style');
                $("#sendNewM").css('background', '#49B1BB');
                $("#sendNewM").css('cursor', 'pointer');
                $("#sendNewM").removeAttr('disabled');
            } else if (checkValidEmailAddress(to) && !checkValidEmailAddress(cc)) {
                //border red for cc and remove style for to
                $("#toM").removeAttr('style');
                $("#ccM").css('border', '1px solid red');
                $("#sendNewM").removeAttr('style');
                $("#sendNewM").attr('disabled', 'disabled');
            } else if (checkValidEmailAddress(cc) && !checkValidEmailAddress(to)) {
                //border red for to and remove style for cc
                $("#toM").css("border", "1px solid red");
                $("#ccM").removeAttr("style");
                $("#sendNewM").removeAttr("style");
                $("#sendNewM").attr('disabled', 'disabled');
            } else if (!checkValidEmailAddress(to) && !checkValidEmailAddress(cc)) {
                $("#toM").css("border", "1px solid red");
                $("#ccM").css("border", "1px solid red");
                $("#sendNewM").removeAttr("style");
                $("#sendNewM").attr('disabled', 'disabled');
            }
        } else if (cc.length > 0 && to.length == 0) {
            if (!checkValidEmailAddress(cc)) {
                $("#ccM").css('border', '1px solid red');
                $("#toM").removeAttr('style');
                $("#sendNewM").removeAttr("style");
                $("#sendNewM").attr('disabled', 'disabled');
            } else {
                $("#ccM").removeAttr('style');
                $("#toM").removeAttr('style');
                $("#sendNewM").removeAttr("style");
                $("#sendNewM").attr('disabled', 'disabled');
            }
        } else if (to.length > 0 && cc.length == 0) {
            if (!checkValidEmailAddress(to)) {
                $("#toM").css('border', '1px solid red');
                $("#ccM").removeAttr('style');
                $("#sendNewM").removeAttr('style');
                $("#sendNewM").attr('disabled', 'disabled');
            } else {
                $("#toM").removeAttr('style');
                $("#ccM").removeAttr('style');
                $("#sendNewM").css('background', '#49B1BB');
                $("#sendNewM").css('cursor', 'pointer');
                $("#sendNewM").removeAttr('disabled');
            }
        } else if (to.length == 0 && $("#toM").is(":focus") == true) {
            $("#toM").css('border', '1px solid #49B1BB');
            $("#ccM").removeAttr('style');
            $("#sendNewM").removeAttr('style');
            $("#sendNewM").attr('disabled', 'disabled');
        } else if (cc.length == 0 && $("#ccM").is(":focus") == true) {
            $("#toM").removeAttr('style');
            $("#ccM").css('border', '1px solid #49B1BB');
            $("#sendNewM").removeAttr('style');
            $("#sendNewM").attr('disabled', 'disabled');
        }
    } else if (type == "pump") {
        var to = $("#toP").val();
        var cc = $("#ccP").val();
        if (to.length > 0 && cc.length > 0) {
            if (checkValidEmailAddress(to) == true && checkValidEmailAddress(cc) == true) {
                //enable the button and remove style for both buttons
                $("#toP").removeAttr('style');
                $("#ccP").removeAttr('style');
                $("#sendNewP").css('background', '#49B1BB');
                $("#sendNewP").css('cursor', 'pointer');
                $("#sendNewP").removeAttr('disabled');
            } else if (checkValidEmailAddress(to) && !checkValidEmailAddress(cc)) {
                //border red for cc and remove style for to
                $("#toP").removeAttr('style');
                $("#ccP").css('border', '1px solid red');
                $("#sendNewP").removeAttr('style');
                $("#sendNewP").attr('disabled', 'disabled');
            } else if (checkValidEmailAddress(cc) && !checkValidEmailAddress(to)) {
                //border red for to and remove style for cc
                $("#toP").css("border", "1px solid red");
                $("#ccP").removeAttr("style");
                $("#sendNewP").removeAttr("style");
                $("#sendNewP").attr('disabled', 'disabled');
            } else if (!checkValidEmailAddress(to) && !checkValidEmailAddress(cc)) {
                $("#toP").css("border", "1px solid red");
                $("#ccP").css("border", "1px solid red");
                $("#sendNewP").removeAttr("style");
                $("#sendNewP").attr('disabled', 'disabled');
            }
        } else if (cc.length > 0 && to.length == 0) {
            if (!checkValidEmailAddress(cc)) {
                $("#ccP").css('border', '1px solid red');
                $("#toP").removeAttr('style');
                $("#sendNewP").removeAttr("style");
                $("#sendNewP").attr('disabled', 'disabled');
            } else {
                $("#ccP").removeAttr('style');
                $("#toP").removeAttr('style');
                $("#sendNewP").removeAttr('style');
                $("#sendNewP").attr('disabled', 'disabled');
            }
        } else if (to.length > 0 && cc.length == 0) {
            if (!checkValidEmailAddress(to)) {
                $("#toP").css('border', '1px solid red');
                $("#ccP").removeAttr('style');
                $("#sendNewP").removeAttr('style');
                $("#sendNewP").attr('disabled', 'disabled');
            } else {
                $("#toP").removeAttr('style');
                $("#ccP").removeAttr('style');
                $("#sendNewP").css('background', '#49B1BB');
                $("#sendNewP").css('cursor', 'pointer');
                $("#sendNewP").removeAttr('disabled');
            }
        } else if (to.length == 0 && $("#toP").is(":focus") == true) {
            $("#toP").css('border', '1px solid #49B1BB');
            $("#ccP").removeAttr('style');
            $("#sendNewP").removeAttr('style');
            $("#sendNewP").attr('disabled', 'disabled');
        } else if (cc.length == 0 && $("#ccP").is(":focus") == true) {
            $("#ccP").css('border', '1px solid #49B1BB');
            $("#toP").removeAttr('style');
            $("#sendNewP").removeAttr('style');
            $("#sendNewP").attr('disabled', 'disabled');
        }
    } else if (type == "pressureDrop") {
        var to = $("#toPD").val();
        var cc = $("#ccPD").val();
        if (to.length > 0 && cc.length > 0) {
            if (checkValidEmailAddress(to) == true && checkValidEmailAddress(cc) == true) {
                //enable the button and remove style for both buttons
                $("#toPD").removeAttr('style');
                $("#ccPD").removeAttr('style');
                $("#sendNewPD").css('background', '#49B1BB');
                $("#sendNewPD").css('cursor', 'pointer');
                $("#sendNewPD").removeAttr('disabled');
            } else if (checkValidEmailAddress(to) && !checkValidEmailAddress(cc)) {
                //border red for cc and remove style for to
                $("#toPD").removeAttr('style');
                $("#ccPD").css('border', '1px solid red');
                $("#sendNewPD").removeAttr('style');
                $("#sendNewPD").attr('disabled', 'disabled');
            } else if (checkValidEmailAddress(cc) && !checkValidEmailAddress(to)) {
                //border red for to and remove style for cc
                $("#toPD").css("border", "1px solid red");
                $("#ccPD").removeAttr("style");
                $("#sendNewPD").removeAttr("style");
                $("#sendNewPD").attr('disabled', 'disabled');
            } else if (!checkValidEmailAddress(to) && !checkValidEmailAddress(cc)) {
                $("#toPD").css("border", "1px solid red");
                $("#ccPD").css("border", "1px solid red");
                $("#sendNewPD").removeAttr("style");
                $("#sendNewPD").attr('disabled', 'disabled');
            }
        } else if (cc.length > 0 && to.length == 0) {
            if (!checkValidEmailAddress(cc)) {
                $("#ccPD").css('border', '1px solid red');
                $("#toPD").removeAttr('style');
                $("#sendNewPD").removeAttr("style");
                $("#sendNewPD").attr('disabled', 'disabled');
            } else {
                $("#ccPD").removeAttr('style');
                $("#toPD").removeAttr('style');
                $("#sendNewPD").removeAttr('style');
                $("#sendNewPD").attr('disabled', 'disabled');
            }
        } else if (to.length > 0 && cc.length == 0) {
            if (!checkValidEmailAddress(to)) {
                $("#toPD").css('border', '1px solid red');
                $("#ccPD").removeAttr('style');
                $("#sendNewPD").removeAttr('style');
                $("#sendNewPD").attr('disabled', 'disabled');
            } else {
                $("#toPD").removeAttr('style');
                $("#ccPD").removeAttr('style');
                $("#sendNewPD").css('background', '#49B1BB');
                $("#sendNewPD").css('cursor', 'pointer');
                $("#sendNewPD").removeAttr('disabled');
            }
        } else if (to.length == 0 && $("toPD").is(":focus") == true) {
            $("#toPD").css('border', '1px solid #49B1BB');
            $("#ccPD").removeAttr('style');
            $("#sendNewPD").removeAttr('style');
            $("#sendNewPD").attr('disabled', 'disabled');
        } else if (cc.length == 0 && $("ccPD").is(":focus") == true) {
            $("#ccPD").css('border', '1px solid #49B1BB');
            $("#toPD").removeAttr('style');
            $("#sendNewPD").removeAttr('style');
            $("#sendNewPD").attr('disabled', 'disabled');
        }
    } else if (type == "piping") {
        var to = $("#toPip").val();
        var cc = $("#ccPip").val();
        if (to.length > 0 && cc.length > 0) {
            if (checkValidEmailAddress(to) == true && checkValidEmailAddress(cc) == true) {
                //enable the button and remove style for both buttons
                $("#toPip").removeAttr('style');
                $("#ccPip").removeAttr('style');
                $("#sendNewPip").css('background', '#49B1BB');
                $("#sendNewPip").css('cursor', 'pointer');
                $("#sendNewPip").removeAttr('disabled');
            } else if (checkValidEmailAddress(to) && !checkValidEmailAddress(cc)) {
                //border red for cc and remove style for to
                $("#toPip").removeAttr('style');
                $("#ccPip").css('border', '1px solid red');
                $("#sendNewPip").removeAttr('style');
                $("#sendNewPip").attr('disabled', 'disabled');
            } else if (checkValidEmailAddress(cc) && !checkValidEmailAddress(to)) {
                //border red for to and remove style for cc
                $("#toPip").css("border", "1px solid red");
                $("#ccPip").removeAttr("style");
                $("#sendNewPip").removeAttr("style");
                $("#sendNewPip").attr('disabled', 'disabled');
            } else if (!checkValidEmailAddress(to) && !checkValidEmailAddress(cc)) {
                $("#toPip").css("border", "1px solid red");
                $("#ccPip").css("border", "1px solid red");
                $("#sendNewPip").removeAttr("style");
                $("#sendNewPip").attr('disabled', 'disabled');
            }
        } else if (cc.length > 0 && to.length == 0) {
            if (!checkValidEmailAddress(cc)) {
                $("#ccPip").css('border', '1px solid red');
                $("#toPip").removeAttr('style');
                $("#sendNewPip").removeAttr("style");
                $("#sendNewPip").attr('disabled', 'disabled');
            } else {
                $("#ccPip").removeAttr('style');
                $("#toPip").removeAttr('style');
                $("#sendNewPip").removeAttr('style');
                $("#sendNewPip").attr('disabled', 'disabled');
            }
        } else if (to.length > 0 && cc.length == 0) {
            if (!checkValidEmailAddress(to)) {
                $("#toPip").css('border', '1px solid red');
                $("#ccPip").removeAttr('style');
                $("#sendNewPip").removeAttr('style');
                $("#sendNewPip").attr('disabled', 'disabled');
            } else {
                $("#toPip").removeAttr('style');
                $("#ccPip").removeAttr('style');
                $("#sendNewPip").css('background', '#49B1BB');
                $("#sendNewPip").css('cursor', 'pointer');
                $("#sendNewPip").removeAttr('disabled');
            }
        } else if (to.length == 0 && $("#toPip").is(":focus")) {
            $("#toPip").css('border', '1px solid #49B1BB');
            $("#ccPip").removeAttr('style');
            $("#sendNewPip").removeAttr('style');
            $("#sendNewPip").attr('disabled', 'disabled');
        } else if (cc.length == 0 && $("#ccPip").is(":focus")) {
            $("#ccPip").css('border', '1px solid #49B1BB');
            $("#toPip").removeAttr('style');
            $("#sendNewPip").removeAttr('style');
            $("#sendNewPip").attr('disabled', 'disabled');
        }
    } else if (type == "cylinder") {
        var to = $("#to").val();
        var cc = $("#cc").val();
        if (to.length > 0 && cc.length > 0) {
            if (checkValidEmailAddress(to) == true && checkValidEmailAddress(cc) == true) {
                //enable the button and remove style for both buttons
                $("#to").removeAttr('style');
                $("#cc").removeAttr('style');
                $("#send").css('background', '#49B1BB');
                $("#send").css('cursor', 'pointer');
                $("#send").removeAttr('disabled');
            } else if (checkValidEmailAddress(to) && !checkValidEmailAddress(cc)) {
                //border red for cc and remove style for to
                $("#to").removeAttr('style');
                $("#cc").css('border', '1px solid red');
                $("#send").removeAttr('style');
                $("#send").attr('disabled', 'disabled');
            } else if (checkValidEmailAddress(cc) && !checkValidEmailAddress(to)) {
                //border red for to and remove style for cc
                $("#to").css("border", "1px solid red");
                $("#cc").removeAttr("style");
                $("#send").removeAttr("style");
                $("#send").attr('disabled', 'disabled');
            } else if (!checkValidEmailAddress(to) && !checkValidEmailAddress(cc)) {
                $("#to").css("border", "1px solid red");
                $("#cc").css("border", "1px solid red");
                $("#send").removeAttr("style");
                $("#send").attr('disabled', 'disabled');
            }
        } else if (cc.length > 0 && to.length == 0) {
            if (!checkValidEmailAddress(cc)) {
                $("#cc").css('border', '1px solid red');
                $("#to").removeAttr('style');
                $("#send").removeAttr("style");
                $("#send").attr('disabled', 'disabled');
            } else {
                $("#cc").removeAttr('style');
                $("#to").removeAttr('style');
                $("#send").removeAttr('style');
                $("#send").attr('disabled', 'disabled');
            }
        } else if (to.length > 0 && cc.length == 0) {
            if (!checkValidEmailAddress(to)) {
                $("#to").css('border', '1px solid red');
                $("#cc").removeAttr('style');
                $("#send").removeAttr('style');
                $("#send").attr('disabled', 'disabled');
            } else {
                $("#to").removeAttr('style');
                $("#cc").removeAttr('style');
                $("#send").css('background', '#49B1BB');
                $("#send").css('cursor', 'pointer');
                $("#send").removeAttr('disabled');
            }
        } else if (to.length == 0 && $("#to").is(":focus")) {
            $("#to").css('border', '1px solid #49B1BB');
            $("#cc").removeAttr('style');
            $("#send").removeAttr('style');
            $("#send").attr('disabled', 'disabled');
        } else if (cc.length == 0 && $("#cc").is(":focus")) {
            $("#cc").css('border', '1px solid #49B1BB');
            $("#to").removeAttr('style');
            $("#send").removeAttr('style');
            $("#send").attr('disabled', 'disabled');
        }
        //event.preventDefault();
    }
}

function resetAllEmailBorders() {
    $("#to,#toP,#toM,#toPD,#toPip").css({
        border: "1px solid #DBDBDB"
    });
    $("#cc,#ccP,#ccM,#ccPD,#ccPip").css({
        border: "1px solid #DBDBDB"
    });
}
var isEmailRequestInProcess = false;

function sendEmailNew(type) {
    //for scrolling to top
    setTimeout(function() {
        $('html,body', window.parent.document).animate({
            scrollTop: 315
        }, "slow");
        /*$(window).scrollTop(0,'slow');*/
    }, 500);
    resetAllEmailBorders();
    var isEmailValidated = true;
    //console.log("isEmailValidated",isEmailValidated);

    if (isEmailValidated == true) {
        isEmailRequestInProcess = true;
        if (type == "motor") {
            $(".cancelNewM").attr({
                'disabled': 'true'
            });
            $(".cancelNewM").css('background', '#DBDBDB');
            var ddValue = $("#motorHeaderDD").val();
            //flow rate
            //displacement,speed,vol eff, power , pressure , mech eff
            populateMotorEmailFormValues(ddValue);
            $('#sendNewM').attr({
                'disabled': 'true',
                'value': sending
            });
            $("#sendNewM").css('background', '#DBDBDB');
            $.post("process.php", $("#myFormMotorE").serialize(), function(result) {
                /**Check the result set from process.php file**/
                if (result == 'sent') {
                    /**Display the success message**/
                    /*alert(result);*/
                    $(".messageMotorEmail").css('height', '141px');
                    $('#mail_successMotor').show().fadeOut(4000);
                    setTimeout(function() {
                        $(".outerEmailMotor").slideToggle(600, function() {
                            $(".messageMotorEmail").css('height', '186px');
                            isEmailRequestInProcess = false;
                            $('#sendNewM').removeAttr('disabled').attr('value', send);
                        });
                    }, 2000);

                    $('#sendNewM').attr('value', send);





                } else {
                    /**Display the error message**/
                    /*alert(result);*/
                    $(".messageMotorEmail").css('height', '141px');
                    $('#mail_failMotor').show().fadeOut(5000, function() {
                        $(".messageMotorEmail").css('height', '186px');
                    });
                    /** Enable the submit button again**/
                    $('#sendNewM').removeAttr('disabled').attr('value', send);
                    $("#sendNewM").css('background', '#49B1BB');
                    $(".cancelNewM").removeAttr('disabled');
                    $(".cancelNewM").css('background', '#49B1BB');
                    isEmailRequestInProcess = false;
                }
            });
        } else if (type == "pump") {
            $(".cancelNewP").attr({
                'disabled': 'true'
            });
            $(".cancelNewP").css('background', '#DBDBDB');
            var ddValue = $("#pumpHeaderDD").val();
            populatePumpEmailFormValues(ddValue);
            $('#sendNewP').attr({
                'disabled': 'true',
                'value': sending
            });
            $("#sendNewP").css('background', '#DBDBDB');
            $.post("process.php", $("#myFormPumpE").serialize(), function(result) {

                /**Check the result set from process.php file**/
                if (result == 'sent') {
                    /**Display the success message**/
                    /*alert(result);*/
                    $(".messagePumpEmail").css('height', '141px');
                    $('#mail_successPump').show().fadeOut(4000);
                    setTimeout(function() {
                        $(".outerEmailPump").slideToggle(600, function() {
                            $(".messagePumpEmail").css('height', '186px');
                            isEmailRequestInProcess = false;
                            $('#sendNewP').removeAttr('disabled').attr('value', send);
                        });
                    }, 2000);

                    $('#sendNewP').attr('value', send);




                } else {
                    /**Display the error message**/
                    /*alert(result);*/
                    $(".messagePumpEmail").css('height', '141px');
                    $('#mail_failPump').show().fadeOut(5000, function() {
                        $(".messagePumpEmail").css('height', '186px');
                    });
                    /** Enable the submit button again**/
                    $('#sendNewP').removeAttr('disabled').attr('value', send);
                    $("#sendNewP").css('background', '#49B1BB');
                    $(".cancelNewP").removeAttr('disabled');
                    $(".cancelNewP").css('background', '#49B1BB');
                    isEmailRequestInProcess = false;
                }
            });
        } else if (type == "pressureDrop") {
            $(".cancelNewPD").attr({
                'disabled': 'true'
            });
            $(".cancelNewPD").css('background', '#DBDBDB');
            populatePressureDropEmailFormValues();
            $('#sendNewPD').attr({
                'disabled': 'true',
                'value': sending
            });
            $("#sendNewPD").css('background', '#DBDBDB');
            $.post("process.php", $("#myFormPressureDropE").serialize(), function(result) {
                /* isEmailRequestInProcess = false;*/
                /**Check the result set from process.php file**/
                if (result == 'sent') {
                    /**Display the success message**/
                    /*alert(result);*/
                    $(".messagePressureDropEmail").css('height', '141px');
                    $('#mail_successPD').show().fadeOut(4000);
                    setTimeout(function() {
                        $(".outerEmailPD").slideToggle(600, function() {
                            $(".messagePressureDropEmail").css('height', '186px');
                            isEmailRequestInProcess = false;
                            $('#sendNewPD').removeAttr('disabled').attr('value', send);
                        });
                    }, 2000);

                    $('#sendNewPD').attr('value', send);





                } else {
                    /**Display the error message**/
                    /*alert(result);*/
                    $(".messagePressureDropEmail").css('height', '141px');
                    $('#mail_failPD').show().fadeOut(5000, function() {
                        $(".messagePressureDropEmail").css('height', '186px');
                    });
                    /** Enable the submit button again**/
                    $('#sendNewPD').removeAttr('disabled').attr('value', send);
                    $("#sendNewPD").css('background', '#49B1BB');
                    $(".cancelNewPD").removeAttr('disabled');
                    $(".cancelNewPD").css('background', '#49B1BB');
                    isEmailRequestInProcess = false;
                }
            });
        } else if (type == "piping") {
            $(".cancelNewPip").attr({
                'disabled': 'true'
            });
            $(".cancelNewPip").css('background', '#DBDBDB');
            var ddValue = $("#pipingHeaderDD").val();
            populatePipingFormEmailValues(ddValue);
            $('#sendNewPip').attr({
                'disabled': 'true',
                'value': sending
            });
            $("#sendNewPip").css('background', '#DBDBDB');
            $.post("process.php", $("#myFormPipingE").serialize(), function(result) {
                /*isEmailRequestInProcess = false;*/
                /**Check the result set from process.php file**/
                if (result == 'sent') {
                    /**Display the success message**/
                    /*alert(result);*/
                    $(".messagePipingEmail").css('height', '141px');
                    $('#mail_successPiping').show().fadeOut(4000);
                    setTimeout(function() {
                        $(".outerEmailPiping").slideToggle(600, function() {
                            $(".messagePipingEmail").css('height', '186px');
                            isEmailRequestInProcess = false;
                            $('#sendNewPip').removeAttr('disabled').attr('value', send);
                        });
                    }, 2000);
                    $('#sendNewPip').attr('value', send);





                } else {
                    /**Display the error message**/
                    /*alert(result);*/
                    $(".messagePipingEmail").css('height', '141px');
                    $('#mail_failPiping').show().fadeOut(5000, function() {
                        $(".messagePipingEmail").css('height', '186px');
                    });
                    /** Enable the submit button again**/
                    $('#sendNewPip').removeAttr('disabled').attr('value', send);
                    $("#sendNewPip").css('background', '#49B1BB');
                    $(".cancelNewPip").removeAttr('disabled');
                    $(".cancelNewPip").css('background', '#49B1BB');
                    isEmailRequestInProcess = false;
                }
            });
        }
    }
}

function populateTabs() {
    var tabindex = 1;


    $('input, .newListSelected, #link a').each(function() {
        // if ((this.type != "hidden") {

        var $inputbox = $(this);

        $inputbox.attr("tabindex", tabindex);
        //$('input:disabled').removeAttr("disabled");
        //$('input:disabled').attr("tabindex", "-1");
        tabindex++;

    });
}

function resetAllOpenEmailScreens() {
    //rest all to and cc fields also
    $("#to,#toP,#toM,#toPD,#toPip").val('');
    $("#cc,#ccP,#ccM,#ccPD,#ccPip").val('');
    $(".outerEmailPiping,.outerEmailPD,.outerEmailPump,.outerEmailMotor,#outer").hide();
}

function toEmailFieldValidator(obj) {
    var id = obj.id;
    /*console.log("toEmail ",$("#" + id).css('border'));*/
    if ($("#" + id).css('border-bottom-color') != "rgb(255, 0, 0)") {
        $("#" + id).css('border', '1px solid #DBDBDB');
    }
}

function toEmailFieldInputFocus(obj) {
    var id = obj.id;
    if ($("#" + id).css('border-bottom-color') != "rgb(255, 0, 0)") {
        $("#" + id).css('border', '1px solid #49B1BB');
    }
}

function changeBgFocusOut(obj) {
    var id = obj.id;
    if ($("#" + id).css('border-bottom-color') != "rgb(255, 0, 0)") {
        $("#" + id).css('border', '1px solid #DBDBDB');
    }
    /*if(id != "piston" && id != "rod" && id != "stroke" && id != "preassure" && id != "oilflow" && id != "piston_force" && id != "rod_force" && id != "piston_time" && id != "rod_time" && id != "piston_velocity" && id != "rod_velocity"){
      $('.imgContainer img').attr("src","images/Main_Image.jpg");
    }*/
}

function onchangeBgFocus(obj) {
    var id = obj.id;
    if ($("#" + id).css('border-bottom-color') != "rgb(255, 0, 0)") {
        $("#" + id).css('border', '1px solid #49B1BB');
    }
}


/*function scientificToDecimal(num) {
    //if the number is in scientific notation remove it
    if(/\d+\.?\d*e[\+\-]*\d+/i.test(num)) {
        var zero = '0',
            parts = String(num).toLowerCase().split('e'), //split into coeff and exponent
            e = parts.pop(),//store the exponential part
            l = Math.abs(e), //get the number of zeros
            sign = e/l,
            coeff_array = parts[0].split('.');
        if(sign === -1) {
            coeff_array[0] = Math.abs(coeff_array[0]);
            num = '-'+zero + '.' + new Array(l).join(zero) + coeff_array.join('');
        }
        else {
            var dec = coeff_array[1];
            if(dec) l = l - dec.length;
            num = coeff_array.join('') + new Array(l+1).join(zero);
        }
    }
    
    return num;
};*/

function scientificToDecimal(value) {
    if (isNaN(value)) {
        return '';
    }
    value = parseFloat(value);

    var REGEX_SCIENTIFIC = /(\d+\.?\d*)e\d*(\+|-)(\d+)/;
    var valueString = value.toString();
    var result = REGEX_SCIENTIFIC.exec(valueString);
    var base;
    var positiveNegative;
    var exponents;
    var precision;
    var rVal;


    // is scientific
    if (result) {
        // [ '1e+32', '1', '+', '2', index: 0, input: '1e+32' ]
        base = result[1];
        positiveNegative = result[2];
        exponents = result[3];

        if (positiveNegative === '+') {

            precision = parseInt(exponents);

            // base is a decimal
            if (base.indexOf('.') !== -1) {
                result = /(\d+\.)(\d)/.exec(base);

                // [ 2 ] == right side after decimal
                // [ 1 ] == left side before decimal
                precision -= result[2].length + result[1].length;

                rVal = base.split('.').join('') + getZeros(precision);
            } else {
                rVal = base + getZeros(precision);
            }
        } else {
            precision = base.length + parseInt(exponents) - 1;

            // if it contains a period we want to drop precision by one
            if (base.indexOf('.') !== -1) {
                precision--;
            }
            if (precision > 20) {
                precision = 20;
            }
            rVal = value.toFixed(precision);
        }
    } else {
        rVal = value.toString();
    }

    return rVal;
};


function getZeros(count) {
    var rVal = '';

    for (var i = 0; i < count; i++) {
        rVal += '0';
    }

    return rVal;
}
//fix for button behaviour in IE
function detectIEVersion() {
    var ua = window.navigator.userAgent;
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        /*$(".utilityBtnInput").attr("disabled",'');
        $("#cancelNew").attr("disabled",'');
        $("#sendNew, #sendNewP, #sendNewM, #sendNewPD, #sendNewPip").attr("disabled",'');
        $("#copy,#clear,#email").attr("disabled",'');
        $("#cancel,#send").attr("disabled",'');*/
        $(".utilityBtnDisabled").attr("disabled", '');
        $("#emailbox").attr("disabled", '');
        $(".centerAlignButton").attr("disabled", '');
        $(".emailBoxMotor").attr("disabled", '');
    }
}