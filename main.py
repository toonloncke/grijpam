afstand = 0
hoek = 0

def on_forever():
    global afstand, hoek
    afstand = Kitronik_Move_Motor.measure()
    if afstand <= 10:
        hoek = pins.map(afstand, 0, 10, 0, 180)
        Kitronik_Move_Motor.write_servo_pin(Kitronik_Move_Motor.ServoSelection.SERVO1, hoek)
    else:
        Kitronik_Move_Motor.write_servo_pin(Kitronik_Move_Motor.ServoSelection.SERVO1, 0)
basic.forever(on_forever)
