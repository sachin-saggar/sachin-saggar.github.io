gdjs.bossBattleCode = {};
gdjs.bossBattleCode.GDPlayerObjects1_1final = [];

gdjs.bossBattleCode.GDPlayerObjects1= [];
gdjs.bossBattleCode.GDPlayerObjects2= [];
gdjs.bossBattleCode.GDPlayerObjects3= [];
gdjs.bossBattleCode.GDPlayerHitBoxObjects1= [];
gdjs.bossBattleCode.GDPlayerHitBoxObjects2= [];
gdjs.bossBattleCode.GDPlayerHitBoxObjects3= [];
gdjs.bossBattleCode.GDAirmanObjects1= [];
gdjs.bossBattleCode.GDAirmanObjects2= [];
gdjs.bossBattleCode.GDAirmanObjects3= [];
gdjs.bossBattleCode.GDendOrbObjects1= [];
gdjs.bossBattleCode.GDendOrbObjects2= [];
gdjs.bossBattleCode.GDendOrbObjects3= [];
gdjs.bossBattleCode.GDbackgroundObjects1= [];
gdjs.bossBattleCode.GDbackgroundObjects2= [];
gdjs.bossBattleCode.GDbackgroundObjects3= [];
gdjs.bossBattleCode.GDblocksObjects1= [];
gdjs.bossBattleCode.GDblocksObjects2= [];
gdjs.bossBattleCode.GDblocksObjects3= [];
gdjs.bossBattleCode.GDpreBoss1Objects1= [];
gdjs.bossBattleCode.GDpreBoss1Objects2= [];
gdjs.bossBattleCode.GDpreBoss1Objects3= [];
gdjs.bossBattleCode.GDtextAreaObjects1= [];
gdjs.bossBattleCode.GDtextAreaObjects2= [];
gdjs.bossBattleCode.GDtextAreaObjects3= [];
gdjs.bossBattleCode.GDpreBoss2Objects1= [];
gdjs.bossBattleCode.GDpreBoss2Objects2= [];
gdjs.bossBattleCode.GDpreBoss2Objects3= [];
gdjs.bossBattleCode.GDpreBoss3Objects1= [];
gdjs.bossBattleCode.GDpreBoss3Objects2= [];
gdjs.bossBattleCode.GDpreBoss3Objects3= [];
gdjs.bossBattleCode.GDpreBoss4Objects1= [];
gdjs.bossBattleCode.GDpreBoss4Objects2= [];
gdjs.bossBattleCode.GDpreBoss4Objects3= [];
gdjs.bossBattleCode.GDPlayerHitBoxObjects1= [];
gdjs.bossBattleCode.GDPlayerHitBoxObjects2= [];
gdjs.bossBattleCode.GDPlayerHitBoxObjects3= [];
gdjs.bossBattleCode.GDPlayerObjects1= [];
gdjs.bossBattleCode.GDPlayerObjects2= [];
gdjs.bossBattleCode.GDPlayerObjects3= [];
gdjs.bossBattleCode.GDPlayerMugshotObjects1= [];
gdjs.bossBattleCode.GDPlayerMugshotObjects2= [];
gdjs.bossBattleCode.GDPlayerMugshotObjects3= [];
gdjs.bossBattleCode.GDbossMugshotObjects1= [];
gdjs.bossBattleCode.GDbossMugshotObjects2= [];
gdjs.bossBattleCode.GDbossMugshotObjects3= [];
gdjs.bossBattleCode.GDCopyOfAirmanObjects1= [];
gdjs.bossBattleCode.GDCopyOfAirmanObjects2= [];
gdjs.bossBattleCode.GDCopyOfAirmanObjects3= [];
gdjs.bossBattleCode.GDbusterShotObjects1= [];
gdjs.bossBattleCode.GDbusterShotObjects2= [];
gdjs.bossBattleCode.GDbusterShotObjects3= [];
gdjs.bossBattleCode.GDtornadoObjects1= [];
gdjs.bossBattleCode.GDtornadoObjects2= [];
gdjs.bossBattleCode.GDtornadoObjects3= [];

