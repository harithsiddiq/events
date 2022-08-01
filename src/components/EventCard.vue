<template>
  <router-link :to="{name: 'EventDetails', params: {id: event.id}}">
    <div class="event-card">
      <!-- Display event data -->
      <span>@ {{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
};
</script>

<style lang="scss" scoped>

.event-card {
  cursor: pointer;
  padding: 20px 30px;
  text-align: center;
  border: 1px solid #CCC;
  width: 250px;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 10px 4px #eee;
  }
}
  
</style>
