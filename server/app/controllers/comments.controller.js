const db = require("../models");
const Comment = db.comments;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.text) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

    const comment = {
        text: req.body.text,
        articleId: req.params.articleId
      };
    
      Comment.create(comment)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Comment."
          });
        });
};

exports.findAll = (req, res) => {
    Comment.findAll({where: {articleId: req.params.articleId}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving comments."
      });
    });
};

exports.findByDate = (req, res) => {
    const dateFrom = new Date(req.query.dateFrom)
    const dateTo = new Date(req.query.dateTo)
    dateFrom.setHours(dateFrom.getHours() + 3)
    dateTo.setHours(dateTo.getHours() + 27)

    Comment.findAll({ where: {
        createdAt: {
            [Op.lte]: dateTo,
            [Op.gte]: dateFrom
        }
    }, order: ['articleId']})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving comments."
        });
      });
  };

exports.findOne = (req, res) => {
    const id = req.params.id;

    Comment.findByPk(id, {where: {articleId: req.params.articleId}})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Comment with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Comment with id=" + id
        });
      });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Comment.update(req.body, {
      where: { id: id, articleId: req.params.articleId }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Comment was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Comment with id=${id}. Maybe Comment was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Comment with id=" + id
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Comment.destroy({
      where: { id: id, articleId: req.params.articleId }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Comment was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Comment with id=${id}. Maybe Comment was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Comment with id=" + id
        });
      });
};