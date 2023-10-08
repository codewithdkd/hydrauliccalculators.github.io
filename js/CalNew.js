function commadot() {

    if ($('#piston').val().indexOf(",") >= 0) {
        $('#piston').val($('#piston').val().replace(/\,/g, "."));
    }
    if ($('#rod').val().indexOf(",") >= 0) {
        $('#rod').val($('#rod').val().replace(/\,/g, "."));
    }
    if ($('#stroke').val().indexOf(",") >= 0) {
        $('#stroke').val($('#stroke').val().replace(/\,/g, "."));
    }
    if ($('#preassure').val().indexOf(",") >= 0) {
        $('#preassure').val($('#preassure').val().replace(/\,/g, "."));
    }
    if ($('#oilflow').val().indexOf(",") >= 0) {
        $('#oilflow').val($('#oilflow').val().replace(/\,/g, "."));
    }
    if ($('#piston_force').val().indexOf(",") >= 0) {
        $('#piston_force').val($('#piston_force').val().replace(/\,/g, "."));
    }
    if ($('#rod_force').val().indexOf(",") >= 0) {
        $('#rod_force').val($('#rod_force').val().replace(/\,/g, "."));
    }
    if ($('#piston_time').val().indexOf(",") >= 0) {
        $('#piston_time').val($('#piston_time').val().replace(/\,/g, "."));
    }
    if ($('#rod_time').val().indexOf(",") >= 0) {
        $('#rod_time').val($('#rod_time').val().replace(/\,/g, "."));
    }
    if ($('#piston_velocity').val().indexOf(",") >= 0) {
        $('#piston_velocity').val($('#piston_velocity').val().replace(/\,/g, "."));
    }
    if ($('#rod_velocity').val().indexOf(",") >= 0) {
        $('#rod_velocity').val($('#rod_velocity').val().replace(/\,/g, "."));
    }

    if ($('#piston').val()) {
        $('#piston').val($('#piston').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#rod').val()) {
        $('#rod').val($('#rod').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#stroke').val()) {
        $('#stroke').val($('#stroke').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#preassure').val()) {
        $('#preassure').val($('#preassure').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#oilflow').val()) {
        $('#oilflow').val($('#oilflow').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#piston_force').val()) {
        $('#piston_force').val($('#piston_force').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#rod_force').val()) {
        $('#rod_force').val($('#rod_force').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#piston_time').val()) {
        $('#piston_time').val($('#piston_time').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#rod_time').val()) {
        $('#rod_time').val($('#rod_time').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#piston_velocity').val()) {
        $('#piston_velocity').val($('#piston_velocity').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }
    if ($('#rod_velocity').val()) {
        $('#rod_velocity').val($('#rod_velocity').val().replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\?|\/|\""|\;|\:]/g, ""));
    }

}


function pistonAreaCalculate(piston_dia) {
    if (($('#unit1').val() == 'mm') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("piston_area").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2)) / 100));
    } else if (($('#unit1').val() == 'cm') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("piston_area").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2))));
    } else if (($('#unit1').val() == 'm') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("piston_area").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2)) * 10000));
    }


    /**For preselected output**/
    else if (($('#unit1').val() == 'mm') && ($('#unit11').val() == 'm2')) {
        document.getElementById("piston_area").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2)) / 1000000));
    } else if (($('#unit1').val() == 'cm') && ($('#unit11').val() == 'm2')) {
        document.getElementById("piston_area").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2)) / 10000));
    } else if (($('#unit1').val() == 'm') && ($('#unit11').val() == 'm2')) {
        document.getElementById("piston_area").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2))));
    } else if (($('#unit1').val() == 'mm') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("piston_area").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2))));
    } else if (($('#unit1').val() == 'cm') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("piston_area").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2)) * 100));
    } else if (($('#unit1').val() == 'm') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("piston_area").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2)) * 1000000));
    }
    var piston_area = document.getElementById("piston_area").value;
    return piston_area;
}

function rodAreaCalculate(piston_area, rod_dia) {
    if (($('#unit2').val() == 'mm') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("rod_area").value = ((piston_area - ((Math.PI * (rod_dia / 2) * (rod_dia / 2)) / 100)));
    } else if (($('#unit2').val() == 'cm') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("rod_area").value = ((piston_area - ((Math.PI * (rod_dia / 2) * (rod_dia / 2)))));
    } else if (($('#unit2').val() == 'm') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("rod_area").value = ((piston_area - ((Math.PI * (rod_dia / 2) * (rod_dia / 2))) * 10000));
    }

    /**For preselected unit**/
    else if (($('#unit2').val() == 'mm') && ($('#unit11').val() == 'm2')) {
        document.getElementById("rod_area").value = ((piston_area - ((Math.PI * (rod_dia / 2) * (rod_dia / 2))) / 1000000));
    } else if (($('#unit2').val() == 'cm') && ($('#unit11').val() == 'm2')) {
        document.getElementById("rod_area").value = ((piston_area - ((Math.PI * (rod_dia / 2) * (rod_dia / 2))) / 10000));
    } else if (($('#unit2').val() == 'm') && ($('#unit11').val() == 'm2')) {
        document.getElementById("rod_area").value = ((piston_area - ((Math.PI * (rod_dia / 2) * (rod_dia / 2)))));
    } else if (($('#unit2').val() == 'mm') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("rod_area").value = ((piston_area - ((Math.PI * (rod_dia / 2) * (rod_dia / 2)))));
    } else if (($('#unit2').val() == 'cm') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("rod_area").value = ((piston_area - ((Math.PI * (rod_dia / 2) * (rod_dia / 2))) * 100));
    } else if (($('#unit2').val() == 'm') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("rod_area").value = ((piston_area - ((Math.PI * (rod_dia / 2) * (rod_dia / 2))) * 1000000));
    }
    var rodArea = document.getElementById("rod_area").value;
    if (rodArea < 0) {
        rodArea = 0;
    }

    return rodArea;

}

function ratioCal(piston_area, rod_area) {
    document.getElementById("ratio").value = (piston_area / rod_area);
    var ratio = document.getElementById("ratio").value;
    return ratio;
}

function forcePistonCal(preassure, piston_area) {
    if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) / 100);

    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) * 100);

    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) / 10000);

    }
    /**/
    else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) / 10000000);

    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) / 1000);

    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) / 1000000000);

    }
    /**/
    else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) / 10);

    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) * 1000);

    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) / 1000);

    }
    /**For preselected unit**/
    else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area * 10));

    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) * 100000);

    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) / 10);

    }
    /**/
    else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) / 10000);

    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area));

    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) / 1000000);

    }
    /**/
    else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) * 100);

    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) * 1000000);

    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area));

    }
    /**/
    else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) * 1000000);

    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) * 10000000000);

    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) * 10000);

    }
    /**/
    else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area * 10));

    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) * 100000);

    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) / 10);

    }
    /**/
    else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) * 10000000);

    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) * 100000000000);

    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) * 100000);

    }
    /**/
    else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area * 10) * 0.101971621);

    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area * 10) * (0.101971621 * 10000));

    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area * 10) * (0.101971621 / 100));

    }
    /**/
    else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area * 10) * (0.101971621 / 100000));

    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area * 10) * ((0.101971621 / 100000) * 10000));

    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area * 10) * ((0.101971621 / 100000) / 100));

    }
    /**/
    else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area * 10) * (0.101971621 * 10));

    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area * 10) * ((0.101971621 * 10) * 10000));

    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area * 10) * ((0.101971621 * 10) / 100));

    }
    if (document.getElementById("preassure").disabled == false) {
        document.getElementById("piston_force").setAttribute("disabled", true);
    }
    var ForcePiston = document.getElementById("piston_force").value - 0;
}

function rodForceCal(preassure, rod_area) {
    if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) / 100);

    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) * 100);

    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) / 10000);

    }
    /**/
    else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) / 10000000);

    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) / 1000);

    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) / 1000000000);

    }
    /**/
    else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) / 10);

    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) * 1000);

    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) / 1000);

    }


    /**For preselected unit**/
    else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) * 10);

    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) * 100000);

    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) / 10);

    }
    /**/
    else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) / 10000);

    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area));

    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) / 1000000);

    }
    /**/
    else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) * 100);

    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) * 1000000);

    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area));

    }

    /**/
    else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) * 1000000);

    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) * 10000000000);

    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) * 10000);

    }
    /**/
    else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) * 10);

    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) * 100000);

    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) / 10);

    }
    /**/
    else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) * 10000000);

    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) * 100000000000);

    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) * 100000);

    }


    /**/
    else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area * 10) * 0.101971621);

    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) * (0.101971621 * 100000));

    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area * 10) * (0.101971621 / 100));

    }
    /**/
    else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) * (0.101971621 / 100000));

    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area * 10) * ((0.101971621 / 100000) * 10000));

    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area * 10) * ((0.101971621 / 100000) / 100));

    }
    /**/
    else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area * 10) * (0.101971621 * 10));

    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area * 10) * ((0.101971621 * 10) * 10000));

    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area * 10) * ((0.101971621 * 10) / 100));

    }
    if (document.getElementById("preassure").disabled == false) {
        document.getElementById("rod_force").setAttribute("disabled", true);
    }

}

