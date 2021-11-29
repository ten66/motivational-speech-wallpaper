
class Wallpaper{

  constructor(text, color, bgUrl, positionY, positionX){
      this.text = text;
      this.color = color;
      this.bgUrl = bgUrl;
      this.positionY = positionY;
      this.positionX = positionX;
  }
}

function motivationalSpeechWallpaper(wallpapers, domObj){
  let positionYList = {
      "top": "align-items-start",
      "center": "align-items-center",
      "bottom": "align-items-end"
  }
  let positionXList = {
      "left": "justify-content-start",
      "center": "justify-content-center",
      "right": "justify-content-end"
  }

  let htmlSection = "";

  for(let i = 0; i < wallpapers.length; i++){
  htmlSection += 
  `
  <div style="background-image: url(${wallpapers[i].bgUrl});" class="bg-size d-flex ${positionYList[wallpapers[i].positionY]} ${positionXList[wallpapers[i].positionX]}">
      <div style="color: ${wallpapers[i].color};">
          <h2>${wallpapers[i].text}</h2>
      </div>
  </div>
  `;}

  return domObj.innerHTML = htmlSection;
}

let domObj = document.getElementById("target");

let wallpapers = [
  new Wallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "2c3e50", "https://recursionist.io/img/different-job.png", "center", "center"),
  new Wallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "2c3e50", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "left"),
  new Wallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "top", "right")
]

motivationalSpeechWallpaper(wallpapers, domObj);