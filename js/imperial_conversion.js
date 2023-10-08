/**
  *Conversion Functions
  @purpose- To convert imperial units of Area,Volume,Force,
   Time,Velocity,Outflow of Hydraulic Cylinder
   for both piston side as well as rod side user piston side
  @author-Ritwik Mukhopadhyay
  **/

/********************************************
 **Unit Conversion in Input Panel DropDowns**
 ********************************************/

$(document).ready(function() {
    var keyCode;
    var prev = null;
    var cur = $('#unit1').val();
    var flag = true;
    //alert("Current On load:"+cur);

    $('.unit_selection_new').click(function(event) {
        if (flagForNotChangingMeasurementFields == false) {
            return;
        }
        if (measurementUnitFlag.toLowerCase() == 'imperial') {
            cur = 'in';
        }
    });

    /**Piston Diameter**/
    $('#unit1').change(function() {
        //Changes By Prakhar
        $('#clear').click(function() {
            $('#unit1').prop('selectedIndex', 0);
            $('#unit1').resetSS();
            prev = null;
            cur = $('#unit1').val();
            var tabindex1 = 1;
            $('#myForm input, #myForm .newListSelected').each(function() {
                //if ((this.type != "hidden") && (this.attr != "disabled")) {

                var $inputbox = $(this);
                $inputbox.attr('tabindex', tabindex1);
                //$('input:disabled').removeAttr("disabled");
                //$('input:disabled').attr("tabindex", "-1");
                tabindex1++;
            });
            $('#myForm #piston').focus();
        });
        //End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }

        if ($('#piston').val() > 0) {
            if (prev == 'in') {
                if (cur == 'ft') {
                    $('#piston').val($('#piston').val() / 12);
                }
            } else if ((prev = 'ft')) {
                if (cur == 'in') {
                    $('#piston').val($('#piston').val() * 12);
                }
            }
        }
    });
});
/**Rod Diameter**/
$(document).ready(function() {
    var prev = null;
    var cur = $('#unit2').val();
    var flag = true;

    $('.unit_selection_new').click(function(event) {
        if (flagForNotChangingMeasurementFields == false) {
            return;
        }
        if (measurementUnitFlag.toLowerCase() == 'imperial') {
            cur = 'in';
        }
    });

    $('#unit2').change(function() {
        //Changes By Prakhar
        $('#clear').click(function() {
            $('#unit2').prop('selectedIndex', 0);
            $('#unit2').resetSS();
            prev = null;
            cur = $('#unit2').val();
        });
        //End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }
        if ($('#rod').val() > 0) {
            if (prev == 'in') {
                if (cur == 'ft') {
                    $('#rod').val($('#rod').val() / 12);
                }
            } else if (prev == 'ft') {
                if (cur == 'in') {
                    $('#rod').val($('#rod').val() * 12);
                }
            }
        }
    });
});
/**Stroke**/
$(document).ready(function() {
    var prev = null;
    var cur = $('#unit3').val();
    var flag = true;

    $('.unit_selection_new').click(function(event) {
        if (flagForNotChangingMeasurementFields == false) {
            return;
        }
        if (measurementUnitFlag.toLowerCase() == 'imperial') {
            cur = 'in';
        }
    });

    $('#unit3').change(function() {
        //Changes By Prakhar
        $('#clear').click(function() {
            $('#unit3').prop('selectedIndex', 0);
            $('#unit3').resetSS();
            prev = null;
            cur = $('#unit3').val();
        });
        //End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }
        if ($('#stroke').val() > 0) {
            if (prev == 'in') {
                if (cur == 'ft') {
                    $('#stroke').val($('#stroke').val() / 12);
                }
            } else if (prev == 'ft') {
                if (cur == 'in') {
                    $('#stroke').val($('#stroke').val() * 12);
                }
            }
        }
    });
});
/**Oilflow**/
$(document).ready(function() {
    var prev = null;
    var cur = $('#unit5').val();
    var flag = true;

    $('.unit_selection_new').click(function(event) {
        if (flagForNotChangingMeasurementFields == false) {
            return;
        }
        if (measurementUnitFlag.toLowerCase() == 'imperial') {
            cur = 'gpm';
        }
    });

    $('#unit5').change(function() {
        //Changes By Prakhar
        $('#clear').click(function() {
            $('#unit5').prop('selectedIndex', 0);
            $('#unit5').resetSS();
            prev = null;
            cur = $('#unit5').val();
        });
        //End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }
        if ($('#oilflow').val() > 0) {
            if (prev == 'gpm') {
                if (cur == 'in3/min') {
                    $('#oilflow').val($('#oilflow').val() * 231);
                }
            } else if (prev == 'in3/min') {
                if (cur == 'gpm') {
                    $('#oilflow').val($('#oilflow').val() / 231);
                }
            }
        }
    });
});

