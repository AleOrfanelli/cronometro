var seg = 00
var min = 00
var hr = 00
var intervalo

function doisdigitos(digit) {
    if (digit < 10) {
        return ('0' + digit)
    } else {
        return (digit)
    }
}

function start() {
    relogio()
    intervalo = setInterval(relogio, 1000)
}

function pause() {
    clearInterval(intervalo)
}

function stop() {
    seg = 0
    min = 0
    document.getElementById('relogio').innerText = "00:00:00"
    clearInterval(intervalo)
}

function relogio() {
    seg++
    if (seg == 60) {
        min++
        seg = 0
    } if (min == 60) {
        hr++
        min = 0
    }
    document.getElementById('relogio').innerText = doisdigitos(hr) + ':' + doisdigitos(min) + ':' + doisdigitos(seg)
}
