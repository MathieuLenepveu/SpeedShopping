var mongoose = require('mongoose')

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

mongoose.connect('mongodb+srv://speedshoping:speedshopping2022@cluster0.hexsy.mongodb.net/?retryWrites=true&w=majority',
    options,
    function(err){
        console.log(err);
    }
)