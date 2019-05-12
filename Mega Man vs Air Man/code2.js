gdjs.busterRemovalCode = {};
gdjs.busterRemovalCode.GDPlayerObjects1_1final = [];

gdjs.busterRemovalCode.GDPlayerObjects1= [];
gdjs.busterRemovalCode.GDPlayerObjects2= [];
gdjs.busterRemovalCode.GDPlayerObjects3= [];
gdjs.busterRemovalCode.GDPlayerHitBoxObjects1= [];
gdjs.busterRemovalCode.GDPlayerHitBoxObjects2= [];
gdjs.busterRemovalCode.GDPlayerHitBoxObjects3= [];
gdjs.busterRemovalCode.GDAirmanObjects1= [];
gdjs.busterRemovalCode.GDAirmanObjects2= [];
gdjs.busterRemovalCode.GDAirmanObjects3= [];
gdjs.busterRemovalCode.GDendOrbObjects1= [];
gdjs.busterRemovalCode.GDendOrbObjects2= [];
gdjs.busterRemovalCode.GDendOrbObjects3= [];
gdjs.busterRemovalCode.GDairTileObjects1= [];
gdjs.busterRemovalCode.GDairTileObjects2= [];
gdjs.busterRemovalCode.GDairTileObjects3= [];
gdjs.busterRemovalCode.GDtext1Objects1= [];
gdjs.busterRemovalCode.GDtext1Objects2= [];
gdjs.busterRemovalCode.GDtext1Objects3= [];
gdjs.busterRemovalCode.GDtextAreaObjects1= [];
gdjs.busterRemovalCode.GDtextAreaObjects2= [];
gdjs.busterRemovalCode.GDtextAreaObjects3= [];
gdjs.busterRemovalCode.GDmegaSpriteObjects1= [];
gdjs.busterRemovalCode.GDmegaSpriteObjects2= [];
gdjs.busterRemovalCode.GDmegaSpriteObjects3= [];
gdjs.busterRemovalCode.GDflashbgObjects1= [];
gdjs.busterRemovalCode.GDflashbgObjects2= [];
gdjs.busterRemovalCode.GDflashbgObjects3= [];
gdjs.busterRemovalCode.GDtext2Objects1= [];
gdjs.busterRemovalCode.GDtext2Objects2= [];
gdjs.busterRemovalCode.GDtext2Objects3= [];
gdjs.busterRemovalCode.GDtext3Objects1= [];
gdjs.busterRemovalCode.GDtext3Objects2= [];
gdjs.busterRemovalCode.GDtext3Objects3= [];

gdjs.busterRemovalCode.conditionTrue_0 = {val:false};
gdjs.busterRemovalCode.condition0IsTrue_0 = {val:false};
gdjs.busterRemovalCode.condition1IsTrue_0 = {val:false};
gdjs.busterRemovalCode.condition2IsTrue_0 = {val:false};
gdjs.busterRemovalCode.conditionTrue_1 = {val:false};
gdjs.busterRemovalCode.condition0IsTrue_1 = {val:false};
gdjs.busterRemovalCode.condition1IsTrue_1 = {val:false};
gdjs.busterRemovalCode.condition2IsTrue_1 = {val:false};


