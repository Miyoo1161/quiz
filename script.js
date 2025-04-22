// Quiz questions and answers about the immune system
const questions = [
  {
    question: "What is the main job of the immune system?",
    options: ["To help us sleep", "To protect the body from germs", "To give us energy", "To build muscles"],
    answer: 1,
    explanation: "The immune system is your body's defense against infections and other harmful invaders. It helps protect you from disease by fighting off harmful substances."
  },
  {
    question: "What are germs?",
    options: ["Helpful vitamins", "Tiny things that can make us sick", "Muscles in our body", "A type of white blood cell"],
    answer: 1,
    explanation: "Germs are microscopic organisms that can cause disease. They include bacteria, viruses, fungi, and parasites."
  },
  {
    question: "Which type of cell fights disease?",
    options: ["Red blood cells", "Skin cells", "White blood cells", "Brain cells"],
    answer: 2,
    explanation: "White blood cells are the key players in your immune system. They identify and eliminate pathogens and are essential for immunity."
  },
  {
    question: "What is an antibody?",
    options: ["A type of bacteria", "A protein that helps fight infections", "A virus that causes disease", "A vitamin needed for immunity"],
    answer: 1,
    explanation: "Antibodies are proteins produced by your immune system that recognize and neutralize foreign substances like bacteria and viruses."
  },
  {
    question: "Which organ is part of the immune system?",
    options: ["Heart", "Lungs", "Thymus", "Stomach"],
    answer: 2,
    explanation: "The thymus is a specialized organ of the immune system where T cells mature. Other immune system organs include the spleen, lymph nodes, and bone marrow."
  },
  {
    question: "What are lymph nodes?",
    options: ["Small glands that filter harmful substances", "Bones in the immune system", "Special muscles that fight infection", "Cells that carry oxygen"],
    answer: 0,
    explanation: "Lymph nodes are small structures that filter lymph fluid and contain immune cells. They swell when fighting infections, showing the immune system is active."
  },
  {
    question: "What is inflammation?",
    options: ["A type of vitamin", "A sign that the body is healing itself", "A disease caused by bacteria", "A type of white blood cell"],
    answer: 1,
    explanation: "Inflammation is your body's protective response to injury or infection. Signs include redness, swelling, heat, and pain. It helps isolate the damaged area and promotes healing."
  },
  {
    question: "What is a vaccine?",
    options: ["A medicine that reduces fever", "A treatment that kills bacteria", "A substance that helps your body recognize and fight specific germs", "A vitamin that boosts your immune system"],
    answer: 2,
    explanation: "Vaccines contain weakened or killed parts of a specific organism that triggers an immune response, helping the body build immunity to a disease without causing illness."
  },
  {
    question: "What does 'immunity' mean?",
    options: ["Being completely healthy", "Protection against a specific disease", "Having a strong heart", "Taking vitamins regularly"],
    answer: 1,
    explanation: "Immunity refers to the body's ability to resist or fight off a particular infection or toxin due to the presence of specific antibodies or sensitized white blood cells."
  },
  {
    question: "What is an autoimmune disease?",
    options: ["A disease that spreads automatically", "When your immune system attacks your own body by mistake", "When you can't develop immunity", "A disease caused by bacteria"],
    answer: 1,
    explanation: "In autoimmune diseases, the immune system mistakenly attacks healthy cells in your own body, thinking they're foreign invaders. Examples include rheumatoid arthritis and lupus."
  },
  {
    question: "Which of these helps stop germs from entering your body?",
    options: ["Blood", "Skin", "Stomach", "Bones"],
    answer: 1,
    explanation: "The skin is your body's first line of defense against infections. It acts as a physical barrier to prevent germs from entering the body."
  },
  {
    question: "What are B cells responsible for?",
    options: ["Carrying oxygen in the blood", "Producing hormones", "Making antibodies", "Breaking down food"],
    answer: 2,
    explanation: "B cells are a type of white blood cell that produces antibodies to neutralize harmful substances like bacteria and viruses, playing a critical role in immunity."
  },
  {
    question: "Which of these is NOT part of the immune system?",
    options: ["Lymph nodes", "Spleen", "Appendix", "Gallbladder"],
    answer: 3,
    explanation: "The gallbladder is part of the digestive system, not the immune system. It stores and concentrates bile produced by the liver to help digest fats."
  },
  {
    question: "What happens when you get a fever?",
    options: ["Your immune system is shutting down", "Your body is creating more blood", "Your body is raising its temperature to kill germs", "Your lungs are not working properly"],
    answer: 2,
    explanation: "A fever is your body's way of fighting infection. The higher body temperature makes it harder for certain bacteria and viruses to survive."
  },
  {
    question: "What does the immune system do after you recover from an illness?",
    options: ["Forgets about the illness completely", "Remembers the germs to fight them faster next time", "Gets weaker", "Goes to sleep until the next infection"],
    answer: 1,
    explanation: "The immune system develops a memory of pathogens it has encountered. If the same pathogen attacks again, the immune response is faster and stronger - this is called immunological memory."
  },
  {
    question: "How do vaccines work?",
    options: ["They kill all bacteria in your body", "They give you medicine that cures disease", "They train your immune system to recognize specific germs", "They remove your white blood cells"],
    answer: 2,
    explanation: "Vaccines introduce a harmless form of a germ to your body, training your immune system to recognize and fight it without causing disease. This creates immunological memory."
  },
  {
    question: "What are T cells?",
    options: ["Cells that carry oxygen", "White blood cells that help coordinate immune responses", "Red blood cells that fight infections", "Skin cells that block germs"],
    answer: 1,
    explanation: "T cells are specialized white blood cells that coordinate immune responses and directly attack infected or cancerous cells. They work alongside B cells to provide immunity."
  },
  {
    question: "What is an allergen?",
    options: ["A substance that causes an allergic reaction", "A type of white blood cell", "A medicine that boosts immunity", "A harmful bacteria"],
    answer: 0,
    explanation: "Allergens are substances that are normally harmless but can cause allergic reactions in some people when the immune system overreacts to them. Common allergens include pollen, pet dander, and certain foods."
  },
  {
    question: "Which system works closely with the immune system to remove waste and toxins?",
    options: ["Digestive system", "Nervous system", "Lymphatic system", "Skeletal system"],
    answer: 2,
    explanation: "The lymphatic system works closely with the immune system to remove waste, toxins, and other unwanted materials. It contains lymph fluid, vessels, and nodes that help filter out harmful substances."
  },
  {
    question: "How does the immune system distinguish between your own cells and foreign invaders?",
    options: ["By their color", "By their size", "By recognizing specific proteins on cell surfaces", "By their shape"],
    answer: 2,
    explanation: "The immune system recognizes specific proteins (antigens) on cell surfaces. Your own cells have 'self' proteins that the immune system is trained not to attack. Foreign cells have different proteins that trigger an immune response."
  }
];

