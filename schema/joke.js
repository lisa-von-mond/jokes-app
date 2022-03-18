import {Schema, model} from "mongoose"

const jokeSchema = new Schema ({

name: { type: String, required: true, minlength: 5 },
rank: {type:String},
bookmarked: {type:Boolean}    

})

export default model("Joke", jokeSchema, "jokes", {overwriteModels:true})