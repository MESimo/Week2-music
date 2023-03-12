const getArtists = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: 'Show me artists'})
}


const postArtist = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Post artist with artist name of
    ${req.body.artistName}
    `})
}


const deleteArtists = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: 'Deleting artists'})
}

module.exports = {
    getArtists,
    postArtist,
    deleteArtists
}