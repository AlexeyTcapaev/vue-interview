<template>
<v-container>
    <v-layout align-center justify-center row>
          <v-expansion-panel focusable>
            <v-expansion-panel-content
            v-for="(item,i) in Posts"
            :key="i"
            >
            <div slot="header">
                <article class="post-header">
                    <h1>Post #{{i}}</h1>
                    <v-btn flat @click="Delete(i)">Delete</v-btn>
                </article>
            </div>
            <v-card>
                <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-layout>
</v-container>
</template>
<script>
export default {
  mounted() {
    this.websocket = new WebSocket(this.wsUri);
    this.websocket.onopen = evt => {
      this.onOpen(evt);
    };
    this.websocket.onclose = evt => {
      this.onClose(evt);
    };
    this.websocket.onmessage = evt => {
      this.onMessage(evt);
    };
    this.websocket.onerror = evt => {
      this.onError(evt);
    };
  },
  data: () => ({
    wsUri: "wss://echo.websocket.org/",
    output: "",
    websocket: "",
    Posts: [{}, {}, {}, {}, {}, {}, {}]
  }),
  methods: {
    onOpen(evt) {},

    onClose(evt) {},

    onMessage(evt) {
      this.Posts.splice(evt.data, 1);
    },

    onError(evt) {},
    Delete(i) {
      this.websocket.send(i);
    }
  }
};
</script>
<style scoped>
.post-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>

