let ruleBG = ["#009DFE", "#843101", "#F3F02F", "#9F1FD7", "#2E8B57"];
let attitudeBG = ["#FF4E46", "#F27886", "#69F2D2", "#F9ACCC", "#FFB835"];
let ruleBGIndex = Math.floor(Math.random() * ruleBG.length);
  let attitudeBGIndex = Math.floor(Math.random() * attitudeBG.length);

let ruleContent = [
  "띵즈애프터는 매주 토요일 오전 11시에 모여 이야기를 나눈다. 지각과 결석은 허용되지 않는다.",
  "띵즈애프터의 구성원이 회의 시간을 변경할 수 있는 마지막 날은 수요일이다.",
  "띵즈애프터는 우리의 삶과 함께 호흡해야 한다.",
  "띵즈애프터는 카카오톡 메시지를 읽고 무시하지 않는다.",
  "띵즈애프터의 행동강령은 무한 증식하며, 언제나 수정될 수 있다.",
  "띵즈애프터는 디자인에만 머물지 않는다.",
  "띵즈애프터는 배가 고파지기 전에 회의를 마친다.",
  "띵즈애프터는 위 규칙을 지키지 않을 경우 사려 깊은 잔소리를 듣는다.",
  "띵즈애프터는 회의록을 다시 읽지 않더라도 반드시 작성한다.",
  "띵즈애프터의 구성원은 진행자의 판단과 의견을 존중한다.",
];

let attitudeContent = [
  "우리는 '이후'를 계속 상상한다.",
  "우리는 질문이 많은 작업을 믿는다.",
  "우리는 어도비와 맥북을 벗어날 자유를 가진다.",
  "우리는 마감보다 과정을 기록한다.",
  "우리는 서로를 신뢰하고, 신뢰에 대한 책임을 진다.",
  "우리는 루틴보다 리듬을, 강제보다 합의를 믿는다.",
  "우리는 재미와 유머를 적극적으로 향유한다.",
  "우리는 이유 없는 작업을 하지 않는다. ",
  "우리는 멋진 것, 예쁜 것, 재미있는 것, 맛있는 것을 함께 나눈다.",
  "우리는 인정한 다음 반박한다. ",
];

// 중복 없는 순환을 위한 변수들
let ruleIndexes = [];
let attitudeIndexes = [];
let currentRuleIndex = 0;
let currentAttitudeIndex = 0;

// 배열을 섞는 함수 (Fisher-Yates shuffle)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// 초기화: 0~9 인덱스 배열을 섞어서 생성
function initializeIndexes() {
  const indexes = Array.from({length: ruleContent.length}, (_, i) => i);
  ruleIndexes = shuffleArray(indexes);
  attitudeIndexes = shuffleArray(indexes);
  currentRuleIndex = 0;
  currentAttitudeIndex = 0;
}

// 다음 인덱스를 가져오는 함수
function getNextRuleIndex() {
  if (currentRuleIndex >= ruleIndexes.length) {
    // 한 바퀴 다 돌았으면 다시 섞고 처음부터
    const indexes = Array.from({length: ruleContent.length}, (_, i) => i);
    ruleIndexes = shuffleArray(indexes);
    currentRuleIndex = 0;
  }
  const selectedIndex = ruleIndexes[currentRuleIndex++];
  return selectedIndex;
}

function getNextAttitudeIndex() {
  if (currentAttitudeIndex >= attitudeIndexes.length) {
    // 한 바퀴 다 돌았으면 다시 섞고 처음부터
    const indexes = Array.from({length: attitudeContent.length}, (_, i) => i);
    attitudeIndexes = shuffleArray(indexes);
    currentAttitudeIndex = 0;
  }
  const selectedIndex = attitudeIndexes[currentAttitudeIndex++];
  return selectedIndex;
}

// 페이지 로드 시 초기화
initializeIndexes();

let rule = document.querySelector(".rule");
let attitude = document.querySelector(".attitude");
let container = document.querySelector(".container");

let clickCount = 0;

function changeBG() {
  ruleBGIndex = Math.floor(Math.random() * ruleBG.length);
  attitudeBGIndex = Math.floor(Math.random() * attitudeBG.length);
}

container.style.background = "linear-gradient(to bottom," + ruleBG[ruleBGIndex] + " 50%," + attitudeBG[attitudeBGIndex] + " 50%)";

