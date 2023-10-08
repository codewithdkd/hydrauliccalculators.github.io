$(document).ready(function() {
    $('#copy').on('click', function() {

        /*var Browser_Name= navigator.appName;
         if(Browser_Name == "Microsoft Internet Explorer")
         {
           

 
            if(window.clipboardData) {
                window.clipboardData.clearData();
                window.clipboardData.setData("Text", document.getElementById('lb1').innerText+'\t'+document.getElementById('piston').value+'\t\t\t'+document.getElementById('unit1').value+'\n'+
                                                     document.getElementById('lb2').innerText+'\t\t'+document.getElementById('rod').value+'\t\t\t'+document.getElementById('unit2').value+'\n'+
                                                     document.getElementById('lb3').innerText+'\t\t'+document.getElementById('stroke').value+'\t\t\t'+document.getElementById('unit3').value+'\n'+
                                                     document.getElementById('lb4').innerText+'\t\t'+document.getElementById('preassure').value+'\t\t\t'+document.getElementById('unit4').value+'\n'+
                                                     document.getElementById('lb5').innerText+'\t\t'+document.getElementById('oilflow').value+'\t\t\t'+document.getElementById('unit5').value+'\n\n\n'+'\t'+
                                                     document.getElementById('li1').innerText+'\t\t'+document.getElementById('li2').innerText+'\n'+
                                                     document.getElementById('lb6').innerText+'\t'+document.getElementById('piston_area').value+'\t'+document.getElementById('rod_area').value+'\t'+document.getElementById('unit11').value+'\n'+
                                                     document.getElementById('lb7').innerText+'\t'+document.getElementById('piston_volume').value+'\t'+document.getElementById('rod_volume').value+'\t'+document.getElementById('unit12').value+'\n'+
                                                     document.getElementById('lb8').innerText+'\t'+document.getElementById('piston_force').value+'\t'+document.getElementById('rod_force').value+'\t'+document.getElementById('unit13').value+'\n'+
                                                     document.getElementById('lb9').innerText+'\t'+document.getElementById('piston_time').value+'\t'+document.getElementById('rod_time').value+'\t'+document.getElementById('unit14').value+'\n'+
                                                     document.getElementById('lb10').innerText+'\t'+document.getElementById('piston_velocity').value+'\t'+document.getElementById('rod_velocity').value+'\t'+document.getElementById('unit15').value+'\n'+
                                                     document.getElementById('lb11').innerText+'\t'+document.getElementById('piston_outflow').value+'\t'+document.getElementById('rod_outflow').value+'\t'+document.getElementById('unit16').value+'\n'+document.getElementById('lb12').innerText+'\t'+document.getElementById('ratio').value);
          }


         }*/
        var lb1 = $("#lb1").text();
        var piston = $("#piston").val();
        var unit1 = $("#unit1").val();
        var lb2 = $("#lb2").text();
        var rod = $("#rod").val();
        var unit2 = $("#unit2").val();
        var lb3 = $("#lb3").text();
        var stroke = $("#stroke").val();
        var unit3 = $("#unit3").val();
        var lb4 = $("#lb4").text();
        var preassure = $("#preassure").val();
        var unit4 = $("#unit4").val();
        var lb5 = $("#lb5").text();
        var oilflow = $("#oilflow").val();
        var unit5 = $("#unit5").val();
        var copyFlag = false;
        var p = $('#li1').text().trim();
        var r = $('#li2').text().trim();
        /*Output Fields*/
        var lb6 = $('#lb6').text().trim();
        var piston_area = $("#piston_area").val();
        var rod_area = $("#rod_area").val();
        var unit11 = $("#unit11").val();
        var lb7 = $('#lb7').text();
        var piston_volume = $("#piston_volume").val();
        var rod_volume = $("#rod_volume").val();
        var unit12 = $("#unit12").val();
        //var lbl_Piston_Area = "Area";
        var lb8 = $('#lb8').text();
        var piston_force = $("#piston_force").val();
        var rod_force = $("#rod_force").val();
        var unit13 = $("#unit13").val();
        var lb9 = $('#lb9').text();
        var piston_time = $("#piston_time").val();
        var rod_time = $("#rod_time").val();
        var unit14 = $("#unit14").val();
        var lb10 = $('#lb10').text();
        var piston_velocity = $("#piston_velocity").val();
        var rod_velocity = $("#rod_velocity").val();
        var unit15 = $("#unit15").val();
        var lb11 = $('#lb11').text();
        var piston_outflow = $("#piston_outflow").val();
        var rod_outflow = $("#rod_outflow").val();
        var unit16 = $("#unit16").val();
        var lb12 = $('#lb12').text();
        var ratio = $("#ratio").val();
        var clipboard_txt = lb1 + '\t' + piston + '\t\t' + unit1 + "\r\n" + lb2 + '\t\t' + rod + '\t\t' + unit2 + "\r\n" +
            lb3 + '\t\t' + stroke + '\t\t' + unit3 + "\r\n" + lb4 + '\t\t' + preassure + '\t\t' + unit4 + "\r\n" + lb5 + '\t\t' + oilflow + '\t\t' + unit5 + '\n\n' +
            '\t' + p + '\t\t' + r + '\n\n' + lb6 + '\t' + piston_area + '\t' + rod_area + '\t' + unit11 + '\n\n' + lb7 + '\t' +
            piston_volume + '\t' + rod_volume + '\t' + unit12 + '\n\n' + lb8 + '\t' + piston_force + '\t' + rod_force + '\t' + unit13 + '\n\n' + lb9 + '\t' +
            piston_time + '\t' + rod_time + '\t' + unit14 + '\n\n' + lb10 + '\t' + piston_velocity + '\t' + rod_velocity + '\t' + unit15 + '\n\n' + lb11 + '\t' +
            piston_outflow + '\t' + rod_outflow + '\t' + unit16 + '\n\n' + lb12 + '\t' + ratio;
        var el = document.createElement('textarea');
        el.value = clipboard_txt;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        copyFlag = document.execCommand('copy');
        document.body.removeChild(el);
        if (copyFlag == true) {
            //console.log("mainPic src",$("#mainPic").attr('src'));
            if ($("#mainPic").attr('src') == "images/00CylinderFormula.png") {
                $(".copyToaster").css('top', 'calc(1vh + 1259px)');
            } else if ($("#mainPic").attr('src') == "images/00CylinderFormulajp.png") {
                $(".copyToaster").css('top', 'calc(1vh + 1259px)');
            } else {
                $(".copyToaster").css('top', 'calc(1vh + 888px)');
            }
            $(".copyToaster").show(1, function() {
                setTimeout(
                    function() {
                        $(".copyToaster").hide(1);
                    }, 2500
                )
            });
        }
    });
});

