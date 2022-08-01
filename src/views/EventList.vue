<template>
  <div class="home">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import eventService from '../service/EventService';
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    EventCard
  },
  data() {
    return {
      events: Array
    }
  },
  created() {
    eventService.getEvents()
    .then(res => {
      console.log("Events:", res.data);
        this.events = res.data.slice(0, 4)
    })
    .catch(err => {
      console.log(err);
    })
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
