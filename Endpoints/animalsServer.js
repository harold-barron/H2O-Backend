var express = require('express');
var router = express.Router();

router.get('/',async(req,res) =>
  {
    const allUseres = await prisma.animals.findMany({});
    res.json(allUseres);
  })
//export this router to use in our index.js
module.exports = router;


