'use strict'

const Cards = require('../models/cards')

const PostCards = async (req, res, next) => {
    const { name, role, description, contact } = req.body
    // const {profile} = req.file
    try {
        const data = new Cards({
            name, role, description, contact,
            profile: {
                fileName: req.file.originalname,
                filePath: req.file.path,
                fileType: req.file.mimetype,
                fileSize: fileSizeFormatter(req.file.size, 2)
            }
        })
        await data.save()
        res.status(201).send("Yours Cards are Upload Successfully!")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const GetCards = async (req, res) => {
    try {
        const data = await Cards.find();
        if (!data) throw Error("No Cards")

        res.status(200).json(data)
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

const DeleteCards = async (req, res) => {
    try {
        const data = await Cards.findByIdAndRemove(req.params.id)
        if (!data) throw Error("No data Found")

    //    / const removed = await Cards.remove(req.params.id)
    //    / if (!removed) throw Error("Something went wrong while trying to delete the item")
        res.status(200).json({ success: true });
    } catch (e) {
        res.status(400).json({ msg: e.message, success: false });
    }
}

//##

const fileSizeFormatter = (bytes, decimal) => {
    if (bytes === 0) {
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}

module.exports = { PostCards, GetCards, DeleteCards };