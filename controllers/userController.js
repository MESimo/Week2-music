const getUsers = (req, res, next) => {
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

    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: 'Show me users'})
}


const postUser = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Post user with user name of
    ${req.body.userName}
    `})
}


const deleteUsers = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: 'Deleting users'})
}

const getUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Show me the user with the Id of ${req.params.userId}
    `})
}

const updateUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Update the user with the Id of ${req.params.userId}
    `})
}

const deleteUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Delete the user with the Id of ${req.params.userId}
    `})
}

module.exports = {
    getUsers,
    postUser,
    deleteUsers,
    getUser,
    updateUser,
    deleteUser
}