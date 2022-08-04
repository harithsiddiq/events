<template>
  <div class="home">
    <p>Page: {{ page }}</p>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
    <div class="pagination">
      <router-link 
        :to="{name: 'Home', query: {page: page - 1}}"
        v-if="page != 1"
        >
        prev
      </router-link>
      <router-link 
        :to="{name: 'Home', query: {page: page + 1}}"
        v-if="hasNextPage"
        >
        next
      </router-link>
    </div>
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
      events: Array,
      totalCount: 0
    }
  },
  created() {
    watchEffect(() => {
      this.events = []
      eventService.getEvents(3, this.page)
      .then(res => {
        console.log("Events:", res.data);
          this.events = res.data
          this.totalCount = res.headers['x-total-count']
      })
      .catch(err => {
        console.log(err);
      });
    })
  },
  computed: {
    hasNextPage() {
      var totlaPages = Math.ceil(this.totalCount / 3);
      return this.page < totlaPages;
    }
  }
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

.pagination {
  width: 290px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
