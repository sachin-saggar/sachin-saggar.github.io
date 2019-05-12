gdjs.Pause_32screenCode = {};
gdjs.Pause_32screenCode.GDPlayerObjects1= [];
gdjs.Pause_32screenCode.GDPlayerObjects2= [];
gdjs.Pause_32screenCode.GDPlayerHitBoxObjects1= [];
gdjs.Pause_32screenCode.GDPlayerHitBoxObjects2= [];
gdjs.Pause_32screenCode.GDAirmanObjects1= [];
gdjs.Pause_32screenCode.GDAirmanObjects2= [];
gdjs.Pause_32screenCode.GDendOrbObjects1= [];
gdjs.Pause_32screenCode.GDendOrbObjects2= [];
gdjs.Pause_32screenCode.GDpauseObjects1= [];
gdjs.Pause_32screenCode.GDpauseObjects2= [];
gdjs.Pause_32screenCode.GDretryObjects1= [];
gdjs.Pause_32screenCode.GDretryObjects2= [];
gdjs.Pause_32screenCode.GDgameOverBackgroundObjects1= [];
gdjs.Pause_32screenCode.GDgameOverBackgroundObjects2= [];
gdjs.Pause_32screenCode.GDblackBGObjects1= [];
gdjs.Pause_32screenCode.GDblackBGObjects2= [];

gdjs.Pause_32screenCode.conditionTrue_0 = {val:false};
gdjs.Pause_32screenCode.condition0IsTrue_0 = {val:false};
gdjs.Pause_32screenCode.condition1IsTrue_0 = {val:false};


gdjs.Pause_32screenCode.eventsList0xb2358 = function(runtimeScene) {

{


gdjs.Pause_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Pause_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Pause_32screenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "gameover.wav", 2, true, 100, 1);
}}

}


{


gdjs.Pause_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Pause_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.Pause_32screenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "gameStart");
}}

}


}; //End of gdjs.Pause_32screenCode.eventsList0xb2358


gdjs.Pause_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Pause_32screenCode.GDPlayerObjects1.length = 0;
gdjs.Pause_32screenCode.GDPlayerObjects2.length = 0;
gdjs.Pause_32screenCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.Pause_32screenCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.Pause_32screenCode.GDAirmanObjects1.length = 0;
gdjs.Pause_32screenCode.GDAirmanObjects2.length = 0;
gdjs.Pause_32screenCode.GDendOrbObjects1.length = 0;
gdjs.Pause_32screenCode.GDendOrbObjects2.length = 0;
gdjs.Pause_32screenCode.GDpauseObjects1.length = 0;
gdjs.Pause_32screenCode.GDpauseObjects2.length = 0;
gdjs.Pause_32screenCode.GDretryObjects1.length = 0;
gdjs.Pause_32screenCode.GDretryObjects2.length = 0;
gdjs.Pause_32screenCode.GDgameOverBackgroundObjects1.length = 0;
gdjs.Pause_32screenCode.GDgameOverBackgroundObjects2.length = 0;
gdjs.Pause_32screenCode.GDblackBGObjects1.length = 0;
gdjs.Pause_32screenCode.GDblackBGObjects2.length = 0;

gdjs.Pause_32screenCode.eventsList0xb2358(runtimeScene);
return;
}
gdjs['Pause_32screenCode'] = gdjs.Pause_32screenCode;
