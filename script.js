var introTitleEl = $('#introTitle');
var introEl = $('#introPara');
var startBtn = $('#startBtn');
var timerEl = $('#time_sec');
var questionEl = $('#questions');
var optionListEl = $('.optionList');
var choiceA = $('#A');
var choiceB = $('#B');
var choiceC = $('#C');
var choiceD = $('#D');
var answerEl = $('.answerText');

// var progress = $('#progress');

var isPaused = false;
var counter;
var score = 0;
var runningQuestion = 0;
var questions = [
  {
    question: "Commonly used data types DO Not Include:",
    choiceA: "1. strings",
    choiceB: "2. booleans",
    choiceC: "3. alerts", 
    choiceD: "4. numbers",
    correct: "C",
  },
  {
    question: "The condition in an if / else statement is enclosed with _________.",
    choiceA: "1. quotes",
    choiceB: "2. curly bracket",
    choiceC: "3. parenthesis",
    choiceD: "4. square brackets",
    correct: "C",
  },
  {
    question: "Arrays in JavaScript can be used to store _________.",
    choiceA: "1. numbers and strings",
    choiceB: "2. other arrays",
    choiceC: "3. booleans",
    choiceD: "4. all of the above",
    correct: "D",
  },
  {
    question: "String values must be enclosed within_______ when being assigned to variables.",
    choiceA: "1. commas",
    choiceB: "2. curly brackets",
    choiceC: "3. quotes",
    choiceD: "4. parenthesis",
    correct: "C",
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choiceA: "1. JavaScript",
    choiceB: "2. terminal/bash",
    choiceC: "3. for loops",
    choiceD: "4. console.log",
    correct: "D",
  },
]
var lastQuestion = questions.length - 1;
var qIndex = 0;
var qCount = questions.length;
var clickCount = 0;

function renderQuestion() {
  var q = questions[runningQuestion];

  questionEl.text(q.question);
  choiceA.text(q.choiceA);
  choiceB.text(q.choiceB);
  choiceC.text(q.choiceC);
  choiceD.text(q.choiceD);
  // clickCount++;
}

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    answerEl.text('Correct!');
  } else {
    answerEl.text('Wrong!');
    counter = counter - 10;
  }

  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
    qCount--;
    clearInterval(counter);
    // startTime(timeValue);
  } else {
    console.log(runningQuestion, lastQuestion, qCount, clickCount);
    // clearInterval(timerInterval);
    // clearQuiz();
  }
}

introTitleEl.text('Coding Quiz Challenge');
timerEl.text("Time: " + 0);

startBtn.on('click', function() {
  clearIntro();
  startTime(10);
  renderQuestion();
});

// set Timer
function startTime(time) {
  timerEl.text("Time: " + time);
  counter = setInterval(timer, 1000);
  function timer() {
    time--;
    timerEl.text("Time: " + time);
    if (time < 0) {
      clearInterval(counter);
      timerEl.text("Time: " + 0);
      clearQuiz();
    }
  }

  
  
  // function finalPage()
  // timerEl.text("Time: " + secondsLeft);

  // var timerInterval = setInterval(function() {
  //   if (!isPaused) {
  //     secondsLeft--;
  //     timerEl.text("Time: " + secondsLeft);
  //   } 

  //   if(isPaused === true  || secondsLeft <= 0) {
  //     clearInterval(timerInterval);
  //     // timerEl.pause();
  //     if (secondsLeft <= 0) {
  //       timerEl.text("Time: " + 0);
  //     }
  //     clearQuiz();
  //   }
  //   //final page
  // }, 1000);

}



// Clear quiz intro page
function clearIntro() {
  // console.log("button");
  introTitleEl.text('');
  introEl.text('');
  startBtn.hide();
}

function clearQuiz() {
  questionEl.text('');
  optionListEl.text('');
  answerEl.text('');
}

// var interval = new IntervalTimer(console.log('aaa'), 3000);
// interval.start();
// interval.pause();
// interval.resume();
// interval.clear();

// function renderProgress() {
//   console.log(qIndex,qCount);

//   while (qIndex <= lastQuestion) {
//     progress.innerHTML += "<div class='prog' id=" + qIndex +"></div>";
//     qIndex++;
//     qCount--;
//   }
//   // console.log(qIndex,qCount);
//   // if (qCount === 0) {
//   //   console.log("last questions");
//   // }
//   // if (qIndex === lastQuestion && secondsLeft > 0) {
    
//   // }
// }