AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{default:"",type:"string"}
    },
    init:function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesListState()
        })
    },
    handlePlacesListState:function(){
        const id=this.el.getAttribute("id")
        const placesId=["spider-man","avenger","batman","captain-america"]
        if(placesId.includes(id)){
            const placesContainer=document.querySelector("#placesContainer")
            placesContainer.setAttribute("cursor-listener",{selectedItemId:id})
            this.el.setAttribute("material",{color:"white"})
        }
    },
    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId}=this.data
            if(selectedItemId){
                const el=document.querySelector(`#${selectedItemId}`)
                const id=el.getAttribute("id")
                if(id==selectedItemId){
                    el.setAttribute("material",{color:"darkblue"})
                }
            }
        })
    }
})