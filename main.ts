basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
    music.playMelody("C D E - E D C - ", 120)
})
