import '../estilos/componentes/paginas/Home.css'

const HomePage = (props) => {
    return (
        <div className="holder">
            {/* <div className="homeimg">
                <img src="img/home/1.jpg" alt="" height="300px" width="70%"/>
            </div> */}
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Hechos sobre la luna</h2>
                    <p>La Luna es el único satélite natural de la Tierra y la quinta luna más grande del sistema solar.
La presencia de la Luna ayuda a estabilizar la oscilación de nuestro planeta y modera nuestro clima.
La distancia de la Luna a la Tierra es de unas 240.000 millas (385.000 km).
La Luna tiene una atmósfera muy fina llamada exosfera.
La superficie de la Luna está llena de cráteres y picaduras por impactos de cometas y asteroides</p>
                    <p><b><i>La Luna de la Tierra es el único lugar más allá de la Tierra donde los humanos han puesto un pie.</i></b></p>
                    <p>El objeto más brillante y más grande de nuestro cielo nocturno, la Luna hace que la Tierra sea un planeta más habitable al moderar el bamboleo de nuestro planeta natal sobre su eje, lo que lleva a un clima relativamente estable. También provoca mareas, creando un ritmo que ha guiado a los humanos durante miles de años. La Luna probablemente se formó después de que un cuerpo del tamaño de Marte chocara con la Tierra.
                        <br/>
                        La Luna de la Tierra es la quinta más grande de las más de 200 lunas que orbitan planetas en nuestro sistema solar.

El único satélite natural de la Tierra se llama simplemente "la Luna" porque la gente no sabía que existían otras lunas hasta que Galileo Galilei descubrió cuatro lunas orbitando Júpiter en 1610.
                    </p>
                </div>
                <img src="https://ichef.bbci.co.uk/news/549/cpsprodpb/1C5B/production/_107895270_neil_armstrong_gemini8_976.jpg" />
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Es un pequeño paso para un hombre, pero un gran salto para la humanidad!
                        </span>
                        <span className="autor">
                            Neil Amstrong!
                        </span>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default HomePage