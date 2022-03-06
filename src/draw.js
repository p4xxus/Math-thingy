import React, { Component } from 'react'
import './App.css';

let settings = {
    "size": 20,
    "amount": 20,
    "distance": 0,

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
        const { setting, maximum, defaultValueProp, idProp, multiplier } = this.props

        function newValue(event) {
            let valueOfEvent = event.target.value
            document.getElementById(idProp + "0").value = valueOfEvent;
            document.getElementById(idProp + "1").value = valueOfEvent;
            valueOfEvent *= multiplier
            settings[`${setting}`] = valueOfEvent;
            draw();
            console.log(settings);
        }

        return (
            <div className='settingDiv' setting={setting}>
                <p>{setting}</p>
                <input type="range" onChange={newValue} id={idProp + "0"} min="0" max={maximum} defaultValue={defaultValueProp}></input>
                <input type="number" onChange={newValue} id={idProp + "1"} style={{ width: 5 + "vw" }} defaultValue={defaultValueProp} min="-5"></input>
            </div >
        )
    }
}

export default { draw, Settings, settings }