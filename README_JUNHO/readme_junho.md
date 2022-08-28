# 운동 방

#### 1. 방 입장하기 화면

![bandicam 2022-08-28 21-01-53-815.jpg](C:\Users\nak36\Desktop\반디캠\bandicam%202022-08-28%2021-01-53-815.jpg)

* 운동 방 종류 선택할 시 색상 및 커서 변화

#### 2. 방 만들기

* 방 만들기 탭
  
  https://user-images.githubusercontent.com/97590478/187077396-f06b1eb9-1dcb-4a3f-8d30-7999dbe265d2.jpg

* ###### 영상방 만들기
  
  https://user-images.githubusercontent.com/97590478/187077399-1ee5ce9f-09da-4fba-b703-95e9a81e5711.jpg
  
  * 방 이름
  
  * 모드(영상, 경쟁, 자유)
  
  * 운동 종류(유산소, 헬스, 스트레칭, 홈트레이닝, 맨몸운동, 요가, 필라테스, 기타)
  
  * Youtube URL
  
  * 비밀방 생성 가능(체크 시 비밀번호 input 영역 생성)

* ###### 자유방 만들기
  
  https://user-images.githubusercontent.com/97590478/187077403-b18212fe-c7ff-49a1-a68d-8ae1572b76a7.jpg
  
  * 방 이름, 모드, 운동 종류 설정 가능
  
  * 비밀 방 생성 체크 후 비밀번호 설정 가능

* ###### 경쟁방 만들기
  
  https://user-images.githubusercontent.com/97590478/187077405-bb3bed09-977c-4083-bafa-44b4d4fa738c.jpg
  
  * 경쟁방의 경우, 운동 종류는 게임 뿐이며 비밀 방 설정 불가능
  
  * 방 만드는 사람의 티어(브론즈~다이아)로 방이 생성됨

## 3. 영상모드(영상보며 운동하기)

- 영상 방 입장하기
  
  ![junho-room-5.jpg](C:\Users\nak36\SSAFY_7th_LEEJUNHO\3.%202학기\01.%20공통프로젝트\오운완\owo\asset\사진\junho-room-5.jpg)
  
  * Youtube URL의 썸네일이 표시됨
  
  * 운동 종류, 비밀 방 여부, 운동 인원 수, 방 이름이 표시됨
* 영상 방 화면 배치
  
  ![junho-room-6.jpg](C:\Users\nak36\SSAFY_7th_LEEJUNHO\3.%202학기\01.%20공통프로젝트\오운완\owo\asset\사진\junho-room-6.jpg)
  
  * Youtube 영상 영역과 사용자 WebRTC 영역으로 나뉨

* Web RTC 화면 비디오, 음소거 조절 가능

* 사진
  
  ![사진촬영.gif](C:\Users\nak36\SSAFY_7th_LEEJUNHO\3.%202학기\01.%20공통프로젝트\오운완\owo\asset\사진촬영.gif)
  
  * 운동 일지에 기록될 사진 촬영 가능
  
  * 기본적으로 10초에 한번 임시 촬영됨(운동 기록 저장용)
  
  * 사운드 효과(카운트다운, 사진 촬영)

* 타이머
  
  ![bandicam 2022-08-28 21-24-09-865.jpg](C:\Users\nak36\Desktop\반디캠\bandicam%202022-08-28%2021-24-09-865.jpg)
  
  * 사진 촬영 타이머 설정 가능(3초, 5초, 10초)

* 볼륨UP/DOWN
  
  ![음량 조절.gif](C:\Users\nak36\SSAFY_7th_LEEJUNHO\3.%202학기\01.%20공통프로젝트\오운완\owo\asset\음량%20조절.gif)
  
  * (default 0) 0~100의 5 단위로 볼륨 조절이 가능하며, 영역 초과 시 알람

* 이모티콘
  
  ![이모티콘.gif](C:\Users\nak36\SSAFY_7th_LEEJUNHO\3.%202학기\01.%20공통프로젝트\오운완\owo\asset\이모티콘.gif)