function volumePistonCal(piston_dia, stroke) {
    if (($('#unit1').val() == 'mm') && ($('#unit3').val() == 'mm') && ($('#unit12').val() == 'l')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) / 1000000);
    } else if (($('#unit1').val() == 'mm') && ($('#unit3').val() == 'cm') && ($('#unit12').val() == 'l')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) / 100000);
    } else if (($('#unit1').val() == 'mm') && ($('#unit3').val() == 'm') && ($('#unit12').val() == 'l')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) / 1000);
    } else if (($('#unit1').val() == 'cm') && ($('#unit3').val() == 'mm') && ($('#unit12').val() == 'l')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) / 10000);
    } else if (($('#unit1').val() == 'cm') && ($('#unit3').val() == 'cm') && ($('#unit12').val() == 'l')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) / 1000);
    } else if (($('#unit1').val() == 'cm') && ($('#unit3').val() == 'm') && ($('#unit12').val() == 'l')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) / 10);
    } else if (($('#unit1').val() == 'm') && ($('#unit3').val() == 'mm') && ($('#unit12').val() == 'l')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)));
    } else if (($('#unit1').val() == 'm') && ($('#unit3').val() == 'cm') && ($('#unit12').val() == 'l')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) * 10);
    } else if (($('#unit1').val() == 'm') && ($('#unit3').val() == 'm') && ($('#unit12').val() == 'l')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) * 1000);
    }

    /**For preselected output**/
    else if (($('#unit1').val() == 'mm') && ($('#unit3').val() == 'mm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) * 0.001);
    } else if (($('#unit1').val() == 'mm') && ($('#unit3').val() == 'cm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) / 100);
    } else if (($('#unit1').val() == 'mm') && ($('#unit3').val() == 'm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)));
    } else if (($('#unit1').val() == 'cm') && ($('#unit3').val() == 'mm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) / 10);
    } else if (($('#unit1').val() == 'cm') && ($('#unit3').val() == 'cm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)));
    } else if (($('#unit1').val() == 'cm') && ($('#unit3').val() == 'm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) * 100);
    } else if (($('#unit1').val() == 'm') && ($('#unit3').val() == 'mm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) * 1000);
    } else if (($('#unit1').val() == 'm') && ($('#unit3').val() == 'cm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) * 10000);
    } else if (($('#unit1').val() == 'm') && ($('#unit3').val() == 'm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) * 1000000);
    }
    /**/
    else if (($('#unit1').val() == 'mm') && ($('#unit3').val() == 'mm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) / 1000000000);
    } else if (($('#unit1').val() == 'mm') && ($('#unit3').val() == 'cm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) / 100000000);
    } else if (($('#unit1').val() == 'mm') && ($('#unit3').val() == 'm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) / 1000000);
    }
    /**/
    else if (($('#unit1').val() == 'cm') && ($('#unit3').val() == 'mm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) / 10000000);
    } else if (($('#unit1').val() == 'cm') && ($('#unit3').val() == 'cm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) / 1000000);
    } else if (($('#unit1').val() == 'cm') && ($('#unit3').val() == 'm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) / 10000);
    }
    /**/
    else if (($('#unit1').val() == 'm') && ($('#unit3').val() == 'mm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) / 1000);
    } else if (($('#unit1').val() == 'm') && ($('#unit3').val() == 'cm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) / 100);
    } else if (($('#unit1').val() == 'm') && ($('#unit3').val() == 'm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)));
    }
    var pistonvolume = document.getElementById("piston_volume").value;
    return pistonvolume;
}

function volumeRodCal(piston_volume, rod_dia, stroke) {
    if (($('#unit2').val() == 'mm') && ($('#unit3').val() == 'mm') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) / 1000000);
    } else if (($('#unit2').val() == 'mm') && ($('#unit3').val() == 'cm') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) / 100000);
    } else if (($('#unit2').val() == 'mm') && ($('#unit3').val() == 'm') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) / 1000);
    } else if (($('#unit2').val() == 'cm') && ($('#unit3').val() == 'mm') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) / 10000);
    } else if (($('#unit2').val() == 'cm') && ($('#unit3').val() == 'cm') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) / 1000);
    } else if (($('#unit2').val() == 'cm') && ($('#unit3').val() == 'm') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) / 10);
    } else if (($('#unit2').val() == 'm') && ($('#unit3').val() == 'mm') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)));
    } else if (($('#unit2').val() == 'm') && ($('#unit3').val() == 'cm') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) * 10);
    } else if (($('#unit2').val() == 'm') && ($('#unit3').val() == 'm') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) * 1000);
    }

    /**For preselected output**/
    else if (($('#unit2').val() == 'mm') && ($('#unit3').val() == 'mm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) * 0.001);
    } else if (($('#unit2').val() == 'mm') && ($('#unit3').val() == 'cm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) / 100);
    } else if (($('#unit2').val() == 'mm') && ($('#unit3').val() == 'm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)));
    }
    /**/
    else if (($('#unit2').val() == 'cm') && ($('#unit3').val() == 'mm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) / 10);
    } else if (($('#unit2').val() == 'cm') && ($('#unit3').val() == 'cm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)));
    } else if (($('#unit2').val() == 'cm') && ($('#unit3').val() == 'm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) * 100);
    }
    /**/
    else if (($('#unit2').val() == 'm') && ($('#unit3').val() == 'mm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) * 1000);
    } else if (($('#unit2').val() == 'm') && ($('#unit3').val() == 'cm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) * 10000);
    } else if (($('#unit2').val() == 'm') && ($('#unit3').val() == 'm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) * 1000000);
    }
    /**/
    else if (($('#unit2').val() == 'mm') && ($('#unit3').val() == 'mm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) / 1000000000);
    } else if (($('#unit2').val() == 'mm') && ($('#unit3').val() == 'cm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) / 100000000);
    } else if (($('#unit2').val() == 'mm') && ($('#unit3').val() == 'm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) / 1000000);
    }
    /**/
    else if (($('#unit2').val() == 'cm') && ($('#unit3').val() == 'mm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) / 10000000);
    } else if (($('#unit2').val() == 'cm') && ($('#unit3').val() == 'cm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) / 1000000);
    } else if (($('#unit2').val() == 'cm') && ($('#unit3').val() == 'm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) / 10000);
    }
    /**/
    else if (($('#unit2').val() == 'm') && ($('#unit3').val() == 'mm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) / 1000);
    } else if (($('#unit2').val() == 'm') && ($('#unit3').val() == 'cm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) / 100);
    } else if (($('#unit2').val() == 'm') && ($('#unit3').val() == 'm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)));
    }

    var rodVolume = document.getElementById("rod_volume").value;
    return rodVolume;
}

function pistonTimeCal(piston_volume, oilflow) {
    if (($('#unit5').val() == 'lpm') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'l')) {
        document.getElementById("piston_time").value = ((piston_volume) / oilflow) * 60;
        document.getElementById("piston_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'lpm') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60 * 0.001));
        document.getElementById("piston_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'lpm') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'm3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60 * 1000));
        document.getElementById("piston_time").setAttribute("disabled", true);
    }


    /**/
    else if (($('#unit5').val() == 'm3/min') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'l')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * 0.06);
        document.getElementById("piston_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'm3/min') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60 / 1000000));
        document.getElementById("piston_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'm3/min') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'm3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * 60);
        document.getElementById("piston_time").setAttribute("disabled", true);
    }

    /**/
    else if (($('#unit5').val() == 'cm3/min') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'l')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * 60000);
        document.getElementById("piston_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'cm3/min') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * 60);
        document.getElementById("piston_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'cm3/min') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'm3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60 * 1000000));
        document.getElementById("piston_time").setAttribute("disabled", true);
    }


    /**/

    /**For preselected unit**/
    else if (($('#unit5').val() == 'lpm') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'l')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow));
        document.getElementById("piston_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'lpm') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * 0.001);
        document.getElementById("piston_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'lpm') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * 1000);
        document.getElementById("piston_time").setAttribute("disabled", true);
    }

    /**/
    else if (($('#unit5').val() == 'm3/min') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'l')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * 0.001);
        document.getElementById("piston_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'm3/min') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) / 1000000);
        document.getElementById("piston_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'm3/min') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow));
        document.getElementById("piston_time").setAttribute("disabled", true);
    }

    /**/
    else if (($('#unit5').val() == 'cm3/min') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'l')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * 1000);
        document.getElementById("piston_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'cm3/min') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow));
        document.getElementById("piston_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'cm3/min') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * 1000000);
        document.getElementById("piston_time").setAttribute("disabled", true);
    }


    /**/
    else if (($('#unit5').val() == 'lpm') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'l')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * 60000);
        document.getElementById("piston_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'lpm') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60000 * 0.001));
        document.getElementById("piston_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'lpm') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'm3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60000 * 1000));
        document.getElementById("piston_time").setAttribute("disabled", true);
    }

    /**/
    else if (($('#unit5').val() == 'm3/min') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'l')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60000 * 0.001));
        document.getElementById("piston_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'm3/min') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60000 / 1000000));
        document.getElementById("piston_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'm3/min') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'm3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60000));
        document.getElementById("piston_time").setAttribute("disabled", true);
    }


    /**/
    else if (($('#unit5').val() == 'cm3/min') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'l')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60000 * 1000));
        document.getElementById("piston_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'cm3/min') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60000));
        document.getElementById("piston_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'cm3/min') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'm3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60000 * 1000000));
        document.getElementById("piston_time").setAttribute("disabled", true);
    }
    var pistonTime = document.getElementById("piston_time").value;
    return pistonTime;
}

function rodTimeCal(rod_volume, oilflow) {
    if (($('#unit5').val() == 'lpm') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60);
        document.getElementById("rod_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'lpm') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60 * 0.001));
        document.getElementById("rod_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'lpm') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60 * 1000));
        document.getElementById("rod_time").setAttribute("disabled", true);
    }


    /**/
    else if (($('#unit5').val() == 'm3/min') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.06);
        document.getElementById("rod_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'm3/min') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60 / 1000000));
        document.getElementById("rod_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'm3/min') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60);
        document.getElementById("rod_time").setAttribute("disabled", true);
    }



    /**/
    else if (($('#unit5').val() == 'cm3/min') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60000);
        document.getElementById("rod_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'cm3/min') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60);
        document.getElementById("rod_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'cm3/min') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60 * 1000000));
        document.getElementById("rod_time").setAttribute("disabled", true);
    }


    /**/

    /**For preselected unit**/
    else if (($('#unit5').val() == 'lpm') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow));
        document.getElementById("rod_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'lpm') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.001);
        document.getElementById("rod_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'lpm') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 1000);
        document.getElementById("rod_time").setAttribute("disabled", true);
    }

    /**/
    else if (($('#unit5').val() == 'm3/min') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.001);
        document.getElementById("rod_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'm3/min') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 1000000);
        document.getElementById("rod_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'm3/min') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow));
        document.getElementById("rod_time").setAttribute("disabled", true);
    }

    /**/
    else if (($('#unit5').val() == 'cm3/min') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 1000);
        document.getElementById("rod_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'cm3/min') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow));
        document.getElementById("rod_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'cm3/min') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 1000000);
        document.getElementById("rod_time").setAttribute("disabled", true);
    }

    /**/
    else if (($('#unit5').val() == 'lpm') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60000);
        document.getElementById("rod_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'lpm') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60000 * 0.001));
        document.getElementById("rod_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'lpm') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60000 * 1000));
        document.getElementById("rod_time").setAttribute("disabled", true);
    }



    /**/
    else if (($('#unit5').val() == 'm3/min') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60000 * 0.001));
        document.getElementById("rod_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'm3/min') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60000 / 1000000));
        document.getElementById("rod_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'm3/min') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60000);
        document.getElementById("rod_time").setAttribute("disabled", true);
    }

    /**/
    else if (($('#unit5').val() == 'cm3/min') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60000 * 1000));
        document.getElementById("rod_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'cm3/min') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60000);
        document.getElementById("rod_time").setAttribute("disabled", true);
    } else if (($('#unit5').val() == 'cm3/min') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60000 * 1000000));
        document.getElementById("rod_time").setAttribute("disabled", true);
    }
    var rodTime = document.getElementById("rod_time").value;
    return rodTime;
}

function pistonVelocityCal(stroke, piston_time) {
    if (($('#unit3').val() == 'mm') && ($('#unit14').val() == 'sec') && ($('#unit15').val() == 'm/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) / 1000);

    } else if (($('#unit3').val() == 'cm') && ($('#unit14').val() == 'sec') && ($('#unit15').val() == 'm/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) / 100);

    } else if (($('#unit3').val() == 'm') && ($('#unit14').val() == 'sec') && ($('#unit15').val() == 'm/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)));

    }
    /**/
    else if (($('#unit3').val() == 'mm') && ($('#unit14').val() == 'min') && ($('#unit15').val() == 'm/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) / 60000);

    } else if (($('#unit3').val() == 'cm') && ($('#unit14').val() == 'min') && ($('#unit15').val() == 'm/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) / 6000);

    } else if (($('#unit3').val() == 'm') && ($('#unit14').val() == 'min') && ($('#unit15').val() == 'm/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) / 60);

    }
    /**/
    else if (($('#unit3').val() == 'mm') && ($('#unit14').val() == 'ms') && ($('#unit15').val() == 'm/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)));

    } else if (($('#unit3').val() == 'cm') && ($('#unit14').val() == 'ms') && ($('#unit15').val() == 'm/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) * 10);

    } else if (($('#unit3').val() == 'm') && ($('#unit14').val() == 'ms') && ($('#unit15').val() == 'm/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) * 1000);

    }

    /**For preselected unit**/
    else if (($('#unit3').val() == 'mm') && ($('#unit14').val() == 'sec') && ($('#unit15').val() == 'cm/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) / 10);

    } else if (($('#unit3').val() == 'cm') && ($('#unit14').val() == 'sec') && ($('#unit15').val() == 'cm/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)));

    } else if (($('#unit3').val() == 'm') && ($('#unit14').val() == 'sec') && ($('#unit15').val() == 'cm/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) * 100);

    }
    /**/
    else if (($('#unit3').val() == 'mm') && ($('#unit14').val() == 'min') && ($('#unit15').val() == 'cm/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) / 600);

    } else if (($('#unit3').val() == 'cm') && ($('#unit14').val() == 'min') && ($('#unit15').val() == 'cm/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) / 60);

    } else if (($('#unit3').val() == 'm') && ($('#unit14').val() == 'min') && ($('#unit15').val() == 'cm/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) * (100 / 60));

    }
    /**/
    else if (($('#unit3').val() == 'mm') && ($('#unit14').val() == 'ms') && ($('#unit15').val() == 'cm/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) * 100);

    } else if (($('#unit3').val() == 'cm') && ($('#unit14').val() == 'ms') && ($('#unit15').val() == 'cm/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) * 1000);

    } else if (($('#unit3').val() == 'm') && ($('#unit14').val() == 'ms') && ($('#unit15').val() == 'cm/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) * 100000);

    }
    document.getElementById("piston_velocity").disabled = true;
    var pistonVelocity = document.getElementById("piston_velocity").value;
    return pistonVelocity;
}

function rodVelocityCal(stroke, rod_time) {
    if (($('#unit3').val() == 'mm') && ($('#unit14').val() == 'sec') && ($('#unit15').val() == 'm/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) / 1000);

    } else if (($('#unit3').val() == 'cm') && ($('#unit14').val() == 'sec') && ($('#unit15').val() == 'm/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) / 100);

    } else if (($('#unit3').val() == 'm') && ($('#unit14').val() == 'sec') && ($('#unit15').val() == 'm/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)));

    }
    /**/
    else if (($('#unit3').val() == 'mm') && ($('#unit14').val() == 'min') && ($('#unit15').val() == 'm/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) / 60000);

    } else if (($('#unit3').val() == 'cm') && ($('#unit14').val() == 'min') && ($('#unit15').val() == 'm/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) / 6000);

    } else if (($('#unit3').val() == 'm') && ($('#unit14').val() == 'min') && ($('#unit15').val() == 'm/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) / 60);

    }
    /**/
    else if (($('#unit3').val() == 'mm') && ($('#unit14').val() == 'ms') && ($('#unit15').val() == 'm/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)));

    } else if (($('#unit3').val() == 'cm') && ($('#unit14').val() == 'ms') && ($('#unit15').val() == 'm/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) * 10);

    } else if (($('#unit3').val() == 'm') && ($('#unit14').val() == 'ms') && ($('#unit15').val() == 'm/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) * 1000);

    }

    /**For preselected unit**/
    else if (($('#unit3').val() == 'mm') && ($('#unit14').val() == 'sec') && ($('#unit15').val() == 'cm/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) / 10);

    } else if (($('#unit3').val() == 'cm') && ($('#unit14').val() == 'sec') && ($('#unit15').val() == 'cm/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)));

    } else if (($('#unit3').val() == 'm') && ($('#unit14').val() == 'sec') && ($('#unit15').val() == 'cm/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) * 100);

    }
    /**/
    else if (($('#unit3').val() == 'mm') && ($('#unit14').val() == 'min') && ($('#unit15').val() == 'cm/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) / 600);

    } else if (($('#unit3').val() == 'cm') && ($('#unit14').val() == 'min') && ($('#unit15').val() == 'cm/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) / 60);

    } else if (($('#unit3').val() == 'm') && ($('#unit14').val() == 'min') && ($('#unit15').val() == 'cm/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) * (100 / 60));

    }
    /**/
    else if (($('#unit3').val() == 'mm') && ($('#unit14').val() == 'ms') && ($('#unit15').val() == 'cm/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) * 100);

    } else if (($('#unit3').val() == 'cm') && ($('#unit14').val() == 'ms') && ($('#unit15').val() == 'cm/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) * 1000);

    } else if (($('#unit3').val() == 'm') && ($('#unit14').val() == 'ms') && ($('#unit15').val() == 'cm/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) * 100000);

    }
    document.getElementById("rod_velocity").setAttribute("disabled", true);
}

function pistonOutflowCal(oilflow, ratio) {
    if (($('#unit5').val() == 'lpm') && ($('#unit16').val() == 'lpm')) {
        document.getElementById("piston_outflow").value = ((oilflow) / (ratio));
        document.getElementById("rod_outflow").value = ((oilflow) * (ratio));
    } else if (($('#unit5').val() == 'm3/min') && ($('#unit16').val() == 'lpm')) {
        document.getElementById("piston_outflow").value = (((oilflow) / (ratio)) * 1000);
        document.getElementById("rod_outflow").value = (((oilflow) * (ratio)) * 1000);
    } else if (($('#unit5').val() == 'cm3/min') && ($('#unit16').val() == 'lpm')) {
        document.getElementById("piston_outflow").value = (((oilflow) / (ratio)) * 0.001);
        document.getElementById("rod_outflow").value = (((oilflow) * (ratio)) * 0.001);
    }

    /**For preselected unit**/
    else if (($('#unit5').val() == 'lpm') && ($('#unit16').val() == 'm3/min')) {
        document.getElementById("piston_outflow").value = (((oilflow) / (ratio)) * 0.001);
        document.getElementById("rod_outflow").value = (((oilflow) * (ratio)) * 0.001);
    } else if (($('#unit5').val() == 'm3/min') && ($('#unit16').val() == 'm3/min')) {
        document.getElementById("piston_outflow").value = (((oilflow) / (ratio)));
        document.getElementById("rod_outflow").value = (((oilflow) * (ratio)));
    } else if (($('#unit5').val() == 'cm3/min') && ($('#unit16').val() == 'm3/min')) {
        document.getElementById("piston_outflow").value = (((oilflow) / (ratio)) / 1000000);
        document.getElementById("rod_outflow").value = (((oilflow) * (ratio)) / 1000000);
    }
    /**/
    else if (($('#unit5').val() == 'lpm') && ($('#unit16').val() == 'cm3/min')) {
        document.getElementById("piston_outflow").value = (((oilflow) / (ratio)) * 1000);
        document.getElementById("rod_outflow").value = (((oilflow) * (ratio)) * 1000);
    } else if (($('#unit5').val() == 'm3/min') && ($('#unit16').val() == 'cm3/min')) {
        document.getElementById("piston_outflow").value = (((oilflow) / (ratio)) * 1000000);
        document.getElementById("rod_outflow").value = (((oilflow) * (ratio)) * 1000000);
    } else if (($('#unit5').val() == 'cm3/min') && ($('#unit16').val() == 'cm3/min')) {
        document.getElementById("piston_outflow").value = (((oilflow) / (ratio)));
        document.getElementById("rod_outflow").value = (((oilflow) * (ratio)));
    }

    var pistonOutflow = document.getElementById("piston_outflow").value;

    return pistonOutflow;
}

function pressureCal(piston_force, piston_area, rod_area) {
    if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * 100);


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) / 100);

        }
    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * (100 / 10000));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * 100);

        }
    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * (1000 * 10));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) / 10000);

        }
    }

    /**/
    else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area)) / 10;


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = (preassure * rod_area) * 10;

        }
    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) / 100000);


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * 100000);

        }
    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * 10);


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) / 10);

        }
    }

    /**/
    else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) / 1000000);


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * 1000000);

        }
    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) / 10000000000);


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * 10000000000);

        }
    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) / (10000));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * 10000);

        }
    }

    /**/
    else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * 9.80665) / 10;


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * 0.101971621 * 10);

        }
    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * (9.80665 / 100000));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * (0.101971621 * 100000));

        }
    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * (9.80665 * 10));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * (0.101971621 / 10));

        }
    }

    /**/
    else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * (1000 * 10000));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) / 10000000);

        }
    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * ((1000 * 100000) / 100000));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) / 1000);

        }
    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * (1000 * 100000 * 10));


        var rod_area = document.getElementById("rod_area").value - 0;
        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) / 1000000000);

        }
    }


    /**/
    else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * (10000));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) / 10000);

        }
    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * (100000 / 100000));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area));

        }
    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * (100000 * 10));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) / 1000000);

        }
    }

    /**/
    else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area)) / 10;


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = (preassure * rod_area) * 10;

        }
    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) / (100000));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * 100000);

        }
    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * (10));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) / 10);

        }
    }


    /**/
    else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * (9.80665 * 10000));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * (0.101971621 / 10000));

        }
    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * ((9.80665 * 100000) / 100000));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * ((0.101971621 / 100000) * 100000));

        }
    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * (9.80665 * 100000 * 10));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * ((0.101971621 / 100000) / 10));

        }
    }


    /**/
    else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * (1000 * 0.1)) / 10;


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) / 10);

        }
    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * ((1000 * 0.1) / 100000));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * 1000);

        }
    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * (1000 * 0.1 * 10));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) / 1000);

        }
    }



    /**/
    else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * (0.1)) / 10;


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * 100);

        }
    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) / (1000000));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * 1000000);

        }
    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * (0.1 * 10));


        var rod_area = document.getElementById("rod_area").value - 0;
        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area));

        }
    }

    /**/
    else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * (0.1 / 1000000));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * 10000000);

        }
    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) / 100000000000);


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * 100000000000);

        }
    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) / (100000));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * 100000);

        }
    }


    /**/
    else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * (9.80665 / 100));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * (0.101971621 * 100));

        }
    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * ((9.80665 / 10)) / 100000);


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * ((0.101971621 * 10) * 100000));

        }
    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * ((9.80665 / 10) * 10));


        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0 && document.getElementById("preassure").disabled == false) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * ((0.101971621 * 10) / 10));

        }
    }
    document.getElementById("preassure").disabled = true;
    if (document.getElementById("preassure").disabled == false) {
        document.getElementById("rod_force").disabled = true;
    }

}

function pressureByRodForce(rod_force, rod_area, piston_area) {
    if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * 100);

        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) / 100);

        }
    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * (100 / 10000));


        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * 100);

        }
    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * (1000 * 10));


        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) / 10000);

        }
    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * (1000 * 10));



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) / 10000);

        }
    }
    /**/
    else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area)) / 10;



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area)) * 10;

        }
    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) / 100000);



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * 100000);

        }
    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * 10);



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) / 10);

        }
    }

    /**/
    else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) / 1000000);



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * 1000000);

        }
    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) / 10000000000);



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * 10000000000);

        }
    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) / 10000);



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * 10000);

        }
    }

    /**/
    else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * 9.80665) / 10;



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * 0.101971621 * 10);

        }
    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * (9.80665 / 100000));



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * (0.101971621 * 100000));

        }
    } else if (($('#unit4').val() == 'bar') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * (9.80665 * 10));



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * (0.101971621 / 10));

        }
    }

    /**/
    else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * (1000 * 10000));



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) / 10000000);

        }
    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * ((1000 * 100000) / 100000));



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) / 1000);

        }
    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * (1000 * 100000 * 10));



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) / 1000000000);

        }
    }
    /**/
    else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * 10000);



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) / 10000);

        }
    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * (100000 / 100000));



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area));

        }
    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * (100000 * 10));



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) / 1000000);

        }
    }

    /**/
    else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area)) / 10;



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area)) * 10;

        }
    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) / 100000);



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * 100000);

        }
    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * 10);



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) / 10);

        }
    }

    /**/
    else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * (9.80665 * 10000));



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * (0.101971621 / 10000));

        }
    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * ((9.80665 * 100000) / 100000));



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * ((0.101971621 / 100000) * 100000));

        }
    } else if (($('#unit4').val() == 'P') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * (9.80665 * 100000 * 10));



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * ((0.101971621 / 100000) / 10));

        }
    }
    /**/
    else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * (1000 * 0.1)) / 10;



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) / 10);

        }
    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * ((1000 * 0.1) / 100000));



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * 1000);

        }
    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kN') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * (1000 * 0.1 * 10));



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) / 1000);

        }
    }

    /**/
    else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * 0.1) / 10;



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * 100);

        }
    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) / 1000000);



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * 1000000);

        }
    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'N') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * (0.1 * 10));



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area));

        }
    }

    /**/
    else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * (0.1 / 1000000));



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * 10000000);

        }
    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) / 100000000000);



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * 100000000000);

        }
    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'dyn') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) / 100000);



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * 100000);

        }
    }
    /**/
    else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'cm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * (9.80665 / 100));



        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * (0.101971621 * 100));

        }
    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * ((9.80665 / 10)) / 100000);


        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * ((0.101971621 * 10) * 100000));

        }
    } else if (($('#unit4').val() == 'MPa') && ($('#unit13').val() == 'kgf') && ($('#unit11').val() == 'mm2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * ((9.80665 / 10) * 10));


        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * ((0.101971621 * 10) / 10));

        }
    }
    document.getElementById("preassure").disabled = true;
    document.getElementById("piston_force").disabled = true;
}

