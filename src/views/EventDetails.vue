<template>
    <div>
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>


<script>
import EventService from '@/service/EventService'
export default {
    props: ['id'],
    data() {
        return {
            event: Object
        }
    },
    created() {
        EventService.getEvent(this.id)
        .then(res => {
            this.event = res.data;
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },
}


</script>