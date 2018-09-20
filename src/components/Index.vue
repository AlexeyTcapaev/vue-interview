<template>
    <div>
        <v-btn to="/fraction">
            FractionPage
        </v-btn>
        <v-btn :to="{name:'SocketPage'}">
            SocketPage
        </v-btn>
        <v-slide-y-transition mode="out-in">
            <router-view></router-view>
        </v-slide-y-transition>
    </div>

</template>
