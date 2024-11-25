<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings flex flex-col items-center lg:items-start gap-4">
    <h1 class="text-4xl font-medium text-center lg:text-left text-green-500">
      {{ msg }}
    </h1>
    <h3 class="text-lg text-center lg:text-left">
      You’ve successfully created a project with
    </h3>
  </div>
</template>