// Initialize variables
let currentQuestionIndex = 0;
let score = 0;
let username = "";
let answeredQuestions = [];
let startTime;
let endTime;
let highScore = parseInt(localStorage.getItem('highScore')) || 0;

function updateHighScore(currentScore) {
    if (currentScore > highScore) {
        highScore = currentScore;
        localStorage.setItem('highScore', highScore);
        alert("🎉 New High Score! 🎉");
    }
}

function showHighScore() {
    alert("Your High Score is: " + highScore);
}

// Load leaderboard from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
  loadLeaderboard();
  displayTopScores();
});

// Buddy functions have been removed

// Function to start the quiz
function startQuiz() {
  username = document.getElementById("username").value.trim();
  if (username === "") {
    alert("Oops! Please enter your name!");
    return;
  }
  
  // Reset score and start timer
  score = 0;
  startTime = new Date();
  
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  
  // Reset variables
  currentQuestionIndex = 0;
  score = 0;
  answeredQuestions = [];
  
  // Add welcome message
  if (!document.getElementById("quizWelcome")) {
    const welcomeDiv = document.createElement("div");
    welcomeDiv.id = "quizWelcome";
    welcomeDiv.className = "quiz-welcome";
    document.getElementById("quiz-container").insertBefore(welcomeDiv, document.getElementById("question-title"));
  }
  
  document.getElementById("quizWelcome").innerHTML = `👋 Nice to meet you, <strong>${username}</strong>!<br>🎯 Let's begin the challenge!`;
  
  showQuestion();
}

