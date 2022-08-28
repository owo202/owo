

# 마이페이지

![마이페이지 메인 사진.png](C:\Users\baekh\Desktop\ssafy\owo\github\owo\README_Hanna\owo%20gif\마이페이지%20메인%20사진.png)

사이드바 - 프로필이미지 CRUD, 닉네임, 연속운동일, 이번주총운동시간, 사이드바메뉴선택, 이번주운동목표 CRD

- Records - 운동 기록 분석 정보 (레벨, 티어, 운동종류 비율, 목표 달성률)

- Calendar - 운동 기록 일지별 사진, 운동종류, 태그, 메모 등

### **1. 기본 기능**

- **슬로건** : 운동 목표, 슬로건, 다짐 등을 입력하여 마이페이지 메인에서 저장, 확인, 변경할 수 있다.
  
  <img src="file:///C:/Users/baekh/Desktop/ssafy/owo/github/owo/README_Hanna/owo%20gif/update%20slogan.gif" title="" alt="update slogan.gif" width="390">
  
  

- **프로필 이미지** : 자신의 프로필 이미지를 등록할 수 있고, 메인 Nav에서 확인 가능하다. 20mb까지만 수용한다.
  
  <img src="file:///C:/Users/baekh/Desktop/ssafy/owo/github/owo/README_Hanna/owo%20gif/update%20profile%20image.gif" title="" alt="update profile image.gif" width="510">

### 2. **운동 기록 관련 API**

- **사용자 운동 기록**
  
  현재까지의 연속 운동일, 이번주 총 운동 시간(분)을 확인할 수 있다.

- **나의 운동 레벨**
  
  경쟁모드를 통해 얻은 포인트를 통해 운동 레벨, 티어가 결정된다.
  
  ![](C:\Users\baekh\AppData\Roaming\marktext\images\2022-08-28-16-51-15-image.png)
  
  - 티어 
    
    전체 사용자 중 20%씩 브론즈, 실버, 골드, 플레티넘, 다이아로 구성된다.
    
    <img src="file:///C:/Users/baekh/AppData/Roaming/marktext/images/2022-08-28-16-47-11-image.png" title="" alt="" width="329">
  
  - 레벨
    
    경쟁모드에서 쌓은 포인트가 축적되어 경험치로 쌓인다. 레벨 0부터 1씩 증가하며,  레벨 경험치 최대치가 기본값 100p에서 레벨 증가에 따라 5p씩 증가한다. 경험치가 차오름에 따라 그래프에 표시된다.

- **나의 운동 비율**
  
  ![](C:\Users\baekh\AppData\Roaming\marktext\images\2022-08-28-16-57-33-image.png)
  
  회원 총 운동 기록에서 운동 종류별 비율을 그래프로, 가장 많이 한 운동 종류를 확인할 수 있다.

- **운동 목표 달성량**
  
  이번주 운동 목표를 운동 종류별로 총 3개 등록할 수 있다.
  
  운동 목표 CRD & 목표 시간 대비 이번주 달성량 확인 (매주 일요일 자정 갱신)
  
  <img src="file:///C:/Users/baekh/Desktop/ssafy/owo/github/owo/README_Hanna/owo%20gif/운동%20목표.gif" title="" alt="운동 목표.gif" width="466">

### 3. 캘린더

'자유모드', '영상모드'에서 저장한 운동기록을 일자별로 확인할 수 있다.

운동 사진, 운동 종류, 운동 시간(분), 메모를 확인할 수 있고,

사진 위에 커서를 올리면 등록한 태그를 확인할 수 있다.

달력에서 기록이 있는 날짜에 파란색 점이 표시되어 쉽게 확인 가능하다.

<img src="file:///C:/Users/baekh/Desktop/ssafy/owo/github/owo/README_Hanna/owo%20gif/calendar.gif" title="" alt="calendar.gif" width="678">



### 4. 사용자 정보 분석

![사용자정보분석.gif](C:\Users\baekh\Desktop\ssafy\owo\github\owo\README_Hanna\owo%20gif\사용자정보분석.gif)

신체 정보(나이, 성별, 키, 몸무게, 활동량)를 추가적으로 입력하여 저장할 경우,
BMI, BMR, 하루섭취 권장 칼로리가 바로 계산되어 쉽게 분석받을 수 있다.


