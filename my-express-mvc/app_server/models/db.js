let mongoose=require("mongoose");
let dbURL = "mongodb+srv://paw2:si@paw2.iendmj6.mongodb.net/PAWII-SI?retryWrites=true&w=majority&appName=paw2";

mongoose.connect(dbURL,{
   //useNewURLParser: true
});

mongoose.connection.on("connected",() => {
 console.log("connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
console.log("disconnected from MongoDB");
});