function changeContent() {
  changeBG();

  const ruleIndex = getNextRuleIndex();
  const attitudeIndex = getNextAttitudeIndex();

  rule.querySelector(".content").innerHTML = ruleContent[ruleIndex];
    attitude.querySelector(".content").innerHTML = attitudeContent[attitudeIndex];
    
    if (clickCount == 0) {
        clickCount++;
        rule.querySelector(".content").classList.replace('content1', 'content2');
        attitude.querySelector(".content").classList.replace('content1', 'content2');
        rule.querySelector(".title").classList.replace('title1', 'title2');
        attitude.querySelector(".title").classList.replace('title1', 'title2');
        container.style.background = "linear-gradient(239deg," + ruleBG[ruleBGIndex] + " 50%," + attitudeBG[attitudeBGIndex] + " 50%)";
    } else if (clickCount == 1) {
        clickCount++;
        rule.querySelector(".content").classList.replace('content2', 'content3');
        attitude.querySelector(".content").classList.replace('content2', 'content3');
        rule.querySelector(".title").classList.replace('title2', 'title3');
        attitude.querySelector(".title").classList.replace('title2', 'title3');
        container.style.background = "linear-gradient(270deg," + ruleBG[ruleBGIndex] + " 50%," + attitudeBG[attitudeBGIndex] + " 50%)";
    } else if (clickCount == 2) {
        clickCount++;
        rule.querySelector(".content").classList.replace('content3', 'content4');
        attitude.querySelector(".content").classList.replace('content3', 'content4');
        rule.querySelector(".title").classList.replace('title3', 'title4');
        attitude.querySelector(".title").classList.replace('title3', 'title4');
        container.style.background = "linear-gradient(301deg," + ruleBG[ruleBGIndex] + " 50%," + attitudeBG[attitudeBGIndex] + " 50%)";
    } else if (clickCount == 3) {
        clickCount++;
        rule.querySelector(".content").classList.replace('content4', 'content5');
        attitude.querySelector(".content").classList.replace('content4', 'content5');
        rule.querySelector(".title").classList.replace('title4', 'title5');
        attitude.querySelector(".title").classList.replace('title4', 'title5');
        container.style.background = "linear-gradient(360deg," + ruleBG[ruleBGIndex] + " 50%," + attitudeBG[attitudeBGIndex] + " 50%)";
    } else if (clickCount == 4) {
        clickCount++;
        rule.querySelector(".content").classList.replace('content5', 'content6');
        attitude.querySelector(".content").classList.replace('content5', 'content6');
        rule.querySelector(".title").classList.replace('title5', 'title6');
        attitude.querySelector(".title").classList.replace('title5', 'title6');
        container.style.background = "linear-gradient(59deg," + ruleBG[ruleBGIndex] + " 50%," + attitudeBG[attitudeBGIndex] + " 50%)";
    } else if (clickCount == 5) {
        clickCount++;
        rule.querySelector(".content").classList.replace('content6', 'content7');
        attitude.querySelector(".content").classList.replace('content6', 'content7');
        rule.querySelector(".title").classList.replace('title6', 'title7');
        attitude.querySelector(".title").classList.replace('title6', 'title7');
        container.style.background = "linear-gradient(90deg," + ruleBG[ruleBGIndex] + " 50%," + attitudeBG[attitudeBGIndex] + " 50%)";
    } else if (clickCount == 6) {
        clickCount++;
        rule.querySelector(".content").classList.replace('content7', 'content8');
        attitude.querySelector(".content").classList.replace('content7', 'content8');
        rule.querySelector(".title").classList.replace('title7', 'title8');
        attitude.querySelector(".title").classList.replace('title7', 'title8');
        container.style.background = "linear-gradient(121deg," + ruleBG[ruleBGIndex] + " 50%," + attitudeBG[attitudeBGIndex] + " 50%)";
    } else if (clickCount == 7) {
        clickCount = 0;
        rule.querySelector(".content").classList.replace('content8', 'content1');
        attitude.querySelector(".content").classList.replace('content8', 'content1');
        rule.querySelector(".title").classList.replace('title8', 'title1');
        attitude.querySelector(".title").classList.replace('title8', 'title1');
        container.style.background = "linear-gradient(to bottom," + ruleBG[ruleBGIndex] + " 50%," + attitudeBG[attitudeBGIndex] + " 50%)";
    }
}
