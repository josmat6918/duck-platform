scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    tiles.setCurrentTilemap(tilemap`level0`)
    tiles.placeOnRandomTile(cluck, assets.tile`myTile1`)
    scene.setBackgroundColor(1)
    spooky_scary = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        .......ffb1111ff........
        ......fb1111111bf.......
        ......f111111111f.......
        .....ffff1111111df......
        ....fb111c1dd111df......
        ....ffb1b1fdcf11bf......
        .....ffbfbfb11111f......
        ......ffffcfdb1b1f......
        .......fcccfcfbfbf......
        ........ffffffffff......
        .........ffffff.........
        .........ffffff.........
        .....f..fffffff.........
        .....fffffffff..........
        ......fffffff...........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    spooky_scary.follow(cluck, 40)
    spooky_scary.setPosition(20, 8)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cluck.isHittingTile(CollisionDirection.Bottom)) {
        cluck.vy = -125
    }
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
let spooky_scary: Sprite = null
let cluck: Sprite = null
cluck = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
cluck.ay = 125
controller.moveSprite(cluck, 100, 0)
spooky_scary = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    .........fffff..........
    .......ffb1111ff........
    ......fb1111111bf.......
    ......f111111111f.......
    .....ffff1111111df......
    ....fb111c1dd111df......
    ....ffb1b1fdcf11bf......
    .....ffbfbfb11111f......
    ......ffffcfdb1b1f......
    .......fcccfcfbfbf......
    ........ffffffffff......
    .........ffffff.........
    .........ffffff.........
    .....f..fffffff.........
    .....fffffffff..........
    ......fffffff...........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Food)
spooky_scary.follow(cluck, 40)
scene.cameraFollowSprite(cluck)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnRandomTile(cluck, assets.tile`myTile`)
spooky_scary.setPosition(20, 8)
