 
 import{ randomUUID } from "node:crypto"
 export class DatabaseMemory{
    
    #videos = new Map()
  
    list(search){
       return Array.from(this.#videos.entries())
       .map((videArray)=>{
        const id = videArray[0]
        const data =videArray[1]
        return{
            id,
            ...data,
        }
       })
       .filter(video =>{
        if (search){
          return video.title.includes(search)
        }
        return true
       })
    }


  creat(video){
    const videoId=randomUUID()

    //randomUUID id unico universal    
    
    this.#videos.set(videoId, video)
  }

  update(id, video){
    this.#videos.set(id, video)
  }
  delete(id){
    this.#videos.delete(id)
  }

}