gdjs.bossBattleCode.conditionTrue_0 = {val:false};
gdjs.bossBattleCode.condition0IsTrue_0 = {val:false};
gdjs.bossBattleCode.condition1IsTrue_0 = {val:false};
gdjs.bossBattleCode.condition2IsTrue_0 = {val:false};
gdjs.bossBattleCode.conditionTrue_1 = {val:false};
gdjs.bossBattleCode.condition0IsTrue_1 = {val:false};
gdjs.bossBattleCode.condition1IsTrue_1 = {val:false};
gdjs.bossBattleCode.condition2IsTrue_1 = {val:false};


gdjs.bossBattleCode.eventsList0x9c45d8 = function(runtimeScene) {

{

gdjs.bossBattleCode.GDPlayerHitBoxObjects2.createFrom(gdjs.bossBattleCode.GDPlayerHitBoxObjects1);


gdjs.bossBattleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.bossBattleCode.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( !(gdjs.bossBattleCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.bossBattleCode.condition0IsTrue_0.val = true;
        gdjs.bossBattleCode.GDPlayerHitBoxObjects2[k] = gdjs.bossBattleCode.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.bossBattleCode.GDPlayerHitBoxObjects2.length = k;}if (gdjs.bossBattleCode.condition0IsTrue_0.val) {
gdjs.bossBattleCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.bossBattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.bossBattleCode.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

/* Reuse gdjs.bossBattleCode.GDPlayerHitBoxObjects1 */

gdjs.bossBattleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.bossBattleCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.bossBattleCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.bossBattleCode.condition0IsTrue_0.val = true;
        gdjs.bossBattleCode.GDPlayerHitBoxObjects1[k] = gdjs.bossBattleCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.bossBattleCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.bossBattleCode.condition0IsTrue_0.val) {
gdjs.bossBattleCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.bossBattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


}; //End of gdjs.bossBattleCode.eventsList0x9c45d8
gdjs.bossBattleCode.mapOfGDgdjs_46bossBattleCode_46GDbusterShotObjects1Objects = Hashtable.newFrom({"busterShot": gdjs.bossBattleCode.GDbusterShotObjects1});gdjs.bossBattleCode.mapOfGDgdjs_46bossBattleCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.bossBattleCode.GDPlayerObjects1});gdjs.bossBattleCode.mapOfGDgdjs_46bossBattleCode_46GDtornadoObjects1Objects = Hashtable.newFrom({"tornado": gdjs.bossBattleCode.GDtornadoObjects1});gdjs.bossBattleCode.eventsList0xb2358 = function(runtimeScene) {

{


gdjs.bossBattleCode.condition0IsTrue_0.val = false;
{
gdjs.bossBattleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.bossBattleCode.condition0IsTrue_0.val) {
gdjs.bossBattleCode.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
gdjs.bossBattleCode.GDPlayerMugshotObjects1.createFrom(runtimeScene.getObjects("PlayerMugshot"));
gdjs.bossBattleCode.GDbossMugshotObjects1.createFrom(runtimeScene.getObjects("bossMugshot"));
gdjs.bossBattleCode.GDpreBoss1Objects1.createFrom(runtimeScene.getObjects("preBoss1"));
gdjs.bossBattleCode.GDpreBoss2Objects1.createFrom(runtimeScene.getObjects("preBoss2"));
gdjs.bossBattleCode.GDpreBoss3Objects1.createFrom(runtimeScene.getObjects("preBoss3"));
gdjs.bossBattleCode.GDpreBoss4Objects1.createFrom(runtimeScene.getObjects("preBoss4"));
gdjs.bossBattleCode.GDtextAreaObjects1.createFrom(runtimeScene.getObjects("textArea"));
{for(var i = 0, len = gdjs.bossBattleCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDPlayerHitBoxObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.bossBattleCode.GDPlayerMugshotObjects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDPlayerMugshotObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.bossBattleCode.GDbossMugshotObjects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDbossMugshotObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.bossBattleCode.GDpreBoss1Objects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDpreBoss1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.bossBattleCode.GDpreBoss2Objects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDpreBoss2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.bossBattleCode.GDpreBoss3Objects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDpreBoss3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.bossBattleCode.GDpreBoss4Objects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDpreBoss4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.bossBattleCode.GDtextAreaObjects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDtextAreaObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "preBossTimer");
}}

}


{


{
gdjs.bossBattleCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.bossBattleCode.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.bossBattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDPlayerObjects1[i].setPosition((( gdjs.bossBattleCode.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.bossBattleCode.GDPlayerHitBoxObjects1[0].getPointX("")) - 12,(( gdjs.bossBattleCode.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.bossBattleCode.GDPlayerHitBoxObjects1[0].getPointY("")));
}
}}

}


{



}


{


gdjs.bossBattleCode.condition0IsTrue_0.val = false;
{
gdjs.bossBattleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "preBossTimer");
}if (gdjs.bossBattleCode.condition0IsTrue_0.val) {
gdjs.bossBattleCode.GDPlayerMugshotObjects1.createFrom(runtimeScene.getObjects("PlayerMugshot"));
gdjs.bossBattleCode.GDpreBoss1Objects1.createFrom(runtimeScene.getObjects("preBoss1"));
gdjs.bossBattleCode.GDtextAreaObjects1.createFrom(runtimeScene.getObjects("textArea"));
{for(var i = 0, len = gdjs.bossBattleCode.GDPlayerMugshotObjects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDPlayerMugshotObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.bossBattleCode.GDtextAreaObjects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDtextAreaObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.bossBattleCode.GDpreBoss1Objects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDpreBoss1Objects1[i].hide(false);
}
}}

}


{


gdjs.bossBattleCode.condition0IsTrue_0.val = false;
{
gdjs.bossBattleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "preBossTimer");
}if (gdjs.bossBattleCode.condition0IsTrue_0.val) {
gdjs.bossBattleCode.GDPlayerMugshotObjects1.createFrom(runtimeScene.getObjects("PlayerMugshot"));
gdjs.bossBattleCode.GDbossMugshotObjects1.createFrom(runtimeScene.getObjects("bossMugshot"));
gdjs.bossBattleCode.GDpreBoss1Objects1.createFrom(runtimeScene.getObjects("preBoss1"));
gdjs.bossBattleCode.GDpreBoss2Objects1.createFrom(runtimeScene.getObjects("preBoss2"));
{for(var i = 0, len = gdjs.bossBattleCode.GDPlayerMugshotObjects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDPlayerMugshotObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.bossBattleCode.GDpreBoss1Objects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDpreBoss1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.bossBattleCode.GDbossMugshotObjects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDbossMugshotObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.bossBattleCode.GDpreBoss2Objects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDpreBoss2Objects1[i].hide(false);
}
}}

}


