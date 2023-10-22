import questions from './questions.json' assert { type: 'json' }
import users from './users.json' assert { type: 'json' }

// Get all DOM elements
const usernameInput = document.getElementById('username')
const validationMsg = document.getElementById('validation-msg')
const startBtn = document.getElementById('start-btn')
const nextBtns = document.querySelectorAll('.next-question')
const playAgainBtn = document.getElementById('play-again')
const startSection = document.getElementById('start')
const currentUserDisplay = document.getElementById('user-display')
const questionGroups = document.querySelectorAll('.question')
const endSection = document.getElementById('game-end')
const finalScoreSpan = document.querySelector('span[id="score"]')
const answerButtons = document.querySelectorAll('.answer')
const modal = document.getElementById('modal');
const openModal = document.getElementById('show-details');
const closeModal = document.getElementById('modal-close');
const questionsInModal = document.querySelectorAll('.game-question')
const userStatsItems = document.querySelectorAll('.user-stat')

// Create array from all the answer buttons
const answers = [...answerButtons]


// Create array from buttons which trigger the displayed <section> element to change
const nextSectionTriggers = [startBtn, ...nextBtns]


// Create an array from all the <section> elements
const sections = [startSection, ...questionGroups, endSection]


// Create an array from all question <li> elements in detailed results modal
const resultsQuestions = [ ...questionsInModal ]


// Create an array from all stat <li> elements at the end of the game
const resultsStats = [ ...userStatsItems ]


// Create array from the questions.json object keys, which will help in selecting random questions
const questionsKeysArray = Object.keys(questions)


// Create array from the users.json object values
const usersValuesArray = Object.values(users)


// Create a new set which will store 10 random questions
const randomTen = new Set()


// Create a set to store fake users
const gameUsers = new Set()


// Create a variable to store current user's chosen username
let currentUser


// Create a variable to store the user's running score
let runningScore = 0


// Declare necessary variables for cycling through the <section> elements
const lastSectionIndex = sections.length - 1
let displayedSectionIndex = 0
let sectionOffset


// Declare necessary variables to display a question and store the selected answer
let nextQuestionNumber = displayedSectionIndex + 1
let currentQuestion
let selectedAnswer
let correctAnswer
let userSelection = false


// Create map to store detailed results
const currentUserDetailedResults = new Map()
currentUserDetailedResults.set("results", [])


// Create map to store all users stats
const usersStats = new Map()
usersStats.set("stats", [])

// Add fake users’ usernames to gameUsers Set and the full fake user objects to userStats Map
for (const user of usersValuesArray) {
  gameUsers.add(user.username)
  usersStats.entries().next().value[1].push(user)
}

// Add 10 random questions from JSON file to the randomTen array
while (randomTen.size < 10) {
  const randomIndex = Math.floor(Math.random() * questionsKeysArray.length)
  const randomObjectKey = questionsKeysArray[randomIndex]
  if (randomTen.has(questions[randomObjectKey])) {
    continue;
  } else {
    randomTen.add(questions[randomObjectKey])
  }
}


// Get access to the set's values
const randomQuestionSet = randomTen.values()