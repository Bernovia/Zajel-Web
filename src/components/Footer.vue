<template>
  <footer class="footer text-center">
    <div class="footer_top">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-md-6 col-lg-4">
            <div class="footer_widget">
              <p>
                Again! it's <a target="_blank" rel="noreferrer" href="https://mhdrahmoun.me"><b style="color: rgb(248, 25, 67);" >mhdrahmoun</b> </a> &
                <a target="_blank" rel="noreferrer" href="https://mohammedmokresh.github.io/"><b style="color: rgb(248, 25, 67);" >Mohammed Mokresh</b> </a>
                <p>contact us: <b style="color: rgb(248, 25, 67);">zajelbooks@gmail.com</b></p>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-lg-3">
            <div class="footer_widget">
              <h3 class="footer_title">
                Useful Links
              </h3>
              <ul>
                <li><router-link to="/about?locale=en">About</router-link></li>
                <li><router-link to="/policy?locale=en">Privacy Policy</router-link></li>
                <li><router-link to="/terms?locale=en">Terms of Service</router-link></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-lg-4">
            <div class="footer_widget">
              <h3 class="footer_title">
                Find us on play store
              </h3>
              <a href="https://play.google.com/store/apps/details?id=com.bernovia.zajel&hl=en">
                <img src="img/google-play-badge.svg" width="50%" alt="google_play_badge">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copy-right_text">
      <div class="container">
        <div class="footer_border"></div>
        <div class="row">
          <div class="col-xl-12">
            <p class="copy_right text-center">
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              Copyright &copy; {{new Date().getFullYear()}} All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noreferrer">Colorlib</a>
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

</script>

<style>

</style>
