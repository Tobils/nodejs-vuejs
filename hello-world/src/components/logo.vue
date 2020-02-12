<template>
    <div class="logo-wrapper">
        <h2 class="title-header">Find the best logo</h2>
        <div class="item-logo">
            <img class="logo" src="../assets/starbucks.png" alt="Starbucks logo">
        </div>

        <div class="item-logo">
            <img class="logo" src="../assets/tesla.png" alt="Tesla logo">
        </div>

        <div class="item-logo">
            <img class="logo" src="../assets/logo.png" alt="Logo logo">
        </div>
           

    </div>
</template>

<script>
export default {
    name:"logo"
}
</script>

<style scoped>

/* kelas utama  */
.logo-wrapper{
    width: 75%;
    overflow: hidden;
    margin: auto;
    /* background: red; */
}


/* header logo  */
.title-header {
    margin-bottom: 80px;
    text-align: left
}

/* class item logo  */
.item-logo{
    float: left;
    margin-right: 150px;
    margin-bottom: 150px;
    width: 150px;
    height: 150px;
    /* background: green; */
}

/* spesifik ke kelas logo  */
.item-logo .logo {
    width: 150px;
    height: 150px;
}

</style>