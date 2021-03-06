import Vue from 'vue'
import store from '../store/index'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Book from '../components/books/List.vue';
import MyBook from '../components/books/MyList.vue';
import SignIn from '../components/users/SignIn.vue';
import UpdatePassword from '../components/users/UpdatePassword.vue';
import ResetPassword from '../components/users/ResetPassword.vue';
import ForgetPassword from '../components/users/ForgetPassword.vue';
import SignUp from '../components/users/SignUp.vue';
import UserConfirmation from '../components/users/UserConfirmation.vue'
import BookDetails from '../components/books/BookDetails.vue'
import NewBook from '../components/books/NewBook.vue'
import BorrowRequests from '../components/books/BorrowRequests.vue'
import LendRequests from '../components/books/LendRequests.vue'
import Conversations from '../components/conversations/List.vue'
import UpdateBook from "../components/books/UpdateBook";
import Notifications from "../components/notifications/List";


Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/confirm', component: UserConfirmation },
  { path: '/books', name: 'Books', component: Book },
  { path: '/my_books', component: MyBook, meta: {requiresAuth: true} },
  { path: '/login', name: 'SignIn', component: SignIn, meta: {requiresAuth: false} },
  { path: '/update_password', name: 'UpdatePassword', component: UpdatePassword},
  { path: '/reset_password', name: 'ResetPassword', component: ResetPassword, meta: {requiresAuth: false} },
  { path: '/forget_password', name: 'ForgetPassword', component: ForgetPassword, meta: {requiresAuth: false} },
  { path: '/signup', name: 'SignUp', component: SignUp, meta: {requiresAuth: false} },
  { path: '/books/new', component: NewBook, meta: {requiresAuth: true} },
  { path: '/books/:id', name: 'BookDetailsById', component: BookDetails },
  {
    path: '/books/by_name/:friendly_id',
    name: 'BookDetails',
    component: BookDetails,
    beforeEnter: (to, from, next) => {
      Vue.http.get('books/by_name/' + to.params.friendly_id, {
        params: {
          latitude: store.getters.data.latitude,
          longitude: store.getters.data.longitude
        }
      }).then((data) => {
        store.commit('setBook', data.body);
        next()
      }).catch((err) => {
        // show msg to user that something went wrong
        console.log(err);
        next('/')
      })
    },
  },
  {
    path: '/books/by_name/:friendly_id/edit',
    component: UpdateBook,
    beforeEnter: (to, from, next) => {
      // @todo
      next()
    },
  },
  { path: '/borrow_requests', name: 'BorrowRequests', component: BorrowRequests },
  { path: '/lend_requests', name: 'LendRequests', component: LendRequests },
  { path: '/notifications', component: Notifications },
  { path: '/conversations/:id/messages', component: Conversations },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/policy',
    name: 'Policy',
    component: () => import(/* webpackChunkName: "about" */ '../views/PrivacyPolicy.vue')
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import(/* webpackChunkName: "about" */ '../views/TermsAndConditions.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
