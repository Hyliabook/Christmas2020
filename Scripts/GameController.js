class GameController extends GameObject
{

    flags;
    titleController;
    mainVideo;
    clipID;
    music;
    sfx;
    topScreen;
    bottomScreen;

    constructor(type,sid,sx,sy,sheight,swidth, imgSrc)
    {
        super(type,sid,sx,sy,sheight,swidth, imgSrc);
        this.mainVideo = document.querySelector("#mainVideo");
        this.music = document.querySelector("#music");
        this.sfx = document.querySelector("#sfx");
        this.topScreen = document.querySelector("#topScreen");
        this.bottomScreen = document.querySelector("#bottomScreen");
    }

    Init()
    {
        this.titleController = new TitleController(null, "titleController");
        this.titleController.Init();
        this.titleController.gameController = this;
        this.mainVideo.onended = this.VideoEnd;
    }

    VideoEnd(e)
    {
        switch(controller.clipID)
        {
            case("HBIUniversal"): controller.titleController.HBIUniversalEnd();
             break;
            case("NoSaveData"): controller.titleController.TitleAppear();
            break;
        }
    }

    SwapClip(newSrc, id)
    {
        this.mainVideo.src = newSrc;
        this.clipID = id;
        this.mainVideo.load();
        this.mainVideo.play();
    }
    
    Update()
    {
        controller.GetDeltaTime();
    }
}