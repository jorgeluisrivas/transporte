import '../estilos/componentes/paginas/Contacto.css'

const ContactoPage = (props) => {
    return (
        
        
            <div className="holder">
                <div className="columna left">
                    <h2>Contacto Rapido</h2>

                    <form action="" className="formulario">
                        <p>
                            <label for="">Nombre</label>
                            <input type="text" />
                        </p>
                        <p>
                            <label for="">Email</label>
                            <input type="email" />
                        </p>
                        <p>
                            <label for="">Teléfono</label>
                            <input type="text" />
                        </p>
                        <p>
                            <label for="comentario">Comentario</label>
                            <textarea id="comentario"></textarea>
                        </p>
                        <p className="acciones">
                            <input type="submit" value="Enviar" />
                        </p>

                    </form>
                </div>
                <div className="columna right">
                    <h2>Otras vias de Contacto</h2>
                    <p>Támbien se puede comunicar con nosotros....</p>
                    <ul>
                        <li>Teléfono: 3434-3334</li>
                        <li>Email: cabeza822001@gmail.com</li>
                        <li>Facebook</li>
                        <li>Instragram</li>
                    </ul>
                </div>
            </div>
        

    )
}

export default ContactoPage