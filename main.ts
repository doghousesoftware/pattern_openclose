input.onButtonPressed(Button.A, function () {
    state = 1
})
function doSomething (param: number) {
    basic.showNumber(param)
}
input.onButtonPressed(Button.B, function () {
    state = 0
})
let state = 0
state = 0
basic.forever(function () {
    if (state == 1) {
        doSomething(input.lightLevel())
    } else {
        basic.clearScreen()
    }
})
