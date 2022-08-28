# Teachable Machine
    - 분류할 이미지를 class별로 나눈 뒤 서 있는 자세, 운동하는 자세의 모델을 넣어준다. 
    - 그 후 모션이 잘 인식되도록 학습을 시켜준 뒤, 운동 종목별로 모션을 취할 때마다 Teachable Machine에서 그 값이 일정 확률을 넘어 정확한 자세라고 판단하게 될 경우 카운트가 올라가도록 설정을 한다.

- 라이브러리 설치
```javascript
npm install @teachablemachine/pose
npm install @tensorflow/tfjs
```

* 모션 인식 데이터 학습
    1. [Teachable Machine - 버피](https://teachablemachine.withgoogle.com/models/E7k2EBOt0/)
        - 서 있는 자세

        ![버피1](/uploads/9f3504af39c9c124a042b67a3311f90b/버피1.PNG)

        - 웅크려있는 자세

        ![버피2](/uploads/50255f481edf6c62bede9252e20ebee6/버피2.PNG)

        - 엎드린 자세

        ![버피3](/uploads/f95cae2e07e49c80656368f99d97aba8/버피3.PNG)

    ---
    2. [Teachable Machine - 런지](https://teachablemachine.withgoogle.com/models/mHBuIVIsV/)
        - 서 있는 자세

        ![런지1](/uploads/c8503eef46f9ad583e9361f8f0a9f153/런지1.PNG)

        - 런지 자세

        ![런지2](/uploads/8ff13af1393df7ea8e01cf244e81baca/런지2.PNG)
    ---
    3. [Teachable Machine - 스쿼트](https://teachablemachine.withgoogle.com/models/rtxvnN4Rz/)
        - 서 있는 자세

        ![스쿼트1](/uploads/caed96b256078015dbb7b9a5bfcc8e00/스쿼트1.PNG)

        - 스쿼트 하는 자세
        
        ![스쿼트2](/uploads/5e613ff6f2c89aa1ba6d45125a9bc98b/스쿼트2.PNG)

