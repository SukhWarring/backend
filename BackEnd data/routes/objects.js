const express = require("express");
const router = express.Router();
const Object = require("./models/ObjectsModel");

router.get('/', (req, res) =>
{
        res.send('object list');
})

router.post('/id', (req, res) =>
{
        const objectID = new Object({
                color: req.body.color
        });
        objectID.save()
                .then(data =>
                {
                        res.json(data);
                })
                .catch(err =>
                {
                        res.json({ message: err });
                });

});

module.exports = router;