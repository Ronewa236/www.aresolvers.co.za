jQuery(document).ready(function(){

    "use strict",
    $('#slider-carousel').caroufredsel({
        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            items:1,
            duration:500,
            pauseOnHover:true
        },
        auto:true,
        items:
        {
            visible:{
                min:1,
                max:1,
            },
            height:"variable"
        },
            pagination:{
                container:".sliderpager",
                pageAnchorBuilder:false
            }
        });
        $(window).scroll(function(){
            var top=$(window).scrollTop();
            if(top>=60){
                $("header").addClass('secondary');
            }
            else if($("header").hasClass('secondary')){
                $("header").removeClass('secondary');
            }
        });
    });
    <div class="col-sm-9">
    <div class="contact-block">
        <h3>Drop a messaage</h3>
        <form class="contact_form">
            <div class="row">
                <div class="col-sm-6">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your  first name" required="required">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="contact@email.com" required="required">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="your phone number" required="required">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" required="required"></textarea>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btnvdefault-btn btn-block">
                    </div>
                </div>
            </div>
        </form>
    </div>