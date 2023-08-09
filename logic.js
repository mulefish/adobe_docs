function fireLAMDirectCallEvent() {

    try {
        const rawString = document.getElementById("objectToSend").value
        const obj = JSON.parse(rawString)
        document.getElementById("objectToSend").value = JSON.stringify(obj, null, 2)
        try {
            window._satellite.track("lam", obj)
            console.log("%c" + JSON.stringify(obj), "background:lightgreen")
        } catch (boom) {
            alert("oh no " + boom)
        }
    } catch (uglyJson) {
        alert("Your json is ill-formed: " + uglyJson)
    }
}

function useDebugMode() {
    document.getElementById("debugMode").innerHTML = "Debug mode is on"
    try {
        const tracker = window._satellite;
        const location = window.location.href;
        if (_satellite) {
            _satellite.setDebug(true);
            _satellite.cookie.set('dtmTrackDev', true);
            sessionStorage.setItem('lapel-debugger', true);
            _satellite.logger.log(`(%E3%81%A3%E2%97%95%E2%80%BF%E2%97%95)%E3%81%A3 Debugging Enabled for ${location}`);
        } else {
            console.warn(`no ${tracker} detected`);
        }
    }
    catch (error) {
        console.warn(`${tracker} not detected, debugging not enabled for ${location}`);
    }
}