/**********************************************
 ** Unit Conversion in Output Panel Dropdowns**
 **********************************************/
/**Piston/Bore & Rod area**/

$(document).ready(function() {
    var prev = null;
    var cur = $('#unit11').val();
    var flag = true;

    $('.unit_selection_new').click(function(event) {
        if (flagForNotChangingMeasurementFields == false) {
            return;
        }
        if (measurementUnitFlag.toLowerCase() == 'imperial') {
            cur = 'in2';
        }
    });
    $('#unit11').change(function() {
        //Changes By Prakhar
        $('#clear').click(function() {
            $('#unit11').prop('selectedIndex', 0);
            $('#unit11').resetSS();
            prev = null;
            cur = $('#unit11').val();
        });
        //End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }
        if ($('#piston_area').val() > 0) {
            if (prev == 'in2') {
                if (cur == 'ft2') {
                    $('#piston_area').val($('#piston_area').val() / 144);
                    if ($('#rod_area').val() > 0) {
                        $('#rod_area').val($('#rod_area').val() / 144);
                    }
                }
            } else if (prev == 'ft2') {
                if (cur == 'in2') {
                    $('#piston_area').val($('#piston_area').val() * 144);
                    if ($('#rod_area').val() > 0) {
                        $('#rod_area').val($('#rod_area').val() * 144);
                    }
                }
            }
        }
    });
});

/**Piston/Bore & Rod Volume**/
$(document).ready(function() {
    var prev = null;
    var cur = $('#unit12').val();
    var flag = true;

    $('.unit_selection_new').click(function(event) {
        if (flagForNotChangingMeasurementFields == false) {
            return;
        }
        if (measurementUnitFlag.toLowerCase() == 'imperial') {
            cur = 'in3';
        }
    });
    $('select#unit12').change(function() {
        //Changes By Prakhar
        $('#clear').click(function() {
            $('#unit12').prop('selectedIndex', 0);
            $('#unit12').resetSS();
            prev = null;
            cur = $('#unit12').val();
        });
        //End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }
        if ($('#piston_volume').val() > 0) {
            if (prev == 'in3') {
                if (cur == 'ft3') {
                    document.getElementById('piston_volume').value =
                        document.getElementById('piston_volume').value * 0.0005787037;
                } else if (cur == 'gal') {
                    document.getElementById('piston_volume').value = document.getElementById('piston_volume').value * 0.00360465;
                }
            } else if (prev == 'ft3') {
                if (cur == 'gal') {
                    document.getElementById('piston_volume').value =
                        document.getElementById('piston_volume').value * 6.2288354590428;
                } else if (cur == 'in3') {
                    document.getElementById('piston_volume').value = document.getElementById('piston_volume').value * 1728;
                }
            } else if (prev == 'gal') {
                if (cur == 'in3') {
                    document.getElementById('piston_volume').value =
                        document.getElementById('piston_volume').value * 277.41943279;
                } else if (cur == 'ft3') {
                    document.getElementById('piston_volume').value = document.getElementById('piston_volume').value * 0.16054365;
                }
            }
        }
        if ($('#rod_volume').val() > 0) {
            if (prev == 'in3') {
                if (cur == 'ft3') {
                    document.getElementById('rod_volume').value = document.getElementById('rod_volume').value * 0.0005787037;
                } else if (cur == 'gal') {
                    document.getElementById('rod_volume').value = document.getElementById('rod_volume').value * 0.00360465;
                }
            } else if (prev == 'ft3') {
                if (cur == 'gal') {
                    document.getElementById('rod_volume').value = document.getElementById('rod_volume').value * 6.2288354590428;
                } else if (cur == 'in3') {
                    document.getElementById('rod_volume').value = document.getElementById('rod_volume').value * 1728;
                }
            } else if (prev == 'gal') {
                if (cur == 'in3') {
                    document.getElementById('rod_volume').value = document.getElementById('rod_volume').value * 277.41943279;
                } else if (cur == 'ft3') {
                    document.getElementById('rod_volume').value = document.getElementById('rod_volume').value * 0.16054365;
                }
            }
        }
    });
});

