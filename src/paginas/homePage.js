import '../estilos/componentes/paginas/Home.css'

const HomePage = (props) => {
    return (
        <div className="holder">
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt=""/>
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores vel sunt assumenda consequuntur rem repellat voluptas debitis tempore est autem, voluptatibus iste nobis commodi eligendi! Sint neque harum praesentium nihil?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolore consequuntur laborum, dignissimos voluptatem nesciunt! Repudiandae dolore accusamus, excepturi dolorum eum mollitia distinctio, unde itaque in animi, sequi numquam? Officia!</p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente excelente!
                        </span>
                        <span className="autor">
                            Juan Perez-Zapatos.com
                        </span>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default HomePage