const app = require("./index");

const connect = require("./configs/db");

app.listen(6500, async()=> {

    try{
        await connect();
        console.log("listening on port 6500");

    }
    catch{
        console.log("port is not working")
    }
  
});
