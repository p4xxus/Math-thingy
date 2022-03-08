import drawAndSettings from './draw';
import './darkmode'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='interfaceDiv'>
          <div className='darkmode'>
          </div>
          <div className='interfaceContainer'>
            <drawAndSettings.Settings setting="amount" maximum="500" defaultValueProp="20" idProp="0"></drawAndSettings.Settings>
            <drawAndSettings.Settings setting="size" maximum="50" defaultValueProp="20" idProp="1"></drawAndSettings.Settings>
            <drawAndSettings.Settings setting="distance" maximum="75" defaultValueProp="0" idProp="2"></drawAndSettings.Settings>
            <drawAndSettings.Settings setting="step" maximum="5" defaultValueProp="1" idProp="3"></drawAndSettings.Settings>
          </div>
          <div className='coding'>
            <drawAndSettings.Encoding></drawAndSettings.Encoding>
            <drawAndSettings.Decoding></drawAndSettings.Decoding>
          </div>
        </div>
        <div className='canvasDiv'>
          <canvas id='test'></canvas>
        </div>
      </div>
    </div>
  );
}

export default App;

window.addEventListener("load", () => {
  drawAndSettings.draw();
})