function oilFlowOutFlowCal(piston_volume, piston_time) {
    /**oilflow piston & rod outflow calculation**/
    if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'l')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * 60);
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (60 * 0.001));
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * 60000);
    }
    /**/
    else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'l')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * 60000);
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * 60);
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (60 * 1000000));
    }
    /**/
    else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'l')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (60 * 0.001));
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (60 / 1000000));
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (60));
    }

    /**/
    else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'l')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)));
    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * 0.001);
    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * 1000);
    }



    /**/
    else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'l')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * 1000);
    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)));
    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * 1000000);
    }


    /**/
    else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'l')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * 0.001);
    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) / 1000000);
    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)));
    }

    /**/
    else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'l')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * 60000);
    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (60000 * 0.001));
    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (60000 * 1000));
    }


    /**/
    else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'l')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (60000 * 1000));
    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (60000));
    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (60000 * 1000000));
    }

    /**/
    else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'l')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (60000 * 0.001));
    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (60000 / 1000000));
    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (60000));
    }
    var oilflow = document.getElementById("oilflow").value - 0;
    //document.getElementById("piston_outflow").value=(oilflow/(document.getElementById("ratio").value));
    //document.getElementById("rod_outflow").value=((oilflow)*(document.getElementById("ratio").value));

    document.getElementById("oilflow").disabled = true;
    //document.getElementById("piston_outflow").disabled = true;
    //document.getElementById("rod_outflow").disabled = true;

    return oilflow;

}

function outFlowCal(oilflow) {
    document.getElementById("piston_outflow").value = (oilflow / (document.getElementById("ratio").value));
    document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
}

function rodTimeCalBackword(rod_volume, oilflow) {
    /*rod Time calculation**/
    if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60);
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60 * 0.001));
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60 * 1000));
    }
    /**/
    else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60000);

    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60);
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60 * 1000000));

    }
    /**/
    else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60 * 0.001));

    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60 / 1000000));

    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60);

    }

    /**/
    else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow));
    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.001);
    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 1000);
    }

    /**/
    else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 1000);

    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow));
    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 1000000);
    }


    /**/
    else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.001);
    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) / 1000000);

    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow));

    }

    /**/
    else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60000);

    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60000 * 0.001));

    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60000 * 1000));
    }


    /**/
    else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60000 * 1000));
    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60000);
    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60000 * 1000000));
    }

    /**/
    else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'l')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60000 * 0.001));
    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60000 / 1000000));
    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60000);
    }

    document.getElementById("rod_time").disabled = true;
}

function oilFlowByRodCal(rod_volume, rod_time) {
    if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'l')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * 60);
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (60 * 0.001));
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * 60000);
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'l')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * 60000);
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * 60);
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (60 * 1000000));
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'l')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (60 * 0.001));
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (60 / 1000000));
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * 60);
    }

    /**/
    else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'l')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time));
    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * 0.001);
    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * 1000);
    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'l')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * 1000);
    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time));
    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * 1000000);
    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'l')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * 0.001);
    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) / 1000000);
    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time));
    }

    /**/
    else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'l')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * 60000);
    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (60000 * 0.001));
    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'lpm') && ($('#unit12').val() == 'm3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (60000 * 1000));
    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'l')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (60000 * 1000));
    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (60000));
    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'cm3/min') && ($('#unit12').val() == 'm3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (60000 * 1000000));
    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'l')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (60000 * 0.001));
    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (60000 / 1000000));
    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'm3/min') && ($('#unit12').val() == 'cm3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * 60000);
    }

    document.getElementById("oilflow").disabled = true;
    var oilflow = document.getElementById("oilflow").value;
    return oilflow;
}

function timeNDepByVelCal(stroke, piston_velocity) {
    if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'l') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 1000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
                document.getElementById("oilflow").disabled = true;
            }
        }


        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.001;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.001;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 1000);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'cm3') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 1000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60*0.001);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.001);
            document.getElementById("oilflow").disabled = true;

        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.001);
                document.getElementById("oilflow").disabled = true;
            }
        }


        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.001;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.001;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }
        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 0.001);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 1000);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'm3') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 1000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60*1000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.001;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.001;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }
        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 1000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 1000);
        document.getElementById("rod_velocity").disabled = true;
    }

    /**code ends here**/
    else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'l') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 100);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.001;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.001;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 100);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'cm3') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 100);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60*0.001);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.001);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.001);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.001;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.001;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 0.001);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 100);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'm3') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 100);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60*1000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.001;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.001;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 1000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 100);
        document.getElementById("rod_velocity").disabled = true;
    }

    /**code ends here**/
    else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'l') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.001;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.001;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time));
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'cm3') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.001);
        document.getElementById("oilflow").disabled = true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.001);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.001);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.001;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.001;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 0.001);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time));
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'm3') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60*1000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.001;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.001;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 1000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time));
        document.getElementById("rod_velocity").disabled = true;
    }


    /**code ends here**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'l') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 1000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60*0.001);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.001);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.001);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 0.001);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 1000);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'cm3') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 1000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*(60/1000000));
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * (60 / 1000000));
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * (60 / 1000000));
                document.getElementById("oilflow").disabled = true;
            }
        }


        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60 / 1000000));
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 1000);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'm3') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 1000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*(60));
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * (60));
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * (60));
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60));
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 1000);
        document.getElementById("rod_velocity").disabled = true;
    }

    /**code ends here**/
    else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'l') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 100);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60*0.001);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.001);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.001);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }
        if ($('#unit12').val() == 'l') {
            if (rod_volume > 0) {
                document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 0.001);
                document.getElementById("rod_time").disabled = true;
            }
        }
        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 100);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'cm3') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 100);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*(60/1000000));
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * (60 / 1000000));
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * (60 / 1000000));
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }
        if ($('#unit12').val() == 'l') {
            if (rod_volume > 0) {
                document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60 / 1000000));
                document.getElementById("rod_time").disabled = true;
            }
        }
        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 100);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'm3') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 100);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*(60));
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * (60));
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * (60));
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }
        if ($('#unit12').val() == 'l') {
            if (rod_volume > 0) {
                document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60));
                document.getElementById("rod_time").disabled = true;
            }
        }
        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 100);
        document.getElementById("rod_velocity").disabled = true;
    }

    /**code ends here**/
    else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'l') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60*0.001);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.001);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.001);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 0.001);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time));
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'cm3') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*(60/1000000));
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * (60 / 1000000));

        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * (60 / 1000000));
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60 / 1000000));
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time));
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'm3') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*(60));
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * (60));
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * (60));
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60));
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time));
        document.getElementById("rod_velocity").disabled = true;
    }

    /**code ends here**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'l') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 1000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60*1000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.001;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.001;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 1000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 1000);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'cm3') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 1000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.001;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.001;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 1000);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'm3') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 1000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60*1000000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.001;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.001;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 1000000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 1000);
        document.getElementById("rod_velocity").disabled = true;
    }

    /**code ends here**/
    else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'l') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 100);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60*1000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.001;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.001;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 1000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 100);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'cm3') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 100);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.001;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.001;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 100);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'sec' && $('#unit12').val() == 'm3') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 100);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60*1000000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.001;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.001;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 1000000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 100);
        document.getElementById("rod_velocity").disabled = true;
    }
    /**code ends here**/
    else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60*1000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000);
                document.getElementById("oilflow").disabled = true;
            }
        }


        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.001;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.001;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 1000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time));
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 10);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 10);
        document.getElementById("rod_velocity").disabled = true;
    }

    /**/
    else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time));
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 100);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 100);
        document.getElementById("rod_velocity").disabled = true;
    }


    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 10);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60*0.001);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.001);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.001);
                document.getElementById("oilflow").disabled = true;
            }
        }


        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 0.001);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 10);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60*0.001);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.001);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.001);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 0.001);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time));
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 100);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60*0.001);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.001);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.001);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 0.001);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 100);
        document.getElementById("rod_velocity").disabled = true;
    }


    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 10);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60*1000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.001;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.001;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 1000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 10);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60*1000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.001;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.001;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 1000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time));
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 100);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60*1000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 1000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.001;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.001;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 1000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 100);
        document.getElementById("rod_velocity").disabled = true;
    }



    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 60000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time));
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time));
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time));
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow));
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 60000);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 6000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time));
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time));
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time));
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow));
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 6000);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 60);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time));
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time));
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time));
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow));
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 60);
        document.getElementById("rod_velocity").disabled = true;
    }


    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time));
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 10);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }


        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 10);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 1000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 1000);
        document.getElementById("rod_velocity").disabled = true;
    }

    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 60000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*0.001);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.001);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 60000);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 6000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*0.001);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.001);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 6000);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 60);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*0.001);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.001);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 60);
        document.getElementById("rod_velocity").disabled = true;
    }



    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*0.001*60000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001 * 60000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001 * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.001 * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time));
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 10);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*0.001*60000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001 * 60000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001 * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.001 * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 10);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 1000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*0.001*60000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001 * 60000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001 * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.001 * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 1000);
        document.getElementById("rod_velocity").disabled = true;
    }


    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 60000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*1000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 1000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 60000);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 6000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*1000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 1000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 6000);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 60);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*1000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 1000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 60);
        document.getElementById("rod_velocity").disabled = true;
    }


    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*1000*60000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000 * 60000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000 * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 1000 * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time));
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 10);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*1000*60000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000 * 60000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000 * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }


        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 1000 * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 10);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 1000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*1000*60000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000 * 60000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000 * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }


        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 1000 * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 1000);
        document.getElementById("rod_velocity").disabled = true;
    }




    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 600);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time));
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time));
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time));
                document.getElementById("oilflow").disabled = true;
            }
        }


        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow));
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 600);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 60);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time));
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time));
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time));
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow));
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 60);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * (100 / 60));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time));
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time));
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time));
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow));
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * (100 / 60));
        document.getElementById("rod_velocity").disabled = true;
    }


    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 100);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 100);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 1000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }


        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 1000);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 100000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*60000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }


        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 100000);
        document.getElementById("rod_velocity").disabled = true;
    }




    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 600);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*0.001);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001);
                document.getElementById("oilflow").disabled = true;
            }
        }


        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.001);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 600);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 60);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*0.001);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.001);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 60);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * (100 / 60));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001);
        document.getElementById("oilflow").disabled = true;

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.001);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * (100 / 60));
        document.getElementById("rod_velocity").disabled = true;
    }






    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 100);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*0.001*60000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001 * 60000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001 * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.001 * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 100);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 1000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*0.001*60000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001 * 60000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001 * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.001 * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 1000);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 100000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.001 * 60000);
        document.getElementById("oilflow").disabled = true;

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 1000000;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.001 * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 100000);
        document.getElementById("rod_velocity").disabled = true;
    }



    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 600);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*1000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 1000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 600);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 60);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*1000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 1000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 60);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * (100 / 60));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*1000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 1000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * (100 / 60));
        document.getElementById("rod_velocity").disabled = true;
    }




    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 100);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*1000*60000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000 * 60000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000 * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 1000 * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 100);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 1000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*1000*60000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000 * 60000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000 * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 1000 * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 1000);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 100000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        //document.getElementById("oilflow").value=((piston_volume/piston_time)*1000*60000);
        //document.getElementById("oilflow").disabled=true;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000 * 60000);
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 1000 * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'lpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000;
        } else if ($('#unit16').val() == 'm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) / 1000000;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) / 1000000;
        } else if ($('#unit16').val() == 'cm3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 1000 * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 100000);
        document.getElementById("rod_velocity").disabled = true;
    }


}

function rodTimeByRodVelCal(stroke, rod_velocity) {
    if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 1000);

    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 100);
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity));
    } else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 1000);
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 100);
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity));
    }

    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 1000);
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 100);
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity));
    }

    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 10);
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity));
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * 100);
    }

    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 10);
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity));
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * 100);
    }
    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 10);
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity));
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * 100);
    }

    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 60000);
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 6000);
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 60);
    }

    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity));
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * 10);
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * 1000);
    }

    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 60000);
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 6000);
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 60);
    }

    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity));
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * 10);
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * 1000);
    }

    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 60000);
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 6000);
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 60);
    }

    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity));
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * 10);
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * 1000);
    }

    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 600);
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 60);
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * (100 / 60));
    }

    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * (100));
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * (1000));
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'lpm' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * (100000));
    }
    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 600);
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 60);
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * (100 / 60));
    }
    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * (100));
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * (1000));
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * (100000));
    }
    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 600);
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 60);
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * (100 / 60));
    }
    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * (100));
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * (1000));
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit5').val() == 'cm3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * (100000));
    }

    document.getElementById("rod_time").disabled = true;
    var rod_time = document.getElementById("rod_time").value;
    return rod_time;
}

function pistonTimeByVelCal(stroke, piston_velocity) {
    if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 1000);
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity));
    }

    /**code ends here**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 10);
    }

    /**/
    else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 100);
    }

    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'm/s' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 60000);
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'm/s' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 6000);
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'm/s' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 60);
    }

    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 600);
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 100000);
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * (100 / 60));
    }

    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 100);
    } else if ($('#unit3').val() == 'cm' && $('#unit15').val() == 'cm/s' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 1000);
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 100000);
    }

    /**/
    else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 600);
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * (100 / 60));
    } else if ($('#unit3').val() == 'mm' && $('#unit15').val() == 'cm/s' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 100);
    } else if ($('#unit3').val() == 'm' && $('#unit15').val() == 'cm/s' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 100000);
    }
    document.getElementById("piston_time").disabled = true;
    // Pending here
}

// Methods for Imperial

function pistonAreaCalI(piston_dia) {
    if (($('#unit1').val() == 'in') && ($('#unit11').val() == 'in2')) {
        document.getElementById("piston_area").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2))));
    } else if (($('#unit1').val() == 'ft') && ($('#unit11').val() == 'in2')) {
        document.getElementById("piston_area").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2)) * 144));
    }

    /**For preselected output**/
    else if (($('#unit1').val() == 'in') && ($('#unit11').val() == 'ft2')) {
        document.getElementById("piston_area").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2)) / 144));
    } else if (($('#unit1').val() == 'ft') && ($('#unit11').val() == 'ft2')) {
        document.getElementById("piston_area").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2))));
    }

    var pistonArea = document.getElementById("piston_area").value;
    return pistonArea;
}

function rodAreaCalI(piston_area, rod_dia) {
    if (($('#unit2').val() == 'in') && ($('#unit11').val() == 'in2')) {
        document.getElementById("rod_area").value = ((piston_area - ((Math.PI * (rod_dia / 2) * (rod_dia / 2)))));
    } else if (($('#unit2').val() == 'ft') && ($('#unit11').val() == 'in2')) {
        document.getElementById("rod_area").value = ((piston_area - ((Math.PI * (rod_dia / 2) * (rod_dia / 2))) * 144));
    }
    /**For preselected unit**/
    else if (($('#unit2').val() == 'in') && ($('#unit11').val() == 'ft2')) {
        document.getElementById("rod_area").value = ((piston_area - ((Math.PI * (rod_dia / 2) * (rod_dia / 2))) / 144));
    } else if (($('#unit2').val() == 'ft') && ($('#unit11').val() == 'ft2')) {
        document.getElementById("rod_area").value = ((piston_area - ((Math.PI * (rod_dia / 2) * (rod_dia / 2)))));
    }

    var rodArea = document.getElementById("rod_area").value;

    return rodArea;
}

