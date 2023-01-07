chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if(msg.name == "playTrack"){
        var trackName = msg.track
        var audioTag = document.querySelector('.audio-element')
        audioTag.src = `./assets/${trackName}.mp3`
        audioTag.play()
    }
    
    if(msg.name == "stopTrack") {
        var audioTag = document.querySelector('.audio-element')
        audioTag.pause()
    }
})