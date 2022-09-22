// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1e000800040000000000000000000000000000010100000000000000000000000000040001010101000000000001000000000101010100000001000000000000040001000000000000000001000100000000000101000000010100000000000101000000000000010101010101000000000101010000000101010000000001010100010101000100000000010000000000000100000001010000000000000000000000000000000000000100000000000000000001010000030000000000000000000000000000000100000000000000000100010000020202020202020202020202020202020202020202020202020100010000`, img`
. . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . 
. . 2 2 2 2 . . . . . 2 . . . . 2 2 2 2 . . . 2 . . . . . . 
. . 2 . . . . . . . . 2 . 2 . . . . . 2 2 . . . 2 2 . . . . 
. 2 2 . . . . . . 2 2 2 2 2 2 . . . . 2 2 2 . . . 2 2 2 . . 
2 2 2 2 2 . 2 2 2 2 2 . . . . 2 . . . . . . 2 . . . 2 2 . . 
. . . . . . . . . . . . . . . 2 2 . . . . . 2 . . . 2 2 . . 
. . . . . . . . . . . . . . . . 2 . . . . . . . . 2 2 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 . . 
`, [myTiles.transparency16,sprites.builtin.oceanDepths7,sprites.builtin.oceanSand4,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level0":
            case "level4":return tiles.createTilemap(hex`1400080000000000000001000000000100000000000000000000000000000101000101000000010100000100000000000000000101030000000101030103010000000000000000000100000001010103000100000000000001010000000000010103000000010000000000010000000000000001010000000001000002000001010000030301010400000001000000000101010101010103030101010101010101010103`, img`
. . . . . . 2 . . . . 2 . . . . . . . . 
2 2 2 2 . . 2 2 . 2 2 2 . . 2 2 . . 2 . 
2 2 2 . . . . 2 2 . . . . 2 2 . 2 . 2 . 
2 2 . . . . . . 2 . . . 2 2 2 . . 2 . . 
. . . . 2 2 . . . . . 2 2 . . . . 2 . . 
. . . 2 . . . . . . . 2 2 . . . . 2 . . 
. . . 2 2 . . . . 2 2 . . . . 2 . . . . 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,sprites.dungeon.floorMixed,myTiles.tile3,sprites.dungeon.hazardLava1,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1400080000000003000000000004000000030000000000000003030000000000000000030303000000000305000000030000030000000000000000000000000300000000000000030000030300000000000003000000000000030300000000030000000300000303000000000000030304040003040000030404000301000000000000040404000304040000030404030202020404020202020202020202040202020202`, img`
2 . . . . . . . . . . . . 2 . . . . . . 
2 2 2 . . . . . . . . 2 2 2 . . . . 2 . 
2 . . 2 . . 2 . . . . . . . . . . . . 2 
2 . . . . . . 2 . . 2 2 . . . . . . 2 . 
2 . . . . 2 2 . . . . 2 . . . 2 . . 2 2 
2 . . . . . 2 2 . . . 2 . . . 2 . . 2 2 
. . . . . . . . . . . 2 . . . . 2 . . 2 
2 2 2 . . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.floorDark0,sprites.dungeon.floorMixed,sprites.dungeon.hazardLava1,sprites.dungeon.doorOpenSouth], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
