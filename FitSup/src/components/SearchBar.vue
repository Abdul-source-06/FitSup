<template>
    <input 
      :value="searchQuery"
      @input="$emit('update:searchQuery', $event.target.value)"
      type="text"
      placeholder="Buscar productos..."
      class="mb-8 w-full p-2 border border-gray-300 rounded-md"
    />
  </template>
  
  <script>
  export default {
    name: 'SearchBar',
    props: {
      searchQuery: String,
    },
  };
  </script>

  