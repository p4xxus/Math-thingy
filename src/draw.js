import React, { Component } from 'react'
import './App.css';
import { encode, decode } from 'hex-encode-decode'

let settings = {
    "amount": "20",
    "size": "20",
    "distance": "0",
    "step": "0.1"
}

function draw() {
    const canvas = document.getElementById("test");
    const ctx = canvas.getContext("2d");

    const centerpoint = {
        x: canvas.width / 2,
        y: canvas.height / 2
    }
    ctx.rotate(0)
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(centerpoint.x, centerpoint.y)

    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.fillStyle = "white";
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    settings.amount++

    for (let index = settings.amount - 1; index > 0; index--) {

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo((Math.sqrt(index + 2)) * settings.size, 0);
        ctx.lineTo((Math.sqrt(index)) * settings.size, -settings.size);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.rotate(-Math.atan(1 / (Math.sqrt(index))) - settings.distance)//rotate canvas at
        // _____
        // |  /  <-- this angle
        // |/
    }
    settings.amount--

    //adding gradient so last triangle wont be the most visible, remove it if you want to know what I mean.
    ctx.fillStyle = "black";
    const grd = ctx.createRadialGradient(0, 0, 1, 0, 0, 4);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "transparent");
    ctx.fillStyle = grd;
    ctx.beginPath()
    ctx.arc(0, 0, 5, 0, 2 * Math.PI);
    ctx.closePath()
    ctx.fill()
}

//_________________________________________________________
//—————————————————————————————————————————————————————————


class Settings extends Component {
    render() {
        const { setting, maximum, defaultValueProp, idProp, multiplier, stepProp } = this.props

        function newValue(event) {
            let valueOfEvent = event.target.value
            const rangeInput = document.getElementById(idProp + "0");
            const numberInput = document.getElementById(idProp + "1");
            rangeInput.value = valueOfEvent; //sync number input with range input
            numberInput.value = valueOfEvent;
            if (!(setting === "step")) { rangeInput.setAttribute("step", settings.step) }
            else rangeInput.setAttribute("step", "0.1")
            valueOfEvent *= multiplier
            settings[`${setting}`] = valueOfEvent;

            draw();
            Encoding();
        }

        return (
            <div className='settingDiv' setting={setting}>
                <p>{setting}</p>
                <input type="range" onChange={newValue} id={idProp + "0"} min="0" max={maximum} defaultValue={defaultValueProp} step={settings.step}></input>
                <input type="number" onChange={newValue} id={idProp + "1"} style={{ width: 5 + "vw" }} defaultValue={defaultValueProp} step={settings.step}></input>
            </div >
        )
    }
}


//--------------------------------------
//En- and decoding
//--------------------------------------
function Encoding() {
    function copyToClipboard() {
        function returnEncoded() {
            return (encode(`${settings.amount} ${settings.size} ${settings.distance}`))//encode stuff
        }
        navigator.clipboard.writeText(returnEncoded());//copy to clipboard
        console.log(returnEncoded());
        console.log("copied");

        const isCopied = document.getElementById("isCopied")
        isCopied.innerText = "Copied!"
        setTimeout(() => {
            isCopied.innerText = ""
        }, 1500);
    }
    return (
        <div className='encodeDiv'>
            <div>
                <p>Encoded hex-string:</p>
            </div>
            <div>
                <button onClick={copyToClipboard}> copy</button>
            </div>
            <p id="isCopied"></p>
        </div>

    )

}

class Decoding extends Component {
    render() {
        function decodeFunc(event) {
            let decoded = decode(event.target.value); //get value
            const settingsArray = Object.values(settings)

            let decodedArray = decoded.split(" "); //split it into array
            if (!(decodedArray.length === settingsArray.length)) {
                if (event.target.value === "") return; //return if nothing
                document.getElementById("errorMessage").innerText = "this is not a hex code."
                setTimeout(() => {
                    document.getElementById("errorMessage").innerText = ""
                }, 1500); //this is not a hex code, if not the hex code I want
            } else {
                let index = 0
                for (const key in settings) {
                    settings[key] = decodedArray[index] //get key and put the value in it.
                    index++
                }
                setTimeout(() => {
                    document.getElementById("encodingInput").value = ""
                }, 800);
                draw()
            }
        }
        return (
            <div className='decodeDiv'>
                <p>Decode: </p>
                <input type="text" id='encodingInput' className='decodeInput' onChange={decodeFunc}></input>
                <p id="errorMessage"></p>
            </div>
        )
    }
}

export default { draw, Settings, settings, Encoding, Decoding }