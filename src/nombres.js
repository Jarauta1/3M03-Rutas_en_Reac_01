import {useState} from "react"

function Nombres() {
    let [nombres, setNombres] = useState(["Diego","Jesús","José","Luis","Agustina","Pilar","Laura"])

    const mostrarNombres = nombres.map(function (nombre) {
        return (<>
            <li>{nombre}</li>
        </>)
    })

    return <>
    <ul>
    {mostrarNombres}
    </ul>
    </>
}

export default Nombres;
