const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ExerciseSchema = new Schema(
    {
        username:String,
        description:String,
        duration:Number,
        date:Date,
    },{
        timestamps:true,
    }

)

module.exports = mongoose.model('Exercise',ExerciseSchema);