// Piston Volumen Imperial Side
function pistonVolumeCalI(piston_dia, stroke) {
    if (($('#unit1').val() == 'in') && ($('#unit3').val() == 'in') && ($('#unit12').val() == 'in3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)));
    } else if (($('#unit1').val() == 'in') && ($('#unit3').val() == 'ft') && ($('#unit12').val() == 'in3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) * 12);
    } else if (($('#unit1').val() == 'ft') && ($('#unit3').val() == 'in') && ($('#unit12').val() == 'in3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) * 144);
    } else if (($('#unit1').val() == 'ft') && ($('#unit3').val() == 'ft') && ($('#unit12').val() == 'in3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) * (144 * 12));
    }

    /**For preselected unit**/
    else if (($('#unit1').val() == 'in') && ($('#unit3').val() == 'in') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) / 1728.006773662);
    } else if (($('#unit1').val() == 'in') && ($('#unit3').val() == 'ft') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) / 144);
    } else if (($('#unit1').val() == 'ft') && ($('#unit3').val() == 'in') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) / 12);
    } else if (($('#unit1').val() == 'ft') && ($('#unit3').val() == 'ft') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)));
    }
    /**/
    else if (($('#unit1').val() == 'in') && ($('#unit3').val() == 'in') && ($('#unit12').val() == 'gal')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) * 0.0043289874);
    } else if (($('#unit1').val() == 'in') && ($('#unit3').val() == 'ft') && ($('#unit12').val() == 'gal')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) * (0.0043289874 * 12));
    } else if (($('#unit1').val() == 'ft') && ($('#unit3').val() == 'in') && ($('#unit12').val() == 'gal')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) * (0.0043289874 * 144));
    } else if (($('#unit1').val() == 'ft') && ($('#unit3').val() == 'ft') && ($('#unit12').val() == 'gal')) {
        document.getElementById("piston_volume").value = (((Math.PI * (piston_dia / 2) * (piston_dia / 2) * stroke)) * 7.4805195567);
    }

    var pistonVolume = document.getElementById("piston_volume").value;
    return pistonVolume;
}

function pistonTimeCalI(piston_volume, oilflow) {
    if (($('#unit5').val() == 'gpm') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'in3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60 / 231.0009031549));

    } else if (($('#unit5').val() == 'gpm') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60 * 7.4805195567));

    } else if (($('#unit5').val() == 'gpm') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'gal')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60));

    }

    /**/
    else if (($('#unit5').val() == 'in3/min') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'in3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * 60);

    } else if (($('#unit5').val() == 'in3/min') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60 * 1728.006773662));

    } else if (($('#unit5').val() == 'in3/min') && ($('#unit14').val() == 'sec') && ($('#unit12').val() == 'gal')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60 * 231.0009031549));

    }

    /**/

    /**For preselected unit**/
    else if (($('#unit5').val() == 'gpm') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'in3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * 0.0043289874);

    } else if (($('#unit5').val() == 'gpm') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * 7.4805195567);

    } else if (($('#unit5').val() == 'gpm') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'gal')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow));

    }

    /**/
    else if (($('#unit5').val() == 'in3/min') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'in3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow));

    } else if (($('#unit5').val() == 'in3/min') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * 1728.006773662);

    } else if (($('#unit5').val() == 'in3/min') && ($('#unit14').val() == 'min') && ($('#unit12').val() == 'gal')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * 231.0009031549);

    }

    /**/
    else if (($('#unit5').val() == 'gpm') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'in3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60000 * 0.0043289874));

    } else if (($('#unit5').val() == 'gpm') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60000 * 7.4805195567));

    } else if (($('#unit5').val() == 'gpm') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'gal')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60000));

    }


    /**/
    else if (($('#unit5').val() == 'in3/min') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'in3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * 60000);

    } else if (($('#unit5').val() == 'in3/min') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60000 * 1728.006773662));

    } else if (($('#unit5').val() == 'in3/min') && ($('#unit14').val() == 'ms') && ($('#unit12').val() == 'gal')) {
        document.getElementById("piston_time").value = ((piston_volume / oilflow) * (60000 * 231.0009031549));

    }
    document.getElementById("piston_time").setAttribute("disabled", true);
    var pistonTime = document.getElementById("piston_time").value;
    return pistonTime;
}

function pistonVelocityCalI(stroke, piston_time) {
    if (($('#unit3').val() == 'in') && ($('#unit14').val() == 'sec') && ($('#unit15').val() == 'in/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)));
    } else if (($('#unit3').val() == 'ft') && ($('#unit14').val() == 'sec') && ($('#unit15').val() == 'in/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) * 12);
    }
    /**/
    else if (($('#unit3').val() == 'in') && ($('#unit14').val() == 'min') && ($('#unit15').val() == 'in/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) / 60);
    } else if (($('#unit3').val() == 'ft') && ($('#unit14').val() == 'min') && ($('#unit15').val() == 'in/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) / 5);
    }
    /**/
    else if (($('#unit3').val() == 'in') && ($('#unit14').val() == 'ms') && ($('#unit15').val() == 'in/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) * 1000);
    } else if (($('#unit3').val() == 'ft') && ($('#unit14').val() == 'ms') && ($('#unit15').val() == 'in/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) * (1000 * 12));
    }

    /**For preselected unit**/
    else if (($('#unit3').val() == 'in') && ($('#unit14').val() == 'sec') && ($('#unit15').val() == 'ft/s')) {
        if (stroke > 0 && stroke <= 9999.9999 && piston_time > 0) {
            document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) / 12);

        }
    } else if (($('#unit3').val() == 'ft') && ($('#unit14').val() == 'sec') && ($('#unit15').val() == 'ft/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)));
    }
    /**/
    else if (($('#unit3').val() == 'in') && ($('#unit14').val() == 'min') && ($('#unit15').val() == 'ft/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) / 720);
    } else if (($('#unit3').val() == 'ft') && ($('#unit14').val() == 'min') && ($('#unit15').val() == 'ft/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) / 60);
    }
    /**/
    else if (($('#unit3').val() == 'in') && ($('#unit14').val() == 'ms') && ($('#unit15').val() == 'ft/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) * (1000 / 12));
    } else if (($('#unit3').val() == 'ft') && ($('#unit14').val() == 'ms') && ($('#unit15').val() == 'ft/s')) {
        document.getElementById("piston_velocity").value = (((stroke) / (piston_time)) * 1000);
    }

    document.getElementById("piston_velocity").setAttribute("disabled", true);
    var pistonVelocity = document.getElementById("piston_velocity").value;
    return pistonVelocity;
}

function pressureCalI(piston_force, piston_area, rod_area) {
    if (($('#unit4').val() == 'psi') && ($('#unit13').val() == 'lbf') && ($('#unit11').val() == 'in2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area));

        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area));
        }
    } else if (($('#unit4').val() == 'psi') && ($('#unit13').val() == 'lbf') && ($('#unit11').val() == 'ft2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) / 144);

        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * 144);
        }
    } else if (($('#unit4').val() == 'psi') && ($('#unit13').val() == 'pdl') && ($('#unit11').val() == 'in2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * 0.03108095017161);

        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * 32.17404855639);
        }
    } else if (($('#unit4').val() == 'psi') && ($('#unit13').val() == 'pdl') && ($('#unit11').val() == 'ft2')) {
        document.getElementById("preassure").value = ((piston_force / piston_area) * (0.03108095017161 / 144));

        var preassure = document.getElementById("preassure").value - 0;
        if (rod_area > 0) {
            document.getElementById("rod_force").value = ((preassure * rod_area) * (32.17404855639 * 144));
        }
    }
    document.getElementById("preassure").disabled = true;
    document.getElementById("rod_force").disabled = true;
}

function pistonForceCalI(preassure, piston_area) {
    if (($('#unit4').val() == 'psi') && ($('#unit13').val() == 'lbf') && ($('#unit11').val() == 'in2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area));
    }
    if (($('#unit4').val() == 'psi') && ($('#unit13').val() == 'lbf') && ($('#unit11').val() == 'ft2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) * 144);
    }

    /**For preselected unit**/
    else if (($('#unit4').val() == 'psi') && ($('#unit13').val() == 'pdl') && ($('#unit11').val() == 'in2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) * 32.1740407219);
    } else if (($('#unit4').val() == 'psi') && ($('#unit13').val() == 'pdl') && ($('#unit11').val() == 'ft2')) {
        document.getElementById("piston_force").value = ((preassure * piston_area) * (32.1740407219 * 144));
    }

    if (document.getElementById("preassure").disabled == false) {
        document.getElementById("piston_force").setAttribute("disabled", true);
    }
    pistonForce = document.getElementById("piston_force").value;
    return pistonForce;
}

function oilFlowCalI(piston_volume, piston_time) {
    if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'in3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (0.0043289874 * 60));
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (7.4805195567 * 60));


    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'gal')) {

        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (60));
    }
    /**/
    else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'in3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (60));
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (1728.006773662 * 60));


    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'gal')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (231.0009031549 * 60));

    }

    /**/
    else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'in3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (0.0043289874));

    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (7.4805195567));

    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'gal')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)));

    }
    /**/
    else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'in3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)));


    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * 1728.006773662);

    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'gal')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * 231.0009031549);


    }
    /**/
    else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'in3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (0.0043289874 * 60000));


    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (7.4805195567 * 60000));


    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'gal')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (60000));


    }
    /**/
    else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'in3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (60000));


    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (1728.006773662 * 60000));


    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'gal')) {
        document.getElementById("oilflow").value = (((piston_volume) / (piston_time)) * (231.0009031549 * 60000));
    }
    document.getElementById("oilflow").disabled = true;

    var oilflow = document.getElementById("oilflow").value;

    return oilflow;
}

function rodTimeCalI(rod_volume, oilflow) {
    if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'in3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (0.0043289874 * 60));
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (7.4805195567 * 60));
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'gal')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60));
    }
    /**/
    else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'in3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60));
    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (1728.006773662 * 60));

    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'gal')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (231.0009031549 * 60));
    }

    /**/
    else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'in3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (0.0043289874));

    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (7.4805195567));

    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'gal')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow));

    }
    /**/
    else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'in3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow));

    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 1728.006773662);

    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'gal')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * 231.0009031549);

    }
    /**/
    else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'in3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (0.0043289874 * 60000));

    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (7.4805195567 * 60000));

    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'gal')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60000));

    }
    /**/
    else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'in3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (60000));

    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (1728.006773662 * 60000));

    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'gal')) {
        document.getElementById("rod_time").value = ((rod_volume / oilflow) * (231.0009031549 * 60000));
    }

    document.getElementById("rod_time").disabled = true;
    var rodTime = document.getElementById("rod_time").value;
    return rodTime;
}

function rodVelocityCalI(stroke, rod_time) {
    if (($('#unit3').val() == 'in') && ($('#unit14').val() == 'sec') && ($('#unit15').val() == 'in/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)));

    } else if (($('#unit3').val() == 'ft') && ($('#unit14').val() == 'sec') && ($('#unit15').val() == 'in/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) * 12);

    }
    /**/
    else if (($('#unit3').val() == 'in') && ($('#unit14').val() == 'min') && ($('#unit15').val() == 'in/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) / 60);

    } else if (($('#unit3').val() == 'ft') && ($('#unit14').val() == 'min') && ($('#unit15').val() == 'in/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) / 5);

    }
    /**/
    else if (($('#unit3').val() == 'in') && ($('#unit14').val() == 'ms') && ($('#unit15').val() == 'in/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) * 1000);

    } else if (($('#unit3').val() == 'ft') && ($('#unit14').val() == 'ms') && ($('#unit15').val() == 'in/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) * (1000 * 12));

    }

    /**For preselected unit**/
    else if (($('#unit3').val() == 'in') && ($('#unit14').val() == 'sec') && ($('#unit15').val() == 'ft/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) / 12);

    } else if (($('#unit3').val() == 'ft') && ($('#unit14').val() == 'sec') && ($('#unit15').val() == 'ft/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)));

    }
    /**/
    else if (($('#unit3').val() == 'in') && ($('#unit14').val() == 'min') && ($('#unit15').val() == 'ft/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) / 720);

    } else if (($('#unit3').val() == 'ft') && ($('#unit14').val() == 'min') && ($('#unit15').val() == 'ft/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) / 60);

    }
    /**/
    else if (($('#unit3').val() == 'in') && ($('#unit14').val() == 'ms') && ($('#unit15').val() == 'ft/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) * (1000 / 12));

    } else if (($('#unit3').val() == 'ft') && ($('#unit14').val() == 'ms') && ($('#unit15').val() == 'ft/s')) {
        document.getElementById("rod_velocity").value = (((stroke) / (rod_time)) * 1000);

    }
    document.getElementById("rod_velocity").setAttribute("disabled", true);
}

function rodVolumeCalI(piston_volume, rod_dia, stroke) {
    if (($('#unit2').val() == 'in') && ($('#unit3').val() == 'in') && ($('#unit12').val() == 'in3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)));
    } else if (($('#unit2').val() == 'in') && ($('#unit3').val() == 'ft') && ($('#unit12').val() == 'in3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) * 12);
    } else if (($('#unit2').val() == 'ft') && ($('#unit3').val() == 'in') && ($('#unit12').val() == 'in3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) * 144);
    } else if (($('#unit2').val() == 'ft') && ($('#unit3').val() == 'ft') && ($('#unit12').val() == 'in3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) * (144 * 12));
    }

    /**For preselected output**/
    else if (($('#unit2').val() == 'in') && ($('#unit3').val() == 'in') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) / 1728.006773662);
    } else if (($('#unit2').val() == 'in') && ($('#unit3').val() == 'ft') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) / 144);
    } else if (($('#unit2').val() == 'ft') && ($('#unit3').val() == 'in') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) / 12);
    } else if (($('#unit2').val() == 'ft') && ($('#unit3').val() == 'ft') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)));
    }
    /**/
    else if (($('#unit2').val() == 'in') && ($('#unit3').val() == 'in') && ($('#unit12').val() == 'gal')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) * 0.0043289874);
    } else if (($('#unit2').val() == 'in') && ($('#unit3').val() == 'ft') && ($('#unit12').val() == 'gal')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) * (0.0043289874 * 12));
    } else if (($('#unit2').val() == 'ft') && ($('#unit3').val() == 'in') && ($('#unit12').val() == 'gal')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) * (0.0043289874 * 144));
    } else if (($('#unit2').val() == 'ft') && ($('#unit3').val() == 'ft') && ($('#unit12').val() == 'gal')) {
        document.getElementById("rod_volume").value = (piston_volume - ((Math.PI * (rod_dia / 2) * (rod_dia / 2) * stroke)) * 7.4805195567);
    }

    var rodVolume = document.getElementById("rod_volume").value;
    return rodVolume;

}

function oilFlowByRodCalI(rod_volume, rod_time) {
    if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'in3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (0.0043289874 * 60));


    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (7.4805195567 * 60));


    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'gal')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (60));



    }
    /**/
    else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'in3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (60));


    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (1728.006773662 * 60));


    } else if (($('#unit14').val() == 'sec') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'gal')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (231.0009031549 * 60));


    }
    /**/
    else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'in3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (0.0043289874));


    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (7.4805195567));


    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'gal')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time));


    }

    /**/
    else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'in3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time));


    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * 1728.006773662);


    } else if (($('#unit14').val() == 'min') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'gal')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * 231.0009031549);



    }
    /**/
    else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'in3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (0.0043289874 * 60000));


    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (7.4805195567 * 60000));


    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'gpm') && ($('#unit12').val() == 'gal')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * 60000);


    }
    /**/
    else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'in3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * 60000);


    } else if (($('#unit14').val() == 'ms') && ($('#unit5').val() == 'in3/min') && ($('#unit12').val() == 'ft3')) {
        document.getElementById("oilflow").value = ((rod_volume / rod_time) * (1728.006773662 * 60000));
    }

    document.getElementById("oilflow").disabled = true;

    var oilFlow = document.getElementById("oilflow").value;
    return oilFlow;

}

function pistonOutflowCalI(oilflow, ratio) {
    var pistonOutflow;
    var unit5 = $('#unit5').val();
    var unit16 = $('#unit16').val();
    var pistonoutflowCalc;

    if ((unit5 == 'gpm') && (unit16 == 'gpm')) {
        pistonoutflowCalc = (oilflow) / (ratio);
        //pistonOutflow = document.getElementById("piston_outflow").value=((oilflow)/(ratio));
        document.getElementById("rod_outflow").value = ((oilflow) * (ratio));
    } else if ((unit5 == 'in3/min') && (unit16 == 'gpm')) {
        pistonoutflowCalc = ((oilflow) / (ratio)) * 0.0043289874;
        //pistonOutflow = document.getElementById("piston_outflow").value=(((oilflow)/(ratio))*0.0043289874);
        document.getElementById("rod_outflow").value = (((oilflow) * (ratio)) * 0.0043289874);
    }

    /**For preselected unit**/
    else if ((unit5 == 'gpm') && (unit16 == 'in3/min')) {
        pistonoutflowCalc = ((oilflow) / (ratio)) * 231.0009031549;
        //pistonOutflow = document.getElementById("piston_outflow").value=(((oilflow)/(ratio))*231.0009031549);
        document.getElementById("rod_outflow").value = (((oilflow) * (ratio)) * 231.0009031549);
    } else if ((unit5 == 'in3/min') && (unit16 == 'in3/min')) {
        pistonoutflowCalc = (oilflow) / (ratio);
        //pistonOutflow = document.getElementById("piston_outflow").value=((oilflow)/(ratio));
        document.getElementById("rod_outflow").value = ((oilflow) * (ratio));
    }
    pistonOutflow = document.getElementById("piston_outflow").value = pistonoutflowCalc;
    //var pistonOutflow = document.getElementById("piston_outflow").value=((oilflow)/(ratio));
    return pistonOutflow;
}

