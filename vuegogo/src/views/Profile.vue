<template>
  <div class="profile">
    <div class="continer">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="media text-left">
          <img src="../assets/profile_ade_suhada.jpeg"  class="user-pic mr-3" >
          <div class="media-body">
            <h5 class="mt-0">{{ firstName }} Suhada</h5>
            <p>{{ description }}</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>

import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'Profile',
  data : function() {
    return {
      firstName : "Ade X",
      lastname: "Suhada",
      description:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
    }
  },
  components: {
  }
}
</script>

<style scoped>

.user-pic {
  border-radius: 200%;
  height: 80px;
  width:80px;
}

</style>
 