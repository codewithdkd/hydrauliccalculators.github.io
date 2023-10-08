function checkValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);

    return pattern.test(emailAddress);
};

function checkIfEmailBoxIsOpen() {
    /*console.log('checkIfEmailBoxIsOpen outer',$("#outer").css('display'),"outerEmailMotor",$(".outerEmailMotor").css("display"),".outerEmailPump",$(".outerEmailPump").css("display"));
    console.log(".outerEmailPD",$(".outerEmailPD").css("display"),".outerEmailPiping",$(".outerEmailPiping").css("display"));*/
    if (currentScreen == 1) {
        if ($("#outer").css('display') == 'block') {
            return true;
        }
    } else if (currentScreen == 2) {
        if ($("#outer").css('display') == 'block') {
            return true;
        }
    } else if (currentScreen == 3) {
        if ($("#outer").css('display') == 'block') {
            return true;
        }
    } else if (currentScreen == 4) {
        if ($("#outer").css('display') == 'block') {
            return true;
        }
    } else if (currentScreen == 5) {
        if ($("#outer").css('display') == 'block') {
            return true;
        }
    }
    return false;
}

// When the DOM is ready, initialize the scripts.
$(document).ready(function() {

    // Get a reference to the outer.
    var outer = $("#outer");

    /*
			// Bind the link to toggle the slide.
			$( "#email" ).click(
				function( event ){
					// Prevent the default event.
					event.preventDefault();
 
					// Toggle the slide based on its current
					// visibility.
					if (outer.is( ":visible" )){
 
						// Hide - slide up.
						outer.slideUp();
						
alert("UP11");
 
					} else {
 
						// Show - slide down.
						outer.slideDown();
 
					}

         

opArray=$('#output').find('input[disabled]');
ipArray=$('#input').find('input[disabled]');

for(i=0;i<opArray.length;i++)
{
 fieldID=opArray[i].id;
 $("#" + fieldID).attr("disabled",false);
 $("#" + fieldID).addClass("reset");
 
}

for(i=0;i<ipArray.length;i++)
{
 ID=ipArray[i].id;
 $("#" + ID).attr("disabled",false);
 $("#" + ID).addClass("reset");
 
}


				});*/
    var tabindex = 1;
    $("#cancel").click(function(event) { //console.log("isEmailRequestInProcess",isEmailRequestInProcess);
        if (isEmailRequestInProcess == true) {
            return;
        }
        $("#piston_area,#rod_area,#piston_volume,#rod_volume,#piston_outflow,#rod_outflow,#ratio").css("background", "#F0F0F0");
        event.preventDefault();

        $('input, .newListSelected, #link a').each(function() {
            // if ((this.type != "hidden") {

            var $inputbox = $(this);

            $inputbox.attr("tabindex", tabindex);
            //$('input:disabled').removeAttr("disabled");
            //$('input:disabled').attr("tabindex", "-1");
            tabindex++;

        });
        if (currentScreen != 1) {
            return;
        }
        for (i = 0; i < opArray.length; i++) {
            fieldID = opArray[i].id;
            $("#" + fieldID).attr("disabled", true);

        }

        for (i = 0; i < ipArray.length; i++) {
            ID = ipArray[i].id;
            $("#" + ID).attr("disabled", true);

        }

        $("#piston_area,#rod_area,#piston_volume,#rod_volume,#piston_outflow,#rod_outflow").addClass("rr");

        if (outer.is(":visible")) {

            // Hide - slide up.
            outer.slideUp();
            $('#cross').hide();
            $('#cross2').hide();
            $('#pic').hide();
            $('#pic2').hide();
            $('#to').val('');
            $('#cc').val('');
            //$('#subject').val('');
            //$('#message').val('');
            //$('#to').css({border:"1px solid #959499"});
            //$('#cc').css({border:"1px solid #959499"});

        }

        $('.overlayPage_updated').hide();


    });

});


/* $('document').ready(function() {
   
    $('#email').click(function() {
        $('#outer').slideToggle();
    });

    $('#cancel').click(function() {
        $('#outer').slideToggle();
    });
});*/


