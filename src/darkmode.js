import Darkmode from 'darkmode-js';
const options = {
    bottom: '89%', // default: '32px'
    right: 'unset', // default: '32px'
    left: '7.5%', // default: 'unset'
    time: '1s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget()


// class DarkmodeClass extends Component {
//     render() {
//         function toogleDarkmode() {
//             darkmode.toggle();
//             console.log(darkmode.isActivated())
//         }

//         return (
//             <div>
//                 <div>
//                     <p>Darkmode</p>
//                 </div>
//                 <div className='checkboxDiv'>
//                     <input type="checkbox" id='darkmodeCheckbox' onChange={toogleDarkmode}></input>
//                 </div>
//             </div>
//         )

//     }
// }

// export default DarkmodeClass 