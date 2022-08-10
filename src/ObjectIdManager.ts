import ObjectId from 'bson-objectid'

export default class ObjectIdManager{
    ids = new Set()

    constructor(){
        this.ids = new Set()
    }
    fetch(){
        let id = String(ObjectId())
        while(this.ids.has(id))
        {
            id = String(ObjectId())
        }
        this.ids.add(id)

        return id
    }
    set(id: string)
    {
        if(this.ids.has(id))
        {
            throw new Error(`ID ${id} has already been used.`)
        }
        this.ids.add(id)
    }
    reset()
    {
        this.ids.clear()
    }
}