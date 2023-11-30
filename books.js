AFRAME.registerComponent("book", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },
  createCards: function () {
    const thumbNailsRef = [

      {
        id:"spider-man",
        title:"Spider man",
        url:"./assets/spider_man.jpg"
      },
      {
        id:"avenger",
        title:"Avenger",
        url:"./assets/avengers.jpg"
      },
      {
        id:"batman",
        title:"Batman",
        url:"./assets/batman.jpeg"
      },
      {
        id:"captain-america",
        title:"Captain America",
        url:"./assets/captain_america.jpeg"
      }
    ];

    let previousX=-60

    for(var i of thumbNailsRef){
      const posX=previousX+25 
      const posY=10
      const posZ=-40
      const position={x:posX,y:posY,z:posZ}
      previousX=posX

      const border=this.createBorder(position,i.id)
      const thumbnail=this.createThumbnail(position,i)
      border.appendChild(thumbnail)
      const title=this.createTitle(position,i)
      border.appendChild(title)

      this.placesContainer.appendChild(border)
    }

  },
  createBorder:function(position,id){
    const entity=document.createElement("a-entity")
    entity.setAttribute("id",id)
    entity.setAttribute("visible",true)
    entity.setAttribute("position",position)
    entity.setAttribute("geometry",{
      primitive:"plane",
      width:20,
      height:28
    })
    entity.setAttribute("material",{color:"darkblue"})
    entity.setAttribute("cursor-listener",{})
    return entity
  },
  createThumbnail:function(position,i){
    const entity=document.createElement("a-entity")
    entity.setAttribute("visible",true)
    const pos=position
    pos.z=1
    pos.x=0
    pos.y=-0.25
    entity.setAttribute("position",pos)
    entity.setAttribute("geometry",{
      primitive:"plane",
      width:18,
      height:26,
    })
    entity.setAttribute("material",{src:i.url})
    return entity
  },
  createTitle:function(position,i){
    const entity=document.createElement("a-entity")
    entity.setAttribute("visible",true)
    const pos=position
    pos.y=-22
    entity.setAttribute("position",pos)
    entity.setAttribute("text",{
      font:"exo2bold",
      align:"center",
      width:70,
      color:"black",
      value:i.title
    })
    return entity
  }
  
});


