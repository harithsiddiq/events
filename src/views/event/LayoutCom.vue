<template>
    <div>
        <nav>
            <router-link :to="{name: 'EventDetails'}">EventDetails</router-link> |
            <router-link :to="{name: 'AuthLayout'}">Register</router-link> |
            <router-link :to="{name: 'Edit'}">Edit</router-link>
        </nav>
        <router-view :event="event"></router-view>
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