const getSongs = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: 'Show me songs'})
}


const postSong = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Post song with song name of 
    ${req.body.songName}
    `})
}


const deleteSongs = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: 'Deleting songs'})
}

module.exports = {
    getSongs,
    postSong,
    deleteSongs
}