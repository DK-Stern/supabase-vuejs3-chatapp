<template>
  <div class="flex flex-col mt-20 mb-16 overflow-y-auto">
    <Message
      v-for="(message, index) of this.$store.state.messages"
      :key="index"
      :message="message.message"
      :author="message.user"
    />
  </div>
</template>

<script>
import Message from "./Message";

export default {
  name: "Messages",
  components: { Message },
};
</script>

<style scoped></style>
