import '../estilos/componentes/paginas/Servicios.css'

const ServiciosPage = (props) => {
    return (
        <div className="holder">
            <h2>Servicios</h2>
            <div className="servicio">
                <img src="img/servicios/ferroviario.jpg" alt="" />
                <div className="info">
                    <h4>Transporte Ferroviario</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt repudiandae fugit et, ipsum ab aperiam sequi voluptate omnis doloribus doloremque molestias! Saepe voluptatibus consequuntur qui soluta nobis ipsum laborum.</p>
                </div>
            </div>
            <div className="servicio">
                <img src="img/servicios/aereo.jpg" alt="" />
                <div className="info">
                    <h4>Transporte Aereo</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt repudiandae fugit et, ipsum ab aperiam sequi voluptate omnis doloribus doloremque molestias! Saepe voluptatibus consequuntur qui soluta nobis ipsum laborum.</p>
                </div>
            </div>
            <div className="servicio">
                <img src="img/servicios/maritimo.jpg" alt="" />
                <div className="info">
                    <h4>Transporte Maritimo</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt repudiandae fugit et, ipsum ab aperiam sequi voluptate omnis doloribus doloremque molestias! Saepe voluptatibus consequuntur qui soluta nobis ipsum laborum.</p>
                </div>
            </div>
            <div className="servicio">
                <img src="img/servicios/terrestre.jpg" alt="" />
                <div className="info">
                    <h4>Transporte Terrestre</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt repudiandae fugit et, ipsum ab aperiam sequi voluptate omnis doloribus doloremque molestias! Saepe voluptatibus consequuntur qui soluta nobis ipsum laborum.</p>
                </div>
            </div>
        </div>
    )
}

export default ServiciosPage