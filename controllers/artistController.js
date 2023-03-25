const Artist = require('../models/Artist');

const getArtists = async (req, res, next) => {
    if (Object.keys(req.query).length) {
        const {
            firstName,
            lastName,
            genre
        } = req.query
    
        const filter = [];
    
        if (firstName) filter.push(firstName)
        if (lastName) filter.push(lastName)
        if(genre) filter.push(genre)
    
        for (const query of filter) {
            console.log(`Searching artist by ${query}`)
        }
    }

    try {
        const artistsPayload = await Artist.find();

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(artistsPayload)
    } catch (err) {
        throw new Error(`Error retrieving artists: ${err.message}`);
    }
}


const postArtist = async (req, res, next) => {
    const artist = await Artist.create(req.body);

    try {
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(artist)
    } catch (err) {
        next(err)
    }
}


const deleteArtists = async (req, res, next) => {
    try {
        const artists = await Artist.deleteMany()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(artists)
    } catch (err) {
        next(err)
    }
}

const getArtist = async (req, res, next) => {
    try {
        const artist = await Artist.findById(req.param.artistId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(artist)
    } catch (err) {
        next(err)
    }
}

const updateArtist = async (req, res, next) => {
    try {
        const artist = await Song.findByIdAndUpdate(req.params.artistId, req.body, {new: true})

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(artist)
    } catch (err) {
        next(err)
    }
}

const deleteArtist = async (req, res, next) => {
    try {
        const deletedArtist = await Song.findByIdAndDelete(req.params.artistId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedArtist)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getArtists,
    postArtist,
    deleteArtists,
    getArtist,
    updateArtist,
    deleteArtist
}