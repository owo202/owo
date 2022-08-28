# Teachable Machine
    - 분류할 이미지를 class별로 나눈 뒤 서 있는 자세, 운동하는 자세의 모델을 넣어준다. 
    - 모션이 잘 인식되도록 학습을 시켜준다. 
    - 운동 종목별로 모션을 취할 때마다 Teachable Machine에서 그 값이 일정 확률을 넘어 정확한 자세라고 판단하게 될 경우 카운트가 올라가도록 설정을 한다.

- 라이브러리 설치
```javascript
npm install @teachablemachine/pose
npm install @tensorflow/tfjs
```

* 모션 인식 데이터 학습
    1. [Teachable Machine - 버피](https://teachablemachine.withgoogle.com/models/E7k2EBOt0/)
        - 서 있는 자세

        ![버피1](https://user-images.githubusercontent.com/77658116/187070515-7bf16a2e-b798-466a-b26d-51e0e8c59c6b.PNG)

        - 웅크려있는 자세

        ![버피2](https://user-images.githubusercontent.com/77658116/187070532-6b272f13-7c7e-419e-a515-8c1a5c4bdabf.PNG)
        
        - 엎드린 자세

        ![버피3](https://user-images.githubusercontent.com/77658116/187070545-d48a2e51-1f44-4fe1-9694-77b3309f233d.PNG)

    ---
    2. [Teachable Machine - 런지](https://teachablemachine.withgoogle.com/models/mHBuIVIsV/)
        - 서 있는 자세

        ![런지1](https://user-images.githubusercontent.com/77658116/187070559-0cc1a99f-3faa-452f-9dfe-5605a04fb8b9.PNG)

        - 런지 자세

        ![런지2](https://user-images.githubusercontent.com/77658116/187070569-f47cd77d-c19c-4a2b-9b65-7a5e5d5f8974.PNG)
    ---
    3. [Teachable Machine - 스쿼트](https://teachablemachine.withgoogle.com/models/rtxvnN4Rz/)
        - 서 있는 자세

        ![스쿼트1](https://user-images.githubusercontent.com/77658116/187070587-70649e4d-1084-44eb-b5bc-7813fe0bb992.PNG)

        - 스쿼트 하는 자세
        
        ![스쿼트2](https://user-images.githubusercontent.com/77658116/187070594-84340fc7-179d-4e86-8ec1-e8430c48d420.PNG)

