gdjs.gameCreditsCode = {};
gdjs.gameCreditsCode.GDPlayerObjects1= [];
gdjs.gameCreditsCode.GDPlayerObjects2= [];
gdjs.gameCreditsCode.GDPlayerHitBoxObjects1= [];
gdjs.gameCreditsCode.GDPlayerHitBoxObjects2= [];
gdjs.gameCreditsCode.GDAirmanObjects1= [];
gdjs.gameCreditsCode.GDAirmanObjects2= [];
gdjs.gameCreditsCode.GDendOrbObjects1= [];
gdjs.gameCreditsCode.GDendOrbObjects2= [];
gdjs.gameCreditsCode.GDNewObjectObjects1= [];
gdjs.gameCreditsCode.GDNewObjectObjects2= [];
gdjs.gameCreditsCode.GDtextAreaObjects1= [];
gdjs.gameCreditsCode.GDtextAreaObjects2= [];
gdjs.gameCreditsCode.GDcredits1Objects1= [];
gdjs.gameCreditsCode.GDcredits1Objects2= [];
gdjs.gameCreditsCode.GDcredits2Objects1= [];
gdjs.gameCreditsCode.GDcredits2Objects2= [];
gdjs.gameCreditsCode.GDcredits3Objects1= [];
gdjs.gameCreditsCode.GDcredits3Objects2= [];
gdjs.gameCreditsCode.GDcredits4Objects1= [];
gdjs.gameCreditsCode.GDcredits4Objects2= [];
gdjs.gameCreditsCode.GDcredits5Objects1= [];
gdjs.gameCreditsCode.GDcredits5Objects2= [];
gdjs.gameCreditsCode.GDcredits6Objects1= [];
gdjs.gameCreditsCode.GDcredits6Objects2= [];

gdjs.gameCreditsCode.conditionTrue_0 = {val:false};
gdjs.gameCreditsCode.condition0IsTrue_0 = {val:false};
gdjs.gameCreditsCode.condition1IsTrue_0 = {val:false};


