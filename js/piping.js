var ddpipHeaderMap = {};
$(document).ready(function() {
    ddpipHeaderMap = {
        1: pipingAbsViscosityTxt,
        2: pipingKinViscosityTxt
    }
});

function commadotPip() {
    if ($("#inppipOilFlowRate").val() && $("#inppipOilFlowRate").val().indexOf(",") >= 0) {
        $('#inppipOilFlowRate').val($('#inppipOilFlowRate').val().replace(/\,/g, "."));
    }
    if ($("#inppipSpGravity").val() && $("#inppipSpGravity").val().indexOf(",") >= 0) {
        $('#inppipSpGravity').val($('#inppipSpGravity').val().replace(/\,/g, "."));
    }
    if ($("#inppipAbsViscosity").val() && $("#inppipAbsViscosity").val().indexOf(",") >= 0) {
        $('#inppipAbsViscosity').val($('#inppipAbsViscosity').val().replace(/\,/g, "."));
    }
    if ($("#inppipKinViscosity").val() && $("#inppipKinViscosity").val().indexOf(",") >= 0) {
        $('#inppipKinViscosity').val($('#inppipKinViscosity').val().replace(/\,/g, "."));
    }
    if ($("#inppipPipeDiameter").val() && $("#inppipPipeDiameter").val().indexOf(",") >= 0) {
        $('#inppipPipeDiameter').val($('#inppipPipeDiameter').val().replace(/\,/g, "."));
    }

    if ($("#inppipOilFlowRate").val()) {
        $('#inppipOilFlowRate').val($('#inppipOilFlowRate').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($("#inppipSpGravity").val()) {
        $('#inppipSpGravity').val($('#inppipSpGravity').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($("#inppipAbsViscosity").val()) {
        $('#inppipAbsViscosity').val($('#inppipAbsViscosity').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($("#inppipKinViscosity").val()) {
        $('#inppipKinViscosity').val($('#inppipKinViscosity').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($("#inppipPipeDiameter").val()) {
        $('#inppipPipeDiameter').val($('#inppipPipeDiameter').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
}

function calculateUsingAbsVisPip() {
    var isOutputHit = false;
    var isResetEnabled = false;
    var unitsOfMeasurementVal = measurementUnitFlag.toLowerCase();
    enableAllPipingFields();
    var flowRate = $("#inppipOilFlowRate").val();
    var flowRateUnit = $("#selpipOilFlowRate").val();
    var specificGravity = $("#inppipSpGravity").val();
    var insidePipeDiameter = $("#inppipPipeDiameter").val();
    var insidePipeDiameterUnit = $("#selpipPipeDiameter").val();
    var absoluteViscosity = $("#inppipAbsViscosity").val();
    var absoluteViscosityUnit = $("#selpipAbsViscosity").val();
    var crossSectionalAreaUnit = $("#selpipCrossSecArea").val();
    var velocityUnit = $("#selpipVelocity").val();
    if (flowRate.length > 0 || specificGravity.length > 0 || insidePipeDiameter.length > 0 || absoluteViscosity.length > 0) {
        isResetEnabled = true;
    }
    //3 cases possible here 
    if (flowRate.length > 0 || insidePipeDiameter.length > 0) {
        //dont disable anything show both outputs

    }
    //no need for this remove this later
    if (specificGravity.length > 0 || absoluteViscosity.length > 0) {
        //disable fields kinematic viscosity
        $("#inppipKinViscosity").prop("disabled", true);
        //$('#id').attr('disabled', 'disabled');

    }
    var reynoldsNumber = 0;
    var crossSectionalArea = 0;
    var crossSectionalAreaDefault = 0;
    var velocityDefault = 0;
    var absoluteViscosityDefault = 0;
    var insidePipeDiameterDefault = 0;
    var flowRateDefault = 0;
    if (unitsOfMeasurementVal == "metric") {
        //units needed to calculate are vel- m/s , d - mm , abs viscosity - cP , fr - lpm , crosssectional area - mm2 ,kin visco - cSt
        //this is in current unit
        var insidePipeDiameterDefault = (insidePipeDiameterUnit != "mm") ? convertDiameterPip(insidePipeDiameterUnit, "mm", insidePipeDiameter) : insidePipeDiameter;
        var flowRateDefault = (flowRateUnit != "lpm") ? convertFlowRatePip(flowRateUnit, "lpm", flowRate) : flowRate;
        var flowRateInMtCubePerSec = (flowRateUnit != "m3/s") ? convertFlowRatePip(flowRateUnit, "m3/s", flowRate) : flowRate;
        //this is in mm2
        crossSectionalAreaDefault = (insidePipeDiameter.length > 0) ? (Math.PI * Math.pow(insidePipeDiameterDefault, 2)) / 4 : 0;
        //this is in current unit
        crossSectionalArea = (crossSectionalAreaUnit != "mm2") ? convertCrossSectionalAreaPip("mm2", crossSectionalAreaUnit, crossSectionalAreaDefault) : crossSectionalAreaDefault;
        var crossSectionalAreaInMSq = (crossSectionalAreaUnit != "m2") ? convertCrossSectionalAreaPip(crossSectionalAreaUnit, "m2", crossSectionalArea) : crossSectionalArea;
        //for velocity we need to calculate in current unit also -> can convert later on
        velocityDefault = (flowRate.length > 0 && crossSectionalArea != 0) ? (flowRateInMtCubePerSec / crossSectionalAreaInMSq) : 0;

        if (absoluteViscosity != 0) {
            absoluteViscosityDefault = (absoluteViscosityUnit != "cP") ? convertAbsoluteViscosityPip(absoluteViscosityUnit, "cP", absoluteViscosity) : absoluteViscosity;
        }
        /*if(kinematicViscosity != 0){
          kinematicViscosityDefault = (kinematicViscosityUnit != "cSt") ? convertAbsoluteViscosityPip(kinematicViscosityUnit,"cSt",kinematicViscosity) : kinematicViscosity;
        }*/
    } else {
        //inch
        //units needed to calculate are vel- ft/s , d - in , abs viscosity - cP , fr - gpm , crosssectional area - in2 , kin visco - cSt
        //this is in current unit
        var insidePipeDiameterDefault = (insidePipeDiameterUnit != "in") ? convertDiameterPip(insidePipeDiameterUnit, "in", insidePipeDiameter) : insidePipeDiameter;
        var flowRateDefault = (flowRateUnit != "gpm") ? convertFlowRatePip(flowRateUnit, "gpm", flowRate) : flowRate;
        var flowRateInCfs = (flowRateUnit != "cfs") ? convertFlowRatePip(flowRateUnit, "cfs", flowRate) : flowRate;
        //this is in in2
        crossSectionalAreaDefault = (insidePipeDiameter.length > 0) ? (Math.PI * Math.pow(insidePipeDiameterDefault, 2)) / 4 : 0;
        //this is in current unit
        crossSectionalArea = (crossSectionalAreaUnit != "in2") ? convertCrossSectionalAreaPip("in2", crossSectionalAreaUnit, crossSectionalAreaDefault) : crossSectionalAreaDefault;
        var crossSectionalInFtSq = (crossSectionalAreaUnit != "ft2") ? convertCrossSectionalAreaPip(crossSectionalAreaUnit, "ft2", crossSectionalArea) : crossSectionalArea;
        //for velocity we need to calculate in current unit also -> can convert later on
        velocityDefault = (flowRate.length > 0 && crossSectionalArea != 0) ? (flowRateInCfs / crossSectionalInFtSq) : 0;
        if (absoluteViscosity != 0) {
            absoluteViscosityDefault = (absoluteViscosityUnit != "cP") ? convertAbsoluteViscosityPip(absoluteViscosityUnit, "cP", absoluteViscosity) : absoluteViscosity;
        }
        /*if(kinematicViscosity != 0){
          kinematicViscosityDefault = (kinematicViscosityUnit != "cSt") ? convertAbsoluteViscosityPip(kinematicViscosityUnit,"cSt",kinematicViscosity) : kinematicViscosity;
        }*/
    }
    if (flowRate.length > 0 && specificGravity.length > 0 && insidePipeDiameter.length > 0 && absoluteViscosity.length > 0) {
        if (unitsOfMeasurementVal == "metric") {
            var reynoldsNumber = (1000 * insidePipeDiameterDefault * specificGravity * velocityDefault) / absoluteViscosityDefault;
            (reynoldsNumber.toString() == "Infinity" || reynoldsNumber.toString() == "NaN") ? $("#outpipReynoldNum").val(''): $("#outpipReynoldNum").val(scientificToDecimal(reynoldsNumber));
            /*$("#outpipReynoldNum").val(scientificToDecimal(reynoldsNumber));*/
            //enableResetPip();
            enableEmailPip();
            enableCopyPip();
            isOutputHit = true;
        } else {
            /*console.log("insidePipeDiameterDefault",insidePipeDiameterDefault,"velocityDefault",velocityDefault,"absoluteViscosityDefault",absoluteViscosityDefault,"crossSectionalInFtSq",crossSectionalInFtSq,"flowRateInCfs",flowRateInCfs);*/
            //inch
            var reynoldsNumber = (7740 * insidePipeDiameterDefault * specificGravity * velocityDefault) / absoluteViscosityDefault;
            /*$("#outpipReynoldNum").val(scientificToDecimal(reynoldsNumber));*/
            (reynoldsNumber.toString() == "Infinity" || reynoldsNumber.toString() == "NaN") ? $("#outpipReynoldNum").val(''): $("#outpipReynoldNum").val(scientificToDecimal(reynoldsNumber));
            //enableResetPip();
            enableEmailPip();
            enableCopyPip();
            isOutputHit = true;
        }
    } else {
        $("#outpipReynoldNum").prop("disabled", true);
        $("#outpipReynoldNum").val('');
    }
    if (crossSectionalArea != 0) {
        //this is current unit
        /*$("#outpipCrossSecArea").val(scientificToDecimal(crossSectionalArea));*/
        (crossSectionalArea.toString() == "Infinity" || crossSectionalArea.toString() == "NaN") ? $("#outpipCrossSecArea").val(''): $("#outpipCrossSecArea").val(scientificToDecimal(crossSectionalArea));
        enableEmailPip();
        enableCopyPip();
        isOutputHit = true;
    } else {
        $("#outpipCrossSecArea").val('');
    }
    if (velocityDefault != 0) {
        enableEmailPip();
        enableCopyPip();
        isOutputHit = true;
        //convert it from default to local one
        if (unitsOfMeasurementVal == "metric") {
            var velocity = (velocityUnit != "m/s") ? convertVelocityPip("m/s", velocityUnit, velocityDefault) : velocityDefault;
            (velocity.toString() == "Infinity" || velocity.toString() == "NaN") ? $("#outpipVelocity").val(''): $("#outpipVelocity").val(scientificToDecimal(velocity));

            /*$("#outpipVelocity").val(scientificToDecimal(velocity));*/

        } else {
            var velocity = (velocityUnit != "ft/s") ? convertVelocityPip("ft/s", velocityUnit, velocityDefault) : velocityDefault;
            (velocity.toString() == "Infinity" || velocity.toString() == "NaN") ? $("#outpipVelocity").val(''): $("#outpipVelocity").val(scientificToDecimal(velocity));

            /*$("#outpipVelocity").val(scientificToDecimal(velocity));*/
        }
    } else {
        $("#outpipVelocity").val('');
    }

    if (isOutputHit == false) {
        //disableResetPip();
        disableEmailPip();
        disableCopyPip();
        $("#outpipReynoldNum").prop("disabled", true);
        $("#outpipReynoldNum").val('');
    }
    if (isResetEnabled == true) {
        enableResetPip();
    } else {
        disableResetPip();
    }
}

function calculateUsingKinVisPip() {
    var isOutputHit = false;
    var isResetEnabled = false;
    var unitsOfMeasurementVal = measurementUnitFlag.toLowerCase();
    enableAllPipingFields();
    var flowRate = $("#inppipOilFlowRate").val();
    var flowRateUnit = $("#selpipOilFlowRate").val();
    /*var specificGravity = $("#inppipSpGravity").val();*/
    var insidePipeDiameter = $("#inppipPipeDiameter").val();
    var insidePipeDiameterUnit = $("#selpipPipeDiameter").val();
    /*var absoluteViscosity =  $("#inppipAbsViscosity").val();
    var absoluteViscosityUnit = $("#selpipAbsViscosity").val(); */
    var kinematicViscosity = $("#inppipKinViscosity").val();
    var kinematicViscosityUnit = $("#selpipKinViscosity").val();
    var crossSectionalAreaUnit = $("#selpipCrossSecArea").val();
    var velocityUnit = $("#selpipVelocity").val();

    if (flowRate.length > 0 || insidePipeDiameter.length > 0 || kinematicViscosity.length > 0) {
        isResetEnabled = true;
    }

    if (kinematicViscosity.length > 0) {
        //disable fields specific gravity and absolute viscosity
        $("#inppipSpGravity").prop("disabled", true);
        $("#inppipAbsViscosity").prop("disabled", true);
    }
    var reynoldsNumber = 0;
    var crossSectionalArea = 0;
    var crossSectionalAreaDefault = 0;
    var velocityDefault = 0;
    var kinematicViscosityDefault = 0;
    var insidePipeDiameterDefault = 0;
    var flowRateDefault = 0
    if (unitsOfMeasurementVal == "metric") {
        //units needed to calculate are vel- m/s , d - mm , abs viscosity - cP , fr - lpm , crosssectional area - mm2 ,kin visco - cSt
        //this is in current unit
        var insidePipeDiameterDefault = (insidePipeDiameterUnit != "mm") ? convertDiameterPip(insidePipeDiameterUnit, "mm", insidePipeDiameter) : insidePipeDiameter;
        var flowRateDefault = (flowRateUnit != "lpm") ? convertFlowRatePip(flowRateUnit, "lpm", flowRate) : flowRate;
        var flowRateInMtCubePerSec = (flowRateUnit != "m3/s") ? convertFlowRatePip(flowRateUnit, "m3/s", flowRate) : flowRate;
        //this is in mm2
        crossSectionalAreaDefault = (insidePipeDiameter.length > 0) ? (Math.PI * Math.pow(insidePipeDiameterDefault, 2)) / 4 : 0;
        //this is in current unit
        crossSectionalArea = (crossSectionalAreaUnit != "mm2") ? convertCrossSectionalAreaPip("mm2", crossSectionalAreaUnit, crossSectionalAreaDefault) : crossSectionalAreaDefault;
        var crossSectionalAreaInMSq = (crossSectionalAreaUnit != "m2") ? convertCrossSectionalAreaPip(crossSectionalAreaUnit, "m2", crossSectionalArea) : crossSectionalArea;
        //for velocity we need to calculate in current unit also -> can convert later on
        velocityDefault = (flowRate.length > 0 && crossSectionalArea != 0) ? (flowRateInMtCubePerSec / crossSectionalAreaInMSq) : 0;
        /*if(absoluteViscosity != 0){
          absoluteViscosityDefault = (absoluteViscosityUnit != "cP") ? convertAbsoluteViscosityPip(absoluteViscosityUnit,"cP",absoluteViscosity) : absoluteViscosity;
        }*/
        if (kinematicViscosity != 0) {
            kinematicViscosityDefault = (kinematicViscosityUnit != "cSt") ? convertKinematicViscosityPip(kinematicViscosityUnit, "cSt", kinematicViscosity) : kinematicViscosity;
        }
    } else {
        //inch
        //units needed to calculate are vel- ft/s , d - in , abs viscosity - cP , fr - gpm , crosssectional area - in2 , kin visco - cSt
        //this is in current unit
        var insidePipeDiameterDefault = (insidePipeDiameterUnit != "in") ? convertDiameterPip(insidePipeDiameterUnit, "in", insidePipeDiameter) : insidePipeDiameter;
        var flowRateDefault = (flowRateUnit != "gpm") ? convertFlowRatePip(flowRateUnit, "gpm", flowRate) : flowRate;
        var flowRateInCfs = (flowRateUnit != "cfs") ? convertFlowRatePip(flowRateUnit, "cfs", flowRate) : flowRate;
        //this is in in2
        crossSectionalAreaDefault = (insidePipeDiameter.length > 0) ? (Math.PI * Math.pow(insidePipeDiameterDefault, 2)) / 4 : 0;
        //this is in current unit
        crossSectionalArea = (crossSectionalAreaUnit != "in2") ? convertCrossSectionalAreaPip("in2", crossSectionalAreaUnit, crossSectionalAreaDefault) : crossSectionalAreaDefault;
        var crossSectionalInFtSq = (crossSectionalAreaUnit != "ft2") ? convertCrossSectionalAreaPip(crossSectionalAreaUnit, "ft2", crossSectionalArea) : crossSectionalArea;
        //for velocity we need to calculate in current unit also -> can convert later on
        velocityDefault = (flowRate.length > 0 && crossSectionalArea != 0) ? (flowRateInCfs / crossSectionalInFtSq) : 0;
        /*if(absoluteViscosity != 0){
          absoluteViscosityDefault = (absoluteViscosityUnit != "cP") ? convertAbsoluteViscosityPip(absoluteViscosityUnit,"cP",absoluteViscosity) : absoluteViscosity;
        }*/
        if (kinematicViscosity != 0) {
            kinematicViscosityDefault = (kinematicViscosityUnit != "cSt") ? convertKinematicViscosityPip(kinematicViscosityUnit, "cSt", kinematicViscosity) : kinematicViscosity;
        }
    }
    if (flowRate.length > 0 && insidePipeDiameter.length > 0 && kinematicViscosity.length > 0) {
        if (unitsOfMeasurementVal == "metric") {
            //we get velocity in m/s and use diameter in mm
            var reynoldsNumber = (1000 * insidePipeDiameterDefault * velocityDefault) / kinematicViscosityDefault;
            /*$("#outpipReynoldNum").val(scientificToDecimal(reynoldsNumber));*/
            (reynoldsNumber.toString() == "Infinity" || reynoldsNumber.toString() == "NaN") ? $("#outpipReynoldNum").val(''): $("#outpipReynoldNum").val(scientificToDecimal(reynoldsNumber));
            //enableResetPip();
            enableEmailPip();
            enableCopyPip();
            isOutputHit = true;
        } else {
            //inch
            /*console.log("came here here");
            console.log("insidePipeDiameterDefault",insidePipeDiameterDefault,"velocityDefault",velocityDefault,"kinematicViscosityDefault",kinematicViscosityDefault);*/
            var reynoldsNumber = (7740 * insidePipeDiameterDefault * velocityDefault) / kinematicViscosityDefault;
            /*$("#outpipReynoldNum").val(scientificToDecimal(reynoldsNumber));*/
            (reynoldsNumber.toString() == "Infinity" || reynoldsNumber.toString() == "NaN") ? $("#outpipReynoldNum").val(''): $("#outpipReynoldNum").val(scientificToDecimal(reynoldsNumber));
            //enableResetPip();
            enableEmailPip();
            enableCopyPip();
            isOutputHit = true;
        }
    } else {
        $("#outpipReynoldNum").prop("disabled", true);
        $("#outpipReynoldNum").val('');
    }
    if (crossSectionalArea != 0) {
        //this is current unit
        /*$("#outpipCrossSecArea").val(scientificToDecimal(crossSectionalArea));*/
        (crossSectionalArea.toString() == "Infinity" || crossSectionalArea.toString() == "NaN") ? $("#outpipCrossSecArea").val(''): $("#outpipCrossSecArea").val(scientificToDecimal(crossSectionalArea));
        enableEmailPip();
        enableCopyPip();
        isOutputHit = true;
    } else {
        $("#outpipCrossSecArea").val('');
    }
    if (velocityDefault != 0) {
        enableEmailPip();
        enableCopyPip();
        isOutputHit = true;
        //convert it from default to local one
        if (unitsOfMeasurementVal == "metric") {
            var velocity = (velocityUnit != "m/s") ? convertVelocityPip("m/s", velocityUnit, velocityDefault) : velocityDefault;
            /*$("#outpipVelocity").val(scientificToDecimal(velocity));*/
            (velocity.toString() == "Infinity" || velocity.toString() == "NaN") ? $("#outpipVelocity").val(''): $("#outpipVelocity").val(scientificToDecimal(velocity));
        } else {
            var velocity = (velocityUnit != "ft/s") ? convertVelocityPip("ft/s", velocityUnit, velocityDefault) : velocityDefault;
            /*$("#outpipVelocity").val(scientificToDecimal(velocity));*/
            (velocity.toString() == "Infinity" || velocity.toString() == "NaN") ? $("#outpipVelocity").val(''): $("#outpipVelocity").val(scientificToDecimal(velocity));
        }
    } else {
        $("#outpipVelocity").val('');
    }
    if (isOutputHit == false) {
        //disableResetPip();
        disableEmailPip();
        disableCopyPip();
        $("#outpipReynoldNum").prop("disabled", true);
        $("#outpipReynoldNum").val('');
    }
    if (isResetEnabled == true) {
        enableResetPip();
    } else {
        disableResetPip();
    }
}

function calculatePiping(event) {
    var isOutputHit = false;
    var keycode = event.keyCode;
    var elementId = event.target.id;
    var unitsOfMeasurementVal = measurementUnitFlag.toLowerCase();
    commadotPip();
    if ((keycode >= 48 && keycode <= 57) || keycode == 46 || keycode == 8 || (keycode >= 96 && keycode <= 105) || keycode == 110) {
        var ddValue = $("#pipingHeaderDD").val();
        if (ddValue == 1) {
            calculateUsingAbsVisPip();
        } else if (ddValue == 2) {
            calculateUsingKinVisPip();
        }
    }
}

function onChangePipingDropDD(event) {
    var elementId = event.target.id;
    var flowRate = $("#inppipOilFlowRate").val();
    var flowRateUnit = $("#selpipOilFlowRate").val();
    var insidePipeDiameter = $("#inppipPipeDiameter").val();
    var insidePipeDiameterUnit = $("#selpipPipeDiameter").val();
    var absoluteViscosity = $("#inppipAbsViscosity").val();
    var absoluteViscosityUnit = $("#selpipAbsViscosity").val();
    var kinematicViscosity = $("#inppipKinViscosity").val();
    var kinematicViscosityUnit = $("#selpipKinViscosity").val();
    var crossSectionalArea = $("#outpipCrossSecArea").val();
    var crossSectionalAreaUnit = $("#selpipCrossSecArea").val();
    var velocity = $("#outpipVelocity").val();
    var velocityUnit = $("#selpipVelocity").val();
    var flowRateUnitPrev = $("#selpipOilFlowRate").data("prev");
    var insidePipeDiameterUnitPrev = $("#selpipPipeDiameter").data("prev");
    var absoluteViscosityUnitPrev = $("#selpipAbsViscosity").data("prev");
    var kinematicViscosityUnitPrev = $("#selpipKinViscosity").data("prev");
    var crossSectionalAreaUnitPrev = $("#selpipCrossSecArea").data("prev");
    var velocityUnitPrev = $("#selpipVelocity").data("prev");
    //flowrate
    //insidepipeDiameter
    //absoluteViscosity
    //kinematic visco
    //crosssectional area
    //velocity
    if (elementId == "selpipOilFlowRate" && (flowRateUnitPrev != flowRateUnit)) {
        if (flowRate.length > 0) {
            convertFlowRatePip(flowRateUnitPrev, flowRateUnit, flowRate, elementId);
        }
        $("#selpipOilFlowRate").data("prev", $("#selpipOilFlowRate").val());
    } else if (elementId == "selpipPipeDiameter" && (insidePipeDiameterUnitPrev != insidePipeDiameterUnit)) {
        if (insidePipeDiameter.length > 0) {
            convertDiameterPip(insidePipeDiameterUnitPrev, insidePipeDiameterUnit, insidePipeDiameter, elementId);
        }
        $("#selpipPipeDiameter").data("prev", $("#selpipPipeDiameter").val());
    } else if (elementId == "selpipAbsViscosity" && (absoluteViscosityUnitPrev != absoluteViscosityUnit)) {
        if (absoluteViscosity.length > 0) {
            convertAbsoluteViscosityPip(absoluteViscosityUnitPrev, absoluteViscosityUnit, absoluteViscosity, elementId);
        }
        $("#selpipAbsViscosity").data("prev", $("#selpipAbsViscosity").val());
    } else if (elementId == "selpipKinViscosity" && (kinematicViscosityUnitPrev != kinematicViscosityUnit)) {
        if (kinematicViscosity.length > 0) {
            convertKinematicViscosityPip(kinematicViscosityUnitPrev, kinematicViscosityUnit, kinematicViscosity, elementId);
        }
        $("#selpipKinViscosity").data("prev", $("#selpipKinViscosity").val());
    } else if (elementId == "selpipCrossSecArea" && (crossSectionalAreaUnitPrev != crossSectionalAreaUnit)) {
        if (crossSectionalArea.length > 0) {
            convertCrossSectionalAreaPip(crossSectionalAreaUnitPrev, crossSectionalAreaUnit, crossSectionalArea, elementId);
        }
        $("#selpipCrossSecArea").data("prev", $("#selpipCrossSecArea").val());
    } else if (elementId == "selpipVelocity" && (velocityUnitPrev != velocityUnit)) {
        if (velocity.length > 0) {
            convertVelocityPip(velocityUnitPrev, velocityUnit, velocity, elementId);
        }
        $("#selpipVelocity").data("prev", $("#selpipVelocity").val());
    }
    resetImageTagsAndState();
}

function convertCrossSectionalAreaPip(currentUnit, newUnit, valueToSend, id) {
    //mm2,cm2,m2
    if (currentUnit == "mm2") {
        if (newUnit == "cm2") {
            if (id == "selpipCrossSecArea") {
                $("#outpipCrossSecArea").val(scientificToDecimal(valueToSend / 100))
            }
            return scientificToDecimal(valueToSend / 100);
        } else {
            //m2
            if (id == "selpipCrossSecArea") {
                $("#outpipCrossSecArea").val(scientificToDecimal(valueToSend / 1000000))
            }
            return scientificToDecimal(valueToSend / 1000000);
        }
    } else if (currentUnit == "cm2") {
        if (newUnit == "mm2") {
            if (id == "selpipCrossSecArea") {
                $("#outpipCrossSecArea").val(scientificToDecimal(valueToSend * 100))
            }
            return scientificToDecimal(valueToSend * 100);
        } else {
            //m2
            if (id == "selpipCrossSecArea") {
                $("#outpipCrossSecArea").val(scientificToDecimal(valueToSend / 10000))
            }
            return scientificToDecimal(valueToSend / 10000);
        }
    } else if (currentUnit == "m2") {
        if (newUnit == "mm2") {
            if (id == "selpipCrossSecArea") {
                $("#outpipCrossSecArea").val(scientificToDecimal(valueToSend * 1000000))
            }
            return scientificToDecimal(valueToSend * 1000000);
        } else {
            //cm2
            if (id == "selpipCrossSecArea") {
                $("#outpipCrossSecArea").val(scientificToDecimal(valueToSend * 10000))
            }
            return scientificToDecimal(valueToSend * 10000);
        }
    }
    //in2,ft2,yd2
    else if (currentUnit == "in2") {
        if (newUnit == "ft2") {
            if (id == "selpipCrossSecArea") {
                $("#outpipCrossSecArea").val(scientificToDecimal(valueToSend * 0.00694444));
            }
            return scientificToDecimal(valueToSend * 0.00694444);
        } else {
            //yd2
            if (id == "selpipCrossSecArea") {
                $("#outpipCrossSecArea").val(scientificToDecimal(valueToSend * 0.0007716044444444));
            }
            return scientificToDecimal(valueToSend * 0.0007716044444444);
        }
    } else if (currentUnit == "ft2") {
        if (newUnit == "in2") {
            if (id == "selpipCrossSecArea") {
                $("#outpipCrossSecArea").val(scientificToDecimal(valueToSend / 0.00694444));
            }
            return scientificToDecimal(valueToSend / 0.00694444);
        } else {
            //yd2
            if (id == "selpipCrossSecArea") {
                $("#outpipCrossSecArea").val(scientificToDecimal(valueToSend * (0.0007716044444444 / 0.00694444)));
            }
            return scientificToDecimal(valueToSend * (0.0007716044444444 / 0.00694444));
        }
    } else if (currentUnit == "yd2") {
        if (newUnit == "in2") {
            if (id == "selpipCrossSecArea") {
                $("#outpipCrossSecArea").val(scientificToDecimal(valueToSend / 0.0007716044444444))
            }
            return scientificToDecimal(valueToSend / 0.0007716044444444);
        } else {
            //ft2
            if (id == "selpipCrossSecArea") {
                $("#outpipCrossSecArea").val(scientificToDecimal(valueToSend * (0.00694444 / 0.0007716044444444)));
            }
            return scientificToDecimal(valueToSend * (0.00694444 / 0.0007716044444444));
        }
    }
}

function convertDiameterPip(currentUnit, newUnit, valueToReturn, id) {
    //mm,cm,m
    if (currentUnit == "mm") {
        if (newUnit == "cm") {
            if (id == "selpipPipeDiameter") {
                $("#inppipPipeDiameter").val(scientificToDecimal(valueToReturn / 10));
            }
            return scientificToDecimal(valueToReturn / 10);
        } else {
            //m
            if (id == "selpipPipeDiameter") {
                $("#inppipPipeDiameter").val(scientificToDecimal(valueToReturn / 1000));
            }
            return scientificToDecimal(valueToReturn / 1000);
        }
    } else if (currentUnit == "cm") {
        if (newUnit == "mm") {
            if (id == "selpipPipeDiameter") {
                $("#inppipPipeDiameter").val(scientificToDecimal(valueToReturn * 10));
            }
            return scientificToDecimal(valueToReturn * 10);
        } else {
            //m
            if (id == "selpipPipeDiameter") {
                $("#inppipPipeDiameter").val(scientificToDecimal(valueToReturn / 100));
            }
            return scientificToDecimal(valueToReturn / 100);
        }
    } else if (currentUnit == "m") {
        if (newUnit == "mm") {
            if (id == "selpipPipeDiameter") {
                $("#inppipPipeDiameter").val(scientificToDecimal(valueToReturn * 1000));
            }
            return scientificToDecimal(valueToReturn * 1000);
        } else {
            //cm
            if (id == "selpipPipeDiameter") {
                $("#inppipPipeDiameter").val(scientificToDecimal(valueToReturn * 100));
            }
            return scientificToDecimal(valueToReturn * 100);
        }
    }
    //in,ft
    else if (currentUnit == "in") {
        if (newUnit == "ft") {
            if (id == "selpipPipeDiameter") {
                $("#inppipPipeDiameter").val(scientificToDecimal(valueToReturn * 0.0833333));
            }
            return scientificToDecimal(valueToReturn * 0.0833333);
        }
    } else if (currentUnit == "ft") {
        if (newUnit == "in") {
            if (id == "selpipPipeDiameter") {
                $("#inppipPipeDiameter").val(scientificToDecimal(valueToReturn / 0.0833333));
            }
            return scientificToDecimal(valueToReturn / 0.0833333);
        }
    }
}

function convertAbsoluteViscosityPip(currentUnit, newUnit, valueToSend, id) {
    var unitsOfMeasurementVal = measurementUnitFlag.toLowerCase();
    if (unitsOfMeasurementVal == "metric") {
        //cP,poise,Pa-s
        if (currentUnit == "cP") {
            if (newUnit == "poise") {
                if (id == "selpipAbsViscosity") {
                    $("#inppipAbsViscosity").val(scientificToDecimal(valueToSend * 0.01));
                }
                return scientificToDecimal(valueToSend * 0.01);
            } else {
                //Pa-s
                if (id == "selpipAbsViscosity") {
                    $("#inppipAbsViscosity").val(scientificToDecimal(valueToSend * 0.001));
                }
                return scientificToDecimal(valueToSend * 0.001);
            }
        } else if (currentUnit == "poise") {
            if (newUnit == "cP") {
                if (id == "selpipAbsViscosity") {
                    $("#inppipAbsViscosity").val(scientificToDecimal(valueToSend * 100));
                }
                return scientificToDecimal(valueToSend * 100);
            } else {
                //Pa-s
                if (id == "selpipAbsViscosity") {
                    $("#inppipAbsViscosity").val(scientificToDecimal(valueToSend * 0.1));
                }
                return scientificToDecimal(valueToSend * 0.1);
            }
        } else if (currentUnit == "Pa-s") {
            if (newUnit == "cP") {
                if (id == "selpipAbsViscosity") {
                    $("#inppipAbsViscosity").val(scientificToDecimal(valueToSend * 1000));
                }
                return scientificToDecimal(valueToSend * 1000);
            } else {
                //poise
                if (id == "selpipAbsViscosity") {
                    $("#inppipAbsViscosity").val(scientificToDecimal(valueToSend * 10));
                }
                return scientificToDecimal(valueToSend * 10);
            }
        }
    } else {
        //cP,lb-s/ft2,pdl-s/ft2
        if (currentUnit == "cP") {
            if (newUnit == "lb-s/ft2") {
                if (id == "selpipAbsViscosity") {
                    $("#inppipAbsViscosity").val(scientificToDecimal(valueToSend * 0.000020885));
                }
                return scientificToDecimal(valueToSend * 0.000020885);
            } else {
                //pdl-s/ft2
                if (id == "selpipAbsViscosity") {
                    $("#inppipAbsViscosity").val(scientificToDecimal(valueToSend * 0.0006719689));
                }
                return scientificToDecimal(valueToSend * 0.0006719689);
            }
        } else if (currentUnit == "lb-s/ft2") {
            if (newUnit == "cP") {
                if (id == "selpipAbsViscosity") {
                    $("#inppipAbsViscosity").val(scientificToDecimal(valueToSend / 0.000020885));
                }
                return scientificToDecimal(valueToSend / 0.000020885);
            } else {
                //pdl-s/ft2
                if (id == "selpipAbsViscosity") {
                    $("#inppipAbsViscosity").val(scientificToDecimal(valueToSend * (0.0006719689 / 0.000020885)));
                }
                return scientificToDecimal(valueToSend * (0.0006719689 / 0.000020885));
            }
        } else if (currentUnit == "pdl-s/ft2") {
            if (newUnit == "cP") {
                if (id == "selpipAbsViscosity") {
                    $("#inppipAbsViscosity").val(scientificToDecimal(valueToSend / 0.0006719689));
                }
                return scientificToDecimal(valueToSend / 0.0006719689);
            } else {
                //lb-s/ft2
                if (id == "selpipAbsViscosity") {
                    $("#inppipAbsViscosity").val(scientificToDecimal(valueToSend * (0.000020885 / 0.0006719689)));
                }
                return scientificToDecimal(valueToSend * (0.000020885 / 0.0006719689));
            }
        }
    }
}

function convertVelocityPip(currentUnit, newUnit, valueToSend, id) {
    //m/s,cm/s,km/h
    if (currentUnit == "m/s") {
        if (newUnit == "cm/s") {
            if (id == "selpipVelocity") {
                $("#outpipVelocity").val(scientificToDecimal(valueToSend * 100));
            }
            return scientificToDecimal(valueToSend * 100);
        } else {
            //km/h
            if (id == "selpipVelocity") {
                $("#outpipVelocity").val(scientificToDecimal(valueToSend * 3.6));
            }
            return scientificToDecimal(valueToSend * 3.6);
        }
    } else if (currentUnit == "cm/s") {
        if (newUnit == "m/s") {
            if (id == "selpipVelocity") {
                $("#outpipVelocity").val(scientificToDecimal(valueToSend / 100));
            }
            return scientificToDecimal(valueToSend / 100);
        } else {
            //km/h
            if (id == "selpipVelocity") {
                $("#outpipVelocity").val(scientificToDecimal(valueToSend * (3.6 / 100)));
            }
            return scientificToDecimal(valueToSend * (3.6 / 100));
        }
    } else if (currentUnit == "km/h") {
        if (newUnit == "m/s") {
            if (id == "selpipVelocity") {
                $("#outpipVelocity").val(scientificToDecimal(valueToSend / 3.6))
            }
            return scientificToDecimal(valueToSend / 3.6);
        } else {
            //cm/s
            if (id == "selpipVelocity") {
                $("#outpipVelocity").val(scientificToDecimal(valueToSend * (100 / 3.6)));
            }
            return scientificToDecimal(valueToSend * (100 / 3.6));
        }
    }
    //ft/s,in/s,mi/h
    else if (currentUnit == "ft/s") {
        if (newUnit == "in/s") {
            if (id == "selpipVelocity") {
                $("#outpipVelocity").val(scientificToDecimal(valueToSend / 0.083333));
            }
            return scientificToDecimal(valueToSend / 0.083333);
        } else {
            //mi/h
            if (id == "selpipVelocity") {
                $("#outpipVelocity").val(scientificToDecimal(valueToSend * (0.0568182 / 0.083333)));
            }
            return scientificToDecimal(valueToSend * (0.0568182 / 0.083333));
        }
    } else if (currentUnit == "in/s") {
        if (newUnit == "ft/s") {
            if (id == "selpipVelocity") {
                $("#outpipVelocity").val(scientificToDecimal(valueToSend * 0.083333));
            }
            return scientificToDecimal(valueToSend * 0.083333);
        } else {
            //mi/h
            if (id == "selpipVelocity") {
                $("#outpipVelocity").val(scientificToDecimal(valueToSend * 0.0568182));
            }
            return scientificToDecimal(valueToSend * 0.0568182);
        }
    } else if (currentUnit == "mi/h") {
        if (newUnit == "ft/s") {
            if (id == "selpipVelocity") {
                $("#outpipVelocity").val(scientificToDecimal(valueToSend / (0.0568182 / 0.083333)));
            }
            return scientificToDecimal(valueToSend / (0.0568182 / 0.083333));
        } else {
            //in/s
            if (id == "selpipVelocity") {
                $("#outpipVelocity").val(scientificToDecimal(valueToSend / 0.0568182));
            }
            return scientificToDecimal(valueToSend / 0.0568182);
        }
    }
}

function convertKinematicViscosityPip(currentUnit, newUnit, valueToSend, id) {
    var unitsOfMeasurementVal = measurementUnitFlag.toLowerCase();
    if (unitsOfMeasurementVal == "metric") {
        //cSt,stoke,m2/s
        if (currentUnit == "cSt") {
            if (newUnit == "stoke") {
                if (id == "selpipKinViscosity") {
                    $("#inppipKinViscosity").val(scientificToDecimal(valueToSend * 0.01));
                }
                return scientificToDecimal(valueToSend * 0.01);
            } else {
                //m2/s
                if (id == "selpipKinViscosity") {
                    $("#inppipKinViscosity").val(scientificToDecimal(valueToSend * 0.000001));
                }
                return scientificToDecimal(valueToSend * 0.000001);
            }
        } else if (currentUnit == "stoke") {
            if (newUnit == "cSt") {
                if (id == "selpipKinViscosity") {
                    $("#inppipKinViscosity").val(scientificToDecimal(valueToSend / 0.01));
                }
                return scientificToDecimal(valueToSend / 0.01);
            } else {
                //m2/s
                if (id == "selpipKinViscosity") {
                    $("#inppipKinViscosity").val(scientificToDecimal(valueToSend * 0.0001));
                }
                return scientificToDecimal(valueToSend * 0.0001);
            }
        } else if (currentUnit == "m2/s") {
            if (newUnit == "cSt") {
                if (id == "selpipKinViscosity") {
                    $("#inppipKinViscosity").val(scientificToDecimal(valueToSend / 0.000001));
                }
                return scientificToDecimal(valueToSend / 0.000001);
            } else {
                //stoke
                if (id == "selpipKinViscosity") {
                    $("#inppipKinViscosity").val(scientificToDecimal(valueToSend / 0.0001));
                }
                return scientificToDecimal(valueToSend / 0.0001);
            }
        }
    } else {
        //cSt,in2/s,ft2/s
        if (currentUnit == "cSt") {
            if (newUnit == "in2/s") {
                if (id == "selpipKinViscosity") {
                    $("#inppipKinViscosity").val(scientificToDecimal(valueToSend * 0.00155));
                }
                return scientificToDecimal(valueToSend * 0.00155);
            } else {
                //ft2/s
                if (id == "selpipKinViscosity") {
                    $("#inppipKinViscosity").val(scientificToDecimal(valueToSend * 0.00001076));
                }
                return scientificToDecimal(valueToSend * 0.00001076);
            }
        } else if (currentUnit == "in2/s") {
            if (newUnit == "cSt") {
                if (id == "selpipKinViscosity") {
                    $("#inppipKinViscosity").val(scientificToDecimal(valueToSend / 0.00155));
                }
                return scientificToDecimal(valueToSend / 0.00155);
            } else {
                //ft2/s
                if (id == "selpipKinViscosity") {
                    $("#inppipKinViscosity").val(scientificToDecimal(valueToSend * (0.00001076 / 0.00155)));
                }
                return scientificToDecimal(valueToSend * (0.00001076 / 0.00155));
            }
        } else if (currentUnit == "ft2/s") {
            if (newUnit == "cSt") {
                if (id == "selpipKinViscosity") {
                    $("#inppipKinViscosity").val(scientificToDecimal(valueToSend / 0.00001076));
                }
                return scientificToDecimal(valueToSend / 0.00001076);
            } else {
                //in2/s
                if (id == "selpipKinViscosity") {
                    $("#inppipKinViscosity").val(scientificToDecimal(valueToSend * (0.00155 / 0.00001076)));
                }
                return scientificToDecimal(valueToSend * (0.00155 / 0.00001076));
            }
        }
    }
}

function convertFlowRatePip(currentUnit, newUnit, valueToReturn, id) {
    //m3/s,m3/min,lpn 
    if (currentUnit == "m3/s") {
        if (newUnit == "m3/min") {
            if (id == "selpipOilFlowRate") {
                $("#inppipOilFlowRate").val(scientificToDecimal(valueToReturn * 60));
            }
            return scientificToDecimal(valueToReturn * 60);
        } else {
            //lpm
            if (id == "selpipOilFlowRate") {
                $("#inppipOilFlowRate").val(scientificToDecimal(valueToReturn * 60000));
            }
            return scientificToDecimal(valueToReturn * 60000);
        }
    } else if (currentUnit == "m3/min") {
        if (newUnit == "m3/s") {
            if (id == "selpipOilFlowRate") {
                $("#inppipOilFlowRate").val(scientificToDecimal(valueToReturn / 60));
            }
            return scientificToDecimal(valueToReturn / 60);
        } else {
            //lpm
            if (id == "selpipOilFlowRate") {
                $("#inppipOilFlowRate").val(scientificToDecimal(valueToReturn * 1000));
            }
            return scientificToDecimal(valueToReturn * 1000);
        }
    } else if (currentUnit == "lpm") {
        if (newUnit == "m3/s") {
            if (id == "selpipOilFlowRate") {
                $("#inppipOilFlowRate").val(scientificToDecimal(valueToReturn / 60000));
            }
            return scientificToDecimal(valueToReturn / 60000);
        } else {
            //m3/min
            if (id == "selpipOilFlowRate") {
                $("#inppipOilFlowRate").val(scientificToDecimal(valueToReturn / 1000));
            }
            return scientificToDecimal(valueToReturn / 1000);
        }
    }
    //gpm,cfm,cfs
    else if (currentUnit == "gpm") {
        if (newUnit == "cfm") {
            if (id == "selpipOilFlowRate") {
                $("#inppipOilFlowRate").val(scientificToDecimal(valueToReturn * 0.1336806));
            }
            return scientificToDecimal(valueToReturn * 0.1336806);
        } else {
            //cfs
            if (id == "selpipOilFlowRate") {
                $("#inppipOilFlowRate").val(scientificToDecimal(valueToReturn * 0.00267));
            }
            return scientificToDecimal(valueToReturn * 0.00267);
        }
    } else if (currentUnit == "cfm") {
        if (newUnit == "gpm") {
            if (id == "selpipOilFlowRate") {
                $("#inppipOilFlowRate").val(scientificToDecimal(valueToReturn / 0.1336806));
            }
            return scientificToDecimal(valueToReturn * 0.1336806);
        } else {
            //cfs
            if (id == "selpipOilFlowRate") {
                $("#inppipOilFlowRate").val(scientificToDecimal(valueToReturn * (0.00267 / 0.1336806)));
            }
            return scientificToDecimal(valueToReturn * (0.00267 / 0.1336806));
        }
    } else if (currentUnit == "cfs") {
        if (newUnit == "gpm") {
            if (id == "selpipOilFlowRate") {
                $("#inppipOilFlowRate").val(scientificToDecimal(valueToReturn / 0.00267));
            }
            return scientificToDecimal(valueToReturn / 0.00267);
        } else {
            //cfm
            if (id == "selpipOilFlowRate") {
                $("#inppipOilFlowRate").val(scientificToDecimal(valueToReturn / (0.00267 / 0.1336806)));
            }
            return scientificToDecimal(valueToReturn / (0.00267 / 0.1336806));
        }
    }

}
//to be used when units of measurement changes and when user clicks on reset
function resetAllPipingFields() {

}

function getHTMLTemplatePiping(id, mainText, nounit) {
    if (nounit == "nounit") {
        var html = '<div class="listElement" id=' + 'inp' + id + 'list' + '>' +
            '<div class="leftListElement">' +
            '<label id="lbl' + id + '">' + mainText + '</label>' +
            '</div>' +
            '<div class="rightListElement">' +
            '<div class="innerListElement padding-right-10">' +
            '<input onfocus="selectActiveElementBackground(this)" onfocusout="removeActiveElementBackground(this)" class="innerListElementInput" type="text" name="inp' + id + '" value="" id="inp' + id + '" autocomplete="off" onkeydown="calculateMotorKeyDown(event)" onkeyup="calculatePiping(event)"></input> ' +
            '</div>' +
            '<div class="innerListElement">' +
            '<select style="visibility:hidden;" class="innerListSelect" onchange="onChangePipingDropDD(event)" id="sel' + id + '"  name="sel' + id + '">  </select>' +
            '</div>' +
            '</div>' +
            '</div>';
        return html;
    }
    var html = '<div class="listElement" id=' + 'inp' + id + 'list' + '>' +
        '<div class="leftListElement">' +
        '<label id="lbl' + id + '">' + mainText + '</label>' +
        '</div>' +
        '<div class="rightListElement">' +
        '<div class="innerListElement padding-right-10">' +
        '<input onfocus="selectActiveElementBackground(this)" onfocusout="removeActiveElementBackground(this)" class="innerListElementInput" type="text" name="inp' + id + '" value="" id="inp' + id + '" autocomplete="off" onkeydown="calculateMotorKeyDown(event)" onkeyup="calculatePiping(event)"></input> ' +
        '</div>' +
        '<div class="innerListElement">' +
        '<select class="innerListSelect" onchange="onChangePipingDropDD(event)" id="sel' + id + '"  name="sel' + id + '">  </select>' +
        '</div>' +
        '</div>' +
        '</div>';
    return html;
}





function enableResetPip() {
    $("#uBtnResetPip").removeClass("utilityBtnDisabled");
    $("#uBtnResetPip").addClass("utilityBtnEnabled");
}

function disableResetPip() {
    $("#uBtnResetPip").removeClass("utilityBtnEnabled");
    $("#uBtnResetPip").addClass("utilityBtnDisabled");
}

function enableCopyPip() {
    $("#uBtnCopyPip").removeClass("utilityBtnDisabled");
    $("#uBtnCopyPip").addClass("utilityBtnEnabled");
}

function disableCopyPip() {
    $("#uBtnCopyPip").removeClass("utilityBtnEnabled");
    $("#uBtnCopyPip").addClass("utilityBtnDisabled");
}

function enableEmailPip() {
    $("#uBtnEmailPip").removeClass("utilityBtnDisabled");
    $("#uBtnEmailPip").addClass("utilityBtnEnabled");
}

function disableEmailPip() {
    $("#uBtnEmailPip").removeClass("utilityBtnEnabled");
    $("#uBtnEmailPip").addClass("utilityBtnDisabled");
}

function enableAllPipingFields() {
    $("#inppipOilFlowRate").prop("disabled", false);
    $("#inppipSpGravity").prop("disabled", false);
    $("#inppipAbsViscosity").prop("disabled", false);
    $("#inppipKinViscosity").prop("disabled", false);
    $("#inppipPipeDiameter").prop("disabled", false);
}

function disablePipingOutput() {
    $("#outpipCrossSecArea").prop("disabled", true);
    $("#outpipVelocity").prop("disabled", true);
    $("#outpipReynoldNum").prop("disabled", true);
}

function enablePipingOutput() {
    $("#outpipCrossSecArea").prop("disabled", false);
    $("#outpipVelocity").prop("disabled", false);
    $("#outpipReynoldNum").prop("disabled", false);
}

function getOutputHTMLTemplatePiping() {
    var html = '<div style="padding-top:0px;" class="listElement">' +
        '<div class="leftListElement">' +
        '<label class="outputFooterColor" id="outlblpipCrossSecArea">' + pipCrossSecAreaText + '</label>  ' +
        '</div>' +
        '<div class="rightListElement">' +
        '<div class="innerListElement padding-right-10">' +
        '<input style="background-color:#F1F1F1" class="innerListElementInput decimal" type="text" name="outpipCrossSecArea" value="" id="outpipCrossSecArea"  autocomplete="off" >  ' +
        '</div>' +
        '<div class="innerListElement">' +
        '<select class="innerListSelect" onchange="onChangePipingDropDD(event)" id="selpipCrossSecArea" name="selpipCrossSecArea" >  ' +
        '</select>  ' +
        '</div>' +
        '</div>' +
        '</div>' +
        //
        '<div class="listElement">' +
        '<div class="leftListElement">' +
        '<label class="outputFooterColor" id="outlblpipVelocity">' + pipVelocityText + '</label>  ' +
        '</div>' +
        '<div class="rightListElement">' +
        '<div class="innerListElement padding-right-10">' +
        '<input style="background-color:#F1F1F1" class="innerListElementInput decimal" type="text" name="outpipVelocity" value="" id="outpipVelocity"  autocomplete="off" >  ' +
        '</div>' +
        '<div class="innerListElement">' +
        '<select class="innerListSelect" onchange="onChangePipingDropDD(event)" id="selpipVelocity" name="selpipVelocity" >  ' +
        '</select>  ' +
        '</div>' +
        '</div>' +
        '</div>' +
        //
        '<div class="listElement">' +
        '<div class="leftListElement">' +
        '<label class="outputFooterColor" id="outlblpipReynoldNum">' + pipReynoldNumText + '</label>  ' +
        '</div>' +
        '<div class="rightListElement">' +
        '<div class="innerListElement padding-right-10">' +
        '<input style="background-color:#F1F1F1" class="innerListElementInput decimal" type="text" name="outpipReynoldNum" value="" id="outpipReynoldNum"  autocomplete="off" >  ' +
        '</div>' +
        '<div class="innerListElement">' +
        '<select class="innerListSelect" id="seloutpipReynoldNum" style="visibility:hidden;" >  ' +
        '</select>  ' +
        '</div>' +
        '</div>' +
        '</div>';
    return html;
}

function updatepipOilFlowRate(id, type) {
    if (type === "metric") {
        $("#" + id).empty();
        $("<option value='lpm' >lpm</option>").appendTo("#" + id);
        $("<option value='m3/s' >m&sup3;/s</option>").appendTo("#" + id);
        $("<option value='m3/min' >m&sup3;/min</option>").appendTo("#" + id);
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

function updatepipPipeDiameter(id, type) {
    if (type === "metric") {
        $("#" + id).empty();
        $("<option value='mm' >mm</option>").appendTo("#" + id);
        $("<option value='cm' >cm</option>").appendTo("#" + id);
        $("<option value='m' >m</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    } else {
        $("#" + id).empty();
        $("<option value='in'>in</option>").appendTo("#" + id);
        $("<option value='ft'>ft</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    }
}

function updatepipAbsViscosity(id, type) {
    if (type === "metric") {
        $("#" + id).empty();
        $("<option value='cP' >cP</option>").appendTo("#" + id);
        $("<option value='poise' >poise</option>").appendTo("#" + id);
        $("<option value='Pa-s' >Pa-s</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    } else {
        $("#" + id).empty();
        $("<option value='cP' >cP</option>").appendTo("#" + id);
        $("<option value='lb-s/ft2' >lb-s/ft&sup2;</option>").appendTo("#" + id);
        $("<option value='pdl-s/ft2' >pdl-s/ft&sup2;</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    }
}

function updatepipCrossSecArea(id, type) {
    if (type === "metric") {
        $("#" + id).empty();
        $("<option value='mm2' >mm&sup2;</option>").appendTo("#" + id);
        $("<option value='cm2' >cm&sup2;</option>").appendTo("#" + id);
        $("<option value='m2' >m&sup2;</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    } else {
        $("#" + id).empty();
        $("<option value='in2' >in&sup2;</option>").appendTo("#" + id);
        $("<option value='ft2' >ft&sup2;</option>").appendTo("#" + id);
        $("<option value='yd2' >yd&sup2;</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    }
}

function updatepipVelocity(id, type) {
    if (type === "metric") {
        $("#" + id).empty();
        $("<option value='m/s' >m/s</option>").appendTo("#" + id);
        $("<option value='cm/s' >cm/s</option>").appendTo("#" + id);
        $("<option value='km/h'>km/h</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    } else {
        $("#" + id).empty();
        $("<option value='ft/s' >ft/s</option>").appendTo("#" + id);
        $("<option value='in/s' >in/s</option>").appendTo("#" + id);
        $("<option value='mi/h' >mi/h</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    }
}

function updatepipKinViscosity(id, type) {
    if (type === "metric") {
        $("#" + id).empty();
        $("<option value='cSt' >cSt</option>").appendTo("#" + id);
        $("<option value='stoke' >stoke</option>").appendTo("#" + id);
        $("<option value='m2/s' >m&sup2;/s</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    } else {
        $("#" + id).empty();
        $("<option value='cSt' >cSt</option>").appendTo("#" + id);
        $("<option value='in2/s' >in&sup2;/s</option>").appendTo("#" + id);
        $("<option value='ft2/s' >ft&sup2;/s</option>").appendTo("#" + id);
        $("#" + id).sSelect();
        $("#" + id).resetSS();
    }
}

//new one
function initPipingdd() {
    disableCopyPip();
    disableResetPip();
    disableEmailPip();
    var unitsOfMeasurementVal = measurementUnitFlag.toLowerCase();
    var ddValue = $("#pipingHeaderDD").val();
    //based on ddValue decide which tabs to show or hide
    //create html here only
    var piphtmlFlowRate = getHTMLTemplatePiping("pipOilFlowRate", pipOilFlowRateText);
    var piphtmlSpecificGravity = getHTMLTemplatePiping("pipSpGravity", pipSpGravityText, "nounit");
    var piphtmlPipeDiameter = getHTMLTemplatePiping("pipPipeDiameter", pipPipeDiameterText);
    var piphtmlAbsoluteViscosity = getHTMLTemplatePiping("pipAbsViscosity", pipAbsViscosityText);
    var piphtmlKinematicViscosity = getHTMLTemplatePiping("pipKinViscosity", pipKinViscosityText);
    var piphtmlDivider = getDivider();
    var pipoutHtml = getOutputHTMLTemplatePiping();
    /*console.log("piping template ddValue",ddValue);*/
    if (ddValue == 1) {
        // flow rate , specific gravity , inside pipe diameter , absolute viscosity
        $(".inputPipX").html();
        var htmlToShow = piphtmlFlowRate + piphtmlSpecificGravity + piphtmlPipeDiameter +
            piphtmlAbsoluteViscosity + piphtmlDivider + pipoutHtml;
        $(".inputPipX").html(htmlToShow);
        //input
        //selpipOilFlowRate,selpipPipeDiameter,selpipAbsViscosity
        updatepipOilFlowRate("selpipOilFlowRate", unitsOfMeasurementVal);
        updatepipPipeDiameter("selpipPipeDiameter", unitsOfMeasurementVal);
        updatepipAbsViscosity("selpipAbsViscosity", unitsOfMeasurementVal);
        updateNonUnits("selpipSpGravity", unitsOfMeasurementVal);
        //output dd
        //selpipCrossSecArea,selpipVelocity
        updatepipCrossSecArea("selpipCrossSecArea", unitsOfMeasurementVal);
        updatepipVelocity("selpipVelocity", unitsOfMeasurementVal);
        updateNonUnits("seloutpipReynoldNum", unitsOfMeasurementVal);
        //update all prev values
        $("#selpipOilFlowRate").data("prev", $("#selpipOilFlowRate").val());
        $("#selpipPipeDiameter").data("prev", $("#selpipPipeDiameter").val());
        $("#selpipAbsViscosity").data("prev", $("#selpipAbsViscosity").val());
        $("#selpipCrossSecArea").data("prev", $("#selpipCrossSecArea").val());
        $("#selpipVelocity").data("prev", $("#selpipVelocity").val());
    } else if (ddValue == 2) {
        // flow rate , inside pipe diameter, kinematic viscosity
        var htmlToShow = piphtmlFlowRate + piphtmlPipeDiameter + piphtmlKinematicViscosity +
            piphtmlDivider + pipoutHtml;
        $(".inputPipX").html(htmlToShow);
        //input
        //selpipOilFlowRate,selpipPipeDiameter,selpipKinViscosity
        updatepipOilFlowRate("selpipOilFlowRate", unitsOfMeasurementVal);
        updatepipPipeDiameter("selpipPipeDiameter", unitsOfMeasurementVal);
        updatepipKinViscosity("selpipKinViscosity", unitsOfMeasurementVal);
        //output dd
        //selpipCrossSecArea,selpipVelocity
        updatepipCrossSecArea("selpipCrossSecArea", unitsOfMeasurementVal);
        updatepipVelocity("selpipVelocity", unitsOfMeasurementVal);
        updateNonUnits("seloutpipReynoldNum", unitsOfMeasurementVal);
        //update all prev values
        $("#selpipOilFlowRate").data("prev", $("#selpipOilFlowRate").val());
        $("#selpipPipeDiameter").data("prev", $("#selpipPipeDiameter").val());
        $("#selpipKinViscosity").data("prev", $("#selpipKinViscosity").val());
        $("#selpipCrossSecArea").data("prev", $("#selpipCrossSecArea").val());
        $("#selpipVelocity").data("prev", $("#selpipVelocity").val());
    }
    disablePipingOutput();
    populateTabs();
}


function pipingDDChange() {
    var ddValue = $('#pipingHeaderDD').val();
    var ddValuePrev = $("#pipingHeaderDD").data("prev");
    if (ddValue && ddValue !== "") {
        if (ddmotHeaderMap[ddValue]) {
            //also change the dropdown accordingly
            //ToDo -->> change units based on dd value
            if (ddValue != ddValuePrev) {
                initPipingdd();
            }
            $("#pipingHeaderDD").data("prev", $('#pipingHeaderDD').val());
            resetImageTagsAndState();
        }
    }
}