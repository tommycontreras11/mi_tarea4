import React, {useState, useEffect} from "react";
import axios from 'axios'
import "../css/style.css"

function GetData() {

    
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://www.raydelto.org/agenda.php')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })
    return (
        
        <div>
            {posts.map(post => (
                <div id="container-2">
                <div id="resultado">
                    <div id="content">
                        <div id="result">
                            <label id="resultado-final" for="">Nombre: {post.nombre}</label><br />
                            <label id="resultado-final" for="">Apellido: {post.apellido}</label><br />
                            <label id="resultado-final" for="">Teléfono: {post.telefono}</label><br />
                        </div>
                    </div><br /><br />
                </div>  
                </div>            
            ))}
        </div>

        
    )
}

export default GetData