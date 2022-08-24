import axios from 'axios';
// eslint-disable-next-line
export const mainpage = {
  namespaced: true,
  state: () => ({
    userImg: '',
    rankingList: null,
    myranking: '',
    achievement: null,
    lastingDay: null,
  }),
  mutations: {
    SET_RANKING_LIST: (state, payload) => {
      state.rankingList = payload;
    },
    SET_MY_RANKING: (state, payload) => {
      state.myranking = payload;
    },
    SET_USER_IMG: (state, payload) => {
      state.userImg = payload;
    },
    SET_ACHIEVEMENT: (state, payload) => {
      state.achievement = payload;
    },
    SET_LASTING_DAY: (state, payload) => {
      state.lastingDay = payload;
    },
  },
  actions: {
    getRankingList({ commit }) {
      axios({
        url: 'https://i7c202.p.ssafy.io:8282/api/rankingList',
        method: 'get',
      })
        .then((res) => {
          console.log('랭킹리스트');
          console.log(res);
          // eslint-disable-next-line
          let data = res.data.data;
          if (res.data.data[0].score === 0) {
            for (let i = 0; i < data.length; i += 1) {
              data[i].name = '-';
              data[i].score = '-';
            }
            commit('SET_RANKING_LIST', data);
          } else {
            commit('SET_RANKING_LIST', data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMyRanking({ commit, state }) {
      let userInfo = sessionStorage.getItem('vuex');
      userInfo = JSON.parse(userInfo);
      // eslint-disable-next-line
      const userId = userInfo['accounts']['userInfo']['id'];
      // eslint-disable-next-line
      const accessToken = userInfo['accounts']['accessToken'];
      axios({
        url: `https://i7c202.p.ssafy.io:8282/api/user/ranking/${userId}`,
        method: 'get',
        headers: {
          'X-AUTH-TOKEN': accessToken,
        },
      })
        .then((res) => {
          console.log('getmyranking', res);
          console.log(state.rankingList);
          commit('SET_MY_RANKING', res.data.data.ranking);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    rankingList: (state) => state.rankingList,
    myranking: (state) => state.myranking,
  },
};
