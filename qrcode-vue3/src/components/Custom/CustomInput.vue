<template>
  <div class="custom-input">
    <input type="text" @input="eventHandler($event.target.value)" :value="modelValue" :placeholder="name">
  </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
      modelValue: string;
      name: string
      bar?: number
    }>()
    const emits=defineEmits<{
      (e:'update:modelValue',value:string):void
    }>()
    const eventHandler=(evt:string)=>{
      emits('update:modelValue',evt)
    }
</script>

<style scoped lang="scss">
.custom-input{
  width: 100%;
& input{
    width: 100%;
    appearance: none;
    outline: none;
    padding: 10px 5px;
    color: #d6d6d6;
    font-weight: 500;
    font-size: 16px;
    background-color: white;
    border: 1px solid #d6d6d6;
&:placeholder-shown{
   color: #d6d6d6;
 }
}
}
</style>