import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Loading from "./Loading"
import useWeather from "../hooks/useWeather"

const AppWeather = () => {

    const { result, cargando, noResultado } = useWeather()

  return (
    <>
        <main className="dos-columnas">
            <Formulario />

            {cargando ? <Loading /> :
             result?.name ? <Resultado /> :
             noResultado ? <p>{noResultado}</p>
             : <p>El clima se va a mostrar aqui</p>
            }
            
        </main>
    </>
  )
}

export default AppWeather
