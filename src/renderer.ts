// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

for (let index = 1; index < 10; index++) {
    document.getElementById(`button-${index}`).addEventListener('click', async () => {
        document.getElementById('label-input').innerHTML += `${index}`
    })   
}

document.getElementById(`button-0`).addEventListener('click', async () => {
    let input_now = document.getElementById('label-input').innerHTML
    if (input_now != "") {
        document.getElementById('label-input').innerHTML += '0'
    }
}) 

document.getElementById('button-ac').addEventListener('click', async () => {
    document.getElementById('label-input').innerHTML = ""
    document.getElementById('label-output').innerHTML = ""
})

document.getElementById('button-enter').addEventListener('click', async () => {
    let result = document.getElementById('label-input').innerHTML
    if (result != "") {
        document.getElementById('label-output').innerHTML = result
        document.getElementById('label-input').innerHTML = ""
    }
})