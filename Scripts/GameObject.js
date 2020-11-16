class GameObject
{
    x;
    y;
    element;
    svgObject;
    updateInstance;
    lastFrameTime;
    currentFrameTime;
    deltaTime;
    height;
    width;
    timer;
    svgNS;
    id;


    constructor(type,sid,sx,sy,sheight,swidth,imgSrc)
    {

        this.svgNS = "http://www.w3.org/2000/svg";
        this.svgObject = document.querySelector("#svgObject");
        this.id = sid;

        if(type != null)
        {

        this.element = document.createElementNS(this.svgNS, type);
        this.element.setAttributeNS(null, "id", sid);
        this.svgObject.appendChild(this.element);
        this.x = sx;
        this.element.setAttributeNS(null,"x", Math.trunc(sx));
        this.y = sy;
        this.element.setAttributeNS(null,"y", Math.trunc(sy));
        this.height = sheight;
        this.element.setAttributeNS(null, "height", Math.trunc(sheight));
        this.width = swidth;
        this.element.setAttributeNS(null, "width", Math.trunc(swidth));
        
        if(imgSrc != undefined)
            this.element.setAttributeNS(null, "href", imgSrc);
        

        }
        else
        {
            this.x = 0;
            this.y = 0;
            this.width = 0;
            this.height = 0;
            this.element = null;
        }

        this.updateInstance = setInterval(this.Update, 16.3333, this);
    }

    Update(thisObject)
    {
        
    }

    GetDeltaTime()
    {
        this.timer = new Date();
        this.currentFrameTime = this.timer.getTime();

        let pendingDeltaTime = this.currentFrameTime - this.lastFrameTime;
        this.deltaTime = (pendingDeltaTime < 5000) ? pendingDeltaTime : 0;
        this.lastFrameTime = this.timer.getTime();     
    }

    StopUpdate()
    {
        clearInterval(this.updateInstance);
    }

    StartUpdate()
    {
        this.updateInstance = setInterval(this.Update, 16.3333, this);
    }

    SetStyle(styleParams)
    {
       this.element.setAttributeNS(null, "style", styleParams); 
    }

    SetX(sx)
    {
        this.x = sx;
        this.element.setAttributeNS(null, "x", Math.trunc(sx));
    }

    SetY(sy)
    {
        this.y = sy;
        this.element.setAttributeNS(null, "y", Math.trunc(sy));
    }

    SetPosition(sx, sy)
    {
        this.x = sx;
        this.element.setAttributeNS(null, "x", Math.trunc(sx));
        this.y = sy;
        this.element.setAttributeNS(null, "y", Math.trunc(sy));
    }

    SetHeight(sh)
    {
        this.height = sh;
        this.element.setAttributeNS(null, "height", Math.trunc(sh));
    }

    SetWidth(sw)
    {
        this.width = sw;
        this.element.setAttributeNS(null, "width", Math.trunc(sw));
    }

    SetSize(sw,sh)
    {
        this.height = sh;
        this.element.setAttributeNS(null, "height", Math.trunc(sh));
        this.width = sw;
        this.element.setAttributeNS(null, "width", Math.trunc(sw));
    }

    SetTransforms(sx,sy,sh,sw)
    {
        this.x = sx;
        this.element.setAttributeNS(null, "x", Math.trunc(sx));
        this.y = sy;
        this.element.setAttributeNS(null, "y", Math.trunc(sy));
        this.height = sh;
        this.element.setAttributeNS(null, "height", Math.trunc(sh));
        this.width = sw;
        this.element.setAttributeNS(null, "width", Math.trunc(sw));
    }
}