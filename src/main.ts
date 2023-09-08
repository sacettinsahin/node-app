import express from "express";

function initExpress(){
    const app = express()
    app.use(express.json())

    return app;
} 

function initRoute(app:express.Express){
    app.use("/", (req,res) => res.status(200))
}

export {initExpress, initRoute}
