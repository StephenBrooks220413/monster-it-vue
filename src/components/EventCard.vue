<template>
  <div class="event-card">
    <span>@ {{ event.time }} on {{ event.date }} </span>
    <h1>{{ event.title }}</h1>
    <div>{{ event.layouts }}</div>
    <p class="lead">{{ event.author }}</p>
    <router-link to="/" class="nav-link">Events</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: Object
  }
};
</script>

<style scoped lang="scss">
.event-card {
  padding: 10px;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  margin: 5px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(39, 39, 39, 0.2);
}
@media (max-width: 950px) {
  .event-card {
    width: 90%;
  }
}
</style>
