<template>
  <div class="card">
    <div class="card__title">{{title}}</div>
    <div class="card__description">{{descr}}</div>
    <div class="card__action">
      <CustomInput v-model="val" :name="'Введите текст или URL'" />
      <CustomButton :title="'Сгенерировать'" @click="getCodeContent" />
    </div>
    <img :src="img" class="card__image" alt="" v-if="img!==''">
  </div>
</template>

<script setup lang="ts">
  import {ref} from "vue";
  import {getCode} from "@/service/qrcode";
  import CustomInput from "@/components/Custom/CustomInput.vue";
  import CustomButton from "@/components/Custom/CustomButton.vue";

  const props=defineProps<{
    title:string,
    descr:string,
  }>()
  const img=ref<string>("");
  const val=ref<string>("");
  const  getCodeContent=async ()=>{
    if(val.value==="") return;
    img.value=await getCode(val.value);
  }
</script>

<style scoped lang="scss">
.card{
  width: 350px;
  border-radius: 12px;
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  &__image{
    margin-top: 10px;
  }
  &__action{
    margin-top: 10px;
    gap: 15px;
    display: flex;
    flex-direction: column;
  }
  &__title{
    font-size: 24px;
    font-weight: 700;
  }
  &__description{
    color: #c1c1c1;
  }
}
img{
  width: 100%;
}
</style>