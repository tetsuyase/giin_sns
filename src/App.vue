<template>
    <v-app>
        <v-card color="grey lighten-4" flat height="auto">
            <v-toolbar>
                <v-toolbar-title>議員SNS</v-toolbar-title>
            </v-toolbar>
        </v-card>
        <div id="app" class="grey lighten-5">
            <div id="nav">
                <router-link to="/">東京都</router-link>
                |
                <router-link to="/wards">23区</router-link>
            </div>
            <router-view/>
        </div>
    </v-app>
</template>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>