gdjs.busterRemovalCode.eventsList0x8e0030 = function(runtimeScene) {

{


gdjs.busterRemovalCode.condition0IsTrue_0.val = false;
{
gdjs.busterRemovalCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 13, "oneToTwo");
}if (gdjs.busterRemovalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "oneToTwo");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level part 2", true);
}}

}


}; //End of gdjs.busterRemovalCode.eventsList0x8e0030
gdjs.busterRemovalCode.eventsList0x8dfe00 = function(runtimeScene) {

{


gdjs.busterRemovalCode.condition0IsTrue_0.val = false;
{
gdjs.busterRemovalCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 11, "oneToTwo");
}if (gdjs.busterRemovalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.busterRemovalCode.GDtext2Objects1 */
gdjs.busterRemovalCode.GDtext3Objects1.createFrom(runtimeScene.getObjects("text3"));
{for(var i = 0, len = gdjs.busterRemovalCode.GDtext2Objects1.length ;i < len;++i) {
    gdjs.busterRemovalCode.GDtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.busterRemovalCode.GDtext3Objects1.length ;i < len;++i) {
    gdjs.busterRemovalCode.GDtext3Objects1[i].hide(false);
}
}
{ //Subevents
gdjs.busterRemovalCode.eventsList0x8e0030(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.busterRemovalCode.eventsList0x8dfe00
gdjs.busterRemovalCode.eventsList0x8dfa90 = function(runtimeScene) {

{


gdjs.busterRemovalCode.condition0IsTrue_0.val = false;
{
gdjs.busterRemovalCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "oneToTwo");
}if (gdjs.busterRemovalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.busterRemovalCode.GDtext1Objects1 */
gdjs.busterRemovalCode.GDtext2Objects1.createFrom(runtimeScene.getObjects("text2"));
{for(var i = 0, len = gdjs.busterRemovalCode.GDtext1Objects1.length ;i < len;++i) {
    gdjs.busterRemovalCode.GDtext1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.busterRemovalCode.GDtext2Objects1.length ;i < len;++i) {
    gdjs.busterRemovalCode.GDtext2Objects1[i].hide(false);
}
}
{ //Subevents
gdjs.busterRemovalCode.eventsList0x8dfe00(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.busterRemovalCode.eventsList0x8dfa90
gdjs.busterRemovalCode.eventsList0x8e0cf0 = function(runtimeScene) {

{

gdjs.busterRemovalCode.GDPlayerHitBoxObjects2.createFrom(gdjs.busterRemovalCode.GDPlayerHitBoxObjects1);


gdjs.busterRemovalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.busterRemovalCode.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( !(gdjs.busterRemovalCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.busterRemovalCode.condition0IsTrue_0.val = true;
        gdjs.busterRemovalCode.GDPlayerHitBoxObjects2[k] = gdjs.busterRemovalCode.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.busterRemovalCode.GDPlayerHitBoxObjects2.length = k;}if (gdjs.busterRemovalCode.condition0IsTrue_0.val) {
gdjs.busterRemovalCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.busterRemovalCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.busterRemovalCode.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

/* Reuse gdjs.busterRemovalCode.GDPlayerHitBoxObjects1 */

gdjs.busterRemovalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.busterRemovalCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.busterRemovalCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.busterRemovalCode.condition0IsTrue_0.val = true;
        gdjs.busterRemovalCode.GDPlayerHitBoxObjects1[k] = gdjs.busterRemovalCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.busterRemovalCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.busterRemovalCode.condition0IsTrue_0.val) {
gdjs.busterRemovalCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.busterRemovalCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.busterRemovalCode.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


}; //End of gdjs.busterRemovalCode.eventsList0x8e0cf0
gdjs.busterRemovalCode.eventsList0xb2358 = function(runtimeScene) {

{



}


{


gdjs.busterRemovalCode.condition0IsTrue_0.val = false;
{
gdjs.busterRemovalCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.busterRemovalCode.condition0IsTrue_0.val) {
gdjs.busterRemovalCode.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
gdjs.busterRemovalCode.GDmegaSpriteObjects1.createFrom(runtimeScene.getObjects("megaSprite"));
gdjs.busterRemovalCode.GDtext1Objects1.createFrom(runtimeScene.getObjects("text1"));
gdjs.busterRemovalCode.GDtext2Objects1.createFrom(runtimeScene.getObjects("text2"));
gdjs.busterRemovalCode.GDtext3Objects1.createFrom(runtimeScene.getObjects("text3"));
gdjs.busterRemovalCode.GDtextAreaObjects1.createFrom(runtimeScene.getObjects("textArea"));
{for(var i = 0, len = gdjs.busterRemovalCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.busterRemovalCode.GDPlayerHitBoxObjects1[i].hide();
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "invis");
}{gdjs.evtTools.sound.playSound(runtimeScene, "bustergone.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.busterRemovalCode.GDtext2Objects1.length ;i < len;++i) {
    gdjs.busterRemovalCode.GDtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.busterRemovalCode.GDmegaSpriteObjects1.length ;i < len;++i) {
    gdjs.busterRemovalCode.GDmegaSpriteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.busterRemovalCode.GDtext1Objects1.length ;i < len;++i) {
    gdjs.busterRemovalCode.GDtext1Objects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "busterDeadTimer");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "oneToTwo");
}{for(var i = 0, len = gdjs.busterRemovalCode.GDtextAreaObjects1.length ;i < len;++i) {
    gdjs.busterRemovalCode.GDtextAreaObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.busterRemovalCode.GDtext3Objects1.length ;i < len;++i) {
    gdjs.busterRemovalCode.GDtext3Objects1[i].hide();
}
}}

}


{


{
gdjs.busterRemovalCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.busterRemovalCode.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.busterRemovalCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.busterRemovalCode.GDPlayerObjects1[i].setPosition((( gdjs.busterRemovalCode.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.busterRemovalCode.GDPlayerHitBoxObjects1[0].getPointX("")) - 12,(( gdjs.busterRemovalCode.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.busterRemovalCode.GDPlayerHitBoxObjects1[0].getPointY("")));
}
}}

}


{


gdjs.busterRemovalCode.condition0IsTrue_0.val = false;
{
gdjs.busterRemovalCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 18, "busterDeadTimer");
}if (gdjs.busterRemovalCode.condition0IsTrue_0.val) {
gdjs.busterRemovalCode.GDmegaSpriteObjects1.createFrom(runtimeScene.getObjects("megaSprite"));
gdjs.busterRemovalCode.GDtext1Objects1.createFrom(runtimeScene.getObjects("text1"));
gdjs.busterRemovalCode.GDtextAreaObjects1.createFrom(runtimeScene.getObjects("textArea"));
{for(var i = 0, len = gdjs.busterRemovalCode.GDtext1Objects1.length ;i < len;++i) {
    gdjs.busterRemovalCode.GDtext1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.busterRemovalCode.GDmegaSpriteObjects1.length ;i < len;++i) {
    gdjs.busterRemovalCode.GDmegaSpriteObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.busterRemovalCode.GDtextAreaObjects1.length ;i < len;++i) {
    gdjs.busterRemovalCode.GDtextAreaObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "oneToTwo");
}
{ //Subevents
gdjs.busterRemovalCode.eventsList0x8dfa90(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.busterRemovalCode.GDPlayerObjects1.length = 0;


gdjs.busterRemovalCode.condition0IsTrue_0.val = false;
{
{gdjs.busterRemovalCode.conditionTrue_1 = gdjs.busterRemovalCode.condition0IsTrue_0;
gdjs.busterRemovalCode.GDPlayerObjects1_1final.length = 0;gdjs.busterRemovalCode.condition0IsTrue_1.val = false;
gdjs.busterRemovalCode.condition1IsTrue_1.val = false;
{
gdjs.busterRemovalCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
for(var i = 0, k = 0, l = gdjs.busterRemovalCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.busterRemovalCode.GDPlayerObjects2[i].getAnimation() == 0 ) {
        gdjs.busterRemovalCode.condition0IsTrue_1.val = true;
        gdjs.busterRemovalCode.GDPlayerObjects2[k] = gdjs.busterRemovalCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.busterRemovalCode.GDPlayerObjects2.length = k;if( gdjs.busterRemovalCode.condition0IsTrue_1.val ) {
    gdjs.busterRemovalCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.busterRemovalCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.busterRemovalCode.GDPlayerObjects1_1final.indexOf(gdjs.busterRemovalCode.GDPlayerObjects2[j]) === -1 )
            gdjs.busterRemovalCode.GDPlayerObjects1_1final.push(gdjs.busterRemovalCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.busterRemovalCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
for(var i = 0, k = 0, l = gdjs.busterRemovalCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.busterRemovalCode.GDPlayerObjects2[i].getAnimation() == 2 ) {
        gdjs.busterRemovalCode.condition1IsTrue_1.val = true;
        gdjs.busterRemovalCode.GDPlayerObjects2[k] = gdjs.busterRemovalCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.busterRemovalCode.GDPlayerObjects2.length = k;if( gdjs.busterRemovalCode.condition1IsTrue_1.val ) {
    gdjs.busterRemovalCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.busterRemovalCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.busterRemovalCode.GDPlayerObjects1_1final.indexOf(gdjs.busterRemovalCode.GDPlayerObjects2[j]) === -1 )
            gdjs.busterRemovalCode.GDPlayerObjects1_1final.push(gdjs.busterRemovalCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.busterRemovalCode.GDPlayerObjects1.createFrom(gdjs.busterRemovalCode.GDPlayerObjects1_1final);
}
}
}if (gdjs.busterRemovalCode.condition0IsTrue_0.val) {
}

}


{

gdjs.busterRemovalCode.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.busterRemovalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.busterRemovalCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.busterRemovalCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.busterRemovalCode.condition0IsTrue_0.val = true;
        gdjs.busterRemovalCode.GDPlayerHitBoxObjects1[k] = gdjs.busterRemovalCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.busterRemovalCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.busterRemovalCode.condition0IsTrue_0.val) {
gdjs.busterRemovalCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.busterRemovalCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.busterRemovalCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.busterRemovalCode.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.busterRemovalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.busterRemovalCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.busterRemovalCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.busterRemovalCode.condition0IsTrue_0.val = true;
        gdjs.busterRemovalCode.GDPlayerHitBoxObjects1[k] = gdjs.busterRemovalCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.busterRemovalCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.busterRemovalCode.condition0IsTrue_0.val) {
gdjs.busterRemovalCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.busterRemovalCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.busterRemovalCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.busterRemovalCode.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.busterRemovalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.busterRemovalCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.busterRemovalCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.busterRemovalCode.condition0IsTrue_0.val = true;
        gdjs.busterRemovalCode.GDPlayerHitBoxObjects1[k] = gdjs.busterRemovalCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.busterRemovalCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.busterRemovalCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.busterRemovalCode.eventsList0x8e0cf0(runtimeScene);} //End of subevents
}

}


{


gdjs.busterRemovalCode.condition0IsTrue_0.val = false;
{
gdjs.busterRemovalCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.busterRemovalCode.condition0IsTrue_0.val) {
gdjs.busterRemovalCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.busterRemovalCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.busterRemovalCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.busterRemovalCode.condition0IsTrue_0.val = false;
{
gdjs.busterRemovalCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.busterRemovalCode.condition0IsTrue_0.val) {
gdjs.busterRemovalCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.busterRemovalCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.busterRemovalCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{



}


{


{
gdjs.busterRemovalCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.busterRemovalCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.busterRemovalCode.GDPlayerObjects1[0].getPointY("")), "", 0);
}}

}


}; //End of gdjs.busterRemovalCode.eventsList0xb2358


gdjs.busterRemovalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.busterRemovalCode.GDPlayerObjects1.length = 0;
gdjs.busterRemovalCode.GDPlayerObjects2.length = 0;
gdjs.busterRemovalCode.GDPlayerObjects3.length = 0;
gdjs.busterRemovalCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.busterRemovalCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.busterRemovalCode.GDPlayerHitBoxObjects3.length = 0;
gdjs.busterRemovalCode.GDAirmanObjects1.length = 0;
gdjs.busterRemovalCode.GDAirmanObjects2.length = 0;
gdjs.busterRemovalCode.GDAirmanObjects3.length = 0;
gdjs.busterRemovalCode.GDendOrbObjects1.length = 0;
gdjs.busterRemovalCode.GDendOrbObjects2.length = 0;
gdjs.busterRemovalCode.GDendOrbObjects3.length = 0;
gdjs.busterRemovalCode.GDairTileObjects1.length = 0;
gdjs.busterRemovalCode.GDairTileObjects2.length = 0;
gdjs.busterRemovalCode.GDairTileObjects3.length = 0;
gdjs.busterRemovalCode.GDtext1Objects1.length = 0;
gdjs.busterRemovalCode.GDtext1Objects2.length = 0;
gdjs.busterRemovalCode.GDtext1Objects3.length = 0;
gdjs.busterRemovalCode.GDtextAreaObjects1.length = 0;
gdjs.busterRemovalCode.GDtextAreaObjects2.length = 0;
gdjs.busterRemovalCode.GDtextAreaObjects3.length = 0;
gdjs.busterRemovalCode.GDmegaSpriteObjects1.length = 0;
gdjs.busterRemovalCode.GDmegaSpriteObjects2.length = 0;
gdjs.busterRemovalCode.GDmegaSpriteObjects3.length = 0;
gdjs.busterRemovalCode.GDflashbgObjects1.length = 0;
gdjs.busterRemovalCode.GDflashbgObjects2.length = 0;
gdjs.busterRemovalCode.GDflashbgObjects3.length = 0;
gdjs.busterRemovalCode.GDtext2Objects1.length = 0;
gdjs.busterRemovalCode.GDtext2Objects2.length = 0;
gdjs.busterRemovalCode.GDtext2Objects3.length = 0;
gdjs.busterRemovalCode.GDtext3Objects1.length = 0;
gdjs.busterRemovalCode.GDtext3Objects2.length = 0;
gdjs.busterRemovalCode.GDtext3Objects3.length = 0;

gdjs.busterRemovalCode.eventsList0xb2358(runtimeScene);
return;
}
gdjs['busterRemovalCode'] = gdjs.busterRemovalCode;
