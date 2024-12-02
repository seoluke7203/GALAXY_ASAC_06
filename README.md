# GALAXY Project - ASAC

추가한 라이브러리들
- eslint
- prettier
- vite-tsconfig-paths
- react-router            // 라우터(페이지 이동) 위함
- react-router-dom        // 라우터(페이지 이동) 위함
- immer
- Tailwind
- ShadCN


실행방법
1. 이 repository를 clone한다
2. `npm i`를 통해 설치를 진행한다
3. `npm run dev`를 통해 실행한다

- ~~`npm run format`을 통해 eslint를 사용할 수 있다. 아직까지 저장 시 자동 바꿈을 설정하지 못해 해결할 예정이다.~~ 해결완료

  
```
│  App.css
│  App.jsx
│  index.css
│  main.jsx
│
├─assets
│  │  btnW_icon_circle.png
│  │  complete_Img.png
│  │  galaxy_image.jpg
│  │  galaxy_logo.jpg
│  │  Google.png
│  │  Kakao.png
│  │  testImg.png
│  │
│  └─images
│      ├─events
│      │      event1.png
│      │      event2.png
│      │      event3.png
│      │
│      ├─posters
│      │      aladinPoster.png
│      │      jesuschristPoster.jpeg
│      │      musicalTestImg.gif
│      │      stillJypPoster.gif
│      │
│      └─postersDetail
│              jesusMainPic.jpg
│              performace1.jpg
│              stillJypDetail.jpg
│
├─components
│  ├─LandingComponent
│  │      DummyComponent.jsx
│  │      EventBanner.jsx
│  │      MainBanner.jsx
│  │      SubBanner.jsx
│  │
│  ├─Layout
│  │      Footer.jsx
│  │      Header.jsx
│  │      Layout.jsx
│  │      LogoZone.jsx
│  │      SearchZone.jsx
│  │      SocialLoginZone.jsx
│  │
│  ├─paymentComponents
│  │      blobConverter.jsx
│  │      discountTabs.jsx
│  │      downloadPdf.jsx
│  │      paymentConfirm.jsx
│  │      paymentInfo.jsx
│  │
│  ├─performaceInfo
│  │      infoMain.jsx
│  │
│  ├─TicketingComponents
│  │      AlwaysOnTicket.jsx
│  │      DateSelectUI.jsx
│  │      NonDateSelectUI.jsx
│  │      SeatSelect.jsx
│  │      TicketNumberSelector.jsx
│  │      TicketNumberUI.jsx
│  │
│  └─ui
│          button.jsx
│          calendar.jsx
│          carousel.jsx
│          checkbox.jsx
│          customizedAlert.jsx
│          discountTabs.jsx
│          input.jsx
│          navigation-menu.jsx
│          pdfTemplate.jsx
│          prepAlert.jsx
│          tabs.jsx
│
├─context
│      IsLoginContext.jsx
│
├─lib
│      RouteCheck.jsx
│      utils.js
│
└─Pages
    ├─Landing
    │      LandingPage.jsx
    │
    ├─Login
    │      LoginPage.jsx
    │      LoginPage[old].jsx
    │
    ├─payment
    │      PaymentCompleted.jsx
    │      paymentPage.jsx
    │
    ├─Register
    │      RegisterPage.jsx
    │      RegisterPage[old].jsx
    │
    └─Ticketing
            TicketingPage.jsx
```
