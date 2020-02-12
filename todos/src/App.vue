<template>
  <div id="app">
      <div class="container">
        <div class="row header mb-5 p-3">
          <div class="col-lg-12"> 
            <h2>
              What I do today ?
            </h2>
          </div>
        </div>
        <div class="row content">
          <div class="col-lg-12">
            <div class="pekerjaan-rumah">

              
                <div class="row">
                  <div v-for="tugasSaya in tugas" v-bind:key="tugasSaya.id" class="mb-4 tugas col-lg-12 text-left">

                    <ItemTugas v-bind:tugasSaya="tugasSaya"/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>





// import bootsrtap 
import 'bootstrap/dist/css/bootstrap.css'

import ItemTugas from './components/ItemTugas.vue'

export default {
  name: 'App',
  data: function() {
    return {
      tugas : [
        {
          id:1,
          namaTugas : "Membersihkan toilet",
          isDone : false
        },
        {
          id:2,
          namaTugas : "Ngoding Web",
          isDone : false
        },
        {
          id:3,
          namaTugas : "Beli SSD",
          isDone : false
        }

      ]
    };
  },
  components: {
    ItemTugas
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  background: #1abc9c;
}

.header h2 {
  margin: 0;
}

.item-completed {
  color: #1abc9c;
}

</style>
