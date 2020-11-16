class GameController extends GameObject
{

    flags;
    titleController;
    mainVideo;

    constructor(type,sid,sx,sy,sheight,swidth, imgSrc)
    {
        super(type,sid,sx,sy,sheight,swidth, imgSrc);
        this.mainVideo = document.querySelector("#mainVideo");
    }

    Init()
    {
        this.titleController = new TitleController(null, "titleController");
        this.titleController.Init();
        this.titleController.gameController = this;
    }
    
    Update(thisObject)
    {
        thisObject.GetDeltaTime();

    }
}