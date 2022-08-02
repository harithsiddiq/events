<template>
  <div class="home">
    <p>Page: {{ page }}</p>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
    <router-link 
      :to="{name: 'Home', query: {page: page - 1}}"
      v-if="page != 1"
      >
      prev
    </router-link>
    <router-link 
      :to="{name: 'Home', query: {page: page - 1}}"
      >
      prev
    </router-link>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import eventService from '../service/EventService';
import { watchEffect } from "vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  props: ['page'],
  components: {
    EventCard
  },
  data() {
    return {
      events: Array
    }
  },
  created() {
    watchEffect(() => {
      eventService.getEvents(3, this.page)
      .then(res => {
        console.log("Events:", res.data);
          this.events = res.data
      })
      .catch(err => {
        console.log(err);
      });
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