function pistonTimeByVelCalI(stroke, piston_velocity) {
    if ($('#unit3').val() == 'in' && $('#unit15').val() == 'in/s' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity));
        document.getElementById("piston_time").disabled = true;
    } else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'in/s' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 60);
        document.getElementById("piston_time").disabled = true;
    } else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'in/s' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 1000);
        document.getElementById("piston_time").disabled = true;
    }

    /**/
    else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'in/s' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 1000);
        document.getElementById("piston_time").disabled = true;
    }
    /**/
    else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'ft/s' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 12);
        document.getElementById("piston_time").disabled = true;

    } else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'ft/s' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / (12 * 60));
        document.getElementById("piston_time").disabled = true;
    } else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'ft/s' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * (1000 / 12));
        document.getElementById("piston_time").disabled = true;
    }
    /**/
    else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'ft/s' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 12);
        document.getElementById("piston_time").disabled = true;
    } else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'ft/s' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 720);
        document.getElementById("piston_time").disabled = true;
    } else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'in/s' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 1000 * 12);
        document.getElementById("piston_time").disabled = true;

    }

    /**/
    else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'in/s' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 12);
        document.getElementById("piston_time").disabled = true;

    } else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'in/s' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * (12 / 60));
        document.getElementById("piston_time").disabled = true;

    }

    /**/
    else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'ft/s' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / (60));
        document.getElementById("piston_time").disabled = true;

    } else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'ft/s' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * (1000));
        document.getElementById("piston_time").disabled = true;

    }
    /**/
    else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'ft/s' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity));
        document.getElementById("piston_time").disabled = true;
    }

    // Missing

}

function rodTimeCalByRodVelI(stroke, rod_velocity) {
    if ($('#unit3').val() == 'in' && $('#unit15').val() == 'in/s' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity));
    } else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'in/s' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * 1000);


    }
    /**/
    else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'in/s' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 60);


    }

    /**/
    else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'ft/s' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 12);


    } else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'ft/s' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / (12 * 60));


    } else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'ft/s' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * (1000 / 12));

    }
    /**/
    else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'ft/s' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / 720);


    }


    /**code ends here**/
    else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'in/s' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * 12);


    } else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'in/s' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * (12 / 60));


    } else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'in/s' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * 1000 * 12);


    }
    /**/
    else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'in/s' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * 12);


    } else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'in/s' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * (12 / 60));


    }

    /**/
    else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'ft/s' && $('#unit14').val() == 'sec') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity));


    } else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'ft/s' && $('#unit14').val() == 'min') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) / (60));


    } else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'ft/s' && $('#unit14').val() == 'ms') {
        document.getElementById("rod_time").value = ((stroke / rod_velocity) * (1000));
    }
    /**/
    document.getElementById("rod_time").disabled = true;
    var rodTime = document.getElementById("rod_time").value;

    return rodTime;
    //Missing
}

function timeNDepByVelCalI(stroke, piston_velocity) {

    if ($('#unit3').val() == 'in' && $('#unit15').val() == 'in/s' && $('#unit5').val() == 'gpm' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.0043289874);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.0043289874);
                document.getElementById("oilflow").disabled = true;
            }
        }
        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 231.0009031549;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 231.0009031549;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 0.0043289874);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time));
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'in/s' && $('#unit5').val() == 'gpm' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 60);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.0043289874);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.0043289874);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 231.0009031549;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 231.0009031549;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.0043289874);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 60);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'in/s' && $('#unit5').val() == 'gpm' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 1000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;


        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000 * 0.0043289874);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000 * 0.0043289874);
                document.getElementById("oilflow").disabled = true;
            }
        }
        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 231.0009031549;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 231.0009031549;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60000 * 0.0043289874);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 1000);
        document.getElementById("rod_velocity").disabled = true;
    }

    /**/
    else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'in/s' && $('#unit5').val() == 'in3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;



        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.0043289874;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.0043289874;
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time));
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'in/s' && $('#unit5').val() == 'in3/min' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 60);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;



        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time));
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time));
                document.getElementById("oilflow").disabled = true;
            }
        }
        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.0043289874;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.0043289874;
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow));
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 60);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'in/s' && $('#unit5').val() == 'in3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 1000);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }
        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.0043289874;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.0043289874;
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 1000);
        document.getElementById("rod_velocity").disabled = true;
    }
    /**/
    else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'ft/s' && $('#unit5').val() == 'gpm' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 12);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;



        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.0043289874);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.0043289874);
                document.getElementById("oilflow").disabled = true;
            }
        }
        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 231.0009031549;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 231.0009031549;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 0.0043289874);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 12);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'ft/s' && $('#unit5').val() == 'gpm' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / (12 * 60));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;



        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.0043289874);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.0043289874);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 231.0009031549;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 231.0009031549;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.0043289874);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / (12 * 60));
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'ft/s' && $('#unit5').val() == 'gpm' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * (1000 / 12));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;



        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.0043289874 * 60000);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.0043289874 * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }
        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 231.0009031549;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 231.0009031549;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.0043289874 * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * (1000 / 12));
        document.getElementById("rod_velocity").disabled = true;
    }
    /**/
    else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'ft/s' && $('#unit5').val() == 'in3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 12);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;



        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
                document.getElementById("oilflow").disabled = true;
            }
        }
        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.0043289874;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.0043289874;
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 12);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'ft/s' && $('#unit5').val() == 'in3/min' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 720);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;



        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time));
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time));
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.0043289874;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.0043289874;
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow));
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 720);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'in' && $('#unit15').val() == 'ft/s' && $('#unit5').val() == 'in3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * (1000 / 12));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;



        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }
        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.0043289874;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.0043289874;
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * (1000 / 12));
        document.getElementById("rod_velocity").disabled = true;
    }


    /**code ends here**/
    else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'in/s' && $('#unit5').val() == 'gpm' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 12);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;



        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.0043289874);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.0043289874);
                document.getElementById("oilflow").disabled = true;
            }
        }
        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 231.0009031549;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 231.0009031549;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 0.0043289874);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 12);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'in/s' && $('#unit5').val() == 'gpm' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * (12 / 60));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;



        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.0043289874);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.0043289874);
                document.getElementById("oilflow").disabled = true;
            }
        }
        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 231.0009031549;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 231.0009031549;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.0043289874);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * (12 / 60));
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'in/s' && $('#unit5').val() == 'gpm' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 1000 * 12);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;



        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000 * 0.0043289874);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000 * 0.0043289874);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 231.0009031549;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 231.0009031549;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60000 * 0.0043289874);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 1000 * 12);
        document.getElementById("rod_velocity").disabled = true;
    }

    /**/
    else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'in/s' && $('#unit5').val() == 'in3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 12);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;


        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
                document.getElementById("oilflow").disabled = true;
            }
        }
        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.0043289874;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.0043289874;
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 12);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'in/s' && $('#unit5').val() == 'in3/min' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * (12 / 60));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;



        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time));
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time));
                document.getElementById("oilflow").disabled = true;
            }
        }
        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.0043289874;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.0043289874;
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow));
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * (12 / 60));
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'in/s' && $('#unit5').val() == 'in3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * 1000 * 12);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;



        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }
        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.0043289874;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.0043289874;
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * 1000 * 12);
        document.getElementById("rod_velocity").disabled = true;
    }
    /**/
    else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'ft/s' && $('#unit5').val() == 'gpm' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;



        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.0043289874);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60 * 0.0043289874);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 231.0009031549;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 231.0009031549;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60 * 0.0043289874);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time));
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'ft/s' && $('#unit5').val() == 'gpm' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / (60));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;



        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.0043289874);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.0043289874);
                document.getElementById("oilflow").disabled = true;
            }
        }

        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 231.0009031549;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 231.0009031549;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.0043289874);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / (60));
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'ft/s' && $('#unit5').val() == 'gpm' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * (1000));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;



        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.0043289874 * 60000);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 0.0043289874 * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }
        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 231.0009031549;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 231.0009031549;
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 0.0043289874 * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * (1000));
        document.getElementById("rod_velocity").disabled = true;
    }
    /**/
    else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'ft/s' && $('#unit5').val() == 'in3/min' && $('#unit14').val() == 'sec') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;



        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60);
                document.getElementById("oilflow").disabled = true;
            }
        }
        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.0043289874;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.0043289874;
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time));
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'ft/s' && $('#unit5').val() == 'in3/min' && $('#unit14').val() == 'min') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) / 60);
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;



        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time));
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time));
                document.getElementById("oilflow").disabled = true;
            }
        }
        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.0043289874;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.0043289874;
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }

        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow));
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) / 60);
        document.getElementById("rod_velocity").disabled = true;
    } else if ($('#unit3').val() == 'ft' && $('#unit15').val() == 'ft/s' && $('#unit5').val() == 'in3/min' && $('#unit14').val() == 'ms') {
        document.getElementById("piston_time").value = ((stroke / piston_velocity) * (1000));
        document.getElementById("piston_time").disabled = true;

        var piston_volume = document.getElementById("piston_volume").value - 0;
        var piston_time = document.getElementById("piston_time").value - 0;

        if (document.getElementById("oilflow").disabled == true) {
            document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000);
            document.getElementById("oilflow").disabled = true;
        } else {
            if (document.getElementById("oilflow").value == "") {
                document.getElementById("oilflow").value = ((piston_volume / piston_time) * 60000);
                document.getElementById("oilflow").disabled = true;
            }
        }
        var rod_volume = document.getElementById("rod_volume").value - 0;
        var oilflow = document.getElementById("oilflow").value - 0;

        if ($('#unit16').val() == 'gpm') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value)) * 0.0043289874;
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value)) * 0.0043289874;
        } else if ($('#unit16').val() == 'in3/min') {
            document.getElementById("piston_outflow").value = ((oilflow) / (document.getElementById("ratio").value));
            document.getElementById("rod_outflow").value = ((oilflow) * (document.getElementById("ratio").value));
        }
        if (rod_volume > 0) {
            document.getElementById("rod_time").value = ((rod_volume / oilflow) * 60000);
            document.getElementById("rod_time").disabled = true;
        }

        var rod_time = document.getElementById("rod_time").value - 0;
        document.getElementById("rod_velocity").value = ((stroke / rod_time) * (1000));
        document.getElementById("rod_velocity").disabled = true;
    }
}

function rodForceCalI(preassure, rod_area) {
    if (($('#unit4').val() == 'psi') && ($('#unit13').val() == 'lbf') && ($('#unit11').val() == 'in2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area));

    } else if (($('#unit4').val() == 'psi') && ($('#unit13').val() == 'lbf') && ($('#unit11').val() == 'ft2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) * 144);

    }

    /**For preselected unit**/
    else if (($('#unit4').val() == 'psi') && ($('#unit13').val() == 'pdl') && ($('#unit11').val() == 'in2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) * 32.1740407219);

    } else if (($('#unit4').val() == 'psi') && ($('#unit13').val() == 'pdl') && ($('#unit11').val() == 'ft2')) {
        document.getElementById("rod_force").value = ((preassure * rod_area) * (32.1740407219 * 144));

    }
    document.getElementById("rod_force").setAttribute("disabled", true);
    var rodForce = document.getElementById("rod_force").value;

    return rodForce;
}

function pressureByRodForceCalI(rod_force, rod_area, piston_area) {
    if (($('#unit4').val() == 'psi') && ($('#unit13').val() == 'lbf') && ($('#unit11').val() == 'in2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area));

        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area));
            document.getElementById("piston_force").disabled = true;
        }
    } else if (($('#unit4').val() == 'psi') && ($('#unit13').val() == 'lbf') && ($('#unit11').val() == 'ft2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) / 144);

        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * 144);
            document.getElementById("piston_force").disabled = true;
        }
    } else if (($('#unit4').val() == 'psi') && ($('#unit13').val() == 'pdl') && ($('#unit11').val() == 'in2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * 0.03108095017161);

        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * 32.17404855639);
            document.getElementById("piston_force").disabled = true;
        }
    } else if (($('#unit4').val() == 'psi') && ($('#unit13').val() == 'pdl') && ($('#unit11').val() == 'ft2')) {
        document.getElementById("preassure").value = ((rod_force / rod_area) * (0.03108095017161 / 144));

        var preassure = document.getElementById("preassure").value - 0;
        if (piston_area > 0) {
            document.getElementById("piston_force").value = ((preassure * piston_area) * (32.17404855639 * 144));
            document.getElementById("piston_force").disabled = true;
        }
    }
    document.getElementById("preassure").disabled = true;

}

/*
$(document).ready(function()
{
    $('#piston_time').keyup()
    {
        if($('#piston_time').val()>0)
        {
            document.getElementById("rod_time").disabled = true;
            document.getElementById("piston_velocity").disabled = true;
            document.getElementById("rod_velocity").disabled = true;
            document.getElementById("oilflow").disabled = true;
        }
    }
});
*/
/*
$(document).ready(function()
{
    $("#piston_velocity").keyup(function()
    {
        if($("#piston_velocity").val() == "")
        {
            document.getElementById("rod_time").disabled = true;
            document.getElementById("piston_velocity").disabled = true;
            document.getElementById("rod_velocity").disabled = true;
            document.getElementById("oilflow").disabled = true;
        }
    });
});
/*
$(document).ready(function()
{
    $("#rod_velocity").keyup(function()
    {
        if($("#rod_velocity").val() == "")
        {
            document.getElementById("rod_time").disabled = true;
            document.getElementById("piston_velocity").disabled = true;
            document.getElementById("rod_velocity").disabled = true;
            document.getElementById("oilflow").disabled = true;
        }
    });
});


/*
$(document).ready(function()
{
    $("#rod_velocity").keyup(function()
    {
        if($("#rod_velocity").val() == "")
        {
            document.getElementById("rod_time").disabled = true;
            document.getElementById("piston_velocity").disabled = true;
            document.getElementById("piston_time").disabled = true;
            document.getElementById("oilflow").disabled = true;
        }
    });
    

});
*/

function pistonConversion(pistonDia) {
    var pistonDiameter;
    var rodDiameter;
    if ($('#unit1').val() == "cm") {
        pistonDiameter = pistonDia * 10;
    } else if ($('#unit1').val() == "m") {
        pistonDiameter = pistonDia * 1000;
    } else if ($('#unit1').val() == "ft") {
        pistonDiameter = pistonDia * 12;
    } else if ($('#unit2').val() == "ft") {
        pistonDiameter = pistonDia * 12;
    } else {
        pistonDiameter = pistonDia;
    }

    return pistonDiameter;
}

function rodConversion(rodDia) {
    if ($('#unit2').val() == "cm") {
        rodDiameter = rodDia * 10;
    } else if ($('#unit2').val() == "m") {
        rodDiameter = rodDia * 1000;
    } else if ($('#unit2').val() == "ft") {
        rodDiameter = rodDia * 12;
    } else if ($('#unit2').val() == "ft") {
        rodDiameter = rodDia * 12;
    } else {
        rodDiameter = rodDia;
    }
    return rodDiameter;
}

function pressureConversion(pressure) {
    if ($('#unit4').val() == "P") {
        pressureVal = (pressure * 0.00001).toFixed(4);
    } else if ($('#unit4').val() == "MPa") {
        pressureVal = (pressure * 10).toFixed(4);
    } else {
        pressureVal = pressure;
    }
    return pressureVal;
}

function oilflowConversion(oilflow) {
    if ($('#unit5').val() == "m3/min") {
        oilflow = (oilflow * .001).toFixed(4);
    }
    if ($('#unit5').val() == "cm3/min") {
        oilflowVal = (oilflow * 0.001).toFixed(4);
    }
    if ($('#unit5').val() == "in3/min") {
        oilflowVal = (oilflow * 0.0036046).toFixed(4);
    } else {
        oilflowVal = oilflow;
    }
    return oilflowVal;
}


function forcePistonConversion(pistonForce) {
    if ($('#unit13').val() == "N") {
        ForceVal = (pistonForce * 0.001).toFixed(4);
    } else if ($('#unit13').val() == "dyn") {
        ForceVal = (pistonForce * 0.00000001).toFixed(4);
    } else if ($('#unit13').val() == "kgf") {
        ForceVal = (pistonForce * 0.00980665).toFixed(4);
    } else if ($('#unit13').val() == "pdl") {
        ForceVal = (pistonForce * 0.03108).toFixed(4);
    } else {
        ForceVal = pistonForce;
    }
    return ForceVal;
}

function timePistonConversion(pistonTime) {
    /*if($('#unit14').val() == "sec")
    {
    	timeVal = (pistonTime*60).toFixed(4);
    }*/
    if ($('#unit14').val() == "ms") {
        timeVal = (pistonTime * 0.001).toFixed(4);
    } else {
        timeVal = pistonTime;
    }
    return timeVal;
}

function velocityPistonConversion(pistonVelocity) {
    /*if($('#unit14').val() == "sec")
    {
    	timeVal = (pistonTime*60).toFixed(4);
    }*/
    if ($('#unit15').val() == "cm/s") {
        pistonVelVal = (pistonVelocity * 0.01).toFixed(4);
    } else {
        pistonVelVal = pistonVelocity;
    }
    return pistonVelVal;
}



