const formidable = require('formidable');
module.export = register = async (req, res) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(500).json({error: "Error parsing Form Data"});
        }
    })
}