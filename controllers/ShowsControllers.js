const shows = {
    animations: [
    { name: "Avatar: The Last Airbender", description: "A young boy must master all four elements to save the world.", dateFirstAired: "2005-02-21", stillRunning: false, forKids: true, channelLink: "https://www.nick.com/shows/avatar-the-last-airbender" },
    { name: "Rick and Morty", description: "A sociopathic scientist drags his unintelligent grandson on crazy adventures.", dateFirstAired: "2013-12-02", stillRunning: true, forKids: false, channelLink: "https://www.adultswim.com/videos/rick-and-morty" },
    { name: "The Amazing World of Gumball", description: "The misadventures of a young cat and his family.", dateFirstAired: "2011-05-03", stillRunning: false, forKids: true, channelLink: "https://www.cartoonnetwork.com/video/gumball/index.html" },
    ],

    dramas: [
    { name: "Power Book II: Ghost", description: "A sequel to the series Power, following Tariq St. Patrick.", dateFirstAired: "2020-09-06", stillRunning: true, forKids: false, channelLink: "https://www.starz.com/series/power-book-ii-ghost" },
    { name: "The 100", description: "A post-apocalyptic sci-fi series about survivors returning to Earth.", dateFirstAired: "2014-03-19", stillRunning: false, forKids: false, channelLink: "https://www.cwtv.com/shows/the-100/" },
    { name: "Snowfall", description: "The early days of the crack cocaine epidemic in Los Angeles.", dateFirstAired: "2017-07-05", stillRunning: true, forKids: false, channelLink: "https://www.fxnetworks.com/shows/snowfall" },
    { name: "Money Heist", description: "A criminal mastermind plans the biggest heist in recorded history.", dateFirstAired: "2017-05-02", stillRunning: false, forKids: false, channelLink: "https://www.netflix.com/title/80192098" },
    { name: "Stranger Things", description: "Kids in a small town uncover a supernatural mystery.", dateFirstAired: "2016-07-15", stillRunning: true, forKids: true, channelLink: "https://www.netflix.com/title/20138730" },
    { name: "The Queen's Gambit", description: "A chess prodigy battles addiction in a quest for greatness.", dateFirstAired: "2020-10-23", stillRunning: false, forKids: false, channelLink: "https://www.netflix.com/title/80211991" },
    { name: "The Challenge", description: "Contestants compete in a series of extreme challenges.", dateFirstAired: "1998-06-30", stillRunning: true, forKids: false, channelLink: "https://www.mtv.com/shows/the-challenge" },
    ],

    reality: [
    { name: "The Voice", description: "A singing competition featuring celebrity coaches.", dateFirstAired: "2011-04-26", stillRunning: true, forKids: true, channelLink: "https://www.nbc.com/the-voice" },
    { name: "The Masked Singer", description: "Celebrities compete in disguise and are unmasked at the end.", dateFirstAired: "2019-01-02", stillRunning: true, forKids: true, channelLink: "https://www.fox.com/the-masked-singer/" },
    { name: "MasterChef", description: "Home cooks compete in a series of culinary challenges.", dateFirstAired: "2010-07-27", stillRunning: true, forKids: true, channelLink: "https://www.fox.com/masterchef/" },
]}


const getShows = (req, res) => {
    res.send(shows)
}

const getAnimations = (req, res) => {
    res.send(shows.animations)
}

const getAnimationsById = (req, res) => {
    res.send(shows.animations[req.params.id])
}
const getDramas = (req, res) => {
    res.send(shows.dramas)
}

const getDramasById = (req, res) => {
    res.send(shows.dramas[req.params.id])
}
const getReality = (req, res) => {
    res.send(shows.reality)
}

const getRealityById = (req, res) => {
    res.send(shows.reality[req.params.id])
}




module.exports = {
    getShows, 
    getAnimations,
    getAnimationsById,
    getDramas,
    getDramasById,
    getReality,
    getRealityById
}