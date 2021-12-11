import { useState } from 'react';
import axios from 'axios';

import '../estilos/componentes/paginas/Contacto.css'

const ContactoPage = (props) => {

    const initialForm= {
        nombre:'',
        email:'',
        telefono:'',
        mensaje:''
    }

    const [sending, setSending]= useState(false);
    const [msg, setMsg]= useState('');
    const [formData, setFormData]= useState(initialForm);

    const handleChange= e=>{
        const {name, value}= e.target;
        setFormData(oldData=>({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit= async e=>{
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response= await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error === false){
            setFormData(initialForm);
        }
    }

    return (
        
        
            <div className="holder">
                <div className="columna left">
                    <h2>Contacto Rapido</h2>

                    <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                        <p>
                            <label for="">Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="">Teléfono</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="comentario">Comentario</label>
                            <textarea id="comentario" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                        </p>
                        <p className="acciones">
                            <input type="submit" value="Enviar" />
                        </p>
                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}

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