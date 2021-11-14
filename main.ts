let afstand = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1e+52; index++) {
        afstand = Kitronik_Move_Motor.measure()
        basic.pause(100)
        while (afstand > 10) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 20)
        }
        Kitronik_Move_Motor.stop()
        Kitronik_Move_Motor.beepHorn()
        basic.pause(100)
        while (afstand > 2) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 3)
        }
        Kitronik_Move_Motor.stop()
        Kitronik_Move_Motor.beepHorn()
        basic.pause(100)
        while (afstand < 100) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 20)
        }
        Kitronik_Move_Motor.stop()
        Kitronik_Move_Motor.beepHorn()
    }
})
