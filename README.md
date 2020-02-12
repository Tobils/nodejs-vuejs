# nodejs-vuejs
belajar vue.js dengan BE nodejs

## membuat project
    - jalankan `vue ui`
    - create new project
    - tambah dependency bootstrap
## v-for dan v-key
    - syntax
        ```html
        <div v-for="tugasSaya in tugas" v-bind:key="tugasSaya.id">
        ```
## generate new class 
    - syntax
        ```vue
        v-bind:class="{'item-completed':tugasSaya.isDone}"
        ```
