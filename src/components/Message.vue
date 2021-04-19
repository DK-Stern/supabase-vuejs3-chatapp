<template>
  <div class="clearfix">
    <div
      :class="
        'bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg ' +
        [fromMe ? 'from-me' : '']
      "
    >
      <p>{{ message }}</p>
      <p :class="'italic ' + [fromMe ? 'from-me-author' : 'author']">
        @{{ fromMe ? "me" : author }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Message",
  props: {
    message: String,
    author: String,
  },
  setup(props) {
    const store = useStore();

    const fromMe = computed(() => props.author === store.state.username);

    return {
      fromMe,
    };
  },
};
</script>

<style lang="postcss" scoped>
.from-me {
  @apply bg-blue-300 float-right;
}
.from-me-author {
  @apply text-right text-blue-600;
}
.author {
  @apply text-gray-500;
}
</style>
