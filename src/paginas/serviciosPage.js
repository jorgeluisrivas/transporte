import '../estilos/componentes/paginas/Servicios.css'

const ServiciosPage = (props) => {
    return (
        <div className="holder">
            <h2>Planetas</h2>
            <div className="servicio">
                <img src="img/servicios/1.jpg" alt="" width="150px"/>
                <div className="info">
                    <h4>Marte</h4>
                    <p>Marte es el cuarto planeta desde el Sol: un mundo polvoriento, frío y desértico con una atmósfera muy delgada. Marte también es un planeta dinámico con estaciones, casquetes polares, cañones, volcanes extintos y evidencia de que fue aún más activo en el pasado.</p>
                    <p>Marte es uno de los cuerpos más explorados de nuestro sistema solar, y es el único planeta al que hemos enviado rovers para vagar por el paisaje alienígena.</p>
                </div>
            </div>
            <div className="servicio">
                <img src="img/servicios/2.jpg" alt="" width="200px"/>
                <div className="info">
                    <h4>Mercurio</h4>
                    <p>Mercurio, el planeta más pequeño de nuestro sistema solar y más cercano al Sol, es solo un poco más grande que la Luna de la Tierra.</p>
                    <p>Desde la superficie de Mercurio, el Sol parecería más de tres veces más grande que cuando se ve desde la Tierra, y la luz del sol sería hasta siete veces más brillante. A pesar de su proximidad al Sol, Mercurio no es el planeta más caliente de nuestro sistema solar; ese título pertenece al cercano Venus, gracias a su densa atmósfera. 
                    Debido a la órbita elíptica (en forma de huevo) de Mercurio y a su lenta rotación, el Sol parece salir brevemente, ponerse y volver a salir de algunas partes de la superficie del planeta. Lo mismo sucede a la inversa al atardecer.
                    </p>
                </div>
            </div>
            <div className="servicio">
                <img src="img/servicios/3.jpg" alt="" width="150px" />
                <div className="info">
                    <h4>Venus</h4>
                    <p>Venus es el segundo planeta desde el Sol y es el vecino planetario más cercano a la Tierra. Es uno de los cuatro planetas interiores, terrestres (o rocosos), y a menudo se le llama gemelo de la Tierra porque es similar en tamaño y densidad. Sin embargo, estos no son gemelos idénticos; existen diferencias radicales entre los dos mundos.</p>
                </div>
            </div>
            <div className="servicio">
                <img src="img/servicios/4.jpg" alt="" width="150px" />
                <div className="info">
                    <h4>Saturno</h4>
                    <p>Saturno es el sexto planeta del Sol y el segundo planeta más grande de nuestro sistema solar.</p>
                    <p>Adornado con miles de hermosos rizos, Saturno es único entre los planetas. No es el único planeta que tiene anillos, hechos de trozos de hielo y roca, pero ninguno es tan espectacular ni tan complicado como el de Saturno.

Al igual que Júpiter, su compañero gigante gaseoso, Saturno es una bola masiva compuesta principalmente de hidrógeno y helio.</p>
                </div>
            </div>
            <div className="servicio">
                <img src="img/servicios/5.jpg" alt="" width="150px" />
                <div className="info">
                    <h4>Jupiter</h4>
                    <p>Júpiter tiene una larga historia de científicos sorprendentes, desde 1610 cuando Galileo Galilei encontró las primeras lunas más allá de la Tierra. Ese descubrimiento cambió la forma en que vemos el universo.</p>
                    <p>Quinto en la línea desde el Sol, Júpiter es, con mucho, el planeta más grande del sistema solar, más del doble de masivo que todos los demás planetas juntos.

Las rayas y remolinos familiares de Júpiter son en realidad nubes frías y ventosas de amoníaco y agua, que flotan en una atmósfera de hidrógeno y helio. La icónica Gran Mancha Roja de Júpiter es una tormenta gigante más grande que la Tierra que se ha desatado durante cientos de años.</p>
                </div>
            </div>
        </div>
    )
}

export default ServiciosPage