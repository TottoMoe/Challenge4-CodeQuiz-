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
var finalPageShowed = $('.finalPage');
var userFormEL = $('#user-form');
var userListEl = $('#user-list');
var restartBtn = $('.restart-btn');

var isPaused = false;
var timeValue = 30;
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
  
}

timerEl.text("Time: " + 0);

function startTime(time) {
  if (!isPaused) {
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
  } else {
    clearInterval(counter);
  }
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
    // startTime(timeValue);
  } else {
    // clearInterval(counter);
    isPaused = true;
    console.log(runningQuestion, lastQuestion, qCount, clickCount);
    clearQuiz();
  }
}

introTitleEl.text('Coding Quiz Challenge');

startBtn.on('click', function() {
  clearIntro();
  startTime(timeValue);
  renderQuestion();
});

// Clear quiz intro page
function clearIntro() {
  introTitleEl.text('');
  introEl.text('');
  startBtn.hide();
}

function clearQuiz() {
  questionEl.text('');
  optionListEl.text('');
  answerEl.text('');
  finalPageShowed.css("display", "block");
}

function userInput(e) {
  e.preventDefault();
  var userInputList = $('input[name="initial"]').val();
  
  if(!userInputList) {
    console.log("no user list");
    return;
  }

  userListEl.append('<li>' + userInputList + '</li>');
  
  $('input[name="initial"]').val('');
}
userFormEL.on('submit', userInput);

restartBtn.on('click', function() {
  window.location.reload();
})