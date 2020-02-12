# nodejs-vuejs
belajar vue.js dengan BE nodejs

## membuat project
- jalankan `vue ui`
- create new project
- tambah dependency bootstrap
## v-for dan v-key
- syntaxn
```html
<div v-for="tugasSaya in tugas" v-bind:key="tugasSaya.id">
```
## generate new class 
- syntax
```vue
v-bind:class="{'item-completed':tugasSaya.isDone}"
```

# Project Vue Apps
- [source](https://developer.okta.com/blog/2018/02/15/build-crud-app-vuejs-node)
- routes
    ```
    - GET /posts
    - GET /posts/:id
    - POST /posts
    - PUT /posts/:id
    - DELETE /posts/:id
    ```
- generate project
    - `npm install -g @vue/cli-init`
    - `vue init pwa my-vue-app`
    - `cd ./my-vue-app`
    - `npm install`
    - `npm run dev`

- install bootstrap
    - `npm install vue bootstrap-vue bootstrap`
    - error eslint, lebih baik generate project menggunakan ui dan install dependency bootsrtap di ui

- auth with okta
    - [create](https://developer.okta.com/signup/)

- tambahkan router pada vue ui 
