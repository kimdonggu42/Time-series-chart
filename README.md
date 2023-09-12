# [ Week 4 ] Time series chart

<img src = https://camo.githubusercontent.com/431cb39804ef7c333ffa8b0dfec7e24581654e84e3c8bcf91f64a43158c3156c/68747470733a2f2f7374617469632e77616e7465642e636f2e6b722f696d616765732f6576656e74732f323930392f62333539313861362e6a7067 />

## 프로젝트 소개

- 주어진 데이터를 시계열 차트로 표현한 데이터 시각화 프로젝트입니다.

- 진행 기간 : 2023.09.11 ~ 2023.09.12

## 개발 환경

### Developement

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">

### Styling

<img src="https://img.shields.io/badge/styled component-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>

## 실행 방법

- 이 프로젝트는 json server를 사용하고 있습니다. npm start 시 json server가 함께 start 됩니다.

```
$ git clone https://github.com/kimdonggu42/Time-series-chart.git

$ npm install

$ npm run dev
```

## 디렉토리 구조

```
📦 src
 ┣ 📂 components
 ┣ 📂 constants
 ┣ 📂 mocks
 ┣ 📂 pages
 ┣ 📂 styles
 ┣ 📜 App.tsx
 ┗ 📜 main.tsx
```

## 작업 내용

### 1. Custom Tooltip

- id(지역명)와 value_area, value_bar의 수치를 함께 보여주기 위해 별도의 custom tooltip을 적용했습니다.

### 2. Data Filtering

- 상단의 버튼이나 bar 차트를 클릭할 시 해당하는 id(지역명)의 data만 색상을 강조하여 filtering 되도록 했습니다.

- 버튼이나 bar 차트 클릭 시 해당 id(지역명) query string을 가지는 페이지로 이동하도록 하여 새로고침 시 filtering이 초기화되는 문제를 방지했습니다.

## 작동 화면

<img width="100%" src="https://github.com/kimdonggu42/Time-series-chart/assets/115632555/297694e6-59c3-43c0-bef7-e8f26f874680"/>
