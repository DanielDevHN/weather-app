import { useState } from 'react'
import useWeather from "../hooks/useWeather"

const Formulario = () => {

    const [alerta, setAlerta] = useState('')

    const { search, dataSearch, getWeather } = useWeather()

    const { ciudad, pais } = search

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(search).includes('')) {
            setAlerta('Todos los campos son obligatorios')
            return
        }
        setAlerta('')
        getWeather(search)
    }

    return (
        <div className="contenedor">
            {alerta && <p>{alerta}</p>}
            <form
                onSubmit={handleSubmit}
            >
                <div className="campo">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input
                        type="text"
                        id="ciudad"
                        name="ciudad"
                        onChange={dataSearch}
                        value={ciudad}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="pais">Pais</label>
                    <select
                        id="pais"
                        name="pais"
                        onChange={dataSearch}
                        value={pais}
                    >
                        <option value=""> Selecciones un pais</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">Mexico</option>
                        <option value="HN">Honduras</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Peru</option>
                    </select>
                </div>

                <input
                    type="submit"
                    value="Consultar Clima"
                />
            </form>
        </div>
    )
}

export default Formulario
