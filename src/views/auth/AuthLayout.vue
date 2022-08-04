<template>
    <div>
        <nav>
            <router-link :to="{name: 'LoginAuth'}">Login</router-link>
                |
            <router-link :to="{name: 'RegisterAuth'}">Register</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'AuthLayout'
}
</script>