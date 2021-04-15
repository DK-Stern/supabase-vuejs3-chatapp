<template>
  <div class="flex flex-col h-screen justify-center bg-blue-500">
    <p class="m-2 text-white">Chose username</p>
    <input
      class="m-2 py-2 px-4 mr-1 rounded-full border border-gray-300"
      type="text"
      placeholder="Username..."
      v-model="username"
    />
    <button
      class="m-2 py-2 px-4 mr-1 rounded-full border bg-blue-300 text-blue-800"
      type="button"
      @click="start"
    >
      Start
    </button>
  </div>
</template>

<script>
export default {
  name: "Start",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    start() {
      this.$store.commit("setUsername", this.username);
      this.$router.push("chat");
    },
  },
};
</script>

<style scoped></style>
