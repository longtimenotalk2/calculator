// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

// enum Digit {i0="0", i1="1",i2="2",i3="3",i4="4",i5="5",i6="6",i7="7",i8="8",i9="9"}
type Digit = '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'

class Calculator {
    private Num1?:number
    private Answer?:number
    private isminus:boolean

    constructor(private document:Document) {
        this.Num1 = undefined
        this.Answer = null
        this.isminus = true
    }

    input_number(digit:Digit){
        if (this.Num1 == undefined) {
            if (digit != "0") {
                if (this.isminus) {
                    this.Num1 = Number(digit)
                } else {
                    this.Num1 = -Number(digit)
                }
                this.isminus = true
            }
        } else {
            this.Num1 = Number(`${this.Num1}` + digit)
        }
        this.refresh()
    }

    minus(){
        if (this.Num1 == undefined) {
            this.isminus = !this.isminus
        }
        this.refresh()
    }

    AC(){
        this.Num1 = undefined
        this.Answer = null
        this.refresh()
    }

    enter(){
        if (this.Num1 != undefined) {
            this.Answer = this.Num1
            this.Num1 = undefined
            this.refresh()
        }
    }

    refresh(){
        if (this.Num1 == undefined) {
            if (this.isminus) {
                document.getElementById('label-input').innerHTML = ""
            } else {
                document.getElementById('label-input').innerHTML = "-"
            }
            
        } else {
            document.getElementById('label-input').innerHTML = `${this.Num1}`
        }
        if (this.Answer == null) {
            document.getElementById('label-output').innerHTML = ""
        } else {
            document.getElementById('label-output').innerHTML = `${this.Answer}`
        }
    }
}

let MyCal = new Calculator(document)

for (let index = 0; index < 10; index++) {
    document.getElementById(`button-${index}`).addEventListener('click', async () => {
        MyCal.input_number(<Digit>`${index}`)
    })   
}

document.getElementById('button-minus').addEventListener('click', async () => {
    MyCal.minus()
})

document.getElementById('button-ac').addEventListener('click', async () => {
    MyCal.AC()
})

document.getElementById('button-enter').addEventListener('click', async () => {
    MyCal.enter()
})