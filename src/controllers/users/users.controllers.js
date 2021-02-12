const models = require('../../models');


const createUser = (req, res) => {
    // log
    // verify

    let new_user = new models.UserModel(req.body);
    console.log(req.body)

    new_user.save()
        .then(r => {
            console.log(r)
            if (r) {
                res.status(201).send({
                    status: "Created",
                    code: 201,
                    user: r
                })
            } else {
                res.code = 404
                res.send({
                    status: "Not created",
                    code: 404
                })
            }
        })
        .catch(e => {
            //local log
            console.log(e)
            //email log

            //send error response
            res.status(500).send({
                code: 500,
                status: "Internal server error"})
        });
}

const updateUser = (req, res) => {

    // log
    // verify

    const filter = {_id: req.body.user_id};

    models.UserModel
        .findOneAndUpdate(filter, req.body.update_body)
        .then(r => {
            if (r) {
                res.code = 201;
                res.send({
                    status: "Created",
                    user: r
                })
            } else {
                res.code = 404
                res.send({status: "Not created"})
            }
        })
        .catch(e => {
            //local log
            console.log(e)
            //email log

            //send error response
            res.status(500).send({
                code: 500,
                status: "Internal server error"})
        });
}

const getAllUsers = (req, res) => {

    // log
    console.log('=========Getting all Users=======')

    models.UserModel
        .find()
        .then(r => {
            res.send({
                status: "OK",
                code: 200,
                users: r
            });
        })
        .catch(e => {
        //local log
        console.log(e)
        //email log

        //send error response
        res.status(500).send({
            code: 500,
            status: "Internal server error"})
    });

}

const getUser = (req, res) => {

    models.UserModel
        .findById(req.params.id)
        .then(r => {
            if (r) {
                res.status(200).send({
                    status: "OK",
                    code: 200,
                    user: r
                });
            } else {
                res.status(404).send({
                    status: "Not Found",
                    code: 404
                });
            }
        })
        .catch(e => {
            //local log
            console.log(e)
            //email log

            //send error response
            res.status(500).send({
                code: 500,
                status: "Internal server error"})
        });

}


module.exports = UserController = {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
};