/**Piston/Bore & Rod side Force**/
$(document).ready(function() {
    var prev = null;
    var cur = $('#unit13').val();
    var flag = true;

    $('.unit_selection_new').click(function(event) {
        if (flagForNotChangingMeasurementFields == false) {
            return;
        }
        if (measurementUnitFlag.toLowerCase() == 'imperial') {
            cur = 'lbf';
        }
    });
    $('#unit13').change(function() {
        //Changes By Prakhar
        $('#clear').click(function() {
            $('#unit13').prop('selectedIndex', 0);
            $('#unit13').resetSS();
            prev = null;
            cur = $('#unit13').val();
        });
        //End Changes By Prakhar

        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }
        if ($('#piston_force').val() > 0) {
            if (prev == 'lbf') {
                if (cur == 'pdl') {
                    $('#piston_force').val($('#piston_force').val() * 32.1740407219);
                    if ($('#rod_force').val() > 0) {
                        $('#rod_force').val($('#rod_force').val() * 32.1740407219);
                    }
                }
            } else if (prev == 'pdl') {
                if (cur == 'lbf') {
                    $('#piston_force').val($('#piston_force').val() / 32.1740407219);
                    if ($('#rod_force').val() > 0) {
                        $('#rod_force').val($('#rod_force').val() / 32.1740407219);
                    }
                }
            }
        }
    });
});

/**Piston/Bore & Rod side Velocity**/
$(document).ready(function() {
    var prev = null;
    var cur = $('#unit15').val();
    var flag = true;

    $('.unit_selection_new').click(function(event) {
        if (flagForNotChangingMeasurementFields == false) {
            return;
        }
        if (measurementUnitFlag.toLowerCase() == 'imperial') {
            cur = 'in/s';
        }
    });
    $('#unit15').change(function() {
        //Changes By Prakhar
        $('#clear').click(function() {
            $('#unit15').prop('selectedIndex', 0);
            $('#unit15').resetSS();
            prev = null;
            cur = $('#unit15').val();
        });
        //End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }
        if ($('#piston_velocity').val() > 0) {
            if (prev == 'in/s') {
                if (cur == 'ft/s') {
                    $('#piston_velocity').val($('#piston_velocity').val() / 12);
                    if ($('#rod_velocity').val() > 0) {
                        $('#rod_velocity').val($('#rod_velocity').val() / 12);
                    }
                }
            } else if (prev == 'ft/s') {
                if (cur == 'in/s') {
                    $('#piston_velocity').val($('#piston_velocity').val() * 12);
                    if ($('#rod_velocity').val() > 0) {
                        $('#rod_velocity').val($('#rod_velocity').val() * 12);
                    }
                }
            }
        }
    });
});

/**Piston/Bore & Rod side Outflow**/
$(document).ready(function() {
    var prev = null;
    var cur = $('#unit16').val();
    var flag = true;

    $('.unit_selection_new').click(function(event) {
        if (flagForNotChangingMeasurementFields == false) {
            return;
        }
        if (measurementUnitFlag.toLowerCase() == 'imperial') {
            cur = 'gpm';
        }
    });
    $('#unit16').change(function() {
        //Changes By Prakhar
        $('#clear').click(function() {
            $('#unit16').prop('selectedIndex', 0);
            $('#unit16').resetSS();
            prev = null;
            cur = $('#unit16').val();
        });
        //End Changes By Prakhar
        if (flag) {
            prev = cur;
            cur = $(this).val();
            flag = false;
        } else {
            prev = cur;
            cur = $(this).val();
        }
        if ($('#piston_outflow').val() > 0) {
            if (prev == 'gpm') {
                if (cur == 'in3/min') {
                    $('#piston_outflow').val($('#piston_outflow').val() * 231.0009031549);
                    if ($('#rod_outflow').val() > 0) {
                        $('#rod_outflow').val($('#rod_outflow').val() * 231);
                    }
                }
            } else if (prev == 'in3/min') {
                if (cur == 'gpm') {
                    $('#piston_outflow').val($('#piston_outflow').val() / 231.000903154);
                    if ($('#rod_outflow').val() > 0) {
                        $('#rod_outflow').val($('#rod_outflow').val() / 231);
                    }
                }
            }
        }
    });
    //$(document).scrollTop(0);
    //$(window).scrollTop(0);
});