// Function to display the current question
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionTitle = document.getElementById("question-title");
  const questionContainer = document.getElementById("question-container");
  const progressFill = document.getElementById("progress-fill");
  const progressText = document.getElementById("progress-text");
  
  // Update question title and progress bar
  questionTitle.innerText = `Question ${currentQuestionIndex + 1}`;
  progressFill.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
  progressText.innerText = `Question ${currentQuestionIndex + 1}/${questions.length}`;
  
  // Generate HTML for question options
  let optionsHTML = `<p class="question">${currentQuestion.question}</p>`;
  
  currentQuestion.options.forEach((option, index) => {
    optionsHTML += `
      <div class="option-container">
        <input type="radio" name="answer" value="${index}" id="option${index}" />
        <label for="option${index}">${option}</label>
      </div>`;
  });
  
  questionContainer.innerHTML = optionsHTML;
  
  // Reset feedback container
  document.getElementById("feedback-container").style.display = "none";
  document.getElementById("submit-btn").style.display = "block";
  document.getElementById("next-btn").style.display = "none";
}

// Function to check if answer is correct with emoji feedback
function checkAnswer(isCorrect) {
  if (isCorrect) {
    score++;
    console.log("✅ Correct! Current score: " + score);
    alert("✅ Good job!");
  } else {
    console.log("❌ Incorrect! Current score: " + score);
    alert("❌ Oops! That's not quite right.");
  }
  
  // Proceed to the next question
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 500); // Short delay before moving to next question
}

// Function to submit the current answer
function submitAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    alert("Please select an answer!");
    return;
  }
  
  const answerIndex = parseInt(selectedOption.value);
  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = answerIndex === currentQuestion.answer;
  
  // Highlight correct and incorrect answers
  const optionContainers = document.querySelectorAll('.option-container');
  
  // Mark all options
  optionContainers.forEach((container, index) => {
    if (index === currentQuestion.answer) {
      container.classList.add('correct');
    } else if (index === answerIndex && answerIndex !== currentQuestion.answer) {
      container.classList.add('incorrect');
    }
    
    // Disable all radio buttons
    const radioButton = container.querySelector('input[type="radio"]');
    radioButton.disabled = true;
  });
  
  // Show feedback
  const feedbackContainer = document.getElementById("feedback-container");
  const feedbackMessage = document.getElementById("feedback-message");
  const explanation = document.getElementById("explanation");
  
  feedbackContainer.style.display = "block";
  
  if (isCorrect) {
    feedbackMessage.textContent = "✅ Correct! Well done!";
    feedbackMessage.className = "feedback-message correct";
  } else {
    feedbackMessage.textContent = `❌ Incorrect! The right answer is: ${currentQuestion.options[currentQuestion.answer]}`;
    feedbackMessage.className = "feedback-message incorrect";
  }
  
  explanation.textContent = currentQuestion.explanation;
  
  // Update buttons
  document.getElementById("submit-btn").style.display = "none";
  document.getElementById("next-btn").style.display = "block";
  
  // Record answered question
  answeredQuestions.push({
    questionIndex: currentQuestionIndex,
    userAnswer: answerIndex,
    correct: isCorrect
  });
  
  // Alternative: Use the checkAnswer function directly
  // checkAnswer(isCorrect);
}