{


gdjs.bossBattleCode.condition0IsTrue_0.val = false;
{
gdjs.bossBattleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 7, "preBossTimer");
}if (gdjs.bossBattleCode.condition0IsTrue_0.val) {
gdjs.bossBattleCode.GDpreBoss2Objects1.createFrom(runtimeScene.getObjects("preBoss2"));
gdjs.bossBattleCode.GDpreBoss3Objects1.createFrom(runtimeScene.getObjects("preBoss3"));
{for(var i = 0, len = gdjs.bossBattleCode.GDpreBoss2Objects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDpreBoss2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.bossBattleCode.GDpreBoss3Objects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDpreBoss3Objects1[i].hide(false);
}
}}

}


{


gdjs.bossBattleCode.condition0IsTrue_0.val = false;
{
gdjs.bossBattleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "preBossTimer");
}if (gdjs.bossBattleCode.condition0IsTrue_0.val) {
gdjs.bossBattleCode.GDPlayerMugshotObjects1.createFrom(runtimeScene.getObjects("PlayerMugshot"));
gdjs.bossBattleCode.GDbossMugshotObjects1.createFrom(runtimeScene.getObjects("bossMugshot"));
gdjs.bossBattleCode.GDpreBoss3Objects1.createFrom(runtimeScene.getObjects("preBoss3"));
gdjs.bossBattleCode.GDpreBoss4Objects1.createFrom(runtimeScene.getObjects("preBoss4"));
{for(var i = 0, len = gdjs.bossBattleCode.GDpreBoss3Objects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDpreBoss3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.bossBattleCode.GDbossMugshotObjects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDbossMugshotObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.bossBattleCode.GDPlayerMugshotObjects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDPlayerMugshotObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.bossBattleCode.GDpreBoss4Objects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDpreBoss4Objects1[i].hide(false);
}
}}

}


