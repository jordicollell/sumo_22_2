let P5 = 0
let P9 = 0
let alerta_2 = 0
let gir = 0
let P11 = 0
let sonar_2 = 0
let sonar_1 = 0
let alerta_1 = 0
function davant () {
    while (P5 == 1 && P9 == 1 && alerta_2 == 0) {
        motorbit.forward(100)
    }
    if (alerta_2 == 1) {
        darrere()
    }
}
function enrrere_girar () {
    motorbit.back(100)
    basic.pause(1000)
    motorbit.brake()
    gir = randint(0, 1)
    if (gir == 0) {
        motorbit.freestyle(50, -50)
    } else {
        motorbit.freestyle(-50, 50)
    }
}
function darrere () {
    while (P11 == 1) {
        motorbit.forward(100)
    }
}
basic.forever(function () {
    P5 = pins.digitalReadPin(DigitalPin.P5)
    P9 = pins.digitalReadPin(DigitalPin.P9)
    P11 = pins.digitalReadPin(DigitalPin.P11)
})
basic.forever(function () {
    sonar_2 = sonar.ping(
    DigitalPin.P15,
    DigitalPin.P16,
    PingUnit.Centimeters
    )
    if (sonar_2 > 2 && sonar_2 < 40) {
        alerta_2 = 1
    }
})
basic.forever(function () {
    sonar_1 = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P14,
    PingUnit.Centimeters
    )
    if (sonar_1 > 2 && sonar_1 < 40) {
        alerta_1 = 1
    }
})
