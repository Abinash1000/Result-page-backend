const mongoose = require('mongoose');


const resultSchema = new mongoose.Schema({
    username: {
        type: String,
        require:true,
    },
    branch:{
        type:String,
        require:true,
    },
    college:{
        type:String,
        require:true,
    },
    examination:{
        type:String,
        require:true,
    },
    regno:{
        type:Number,
        require:true,
    },
    result:{
        sub_1:{
            type:String,
            require:true,
        },
        sub_2:{
            type:String,
            require:true,
        },
        sub_3:{
            type:String,
            require:true,
        },
        sub_4:{
            type:String,
            require:true,
        },
        sub_5:{
            type:String,
            require:true,
        },
        sub_6:{
            type:String,
            require:true,
        },
        sub_7:{
            type:String,
            require:true,
        },
        sub_8:{
            type:String,
            require:true,
        },
        sub_9:{
            type:String,
            require:true,
        },
        sub_10:{
            type:String,
            require:true,
        },
        cgpa:{
            type:String,
            require:true,
        }
    }
    });

const Result=mongoose.model("Result",resultSchema);
module.exports=Result;