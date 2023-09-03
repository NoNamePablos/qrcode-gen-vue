<template>
  <button class="button">
    {{title}}
  </button>
</template>

<script setup lang="ts">
  const props=defineProps<{
    title:string,
  }>()
</script>

<style scoped lang="scss">
button{
  appearance: none;
  outline: none;
  border: none;
}

.button{
  padding: 15px 15px;
  display: flex;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: #2891dd;
  width: 100%;
  color: white;
  cursor: pointer;
  transition: opacity 0.3s;
  opacity: 1;
  font-size: 18px;
  font-weight: 600;
&:hover{
   opacity: 0.8;
   transition: opacity 0.3s;
 }
}
</style>