{


gdjs.bossBattleCode.condition0IsTrue_0.val = false;
{
gdjs.bossBattleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 11, "preBossTimer");
}if (gdjs.bossBattleCode.condition0IsTrue_0.val) {
gdjs.bossBattleCode.GDPlayerMugshotObjects1.createFrom(runtimeScene.getObjects("PlayerMugshot"));
gdjs.bossBattleCode.GDpreBoss4Objects1.createFrom(runtimeScene.getObjects("preBoss4"));
gdjs.bossBattleCode.GDtextAreaObjects1.createFrom(runtimeScene.getObjects("textArea"));
{for(var i = 0, len = gdjs.bossBattleCode.GDpreBoss4Objects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDpreBoss4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.bossBattleCode.GDPlayerMugshotObjects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDPlayerMugshotObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.bossBattleCode.GDtextAreaObjects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDtextAreaObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "healthbarfill.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "preBossTimer");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "preBossTimer");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "preBossTimer");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bossTheme.wav", 2, true, 100, 1);
}}

}


{



}


{

gdjs.bossBattleCode.GDPlayerObjects1.length = 0;


gdjs.bossBattleCode.condition0IsTrue_0.val = false;
{
{gdjs.bossBattleCode.conditionTrue_1 = gdjs.bossBattleCode.condition0IsTrue_0;
gdjs.bossBattleCode.GDPlayerObjects1_1final.length = 0;gdjs.bossBattleCode.condition0IsTrue_1.val = false;
gdjs.bossBattleCode.condition1IsTrue_1.val = false;
{
gdjs.bossBattleCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
for(var i = 0, k = 0, l = gdjs.bossBattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.bossBattleCode.GDPlayerObjects2[i].getAnimation() == 0 ) {
        gdjs.bossBattleCode.condition0IsTrue_1.val = true;
        gdjs.bossBattleCode.GDPlayerObjects2[k] = gdjs.bossBattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.bossBattleCode.GDPlayerObjects2.length = k;if( gdjs.bossBattleCode.condition0IsTrue_1.val ) {
    gdjs.bossBattleCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.bossBattleCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.bossBattleCode.GDPlayerObjects1_1final.indexOf(gdjs.bossBattleCode.GDPlayerObjects2[j]) === -1 )
            gdjs.bossBattleCode.GDPlayerObjects1_1final.push(gdjs.bossBattleCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.bossBattleCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
for(var i = 0, k = 0, l = gdjs.bossBattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.bossBattleCode.GDPlayerObjects2[i].getAnimation() == 2 ) {
        gdjs.bossBattleCode.condition1IsTrue_1.val = true;
        gdjs.bossBattleCode.GDPlayerObjects2[k] = gdjs.bossBattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.bossBattleCode.GDPlayerObjects2.length = k;if( gdjs.bossBattleCode.condition1IsTrue_1.val ) {
    gdjs.bossBattleCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.bossBattleCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.bossBattleCode.GDPlayerObjects1_1final.indexOf(gdjs.bossBattleCode.GDPlayerObjects2[j]) === -1 )
            gdjs.bossBattleCode.GDPlayerObjects1_1final.push(gdjs.bossBattleCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.bossBattleCode.GDPlayerObjects1.createFrom(gdjs.bossBattleCode.GDPlayerObjects1_1final);
}
}
}if (gdjs.bossBattleCode.condition0IsTrue_0.val) {
}

}


{

gdjs.bossBattleCode.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.bossBattleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.bossBattleCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.bossBattleCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.bossBattleCode.condition0IsTrue_0.val = true;
        gdjs.bossBattleCode.GDPlayerHitBoxObjects1[k] = gdjs.bossBattleCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.bossBattleCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.bossBattleCode.condition0IsTrue_0.val) {
gdjs.bossBattleCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.bossBattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.bossBattleCode.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.bossBattleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.bossBattleCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.bossBattleCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.bossBattleCode.condition0IsTrue_0.val = true;
        gdjs.bossBattleCode.GDPlayerHitBoxObjects1[k] = gdjs.bossBattleCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.bossBattleCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.bossBattleCode.condition0IsTrue_0.val) {
gdjs.bossBattleCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.bossBattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.bossBattleCode.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.bossBattleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.bossBattleCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.bossBattleCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.bossBattleCode.condition0IsTrue_0.val = true;
        gdjs.bossBattleCode.GDPlayerHitBoxObjects1[k] = gdjs.bossBattleCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.bossBattleCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.bossBattleCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.bossBattleCode.eventsList0x9c45d8(runtimeScene);} //End of subevents
}

}


{


gdjs.bossBattleCode.condition0IsTrue_0.val = false;
{
gdjs.bossBattleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.bossBattleCode.condition0IsTrue_0.val) {
gdjs.bossBattleCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.bossBattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.bossBattleCode.condition0IsTrue_0.val = false;
{
gdjs.bossBattleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.bossBattleCode.condition0IsTrue_0.val) {
gdjs.bossBattleCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.bossBattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{



}


{


gdjs.bossBattleCode.condition0IsTrue_0.val = false;
gdjs.bossBattleCode.condition1IsTrue_0.val = false;
{
gdjs.bossBattleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}if ( gdjs.bossBattleCode.condition0IsTrue_0.val ) {
{
gdjs.bossBattleCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.25, "firerate");
}}
if (gdjs.bossBattleCode.condition1IsTrue_0.val) {
gdjs.bossBattleCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.bossBattleCode.GDbusterShotObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "shooting.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.bossBattleCode.mapOfGDgdjs_46bossBattleCode_46GDbusterShotObjects1Objects, (( gdjs.bossBattleCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.bossBattleCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.bossBattleCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.bossBattleCode.GDPlayerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.bossBattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDPlayerObjects1[i].setAnimation(3);
}
}}

}


{

gdjs.bossBattleCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.bossBattleCode.GDtornadoObjects1.createFrom(runtimeScene.getObjects("tornado"));

gdjs.bossBattleCode.condition0IsTrue_0.val = false;
{
gdjs.bossBattleCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.bossBattleCode.mapOfGDgdjs_46bossBattleCode_46GDPlayerObjects1Objects, gdjs.bossBattleCode.mapOfGDgdjs_46bossBattleCode_46GDtornadoObjects1Objects, false, runtimeScene, false);
}if (gdjs.bossBattleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.bossBattleCode.GDtornadoObjects1 */
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}{for(var i = 0, len = gdjs.bossBattleCode.GDtornadoObjects1.length ;i < len;++i) {
    gdjs.bossBattleCode.GDtornadoObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "stageClear.wav", false, 100, 1);
}}

}


}; //End of gdjs.bossBattleCode.eventsList0xb2358


