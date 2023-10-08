function checkValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);

    return pattern.test(emailAddress);
};

function sendMailMotor() {

}

$(document).ready(function() {
    $('#send').click(function(e) {
        //for scrolling to top 
        setTimeout(function() {
            $('html,body', window.parent.document).animate({
                scrollTop: 315
            }, "slow");
            // $(window).scrollTop(0,'slow');
        }, 500);
        /**stopping the form submission and checking validation**/

        e.preventDefault();

        /**Variable declaration**/
        var error = false;
        var to = $('#to').val();

        /**Form field validation**/
        if (to.length == 0 || to.indexOf('@') == '-1') {
            error = true;
            $('#to').addClass("red_border");
        } else if (!checkValidEmailAddress(to)) {
            error = true;
            $('#to').addClass("red_border");
        } else {
            $('#to').removeClass("red_border");
        }




        /**If there is no validation error processing the mail functionality**/
        if (error == false) {
            /**Disable Send button just after the form processed 1st time successfully**/
            $('#send').attr({
                'disabled': 'true',
                'value': sending
            });
            $("#send").css('background', '#DBDBDB');
            /*$('[disabled]').each(function(i) {
                
                $(this).attr("disabled", false);
                

    });*/
            $("#cancel").attr({
                'disabled': 'true'
            });
            $("#cancel").css('background', '#DBDBDB');
            /* Posting Ajax function of jQuery to get all the data from the submission of the form as soon as the form sends the values to process.php*/
            //just a hack put to remove those characters
            //cm²,m²,mm²,
            if (currentScreen == 1) {
                //cylinder
                isEmailRequestInProcess = true;
                $.post("process.php", $("#myForm").serialize(), function(result) {
                    /**Check the result set from process.php file**/
                    if (result == 'sent') {
                        /**Display the success message**/
                        /*alert(result);*/
                        $('#mail_success').show().fadeOut(4000);
                        setTimeout(function() {
                            isEmailRequestInProcess = false;
                            $('#cancel').trigger("click");
                            $('#send').removeAttr('disabled').attr('value', send);
                        }, 3000);




                        $('#send').attr('value', send);

                    } else {
                        /**Display the error message**/
                        /*alert(result);*/
                        $('#mail_fail').show().fadeOut(5000);
                        /** Enable the submit button again**/
                        $('#send').removeAttr('disabled').attr('value', send);
                        $("#send").css('background', '#49B1BB');
                        $("#cancel").removeAttr('disabled');
                        $("#cancel").css('background', '#49B1BB');
                        isEmailRequestInProcess = false;
                    }
                });
            } else if (currentScreen == 2) {
                //motor
                var ddValue = $("#motorHeaderDD").val();
                if (ddValue == 1) {
                    //flow rate
                    //displacement,speed,vol eff, power , pressure , mech eff
                } else if (ddValue == 2) {
                    //pressure
                    //power , flow rate , vol eff , mech eff , torque , displacement 
                } else if (ddValue == 3) {
                    //displacement
                    //power , flow rate , vol eff , mech eff , torque , displacement
                } else if (ddValue == 4) {
                    //speed
                    //flow rate , vol eff , displacement , power , torque 
                } else if (ddValue == 5) {
                    //torque        
                    //
                } else if (ddValue == 6) {
                    //power
                }
            } else if (currentScreen == 3) {
                //pump
                var ddValue = $("#pumpHeaderDD").val();
                if (ddValue == 1) {
                    //flow rate
                } else if (ddValue == 2) {
                    //displacement
                } else if (ddValue == 3) {
                    //electric motor power
                } else if (ddValue == 4) {
                    //total efficiency
                }
            } else if (currentScreen == 4) {
                //pressure drop

            } else if (currentScreen == 5) {
                //piping
                if (ddValue == 1) {
                    //using absolute viscosity
                } else if (ddValue == 2) {
                    //using kinematic viscosity
                }
            }
        }

    });

});