* 채팅
  
  ![채팅.gif](C:\Users\nak36\SSAFY_7th_LEEJUNHO\3.%202학기\01.%20공통프로젝트\오운완\owo\asset\채팅.gif)

* 스크롤으로 다른 참여자 확인 가능
  
  ![사람확인.gif](C:\Users\nak36\SSAFY_7th_LEEJUNHO\3.%202학기\01.%20공통프로젝트\오운완\owo\asset\사람확인.gif)
  
  * 운동 시작 시 모래시계가 돌아가는 대기석은 사라짐(스크롤도 조정됨)
- 운동 시작
  
  ![운동시작.gif](C:\Users\nak36\SSAFY_7th_LEEJUNHO\3.%202학기\01.%20공통프로젝트\오운완\owo\asset\운동시작.gif)
  
  * 2인 이상 모집된 방의 방장(방 만들기)에게 start 버튼이 생성된다.
  
  * 3초 카운트 및 음영 이후 사라짐
  
  * 영상이 다 같이 시작된다.
  
  * 운동 시작 시 참여자가 아닌 모래시계가 돌아가는 대기석은 사라짐
  
  * 사운드 효과(3, 2, 1, GO)
* 퇴장 및 운동기록 작성 폼
  
  ![퇴장, 운동기록.gif](C:\Users\nak36\SSAFY_7th_LEEJUNHO\3.%202학기\01.%20공통프로젝트\오운완\owo\asset\퇴장,%20운동기록.gif)
  
  * 15초 미만 운동시 운동 기록 저장 폼이 나타나지 않음
  
  * 운동 일지에 저장될 사진 선택
  
  * 태그 선택(나만의 태그 추가 및 선택 가능)
  
  ![메모 길이.gif](C:\Users\nak36\SSAFY_7th_LEEJUNHO\3.%202학기\01.%20공통프로젝트\오운완\owo\asset\메모%20길이.gif)
  
  * 200byte까지 메모 작성 가능(text 길이 감지 후 초록색 -> 빨간색 변화)
  
  ![운동 일지 저장 폼.gif](C:\Users\nak36\SSAFY_7th_LEEJUNHO\3.%202학기\01.%20공통프로젝트\오운완\owo\asset\운동%20일지%20저장%20폼.gif)
  
  * modal 바깥의 클릭, esc가 작동하지 않도록 설정

* 전체 흐름 정리
  
  ![영상방 전체.gif](C:\Users\nak36\SSAFY_7th_LEEJUNHO\3.%202학기\01.%20공통프로젝트\오운완\owo\asset\영상방%20전체.gif)

## 4. 자유 모드(자유롭게 운동하기)

* 자유방 입장하기
  
  ![junho-room-8.jpg](C:\Users\nak36\SSAFY_7th_LEEJUNHO\3.%202학기\01.%20공통프로젝트\오운완\owo\asset\사진\junho-room-8.jpg)
  
  * 운동 종류에 따른 일러스트 표현
  
  * 비밀방의 경우 비밀번호 입력창 나타남

* (영상 방 중복 기능 외)자유방 화면 배치
  
  ![junho-room-9.jpg](C:\Users\nak36\SSAFY_7th_LEEJUNHO\3.%202학기\01.%20공통프로젝트\오운완\owo\asset\사진\junho-room-9.jpg)
  
  - 영상이 없으므로 사용자 Web RTC의 6인 배치
- 운동 시작 시 사람 수에 맞춘 화면 배치
  
  ![junho-room-11-자유운동2인.gif](C:\Users\nak36\SSAFY_7th_LEEJUNHO\3.%202학기\01.%20공통프로젝트\오운완\owo\asset\짤\junho-room-11-자유운동2인.gif)
  
  ![junho-room-12-자유운동4인.gif](C:\Users\nak36\SSAFY_7th_LEEJUNHO\3.%202학기\01.%20공통프로젝트\오운완\owo\asset\짤\junho-room-12-자유운동4인.gif)

## 5. 경쟁 모드(경쟁하며 운동하기)
