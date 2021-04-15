<template>
  <div class="clearfix">
    <div
      :class="
        'bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg ' +
        [fromMe ? 'from-me' : '']
      "
    >
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: String,
    fromMe: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
.from-me {
  @apply bg-blue-300 float-right;
}
</style>
