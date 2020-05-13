$(document).ready(function(){
    $('#oneoneslide').slideUp(0);
    $('#oneoneslide').toggleClass('openi');
    $('#onetwoslide').slideUp(0);
    $('#onetwoslide').toggleClass('openi');
    $('#onethreeslide').slideUp(0);
    $('#onethreeslide').toggleClass('openi');
    $('#onefourslide').slideUp(0);
    $('#onefourslide').toggleClass('openi');
    $('#moltext').slideUp(0);
    $('#naptext').slideUp(0);
    $('#jultext').slideUp(0);
    $('#victext').slideUp(0);
    $('#molimg').slideUp(0);
    $('#napimg').slideUp(0);
    $('#julimg').slideUp(0);
    $('#vicimg').slideUp(0);

    $('#ark').click(function(){
        $('#ark').addClass('activeee');
        $('#mol').removeClass('activeee');
        $('#jul').removeClass('activeee');
        $('#nap').removeClass('activeee');
        $('#vic').removeClass('activeee');
        $('#jultext').slideUp(0);
        $('#victext').slideUp(0);
        $('#moltext').slideUp(0);
        $('#naptext').slideUp(0);
        $('#julimg').slideUp(0);
        $('#vicimg').slideUp(0);
        $('#molimg').slideUp(0);
        $('#napimg').slideUp(0);
        $('#arkimg').slideDown(500);
        $('#arktext').slideDown(500);
    });
    $('#mol').click(function(){
        $('#mol').addClass('activeee');
        $('#ark').removeClass('activeee');
        $('#jul').removeClass('activeee');
        $('#nap').removeClass('activeee');
        $('#vic').removeClass('activeee');
        $('#jultext').slideUp(0);
        $('#arktext').slideUp(0);
        $('#naptext').slideUp(0);
        $('#victext').slideUp(0);
        $('#julimg').slideUp(0);
        $('#arkimg').slideUp(0);
        $('#napimg').slideUp(0);
        $('#vicimg').slideUp(0);
        $('#molimg').slideDown(500);
        $('#moltext').slideDown(500);
    });
    $('#jul').click(function(){
        $('#jul').addClass('activeee');
        $('#mol').removeClass('activeee');
        $('#ark').removeClass('activeee');
        $('#nap').removeClass('activeee');
        $('#vic').removeClass('activeee');
        $('#arktext').slideUp(0);
        $('#moltext').slideUp(0);
        $('#naptext').slideUp(0);
        $('#victext').slideUp(0);
        $('#arkimg').slideUp(0);
        $('#molimg').slideUp(0);
        $('#napimg').slideUp(0);
        $('#vicimg').slideUp(0);
        $('#julimg').slideDown(500);
        $('#jultext').slideDown(500);
    });
    $('#nap').click(function(){
        $('#nap').addClass('activeee');
        $('#mol').removeClass('activeee');
        $('#jul').removeClass('activeee');
        $('#ark').removeClass('activeee');
        $('#vic').removeClass('activeee');
        $('#arktext').slideUp(0);
        $('#moltext').slideUp(0);
        $('#victext').slideUp(0);
        $('#jultext').slideUp(0);
        $('#arkimg').slideUp(0);
        $('#molimg').slideUp(0);
        $('#vicimg').slideUp(0);
        $('#julimg').slideUp(0);
        $('#napimg').slideDown(500);
        $('#naptext').slideDown(500);
    });
    $('#vic').click(function(){
        $('#vic').addClass('activeee');
        $('#mol').removeClass('activeee');
        $('#jul').removeClass('activeee');
        $('#ark').removeClass('activeee');
        $('#nap').removeClass('activeee');
        $('#arktext').slideUp(0);
        $('#moltext').slideUp(0);
        $('#naptext').slideUp(0);
        $('#jultext').slideUp(0);
        $('#arkimg').slideUp(0);
        $('#molimg').slideUp(0);
        $('#napimg').slideUp(0);
        $('#julimg').slideUp(0);
        $('#vicimg').slideDown(500);
        $('#victext').slideDown(500);
    });
    
    $('li').hover(function(){
        $(this).toggleClass('lichanged');
    });

    $('#oneonehover').hover(function(){
            
        $('#oneoneslide').toggleClass('openi');
        $('#oneonehover').toggleClass('occ');
        if($('#oneoneslide').hasClass('openi')) {
            $('#oneoneslide').slideUp(500);
        } else {
            $('#oneoneslide').slideDown(500);
        }
    });

    $('#onetwohover').hover(function(){
            
        $('#onetwoslide').toggleClass('openi');
        $('#onetwohover').toggleClass('occ');
        if($('#onetwoslide').hasClass('openi')) {
            $('#onetwoslide').slideUp(500);
        } else {
            $('#onetwoslide').slideDown(500);
        }  
    });

    $('#onethreehover').hover(function(){
            
        $('#onethreeslide').toggleClass('openi');
        $('#onethreehover').toggleClass('occ');
        if($('#onethreeslide').hasClass('openi')) {
            $('#onethreeslide').slideUp(500);
        } else {
            $('#onethreeslide').slideDown(500);
        }
    });

    $('#onefourhover').hover(function(){
            
        $('#onefourslide').toggleClass('openi');
        $('#onefourhover').toggleClass('occ');
        if($('#onefourslide').hasClass('openi')) {
            $('#onefourslide').slideUp(500);
        } else {
            $('#onefourslide').slideDown(500);
        }
    });

    $('#one').hover(function(){
        $(this).toggleClass('changable');
        });
        

        $('#one').click(function(){
            
            $('#oni').toggleClass('open');

            if($('#oni').hasClass('open')) {
                $('#oni').slideUp(1000);
            } else {
                $('#oni').slideDown(1000);
            }
          
        });

        $('#two').hover(function(){
            $(this).toggleClass('changable');
            });
            
            
            $('#two').click(function(){
                
                $('#twi').toggleClass('open');
    
                if($('#twi').hasClass('open')) {
                    $('#twi').hide(1000);
                } else {
                    $('#twi').show(1000);
                }
              
            });

    });