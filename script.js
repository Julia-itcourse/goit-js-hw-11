//? task 1

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
]

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//? task 2

//? task 3 - timer

// const refs = {
//   sec: document.querySelector('[data-value="secs"]'),
//   min: document.querySelector('[data-value="mins"]'),
//   hour: document.querySelector('[data-value="hours"]'),
//   day: document.querySelector('[data-value="days"]'),
// }

// const timer = {
//   start() {
//     const targetTime = new Date("Sept 01, 2020")

//     setInterval(() => {
//       const currentTime = Date.now()

//       const delta = targetTime - currentTime

//       updateTime(delta)
//     }, 1000)
//   },
// }

// function updateTime(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)))
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   )
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000))

//   refs.sec.textContent = secs
//   refs.min.textContent = mins
//   refs.hour.textContent = hours
//   refs.day.textContent = days
// }

// function pad(value) {
//   return String(value).padStart(2, "0")
// }

// timer.start()