gdjs.gameCreditsCode.eventsList0x90d138 = function(runtimeScene) {

{


gdjs.gameCreditsCode.condition0IsTrue_0.val = false;
{
gdjs.gameCreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.gameCreditsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.gameCreditsCode.eventsList0x90d138
gdjs.gameCreditsCode.eventsList0xb2358 = function(runtimeScene) {

{



}


{


gdjs.gameCreditsCode.condition0IsTrue_0.val = false;
{
gdjs.gameCreditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.gameCreditsCode.condition0IsTrue_0.val) {
gdjs.gameCreditsCode.GDcredits2Objects1.createFrom(runtimeScene.getObjects("credits2"));
gdjs.gameCreditsCode.GDcredits3Objects1.createFrom(runtimeScene.getObjects("credits3"));
gdjs.gameCreditsCode.GDcredits4Objects1.createFrom(runtimeScene.getObjects("credits4"));
gdjs.gameCreditsCode.GDcredits5Objects1.createFrom(runtimeScene.getObjects("credits5"));
gdjs.gameCreditsCode.GDcredits6Objects1.createFrom(runtimeScene.getObjects("credits6"));
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bossTheme.wav", 0, true, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "creditsTimer");
}{for(var i = 0, len = gdjs.gameCreditsCode.GDcredits2Objects1.length ;i < len;++i) {
    gdjs.gameCreditsCode.GDcredits2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameCreditsCode.GDcredits3Objects1.length ;i < len;++i) {
    gdjs.gameCreditsCode.GDcredits3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameCreditsCode.GDcredits4Objects1.length ;i < len;++i) {
    gdjs.gameCreditsCode.GDcredits4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameCreditsCode.GDcredits5Objects1.length ;i < len;++i) {
    gdjs.gameCreditsCode.GDcredits5Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameCreditsCode.GDcredits6Objects1.length ;i < len;++i) {
    gdjs.gameCreditsCode.GDcredits6Objects1[i].hide();
}
}}

}


{


gdjs.gameCreditsCode.condition0IsTrue_0.val = false;
{
gdjs.gameCreditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "creditsTimer");
}if (gdjs.gameCreditsCode.condition0IsTrue_0.val) {
gdjs.gameCreditsCode.GDcredits2Objects1.createFrom(runtimeScene.getObjects("credits2"));
{for(var i = 0, len = gdjs.gameCreditsCode.GDcredits2Objects1.length ;i < len;++i) {
    gdjs.gameCreditsCode.GDcredits2Objects1[i].hide(false);
}
}}

}


{


gdjs.gameCreditsCode.condition0IsTrue_0.val = false;
{
gdjs.gameCreditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 6, "creditsTimer");
}if (gdjs.gameCreditsCode.condition0IsTrue_0.val) {
gdjs.gameCreditsCode.GDcredits1Objects1.createFrom(runtimeScene.getObjects("credits1"));
gdjs.gameCreditsCode.GDcredits2Objects1.createFrom(runtimeScene.getObjects("credits2"));
{for(var i = 0, len = gdjs.gameCreditsCode.GDcredits1Objects1.length ;i < len;++i) {
    gdjs.gameCreditsCode.GDcredits1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameCreditsCode.GDcredits2Objects1.length ;i < len;++i) {
    gdjs.gameCreditsCode.GDcredits2Objects1[i].hide();
}
}}

}


{


gdjs.gameCreditsCode.condition0IsTrue_0.val = false;
{
gdjs.gameCreditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 7, "creditsTimer");
}if (gdjs.gameCreditsCode.condition0IsTrue_0.val) {
gdjs.gameCreditsCode.GDcredits1Objects1.createFrom(runtimeScene.getObjects("credits1"));
gdjs.gameCreditsCode.GDcredits2Objects1.createFrom(runtimeScene.getObjects("credits2"));
gdjs.gameCreditsCode.GDcredits3Objects1.createFrom(runtimeScene.getObjects("credits3"));
{for(var i = 0, len = gdjs.gameCreditsCode.GDcredits1Objects1.length ;i < len;++i) {
    gdjs.gameCreditsCode.GDcredits1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameCreditsCode.GDcredits2Objects1.length ;i < len;++i) {
    gdjs.gameCreditsCode.GDcredits2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameCreditsCode.GDcredits3Objects1.length ;i < len;++i) {
    gdjs.gameCreditsCode.GDcredits3Objects1[i].hide(false);
}
}}

}


{


gdjs.gameCreditsCode.condition0IsTrue_0.val = false;
{
gdjs.gameCreditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 11, "creditsTimer");
}if (gdjs.gameCreditsCode.condition0IsTrue_0.val) {
gdjs.gameCreditsCode.GDcredits3Objects1.createFrom(runtimeScene.getObjects("credits3"));
{for(var i = 0, len = gdjs.gameCreditsCode.GDcredits3Objects1.length ;i < len;++i) {
    gdjs.gameCreditsCode.GDcredits3Objects1[i].hide();
}
}}

}


{


gdjs.gameCreditsCode.condition0IsTrue_0.val = false;
{
gdjs.gameCreditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 12, "creditsTimer");
}if (gdjs.gameCreditsCode.condition0IsTrue_0.val) {
gdjs.gameCreditsCode.GDcredits4Objects1.createFrom(runtimeScene.getObjects("credits4"));
{for(var i = 0, len = gdjs.gameCreditsCode.GDcredits4Objects1.length ;i < len;++i) {
    gdjs.gameCreditsCode.GDcredits4Objects1[i].hide(false);
}
}}

}


{


gdjs.gameCreditsCode.condition0IsTrue_0.val = false;
{
gdjs.gameCreditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 16, "creditsTimer");
}if (gdjs.gameCreditsCode.condition0IsTrue_0.val) {
gdjs.gameCreditsCode.GDcredits4Objects1.createFrom(runtimeScene.getObjects("credits4"));
{for(var i = 0, len = gdjs.gameCreditsCode.GDcredits4Objects1.length ;i < len;++i) {
    gdjs.gameCreditsCode.GDcredits4Objects1[i].hide();
}
}}

}


