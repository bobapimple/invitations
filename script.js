const levels = [
  {
    scene: {cat:"🐱", object:"🧱", goal:"🏁"},
    text:"The cat wants to ___ the wall.",
    choices:["go over","go around","go through","go under"],
    correct:2,
    explanation: "Use 'go through' when moving from one side to another by passing into and out of something. The cat wants to pass through the wall opening.",
    grammar: "Prepositions of movement",
    onWin:(catEl)=>{
      catEl.style.transform = "translateX(300px)";
    }
  },
  {
    scene: {cat:"🐱", object:"🐺🌳", goal:"🏁"},
    text:"The cat ___ the tree.",
    choices:["runs under","climbs","sleeps","pushes"],
    correct:1,
    explanation: "Use 'climbs' with trees, mountains, or anything you go up vertically. Cats climb trees to get to higher places.",
    grammar: "Verbs of movement",
    onWin:(catEl, objectEl)=>{
      catEl.classList.add('jump');
      setTimeout(()=>catEl.classList.remove('jump'),900);
      if(objectEl) objectEl.classList.add('angry');
      setTimeout(()=>objectEl.classList.remove('angry'),1000);
    }
  },
  {
    scene: {cat:"🐱", object:"🚪", goal:"🏁"},
    text:"The cat goes ___ the door.",
    choices:["through","over","under","around"],
    correct:0,
    explanation: "Use 'through' when moving in one side and out the other side of something with space inside. The cat goes through the door opening.",
    grammar: "Prepositions of movement",
    onWin:(catEl)=>{
      catEl.style.transform = "translateX(350px)";
    }
  },
  {
    scene: {cat:"🐱", object:"🕳️", goal:"🏁"},
    text:"The cat jumps ___ the hole.",
    choices:["into","over","under","through"],
    correct:1,
    explanation: "Use 'over' when jumping from one side to the other without touching. The cat jumps over the hole to avoid falling in.",
    grammar: "Prepositions of movement",
    onWin:(catEl)=>{
      catEl.classList.add('jump');
      setTimeout(()=>catEl.classList.remove('jump'),900);
    }
  },
  {
    scene: {cat:"🐱", object:"🐶", goal:"🏁"},
    text:"The cat runs ___ the dog.",
    choices:["towards","away from","under","over"],
    correct:1,
    explanation: "Use 'away from' to show movement in the opposite direction from something/someone. The cat runs away from the dog because it's scared.",
    grammar: "Prepositions of direction",
    onWin:(catEl, objectEl)=>{
      catEl.style.transform = "translateX(200px)";
      objectEl.classList.add('angry');
      setTimeout(()=>objectEl.classList.remove('angry'),1000);
    }
  },
  {
    scene: {cat:"🐱", object:"📦", goal:"🏁"},
    text:"The cat hides ___ the box.",
    choices:["behind","inside","under","next to"],
    correct:1,
    explanation: "Use 'inside' when something is within the boundaries or container. The cat hides inside the box for shelter.",
    grammar: "Prepositions of place",
    onWin:(catEl)=>{
      catEl.style.transform = "translateX(280px)";
    }
  },
  {
    scene: {cat:"🐱", object:"🌧️", goal:"🏁"},
    text:"The cat stays ___ the rain.",
    choices:["in","out of","under","through"],
    correct:1,
    explanation: "Use 'out of' to show being outside of something undesirable. The cat stays out of the rain to stay dry.",
    grammar: "Prepositions of place",
    onWin:(catEl)=>{
      catEl.style.transform = "translateX(250px)";
    }
  },
  {
    scene: {cat:"🐱", object:"🐟", goal:"🏁"},
    text:"The cat looks ___ the fish.",
    choices:["for","at","under","over"],
    correct:1,
    explanation: "Use 'look at' when directing your eyes toward something to see it. The cat looks at the fish with interest.",
    grammar: "Prepositions with verbs",
    onWin:(catEl)=>{
      catEl.classList.add('jump');
      setTimeout(()=>catEl.classList.remove('jump'),900);
    }
  },
  {
    scene: {cat:"🐱", object:"🐈‍⬛", goal:"🏁"},
    text:"The cat plays ___ another cat.",
    choices:["with","at","under","over"],
    correct:0,
    explanation: "Use 'play with' when engaging in fun activity together. Cats play with other cats or toys.",
    grammar: "Prepositions with verbs",
    onWin:(catEl, objectEl)=>{
      catEl.style.transform = "translateX(220px)";
      objectEl.classList.add('jump');
      setTimeout(()=>objectEl.classList.remove('jump'),900);
    }
  },
  {
    scene: {cat:"🐱", object:"🛏️", goal:"🏁"},
    text:"The cat sleeps ___ the bed.",
    choices:["under","on","next to","behind"],
    correct:1,
    explanation: "Use 'on' when something is positioned on top of a surface. The cat sleeps on the bed for comfort.",
    grammar: "Prepositions of place",
    onWin:(catEl)=>{
      catEl.style.transform = "translateX(300px)";
    }
  },
  {
    scene: {cat:"🐱", object:"🐭", goal:"🏁"},
    text:"The cat chases the mouse ___ the house.",
    choices:["over","through","under","around"],
    correct:1,
    explanation: "Use 'through' when moving from one side to another inside a space. The cat chases the mouse through the house (inside the house).",
    grammar: "Prepositions of movement",
    onWin:(catEl)=>{
      catEl.classList.add('jump');
      setTimeout(()=>catEl.classList.remove('jump'),900);
    }
  },
  {
    scene: {cat:"🐱", object:"🐈‍⬛", goal:"🏁"},
    text:"The cat walks ___ the other cat.",
    choices:["towards","away from","past","next to"],
    correct:2,
    explanation: "Use 'past' when moving alongside or by the side of something. The cat walks past the other cat without stopping.",
    grammar: "Prepositions of movement",
    onWin:(catEl, objectEl)=>{
      catEl.style.transform = "translateX(250px)";
    }
  },
  {
    scene: {cat:"🐱", object:"🏠", goal:"🏁"},
    text:"The cat goes ___ the house.",
    choices:["inside","outside","over","under"],
    correct:0,
    explanation: "Use 'inside' when entering the interior of a building. The cat goes inside the house for shelter.",
    grammar: "Prepositions of place",
    onWin:(catEl)=>{
      catEl.style.transform = "translateX(280px)";
    }
  },
  {
    scene: {cat:"🐱", object:"🌞", goal:"🏁"},
    text:"The cat sits ___ the sun.",
    choices:["in","under","behind","away from"],
    correct:0,
    explanation: "Use 'in' when positioned within an area of light or warmth. The cat sits in the sun to get warm.",
    grammar: "Prepositions of place",
    onWin:(catEl)=>{
      catEl.classList.add('jump');
      setTimeout(()=>catEl.classList.remove('jump'),900);
    }
  },
  {
    scene: {cat:"🐱", object:"🐈‍⬛", goal:"🏁"},
    text:"The cat shares food ___ another cat.",
    choices:["with","to","for","at"],
    correct:0,
    explanation: "Use 'share with' when giving or enjoying something together. The cat shares food with another cat (together).",
    grammar: "Prepositions with verbs",
    onWin:(catEl, objectEl)=>{
      catEl.style.transform = "translateX(200px)";
      objectEl.classList.add('jump');
      setTimeout(()=>objectEl.classList.remove('jump'),900);
    }
  },
  {
    scene: {cat:"🐱", object:"🥛", goal:"🏁"},
    text:"The cat drinks milk ___ the bowl.",
    choices:["from","in","at","on"],
    correct:0,
    explanation: "Use 'drink from' when taking liquid out of a container. The cat drinks milk from the bowl (using the bowl as a source).",
    grammar: "Prepositions with verbs",
    onWin:(catEl)=>{
      catEl.style.transform = "translateX(250px)";
    }
  },
  {
    scene: {cat:"🐱", object:"🧵", goal:"🏁"},
    text:"The cat plays ___ the yarn.",
    choices:["with","on","in","at"],
    correct:0,
    explanation: "Use 'play with' when interacting with toys or objects for fun. The cat plays with the yarn as a toy.",
    grammar: "Prepositions with verbs",
    onWin:(catEl)=>{
      catEl.classList.add('jump');
      setTimeout(()=>catEl.classList.remove('jump'),900);
    }
  },
  {
    scene: {cat:"🐱", object:"📚", goal:"🏁"},
    text:"The cat sits ___ the books.",
    choices:["on","under","next to","behind"],
    correct:0,
    explanation: "Use 'on' when positioned on top of a surface. The cat sits on the books, using them as a surface.",
    grammar: "Prepositions of place",
    onWin:(catEl)=>{
      catEl.style.transform = "translateX(280px)";
    }
  },
  {
    scene: {cat:"🐱", object:"🎸", goal:"🏁"},
    text:"The cat jumps ___ the guitar.",
    choices:["on","over","under","through"],
    correct:0,
    explanation: "Use 'on' when landing or positioning on top of something. The cat jumps on the guitar, landing on it.",
    grammar: "Prepositions of movement",
    onWin:(catEl)=>{
      catEl.classList.add('jump');
      setTimeout(()=>catEl.classList.remove('jump'),900);
    }
  },
  {
    scene: {cat:"🐱", object:"🍕", goal:"🏁"},
    text:"The cat smells ___ the pizza.",
    choices:["at","on","in","under"],
    correct:0,
    explanation: "Use 'smell at' when directing the sense of smell toward something. The cat smells at the pizza to investigate it.",
    grammar: "Prepositions with verbs",
    onWin:(catEl)=>{
      catEl.style.transform = "translateX(300px)";
    }
  },
  {
    scene: {cat:"🐱", object:"🚗", goal:"🏁"},
    text:"The cat hides ___ the car.",
    choices:["under","in","on","next to"],
    correct:0,
    explanation: "Use 'under' when positioned below something. The cat hides under the car for shelter or safety.",
    grammar: "Prepositions of place",
    onWin:(catEl)=>{
      catEl.style.transform = "translateX(320px)";
    }
  },
  {
    scene: {cat:"🐱", object:"🌊", goal:"🏁"},
    text:"The cat plays ___ the water.",
    choices:["in","on","at","with"],
    correct:0,
    explanation: "Use 'play in' when being inside a liquid or substance. The cat plays in the water, getting wet.",
    grammar: "Prepositions with verbs",
    onWin:(catEl)=>{
      catEl.classList.add('jump');
      setTimeout(()=>catEl.classList.remove('jump'),900);
    }
  },
  {
    scene: {cat:"🐱", object:"🎈", goal:"🏁"},
    text:"The cat bats ___ the balloon.",
    choices:["at","on","in","with"],
    correct:0,
    explanation: "Use 'bat at' when hitting or striking something playfully. The cat bats at the balloon with its paws.",
    grammar: "Prepositions with verbs",
    onWin:(catEl)=>{
      catEl.classList.add('jump');
      setTimeout(()=>catEl.classList.remove('jump'),900);
    }
  },
  {
    scene: {cat:"🐱", object:"🛋️", goal:"🏁"},
    text:"The cat lounges ___ the couch.",
    choices:["on","under","next to","behind"],
    correct:0,
    explanation: "Use 'on' when positioned on top of furniture. The cat lounges on the couch for relaxation.",
    grammar: "Prepositions of place",
    onWin:(catEl)=>{
      catEl.style.transform = "translateX(280px)";
    }
  },
  {
    scene: {cat:"🐱", object:"🍦", goal:"🏁"},
    text:"The cat licks ___ the ice cream.",
    choices:["at","on","in","with"],
    correct:0,
    explanation: "Use 'lick at' when tasting something with the tongue. The cat licks at the ice cream to taste it.",
    grammar: "Prepositions with verbs",
    onWin:(catEl)=>{
      catEl.classList.add('jump');
      setTimeout(()=>catEl.classList.remove('jump'),900);
    }
  },
  {
    scene: {cat:"🐱", object:"🎁", goal:"🏁"},
    text:"The cat investigates ___ the gift.",
    choices:["at","on","in","with"],
    correct:0,
    explanation: "Use 'investigate at' when examining something closely. The cat investigates at the gift with curiosity.",
    grammar: "Prepositions with verbs",
    onWin:(catEl)=>{
      catEl.style.transform = "translateX(250px)";
    }
  },
  {
    scene: {cat:"🐱", object:"🪟", goal:"🏁"},
    text:"The cat looks ___ the window.",
    choices:["through","at","in","on"],
    correct:0,
    explanation: "Use 'look through' when seeing by means of something transparent. The cat looks through the window to see outside.",
    grammar: "Prepositions with verbs",
    onWin:(catEl)=>{
      catEl.classList.add('jump');
      setTimeout(()=>catEl.classList.remove('jump'),900);
    }
  },
  {
    scene: {cat:"🐱", object:"🎤", goal:"🏁"},
    text:"The cat meows ___ the microphone.",
    choices:["into","at","on","in"],
    correct:0,
    explanation: "Use 'meow into' when directing sound toward a device. The cat meows into the microphone to be heard.",
    grammar: "Prepositions with verbs",
    onWin:(catEl)=>{
      catEl.classList.add('jump');
      setTimeout(()=>catEl.classList.remove('jump'),900);
    }
  },
  {
    scene: {cat:"🐱", object:"🧭", goal:"🏁"},
    text:"The cat follows ___ the compass.",
    choices:["by","with","using","through"],
    correct:0,
    explanation: "Use 'follow by' when guided by something. The cat follows by the compass to find direction.",
    grammar: "Prepositions with verbs",
    onWin:(catEl)=>{
      catEl.style.transform = "translateX(300px)";
    }
  },
  {
    scene: {cat:"🐱", object:"🏆", goal:"🏁"},
    text:"The cat jumps ___ the trophy.",
    choices:["towards","over","under","around"],
    correct:0,
    explanation: "Use 'jump towards' when moving in the direction of something. The cat jumps towards the trophy to reach it.",
    grammar: "Prepositions of direction",
    onWin:(catEl)=>{
      catEl.classList.add('jump');
      setTimeout(()=> {
        catEl.classList.remove('jump');
        catEl.style.transform = "translateX(350px)";
      }, 900);
    }
  }
];

