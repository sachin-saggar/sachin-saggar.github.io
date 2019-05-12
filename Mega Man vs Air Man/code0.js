gdjs.gameStartCode = {};
gdjs.gameStartCode.GDPlayerObjects1= [];
gdjs.gameStartCode.GDPlayerObjects2= [];
gdjs.gameStartCode.GDPlayerHitBoxObjects1= [];
gdjs.gameStartCode.GDPlayerHitBoxObjects2= [];
gdjs.gameStartCode.GDAirmanObjects1= [];
gdjs.gameStartCode.GDAirmanObjects2= [];
gdjs.gameStartCode.GDendOrbObjects1= [];
gdjs.gameStartCode.GDendOrbObjects2= [];
gdjs.gameStartCode.GDAirmanObjects1= [];
gdjs.gameStartCode.GDAirmanObjects2= [];
gdjs.gameStartCode.GDAObjects1= [];
gdjs.gameStartCode.GDAObjects2= [];
gdjs.gameStartCode.GDBGObjects1= [];
gdjs.gameStartCode.GDBGObjects2= [];
gdjs.gameStartCode.GDblueBGObjects1= [];
gdjs.gameStartCode.GDblueBGObjects2= [];
gdjs.gameStartCode.GDwhiteBGObjects1= [];
gdjs.gameStartCode.GDwhiteBGObjects2= [];
gdjs.gameStartCode.GDIObjects1= [];
gdjs.gameStartCode.GDIObjects2= [];
gdjs.gameStartCode.GDstarsObjects1= [];
gdjs.gameStartCode.GDstarsObjects2= [];
gdjs.gameStartCode.GDA2Objects1= [];
gdjs.gameStartCode.GDA2Objects2= [];
gdjs.gameStartCode.GDNObjects1= [];
gdjs.gameStartCode.GDNObjects2= [];
gdjs.gameStartCode.GDMObjects1= [];
gdjs.gameStartCode.GDMObjects2= [];
gdjs.gameStartCode.GDRObjects1= [];
gdjs.gameStartCode.GDRObjects2= [];

gdjs.gameStartCode.conditionTrue_0 = {val:false};
gdjs.gameStartCode.condition0IsTrue_0 = {val:false};
gdjs.gameStartCode.condition1IsTrue_0 = {val:false};


gdjs.gameStartCode.eventsList0xb2358 = function(runtimeScene) {

{


gdjs.gameStartCode.condition0IsTrue_0.val = false;
{
gdjs.gameStartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.gameStartCode.condition0IsTrue_0.val) {
gdjs.gameStartCode.GDAObjects1.createFrom(runtimeScene.getObjects("A"));
gdjs.gameStartCode.GDA2Objects1.createFrom(runtimeScene.getObjects("A2"));
gdjs.gameStartCode.GDIObjects1.createFrom(runtimeScene.getObjects("I"));
gdjs.gameStartCode.GDMObjects1.createFrom(runtimeScene.getObjects("M"));
gdjs.gameStartCode.GDNObjects1.createFrom(runtimeScene.getObjects("N"));
gdjs.gameStartCode.GDRObjects1.createFrom(runtimeScene.getObjects("R"));
{gdjs.evtTools.sound.playSound(runtimeScene, "stageStart.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gameStartTimer");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gameNameTimer");
}{for(var i = 0, len = gdjs.gameStartCode.GDAObjects1.length ;i < len;++i) {
    gdjs.gameStartCode.GDAObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameStartCode.GDIObjects1.length ;i < len;++i) {
    gdjs.gameStartCode.GDIObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameStartCode.GDRObjects1.length ;i < len;++i) {
    gdjs.gameStartCode.GDRObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameStartCode.GDMObjects1.length ;i < len;++i) {
    gdjs.gameStartCode.GDMObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameStartCode.GDA2Objects1.length ;i < len;++i) {
    gdjs.gameStartCode.GDA2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameStartCode.GDNObjects1.length ;i < len;++i) {
    gdjs.gameStartCode.GDNObjects1[i].hide();
}
}}

}


{



}


{


gdjs.gameStartCode.condition0IsTrue_0.val = false;
{
gdjs.gameStartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "gameNameTimer");
}if (gdjs.gameStartCode.condition0IsTrue_0.val) {
gdjs.gameStartCode.GDAObjects1.createFrom(runtimeScene.getObjects("A"));
{for(var i = 0, len = gdjs.gameStartCode.GDAObjects1.length ;i < len;++i) {
    gdjs.gameStartCode.GDAObjects1[i].hide(false);
}
}}

}