{


gdjs.gameCreditsCode.condition0IsTrue_0.val = false;
{
gdjs.gameCreditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 17, "creditsTimer");
}if (gdjs.gameCreditsCode.condition0IsTrue_0.val) {
gdjs.gameCreditsCode.GDcredits5Objects1.createFrom(runtimeScene.getObjects("credits5"));
{for(var i = 0, len = gdjs.gameCreditsCode.GDcredits5Objects1.length ;i < len;++i) {
    gdjs.gameCreditsCode.GDcredits5Objects1[i].hide(false);
}
}}

}


{


gdjs.gameCreditsCode.condition0IsTrue_0.val = false;
{
gdjs.gameCreditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 21, "creditsTimer");
}if (gdjs.gameCreditsCode.condition0IsTrue_0.val) {
gdjs.gameCreditsCode.GDcredits5Objects1.createFrom(runtimeScene.getObjects("credits5"));
{for(var i = 0, len = gdjs.gameCreditsCode.GDcredits5Objects1.length ;i < len;++i) {
    gdjs.gameCreditsCode.GDcredits5Objects1[i].hide();
}
}}

}


{


gdjs.gameCreditsCode.condition0IsTrue_0.val = false;
{
gdjs.gameCreditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 22, "creditsTimer");
}if (gdjs.gameCreditsCode.condition0IsTrue_0.val) {
gdjs.gameCreditsCode.GDcredits6Objects1.createFrom(runtimeScene.getObjects("credits6"));
{for(var i = 0, len = gdjs.gameCreditsCode.GDcredits6Objects1.length ;i < len;++i) {
    gdjs.gameCreditsCode.GDcredits6Objects1[i].hide(false);
}
}
{ //Subevents
gdjs.gameCreditsCode.eventsList0x90d138(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.gameCreditsCode.eventsList0xb2358


gdjs.gameCreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.gameCreditsCode.GDPlayerObjects1.length = 0;
gdjs.gameCreditsCode.GDPlayerObjects2.length = 0;
gdjs.gameCreditsCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.gameCreditsCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.gameCreditsCode.GDAirmanObjects1.length = 0;
gdjs.gameCreditsCode.GDAirmanObjects2.length = 0;
gdjs.gameCreditsCode.GDendOrbObjects1.length = 0;
gdjs.gameCreditsCode.GDendOrbObjects2.length = 0;
gdjs.gameCreditsCode.GDNewObjectObjects1.length = 0;
gdjs.gameCreditsCode.GDNewObjectObjects2.length = 0;
gdjs.gameCreditsCode.GDtextAreaObjects1.length = 0;
gdjs.gameCreditsCode.GDtextAreaObjects2.length = 0;
gdjs.gameCreditsCode.GDcredits1Objects1.length = 0;
gdjs.gameCreditsCode.GDcredits1Objects2.length = 0;
gdjs.gameCreditsCode.GDcredits2Objects1.length = 0;
gdjs.gameCreditsCode.GDcredits2Objects2.length = 0;
gdjs.gameCreditsCode.GDcredits3Objects1.length = 0;
gdjs.gameCreditsCode.GDcredits3Objects2.length = 0;
gdjs.gameCreditsCode.GDcredits4Objects1.length = 0;
gdjs.gameCreditsCode.GDcredits4Objects2.length = 0;
gdjs.gameCreditsCode.GDcredits5Objects1.length = 0;
gdjs.gameCreditsCode.GDcredits5Objects2.length = 0;
gdjs.gameCreditsCode.GDcredits6Objects1.length = 0;
gdjs.gameCreditsCode.GDcredits6Objects2.length = 0;

gdjs.gameCreditsCode.eventsList0xb2358(runtimeScene);
return;
}
gdjs['gameCreditsCode'] = gdjs.gameCreditsCode;