let current = 0;
let stats = {
  correct: 0,
  wrong: 0,
  total: levels.length,
  answered: 0
};

// Массив для хранения информации о неправильных ответах
let wrongAnswers = [];

// Функция для перемешивания массива
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Функция для получения перемешанных индексов
function getShuffledIndices(length) {
  const indices = Array.from({length}, (_, i) => i);
  return shuffleArray(indices);
}

const welcome=document.getElementById('welcome');
const game=document.getElementById('game');
const statsScreen=document.getElementById('stats');
const reviewScreen=document.getElementById('review');
const playBtn=document.getElementById('playBtn');
const homeBtn=document.getElementById('home');
const finishBtn=document.getElementById('finish');
const statsHomeBtn=document.getElementById('stats-home');
const reviewWrongBtn=document.getElementById('review-wrong');
const backToStatsBtn=document.getElementById('back-to-stats');
const nextBtn=document.getElementById('next');
const retryBtn=document.getElementById('retry');
const questionText=document.getElementById('questionText');
const choicesRoot=document.getElementById('choices');
const resultBox=document.getElementById('result');
const scene=document.getElementById('scene');
const cat=document.getElementById('cat');
const object=document.getElementById('object');
const goal=document.getElementById('goal');
const statsContent=document.getElementById('stats-content');
const reviewContent=document.getElementById('review-content');