{


gdjs.gameStartCode.condition0IsTrue_0.val = false;
{
gdjs.gameStartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.7, "gameNameTimer");
}if (gdjs.gameStartCode.condition0IsTrue_0.val) {
gdjs.gameStartCode.GDIObjects1.createFrom(runtimeScene.getObjects("I"));
{for(var i = 0, len = gdjs.gameStartCode.GDIObjects1.length ;i < len;++i) {
    gdjs.gameStartCode.GDIObjects1[i].hide(false);
}
}}

}


{


gdjs.gameStartCode.condition0IsTrue_0.val = false;
{
gdjs.gameStartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.2, "gameNameTimer");
}if (gdjs.gameStartCode.condition0IsTrue_0.val) {
gdjs.gameStartCode.GDRObjects1.createFrom(runtimeScene.getObjects("R"));
{for(var i = 0, len = gdjs.gameStartCode.GDRObjects1.length ;i < len;++i) {
    gdjs.gameStartCode.GDRObjects1[i].hide(false);
}
}}

}


{


gdjs.gameStartCode.condition0IsTrue_0.val = false;
{
gdjs.gameStartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.7, "gameNameTimer");
}if (gdjs.gameStartCode.condition0IsTrue_0.val) {
gdjs.gameStartCode.GDMObjects1.createFrom(runtimeScene.getObjects("M"));
{for(var i = 0, len = gdjs.gameStartCode.GDMObjects1.length ;i < len;++i) {
    gdjs.gameStartCode.GDMObjects1[i].hide(false);
}
}}

}


{


gdjs.gameStartCode.condition0IsTrue_0.val = false;
{
gdjs.gameStartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.2, "gameNameTimer");
}if (gdjs.gameStartCode.condition0IsTrue_0.val) {
gdjs.gameStartCode.GDA2Objects1.createFrom(runtimeScene.getObjects("A2"));
{for(var i = 0, len = gdjs.gameStartCode.GDA2Objects1.length ;i < len;++i) {
    gdjs.gameStartCode.GDA2Objects1[i].hide(false);
}
}}

}


{


gdjs.gameStartCode.condition0IsTrue_0.val = false;
{
gdjs.gameStartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.7, "gameNameTimer");
}if (gdjs.gameStartCode.condition0IsTrue_0.val) {
gdjs.gameStartCode.GDNObjects1.createFrom(runtimeScene.getObjects("N"));
{for(var i = 0, len = gdjs.gameStartCode.GDNObjects1.length ;i < len;++i) {
    gdjs.gameStartCode.GDNObjects1[i].hide(false);
}
}}

}


{



}


{


gdjs.gameStartCode.condition0IsTrue_0.val = false;
{
gdjs.gameStartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 6.8, "gameStartTimer");
}if (gdjs.gameStartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level part 1");
}}

}


}; //End of gdjs.gameStartCode.eventsList0xb2358


gdjs.gameStartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.gameStartCode.GDPlayerObjects1.length = 0;
gdjs.gameStartCode.GDPlayerObjects2.length = 0;
gdjs.gameStartCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.gameStartCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.gameStartCode.GDAirmanObjects1.length = 0;
gdjs.gameStartCode.GDAirmanObjects2.length = 0;
gdjs.gameStartCode.GDendOrbObjects1.length = 0;
gdjs.gameStartCode.GDendOrbObjects2.length = 0;
gdjs.gameStartCode.GDAirmanObjects1.length = 0;
gdjs.gameStartCode.GDAirmanObjects2.length = 0;
gdjs.gameStartCode.GDAObjects1.length = 0;
gdjs.gameStartCode.GDAObjects2.length = 0;
gdjs.gameStartCode.GDBGObjects1.length = 0;
gdjs.gameStartCode.GDBGObjects2.length = 0;
gdjs.gameStartCode.GDblueBGObjects1.length = 0;
gdjs.gameStartCode.GDblueBGObjects2.length = 0;
gdjs.gameStartCode.GDwhiteBGObjects1.length = 0;
gdjs.gameStartCode.GDwhiteBGObjects2.length = 0;
gdjs.gameStartCode.GDIObjects1.length = 0;
gdjs.gameStartCode.GDIObjects2.length = 0;
gdjs.gameStartCode.GDstarsObjects1.length = 0;
gdjs.gameStartCode.GDstarsObjects2.length = 0;
gdjs.gameStartCode.GDA2Objects1.length = 0;
gdjs.gameStartCode.GDA2Objects2.length = 0;
gdjs.gameStartCode.GDNObjects1.length = 0;
gdjs.gameStartCode.GDNObjects2.length = 0;
gdjs.gameStartCode.GDMObjects1.length = 0;
gdjs.gameStartCode.GDMObjects2.length = 0;
gdjs.gameStartCode.GDRObjects1.length = 0;
gdjs.gameStartCode.GDRObjects2.length = 0;

gdjs.gameStartCode.eventsList0xb2358(runtimeScene);
return;
}
gdjs['gameStartCode'] = gdjs.gameStartCode;
