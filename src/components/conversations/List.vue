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

    <div class="container-fluid h-100 mb-30 mt-30">
      <div class="row justify-content-center h-100">
        <div class="col-md-8 col-xl-6 chat">
          <div class="card">
            <div class="card-header msg_head">
              <div class="d-flex bd-highlight">
                <div class="user_info" v-if="this.bookActivity.borrower_id == currentUserId">
                  <span>Chat with {{this.bookActivity.lender_name}}</span>
<!--                  <p>{{this.bookActivity.borrower_name}} accepted your requested to borrow <b>{{this.bookActivity.book_title}}</b></p>-->
                </div>
                <div class="user_info" v-if="this.bookActivity.lender_id == currentUserId">
                  <span>Chat with {{this.bookActivity.borrower_name}}</span>
<!--                  <p>{{this.bookActivity.borrower_name}} wants to borrow <b>{{this.bookActivity.book_title}}</b></p>-->
                </div>
              </div>
            </div>
            <div id="list" class="card-body msg_card_body">
              <div v-for="message in messages">
                <div class="d-flex justify-content-end mb-4"  v-if="message.sender_id == currentUserId">
                <div class="msg_cotainer_send text-center">
                  {{message.content}}
                  <span class="msg_time_send">{{formatDistance(new Date(), new Date(message.created_at))}} ago</span>
                </div>
              </div>
                <div class="d-flex justify-content-start mb-4" v-else>
                  <div class="msg_cotainer text-center">
                    <span class="msg_time">{{formatDistance(new Date(), new Date(message.created_at))}} ago</span>
                    {{message.content}}
                  </div>
                </div>
              </div>
            </div>
            <infinite-loading @infinite="infiniteHandler">
              <div slot="no-more"></div>
            </infinite-loading>
            <div class="card-footer">
              <form @submit.prevent="sendMessage">
                <div class="input-group">
                  <input type="text" name="" id="message_box" class="form-control type_msg" placeholder="Type your message..." v-model="message"></input>
                  <div class="input-group-append">
                    <button class="input-group-text send_btn" type="submit"><i class="fa fa-paper-plane-o"></i></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import InfiniteLoading from 'vue-infinite-loading';

  export default {
    components: {
      InfiniteLoading
    },
    data () {
      return {
        currentUserId: this.$store.state.user_id,
        pageNumber: 1,
        message: '',
        messages: [],
        bookActivity: {}
      }
    },
    created () {
      if(this.$store.state.signedIn){
        this.fetchData();
      } else {
        this.$router.push('/login')
      }
    },
    channels: {
      ConversationChannel: {
        received(data) {
          this.messages.push(data.object);
          this.scrollDown();
        },
      }
    },
    mounted() {
      this.$cable._connect('wss://api.zajelbook.com/cable?access-token='+this.$store.getters.data.accessToken+'&client='+this.$store.getters.data.client+'&uid='+this.$store.getters.data.uid)
      this.$cable.subscribe({
        channel: 'ConversationChannel',
        id: this.$route.params.id
      });
    },
    methods: {
      unsubscribe() {
        this.$cable.unsubscribe({
          channel: 'ConversationChannel',
          id: this.$route.params.id
        });
      },
      fetchData() {
        this.$http.get('conversations/' + this.$route.params.id + '/messages', {params: {page: this.pageNumber++, per_page: 30}})
          .then(response => {
            this.messages = this.messages.concat(response.data.messages)
            this.bookActivity = response.data.book_activity
          }, error => {
            console.log(error);
          }).then(data => {
          // this.scrollDown();
        })
      },
      sendMessage(){
        let message = this.message;
        if(!message.trim() == '') {
          this.$http.post('conversations/' + this.$route.params.id + '/messages', {
            content: this.message
          }).then(response => {
            document.getElementById('message_box').value = ''
              this.message = ''
            }, error => {
              console.log(error);
            })
        }
      },
      scrollDown(){
        $('#list').stop ().animate ({
          scrollTop: $('#list')[0].scrollHeight
        });
      },
      infiniteHandler($state) {
        this.$http.get('conversations/' + this.$route.params.id + '/messages', {params: {page: this.pageNumber, per_page: 30}})
        .then( response => {
          if (response.data.messages && response.data.messages.length) {
            this.messages = this.messages.concat(response.data.messages)
            this.pageNumber++
            $state.loaded();
          }
          else if (response.data.errors.length === 0){
            $state.complete();
          }}).then( next => {
          this.scrollDown();
        })
      }
    }
  }
</script>

<style>
  .card{
    height: 800px;
    border-radius: 15px !important;
    background-color: rgb(47, 65, 83) !important;
  }
  .msg_card_body{
    overflow-y: auto;
    background-image: url('~@/assets/img/image.png');
  }
  .card-header{
    border-radius: 15px 15px 0 0 !important;
    border-bottom: 0 !important;
  }
  .card-footer{
    border-radius: 0 0 15px 15px !important;
    border-top: 0 !important;
  }
  .container{
    align-content: center;
  }

  .type_msg{
    background-color: rgba(0,0,0,0.3) !important;
    border:0 !important;
    color:white !important;
    height: 60px !important;
    overflow-y: auto;
  }
  .type_msg:focus{
    box-shadow:none !important;
    outline:0px !important;
  }

  .send_btn{
    border-radius: 0 15px 15px 0 !important;
    background-color: rgba(0,0,0,0.3) !important;
    border:0 !important;
    color: white !important;
    cursor: pointer;
  }

  .contacts li{
    width: 100% !important;
    padding: 5px 10px;
    margin-bottom: 15px !important;
  }

  .img_cont_msg{
    height: 40px;
    width: 40px;
  }

  .user_info{
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 15px;
  }
  .user_info span{
    font-size: 20px;
    color: white;
  }
  .user_info p{
    font-size: 15px;
    color: rgba(255,255,255,0.6);
  }

  .video_cam span{
    color: white;
    font-size: 20px;
    cursor: pointer;
    margin-right: 20px;
  }
  .msg_cotainer{
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 10px;
    border-radius: 25px;
    background-color: #82ccdd;
    padding: 15px;
    min-width: 150px;
    position: relative;
  }
  .msg_cotainer_send{
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 25px;
    background-color: #78e08f;
    padding: 15px;
    min-width: 150px;
    position: relative;
  }
  .msg_time{
    position: absolute;
    left: 0px;
    bottom: -18px;
    color: #333333;
    font-size: 13px;
    float: left;
  }
  .msg_time_send{
    position: absolute;
    right: 0px;
    bottom: -18px;
    color: #333333;
    font-size: 13px;
    float: right;
  }
  .msg_head{
    position: relative;
  }
  .action_menu ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .action_menu ul li{
    width: 100%;
    padding: 10px 15px;
    margin-bottom: 5px;
  }
  .action_menu ul li i{
    padding-right: 10px;

  }
  .action_menu ul li:hover{
    cursor: pointer;
    background-color: rgba(0,0,0,0.2);
  }
  @media(max-width: 576px){
    .contacts_card{
      margin-bottom: 15px !important;
    }
  }
</style>