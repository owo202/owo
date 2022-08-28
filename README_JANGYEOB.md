# 기술 스택
* [Vue3](https://v3.ko.vuejs.org/guide/migration/introduction.html)
* [Bootstrap-Vue](https://bootstrap-vue.org/)
* [HTML5](https://developer.mozilla.org/ko/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/ko/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/ko/docs/Web/JavaScript)
* [Vuex](http://ccambo.github.io/Dev/Vue/5.what-is-the-store-in-vuex/)
* [axios](https://axios-http.com/kr/docs/intro)
# 구현 기능
---
[로그인화면](![ezgif com-gif-maker](https://user-images.githubusercontent.com/61959111/187070395-477fe2cd-e800-44a4-bd45-6559b35c208a.gif)
1. 로그인
	* [세션유지 참고 페이지](https://kdinner.tistory.com/60)
	* [Vue.js JWT 기반 사용자인증 참고 페이지](https://www.bottlehs.com/vue/vue-js-jwt-%EA%B8%B0%EB%B0%98-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%9D%B8%EC%A6%9D/)
	* 사용자는 이메일과 비밀번호를 이용하여 로그인 할 수 있다.
    * 로그인 시 사용자 정보를 서버에 axios 요청을 하고, Vuex의 store와 세션스토리지에 저장한다.
    
    * 이메일 인증이 필요한 회원의 경우 alert으로 이메일 인증이 필요하다고 알려준다.
    * 비밀번호 혹은 이메일이 틀렸을 경우 alert으로 "이메일 혹은 비밀번호를 확인해 주세요"라고 알려준다.
    ---
2. 로그아웃
	* 로그아웃 시, 세션스토리지에 있는 모든 정보와 vuex의 store, accessToken, refreshToken을 모두 초기화한다.
    * 이후, 메인페이지로 이동한다.
    ---
3. 회원가입
	* 이메일과 비밀번호을 입력하고 회원가입 버튼을 누르면 서버에 해당 정보를 POST 요청으로 보내고, 서버는 이메일 인증이 필요하다는 이메일을 전송한다.
    * 사용자는 이메일 인증을 하면 오운완의 모든 서비스를 이용할 수 있다.
    * 중복된 이메일인 경우 중복된 이메일입니다 라는 메시지를 alert으로  사용자에게 알려준다.
    * 서버의 문제로 회원가입이 실패하면, 서버의 문제로 회원가입이 실패했습니다 라는 메시지를 alert으로 사용자에게 알려준다.
    ---
4. 메인페이지
	* 공개로 설정한 회원들의 최신 운동 완료 사진 10장을 axios로 서버에 요청을 하고, 이를 carousel을 통해 보여준다
    * 서버에 get 요청을 통해 랭킹 1 ~ 3위의 회원 정보를 가져와 보여준다.
    * 자신의 랭킹을 보여준다.
    * 자신의 운동 지속일, 해당 지속일을 7로 나눈 값을 퍼센트로 변환해 원형 progress bar로 보여준다
    ---
5. routerGuard를 이용한 잘못된 경로 접근, 권한이 필요한 페이지의 접근 제한
    * vue router로 특정 URL에 접근할 때 해당 URL의 접근을 막는 방법.
	 사용자가 잘못된 URL을 입력하여 이동 시, 잘못된 경로입니다 라는 메시지를 alert 을 통해 알려준다.
    * 권한이 없는 사용자가 권한이 필요한 페이지에 접근 시, 로그인이 필요합니다 라는 메시지를 alert을 통해 알려주고 로그인 페이지로 이동한다.
    * [router Guard에 대한 참고 페이지](https://joshua1988.github.io/web-development/vuejs/vue-router-navigation-guards/)
    * 구현 router Guard 코드(리팩토링 필요)
    ```javascript
      router.beforeEach((to, from, next) => {
        const token = sessionStorage.getItem('accessToken');
        const refresh = sessionStorage.getItem('refreshToken');
        if (token === null && refresh !== null) { // accessToken 만료, refreshToken은 존재하는 경우, 
          console.log('로그인 세션이 만료 되었습니다 다시 로그인 해주세요!');
        }
        if (to.matched.some((record) => record.meta.unauthorized || token)) { // 권한이 필요없는 페이지, 혹은 토큰이 있을 경우, 
          return next();
        }
        if (to.matched.some((record) => !record.meta.unauthorized || !token)) { // 권한이 필요없는 페이지, 혹은 토큰이 없을 경우, 
          swal.fire(
            '#오운완',
            '로그인이 필요한 서비스입니다.',
            'warning',
          );
          return next('/login');
        }
        swal.fire( // 그 외,
          '#오운완',
          '잘못된 접근입니다.',
          'warning',
        );
        return next('/');
  });
    ````
---

6. 새로고침 시 Vuex의 상태 초기화 해결
    * 새로고침하는 경우 지금까지 vuex의 store에 가지고 있거나, 계산된 모든 값들이 초기화 되는 현상이 발생.
    * LocalStorage를 이용하여 값들을 다시 살려주는 vuex-persistedState 사용
    * vuex의 state와 localStorage를 지속적으로 동기화 해주는 역할을 한다.
    * localStorage에 등록된 내용은 쿠키나 세션처럼 화면을 새로고침해도 없어지지 않기 때문에 새로 화면을 로딩하게 되면 localStorage에 있는 내용을 state에 다시 동기화 시켜준다.
    * 단점 : state의 변수를 너무 많이 사용하게 되면 프로그램의 퍼포먼스가 떨어진다.
    * 해결 : state 중 저장이 필요한 변수만 선택하여 저장하는 것이 좋다.
    * [PersistedState 참고페이지](https://ux.stories.pe.kr/207)
---
7.  추가 정보 업데이트를 요청하는 PopUp 구현
	* [Vue Cookies 관련 참고페이지](https://kyounghwan01.github.io/blog/Vue/vue/vue-cookies/)
    * [Vue LifeCycle 참고](https://v3.ko.vuejs.org/api/options-lifecycle-hooks.html#beforecreate)
	* Vue cookies 를 사용하여 사용자에게 추가 정보를 요구하는 팝업창을 구현.
    * 로그인 후, 해당 유저의 정보를 state에 저장하게 되는데 만약 추가정보에 해당하는 부분이 null, 혹은 빈 값이면 alert으로 추가정보를 입력을 요구함.
    * 만약 사용자가 '1주일간 보지 않기' 를 클릭하게 되면 1주일 유효기간을 가지는 쿠키를 저장.
	* Created()부분에 cookie가 있는지 확인하는 함수를 작성하여, 마운트가 되기 전에 cookie를 검사하였음
    * 구현 코드(리팩토링 필요)
    
    ```javascript
	created() {
    const check = this.$cookies.get('nosee');
    if (check !== null) { // 쿠키가 있는 경우
      if (this.userInfo.weight === null && this.isLogin === true && check !== 'Y') {
        this.$swal({
          title: '#오운완',
          input: 'checkbox',
          inputPlaceholder: '일주일 간 보지 않기',
          html:
            '추가 정보를 입력하시면, <br>더 많은 서비스를 이용하실 수 있습니다. <br> <a href="mypage/update"><strong>My Page</strong></a>로 이동하기. <hr>',
          icon: 'info',
          showCloseButton: true,
        }).then((res) => {
          if (res.value === 1) {
            this.setCookie();
          }
        });
      }
    }
    if (check === null) { // 쿠키가 없는 경우
      if (this.userInfo.weight !== null && this.isLogin === true) {
        this.$swal({
          title: '#오운완',
          input: 'checkbox',
          inputPlaceholder: '일주일 간 보지 않기',
          html:
            '추가 정보를 입력하시면, <br>더 많은 서비스를 이용하실 수 있습니다. <br> <a href="mypage/update"><strong>My Page</strong></a>로 이동하기. <hr>',
          icon: 'info',
          showCloseButton: true,
        }).then((res) => {
          if (res.value === 1) {
            this.setCookie();
          }
        });
      }
    }
      ```

    
