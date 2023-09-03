<script setup lang="ts">
import {ref} from "vue";
import Card from "@/components/Card.vue";
interface ICard{
  title:string,
  description:string,
}
const card=ref<ICard>({
  title:'Генератор QR-кода',
  description:'Введите текст,чтобы сгенерировать QR Code!'
})
</script>

<template>
  <div class="wrapper">
    <Card :title="card.title" :descr="card.description" />
  </div>
</template>

<style scoped lang="scss">

  .wrapper{
    background-color: #2891dd;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }


</style>
