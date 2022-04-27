const router = require("express").Router();
let todos = require("./todo-module");

router.route("/").get((req, res) => {
  todos
    .find()
    .then((todo) => res.json(todo))
    .catch((err) => res.status(400).json("Error : " + err));
});

router.route("/add").post((req, res) => {
  //const item = req.body.item;
	const {item, work, happen} = req.body;
  const newItem = new todos({ item, work, happen });

  newItem
    .save()
    .then(() => res.json("Item Added"))
    .catch((err) => res.status(400).json("Error : " + err));
});

router.route("/:id").get((req, res) => {
  let id = req.params.id;
  todos
    .findById(id)
    .then((singleItem) => res.json(singleItem))
    .catch((err) => res.status(400).json("Error : " + err));
});

router.route("/:id").delete((req, res) => {
  let id = req.params.id;
  todos
    .findByIdAndDelete(id)
    .then(() => res.json("Todo Item Deleted Successfully : " + id))
    .catch((err) => res.status(400).json("Error : " + err));
});

router.route("/update/:id").post((req, res) => {
  let id = req.params.id;
  todos
    .findById(id)
    .then((todo) => {
      todo.item = req.body.item;

      todo
        .save()
        .then(() => res.json("TODO List updated Successfully!"))
        .catch((err) => res.status(400).json("Error : " + err));
    })
    .catch((err) => res.status(400).json("Error : " + err));
});

module.exports = router;
