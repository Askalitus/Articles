module.exports = app => {
    const comments = require("../controllers/comments.controller.js");
  
    var router = require("express").Router();
  
    router.post("/article/:articleId/comment", comments.create);
  
    router.get("/article/:articleId/comments", comments.findAll);

    router.get("/analytic/comments", comments.findByDate);
  
    router.get("/article/:articleId/comment/:id", comments.findOne);
  
    router.patch("/article/:articleId/comment/:id", comments.update);
  
    router.delete("/article/:articleId/comment/:id", comments.delete);
  
    app.use('/', router);
  };