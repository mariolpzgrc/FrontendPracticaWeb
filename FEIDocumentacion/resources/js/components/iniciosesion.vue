<template>
  <v-content>
    <v-container grid-list-md fill-height fluid>
      <v-layout align-center justify-center>
        <v-flex xs8 sm6 md4 lg3>
          <v-card class="elevation-12">
            <v-toolbar dark flat>
              <v-toolbar-title>Acceso al sistema</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <!-- <v-img
                  src="https://image.flaticon.com/icons/png/512/124/124642.png"
                  aspect-ratio="3"
                  contain
              ></v-img>-->
              <v-form ref="form" v-model="valid">
                <v-text-field
                  label="Matricula"
                  name="login"
                  prepend-icon="person"
                  v-model="matricula"
                  type="text"
                  :rules="[v => !!v || 'La matricula es obligatoria']"
                  required
                ></v-text-field>

                <v-text-field
                  id="password"
                  label="Contraseña"
                  v-model="curp"
                  name="password"
                  prepend-icon="lock"
                  type="password"
                  :rules="[v => !!v || 'La contraseña es obligatoria']"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn :loading="loading" :disabled="!valid" @click="iniciarSesion" color="primary">Iniciar Sesión</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: function() {
    return {
      valid: true,
      matricula: "",
      curp: "",
      loading: false
    };
  },
  methods: {
    iniciarSesion: function() {
      var params = new URLSearchParams();
      params.append("matricula", this.matricula);
      params.append("curp", this.curp);
      axios.post('http://localhost:8080/ServiciosWebPractica/webresources/alumnos/autenticacion', {
        params
      }).then(response =>{
        console.log(response);
      }).catch(error =>{
        console.log(error.response.data);
      });
      console.log(this.matricula, this.curp);
    }
  }
};
</script>