<template>
  <div class="container">
    <p class="form-title">Formulario Vehiculo</p>

    <div v-if="mensajeExito" class="alert alert-success">
      {{ mensajeExito }}
    </div>

    <div class="form-group">
      <label for="placa">Placa</label>
      <input v-model="placa" type="text" class="form-control" id="placa" />
    </div>
    <div class="form-group">
      <label for="marca">Marca</label>
      <input v-model="marca" type="text" class="form-control" id="marca" />
    </div>

    <div class="form-group">
      <label for="modelo">Modelo</label>
      <input v-model="modelo" type="text" class="form-control" id="modelo" />
    </div>

    <div class="form-group">
      <label for="color">Color</label>
      <input v-model="color" type="text" class="form-control" id="color" />
    </div>
    <div class="form-group">
      <label for="precio">Precio</label>
      <input v-model="precio" type="number" class="form-control" id="precio" />
    </div>

    <button v-on:click="guardar">Guardar</button>
  </div>
</template>

<script>
import { guardarFachada } from "../clients/clieVehiculo.js";

export default {
  data() {
    return {
      placa: null,
      marca: null,
      modelo: null,
      color: null,
      precio: null,
      mensajeExito: null
    };
  },
  methods: {
    async guardar() {
      const bodyVehiculo = {
        placa: this.placa,
        marca: this.marca,
        modelo: this.modelo,
        color: this.color,
        precio: this.precio
      };
      const data = await guardarFachada(bodyVehiculo);
      console.log(data);

      this.mensajeExito = "El vehículo se ha guardado exitosamente";

      this.placa = null;
      this.marca = null;
      this.modelo = null;
      this.color = null;
      this.precio = null;
    }
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
  border: 2px solid #cfcfcf;
  border-radius: 10px;
  background-color: #ffffff;
}

.form-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
}

.form-control {
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: #fff;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  margin-right: 10px;
}

button:hover {
  background-color: #0056b3;
}

.alert {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  color: white;
  background-color: #28a745;
}
</style>