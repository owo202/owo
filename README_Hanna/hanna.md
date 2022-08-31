# 마이페이지

![마이페이지 메인 사진](https://user-images.githubusercontent.com/97646914/187567251-7a78e524-4dd6-4314-a48b-e7cad430acc1.png)

- **사이드바**
  
  - 프로필이미지 CRUD
  
  - 닉네임
  
  - 연속운동일
  
  - 이번주총운동시간
  
  - 사이드바메뉴선택
  
  - 이번주운동목표 CRD

- **Records**
  
  - 운동 기록 분석 정보
    
    - 나의운동레벨, 티어
    
    - 운동종류 비율
    
    - 주간 목표 달성률

- **Calendar** 
  
  - 운동 기록
    
    - 일지별 사진
    
    - 메모 등
    
    - 운동종류
    
    - 태그

- **Physical Analys (신체 정보 분석)**
  
  - 사용자의 부가적인 신체정보를 받아서

- **Update My Info**
  
  - 사용자의 부가적인 신체정보(닉네임, 나이, 성별, 키, 몸무게, 활동량)를 입력받아 업데이트한다.

---

### **1. 기본 기능**

- **슬로건** : 운동 목표, 슬로건, 다짐 등을 입력하여 마이페이지 메인에서 저장, 확인, 변경할 수 있다.
  
  ![update slogan](https://user-images.githubusercontent.com/97646914/187566625-6b705ede-45b5-4dbc-a6f9-51d46c2c0c30.gif)

- **프로필 이미지** : 자신의 프로필 이미지를 등록할 수 있고, 메인 Nav에서 확인 가능하다. 20mb까지만 수용한다.
  
  ![update profile image](https://user-images.githubusercontent.com/97646914/187566580-53f5eed2-1fac-4c5b-99cd-ac51f43d4a40.gif)

### 2. **운동 기록 관련 API**

- **사용자 운동 기록**
  
  현재까지의 연속 운동일, 이번주 총 운동 시간(분)을 확인할 수 있다.

- **나의 운동 레벨**
  
  경쟁모드를 통해 얻은 포인트를 통해 운동 레벨, 티어가 결정된다.
  
  ![운동레벨](https://user-images.githubusercontent.com/97646914/187566659-d630f07d-c533-4fb5-93fa-d8a0894c44ca.png)

- **티어** 
  
  전체 사용자 중 20%씩 브론즈, 실버, 골드, 플레티넘, 다이아로 구성된다.
  
  ![](https://user-images.githubusercontent.com/97646914/187566513-e21078bf-441a-4c8a-82a7-f17c7f0acfcb.png)

- **레벨**
  
  경쟁모드에서 쌓은 포인트가 축적되어 경험치로 쌓인다. 레벨 0부터 1씩 증가하며,  레벨 경험치 최대치가 기본값 100p에서 레벨 증가에 따라 5p씩 증가한다. 경험치가 차오름에 따라 그래프에 표시된다.

- **나의 운동 비율**
  
  ![image](https://user-images.githubusercontent.com/97646914/187567935-bc3b43e0-3fe8-428f-9a4f-95022c8019cb.png)
  
  회원 총 운동 기록에서 운동 종류별 비율을 그래프로, 가장 많이 한 운동 종류를 확인할 수 있다.

- **운동 목표 달성량**
  
  이번주 운동 목표를 운동 종류별로 총 3개 등록할 수 있다.
  
  운동 목표 CRD & 목표 시간 대비 이번주 달성량 확인 (매주 일요일 자정 갱신)
  
  ![운동 목표](https://user-images.githubusercontent.com/97646914/187567009-e4643347-d04e-46ab-ad0c-99821a176fb2.gif)

---

### 3. 캘린더

'자유모드', '영상모드'에서 저장한 운동기록을 일자별로 확인

운동 사진, 운동 종류, 운동 시간(분), 메모가 첨부되어 있으며,

각 사진 위에 마우스 커서를 올리면 등록한 태그가 확인된다.

달력에서 기록이 있는 날짜에 파란색 점이 표시되어 쉽게 확인 가능하다.

![](https://user-images.githubusercontent.com/97646914/187566292-5ddcf5d9-929f-4d53-9a04-9071bc3834fe.gif)

![메인-랭킹탭 캘린더](https://user-images.githubusercontent.com/97646914/187567203-72bb04ff-f782-48c6-b085-8df828b906fb.gif)

메인페이지 랭킹탭에서도 동일하게 확인할 수 있다.

---

### 4. 사용자 정보 분석

![사용자정보분석](https://user-images.githubusercontent.com/97646914/187567229-bc08e35d-6a5f-484c-8788-5386baa0e5ae.gif)

<img title="" src="https://user-images.githubusercontent.com/97646914/187568477-4442c4a5-16ae-4077-953b-7dc375f4ab31.png" alt="image" width="476">

신체 정보(나이, 성별, 키, 몸무게, 활동량)를 추가적으로 입력하여 저장할 경우,
**BMI, BMR, 하루섭취 권장 칼로리**가 바로 계산되어 쉽게 분석받을 수 있다.

신체 정보가 부족한 경우있지 않은 경우 초기화된다.

![](C:\Users\multicampus\AppData\Roaming\marktext\images\2022-08-31-09-45-29-image.png)

### 기타

- 사용자 Records 초기화
  
   기록이 없을 경우, 파란 글씨 클릭 시 운동시작 방으로 넘어간다.
  
  ![image](https://user-images.githubusercontent.com/97646914/187567667-f4acc93d-754b-41cf-9118-63d803158d85.png)
