$(document).ready(function(){
	const desktopBreakpoint = 902;
	let activePanelId = 1;
	let desktopMode = window.innerWidth >= desktopBreakpoint;
	let resizeTimer;

	const $desktopPanels = $('.corp-blk > [id^="collapse-"]');
	const $mobilePanels = $('.collapse-mbl');
	const $cardLinks = $('#accordionFlushExample .btn-corp-wht');

	function markActiveControl(id) {
		$cardLinks.each(function(){
			const active = Number($(this).data('id')) === Number(id);
			$(this).parent('li').toggleClass('active', active);
			if (active) {
				$(this).attr('aria-current', 'true');
			} else {
				$(this).removeAttr('aria-current');
			}
		});
	}

	function showDesktopPanel(id) {
		const $panel = $('#collapse-' + id);
		if (!$panel.length) return;

		$desktopPanels.hide().attr('aria-hidden', 'true');
		$panel
			.css('display', $panel.children().length > 1 ? 'grid' : 'block')
			.attr('aria-hidden', 'false');
		markActiveControl(id);
	}

	function showMobilePanel(id) {
		const $panel = $('#collapse-mbl-' + id);
		if (!$panel.length) return;

		$mobilePanels.hide().attr('aria-hidden', 'true');
		$panel.show().attr('aria-hidden', 'false');
		markActiveControl(id);
	}

	function renderActivePanel() {
		desktopMode = window.innerWidth >= desktopBreakpoint;
		$('.corp-blk').toggle(desktopMode);

		if (desktopMode) {
			$mobilePanels.hide().attr('aria-hidden', 'true');
			showDesktopPanel(activePanelId);
		} else {
			$desktopPanels.hide().attr('aria-hidden', 'true');
			showMobilePanel(activePanelId);
		}
	}

	$('#accordionFlushExample').on('click', '.btn-corp-wht', function(event){
		event.preventDefault();
		activePanelId = Number($(this).data('id'));
		renderActivePanel();
	});

	$('#accordionFlushExample').on('click', '.btn-corp-brw', function(){
		activePanelId = Number($(this).data('id'));
		renderActivePanel();
	});

	$(window).on('resize', function(){
		window.clearTimeout(resizeTimer);
		resizeTimer = window.setTimeout(renderActivePanel, 120);
	});

	renderActivePanel();
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
