import router from '@/router';
import axios from 'axios';
// eslint-disable-next-line
export const meetingroom = {
  namespaced: true,
  state: {
    myRoomName: '',
    mySessionId: '', // roomId
    meetingRoomList: [],
    camera: true,
    mic: true,
    roomMasterId: '',
  },
  mutations: {
    SET_SESSION_ID: (state, mySessionId) => {
      state.mySessionId = String(mySessionId);
    },
    SET_MEETING_ROOM_LIST: (state, list) => {
      state.meetingRoomList = list;
    },
    SET_CAMERA: (state, s) => {
      state.camera = s;
      console.log(state.camera);
    },
    SET_MIC: (state, s) => {
      state.mic = s;
      console.log(state.mic);
    },
  },
  actions: {
    async makeSession({ commit, state }, requestDto) {
      await axios({
        url: 'https://i7c202.p.ssafy.io:8282/api/room',
        method: 'post',
        data: {
          memberId: requestDto.memberId,
          secret: requestDto.secret,
          password: requestDto.password,
          mode: requestDto.mode,
          roomName: requestDto.roomName,
          type: requestDto.type,
          link: '~~',
        },
        headers: {
          'X-AUTH-TOKEN': requestDto.accesstoken,
        },
      })
        .then((res) => {
          // console.log(res.data);
          this.roomMasterId = requestDto.memberId;
          const { roomId } = res.data.data;
          commit('SET_SESSION_ID', roomId);
          this.myRoomName = requestDto.roomName;
          console.log(`test = ${state.mySessionId}`);
          router.push('/room/competition');
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMeetingRoomList({ commit }, requestDto) {
      axios({
        url: `https://i7c202.p.ssafy.io:8282/api/${requestDto.mode}`,
        method: 'get',
        headers: {
          'X-AUTH-TOKEN': requestDto.accesstoken,
        },
      })
        .then((res) => {
          console.log(res.data);
          const list = res.data.data;
          commit('SET_MEETING_ROOM_LIST', list);
          router.push('/room/competition');
        })
        .catch((err) => {
          console.log(err);
        });
    },
    enterMeetingRoom({ commit }, requestDto) {
      axios({
        url: `https://i7c202.p.ssafy.io:8282/api/user/room/${requestDto.roomId}`,
        method: 'get',
        headers: {
          'X-AUTH-TOKEN': requestDto.accesstoken,
        },
      })
        .then((res) => {
          console.log('엔터미팅룸', res.data);
          commit('SET_SESSION_ID', requestDto.roomId);
        })
        .catch((err) => {
          console.log('엔터미팅룸 실패');
          console.log(err);
        });
    },
    leaveMeetingRoom({ commit }, requestDto) {
      axios({
        url: `https://i7c202.p.ssafy.io:8282/api/user/room/exit/${requestDto.roomId}`,
        method: 'put',
        headers: {
          'X-AUTH-TOKEN': requestDto.accesstoken,
        },
      })
        .then((res) => {
          console.log('방나가기성공');
          console.log(res.data);
          commit('SET_SESSION_ID', null);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
