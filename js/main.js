$(document).ready(function(){
    const pageWidth = window.innerWidth;
	if(pageWidth < 900) {
		$('.corp-blk').hide();
		$('#collapse-mbl-0').show();

		$('#accordionFlushExample a').each(function(){
			$(this).click(function(){				
				$('.collapse-mbl').hide();
				$('#collapse-mbl-'+$(this).data("id")).css('display','block').show();
				return false;
			});
		});
		
	}else{ //default setup
		$('#collapse-0').show();
		$('#collapse-0').siblings('div').hide();
		$('#collapse-mbl-0').hide();
		$('#accordionFlushExample a').each(function(){
			$(this).click(function(){
				$(this).parent('li').addClass("active");
				$(this).parent('li').siblings('li').removeClass('active');
				$('#collapse-'+$(this).data("id")).css('display','flex').show();
				$('#collapse-'+$(this).data("id")).siblings('div').hide();
				return false;
			});
		});	
    }
});


/*Swiper*/

$(document).ready(function(){
    const pageWidth = window.innerWidth;
	if(pageWidth > 900) {
		const swiper = new Swiper('.sample-slider', {
			loop: true,
			autoplay: {
				delay: 0,
			},
			speed: 5000,
			slidesPerView: 3,
		})
	}
	if(pageWidth < 900 && pageWidth > 481) {
		const swiper = new Swiper('.sample-slider', {
			loop: true,
			autoplay: {
				delay: 0,
			},
			speed: 5000,
			slidesPerView: 2,
		})
	}
	if(pageWidth < 480) {
		const swiper = new Swiper('.sample-slider', {
			loop: true,
			autoplay: {
				delay: 0,
			},
			speed: 5000,
			slidesPerView: 1,
		})
	}
});
