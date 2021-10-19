import '../estilos/componentes/paginas/Nosotros.css'

const NosotrosPage = (props) => {
    return (
        <div className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit laboriosam voluptatibus,
                    cupiditate facilis hic, ipsa repudiandae perspiciatis cumque omnis, fuga eum corporis! Libero, at
                    repellat nihil obcaecati eaque vero.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ab sapiente itaque illum
                    delectus distinctio nam alias autem consequuntur tempore ipsam, ipsa, molestiae laboriosam aliquam
                    sequi. Ipsa consequuntur deserunt dicta?</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="img/nosotros/nosotros1.jpg" alt="" />
                        <h5>Juan Perez</h5>
                        <h6>Gerente General</h6>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos enim magnam omnis dolores
                            facilis debitis harum officia dolore, eaque sed. Laboriosam maiores minus dolore autem
                            molestiae modi omnis, aperiam nesciunt.</p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros2.jpg" alt="" />
                        <h5>Maria Carambula</h5>
                        <h6>Gerente Comercial</h6>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos enim magnam omnis dolores
                            facilis debitis harum officia dolore, eaque sed. Laboriosam maiores minus dolore autem
                            molestiae modi omnis, aperiam nesciunt.</p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros3.jpg" alt="" />
                        <h5>Esteban Cambiasso</h5>
                        <h6>Gerente de Sistemas</h6>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos enim magnam omnis dolores
                            facilis debitis harum officia dolore, eaque sed. Laboriosam maiores minus dolore autem
                            molestiae modi omnis, aperiam nesciunt.</p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros4.jpg" alt="" />
                        <h5>Giselle Campilongo</h5>
                        <h6>Gerente de Marketing</h6>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos enim magnam omnis dolores
                            facilis debitis harum officia dolore, eaque sed. Laboriosam maiores minus dolore autem
                            molestiae modi omnis, aperiam nesciunt.</p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros5.jpg" alt="" />
                        <h5>Roberto Salgan</h5>
                        <h6>Gerente Logistica</h6>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos enim magnam omnis dolores
                            facilis debitis harum officia dolore, eaque sed. Laboriosam maiores minus dolore autem
                            molestiae modi omnis, aperiam nesciunt.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NosotrosPage