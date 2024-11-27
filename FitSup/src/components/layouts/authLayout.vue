<template>
    <div class="min-h-screen flex items-center justify-center">

      <main class="max-w-md w-full p-6 rounded-lg" >

        <slot></slot>
      </main>
    </div>
  </template>
  
  <script>
export default {
  name: 'AuthLayout'
};
</script>