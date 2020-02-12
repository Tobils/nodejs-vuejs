<template>
    <div class="nav">
        <h1> {{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name :"Hi Suhada",
    props: {
        msg : String
    }
}
</script>

<!-- tambahkan "scoped" atribute untuk membatasi CSS hanya pada komponen ini -->
<style scoped>
.nav h1 {
    text-align:"center";
    margin-top:10%
}
</style>