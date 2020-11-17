class TitleController extends GameObject
{

    initButton;
    gameController;
    saveText1;
    saveText2;


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

        console.log("what the fuck");

        this.initButton.StopUpdate();
    }

    AgreeToPolicy(e)
    {
        let titControl = controller.titleController;
        
        titControl.initButton.element.remove();
        titControl.initButton = null;
        document.querySelector("#introText").remove();

        controller.SwapClip("./Scenes/TitleScreen/Video/HBIUniversal.mp4", "HBIUniversal");
        controller.mainVideo.muted = false;
    }

    Update()
    {
        let thisObject = controller.titleController;
    }

    HBIUniversalEnd()
    {
        if(localStorage.getItem("flags") == null)
        {
            this.gameController.SwapClip("./Scenes/TitleScreen/Video/NoSaveData.mp4", "NoSaveData");
            this.InitializeSaveData();
        }
        else
        {
            this.LoadSaveData();
        }
    }

    InitializeSaveData(){
        this.gameController.flags = {
            "intro" : false
        };
    }

    LoadSaveData()
    {

    }

    TitleAppear()
    {
        this.gameController.SwapClip("./Scenes/TitleScreen/Video/title.mp4");
    }

}