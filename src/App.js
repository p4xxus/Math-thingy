import './App.css';
import drawAndSettings from './draw';




function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='interfaceDiv'>
          <div className='interfaceContainer'>
            <drawAndSettings.Settings setting="amount" maximum="200" defaultValueProp="20" idProp="0" multiplier="1"></drawAndSettings.Settings>
            <drawAndSettings.Settings setting="size" maximum="50" defaultValueProp="40" idProp="1" multiplier="0.5"></drawAndSettings.Settings>
            <drawAndSettings.Settings setting="distance" maximum="75" defaultValueProp="0" idProp="2" multiplier="0.01"></drawAndSettings.Settings>
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