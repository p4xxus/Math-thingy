import Darkmode from 'darkmode-js';
import React, { Component } from 'react'

const darkmode = new Darkmode();

class DarkmodeClass extends Component {
    render() {
        function toogleDarkmode() {
            darkmode.toggle();
            // if (darkmode.isActivated()) document.cookie = "darkmodeEnabled=true; expires= 06 Oct 2022 20:00:00 UTC; path=/ ";
            // else document.cookie = "darkmodeEnabled=false"
            // console.log(document.cookie);
        }
        // function isDarkmodeEnabled() {
        //     console.log("hi");
        //     if (darkmode.isActivated()) document.getElementById("darkmodeCheckbox").checked = true;
        // }

        return (
            <div>
                <div>
                    <p>Darkmode</p>
                </div>
                <div className='checkboxDiv'>
                    <input type="checkbox" id='darkmodeCheckbox' onChange={toogleDarkmode}></input>
                </div>
            </div>
        )

    }
}

export default { DarkmodeClass, darkmode }