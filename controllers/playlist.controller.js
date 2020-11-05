const Playlist = require('../models/playlist.model')
const createError = require('http-errors')
const SpotifyWebApi = require('spotify-web-api-node')
const axios = require('axios')

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET
})

let token
spotifyApi.clientCredentialsGrant()
    .then(data => {
        token = data.body['access_token']
        spotifyApi.setAccessToken(data.body['access_token'])
    })
    .catch(error => console.log('Something went wrong when retrieving an access token', error))

module.exports.getSongs = (req, res, next) => {
    Playlist.find({ user: req.session.user.id })
        .then(songs => {
            res.json(songs)
        })
        .catch(next)
}

module.exports.getSongsFromSpotify = (req, res, next) => { 
    axios({
        url: `https://api.spotify.com/v1/search?q=${req.body.search}&type=track&market=GB`,
        method: 'get',
        headers: { 'Authorization': `Bearer ${token}` }
    })
        .then(songs => {
            res.json(songs.data.tracks.items)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

module.exports.create = (req, res, next) => {
    const playlist = new Playlist({
        user: req.session.user.id,
        name: req.body.name,
        artists: req.body.artists,
        url: req.body.url,
        decade: req.body.decade,
        image: req.body.album.images[0].url
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