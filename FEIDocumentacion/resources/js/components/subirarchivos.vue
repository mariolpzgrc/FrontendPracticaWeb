<template>
  <v-app id="inspire">
    <v-app-bar app color="#032037" dark>
      <v-spacer />
      <v-toolbar-title>Facultad de Estadística e Informática</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <span class="headline">Favor de subir los documentos que se piden.</span>
      <v-container  fluid>
        <v-row align="center" justify="center">
          <v-flex xs12 md6 sm6>
            <v-col class="text-center">
              <v-form v-model="validar">
                <v-flex md8 sm8 xs12>
                  <v-file-input
                    required
                    accept="image/*, application/pdf"
                    label="Identificación oficial"
                    outlined
                    dense
                  ></v-file-input>
                </v-flex>
                <v-flex md8 sm8 xs12>
                  <v-file-input
                    required
                    accept="image/*, application/pdf"
                    label="Acta de Nacimiento"
                    outlined
                    dense
                  ></v-file-input>
                </v-flex>
                <v-flex md8 sm8 xs12>
                  <v-file-input
                    required
                    accept="image/*, application/pdf"
                    label="Comprobante de domicilio"
                    outlined
                    dense
                  ></v-file-input>
                </v-flex>
                <v-flex md8 sm8 xs12>
                  <v-file-input required accept="image/*" label="Foto infatil" outlined dense></v-file-input>
                </v-flex>
                <v-flex md8 sm8 xs12>
                  <v-file-input
                    required
                    accept="image/*, application/pdf"
                    label="Comprobante de bachillerato."
                    outlined
                    dense
                  ></v-file-input>
                </v-flex>
              </v-form>
            </v-col>
          </v-flex>
        </v-row>
      </v-container>
      <v-container  fluid>
        <v-row align="center" justify="center">
          <v-btn depressed color="primary">Subir archivos</v-btn>
        </v-row>
      </v-container>
    </v-content>

    <v-footer color="#032037" app>
      <v-spacer />
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    files: [],
    test: "...",
    validar: true
  }),
  methods: {
    archivo: function() {
      console.log("RRRR");
      let reader = new FileReader();
      //if(this.files instanceof Blob){
      console.log(reader.readAsDataURL(this.files));
      //this.test =  reader.readAsDataURL(this.files)
      //}
    }
  }
};
</script>