<template>
  <div
    class="fixed justify-center w-full bg-blue-400 h-16 pt-2 text-white flex shadow-md"
    style="top: 0; overscroll-behavior: none"
  >
    <div class="my-3 text-blue-100 font-bold text-lg tracking-wide">
      @{{ $store.state.username }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
