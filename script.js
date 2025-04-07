let left = document.querySelector(".left")
let right = document.querySelector(".right")
let soat = document.querySelector(".logo")
let count = 0
let arr = ["./Watches (1).png", "./Watches (2).png", "./Watches.png"]
soat.src = arr[count]

left.addEventListener("click", () => {
    if (count > 0) {
        count--
        soat.src = arr[count]

    }

})

right.addEventListener("click", () => {

    if (count < arr.length - 1) {
        count++
        soat.src = arr[count]

    }
})