$(document).ready(function() {
    /*var sendBackground = $("#send").css('background');
    console.log("sendbackground",sendBackground);*/
    $('#send').click(function() {
        if ($('#to').val() == "") {
            $('#to').css({
                border: "1px solid red"
            });
            $('#cross').show();
        } else if (!checkValidEmailAddress($('#to').val())) {
            $('#to').css({
                border: "1px solid red"
            });
            $('#cross').show();
        }

        if ($('#cc').val() == "") {
            //$('#cc').css({border: "1px solid red"});
            $('#cross2').show();
        } else if (!checkValidEmailAddress($('#cc').val())) {
            $('#cc').css({
                border: "1px solid red"
            });
            $('#cross2').show();
        }

    });

    $('#to').keyup(function() {
        if ($('#to').val() != "") {
            //$('#to').css({border:"1px solid #959499"});
            $('#cross').hide();
        }
        if (checkValidEmailAddress($('#to').val())) {
            $('#pic').show();
            $('#cross2').hide();
        } else {
            $('#pic').hide();
            //$('#cross').show();
        }

    });

    $('#cc').keyup(function() {
        if ($('#cc').val() != "") {
            //$('#cc').css({border:"1px solid #959499"});
            $('#cross2').hide();
        }
        if (checkValidEmailAddress($('#cc').val())) {
            $('#pic2').show();
            $('#cross2').hide();
        } else {
            $('#pic2').hide();
            //$('#cross2').show();
        }

    });


});




//Changes By Prakhar to remove trailing zeros from E-Mail preview.

function truncateMailPreview(no) {
    var resValue = no.toString().split(".");
    if (no.indexOf(".") != -1) {
        if ((parseInt(resValue[1] == 0))) {
            //var decPart = (parseFloat(resValue[1])).toString();
            //var truncDecPart = resValue[1].substring(0,11);
            //var truncDecPart = +decPart.substring(0,);
            var truncResValue = resValue[0];
            return truncResValue;
        } else {
            return no;
        }
    } else {
        return no;
    }
}

/*Value updated in Email Preview on click of Email button*/