/* Cylinder Image Code*/

$(document).ready(function() {
    $('#piston').on("focus", function() {
        $('.imgContainer img').attr("src", pistonDiaImage);
        $('#piston').addClass("reset");

    });

    $('#rod').on("focus", function() {
        $('.imgContainer img').attr("src", rodDiaImage);
        $('#rod').addClass("reset");

    });

    $('#stroke').on("focus", function() {
        $('.imgContainer img').attr("src", strokeDiaImage);
        $('#rod').addClass("reset");

    });

    $('#preassure').on("focus", function() {
        $('.imgContainer img').attr("src", pressureDiaImage);
        $('#rod').addClass("reset");

    });

    $('#oilflow').on("focus", function() {
        $('.imgContainer img').attr("src", oilflowDiaImage);
        $('#rod').addClass("reset");

    });



    $('#piston_force').on("focus", function() {
        $('.imgContainer img').attr("src", forceBoreSideImage);
        $('#rod').addClass("reset");

    });

    $('#rod_force').on("focus", function() {
        $('.imgContainer img').attr("src", forceRodSideImage);
        $('#rod').addClass("reset");

    });

    $('#piston_time').on("focus", function() {
        $('.imgContainer img').attr("src", timeBoreSideImage);
        $('#rod').addClass("reset");

    });

    $('#rod_time').on("focus", function() {
        $('.imgContainer img').attr("src", timeRodSideImage);
        $('#rod').addClass("reset");

    });


    $('#piston_velocity').on("focus", function() {
        $('.imgContainer img').attr("src", velocityBoreImage);
        $('#rod').addClass("reset");

    });

    $('#rod_velocity').on("focus", function() {
        $('.imgContainer img').attr("src", velocityRodImage);
        $('#rod').addClass("reset");

    });

    $('#piston,#rod,#stroke,#preassure,#oilflow,#piston_force,#rod_force,#piston_time,#rod_time,#piston_velocity,#rod_velocity').on("focusout", function() {
        $('.imgContainer img').attr("src", "images/Main_Image.jpg");
    });

});
$(":input").click(function() {
    console.log("click input called");
})
$("select").click(function() {
    console.log("click select called");
});

