import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    signedIn: localStorage.signedIn == 'true',
    user_id: localStorage.user_id,
    accessToken: localStorage.accessToken,
    client: localStorage.client,
    uid: localStorage.uid,
    expiry: localStorage.expiry,
    bearer: localStorage.bearer,
    latitude: localStorage.latitude,
    longitude: localStorage.longitude,
    notificationsCount: 0,
    book: {}
  },
  getters: {
    data: state => {
      return {
        accessToken: state.accessToken,
        uid: state.uid,
        client: state.client,
        signedIn: state.signedIn,
        user_id: state.user_id,
        latitude: state.latitude,
        longitude: state.longitude,
        notificationsCount: state.notificationsCount,
        book: state.book
      }
    }
  },
  mutations: {
    signIn (state, {user_id, accessToken, client, uid, expiry, bearer}) {
      localStorage.signedIn = true;
      localStorage.user_id = user_id;
      state.signedIn = true;
      state.user_id = user_id;
      state.accessToken = accessToken;
      state.client = client;
      state.uid = uid;
      state.expiry = expiry;
      state.bearer = bearer;

    },
    signOut (state) {
      localStorage.accessToken = null;

      localStorage.client = null;

      localStorage.uid = null;

      localStorage.expiry = null;

      localStorage.bearer = null;

      localStorage.signedIn = false;

      localStorage.user_id = null;

      state.signedIn = false;

      state.user_id = null;
      state.accessToken = null;
      state.client = null;
      state.uid = null;
      state.expiry = null;
      state.bearer = null;
    },
    setLocation (state, {latitude, longitude}) {
      localStorage.latitude = latitude
      localStorage.longitude = longitude
      state.latitude = latitude
      state.longitude = longitude
    },
    incrementNotificationsCount(state, {notificationsCount}) {
      state.notificationsCount = notificationsCount
    },
    resetNotificationsCount(state) {
      state.notificationsCount = 0
    },
    setBook(state, data) {
      state.book = data
    }
  }
})
