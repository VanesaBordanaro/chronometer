const clock = document.getElementById("clock"),
    playBtn = document.getElementById("play-btn"),
    stopBtn = document.getElementById("stop-btn"),
    resetBtn = document.getElementById("reset-btn");

let stopWatchInterval;
let runningTime = 0;

const play = () => {
    playBtn.classList.add("running")
    start()
}

const start = () => {
    let startTime = Date.now() - runningTime
    stopWatchInterval = setInterval( () => {
        runningTime = Date.now() - startTime
        clock.textContent = calculateTime(runningTime)
    }, 1000)
}

const calculateTime = runningTime => {
    const totalSeconds = Math.floor(runningTime/1000)
    const totalMinutes = Math.floor(totalSeconds/60)
    const totalHour = Math.floor(totalMinutes/60)

    const displaySeconds = (totalSeconds % 60).toString().padStart(2, "0")
    const displayMinutes = totalMinutes.toString().padStart(2, "0")
    const displayHour = totalHour.toString().padStart(2,"0")

    return `${displayHour} : ${displayMinutes} : ${displaySeconds}`
}

const stop = () => {
    clearInterval(stopWatchInterval)
}

const reset = () => {
    runningTime = 0
    clearInterval(stopWatchInterval)
    clock.textContent = "00 : 00 : 00"
}