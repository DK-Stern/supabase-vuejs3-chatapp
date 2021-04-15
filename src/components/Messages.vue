<template>
  <div class="flex flex-col mt-20 mb-16 overflow-y-auto">
    <Message
      v-for="(message, index) of this.$store.state.messages"
      :key="index"
      :message="message.message"
      :fromMe="isOwnMessage(message)"
    />
  </div>
</template>

<script>
import Message from "./Message";

export default {
  name: "Messages",
  components: { Message },
  methods: {
    isOwnMessage(message) {
      return message.user === this.$store.state.username;
    },
  },
};
</script>

<style scoped></style>
