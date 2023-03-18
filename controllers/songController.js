const getSongs = (req, res, next) => {
    if (Object.keys(req.query).length) {
        const {
            songTitle,
            getArtist,
            genre
        } = req.query
    
        const filter = [];
    
        if (songTitle) filter.push(songTitle)
        if (getArtist) filter.push(getArtist)
        if(genre) filter.push(genre)
    
        for (const query of filter) {
            console.log(`Searching song by ${query}`)
        }
    }

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

const getSong = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Show me the song with the Id of ${req.params.songId}
    `})
}

const updateSong = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Update the song with the Id of ${req.params.songId}
    `})
}

const deleteSong = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Delete the song with the Id of ${req.params.songId}
    `})
}


module.exports = {
    getSongs,
    postSong,
    deleteSongs,
    getSong,
    updateSong,
    deleteSong
}