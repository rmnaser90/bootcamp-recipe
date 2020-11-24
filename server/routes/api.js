const express = require('express')
const router = express.Router()
const APImanager = require('./APImanager')
const apiManager = new APImanager

setInterval(() => {
    apiManager.getPlayers()
    }, 1000*60*60*24);
    
    apiManager.getPlayers()

    

    router.get('/teams/:teamName',function (req,res) {
        const teamName=req.params.teamName
        res.send(apiManager.loadTeamPlayers(teamName))
          
        })

        module.exports= router