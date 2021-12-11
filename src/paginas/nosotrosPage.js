import '../estilos/componentes/paginas/Nosotros.css'

const NosotrosPage = (props) => {
    return (
        <div className="holder">
            <div className="historia">
                <h2>Fases y eclipses</h2>
                <p>La luz de la luna que vemos en la Tierra es la luz del sol reflejada en la superficie blanca grisácea de la Luna. La cantidad de Luna que vemos cambia durante el mes ( fases lunares ) porque la Luna orbita la Tierra y la Tierra orbita al Sol. Todo se mueve.</p>
                <p>Durante un eclipse lunar , la Tierra se interpone entre el Sol y la Luna, bloqueando la luz solar que cae sobre la Luna. La sombra de la Tierra cubre toda o parte de la superficie lunar.</p>
            </div>
            <div className="staff">
                <h2>Fases</h2>
                <div className="personas">
                    
                       <img src="/../img/nosotros/123.jpg" />
                    <p>Este gráfico muestra por qué sucede esto. El anillo central muestra la luna mientras gira alrededor de la Tierra, como se ve desde arriba del polo norte. La luz del sol ilumina la mitad de la Tierra y la mitad de la luna en todo momento. Pero a medida que la luna orbita alrededor de la Tierra, en algunos puntos de su órbita, la parte iluminada por el sol de la luna se puede ver desde la Tierra, y en otros puntos, solo podemos ver las partes de la luna que están en la sombra. El anillo exterior muestra lo que vemos en la Tierra durante cada parte correspondiente de la órbita de la luna.</p>  
                </div>
            </div>
        </div>

    )
}

export default NosotrosPage