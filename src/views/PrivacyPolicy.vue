<template>
    <div>
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
        <div class="row mt-30 mb-30">
            <div class="col-8 offset-2" v-if="this.$route.query.locale === 'en'">
                <h2>Privacy Policy</h2>
                <p>Your privacy is important to us. It is Zajel's policy to respect your privacy regarding any information we may collect from you across our website, <b><u><a href="http://www.zajelbook.com">http://www.zajelbook.com</a></u></b>, and other sites we own and operate.</p>
                <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
                <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
                <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
                <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
                <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
                <p><b><u>This policy is effective as of 1 April 2020.</u></b></p>
            </div>

            <div class="col-8 offset-2 ar" v-else-if="this.$route.query.locale === 'ar'">
                <p> خصوصيتك مهمة بالنسبة لنا. تتمثل سياسة زاجل في احترام خصوصيتك فيما يتعلق بأي معلومات قد نجمعها منك عبر موقعنا. </p>
                <p> لا نطلب المعلومات الشخصية إلا عندما نحتاجها حقًا لتقديم خدمة لك. نجمعها بوسائل عادلة وقانونية بمعرفتك وموافقتك. </p>
                <p> نحتفظ فقط بالمعلومات التي تم جمعها طالما كان ذلك ضروريًا لتزويدك بالخدمة المطلوبة. ما هي البيانات التي نخزنها ، سنحميها ضمن الوسائل المقبولة تجاريًا لمنع الفقد والسرقة ، فضلاً عن الوصول غير المصرح به أو الكشف أو النسخ أو الاستخدام أو التعديل. </p>
                <p> نحن لا نشارك أي معلومات تعريف شخصية علنًا أو مع جهات خارجية ، إلا عندما يقتضي القانون ذلك. </p>
                <p> لك مطلق الحرية في رفض طلبنا للحصول على معلوماتك الشخصية ، على أساس أننا قد لا نتمكن من تزويدك ببعض الخدمات التي تريدها. </p>
                <p> سيعتبر استمرار استخدامك لموقعنا على الويب بمثابة قبول لممارساتنا المتعلقة بالخصوصية والمعلومات الشخصية. إذا كانت لديك أي أسئلة حول كيفية تعاملنا مع بيانات المستخدم والمعلومات الشخصية ، فلا تتردد في الاتصال بنا. </p>
                <p><b> <u> تسري هذه السياسة اعتبارًا من 1 أبريل 2020. </u> </b> </p>
            </div>
        </div>
    </div>
</template>