function showWelcome(){
  welcome.classList.add('active');
  game.classList.remove('active');
  statsScreen.classList.remove('active');
  reviewScreen.classList.remove('active');
}

function startGame(){
  welcome.classList.remove('active');
  game.classList.add('active');
  statsScreen.classList.remove('active');
  reviewScreen.classList.remove('active');
  current=0;
  stats = { correct: 0, wrong: 0, total: levels.length, answered: 0 };
  wrongAnswers = []; // Очищаем массив неправильных ответов
  loadLevel();
}

function showStats(){
  game.classList.remove('active');
  statsScreen.classList.add('active');
  reviewScreen.classList.remove('active');
  
  const percentage = stats.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) : 0;
  let message = "";
  if (percentage >= 90) message = "Excellent! You're a cat language expert! 🐱";
  else if (percentage >= 70) message = "Great job! You know cats well! 😺";
  else if (percentage >= 50) message = "Good effort! Keep practicing! 🐾";
  else message = "Nice try! Practice makes perfect! 💪";
  
  statsContent.innerHTML = `
    <div class="stats-summary">${message}</div>
    <div class="stats-grid">
      <div class="stat-box correct">
        <div class="stat-number">${stats.correct}</div>
        <div class="stat-label">Correct Answers</div>
      </div>
      <div class="stat-box wrong">
        <div class="stat-number">${stats.wrong}</div>
        <div class="stat-label">Wrong Answers</div>
      </div>
      <div class="stat-box total">
        <div class="stat-number">${stats.answered}</div>
        <div class="stat-label">Questions Answered</div>
      </div>
      <div class="stat-box">
        <div class="stat-number">${percentage}%</div>
        <div class="stat-label">Success Rate</div>
      </div>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: ${percentage}%"></div>
    </div>
    <div class="percentage">${percentage}% Completed</div>
  `;
  
  // Показываем кнопку обзора только если есть неправильные ответы
  reviewWrongBtn.hidden = stats.wrong === 0;
}

