const formidable = require('formidable');
const users = require('../../Models/model-users');
const register = async (req, res) => {
    console.log("Registration Process Started")
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(500).json({ error: "Error parsing Form Data" });
        }

        console.log(fields)

        try {

            const check = await users.findOne({ email: fields['email'][0] });

            console.log(check)

            if (!check) {
                const insert = await users.insertMany({ email: fields['email'][0], password: fields['password'][0] });
                if (insert) {
                    res.json({ message: "Form Data Received Successfully", type: 'success' })
                } else {
                    res.json({ message: "Failed to Register", type: 'error' })
                }
            } else {
                res.json({ message: "User Already Exists", type: "error" })
            }
        } catch (error) {
            res.json({ message: "Something Went Wrong", type: "error" })
        }
    })
}

module.exports = {
    register
}