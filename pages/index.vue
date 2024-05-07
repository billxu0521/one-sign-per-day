
<template>
  <client-only>
  <div class="flex justify-center items-center h-screen text-center " >
    <div class="flex flex-col text-center text-3xl font-light">
      <div><p>{{randomSign?.en}}</p></div>
      <div><p>{{randomSign?.zhtw}}</p></div>
      <div @click="getRandomSign" class="m-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="glow-icon">
          <path d="M13.5 2c-5.288 0-9.649 3.914-10.377 9h-3.123l4 5.917 4-5.917h-2.847c.711-3.972 4.174-7 8.347-7 4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5c-3.015 0-5.662-1.583-7.171-3.957l-1.2 1.775c1.916 2.536 4.948 4.182 8.371 4.182 5.797 0 10.5-4.702 10.5-10.5s-4.703-10.5-10.5-10.5z"/>
        </svg>
      </div>
    </div>
    
  </div>
  
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
</client-only>
</template>


<script setup lang="ts">
import { useSignList } from "~/store/useSignList";

useHead({
  title: "Home",
});

const signList = useSignList();
const randomSign = ref(null);

const getRandomSign = () => {
  randomSign.value = getRandomSignData(signList?.signListData);
};
onMounted(() => {
  getRandomSign();
});
</script>

<style>
body {
    margin: auto;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    overflow: auto;
    background: linear-gradient(315deg, rgba(101,0,94,1) 3%, rgba(60,132,206,1) 38%, rgba(48,238,226,1) 68%, rgba(255,25,25,1) 98%);
    animation: gradient 50s ease infinite;
    background-size: 400% 400%;
    background-attachment: fixed;
    
}

@keyframes gradient {
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
}

.wave {
    background: rgb(255 255 255 / 25%);
    border-radius: 1000% 1000% 0 0;
    position: fixed;
    width: 200%;
    height: 12em;
    animation: wave 30s -10s linear infinite;
    transform: translate3d(0, 0, 0);
    opacity: 0.8;
    bottom: 0;
    left: 0;
    z-index: -1;
}

.wave:nth-of-type(2) {
    bottom: -1.25em;
    animation: wave 30s linear reverse infinite;
    opacity: 0.8;
}

.wave:nth-of-type(3) {
    bottom: -2.5em;
    animation: wave 40s -50s reverse infinite;
    opacity: 0.8;
}

@keyframes wave {
    2% {
        transform: translateX(1);
    }

    25% {
        transform: translateX(-25%);
    }

    50% {
        transform: translateX(-50%);
    }

    75% {
        transform: translateX(-25%);
    }

    100% {
        transform: translateX(1);
    }
}
</style>