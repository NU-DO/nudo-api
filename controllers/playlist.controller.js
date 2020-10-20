const Playlist = require('../models/playlist.model')
const createError = require('http-errors')
const SpotifyWebApi = require('spotify-web-api-node')

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
})

spotifyApi.clientCredentialsGrant()
    .then(data => spotifyApi.setAccessToken(data.body['access_token']))
    .catch(error => console.log('Something went wrong when retrieving an access token', error))

module.exports.getSongs = (req, res, next) => {
    Playlist.find({ user: req.session.user.id })
        .then(songs => {
            console.log('Ver songs:', songs)
            res.json(songs)
        })
        .catch(next)
}

module.exports.create = (req, res, next) => {
    const playlist = new Playlist({
        user: req.session.user.id,
        songId: req.body.songId,
        decade: req.body.decade
    })

    playlist.save()
        .then(playlist => res.status(201).json(playlist))
        .catch(next)
}

module.exports.edit = (req, res, next) => {
    const body = req.body

    Playlist.findOneAndUpdate({ _id: req.params.id }, body, { runValidators: true, new: true })
        .then(playlist => {
            res.status(201).json(playlist)
        })
        .catch(next)
}

module.exports.delete = (req, res, next) => {
    Playlist.findByIdAndRemove(req.params.id)
        .then(playlist => res.status(200).json(playlist))
        .catch(err => console.log(err))
}

module.exports.getArtistsFromSpotify = (req, res, next) => {;
    spotifyApi.searchArtists(`${req.body.search}`)
        .then(data => {
            res.json(data)
        })
        .catch(err => console.log('The error while searching artists occurred: ', err))
}

module.exports.getSongsFromSpotify = (req, res, next) => {;
    spotifyApi.searchTracks(`${req.body.search}`)
        .then(data => {
            console.log(data.body.tracks.items);
            res.json(data)
        })
        .catch(err => console.log('The error while searching artists occurred: ', err))
}