function showReview(){
  statsScreen.classList.remove('active');
  reviewScreen.classList.add('active');
  
  if (wrongAnswers.length === 0) {
    reviewContent.innerHTML = "<p>No wrong answers to review!</p>";
    return;
  }
  
  let reviewHTML = "";
  wrongAnswers.forEach((wrong, index) => {
    const level = levels[wrong.levelIndex];
    reviewHTML += `
      <div class="review-item">
        <div class="review-question">Question ${index + 1}: ${level.text}</div>
        <div class="review-choices">
    `;
    
    level.choices.forEach((choice, choiceIndex) => {
      let choiceClass = "review-choice";
      if (choiceIndex === level.correct) {
        choiceClass += " correct";
      } else if (choiceIndex === wrong.userAnswer) {
        choiceClass += " wrong";
      }
      
      reviewHTML += `<div class="${choiceClass}">${choice}</div>`;
    });
    
    reviewHTML += `
        </div>
        <div style="margin-top:15px;padding:15px;background:#f8fafc;border-radius:8px;text-align:left">
          <div style="font-weight:700;margin-bottom:8px;color:#111827">✅ Correct answer: ${level.choices[level.correct]}</div>
          <div style="margin-bottom:12px;font-style:italic;color:#6b7280">${level.explanation}</div>
          <div style="background:#e0f2fe;padding:8px;border-radius:6px;font-size:14px">
            <span style="font-weight:600">Grammar rule:</span> ${level.grammar}
          </div>
        </div>
      </div>
    `;
  });
  
  reviewContent.innerHTML = reviewHTML;
}