//call this function in init methods also
function getImageBasedOnCurrentScreen() {
    if (measurementUnitFlag.toLowerCase() == "metric") {
        if (currentScreen == 2) {
            var ddValue = $("#motorHeaderDD").val();
            if (ddValue == 1) {
                return "images/" + langIs + "/01MotorFlowrateMetric.png";
            } else if (ddValue == 2) {
                return "images/" + langIs + "/02MotorPressureMetric.png";
            } else if (ddValue == 3) {
                return "images/" + langIs + "/03MotorDisplacementMetric.png";
            } else if (ddValue == 4) {
                return "images/" + langIs + "/04MotorSpeedMetric.png";
            } else if (ddValue == 5) {
                return "images/" + langIs + "/05MotorTorqueMetric.png";
            } else if (ddValue == 6) {
                return "images/" + langIs + "/06MotorPowerMetric.png";
            }
        } else if (currentScreen == 3) {
            var ddValue = $("#pumpHeaderDD").val();
            if (ddValue == 1) {
                return "images/" + langIs + "/07PumpFlowrateMetric.png";
            } else if (ddValue == 2) {
                return "images/" + langIs + "/08PumpDisplacementMetric.png";
            } else if (ddValue == 3) {
                return "images/" + langIs + "/10PumpElectricmotorpowerMetric.png";
            } else if (ddValue == 4) {
                return "images/" + langIs + "/09PumpTotalefficiencyMetric.png";
            }
        } else if (currentScreen == 4) {
            return "images/" + langIs + "/11PressuredropMetric.png";
        } else if (currentScreen == 5) {
            var ddValue = $("#pipingHeaderDD").val();
            if (ddValue == 1) {
                return "images/" + langIs + "/12PipingUsingabsoluteviscosityMetric.png";
            } else if (ddValue == 2) {
                return "images/" + langIs + "/13PipingUsingkinematicaviscosityMetric.png";
            }
        }
    } else {
        //imperial
        if (currentScreen == 2) {
            var ddValue = $("#motorHeaderDD").val();
            if (ddValue == 1) {
                return "images/" + langIs + "/01MotorFlowrateInch.png";
            } else if (ddValue == 2) {
                return "images/" + langIs + "/02MotorPressureInch.png";
            } else if (ddValue == 3) {
                return "images/" + langIs + "/03MotorDisplacementInch.png";
            } else if (ddValue == 4) {
                return "images/" + langIs + "/04MotorSpeedInch.png";
            } else if (ddValue == 5) {
                return "images/" + langIs + "/05MotorTorqueInch.png";
            } else if (ddValue == 6) {
                return "images/" + langIs + "/06MotorPowerInch.png";
            }
        } else if (currentScreen == 3) {
            var ddValue = $("#pumpHeaderDD").val();
            if (ddValue == 1) {
                return "images/" + langIs + "/07PumpFlowrateInch.png";
            } else if (ddValue == 2) {
                return "images/" + langIs + "/08PumpDisplacementInch.png";
            } else if (ddValue == 3) {
                return "images/" + langIs + "/10PumpElectricmotorpowerInch.png";
            } else if (ddValue == 4) {
                return "images/" + langIs + "/09PumpTotalefficiencyInch.png";
            }
        } else if (currentScreen == 4) {
            return "images/" + langIs + "/11PressuredropInch.png";
        } else if (currentScreen == 5) {
            var ddValue = $("#pipingHeaderDD").val();
            if (ddValue == 1) {
                return "images/" + langIs + "/12PipingUsingabsoluteviscosityInch.png";
            } else if (ddValue == 2) {
                return "images/" + langIs + "/13PipingUsingkinematicaviscosityInch.png";
            }
        }
    }
}