function calculate(event) {
    var keycode = event.keyCode;
    commadot();
    if ((keycode >= 48 && keycode <= 57) || keycode == 46 || keycode == 8 || (keycode >= 96 && keycode <= 105) || keycode == 110) {
        if (measurementUnitFlag.toLowerCase() == "metric") {
            var piston_dia = document.getElementById("piston").value - 0;
            var oilFlow = document.getElementById("oilflow").value;
            var ForcePiston;
            var pistonArea;
            var rodArea;
            var rodForce;
            var pistonvolume;
            var rodVolume;
            var pistonTime;
            var rodTime;
            var pistonVelocity;
            var ratio;
            var pistonOutflow;
            var rodVelocity;
            var flagForce = false;
            var flagPTimePVelocity = false;


            var pistonD = pistonConversion(piston_dia);
            var rodD = rodConversion(document.getElementById("rod").value);

            var pressureD = pressureConversion(document.getElementById("preassure").value);
            var oilflowD = oilflowConversion(document.getElementById("oilflow").value);
            var forcePistonD = forcePistonConversion(document.getElementById("piston_force").value);
            var forceRodD = forcePistonConversion(document.getElementById("rod_force").value);
            var timePistonD = timePistonConversion(document.getElementById("piston_time").value);
            var timeRodD = timePistonConversion(document.getElementById("rod_time").value);
            var pistonVelocityD = velocityPistonConversion(document.getElementById("piston_velocity").value);
            var rodVelocityD = velocityPistonConversion(document.getElementById("rod_velocity").value);

            // On Piston Time click Rest 4 fields will be disabled
            if (document.getElementById("piston_time").disabled == false) {
                if (document.getElementById("piston_time").value != "") {
                    document.getElementById("rod_time").disabled = true;
                    document.getElementById("piston_velocity").disabled = true;
                    document.getElementById("rod_velocity").disabled = true;
                    document.getElementById("oilflow").disabled = true;
                }
            }
            // On Rod Time click Rest 4 fields will be disabled
            if (document.getElementById("rod_time").disabled == false) {
                if (document.getElementById("rod_time").value != "") {
                    document.getElementById("piston_time").disabled = true;
                    document.getElementById("piston_velocity").disabled = true;
                    document.getElementById("rod_velocity").disabled = true;
                    document.getElementById("oilflow").disabled = true;
                }
            }

            // On Rod Velocity click Rest 4 fields will be disabled
            if (document.getElementById("rod_velocity").disabled == false) {
                if (document.getElementById("rod_velocity").value != "") {
                    document.getElementById("rod_time").disabled = true;
                    document.getElementById("piston_velocity").disabled = true;
                    document.getElementById("piston_time").disabled = true;
                    document.getElementById("oilflow").disabled = true;
                }
            }



            // On Piston Velocity click Rest 4 fields will be disabled
            if (document.getElementById("piston_velocity").disabled == false) {
                if (document.getElementById("piston_velocity").value != "") {
                    document.getElementById("rod_time").disabled = true;
                    document.getElementById("rod_velocity").disabled = true;
                    document.getElementById("piston_time").disabled = true;
                    document.getElementById("oilflow").disabled = true;
                }
            }


            //On deleting of Rod Velocity Dependent will be""
            if (document.getElementById("rod_velocity").disabled == false) {
                if (document.getElementById("rod_velocity").value == "" || document.getElementById("rod_velocity").value == ".") {
                    if (document.getElementById("rod_time").disabled == true) {
                        document.getElementById("rod_time").value = "";
                    }
                    if (document.getElementById("piston_velocity").disabled == true) {
                        document.getElementById("piston_velocity").value = "";
                    }
                    if (document.getElementById("piston_time").disabled == true) {
                        document.getElementById("piston_time").value = "";
                    }
                    if (document.getElementById("oilflow").disabled == true) {
                        document.getElementById("oilflow").value = "";
                    }

                    document.getElementById("rod_time").disabled = false;
                    document.getElementById("piston_velocity").disabled = false;
                    document.getElementById("piston_time").disabled = false;
                    document.getElementById("oilflow").disabled = false;

                }
            }

            //On deleting of Piston Velocity Dependent will be""
            if (document.getElementById("piston_velocity").disabled == false) {
                if (document.getElementById("piston_velocity").value == "" || document.getElementById("piston_velocity").value == ".") {
                    if (document.getElementById("rod_time").disabled == true) {
                        document.getElementById("rod_time").value = "";
                    }
                    if (document.getElementById("rod_velocity").disabled == true) {
                        document.getElementById("rod_velocity").value = "";
                    }
                    if (document.getElementById("piston_time").disabled == true) {
                        document.getElementById("piston_time").value = "";
                    }
                    if (document.getElementById("oilflow").disabled == true) {
                        document.getElementById("oilflow").value = "";
                    }

                    document.getElementById("rod_time").disabled = false;
                    document.getElementById("rod_velocity").disabled = false;
                    document.getElementById("piston_time").disabled = false;
                    document.getElementById("oilflow").disabled = false;

                }
            }

            //On deleting of Rod Time Dependent will be""
            if (document.getElementById("rod_time").disabled == false) {
                if (document.getElementById("rod_time").value == "" || document.getElementById("rod_time").value == "." || document.getElementById("rod_time").value == "0.") {
                    if (document.getElementById("piston_velocity").disabled == true) {
                        document.getElementById("piston_velocity").value = "";
                    }
                    if (document.getElementById("rod_velocity").disabled == true) {
                        document.getElementById("rod_velocity").value = "";
                    }
                    if (document.getElementById("piston_time").disabled == true) {
                        document.getElementById("piston_time").value = "";
                    }
                    if (document.getElementById("oilflow").disabled == true) {
                        document.getElementById("oilflow").value = "";
                    }

                    document.getElementById("piston_velocity").disabled = false;
                    document.getElementById("rod_velocity").disabled = false;
                    document.getElementById("piston_time").disabled = false;
                    document.getElementById("oilflow").disabled = false;
                }
            }

            //On deleting of Piston Time Dependent will be""
            if (document.getElementById("piston_time").disabled == false) {
                if (document.getElementById("piston_time").value == "" || document.getElementById("piston_time").value == ".") {
                    if (document.getElementById("piston_velocity").disabled == true) {
                        document.getElementById("piston_velocity").value = "";
                    }
                    if (document.getElementById("rod_velocity").disabled == true) {
                        document.getElementById("rod_velocity").value = "";
                    }
                    if (document.getElementById("rod_time").disabled == true) {
                        document.getElementById("rod_time").value = "";
                    }
                    if (document.getElementById("oilflow").disabled == true) {
                        document.getElementById("oilflow").value = "";
                    }

                    document.getElementById("piston_velocity").disabled = false;
                    document.getElementById("rod_velocity").disabled = false;
                    document.getElementById("rod_time").disabled = false;
                    document.getElementById("oilflow").disabled = false;
                }
            }

            //On deleting of Piston Force Dependent will be""
            if (document.getElementById("piston_force").disabled == false) {
                if (document.getElementById("piston_force").value == "" || document.getElementById("piston_force").value == ".") {
                    if (document.getElementById("preassure").disabled == true) {
                        document.getElementById("preassure").value = "";
                    }
                    if (document.getElementById("rod_force").disabled == true) {
                        document.getElementById("rod_force").value = "";
                    }

                    document.getElementById("preassure").disabled = false;
                    document.getElementById("rod_force").disabled = false;
                }
            }

            //On deleting of Rod Force Dependent will be""
            if (document.getElementById("rod_force").disabled == false) {
                if (document.getElementById("rod_force").value == "" || document.getElementById("rod_force").value == ".") {
                    if (document.getElementById("preassure").disabled == true) {
                        document.getElementById("preassure").value = "";
                    }
                    if (document.getElementById("piston_force").disabled == true) {
                        document.getElementById("piston_force").value = "";
                    }

                    document.getElementById("preassure").disabled = false;
                    document.getElementById("piston_force").disabled = false;
                }
            }

            if (piston_dia > 0 && piston_dia <= 9999.9999) {
                var pistonArea = pistonAreaCalculate(piston_dia);

                //VolumePiston Cal
                var stroke = document.getElementById("stroke").value;
                if (stroke > 0 && stroke <= 9999.9999) {
                    pistonvolume = volumePistonCal(piston_dia, stroke);
                    rod_dia = document.getElementById("rod").value;
                    if (rod_dia > 0 && rod_dia <= 9999.9999) {
                        rodVolume = volumeRodCal(pistonvolume, rod_dia, stroke);
                    }

                    //Piston Time Cal
                    if (document.getElementById("oilflow").disabled == false) {
                        oilflowD = oilflowConversion(document.getElementById("oilflow").value);
                        oilFlow = document.getElementById("oilflow").value;
                        if (oilflowD > 0 && oilflowD <= 9999.9999) {
                            pistonTime = pistonTimeCal(pistonvolume, oilFlow);

                            //Piston Velocity Cal
                            if (document.getElementById("piston_velocity").disabled == true) {
                                pistonVelocity = pistonVelocityCal(stroke, pistonTime);
                                flagPTimePVelocity = true;
                            } else {
                                if (document.getElementById("piston_velocity").value == "") {
                                    pistonVelocity = pistonVelocityCal(stroke, pistonTime);
                                    flagPTimePVelocity = true;
                                }
                            }
                        } else {
                            if (document.getElementById("piston_time").disabled == true) {
                                document.getElementById("piston_time").value = "";
                            }
                            if (document.getElementById("rod_time").disabled == true) {
                                document.getElementById("rod_time").value = "";
                            }
                            if (document.getElementById("piston_velocity").disabled == true) {
                                document.getElementById("piston_velocity").value = "";
                            }
                            if (document.getElementById("rod_velocity").disabled == true) {
                                document.getElementById("rod_velocity").value = "";
                            }
                        }
                    } // Piston Time End
                } // Stroke If End
                else {
                    document.getElementById("piston_volume").value = "";
                    if (document.getElementById("oilflow").disabled == true) {
                        document.getElementById("oilflow").value = "";
                        oilFlow = 0;
                    }
                    document.getElementById("rod_volume").value = "";
                    if (document.getElementById("piston_time").disabled == true) {
                        document.getElementById("piston_time").value = "";
                    }
                    if (document.getElementById("rod_time").disabled == true) {
                        document.getElementById("rod_time").value = "";
                    }
                    if (document.getElementById("piston_velocity").disabled == true) {
                        document.getElementById("piston_velocity").value = "";
                    }
                    if (document.getElementById("rod_velocity").disabled == true) {
                        document.getElementById("rod_velocity").value = "";
                    }
                }

                // Pressure Cal Backword
                var piston_force = document.getElementById("piston_force").value;
                if (document.getElementById("piston_force").disabled == false) {
                    forcePistonD = forcePistonConversion(document.getElementById("piston_force").value);
                    if (forcePistonD > 0 && forcePistonD <= 9999.9999) {
                        rod_area = document.getElementById("rod_area").value;
                        pressureCal(piston_force, pistonArea, rod_area);
                        flagForce = true;
                    } else if (forcePistonD.length > 0 && forcePistonD != 0) {
                        document.getElementById("preassure").disabled = true;
                    } else {
                        document.getElementById("piston_force").value = "";
                        if (document.getElementById("rod_force").disabled == true) {
                            document.getElementById("rod_force").value = "";
                        }
                        if (document.getElementById("preassure").disabled == true) {
                            document.getElementById("preassure").value = "";
                        }
                    }
                }

                //Piston Force Cal
                var preassure = document.getElementById("preassure").value;
                if (document.getElementById("preassure").disabled == false) {
                    pressureD = pressureConversion(document.getElementById("preassure").value);
                    if (pressureD > 0 && pressureD <= 9999.9999) {
                        ForcePiston = forcePistonCal(preassure, pistonArea);
                    } else if ((document.getElementById("piston_force").value).length > 0 && document.getElementById("piston_force").disabled == false) {
                        document.getElementById("preassure").disabled = true;
                    } else {
                        document.getElementById("piston_force").value = "";
                        if (document.getElementById("piston_force").disabled == true) {
                            document.getElementById("rod_force").value = "";
                        }
                    }
                }

                // OilFlow Cal 
                pistonTime = document.getElementById("piston_time").value;
                if (document.getElementById("piston_time").disabled == false) {
                    timePistonD = timePistonConversion(document.getElementById("piston_time").value);
                    if (timePistonD > 0 && timePistonD <= 9999.9999 && pistonvolume > 0) {
                        if (document.getElementById("oilflow").disabled == true) {
                            oilFlow = oilFlowOutFlowCal(pistonvolume, pistonTime);
                            rodVolume = document.getElementById("rod_volume").value;
                            if (rodVolume > 0) {
                                rodTimeCal(rodVolume, oilFlow);
                            }
                            if (stroke > 0 && stroke <= 9999.9999) {
                                pistonVelocityCal(stroke, pistonTime);
                                rodTime = document.getElementById("rod_time").value;
                                if (rodTime > 0) {
                                    rodVelocityCal(stroke, rodTime);
                                }
                            }
                        } else {
                            if (document.getElementById("oilflow").value == "") {
                                oilFlow = oilFlowOutFlowCal(pistonvolume, pistonTime);
                                if (rodVolume > 0) {
                                    rodTimeCal(rodVolume, oilFlow);
                                }
                                if (stroke > 0 && stroke <= 9999.9999) {
                                    pistonVelocityCal(stroke, pistonTime);
                                    timeRodD = timePistonConversion(document.getElementById("rod_time").value);
                                    if (timeRodD > 0 && timeRodD <= 9999.9999) {
                                        rodVelocityCal(stroke, rodTime);
                                    }
                                }
                            }
                        }

                        //Piston Velocity Cal
                        if (document.getElementById("piston_time").disabled == true) {
                            if (document.getElementById("piston_velocity").disabled == false) {
                                pistonVelocity = pistonVelocityCal(stroke, pistonTime);
                            }
                        }
                    }
                } //Oilflow Cal End

                //Rod Dia Cal
                var rod_dia = document.getElementById("rod").value;
                if (rod_dia > 0 && rod_dia <= 9999.9999 && pistonD > rodD) {
                    rodArea = rodAreaCalculate(pistonArea, rod_dia);

                    //Ratio Cal
                    ratio = ratioCal(pistonArea, rodArea);


                    // Volume Rod Cal
                    if (stroke > 0 && stroke <= 9999.9999) {
                        rodVolume = volumeRodCal(pistonvolume, rod_dia, stroke);

                        // oilFlow Cal
                        rodTime = document.getElementById("rod_time").value;
                        pistonTime = document.getElementById("piston_time").value;
                        if (document.getElementById("rod_time").disabled == false) {
                            timeRodD = timePistonConversion(document.getElementById("rod_time").value);
                            if (timeRodD > 0 && timeRodD <= 9999.9999) {
                                if (document.getElementById("oilflow").disabled == true) {
                                    oilFlow = oilFlowByRodCal(rodVolume, rodTime);
                                    pistonTime = pistonTimeCal(pistonvolume, oilFlow);
                                    pistonVelocityCal(stroke, pistonTime);
                                    rodVelocityCal(stroke, rodTime);
                                } else {
                                    if (document.getElementById("oilflow").value == "") {
                                        oilFlow = oilFlowByRodCal(rodVolume, rodTime);
                                        pistonTime = pistonTimeCal(pistonvolume, oilFlow);
                                        pistonVelocityCal(stroke, pistonTime);
                                        rodVelocityCal(stroke, rodTime);
                                    }
                                }
                            }
                        }

                        //Piston Outflow Cal
                        oilflowD = oilflowConversion(document.getElementById("oilflow").value);
                        if (oilflowD > 0 && oilflowD <= 9999.9999) {
                            pistonOutflow = pistonOutflowCal(oilFlow, ratio);
                        }


                        //Rod Time Cal
                        if (document.getElementById("oilflow").disabled == false) {
                            if (oilflowD > 0 && oilflowD <= 9999.9999) {
                                if (document.getElementById("rod_time").disabled == true) {
                                    rodTime = rodTimeCal(rodVolume, oilFlow);
                                } else {
                                    if (document.getElementById("rod_time").value == "") {
                                        rodTime = rodTimeCal(rodVolume, oilFlow);
                                    }
                                }
                            }
                        }
                    } else {
                        if (document.getElementById("rod_time").disabled == true) {
                            document.getElementById("rod_time").value = "";
                        }
                    }

                    //Piston Time Cal by Piston Velocity Backword
                    pistonVelocity = document.getElementById("piston_velocity").value;
                    if (document.getElementById("piston_velocity").disabled == false) {
                        pistonVelocityD = velocityPistonConversion(document.getElementById("piston_velocity").value);
                        if (stroke > 0 && stroke <= 9999.9999 && pistonVelocityD > 0 && pistonVelocityD <= 9999.9999) {
                            pistonTimeByVelCal(stroke, pistonVelocity);
                        } else {
                            if (document.getElementById("piston_time").disabled == true) {
                                if (rodTime < 0 || rodTime == "") {
                                    document.getElementById("piston_time").value = "";
                                }
                            }
                            if (document.getElementById("rod_time").disabled == true) {
                                document.getElementById("rod_time").value = "";
                            }
                            if (document.getElementById("rod_velocity").disabled == true) {
                                document.getElementById("rod_velocity").value = "";
                            }
                            if (document.getElementById("oilflow").disabled == true) {
                                document.getElementById("oilflow").value = "";
                            }
                        }
                    }

                    //Oil Flow Cal
                    pistonTime = document.getElementById("piston_time").value;
                    if (document.getElementById("piston_time").disabled == false) {
                        timePistonD = timePistonConversion(document.getElementById("piston_time").value);
                        if (timePistonD > 0 && timePistonD <= 9999.9999 && pistonvolume > 0) {
                            if (document.getElementById("oilflow").disabled == true) {
                                oilFlow = oilFlowOutFlowCal(pistonvolume, pistonTime);
                            } else {
                                if (document.getElementById("oilflow").value == "") {
                                    oilFlow = oilFlowOutFlowCal(pistonvolume, pistonTime);
                                }
                            }
                        }
                    }

                    // Rod Time Cal
                    oilFlow = document.getElementById("oilflow").value;
                    if (document.getElementById("oilflow").disabled == false) {
                        oilflowD = oilflowConversion(document.getElementById("oilflow").value);
                        if (oilflowD > 0 && oilflowD <= 9999.9999 && rodVolume > 0) {
                            if (document.getElementById("rod_time").disabled == true) {
                                rodTime = rodTimeCal(rodVolume, oilFlow);
                            } else {
                                if (document.getElementById("rod_time").value == "") {
                                    rodTime = rodTimeCal(rodVolume, oilFlow);
                                }
                            }
                        }
                    }

                    //Rod Velocity Cal
                    rodTime = document.getElementById("rod_time").value;
                    if (document.getElementById("rod_time").disabled == true) {
                        timeRodD = timePistonConversion(document.getElementById("rod_time").value);
                        if (timeRodD > 0) {
                            if (document.getElementById("rod_velocity").disabled == true) {
                                rodVelocityCal(stroke, rodTime);
                            } else {
                                if (document.getElementById("rod_velocity").value == "") {
                                    rodVelocityCal(stroke, rodTime);
                                }
                            }
                        }
                    }

                    //Rod Time Cal By Rod Velocity Backword
                    rodVelocity = document.getElementById("rod_velocity").value;
                    rodVelocityD = velocityPistonConversion(document.getElementById("rod_velocity").value);
                    if (document.getElementById("rod_velocity").disabled == false && (rodVelocityD > 0 && rodVelocityD <= 9999.9999)) {
                        if (stroke > 0 && stroke <= 9999.9999) {
                            rodTime = rodTimeByRodVelCal(stroke, rodVelocity);
                        }
                        if (rodVolume > 0 && rodTime > 0) {
                            if (document.getElementById("rod_time").disabled == true) {
                                if (document.getElementById("oilflow").disabled == true) {
                                    oilFlow = oilFlowByRodCal(rodVolume, rodTime);
                                }
                            }
                        }
                        oilflowD = oilflowConversion(document.getElementById("oilflow").value);
                        if (oilflowD > 0) {
                            if (document.getElementById("oilflow").disabled == false) {
                                if (oilflowD <= 9999.9999) {
                                    pistonOutflowCal(oilFlow, ratio);
                                }
                            } else {
                                pistonOutflowCal(oilFlow, ratio);
                            }
                        }
                        if (pistonvolume > 0 && oilFlow > 0) {
                            if (document.getElementById("oilflow").disabled == false) {
                                oilflowD = oilflowConversion(document.getElementById("oilflow").value);
                                if (oilflowD <= 9999.9999) {
                                    pistonTime = pistonTimeCal(pistonvolume, oilFlow);
                                }
                            } else {
                                pistonTime = pistonTimeCal(pistonvolume, oilFlow);
                            }
                        }
                        if (stroke > 0 && stroke <= 9999.9999 && pistonTime > 0) {
                            if (document.getElementById("piston_time").disabled == false) {
                                timePistonD = timePistonConversion(document.getElementById("piston_time").value);
                                if (timePistonD <= 9999.9999) {
                                    pistonVelocityCal(stroke, pistonTime);
                                }
                            } else {
                                pistonVelocityCal(stroke, pistonTime);
                            }
                        }
                    } // Rod Time Cal By Rod Velocity Backword End

                    pistonVelocity = document.getElementById("piston_velocity").value;
                    if (document.getElementById("piston_velocity").disabled == false) {
                        pistonVelocityD = velocityPistonConversion(document.getElementById("piston_velocity").value);
                        if ((stroke > 0 && stroke <= 9999.9999) && (pistonVelocityD > 0 && pistonVelocityD <= 9999.9999)) {
                            timeNDepByVelCal(stroke, pistonVelocity);
                        }
                    }

                    // Calculating Force for Rod Side
                    if (document.getElementById("preassure").disabled == false) {
                        pressureD = pressureConversion(document.getElementById("preassure").value);
                        if (pressureD > 0 && pressureD <= 9999.9999) {
                            rodForce = rodForceCal(preassure, rodArea);
                        }
                    }

                    // Pressure Cal Backword by Rod Force
                    var rod_force = document.getElementById("rod_force").value;
                    if (document.getElementById("rod_force").disabled == false && flagForce == false) {
                        forceRodD = forcePistonConversion(document.getElementById("rod_force").value);
                        if (forceRodD > 0 && forceRodD <= 9999.9999) {
                            rod_area = document.getElementById("rod_area").value;
                            pressureByRodForce(rod_force, rod_area, pistonArea);
                            //flagForceRod = true;
                        } else {
                            if (document.getElementById("preassure").value != "0" && document.getElementById("preassure").value != "0.") {
                                document.getElementById("preassure").value = "";
                            }
                            if (document.getElementById("piston_force").value != ".") {
                                if (document.getElementById("piston_force").value != "0" && document.getElementById("piston_force").value != "0.") {
                                    document.getElementById("piston_force").value = "";
                                }

                            }
                        }
                    }
                    if (document.getElementById("piston_force").disabled == false) {
                        forcePistonD = forcePistonConversion(document.getElementById("piston_force").value);
                        if (forcePistonD > 0 && forcePistonD <= 9999.9999) {
                            rod_area = document.getElementById("rod_area").value;
                            pressureCal(piston_force, pistonArea, rod_area);
                            flagForce = true;
                        } else if (forcePistonD.length > 0 && forcePistonD != 0) {
                            document.getElementById("preassure").disabled = true;
                        } else {
                            document.getElementById("piston_force").value = "";
                            if (document.getElementById("piston_force").disabled == true) {
                                document.getElementById("rod_force").value = "";
                            }
                        }
                    }
                    // Outflow Cal
                    oilFlow = document.getElementById("oilflow").value;
                    if (oilFlow > 0) {
                        if (document.getElementById("oilflow").disabled == false) {
                            oilflowD = oilflowConversion(document.getElementById("oilflow").value);
                            if (oilflowD <= 9999.9999) {
                                pistonOutflowCal(oilFlow, ratio);
                            }
                        } else {
                            pistonOutflowCal(oilFlow, ratio);
                        }
                    } else {
                        document.getElementById("piston_outflow").value = "";
                        document.getElementById("rod_outflow").value = "";
                    }
                } // Closing Rod Area condition
                else {
                    document.getElementById("rod_area").value = "";
                    document.getElementById("rod_volume").value = "";
                    if (document.getElementById("rod_force").disabled == true) {
                        document.getElementById("rod_force").value = "";
                    }
                    document.getElementById("ratio").value = "";
                    document.getElementById("piston_outflow").value = "";
                    document.getElementById("rod_outflow").value = "";
                    if (document.getElementById("rod_time").disabled == true) {
                        document.getElementById("rod_time").value = "";
                    }
                    if (document.getElementById("rod_velocity").disabled == true) {
                        document.getElementById("rod_velocity").value = "";
                    }
                } // RodArea Else End   
            } // If ENd of Piston Area
            else {
                document.getElementById("piston_area").value = "";
                document.getElementById("rod_area").value = "";
                document.getElementById("piston_volume").value = "";
                document.getElementById("rod_volume").value = "";
                if (document.getElementById("piston_force").disabled == true) {
                    document.getElementById("piston_force").value = "";
                }
                if (document.getElementById("rod_force").disabled == true) {
                    document.getElementById("rod_force").value = "";
                }
                document.getElementById("ratio").value = "";
                if (document.getElementById("preassure").disabled == true) {
                    document.getElementById("preassure").value = "";
                }
                if (document.getElementById("piston_time").disabled == true) {
                    document.getElementById("piston_time").value = "";
                }
                if (document.getElementById("rod_time").disabled == true) {
                    document.getElementById("rod_time").value = "";
                }
                if (document.getElementById("piston_velocity").disabled == true) {
                    document.getElementById("piston_velocity").value = "";
                }
                if (document.getElementById("rod_velocity").disabled == true) {
                    document.getElementById("rod_velocity").value = "";
                }
                document.getElementById("piston_outflow").value = "";
                document.getElementById("rod_outflow").value = "";

            }
        } // Imperial Part
        else {
            // On Piston Time click Rest 4 fields will be disabled
            if (document.getElementById("piston_time").disabled == false) {
                if (document.getElementById("piston_time").value > 0) {
                    document.getElementById("rod_time").disabled = true;
                    document.getElementById("piston_velocity").disabled = true;
                    document.getElementById("rod_velocity").disabled = true;
                    document.getElementById("oilflow").disabled = true;
                }
            }

            // On Rod Time click Rest 4 fields will be disabled
            if (document.getElementById("rod_time").disabled == false) {
                if (document.getElementById("rod_time").value != "") {
                    document.getElementById("piston_time").disabled = true;
                    document.getElementById("piston_velocity").disabled = true;
                    document.getElementById("rod_velocity").disabled = true;
                    document.getElementById("oilflow").disabled = true;
                }
            }

            // On Rod Velocity click Rest 4 fields will be disabled
            if (document.getElementById("rod_velocity").disabled == false) {
                if (document.getElementById("rod_velocity").value > 0) {
                    document.getElementById("rod_time").disabled = true;
                    document.getElementById("piston_velocity").disabled = true;
                    document.getElementById("piston_time").disabled = true;
                    document.getElementById("oilflow").disabled = true;
                }
            }

            // On Piston Velocity click Rest 4 fields will be disabled
            if (document.getElementById("piston_velocity").disabled == false) {
                if (document.getElementById("piston_velocity").value != "") {
                    document.getElementById("rod_time").disabled = true;
                    document.getElementById("rod_velocity").disabled = true;
                    document.getElementById("piston_time").disabled = true;
                    document.getElementById("oilflow").disabled = true;
                }
            }

            //On deleting of Rod Velocity Dependent will be""
            if (document.getElementById("rod_velocity").disabled == false) {
                if (document.getElementById("rod_velocity").value == "" || document.getElementById("rod_velocity").value == ".") {
                    if (document.getElementById("rod_time").disabled == true) {
                        document.getElementById("rod_time").value = "";
                    }
                    if (document.getElementById("piston_velocity").disabled == true) {
                        document.getElementById("piston_velocity").value = "";
                    }
                    if (document.getElementById("piston_time").disabled == true) {
                        document.getElementById("piston_time").value = "";
                    }
                    if (document.getElementById("oilflow").disabled == true) {
                        document.getElementById("oilflow").value = "";
                    }

                    document.getElementById("rod_time").disabled = false;
                    document.getElementById("piston_velocity").disabled = false;
                    document.getElementById("piston_time").disabled = false;
                    document.getElementById("oilflow").disabled = false;
                }
            }

            //On deleting of Piston Velocity Dependent will be""
            if (document.getElementById("piston_velocity").disabled == false) {
                if (document.getElementById("piston_velocity").value == "" || document.getElementById("piston_velocity").value == ".") {
                    if (document.getElementById("rod_time").disabled == true) {
                        document.getElementById("rod_time").value = "";
                    }
                    if (document.getElementById("rod_velocity").disabled == true) {
                        document.getElementById("rod_velocity").value = "";
                    }
                    if (document.getElementById("piston_time").disabled == true) {
                        document.getElementById("piston_time").value = "";
                    }
                    if (document.getElementById("oilflow").disabled == true) {
                        document.getElementById("oilflow").value = "";
                    }

                    document.getElementById("rod_time").disabled = false;
                    document.getElementById("rod_velocity").disabled = false;
                    document.getElementById("piston_time").disabled = false;
                    document.getElementById("oilflow").disabled = false;
                }
            }

            //On deleting of Rod Time Dependent will be""
            if (document.getElementById("rod_time").disabled == false) {
                if (document.getElementById("rod_time").value == "" || document.getElementById("rod_time").value == ".") {
                    if (document.getElementById("piston_velocity").disabled == true) {
                        document.getElementById("piston_velocity").value = "";
                    }
                    if (document.getElementById("rod_velocity").disabled == true) {
                        document.getElementById("rod_velocity").value = "";
                    }
                    if (document.getElementById("piston_time").disabled == true) {
                        document.getElementById("piston_time").value = "";
                    }
                    if (document.getElementById("oilflow").disabled == true) {
                        document.getElementById("oilflow").value = "";
                    }

                    document.getElementById("piston_velocity").disabled = false;
                    document.getElementById("rod_velocity").disabled = false;
                    document.getElementById("piston_time").disabled = false;
                    document.getElementById("oilflow").disabled = false;
                }
            }

            //On deleting of Piston Time Dependent will be""
            if (document.getElementById("piston_time").disabled == false) {
                if (document.getElementById("piston_time").value == "" || document.getElementById("piston_time").value == ".") {
                    if (document.getElementById("piston_velocity").disabled == true) {
                        document.getElementById("piston_velocity").value = "";
                    }
                    if (document.getElementById("rod_velocity").disabled == true) {
                        document.getElementById("rod_velocity").value = "";
                    }
                    if (document.getElementById("rod_time").disabled == true) {
                        document.getElementById("rod_time").value = "";
                    }
                    if (document.getElementById("oilflow").disabled == true) {
                        document.getElementById("oilflow").value = "";
                    }

                    document.getElementById("piston_velocity").disabled = false;
                    document.getElementById("rod_velocity").disabled = false;
                    document.getElementById("rod_time").disabled = false;
                    document.getElementById("oilflow").disabled = false;
                }
            }

            //On deleting of Piston Force Dependent will be""
            if (document.getElementById("piston_force").disabled == false) {
                if (document.getElementById("piston_force").value == "" || document.getElementById("piston_force").value == ".") {
                    if (document.getElementById("preassure").disabled == true) {
                        document.getElementById("preassure").value = "";
                    }
                    if (document.getElementById("rod_force").disabled == true) {
                        document.getElementById("rod_force").value = "";
                    }

                    document.getElementById("preassure").disabled = false;
                    document.getElementById("rod_force").disabled = false;
                }
            }

            //On deleting of Rod Force Dependent will be""
            if (document.getElementById("rod_force").disabled == false) {
                if (document.getElementById("rod_force").value == "" || document.getElementById("rod_force").value == ".") {
                    if (document.getElementById("preassure").disabled == true) {
                        document.getElementById("preassure").value = "";
                    }
                    if (document.getElementById("piston_force").disabled == true) {
                        document.getElementById("piston_force").value = "";
                    }

                    document.getElementById("preassure").disabled = false;
                    document.getElementById("piston_force").disabled = false;
                }
            }


            var piston_dia = document.getElementById("piston").value - 0;
            var oilFlow = document.getElementById("oilflow").value;
            var ForcePiston;
            var pistonArea;
            var rodArea;
            var rodForce;
            var pistonvolume;
            var rodVolume;
            var pistonTime;
            var rodTime;
            var pistonVelocity;
            var ratio;
            var pistonOutflow;
            var rodVelocity;
            var flagForce = false;
            var flagPTimePVelocity = false;

            var pistonD = pistonConversion(piston_dia);
            var rodD = rodConversion(document.getElementById("rod").value);

            var oilflowD = oilflowConversion(document.getElementById("oilflow").value);
            var forcePistonD = forcePistonConversion(document.getElementById("piston_force").value);
            var forceRodD = forcePistonConversion(document.getElementById("rod_force").value);
            var timePistonD = timePistonConversion(document.getElementById("piston_time").value);
            var timeRodD = timePistonConversion(document.getElementById("rod_time").value);
            var pistonVelocityD = velocityPistonConversion(document.getElementById("piston_velocity").value);
            var rodVelocityD = velocityPistonConversion(document.getElementById("rod_velocity").value);

            //Piston Area Cal I
            if (piston_dia > 0 && piston_dia <= 9999.9999) {
                var pistonArea = pistonAreaCalI(piston_dia);

                //VolumePiston Cal
                var stroke = document.getElementById("stroke").value;
                if (stroke > 0 && stroke <= 9999.9999) {
                    pistonvolume = pistonVolumeCalI(piston_dia, stroke);
                    rod_dia = document.getElementById("rod").value;
                    if (rod_dia > 0 && rod_dia <= 9999.9999) {
                        rodVolume = rodVolumeCalI(pistonvolume, rod_dia, stroke);
                    }

                    //Piston Time Cal
                    if (document.getElementById("oilflow").disabled == false) {
                        oilFlow = document.getElementById("oilflow").value;
                        oilflowD = oilflowConversion(document.getElementById("oilflow").value);
                        if (oilflowD > 0 && oilflowD <= 9999.9999) {
                            pistonTime = pistonTimeCalI(pistonvolume, oilFlow);

                            //Piston Velocity Cal
                            if (document.getElementById("piston_velocity").disabled == true) {
                                pistonVelocityCalI(stroke, pistonTime);
                            } else {
                                if (document.getElementById("piston_velocity").value == "") {
                                    pistonVelocity = pistonVelocityCalI(stroke, pistonTime);
                                    flagPTimePVelocity = true;
                                }
                            }
                        } else {
                            if (document.getElementById("piston_time").disabled == true) {
                                document.getElementById("piston_time").value = "";
                            }
                            if (document.getElementById("rod_time").disabled == true) {
                                document.getElementById("rod_time").value = "";
                            }
                            if (document.getElementById("piston_velocity").disabled == true) {
                                document.getElementById("piston_velocity").value = "";
                            }
                            if (document.getElementById("rod_velocity").disabled == true) {
                                document.getElementById("rod_velocity").value = "";
                            }
                        }
                    } // Piston Time Cal End    
                } // Stroke If End.
                else {
                    document.getElementById("piston_volume").value = "";
                    if (document.getElementById("oilflow").disabled == true) {
                        document.getElementById("oilflow").value = "";
                        oilFlow = 0;
                    }
                    document.getElementById("rod_volume").value = "";
                    if (document.getElementById("piston_time").disabled == true) {
                        document.getElementById("piston_time").value = "";
                    }
                    if (document.getElementById("rod_time").disabled == true) {
                        document.getElementById("rod_time").value = "";
                    }
                    if (document.getElementById("piston_velocity").disabled == true) {
                        document.getElementById("piston_velocity").value = "";
                    }
                    if (document.getElementById("rod_velocity").disabled == true) {
                        document.getElementById("rod_velocity").value = "";
                    }
                } // Stroke Else End

                // Pressure Cal Backword
                var piston_force = document.getElementById("piston_force").value;
                if (document.getElementById("piston_force").disabled == false) {
                    forcePistonD = forcePistonConversion(document.getElementById("piston_force").value);
                    if (forcePistonD > 0 && forcePistonD <= 9999.9999) {
                        rod_area = document.getElementById("rod_area").value;
                        pressureCalI(piston_force, pistonArea, rod_area);
                        flagForce = true;
                    } else if (forcePistonD.length > 0) {
                        document.getElementById("preassure").disabled = false;
                    } else {
                        document.getElementById("piston_force").value = "";
                        if (document.getElementById("rod_force").disabled == true) {
                            document.getElementById("rod_force").value = "";
                        }
                        if (document.getElementById("preassure").disabled == true) {
                            document.getElementById("preassure").value = "";
                        }
                    }
                } // Pressure Cal Backword End

                //Piston Force Cal
                var preassure = document.getElementById("preassure").value;
                if (document.getElementById("preassure").disabled == false) {
                    if (preassure > 0 && preassure <= 9999.9999) {
                        ForcePiston = pistonForceCalI(preassure, pistonArea);
                    } else if ((document.getElementById("piston_force").value).length > 0 && document.getElementById("piston_force").disabled == false) {
                        document.getElementById("preassure").disabled = true;
                    } else {
                        document.getElementById("piston_force").value = "";
                        if (document.getElementById("piston_force").disabled == true) {
                            document.getElementById("rod_force").value = "";
                        }
                    }
                } // Piston Force Cal End

                // OilFlow Cal
                pistonTime = document.getElementById("piston_time").value;
                if (document.getElementById("piston_time").disabled == false) {
                    timePistonD = timePistonConversion(document.getElementById("piston_time").value);
                    if (timePistonD > 0 && timePistonD <= 9999.9999 && pistonvolume > 0) {
                        if (document.getElementById("oilflow").disabled == true) {
                            oilFlow = oilFlowCalI(pistonvolume, pistonTime);
                            rodVolume = document.getElementById("rod_volume").value;
                            if (rodVolume > 0) {
                                rodTimeCalI(rodVolume, oilFlow);
                            }
                            if (stroke > 0 && stroke <= 9999.9999) {
                                pistonVelocityCalI(stroke, pistonTime);
                                rodTime = document.getElementById("rod_time").value;
                                if (rodTime > 0) {
                                    rodVelocityCalI(stroke, rodTime);
                                }
                            }
                        } else {
                            if (document.getElementById("oilflow").value == "") {
                                oilFlow = oilFlowOutFlowCal(pistonvolume, pistonTime);
                                if (rodVolume > 0) {
                                    rodTimeCalI(rodVolume, oilFlow);
                                }
                                if (stroke > 0 && stroke <= 9999.9999) {
                                    pistonVelocityCal(stroke, pistonTime);
                                    timeRodD = timePistonConversion(document.getElementById("rod_time").value);
                                    if (timeRodD > 0 && timeRodD <= 9999.9999) {
                                        rodVelocityCalI(stroke, rodTime);
                                    }
                                }
                            }
                        }


                        //Piston Velocity Cal
                        if (document.getElementById("piston_time").disabled == true) {
                            if (document.getElementById("piston_velocity").disabled == false) {
                                pistonVelocity = pistonVelocityCalI(stroke, pistonTime);

                            }
                        }
                    }
                } //Oilflow Block End

                //Rod Dia Cal
                var rod_dia = document.getElementById("rod").value;
                if (rod_dia > 0 && rod_dia <= 9999.9999 && pistonD > rodD) {
                    rodArea = rodAreaCalI(pistonArea, rod_dia);

                    //Ratio Cal
                    ratio = ratioCal(pistonArea, rodArea);

                    if (stroke > 0 && stroke <= 9999.9999) {
                        rodVolume = rodVolumeCalI(pistonvolume, rod_dia, stroke);

                        // oilFlow Cal
                        rodTime = document.getElementById("rod_time").value;
                        pistonTime = document.getElementById("piston_time").value;
                        if (document.getElementById("rod_time").disabled == false) {
                            timeRodD = timePistonConversion(document.getElementById("rod_time").value);
                            if (timeRodD > 0 && timeRodD <= 9999.9999) {
                                if (document.getElementById("oilflow").disabled == true) {
                                    oilFlow = oilFlowByRodCalI(rodVolume, rodTime);
                                    pistonTime = pistonTimeCalI(pistonvolume, oilFlow);
                                    pistonVelocityCalI(stroke, pistonTime);
                                    rodVelocityCalI(stroke, rodTime);
                                } else {
                                    if (document.getElementById("oilflow").value == "") {
                                        oilFlow = oilFlowByRodCalI(rodVolume, rodTime);
                                        pistonTime = pistonTimeCalI(pistonvolume, oilFlow);
                                        pistonVelocityCalI(stroke, pistonTime);
                                        rodVelocityCalI(stroke, rodTime);
                                    }
                                }
                            }
                        }

                        //Piston Outflow Cal
                        oilflowD = oilflowConversion(document.getElementById("oilflow").value);
                        if (oilflowD > 0 && oilflowD <= 9999.9999) {
                            pistonOutflow = pistonOutflowCalI(oilFlow, ratio);
                        }

                        //Rod Time Cal
                        if (document.getElementById("oilflow").disabled == false) {
                            oilflowD = oilflowConversion(document.getElementById("oilflow").value);
                            if (oilflowD > 0 && oilflowD <= 9999.9999) {
                                if (document.getElementById("rod_time").disabled == true) {
                                    rodTime = rodTimeCalI(rodVolume, oilFlow);
                                } else {
                                    if (document.getElementById("rod_time").value == "") {
                                        rodTime = rodTimeCalI(rodVolume, oilFlow);

                                    }
                                }
                            }
                        }
                    } //Stroke End
                    else {
                        if (document.getElementById("rod_time").disabled == true) {
                            document.getElementById("rod_time").value = "";
                        }
                    }

                    //Piston Time Cal by Piston Velocity Backword
                    pistonVelocity = document.getElementById("piston_velocity").value;
                    if (document.getElementById("piston_velocity").disabled == false) {
                        pistonVelocityD = velocityPistonConversion(document.getElementById("piston_velocity").value);
                        if (stroke > 0 && stroke <= 9999.9999 && pistonVelocityD > 0 && pistonVelocityD <= 9999.9999) {
                            pistonTimeByVelCalI(stroke, pistonVelocity);
                        } else {
                            if (document.getElementById("piston_time").disabled == true) {
                                if (rodTime < 0 || rodTime == "") {
                                    document.getElementById("piston_time").value = "";
                                }
                            }
                            if (document.getElementById("rod_time").disabled == true) {
                                document.getElementById("rod_time").value = "";
                            }
                            if (document.getElementById("rod_velocity").disabled == true) {
                                document.getElementById("rod_velocity").value = "";
                            }
                            if (document.getElementById("oilflow").disabled == true) {
                                document.getElementById("oilflow").value = "";
                            }
                        }
                    }

                    //Oil Flow Cal
                    pistonTime = document.getElementById("piston_time").value;
                    if (document.getElementById("piston_time").disabled == false) {
                        timePistonD = timePistonConversion(document.getElementById("piston_time").value);
                        if (pistonTime > 0 && timePistonD <= 9999.9999 && pistonvolume > 0) {
                            if (document.getElementById("oilflow").disabled == true) {
                                oilFlow = oilFlowCalI(pistonvolume, pistonTime);
                            } else {
                                if (document.getElementById("oilflow").value == "") {
                                    oilFlow = oilFlowCalI(pistonvolume, pistonTime);
                                }
                            }
                        }
                    }

                    // Rod Time Cal
                    oilFlow = document.getElementById("oilflow").value;
                    if (document.getElementById("oilflow").disabled == false) {
                        oilflowD = oilflowConversion(document.getElementById("oilflow").value);
                        if (oilflowD > 0 && oilflowD <= 9999.9999) {
                            if (document.getElementById("rod_time").disabled == true) {
                                if (rodVolume > 0) {
                                    rodTime = rodTimeCalI(rodVolume, oilFlow);
                                }
                            } else {
                                if (document.getElementById("rod_time").value == "") {
                                    rodTime = rodTimeCalI(rodVolume, oilFlow);
                                }
                            }
                        }
                    }

                    //Rod Velocity Cal
                    rodTime = document.getElementById("rod_time").value;
                    if (document.getElementById("rod_time").disabled == true) {
                        timeRodD = timePistonConversion(document.getElementById("rod_time").value);
                        if (timeRodD > 0) {
                            if (document.getElementById("rod_velocity").disabled == true) {
                                rodVelocityCalI(stroke, rodTime);
                            } else {
                                if (document.getElementById("rod_velocity").value == "") {
                                    rodVelocityCalI(stroke, rodTime);
                                }
                            }

                        }
                    }

                    //Rod Time Cal By Rod Velocity Backword
                    rodVelocity = document.getElementById("rod_velocity").value;
                    rodVelocityD = velocityPistonConversion(document.getElementById("rod_velocity").value);
                    if (document.getElementById("rod_velocity").disabled == false && (rodVelocityD > 0 && rodVelocityD <= 9999.9999)) {
                        if (stroke > 0 && stroke <= 9999.9999) {
                            rodTime = rodTimeCalByRodVelI(stroke, rodVelocity);
                        }
                        if (rodVolume > 0 && rodTime > 0) {
                            if (document.getElementById("rod_time").disabled == true) {
                                if (document.getElementById("oilflow").disabled == true) {
                                    oilFlow = oilFlowByRodCalI(rodVolume, rodTime);
                                }
                            }
                        }
                        oilflowD = oilflowConversion(document.getElementById("oilflow").value);
                        if (oilflowD > 0) {
                            if (document.getElementById("oilflow").disabled == false) {
                                if (oilflowD <= 9999.9999) {
                                    pistonOutflowCalI(oilFlow, ratio);
                                }
                            } else {
                                pistonOutflowCalI(oilFlow, ratio);
                            }
                        }
                        if (pistonvolume > 0 && oilFlow > 0) {
                            if (document.getElementById("oilflow").disabled == false) {
                                oilflowD = oilflowConversion(document.getElementById("oilflow").value);
                                if (oilflowD <= 9999.9999) {
                                    pistonTime = pistonTimeCalI(pistonvolume, oilFlow);
                                }
                            } else {
                                pistonTime = pistonTimeCalI(pistonvolume, oilFlow);
                            }
                        }
                        if (stroke > 0 && stroke <= 9999.9999 && pistonTime > 0) {
                            if (document.getElementById("piston_time").disabled == false) {
                                timePistonD = timePistonConversion(document.getElementById("piston_time").value);
                                if (timePistonD <= 9999.9999) {
                                    pistonVelocityCalI(stroke, pistonTime);
                                }
                            } else {
                                pistonVelocityCalI(stroke, pistonTime);
                            }
                        }
                    }
                    // Time & dependency cal by Piston Velocity
                    pistonVelocity = document.getElementById("piston_velocity").value;
                    if (document.getElementById("piston_velocity").disabled == false) {
                        pistonVelocityD = velocityPistonConversion(document.getElementById("piston_velocity").value);
                        if ((stroke > 0 && stroke <= 9999.9999) && (pistonVelocityD > 0 && pistonVelocityD <= 9999.9999)) {
                            timeNDepByVelCalI(stroke, pistonVelocity);

                        }
                    }

                    // Calculating Force for Rod Side
                    if (document.getElementById("preassure").disabled == false) {
                        if (preassure > 0 && preassure <= 9999.9999) {
                            rodForce = rodForceCalI(preassure, rodArea);
                        }
                    }

                    // Pressure Cal Backword by Rod Force
                    var rod_force = document.getElementById("rod_force").value;
                    if (document.getElementById("rod_force").disabled == false && flagForce == false) {
                        forceRodD = forcePistonConversion(document.getElementById("rod_force").value);
                        if (forceRodD > 0 && forceRodD <= 9999.9999) {
                            rod_area = document.getElementById("rod_area").value;
                            pressureByRodForceCalI(rod_force, rod_area, pistonArea)
                            //flagForceRod = true;
                        } else {
                            if (document.getElementById("preassure").value != "0" && document.getElementById("preassure").value != "0.") {
                                document.getElementById("preassure").value = "";
                            }
                            if (piston_force == "." && piston_force == "0" && piston_force == "0.") {
                                document.getElementById("piston_force").value = "";
                            }
                        }
                    }

                    if (document.getElementById("piston_force").disabled == false) {
                        forcePistonD = forcePistonConversion(document.getElementById("piston_force").value);
                        if (forcePistonD > 0 && forcePistonD <= 9999.9999) {
                            rod_area = document.getElementById("rod_area").value;
                            pressureCalI(piston_force, pistonArea, rod_area);
                            flagForce = true;
                        } else if (forcePistonD.length > 0 && forcePistonD != 0) {
                            document.getElementById("preassure").disabled = true;
                        } else {
                            document.getElementById("piston_force").value = "";
                            if (document.getElementById("piston_force").disabled == true) {
                                document.getElementById("rod_force").value = "";
                            }
                        }
                    }
                    // Outflow Cal
                    oilFlow = document.getElementById("oilflow").value;
                    if (oilFlow > 0) {
                        if (document.getElementById("oilflow").disabled == false) {
                            oilflowD = oilflowConversion(document.getElementById("oilflow").value);
                            if (oilflowD <= 9999.9999) {
                                pistonOutflowCalI(oilFlow, ratio);
                            }
                        } else {
                            pistonOutflowCalI(oilFlow, ratio);
                        }
                    } else {
                        document.getElementById("piston_outflow").value = "";
                        document.getElementById("rod_outflow").value = "";
                    }
                } // Rod Area End 
                else {
                    document.getElementById("rod_area").value = "";
                    document.getElementById("rod_volume").value = "";
                    if (document.getElementById("rod_force").disabled == true) {
                        document.getElementById("rod_force").value = "";
                    }
                    document.getElementById("ratio").value = "";
                    document.getElementById("piston_outflow").value = "";
                    document.getElementById("rod_outflow").value = "";
                    if (document.getElementById("rod_time").disabled == true) {
                        document.getElementById("rod_time").value = "";
                    }
                    if (document.getElementById("rod_velocity").disabled == true) {
                        document.getElementById("rod_velocity").value = "";
                    }
                }
            } //Piston Area Condition closed
            else {
                document.getElementById("piston_area").value = "";
                document.getElementById("rod_area").value = "";
                document.getElementById("piston_volume").value = "";
                document.getElementById("rod_volume").value = "";
                if (document.getElementById("piston_force").disabled == true) {
                    document.getElementById("piston_force").value = "";
                }
                if (document.getElementById("rod_force").disabled == true) {
                    document.getElementById("rod_force").value = "";
                }
                document.getElementById("ratio").value = "";
                if (document.getElementById("preassure").disabled == true) {
                    document.getElementById("preassure").value = "";
                }
                if (document.getElementById("piston_time").disabled == true) {
                    document.getElementById("piston_time").value = "";
                }
                if (document.getElementById("rod_time").disabled == true) {
                    document.getElementById("rod_time").value = "";
                }
                if (document.getElementById("piston_velocity").disabled == true) {
                    document.getElementById("piston_velocity").value = "";
                }
                if (document.getElementById("rod_velocity").disabled == true) {
                    document.getElementById("rod_velocity").value = "";
                }
                document.getElementById("piston_outflow").value = "";
                document.getElementById("rod_outflow").value = "";
            }
        } // Imperial Condition closed
    } //keycode by prakhar
}