$(document).ready(function() {

    $('#email').on('click', function() {
        $("#cancel").removeAttr('disabled');
        $("#cancel").removeAttr('style');
        $("#send").attr('disabled', 'disabled');
        //var piston_area=parseFloat($('#piston_area').val()).toFixed(4);
        var piston_area = truncateMailPreview($('#piston_area').val());
        //var rod_area=parseFloat($('#rod_area').val()).toFixed(4);
        var rod_area = truncateMailPreview($('#rod_area').val());
        //var piston_volume=parseFloat($('#piston_volume').val()).toFixed(4);
        var piston_volume = truncateMailPreview($('#piston_volume').val());
        //var rod_volume=parseFloat($('#rod_volume').val()).toFixed(4);
        var rod_volume = truncateMailPreview($('#rod_volume').val());
        //var piston_force=parseFloat($('#piston_force').val()).toFixed(4);
        var piston_force = truncateMailPreview($('#piston_force').val());
        //var rod_force=parseFloat($('#rod_force').val()).toFixed(4);
        var rod_force = truncateMailPreview($('#rod_force').val());
        //var piston_time=parseFloat($('#piston_time').val()).toFixed(4);
        var piston_time = truncateMailPreview($('#piston_time').val());
        //var rod_time=parseFloat($('#rod_time').val()).toFixed(4);
        var rod_time = truncateMailPreview($('#rod_time').val());
        //var piston_velocity=parseFloat($('#piston_velocity').val()).toFixed(4);
        var piston_velocity = truncateMailPreview($('#piston_velocity').val());
        //var rod_velocity=parseFloat($('#rod_velocity').val()).toFixed(4);
        var rod_velocity = truncateMailPreview($('#rod_velocity').val());
        //var piston_outflow=parseFloat($('#piston_outflow').val()).toFixed(4);
        var piston_outflow = truncateMailPreview($('#piston_outflow').val());
        //var rod_outflow=parseFloat($('#rod_outflow').val()).toFixed(4);
        var rod_outflow = truncateMailPreview($('#rod_outflow').val());
        //var ratio=parseFloat($('#ratio').val()).toFixed(4);
        var ratio = truncateMailPreview($('#ratio').val());


        var oilflow = parseFloat($('#oilflow').val()).toFixed(4);
        var preassure = parseFloat($('#preassure').val()).toFixed(4);

        if ($('#piston').val() > 0) {
            document.getElementById("dia1").innerHTML = $('#piston').val();
            document.getElementById("u1").innerHTML = $('#unit1').val();
            setTimeout("$('#u11').text($('#unit11 option:selected').html())", 50);
        } else {
            $('#dia1').text('');
        }
        /*
		if($('#piston').val()==='')
        {
         $('#dia1').text('');
        }
		*/
        if ($('#rod').val() > 0) {
            document.getElementById("dia2").innerHTML = $('#rod').val();
            document.getElementById("u2").innerHTML = $('#unit2').val();
            setTimeout("$('#u12').text($('#unit12 option:selected').html())", 50);
        } else {
            $('#dia2').text('');
        }
        /*if($('#rod').val()==='')
       {
          $('#dia1').text('');
       }
		*/
        if ($('#stroke').val() > 0) {
            document.getElementById("str").innerHTML = $('#stroke').val();
            document.getElementById("u3").innerHTML = $('#unit3').val();
        } else {
            $('#str').text('');
        }
        /*
		if($('#stroke').val()==='')
       {
          $('#str').text('');
       }
		*/
        if ($('#preassure').val() > 0) {
            document.getElementById("pr").innerHTML = parseFloat($('#preassure').val());
            document.getElementById("u4").innerHTML = $('#unit4').val();
        } else {
            $('#pr').text('');
        }
        /* 
		 if($('#preassure').val()==='')
       {
          $('#pr').text('');
       }
		*/
        if ($('#oilflow').val() > 0) {
            document.getElementById("oil").innerHTML = parseFloat($('#oilflow').val());
            //document.getElementById("u5").innerHTML=$('#unit5').val();
            setTimeout("$('#u5').text($('#unit5 option:selected').html())", 50);
        } else {
            $('#oil').text('');
        }
        /*
		 if($('#oilflow').val()==='')
       {
          $('#oil').text('');
       }
		*/
        if ($('#piston_area').val() > 0) {
            document.getElementById("pisa").innerHTML = piston_area;
            //document.getElementById("roda").innerHTML=rod_area;
            //document.getElementById("u11").innerHTML=$('#unit11').val();
            setTimeout("$('#u11').text($('#unit11 option:selected').html())", 50);
        } else {
            document.getElementById("pisa").innerHTML = '';
        }

        if ($('#rod_area').val() > 0) {
            //document.getElementById("pisa").innerHTML=piston_area;
            document.getElementById("roda").innerHTML = rod_area;
            //document.getElementById("u11").innerHTML=$('#unit11').val();
            setTimeout("$('#u12').text($('#unit12 option:selected').html())", 50);
        } else {
            document.getElementById("roda").innerHTML = '';
        }

        if ($('#piston_volume').val() > 0) {
            document.getElementById("pisv").innerHTML = piston_volume;
            //document.getElementById("rodv").innerHTML=rod_volume;
            document.getElementById("u12").innerHTML = $('#unit12').val();
        } else {
            document.getElementById("pisv").innerHTML = '';
        }

        if ($('#rod_volume').val() > 0) {
            //document.getElementById("pisv").innerHTML=piston_volume;
            document.getElementById("rodv").innerHTML = rod_volume;
            document.getElementById("u12").innerHTML = $('#unit12').val();
        } else {
            document.getElementById("rodv").innerHTML = '';
        }


        if ($('#piston_force').val() > 0) {
            document.getElementById("pisf").innerHTML = piston_force;
            //document.getElementById("rodf").innerHTML=rod_force;
            document.getElementById("u13").innerHTML = $('#unit13').val();
        } else {
            document.getElementById("pisf").innerHTML = '';
        }

        if ($('#rod_force').val() > 0) {
            document.getElementById("rodf").innerHTML = rod_force;
            //document.getElementById("rodf").innerHTML=rod_force;
            document.getElementById("u13").innerHTML = $('#unit13').val();
        } else {
            document.getElementById("rodf").innerHTML = '';
        }

        if ($('#piston_time').val() > 0) {
            document.getElementById("pist").innerHTML = piston_time;
            //document.getElementById("unit14").innerHTML=$('#unit14').val();
            document.getElementById("u14").innerHTML = $('#unit14').val();
        } else {
            document.getElementById("pist").innerHTML = '';
        }

        if ($('#rod_time').val() > 0) {
            document.getElementById("rodt").innerHTML = rod_time;
            //document.getElementById("unit14").innerHTML=$('#unit14').val();
            document.getElementById("u14").innerHTML = $('#unit14').val();
        } else {
            document.getElementById("rodt").innerHTML = '';
        }


        if ($('#piston_velocity').val() > 0) {
            document.getElementById("pisve").innerHTML = piston_velocity;
            //document.getElementById("unit14").innerHTML=$('#unit14').val();
            document.getElementById("u15").innerHTML = $('#unit15').val();
        } else {
            document.getElementById("pisve").innerHTML = '';
        }

        if ($('#rod_velocity').val() > 0) {
            document.getElementById("rodve").innerHTML = rod_velocity;
            //document.getElementById("unit14").innerHTML=$('#unit14').val();
            document.getElementById("u15").innerHTML = $('#unit15').val();
        } else {
            document.getElementById("rodve").innerHTML = '';
        }

        if ($('#piston_outflow').val() > 0) {
            document.getElementById("piso").innerHTML = piston_outflow;
            //document.getElementById("unit14").innerHTML=$('#unit14').val();
            //document.getElementById("u16").innerHTML=$('#unit16').val();
            setTimeout("$('#u16').text($('#unit16 option:selected').html())", 50);
        } else {
            document.getElementById("piso").innerHTML = '';
        }

        if ($('#rod_outflow').val() > 0) {
            document.getElementById("rodo").innerHTML = rod_outflow;
            //document.getElementById("unit14").innerHTML=$('#unit14').val();
            document.getElementById("u16").innerHTML = $('#unit16').val();
        } else {
            document.getElementById("rodo").innerHTML = '';
        }

        if ($('#ratio').val() > 0) {
            document.getElementById("rat").innerHTML = ratio;
        } else {
            document.getElementById("rat").innerHTML = "";
        }



    });

});



