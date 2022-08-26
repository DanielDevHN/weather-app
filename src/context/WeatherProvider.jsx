import { useState, createContext } from 'react' 
import axios from 'axios'


const WeatherContext = createContext()

const WeatherProvider = ({children}) => {

    const [search, setSearch] = useState({
        ciudad: '',
        pais: ''
    })
    
    const [result, setResult] = useState({})
    const [cargando, setCargando] = useState(false)
    const [noResultado, setNoResultado] = useState(false)

    const dataSearch = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })

    }


    const getWeather = async datos => {
        setCargando(true)
        setNoResultado(false)
        try {
           const { ciudad, pais } = datos

           const appId = import.meta.env.VITE_API_KEY

           const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`

           const { data } = await axios(url)
           const { lat, lon } = data[0]

           const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

           const { data: weather } = await axios.get(urlWeather)
           setResult(weather)
           setCargando(false)
        } catch (error) {
            setNoResultado('No hay resultados')
        } finally {
            setCargando(false)
        }
    }


    return(
        <WeatherContext.Provider 
            value={{
                search,
                dataSearch,
                getWeather,
                result,
                cargando,
                noResultado
            }}
        >
            {children}
        </WeatherContext.Provider>
    )
}

export {
    WeatherProvider
}

export default WeatherContext