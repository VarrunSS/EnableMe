var slideCount = 8;
var lastScrollTop = 0;
$(window).scroll(function(event){	
   var st = $(this).scrollTop();
   var scrollDirection;
   if (st > lastScrollTop){
	   // downscroll code
	   scrollDirection = "down";
	 $('.carouselFixedWrapper').removeClass('fixed');
	 $('.wizardHeader').addClass('fixed');
	 $('.categorizeFindings .buttonContainer').addClass('fixed');
	 $('.tableContainer .tblParamHead').removeClass('fixed');
	 $('.successMessageWrap').addClass('fixed');
   } else {
	   scrollDirection = "up";
	  $('.carouselFixedWrapper').addClass('fixed');
	  $('.wizardHeader').addClass('fixed');
	  $('.categorizeFindings .buttonContainer').addClass('fixed');
	  $('.tableContainer .tblParamHead').addClass('fixed');
	  $('.successMessageWrap').addClass('fixed');
   }
    var pos = $(window).scrollTop();
	if (pos == 0) {
		$('.carouselFixedWrapper').removeClass('fixed');
		$('.wizardHeader').removeClass('fixed');
		$('.tableContainer .tblParamHead').removeClass('fixed');
		$('.categorizeFindings .buttonContainer').removeClass('fixed');
		$('.successMessageWrap').removeClass('fixed');
	}
	//console.log($(window).scrollTop() + $(window).height())
	//console.log("doc height: " + $(document).height());
	var offset = 0;
	if($('.bottomControl').hasClass('float')){
		$('.bottomControl').removeClass('float');
		offset = 50;
	}
	if($(window).scrollTop() + $(window).height() == $(document).height() - offset) {
		//console.log("Bottom reached");
    	$('.bottomControl').addClass('float');
  	}	
   lastScrollTop = st;
    $("div.deal:in-viewport(170)").each(function() {
		var id = $(this).attr('id');
		var parentDiv = $('.AssessmentDetail')
		parentDiv.find('ul.doc-list li a, ul.doc-list li').removeClass('active');
		parentDiv.find('ul.doc-list li a.'+id).addClass('active');
		parentDiv.find('ul.doc-list li a.'+id+'.active').parent('li').addClass('active');
		var dataId = parseInt(parentDiv.find('ul.doc-list li a.'+id+'.active').parent('li').data('id'));		
		var slideUp= slideCount - 6;
		if((scrollDirection == "down") && (dataId >5)){
			//if($('ul.doc-list li[data-id='+dataId+'] a').hasClass('active')) 
			//slider.goToNextSlide();
		}
		else if((scrollDirection == "up") && (dataId <= slideUp)){
			//if($('ul.doc-list li[data-id='+dataId+'] a').hasClass('active')) 
			//slider.goToPrevSlide();	
		}			
	});
});	
/*$(document).on('click','ul.doc-list li a',function(){
	$('ul.doc-list li a, ul.doc-list li').removeClass('active');
	$(this).addClass('active');		
	$('ul.doc-list li a.active').parent('li').addClass('active');
	var href=$(this).data('src');
	href = '#deal'+href;
	$('html, body').animate({
        scrollTop: $(href).offset().top-170
    }, 1000);
})
*/$('#consolidationFindingsModal').on('shown.bs.modal', function () {
	var len = $('.findingSec').find('.mCSB_container li').length;
	var heightCal = (len * (parseInt($('.findingSec').find('.mCSB_container li').height())  + parseInt($('.findingSec').find('.mCSB_container li').css('margin-bottom')))) + parseInt($('.findingSec').find('.mCSB_container li').css('margin-top'));
	$('.findingSec').find('.mCustomScrollBox').height(heightCal)
});

$('body').on('click','.wizardHeader ul li button',function(){
	$(window).scrollTop(0);
}) 
$('body').tooltip({
    selector: '[rel=tooltip]'
});

$(document).on('click','.modifyBaseBtn',function(){
	$('#baselineProject a, .legendWrapper').trigger('click')	
})
/*** Information Popup - Start ***/
$(window).load(function() {
	$('#informationModal').modal('show');
	setTimeout(function(){
		$('#informationModal').modal('hide');
	},5000)
});
/*** Information Popup - End ***/ 
$(document).ready(function(){	
	
	 $(document).on('click', '.infopopIcon',function( e ) {
        Custombox.open({
            target:     '#informationModal',
            effect:     'flash'
        });
        e.preventDefault();
    });
	
	$(".closeBtnInnerModal").click(function(){
		//alert("hi");
		$('body').addClass("modalOpen");
	});
	$("#closeBtn").click(function(){
		//alert("hi1");
		$('body').removeClass("modalOpen");
	});
});
/*** Information Popup - End ***/