function loadLevel(){
  const lvl=levels[current];
  cat.textContent=lvl.scene.cat;
  object.textContent=lvl.scene.object;
  goal.textContent=lvl.scene.goal;
  cat.style.transform='translateX(0)';
  questionText.textContent=lvl.text;
  resultBox.textContent='';
  resultBox.className='result';
  choicesRoot.innerHTML='';
  nextBtn.hidden=true;
  retryBtn.hidden=true;

  // Создаем перемешанные индексы
  const shuffledIndices = getShuffledIndices(lvl.choices.length);
  // Находим новый индекс правильного ответа
  const newCorrectIndex = shuffledIndices.indexOf(lvl.correct);

  // Создаем кнопки с перемешанными вариантами
  shuffledIndices.forEach((originalIndex, newIndex) => {
    const btn=document.createElement('button');
    btn.className='choice';
    btn.textContent=lvl.choices[originalIndex];
    btn.onclick=()=>onChoice(newIndex, newCorrectIndex, originalIndex);
    choicesRoot.appendChild(btn);
  });
}

function onChoice(idx, correctIndex, originalIndex) {
  const lvl=levels[current];
  const buttons=[...choicesRoot.children];
  buttons.forEach(b=>b.disabled=true);
  
  if(idx===correctIndex){
    buttons[idx].classList.add('correct');
    resultBox.textContent='Correct!';
    resultBox.classList.add('success');
    stats.correct++;
    stats.answered++;
    lvl.onWin(cat,object);
    if(current<levels.length-1) nextBtn.hidden=false;
    else {
      nextBtn.textContent = "Finish";
      nextBtn.hidden=false;
      nextBtn.onclick = showStats;
    }
  } else {
    buttons[idx].classList.add('wrong');
    resultBox.textContent='Wrong!';
    resultBox.classList.add('fail');
    stats.wrong++;
    stats.answered++;
    
    // Сохраняем информацию о неправильном ответе
    wrongAnswers.push({
      levelIndex: current,
      userAnswer: originalIndex,
      correctAnswer: lvl.correct
    });
    
    retryBtn.hidden=false;
    cat.classList.add('shake');
    setTimeout(()=>cat.classList.remove('shake'),500);
  }
}

function finishGame() {
  if (stats.answered > 0) {
    if (confirm("Are you sure you want to finish the game? Your current progress will be saved.")) {
      showStats();
    }
  } else {
    if (confirm("You haven't answered any questions yet. Do you want to exit to main menu?")) {
      showWelcome();
    }
  }
}

playBtn.onclick=startGame;
homeBtn.onclick=showWelcome;
finishBtn.onclick=finishGame;
statsHomeBtn.onclick=startGame;
reviewWrongBtn.onclick=showReview;
backToStatsBtn.onclick=()=>{reviewScreen.classList.remove('active'); statsScreen.classList.add('active');};
retryBtn.onclick=()=>loadLevel();
nextBtn.onclick=()=>{current++;loadLevel();};

showWelcome();