<template>
  <div class="bg-orange-500 p-6 rounded-lg text-white">
    <h2 class="text-2xl font-bold">Login</h2>
    <form>
      <label for="username" class="block mb-2">Username</label>
      <input type="text" id="username" class="w-full p-2 mb-4 border border-gray-300 rounded-md" />

      <label for="password" class="block mb-2">Password</label>
      <input type="password" id="password" class="w-full p-2 mb-4 border border-gray-300 rounded-md" />

      <button type="submit" class="w-full p-2 bg-blue-500 text-white rounded-md">Login</button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'LoginPage',
}
</script>
