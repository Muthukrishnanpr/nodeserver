const express = require("express");
const router = express.Router();
const multer = require('multer')
const infoRouter = require("../modules/filePathSchema")

const fileStorageEngine = multer.diskStorage ({
    destination : function (req, file, callback) {
        callback(null, `C:/Users/91978/Desktop/React Frame Work/cilent/public/uploads`);
    },

    filename : function (req, file, callback) {
        callback(null, Date.now() + file.originalname);
    }
});

const upload = multer({ storage : fileStorageEngine })


router.post('/', upload.single('ImageFile'),async (req, res) => {
    console.log(req.file)
    var data = new infoRouter ({
        Name : req.body.Name,
        Role : req.body.Role,
        Status:{
            Active:req.body.Status.Active,
            InActive:req.body.Status.InActive,
        },
        ImageFile : req.file.filename
    })
    await data.save()
    res.json(data)
})

router.get('/', async (req, res) => {
    var findData = await infoRouter.find()
    res.json(findData)
})


module.exports = router;