/*$(document).ready(function()
{
  $('#to').keyup(function()
  {
   if(checkValidEmailAddress($('#to').val()))
   {
     $('#send').prop("disabled",false);
   }
  }); 

});*/

$(document).ready(function() {
    $('#preassure').keyup(function() {
        if ($('#preassure').val() != "") {
            $('#piston_force,#rod_force').attr("disabled", true);
        } else {
            $('#piston_force,#rod_force').attr("disabled", false);
            $('#piston_force,#rod_force').addClass("reset");
        }
    });

    $('#oilflow').keyup(function() {
        if ($('#oilflow').val() != "") {
            $('#piston_time,#rod_time,#piston_velocity,#rod_velocity').attr("disabled", true);
        } else {
            $('#piston_time,#rod_time,#piston_velocity,#rod_velocity').attr("disabled", false);
            $('#piston_time,#rod_time,#piston_velocity,#rod_velocity').addClass("reset");
        }
    });

    $('#piston_force').keyup(function() {
        if ($('#piston_force').val() != "") {
            $('#preassure,#rod_force').attr("disabled", true);
        } else {
            $('#preassure,#rod_force').attr("disabled", false);
            $('#preassure,#rod_force').addClass("reset");
        }
    });

    $('#rod_force').keyup(function() {
        if ($('#rod_force').val() != "") {
            $('#preassure,#piston_force').attr("disabled", true);
        } else {
            $('#preassure,#piston_force').attr("disabled", false);
            $('#preassure,#piston_force').addClass("reset");
        }
    });




    $('#piston_time').keyup(function() {
        if ($('#piston_time').val() != "") {
            $('#oilflow,#rod_time,#piston_velocity,#rod_velocity').attr("disabled", true);
        } else {
            $('#oilflow,#rod_time,#piston_velocity,#rod_velocity').attr("disabled", false);
            $('#oilflow,#rod_time,#piston_velocity,#rod_velocity').addClass("reset");
        }
    });

    $('#rod_time').keyup(function() {
        if ($('#rod_time').val() != "") {
            $('#oilflow,#piston_time,#piston_velocity,#rod_velocity').attr("disabled", true);
        } else {
            $('#oilflow,#piston_time,#piston_velocity,#rod_velocity').attr("disabled", false);
            $('#oilflow,#piston_time,#piston_velocity,#rod_velocity').addClass("reset");
        }
    });


    $('#piston_velocity').keyup(function() {
        if ($('#piston_velocity').val() != "") {
            $('#oilflow,#rod_time,#piston_time,#rod_velocity').attr("disabled", true);
        } else {
            $('#oilflow,#rod_time,#piston_time,#rod_velocity').attr("disabled", false);
            $('#oilflow,#rod_time,#piston_time,#rod_velocity').addClass("reset");
        }
    });

    $('#rod_velocity').keyup(function() {
        if ($('#rod_velocity').val() != "") {
            $('#oilflow,#piston_time,#piston_velocity,#rod_time').attr("disabled", true);
        } else {
            $('#oilflow,#piston_time,#piston_velocity,#rod_time').attr("disabled", false);
            $('#oilflow,#piston_time,#piston_velocity,#rod_time').addClass("reset");
        }
    });
});