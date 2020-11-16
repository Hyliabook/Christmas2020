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

        controller.mainVideo.src = "https://r1---sn-vgqskn7z.c.drive.google.com/videoplayback?expire=1605522934&ei=th2yX6_bF7nvrvIP6pWN2A4&ip=2604:6000:1013:e21:3d60:c01a:ed05:5ed3&cp=QVRFV0ZfUVlRRVhPOmw3UlBsMDNmc2JzSFExOUxxb29PbnlnRGdsQ09RMDRaaDFHVVZNclJGXzQ&id=0a4a3bf4190e949d&itag=18&source=webdrive&requiressl=yes&mh=I7&mm=32&mn=sn-vgqskn7z&ms=su&mv=m&mvi=1&pl=32&sc=yes&ttl=transient&susc=dr&driveid=1zLZV7AaQaKaWMX9CXnnX91pyR3Gw9gD-&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=33.088&lmt=1605505113665795&mt=1605508455&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgFetuHFpNwol21UZgvrUlZv60eOKKWpws-wUs1Ju8OH0CIEt8yCWsqxcUHOBIaYfBCXoUM0lU4r3xnMQ9rlGgVc-n&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc&lsig=AG3C_xAwRQIgaP9N5qywYUJLBnLbDI2obVcXHvHhuJenP21qWr8p53QCIQD2osDmTRF7i7vhwFLmuejVl5rlMqLRZ6lOtgD7Q48v4w==&cpn=cZQ5F2N7FlKdo7P6&c=WEB_EMBEDDED_PLAYER&cver=20201112"; 
        controller.mainVideo.load();
        //controller.mainVideo.crossOrigin = "anonymous";
        controller.mainVideo.play();
        controller.mainVideo.muted = false;
    }

}