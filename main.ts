input.onButtonPressed(Button.A, function () {
    // merge inainte pt 2 sec
    wuKong.setAllMotor(50, 50)
    basic.pause(2000)
    wuKong.stopAllMotor()
    // se orienteaza spre dreapta
    wuKong.setAllMotor(50, 0)
    basic.pause(500)
    wuKong.stopAllMotor()
    // merge inainte pt 2 sec
    wuKong.setAllMotor(50, 50)
    basic.pause(2000)
    wuKong.stopAllMotor()
})
basic.showIcon(IconNames.Tortoise)