function resetImageTagsAndState(type) {
    /*console.log("resetImageTagsAndState called");*/
    imageToggleState = 1;
    if (currentScreen == 1 || type == "cylinder") {
        $(".formulaeText").text(formulaeTextIs);
        $(".sigmaText").html();
        $(".sigmaText").html('<img src="images/Formula.svg" height="14px">');
        if (document.images["mainPic"] && (document.images["mainPic"].src == "images/00CylinderFormula.png" || document.images["mainPic"].src == "images/00CylinderFormulajp.png")) {
            document.images["mainPic"].src = "images/Main_Image.jpg";
            newsrc = "Main_Image.jpg";
        }
        /*else{
          document.images["mainPic"].src = "images/Main_Image.jpg";
          newsrc  = "Main_Image.jpg";
        }*/
        if (type && type == "cylinder") {
            document.images["mainPic"].src = "images/Main_Image.jpg";
            newsrc = "Main_Image.jpg";
        }
    } else if (currentScreen == 2) {
        $(".formulaeText").text(formulaeTextIs);
        $(".sigmaText").html();
        $(".sigmaText").html('<img src="images/Formula.svg" height="14px">');
        $(".imgContainerM").hide();
    } else if (currentScreen == 3) {
        $(".formulaeText").text(formulaeTextIs);
        $(".sigmaText").html();
        $(".sigmaText").html('<img src="images/Formula.svg" height="14px">');
        $(".imgContainerP").hide();
    } else if (currentScreen == 4) {
        $(".formulaeText").text(formulaeTextIs);
        $(".sigmaText").html();
        $(".sigmaText").html('<img src="images/Formula.svg" height="14px">');
        $(".imgContainerPD").hide();
    } else if (currentScreen == 5) {
        $(".formulaeText").text(formulaeTextIs);
        $(".sigmaText").html();
        $(".sigmaText").html('<img src="images/Formula.svg" height="14px">');
        $(".imgContainerPiping").hide();
    }
}

/*Formula Image code  */

var newsrc = "Main_Image.jpg";
var newsrc_1 = "calculator_but.png";
//1 is for Formula
//2 is for Calculator
imageToggleState = 1;

function changeImage() {
    var currentScreenImage = getImageBasedOnCurrentScreen();
    if (imageToggleState == 1) {
        imageToggleState = 2;
    } else {
        imageToggleState = 1;
    }
    if (imageToggleState == 1) {
        $(".formulaeText").text(formulaeTextIs);
        $(".sigmaText").html();
        $(".sigmaText").html('<img src="images/Formula.svg" height="14px">');
    } else {
        $(".formulaeText").text(calculateTextIs);
        $(".sigmaText").html();
        $(".sigmaText").html('<img src="images/Calc.svg" height="16px" width="12px" style="background:black">')
    }
    if (currentScreen != 1) {
        if (currentScreen == 2) {
            //m
            document.images["mainPicMotor"].src = currentScreenImage;
            $(".imgContainerM").toggle();
        } else if (currentScreen == 3) {
            //p
            document.images["mainPicPump"].src = currentScreenImage;
            $(".imgContainerP").toggle();
        } else if (currentScreen == 4) {
            //pd
            document.images["mainPicPressureDrop"].src = currentScreenImage;
            $(".imgContainerPD").toggle();
        } else if (currentScreen == 5) {
            //pip
            document.images["mainPicPiping"].src = currentScreenImage;
            $(".imgContainerPiping").toggle();
        }
        return;
    }
    /*console.log('$(".formulaeText").text()',$(".formulaeText").text(),$(".formulaeText").text().indexOf(formulaeTextIs),formulaeTextIs);*/
    if ($(".formulaeText").text().indexOf(formulaeTextIs) >= 0) {
        document.images["mainPic"].src = "images/Main_Image.jpg";
        /*$('.imgContainer').hide();
        $('.imgContainer').slideDown();*/
        document.images["mainPic"].alt = "";
        /*document.images["mainPic"].height = "439";*/
        newsrc = "Main_Image.jpg";
        /*$(".imgContainer").css("position","absolute");
        $(".imgContainer").css("z-index",10000);*/
        //$("#cylinderHeaderText").text(cylinderImgHeaderText);
        /* $("#cylinderHeaderText").css("left","-116px");*/
    } else {

        if (langIs == "jp") {
            document.images["mainPic"].src = "images/00CylinderFormulajp.png";
        } else if (langIs == "de") {
            document.images["mainPic"].src = "images/00CylinderFormulade.png";
        } else if (langIs == "zh") {
            document.images["mainPic"].src = "images/00CylinderFormulazh.png";
        } else {
            document.images["mainPic"].src = "images/00CylinderFormula.png";
        }

        /* $('.imgContainer').hide();
         $('.imgContainer').slideDown();*/
        document.images["mainPic"].alt = "";
        newsrc = "00CylinderFormula.png";
        /*$(".imgContainer").css("position","relative");
  $("#cylinderHeaderText").text(cylinderCalculatorHeaderText);*/
        /*$("#cylinderHeaderText").css("left","-98px");*/
        /*document.images["mainPic"].height = "185";*/
    }

    if (newsrc_1 == "calculator_but.png") {
        //document.images["but_pic"].src = calculatorBtnImage;
        // document.images["but_pic"].alt = "";

        newsrc_1 = "formula_but.png";
    } else {
        // document.images["but_pic"].src = formulaBtnImage;
        // document.images["but_pic"].alt = "";

        newsrc_1 = "calculator_but.png";
    }
}

