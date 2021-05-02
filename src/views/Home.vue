<template>
  <div class="home text-center">
    <div class="container">
      <img src="../assets/logo.png" alt="" class="img-fluid" />
    </div>
    <h1 class="display-4">
      Stephen Brooks
    </h1>
    <h3>Web Developer</h3>
    <div class="container text-center content">
      <h2>Websites Using Vue.js</h2>
      <hr />
      <article>
        Websites are completely dependent on the developer or platform being
        used. Depending on what was used to build your site, it may not be
        reaching its full potential. With Vue.js, you get the powerful side of
        Angular and the lighter framework, even lighter then React.js. As a SPA
        running, your site will have faster load times on the internet,
        resulting in more website visits. Ask for a dmeo to see for yourself,
        then ask me for a quote. If you are interested in learning, I also offer
        courses that are one-on-one. To examples of running applications using
        Vue.js as a part of the framework, follow this
        <a
          class="btn btn-outline-info"
          href="https://madewithvuejs.com/frameworks"
          target="_blank"
          >link</a
        >
      </article>
    </div>
    <div class="container text-center content">
      <h2>Websites Using Material UI</h2>
      <hr />
      <article>
        Most commonly you will find websites that use Bootstrap, DevExtreme,
        Material UI, and other layouts that already have a library filled of
        styles and javascript methods to perform actions. It's no surprise that
        even platforms like WordPress and Shopify use them too. So why go with
        me instead of doing it yourself on those? Well, for one, their layouts
        are out of the box, and build it as you want to see it. But then again ,
        you literally have no control over it. Sometimes, not even the
        developers that work with have complete control over it either. When I
        build apps for my clients, I have full range of control because I pick
        and choose, with the client, what they want built as I do it. That is
        possible with the user interface. As we go along, I explain what each
        plugin or feature does, and also show examples of it on running
        websites.
      </article>
      <br /><br /><br /><br />
      <!-- Carousel wrapper -->
      <div
        id="carouselBasicExample"
        class="carousel slide carousel-fade"
        data-mdb-ride="carousel"
      >
        <!-- Indicators -->
        <div class="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <!-- Inner -->
        <div class="carousel-inner">
          <!-- Single item -->
          <div class="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>

          <!-- Single item -->
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1488998527040-85054a85150e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <!-- Single item -->
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        <!-- Inner -->

        <!-- Controls -->
        <button
          class="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- Carousel wrapper -->
    </div>
    <!-- API EVENT CARDS -->
    <h1 class="display-4 text-center">Real Time API Call</h1>
    <hr />
    <div class="events">
      <br /><br />
      <div class="container events">
        <EventCard v-for="event in events" :key="event.id" :event="event" />
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
@import "../assets/index.scss";
</style>
