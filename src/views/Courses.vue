<template>
  <div class="contact">
    <h1>Courses Offered</h1>
    <br /><br />
    <div class="container text-center">
      <div class="row">
        <div class="col-md-4">
          <img src="../assets/nuxt.png" class="img-fluid" alt="nuxt.js" />
          <label for="">Starting 08/03/2021</label>
          <a
            class="btn btn-outline-primary"
            href="mailto:Stephenbrooks714@gmail.com"
            >Learn More</a
          >
        </div>
        <div class="col-md-4">
          <img
            src="../assets/asp.png"
            class="img-fluid"
            style="width:90%"
            alt="asp.net core"
          />
          <label for="">Starting 12/03/2021</label>
          <a
            class="btn btn-outline-primary"
            href="mailto:Stephenbrooks714@gmail.com"
            >Learn More</a
          >
        </div>
        <div class="col-md-4">
          <img
            src="../assets/react.png"
            class="img-fluid"
            style="width:100%"
            alt="react"
          />
          <label for="">Starting 05/03/2022</label>
          <a
            class="btn btn-outline-primary"
            href="mailto:Stephenbrooks714@gmail.com"
            >Learn More</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// export default {
// }
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 110px;

  h1 {
    text-shadow: 11px 10px 14px grey !important;
    font-size: 3em;
  }
  .line {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
}
.monster1 {
  max-width: 300px;
}
a {
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 30px;
}
input {
  background-color: rgb(168, 168, 168) !important;
  opacity: 0.2 !important;
}
textarea {
  background-color: rgb(168, 168, 168) !important;
  opacity: 0.2 !important;
}
</style>
