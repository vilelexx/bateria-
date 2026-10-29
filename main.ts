namespace SpriteKind {
    export const Animal = SpriteKind.create()
    export const Arca = SpriteKind.create()
    export const Obstaculo = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Obstaculo, function (jogador, obstaculo) {
    obstaculo.destroy()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Animal, function (jogador, animal) {
    animal.destroy()
    animais += 1
    info.changeScoreBy(10)
    game.splash("Animal resgatado!", "" + animais + " de 6")
})
function criarObstaculo () {
    obstaculo = sprites.create(img`
        . . 5 5 5 . . 
        . 5 5 5 5 5 . 
        5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 
        . 5 5 5 5 5 . 
        . . 5 5 5 . . 
        `, SpriteKind.Obstaculo)
    obstaculo.setPosition(randint(20, 140), randint(20, 100))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Arca, function (jogador, destino) {
    if (animais >= 6) {
        game.over(true, effects.confetti)
    } else {
        game.showLongText("Ainda faltam animais! Continue procurando.", DialogLayout.Bottom)
    }
})
info.onCountdownEnd(function () {
    game.over(false)
})
info.onLifeZero(function () {
    game.over(false)
})
function criarAnimal () {
    animal = sprites.create(img`
        . . . . . . . . . . 
        . . . 1 1 . 1 1 . . 
        . . 1 1 1 1 1 1 1 . 
        . 1 1 f 1 1 f 1 1 . 
        . 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 . . . 
        . . 1 1 . . 1 1 . . 
        `, SpriteKind.Animal)
    animal.setPosition(randint(15, 145), randint(15, 105))
}
let animal: Sprite = null
let obstaculo: Sprite = null
let animais = 0
scene.setBackgroundColor(9)
game.splash("A ARCA DE NOÉ", "Uma missão de fé!")
game.showLongText("Deus pediu a Noé que construísse uma arca e protegesse os animais. Ajude Noé a reunir 6 animais!", DialogLayout.Full)
scene.setBackgroundColor(7)
let noé = sprites.create(img`
    . . . . . 8 8 8 . . . . . 
    . . . . 8 8 8 8 8 . . . . 
    . . . . 1 1 1 1 1 . . . . 
    . . . . 1 f 1 f 1 . . . . 
    . . . . 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 . . . . . 
    . . . . 4 4 4 4 4 . . . . 
    . . . 4 4 4 4 4 4 4 . . . 
    . . . 4 4 4 4 4 4 4 . . . 
    . . . . 4 4 . 4 4 . . . . 
    . . . . 4 4 . 4 4 . . . . 
    . . . . 4 4 . 4 4 . . . . 
    `, SpriteKind.Player)
controller.moveSprite(noé, 100, 100)
noé.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
info.startCountdown(90)
for (let index = 0; index < 6; index++) {
    criarAnimal()
}
for (let index = 0; index < 4; index++) {
    criarObstaculo()
}
let arca = sprites.create(img`
    . . . . . . . . . . . . . 
    . . 6 6 6 6 6 6 6 6 6 . . 
    . 6 6 6 6 6 6 6 6 6 6 6 . 
    6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 
    . 6 6 6 6 6 6 6 6 6 6 6 . 
    . . 6 6 6 6 6 6 6 6 6 . . 
    `, SpriteKind.Arca)
arca.setPosition(145, 100)
game.onGameOver(function (vitoria) {
                                                                                                                                                                                                                                                                                                                    if (vitoria) {
                                                                                                                                                                                                                                                                                                                            game.showLongText(
                                                                                                                                                                                                                                                                                                                                        "Parabéns! Você ajudou Noé a proteger os animais. Em Gênesis 9, Deus estabelece sua aliança com Noé. Aprendemos a confiar em Deus e cuidar da criação.",
                                                                                                                                                                                                                                                                                                                                                    DialogLayout.Full
                                                                                                                                                                                                                                                                                                                                                            )
                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                        game.showLongText(
                                                                                                                                                                                                                                                                                                                                                                                    "Não desista! A história de Noé nos ensina sobre fé, obediência e perseverança.",
                                                                                                                                                                                                                                                                                                                                                                                                DialogLayout.Full
                                                                                                                                                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                            })
