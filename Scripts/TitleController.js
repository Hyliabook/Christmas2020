class TitleController extends GameObject
{

    initButton;
    gameController;


    constructor(type,sid,sx,sy,sheight,swidth, imgSrc)
    {
        super(type,sid,sx,sy,sheight,swidth, imgSrc);
      //  this.testRect = new GameObject("rect", "testRect", 40, 432, 210,56);
       // this.testRect.SetStyle("stroke:dodgerblue;fill:crimson");
    }

    Init()
    {

        let centerX = 540;
        let centerY = 304;
        let butWidth = 120.2;
        let butHeight = 452.2;

        this.initButton = new GameObject("image", "initButton", centerX-(butWidth * 2), centerY-(butWidth/2), butWidth,butHeight, "./Scenes/TitleScreen/yesHoney.png");
        this.initButton.element.onclick = this.AgreeToPolicy;

        this.initButton.StopUpdate();
    }

    AgreeToPolicy(e)
    {
        let titControl = controller.titleController;
        
        titControl.initButton.element.remove();
        titControl.initButton = null;
        document.querySelector("#introText").remove();

        controller.mainVideo.src = "https://www.dropbox.com/s/zxb5fl5z0hk7ai0/HBIUniversal.mp4?raw=1"; 
        controller.mainVideo.load();
        //controller.mainVideo.crossOrigin = "anonymous";
        controller.mainVideo.play();
        controller.mainVideo.muted = false;
    }

}