// Function to move to the next question
function nextQuestion() {
  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// Function to show the final result (original version)
function showResult() {
  finishQuiz(); // Use the new enhanced version
}

// Enhanced function to finish the quiz
function finishQuiz() {
  endTime = new Date();
  let totalTime = Math.floor((endTime - startTime) / 1000);

  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("result-screen").style.display = "block";
  
  // Calculate actual score (each correct answer is worth 1 point)
  const finalScore = answeredQuestions.filter(q => q.correct).length;
  
  // Save score to leaderboard and check high score
  saveScore(username, finalScore, totalTime);
  updateHighScore(finalScore);
  
  // Get the current leaderboard
  let results = JSON.parse(localStorage.getItem("quizLeaderboard")) || [];

  // Play applause sound
  try {
    let applause = new Audio("https://www.soundjay.com/human/applause-8.mp3");
    applause.play().catch(error => {
      console.log("Audio playback failed:", error);
    });
  } catch (error) {
    console.log("Error with audio:", error);
  }
  
  // Update the username and score display
  document.getElementById("result-username").textContent = username;
  document.getElementById("final-score").textContent = finalScore;
  document.getElementById("score-badge").textContent = finalScore;
  
  // Add completion time
  const timeText = document.createElement("p");
  timeText.innerHTML = `Time taken: <strong>${totalTime} seconds</strong>`;
  document.querySelector(".result-card").insertBefore(timeText, document.getElementById("score-badge"));
  
  // Add time feedback to result screen
  if (!document.getElementById("time-feedback")) {
    const timeFeedback = document.createElement("div");
    timeFeedback.id = "time-feedback";
    timeFeedback.className = "time-feedback";
    document.querySelector(".result-card").appendChild(timeFeedback);
  }
  
  document.getElementById("time-feedback").innerHTML = 
    `<h3>🎊 You finished in <strong>${totalTime}</strong> seconds! Great job, ${username}! 🎉</h3>`;
  
  // Show enhanced ranking
  showRanking(results, totalTime);
}

// Function to restart the quiz
function restartQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  answeredQuestions = [];
  
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("start-screen").style.display = "block";
  document.getElementById("username").value = "";
}

// Function to clear all quiz results from localStorage
function clearResults() {
  let pass = prompt("Enter admin password to clear results:");
  if (pass === "letmein123") {
    localStorage.removeItem("quizLeaderboard");
    // Initialize empty leaderboard
    localStorage.setItem("quizLeaderboard", JSON.stringify([]));
    // Refresh all displays
    displayTopScores();
    displayLeaderboard();
    // Update ranking area if it exists
    if (document.getElementById("ranking-area")) {
      document.getElementById("ranking-area").innerHTML = "<h2>🏆 TOP 5 PLAYERS 🏆</h2><p class='no-scores'>No scores yet!</p>";
    }
    alert("✅ All quiz results have been cleared!");
  } else {
    alert("❌ Incorrect password. Reset denied.");
  }
}

// Function to save score to localStorage
function saveScore(username, score, time) {
  let leaderboard = JSON.parse(localStorage.getItem("quizLeaderboard")) || [];
  
  // Check if user already exists
  const existingUserIndex = leaderboard.findIndex(entry => entry.username === username);
  
  if (existingUserIndex !== -1) {
    // Update score if it's better than previous, or if same score but faster time
    if (score > leaderboard[existingUserIndex].score || 
       (score === leaderboard[existingUserIndex].score && time < leaderboard[existingUserIndex].time)) {
      leaderboard[existingUserIndex].score = score;
      leaderboard[existingUserIndex].time = time;
      leaderboard[existingUserIndex].date = new Date().toISOString();
    }
  } else {
    // Add new user
    leaderboard.push({
      username: username,
      score: score,
      time: time,
      date: new Date().toISOString()
    });
  }
  
  // Sort by score (high to low), then by time (low to high)
  leaderboard.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    } else {
      return a.time - b.time;
    }
  });
  
  // Save to localStorage
  localStorage.setItem("quizLeaderboard", JSON.stringify(leaderboard));
}

