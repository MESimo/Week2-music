const Song = require('../models/Song');

const getSongs = async (req, res, next) => {
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

    try {
        const songsPayload = await Song.find();

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(songsPayload)   
    } catch (err) {
        throw new Error(`Error retrieving songs: ${err.message}`);
    }
}


const postSong = async (req, res, next) => {
    try {
        const song = await Song.create(req.body)

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(song)
    } catch (err) {
        next(err)
    }
}


const deleteSongs = async (req, res, next) => {
    try {
        const songs = await Song.deleteMany()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(songs)      
    } catch (err) {
        next(err)
    }  
}

const getSong = async (req, res, next) => {
    try {
        const song = await Song.findById(req.param.songId)
    
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(song)
    } catch (err) {
        next(err)
    } 
}

const updateSong = async (req, res, next) => {
    try {
        const song = await Song.findByIdAndUpdate(req.params.songId, req.body, {new: true})

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(song)
    } catch (err) {
        next(err)
    }
}

const deleteSong = async (req, res, next) => {
    try {
        const deletedSong = await Song.findByIdAndDelete(req.params.songId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedSong)
    } catch (err) {
        next(err)
    }
}


module.exports = {
    getSongs,
    postSong,
    deleteSongs,
    getSong,
    updateSong,
    deleteSong
}