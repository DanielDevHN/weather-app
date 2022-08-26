import AppWeather from "./components/AppWeather"
import { WeatherProvider } from './context/WeatherProvider'


function App() {


  return (
    <WeatherProvider>
      <header>
        <h1>Buscador de Clima</h1>
      </header>
      <AppWeather />
      <footer>
        <p>Made with ❤ by Daniel Reyes</p>
      </footer>
    </WeatherProvider>
  )
}

export default App
