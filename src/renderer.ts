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


document.getElementById('button-ac').addEventListener('click', async () => {
    document.getElementById('label-input').innerHTML = ""
})

