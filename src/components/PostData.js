import React, { Component } from "react";
import axios from 'axios'
import "../css/style.css"


class PostData extends Component {

    constructor(){
        super();
        this.state={
            nombre: "",
            apellido: "",
            telefono: ""
        }
    }

    async post(state){
        if(state.nombre != "" && state.apellido != "" && state.telefono != ""){
            let url = "http://www.raydelto.org/agenda.php";

        try 
        {
            const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(state),
            mode: 'no-cors',
            headers: {
                    'Content-Type': 'application/json'
            }
            
        });
        
        alert("Se ha guardado correctamente");
        }catch(e){
            console.error(e);
            alert("Ha ocurrido un error");
        }
        }else{
            alert("Debes de llenar los campos")
        }
    }

    submit(){
        let data = this.state;
        
       this.post(data)
    }

    render() {
    return (
        <div id="container">
            <div id="titulo">
                <p>Formulario de registro</p>
            </div>
            <div id="content">
                <div id="content-body">
                    <form id="form">
                        <input type="text" id="nombre" value={this.state.nombre} onChange={(data)=> {this.setState({nombre:data.target.value})}} placeholder="Por favor introduce el nombre" /><br />
                        <input type="text" id="apellido" value={this.state.apellido} onChange={(data)=> {this.setState({apellido:data.target.value})}} placeholder="Por favor introduce el apellido" /><br />
                        <input type="text" id="telefono" value={this.state.telefono} onChange={(data)=> {this.setState({telefono:data.target.value})}} placeholder="Por favor introduce el teléfono" /><br />
                        <button id="submit" onClick={() => {this.submit()}}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
}
export default PostData