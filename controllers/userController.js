const User = require('../models/User');

const getUsers = async (req, res, next) => {
    if (Object.keys(req.query).length) {
        const {
            userName,
            gender
        } = req.query
    
        const filter = [];
    
        if (userName) filter.push(userName)
        if (gender) filter.push(gender)
    
        for (const query of filter) {
            console.log(`Searching user by ${query}`)
        }
    }

    try {
        const usersPayload = await User.find();

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(usersPayload)
    } catch (err) {
        throw new Error(`Error retrieving users: ${err.message}`);
    }
}


const postUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body)

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    } catch (err) {
        throw new Error(`Error creating user: ${err.message}`)
    }
}


const deleteUsers = async (req, res, next) => {
    try {
        const users = await User.deleteMany();

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(users)
    } catch (err) {
        throw new Error(`Error deleting users: ${err.message}`)
    }
}

const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.param.userId);

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    } catch (err) {
        throw new Error(`Error retrieving user: ${err.message}`)
    }
}

const updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true});

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    } catch (err) {
        throw new Error(`Error updating user: ${err.message}`) 
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.userId);

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedUser)
    } catch (err) {
        throw new Error(`Error deleting user: ${err.message}`)
    }
}

module.exports = {
    getUsers,
    postUser,
    deleteUsers,
    getUser,
    updateUser,
    deleteUser
}