gdjs.bossBattleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.bossBattleCode.GDPlayerObjects1.length = 0;
gdjs.bossBattleCode.GDPlayerObjects2.length = 0;
gdjs.bossBattleCode.GDPlayerObjects3.length = 0;
gdjs.bossBattleCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.bossBattleCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.bossBattleCode.GDPlayerHitBoxObjects3.length = 0;
gdjs.bossBattleCode.GDAirmanObjects1.length = 0;
gdjs.bossBattleCode.GDAirmanObjects2.length = 0;
gdjs.bossBattleCode.GDAirmanObjects3.length = 0;
gdjs.bossBattleCode.GDendOrbObjects1.length = 0;
gdjs.bossBattleCode.GDendOrbObjects2.length = 0;
gdjs.bossBattleCode.GDendOrbObjects3.length = 0;
gdjs.bossBattleCode.GDbackgroundObjects1.length = 0;
gdjs.bossBattleCode.GDbackgroundObjects2.length = 0;
gdjs.bossBattleCode.GDbackgroundObjects3.length = 0;
gdjs.bossBattleCode.GDblocksObjects1.length = 0;
gdjs.bossBattleCode.GDblocksObjects2.length = 0;
gdjs.bossBattleCode.GDblocksObjects3.length = 0;
gdjs.bossBattleCode.GDpreBoss1Objects1.length = 0;
gdjs.bossBattleCode.GDpreBoss1Objects2.length = 0;
gdjs.bossBattleCode.GDpreBoss1Objects3.length = 0;
gdjs.bossBattleCode.GDtextAreaObjects1.length = 0;
gdjs.bossBattleCode.GDtextAreaObjects2.length = 0;
gdjs.bossBattleCode.GDtextAreaObjects3.length = 0;
gdjs.bossBattleCode.GDpreBoss2Objects1.length = 0;
gdjs.bossBattleCode.GDpreBoss2Objects2.length = 0;
gdjs.bossBattleCode.GDpreBoss2Objects3.length = 0;
gdjs.bossBattleCode.GDpreBoss3Objects1.length = 0;
gdjs.bossBattleCode.GDpreBoss3Objects2.length = 0;
gdjs.bossBattleCode.GDpreBoss3Objects3.length = 0;
gdjs.bossBattleCode.GDpreBoss4Objects1.length = 0;
gdjs.bossBattleCode.GDpreBoss4Objects2.length = 0;
gdjs.bossBattleCode.GDpreBoss4Objects3.length = 0;
gdjs.bossBattleCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.bossBattleCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.bossBattleCode.GDPlayerHitBoxObjects3.length = 0;
gdjs.bossBattleCode.GDPlayerObjects1.length = 0;
gdjs.bossBattleCode.GDPlayerObjects2.length = 0;
gdjs.bossBattleCode.GDPlayerObjects3.length = 0;
gdjs.bossBattleCode.GDPlayerMugshotObjects1.length = 0;
gdjs.bossBattleCode.GDPlayerMugshotObjects2.length = 0;
gdjs.bossBattleCode.GDPlayerMugshotObjects3.length = 0;
gdjs.bossBattleCode.GDbossMugshotObjects1.length = 0;
gdjs.bossBattleCode.GDbossMugshotObjects2.length = 0;
gdjs.bossBattleCode.GDbossMugshotObjects3.length = 0;
gdjs.bossBattleCode.GDCopyOfAirmanObjects1.length = 0;
gdjs.bossBattleCode.GDCopyOfAirmanObjects2.length = 0;
gdjs.bossBattleCode.GDCopyOfAirmanObjects3.length = 0;
gdjs.bossBattleCode.GDbusterShotObjects1.length = 0;
gdjs.bossBattleCode.GDbusterShotObjects2.length = 0;
gdjs.bossBattleCode.GDbusterShotObjects3.length = 0;
gdjs.bossBattleCode.GDtornadoObjects1.length = 0;
gdjs.bossBattleCode.GDtornadoObjects2.length = 0;
gdjs.bossBattleCode.GDtornadoObjects3.length = 0;

gdjs.bossBattleCode.eventsList0xb2358(runtimeScene);
return;
}
gdjs['bossBattleCode'] = gdjs.bossBattleCode;
