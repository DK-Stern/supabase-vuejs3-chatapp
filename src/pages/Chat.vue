<template>
  <Header />
  <Messages />
  <MessageInput />
</template>

<script>
import Header from "../components/Header";
import Messages from "../components/Messages";
import MessageInput from "../components/MessageInput";
export default {
  name: "Chat",
  components: { MessageInput, Messages, Header },
  mounted() {
    this.$store.dispatch("fetchMessages");
    this.$store.dispatch("subscribeNewMessages");
  },
};
</script>

<style scoped></style>
