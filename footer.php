<hr class="hr-line">
			<div class="col-md-12 footers">
				<div class="col-md-12 footer-cont">
					<div class="footer-logo"><img src="images/tiger_2_1.svg" alt="" title="" /></div>
					<div class="footer-logo-text">Скелет бизнеса:<br />модель тигра</div>
				</div>
				<?php include("includes/menu_footer.php"); ?>
			</div>
		</div>
	</div>
	<!-- Modal -->
	<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
		<div class="modal-content">		  
		  <div class="modal-body">
				<img src="images/scheme-tiger.jpg" alt="" />
		  </div>		  
		</div>
	  </div>
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/bootstrap.bundle.min.js"></script>	
	<script src="js/jquery.marquee.min.js"></script>
	<script>
		$(function() {
		  $('.marquee').marquee({
			duration: 12000,
			startVisible: true,
			duplicated: true
		  });
		});
	</script>
	<script>
		$(function(){

			$('.some_link').on('click', function(e){
				$('html,body').stop().animate({ scrollTop: $('#instruction').offset().top }, 10000);
				e.preventDefault();
			});

			});
	</script>
	<script src="js/main.js"></script>
</body>
</html>