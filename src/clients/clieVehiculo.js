import axios from 'axios';

const guardar = async(bodyVehiculo) => {
  const data=  axios.post('http://localhost:8082/API/v1.0/Vehiculo/vehiculos', bodyVehiculo)
   .then(response => {
     console.log(response);
   })
   return  data;
}

export const guardarFachada = (bodyVehiculo) => {
   const data = guardar(bodyVehiculo);
   return data;
}

const obtener = async() =>{
    const data = await axios.get('http://localhost:8082/API/v1.0/Vehiculo/vehiculos')
    .then((response) => response.data);
    return data;
}
export const obtenerFachada = async() => {

    return await obtener();
}


const buscar = async(placa) => {
    const data = await axios.get(`http://localhost:8082/API/v1.0/Vehiculo/vehiculos/${placa}`)
    .then((response) => response.data);
    return data;
}

export const buscarFachada = (placa) => {
    const data = buscar(placa);
    return data;
}

const eliminar = async(placa) => {
    const data = await axios.delete(`http://localhost:8082/API/v1.0/Vehiculo/vehiculos/${placa}`)
    .then((response) => response.data);
    return data;
}

export const eliminarFachada = (placa) => {
    const data = eliminar(placa);
    return data;
}

