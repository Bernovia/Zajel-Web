<template>
  <div>
    <div class="about">
      <div class="bradcam_area bradcam_bg_2">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="bradcam_text text-center">
                <h3></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-30 mb-30">
      <div class="col-8 offset-2" v-if="this.$route.query.locale === 'en'">
        <h2>About us</h2>

        <p>Zajel is a free platform that helps readers around the globe building a community where everyone can borrow books and lend theirs instead of putting them on the shelf.</p>

        <p>We are now living in a world where physical books are not available and affordable to everyone, so Zajel will help you get access to thousands of books without paying a cent.</p>

        <p>Help us to grow by spreading the word and share Zajel with your friends.</p>

        <p>Enjoy and have a good read.</p>
      </div>

      <div class="col-8 offset-2 ar" v-else-if="this.$route.query.locale === 'ar'">
        <h2> عن زاجل </h2>

        <p> زاجل عبارة عن منصة مجانية تساعد القراء في جميع أنحاء العالم على بناء مجتمع حيث يمكن للجميع استعارة الكتب وإعارتها بدلاً من وضعها على الرف. </p>

        <p> نحن نعيش الآن في عالم لا تتوفر فيه الكتب المادية وبأسعار معقولة للجميع ، لذلك سيساعدك زاجل في الوصول إلى آلاف الكتب بشكل مجاني أو بمقابل مبلغ زهيد حسب توافق الطرفين. </p>

        <p> ساعدنا على النمو من خلال نشر ومشاركة زاجل مع أصدقائك. </p>

        <p> استمتعوا بكتبكم الجديدة :) </p>
      </div>
    </div>
  </div>
</template>