function changeImageNew(type, subType) {
    console.log("changeImageNew called", "type", type, "subType", subType);
    if (type === "motor") {
        if (subType === "flow_rate") {

        }
    } else if (type === "pressureDrop") {

    } else if (type === "piping") {

    }

}



$(document).ready(function() {
    $('#myForm').submit(function() {
        $('[disabled]').each(function(i) {
            /*var d_name = $(this).attr("name");
            var d_val = $(this).val();*/
            $(this).attr("disabled", false);
        });
        return true;
    });



});





$(document).ready(function() {
    $("#piston,#rod,#stroke,#preassure,#oilflow,#piston_force,#rod_force,#piston_time,#rod_time,#piston_velocity,#rod_velocity").focus(function() {
        /*if(document.images["but_pic"]){
           document.images["but_pic"].src = formulaBtnImage;
        }
    
          newsrc = "formulatab.png";
          newsrc_1 = "calculator_but.png";*/
        resetImageTagsAndState();
    });
    $("#unit1,#unit2,#unit3,#unit4,#unit5,#unit11,#unit12,#unit13,#unit14,#unit15,#unit16").change(function() {
        /*document.images["but_pic"].src = "images/formula_but.png";
        document.images["mainPic"].src = "images/Main_Image.jpg";
        newsrc = "formulatab.png";
        newsrc_1 = "calculator_but.png";*/
        resetImageTagsAndState('cylinder');
    });

});


$(document).ready(function() {

    $('#clear').click(function() {
        //$('#piston,#rod,#stroke,#preassure,#oilflow').css({border: "1px solid #C0C0C0"});
        $('#piston,#rod,#stroke,#preassure,#oilflow,#piston_area,#rod_area,#piston_volume,#rod_volume,#piston_force,#rod_force,#piston_time,#rod_time,#piston_velocity,#rod_velocity').css({
            border: "1px solid #DBDBDB"
        })
        $("#piston,#rod,#stroke,#preassure,#oilflow,#piston_area,#rod_area,#piston_volume,#rod_volume,#piston_force,#rod_force,#piston_time,#rod_time,#piston_velocity,#rod_velocity,#piston_outflow,#rod_outflow,#ratio").val('');
        //$("#piston_force,#rod_force,#piston_time,#rod_time,#piston_velocity,#rod_velocity,#preassure,#oilflow").attr("disabled",false);
        document.getElementById("piston_force").disabled = false;
        document.getElementById("rod_force").disabled = false;
        document.getElementById("piston_time").disabled = false;
        document.getElementById("rod_time").disabled = false;
        document.getElementById("piston_velocity").disabled = false;
        document.getElementById("rod_velocity").disabled = false;
        document.getElementById("preassure").disabled = false;
        document.getElementById("oilflow").disabled = false;

        // Changed to hide Validation msg of Rod Cant be greater than to Piston
        $('#error31').hide();
        $('#box').hide();
        $('#box2').hide();
        $('#box3').hide();
        //Changed to hide max value msg on reset Click By Prakhar
        $('#error').hide();
        $('#error1').hide();
        $('#error2').hide();
        $('#error3').hide();
        $('#error4').hide();
        $('#error5').hide();
        $('#error6').hide();
        $('#error7').hide();
        $('#error8').hide();

        $('#piston_force').addClass("reset");
        $('#rod_force').addClass("reset");

        $('#piston_time').addClass("reset");
        $('#rod_time').addClass("reset");

        $("#piston_velocity").addClass("reset");
        $("#rod_velocity").addClass("reset");

        $("#preassure").addClass("reset");

        $("#oilflow").addClass("reset");

        $('#copy,#email,#clear').prop("disabled", true);
        $('.centerAlignButton div').removeClass("gradientButton");
        $('.centerAlignButton div').eq(1).removeClass("resetButton_1");
        $('.centerAlignButton div').addClass("removeGradient");

        //Changes By Prakhar
        //$("#unit1").prop('selectedIndex',0);
        //$("#unit1").resetSS();
        //End Changes By Prakhar

    });
});

