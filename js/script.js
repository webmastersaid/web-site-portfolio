$(function(){

    // cancel select language
    $('section').click(function(){
        $('._ru').removeClass('active_lang').fadeIn('slow');
        $('._en').removeClass('active_lang').fadeIn('slow');
    })

    // change language
    $('._en').click(function(){
        $('._ru').toggleClass('active_lang').fadeIn('slow');
    });
    $('._ru').click(function(){
        $('._en').toggleClass('active_lang').fadeIn('slow');
    })

	// show/hide menu burger (when to click menu button)
	$('.menu_burger').click(function(){
        $('.menu_burger, .header_menu').toggleClass('active_menu');
        // $('body').toggleClass('lock');
	});

    // show/hide menu burger (when to click a link)
    $('.header_link').click(function(){
        $('.menu_burger, .header_menu').toggleClass('active_menu');
        // $('body').toggleClass('lock');
    });

    // come back home
    $('.link_0').click(function(){
        $('html').animate({
            scrollTop: $('#home').offset().top
        }, 1000);
        return false;
    });

    // move to about
    $('.link_1').click(function(){
        $('html').animate({
            scrollTop: $('#aboutme').offset().top
        }, 1000);
        return false;
    });

    //move to the project
    $('.link_2').click(function(){
        $('html').animate({
            scrollTop: $('#myproject').offset().top
        }, 1000);
        return false;
    });

    //move to the contact information
    $('.link_3').click(function(){
        $('html').animate({
            scrollTop: $('#contacts').offset().top
        }, 1000);
        return false;
    });

    $('.link_4').click(function(){
        $('html').animate({
            scrollTop: $('#other').offset().top
        }, 1000);
        return false;
    });

    //move to the contact information
    $('.lets_link').click(function(){
        $('html').animate({
            scrollTop: $('#contacts').offset().top
        }, 1000);
        return false;
    });

    //scroll up
    $('.header_logo').click(function(){
        $('html').animate({
            scrollTop: $('.wrapper').offset().top
        }, 1000);
        return false;
    });

    // scroll button
	$('.up_link').removeClass('active');

    $(window).scroll(function(){ 

        var pos = $(this).scrollTop();
        var pos50 = pos + 50;

        if(pos > $('.outher_next_box').height()){
            //add
            $('.header').addClass('active_header').fadeIn('slow');
            $('.next_box').addClass('inactive_next_box').fadeIn('slow');
            $('.header_link').addClass('active_link').fadeIn('slow');
        }else{
            //remove
            $('.header').removeClass('active_header').fadeIn('slow');
            $('.next_box').removeClass('inactive_next_box').fadeIn('slow');
            $('.header_link').removeClass('active_link').fadeIn('slow');
        };

        if(pos50 > $('#home').offset().top){
            $('.link_0').addClass('active_link').fadeIn('slow');
            $('.link_1').removeClass('active_link').fadeIn('slow');
            $('.link_2').removeClass('active_link').fadeIn('slow');
            $('.link_3').removeClass('active_link').fadeIn('slow');
            $('.link_4').removeClass('active_link').fadeIn('slow');
        }
        if(pos50 > $('#aboutme').offset().top - $(window).height()/2){
            $('.about-1').addClass('slide-in-left');
            $('.about-2').addClass('slide-in-left');
            $('.link_1').addClass('active_link').fadeIn('slow');
            $('.link_0').removeClass('active_link').fadeIn('slow');
            $('.link_2').removeClass('active_link').fadeIn('slow');
            $('.link_3').removeClass('active_link').fadeIn('slow');
            $('.link_4').removeClass('active_link').fadeIn('slow');
            $('.about-3').addClass('slide-in-left');
        }
        if(pos50 > $('#myproject').offset().top - $(window).height()/2){
            $('.project-1').addClass('slide-in-left');
            $('.link_2').addClass('active_link').fadeIn('slow');
            $('.link_1').removeClass('active_link').fadeIn('slow');
            $('.link_0').removeClass('active_link').fadeIn('slow');
            $('.link_3').removeClass('active_link').fadeIn('slow');
            $('.link_4').removeClass('active_link').fadeIn('slow');           
        }
        if(pos50 > $('#other').offset().top - $(window).height()/2){
            $('.achievements-1').addClass('slide-in-left');
            $('.link_4').addClass('active_link').fadeIn('slow');
            $('.link_1').removeClass('active_link').fadeIn('slow');
            $('.link_0').removeClass('active_link').fadeIn('slow');
            $('.link_3').removeClass('active_link').fadeIn('slow');
            $('.link_2').removeClass('active_link').fadeIn('slow');
        }
        if(
            pos50 > $('#contacts').offset().top - $(window).height()/2 || 
            pos + $(window).height() === $(document).height()
        ){
            $('.contact-form').addClass('pop-in');
            $('.link_3').addClass('active_link').fadeIn('slow');
            $('.link_1').removeClass('active_link').fadeIn('slow');
            $('.link_2').removeClass('active_link').fadeIn('slow');
            $('.link_0').removeClass('active_link').fadeIn('slow');
            $('.link_4').removeClass('active_link').fadeIn('slow');                        
        } 

    });

    //portfolio image view visibility
    $('.project_0').hover(
        function(){
            $('.project_view_0').css("visibility", "visible");
        },
        function(){
            $('.project_view_0').css("visibility", "hidden");
        }
    );
    $('.project_1').hover(
        function(){
            $('.project_view_1').css("visibility", "visible");
        },
        function(){
            $('.project_view_1').css("visibility", "hidden");
        }
    );
    $('.project_2').hover(
        function(){
            $('.project_view_2').css("visibility", "visible");
        },
        function(){
            $('.project_view_2').css("visibility", "hidden");
        }
    );

    //other image view visibility
    $('.other_0').hover(
        function(){
            $('.other_view_0').css("visibility", "visible");
        },
        function(){
            $('.other_view_0').css("visibility", "hidden");
        }
    );
    $('.other_1').hover(
        function(){
            $('.other_view_1').css("visibility", "visible");
        },
        function(){
            $('.other_view_1').css("visibility", "hidden");
        }
    );
    $('.other_2').hover(
        function(){
            $('.other_view_2').css("visibility", "visible");
        },
        function(){
            $('.other_view_2').css("visibility", "hidden");
        }
    );
    $('.other_3').hover(
        function(){
            $('.other_view_3').css("visibility", "visible");
        },
        function(){
            $('.other_view_3').css("visibility", "hidden");
        }
    );
    $('.other_4').hover(
        function(){
            $('.other_view_4').css("visibility", "visible");
        },
        function(){
            $('.other_view_4').css("visibility", "hidden");
        }
    );
    $('.other_5').hover(
        function(){
            $('.other_view_5').css("visibility", "visible");
        },
        function(){
            $('.other_view_5').css("visibility", "hidden");
        }
    );
    $('.other_6').hover(
        function(){
            $('.other_view_6').css("visibility", "visible");
        },
        function(){
            $('.other_view_6').css("visibility", "hidden");
        }
    );
    $('.other_7').hover(
        function(){
            $('.other_view_7').css("visibility", "visible");
        },
        function(){
            $('.other_view_7').css("visibility", "hidden");
        }
    );
    $('.other_8').hover(
        function(){
            $('.other_view_8').css("visibility", "visible");
        },
        function(){
            $('.other_view_8').css("visibility", "hidden");
        }
    );
    $('.other_9').hover(
        function(){
            $('.other_view_9').css("visibility", "visible");
        },
        function(){
            $('.other_view_9').css("visibility", "hidden");
        }
    );
    $('.other_10').hover(
        function(){
            $('.other_view_10').css("visibility", "visible");
        },
        function(){
            $('.other_view_10').css("visibility", "hidden");
        }
    );
    $('.other_11').hover(
        function(){
            $('.other_view_11').css("visibility", "visible");
        },
        function(){
            $('.other_view_11').css("visibility", "hidden");
        }
    );
    $('.other_12').hover(
        function(){
            $('.other_view_12').css("visibility", "visible");
        },
        function(){
            $('.other_view_12').css("visibility", "hidden");
        }
    );
    $('.other_13').hover(
        function(){
            $('.other_view_13').css("visibility", "visible");
        },
        function(){
            $('.other_view_13').css("visibility", "hidden");
        }
    );
    $('.other_14').hover(
        function(){
            $('.other_view_14').css("visibility", "visible");
        },
        function(){
            $('.other_view_14').css("visibility", "hidden");
        }
    );
    $('.other_15').hover(
        function(){
            $('.other_view_15').css("visibility", "visible");
        },
        function(){
            $('.other_view_15').css("visibility", "hidden");
        }
    );

    // contact form
    var form = document.getElementById("contact-form");
    
    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("form-status");
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            $('#success').removeClass('hidden');
            $('#success').addClass('visible');
            form.reset();
        }).catch(error => {
            $('#form-status').removeClass('hidden');
            $('#form-status').addClass('visible');
        });
    }
    form.addEventListener("submit", handleSubmit)
    
    $('#close-scs').click(function() {
        $('#success').removeClass('visible');
        $('#success').addClass('hidden');
    });
    $('#close-err').click(function() {
        $('#form-status').removeClass('visible');
        $('#form-status').addClass('hidden');
    });

    // scroll up
    $('.up_link').click(function(){
        $('html').animate({
            scrollTop: $('body').offset().top
        }, 1000);
        return false;
    });

    // move to the next section
    $('.next_box').click(function(){
        $('html').animate({
            scrollTop: $('#aboutme').offset().top
        }, 1000);
        return false;
    });

});