// Function to load and display leaderboard
function displayLeaderboard() {
  const leaderboardList = document.getElementById("leaderboard-list");
  let leaderboard = JSON.parse(localStorage.getItem("quizLeaderboard")) || [];
  
  // Sort by score (high to low), then by time (low to high)
  leaderboard.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    } else {
      return a.time - b.time;
    }
  });
  
  // Clear previous entries
  leaderboardList.innerHTML = "";
  
  // Display leaderboard entries
  leaderboard.forEach((entry, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${index + 1}. ${entry.username}</span> 
      <span>${entry.score} points (${entry.time || "N/A"} sec)</span>
    `;
    leaderboardList.appendChild(listItem);
  });
  
  // If no entries
  if (leaderboard.length === 0) {
    const listItem = document.createElement("li");
    listItem.className = "no-scores";
    listItem.textContent = "No scores yet!";
    leaderboardList.appendChild(listItem);
  }
}

// Function to load leaderboard
function loadLeaderboard() {
  if (!localStorage.getItem("quizLeaderboard")) {
    localStorage.setItem("quizLeaderboard", JSON.stringify([]));
  }
}

// Enhanced function to show ranking with medal emojis and highlighting
function showRanking(results, myTime) {
  // Sort by score (high to low), then by time (low to high)
  results.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    } else {
      return a.time - b.time;
    }
  });

  let rankText = `<h2>🏆 TOP 5 PLAYERS 🏆</h2>`;
  const placeLabels = ["🥇 1st", "🥈 2nd", "🥉 3rd", "🎖️ 4th", "🏅 5th"];

  let myRank = -1;

  results.slice(0, 5).forEach((player, index) => {
    let highlight = "";
    if (player.username === username && player.time === myTime) {
      myRank = index + 1;
      highlight = " style='background: gold; padding: 5px; border-radius: 8px;'";
    }
    rankText += `<p${highlight}><strong>${placeLabels[index]}</strong>: ${player.username} — ${player.score} pts (${player.time} sec)</p>`;
  });

  if (results.length > 5) {
    rankText += `<p style="font-style: italic;">Only the top 5 are shown.</p>`;
  }

  if (myRank > 0) {
    rankText = `<h2 style="color: orange;">🎉 You're #${myRank}! ${placeLabels[myRank - 1]} 🎉</h2>` + rankText;
  }

  // Create a div for result area if it doesn't exist
  if (!document.getElementById("ranking-area")) {
    const rankingArea = document.createElement("div");
    rankingArea.id = "ranking-area";
    document.getElementById("result-screen").appendChild(rankingArea);
  }
  
  document.getElementById("ranking-area").innerHTML = rankText;
}

// Function to display top scores on start screen
function displayTopScores() {
  const topScoresList = document.getElementById("top-scores-list");
  let leaderboard = JSON.parse(localStorage.getItem("quizLeaderboard")) || [];
  
  // Sort by score (high to low), then by time (low to high)
  leaderboard.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    } else {
      return a.time - b.time;
    }
  });
  
  // Clear previous entries
  topScoresList.innerHTML = "";
  
  // Display top 5 scores
  const topScores = leaderboard.slice(0, 5);
  
  topScores.forEach((entry, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${index + 1}. ${entry.username}</span> 
      <span>${entry.score} pts (${entry.time || "N/A"} sec)</span>
    `;
    topScoresList.appendChild(listItem);
  });
  
  // If no entries
  if (topScores.length === 0) {
    const listItem = document.createElement("li");
    listItem.className = "no-scores";
    listItem.textContent = "No scores yet. Be the first!";
    topScoresList.appendChild(listItem);
  }
}