/*Reset Button Enable Disable code*/

$(document).ready(function() {

    var cnt = 0;
    var pistonFlag = true;
    var rodFlag = true;
    var strokeFlag = true;
    var pressureFlag = true;
    var oilflowFlag = true;
    var forceFlag = true;
    var timeFlag = true;
    var velocityFlag = true;

    $('#piston,#rod,#stroke,#preassure,#oilflow,#piston_force,#rod_force,#piston_time,#rod_time,#piston_velocity,#rod_velocity').keyup(function() {
        // Changes By Prakhar
        if ($('#piston').val() != '' && pistonFlag == true) {
            cnt++;
            pistonFlag = false;
        }
        if ($('#rod').val() != '' && rodFlag == true) {
            cnt++;
            rodFlag = false;
        }
        if ($('#stroke').val() != '' && strokeFlag == true) {
            cnt++;
            strokeFlag = false;
        }
        if ($('#preassure').val() != '' && pressureFlag == true) {
            cnt++;
            pressureFlag = false;
        }
        if ($('#oilflow').val() != '' && oilflowFlag == true) {
            cnt++;
            oilflowFlag = false;
        }
        if (($('#piston_force').val() != '' || $('#rod_force').val() != '') && forceFlag == true) {
            cnt++;
            forceFlag = false;
        }
        if (($('#piston_time').val() != '' || $('#rod_time').val() != '') && timeFlag == true) {
            cnt++;
            timeFlag = false;
        }
        if (($('#piston_velocity').val() != '' || $('#rod_velocity').val() != '') && velocityFlag == true) {
            cnt++;
            velocityFlag = false;
        }
        if (cnt >= 2) {
            $('#clear').prop("disabled", false);
            $('.centerAlignButton div').removeClass("removeGradient");
            $('.centerAlignButton div').eq(1).addClass("resetButton_1");
            $('.centerAlignButton div').addClass("gradientButton");
            cnt = 0;
            pistonFlag = true;
            rodFlag = true;
            strokeFlag = true;
            pressureFlag = true;
            oilflowFlag = true;
            forceFlag = true;
            timeFlag = true;
            velocityFlag = true;
        } else {
            $('#clear').prop("disabled", true);
            $('.centerAlignButton div').removeClass("gradientButton");
            $('.centerAlignButton div').removeClass("resetButton_1");
            $('.centerAlignButton div').addClass("removeGradient");
        }
        // End Changes By Prakhar


    });

    $('#piston,#rod,#stroke').keyup(function() {

        if ($('#piston').val() != '' && $('#rod').val() != '' && $('#stroke').val() != '')
            $('#copy').prop("disabled", false);
        else {
            $('#copy').prop("disabled", true);
            $('.centerAlignButton div').removeClass("gradientButton");
            $('.centerAlignButton div').addClass("removeGradient");
        }

    });

    $('#piston,#rod,#stroke').keyup(function() {

        if ($('#piston').val() != '' && $('#rod').val() != '' && $('#stroke').val() != '')
            $('#email').prop("disabled", false);
        else {
            $('#email').prop("disabled", true);
            $('.centerAlignButton div').removeClass("gradientButton");
            $('.centerAlignButton div').addClass("removeGradient");
        }

    });




});


$(document).ready(function() {
    $('#piston_force,#rod_force,#piston_time,#rod_time,#piston_velocity,#rod_velocity').focus(function() {
        $('#input ul').removeClass("activeSelected");
    });
});