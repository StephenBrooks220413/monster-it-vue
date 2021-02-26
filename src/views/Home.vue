<template>
  <div class="intro-img">
    <div class="mask" style="background-color: rgba(0, 0, 0, 0)">
      <div class="d-flex justify-content-center align-items-center h-100">
        <h1 class="text-primary intro-header">Monster I.T.</h1>
      </div>
    </div>
  </div>
  <br /><br /><br />
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn max1 btn-primary"
    data-mdb-toggle="modal"
    data-mdb-target="#exampleModal"
  >
    <h4>Need A Developer?</h4>
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Contact Me</h5>
          <button
            type="button"
            class="btn-close"
            data-mdb-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          If you need a developer and either have a project in mind, a layout in
          mind, or even if you are unsure on what you need? Contact me to go
          over some templates and designs.
        </div>
        <a
          class="btn max btn-info"
          href="https://www.clear-web-designs.com/contact-us.html"
          target="_blank"
        >
          Contact Me Using My Secure Form Here
        </a>
        <div class="modal-footer">
          www.clear-web-designs.com
        </div>
      </div>
    </div>
  </div>
  <br /><br /><br />
  <h1 class="display">Get the Vue Experience</h1>
  <h4>
    Using Axios for the API call to dynamically display the content below.
  </h4>
  <br />
  <!-- API Calls -->
  <div class="events">
    <br /><br />
    <div class="container events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </div>
  <!-- End of API Calls -->
  <!-- Jumbotron with fixed image -->
  <br /><br /><br />
  <div class="jumbotron content-mid">
    <div class="mid text-info">
      <h1>Product Designs</h1>
      <h4>Designer friendly & mobile first</h4>
    </div>
  </div>
  <br /><br /><br />
  <!-- end -->
  <h1 class="display-4">Enroll Into A Class</h1>
  <br />
  <div class="container">
    <div class="row text-center">
      <div class="col-md-3">
        <div class="class-1-wrapper">
          <div class="class-1-header">
            Vue.Js with Vuex, PWA, Router
          </div>
          <div class="class-1-body">
            <img
              src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              alt="desktop"
              class="img-fluid"
            />
          </div>
          <br />
          <div class="class-1-footer">
            <a href="mailto:stephenbrooks714@gmail.com" class="btn btn-primary"
              >Inquire</a
            >
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="class-1-wrapper">
          <div class="class-1-header">
            asp.Net Core with MVC & Bootstrap
          </div>
          <div class="class-1-body">
            <img
              src="https://images.unsplash.com/photo-1603985585179-3d71c35a537c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
              alt="desktop"
              class="img-fluid"
            />
          </div>
          <br />
          <div class="class-1-footer">
            <a href="mailto:stephenbrooks714@gmail.com" class="btn btn-primary"
              >Inquire</a
            >
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="class-1-wrapper">
          <div class="class-1-header">
            Html, Css, JavaScript, Node.js & MDB5
          </div>
          <div class="class-1-body">
            <img
              src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="desktop"
              class="img-fluid"
            />
          </div>
          <br />
          <div class="class-1-footer">
            <a href="mailto:stephenbrooks714@gmail.com" class="btn btn-primary"
              >Inquire</a
            >
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="class-1-wrapper">
          <div class="class-1-header">
            Python - Bottle Framework & MDB5
          </div>
          <div class="class-1-body">
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwZGVzaWdufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              alt="desktop"
              class="img-fluid"
            />
          </div>
          <br />
          <div class="class-1-footer">
            <a href="mailto:stephenbrooks714@gmail.com" class="btn btn-primary"
              >Inquire</a
            >
          </div>
        </div>
      </div>
    </div>
    <br /><br /><br />
    <div class="container">
      <h1>Other Places I instruct Are With...</h1>
      <br /><br />
      <div class="row">
        <div class="col-md-6">
          <h3>Wyzant</h3>
          <img src="../assets/wyzant.png" class="img-fluid" alt="" />
          <br /><br />
          <a
            class="btn btn-primary"
            href="mailto:stephenbrooks714@gmail.com"
            target="_blank"
            >Profile</a
          >
        </div>
        <div class="col-md-6">
          <h3>Udemy</h3>
          <img
            src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
            alt="udemy"
            class="img-fluid img"
          /><br /><br />
          <a
            class="btn btn-primary"
            href="mailto:stephenbrooks714@gmail.com"
            target="_blank"
            >Profile</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// @ts-ignore
import EventCard from "@/components/EventCard.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    };
  },
  created() {
    axios
      .get(
        "https://my-json-server.typicode.com/StephenBrooks220413/real-world-vue1/events"
      )
      .then(response => {
        this.events = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
.intro-header {
  font-size: 3.7em;
}
.intro-img {
  background: url("../assets/audience.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: auto;
  padding-top: 30%;
  padding-bottom: 35%;
}
.content-mid {
  background: url("../assets/laptop.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: auto;
  padding-top: 15%;
  padding-bottom: 15%;
}
.mid {
  display: block;
  flex: center;
}
.events {
  display: flex;
  flex-direction: row;
  align-items: center;
}
@media (max-width: 850px) {
  .events {
    flex-direction: column;
  }
  .intro-img {
    padding-top: 50%;
    padding-bottom: 50%;
  }
  .content-mid {
    padding-top: 50%;
    padding-bottom: 50%;
  }
  .intro-header {
    font-size: 2.6em;
  }
}
.display {
  font-family: "Faster One", cursive;
  font-size: 3.6em;
  color: teal;
}
.img {
  max-width: 250px;
}
.max {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 34px;
}
.max1 {
  width: 35%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 34px;
}
</style>
