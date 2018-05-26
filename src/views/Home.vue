<template>
  <div class="home">

    <Dragonball />
  </div>
</template>

<script>
// @ is an alias to /src
import Dragonball from '@/components/Dragonball.vue';

export default {
  name: 'home',
  components: {
    Dragonball
  }
};
</script>
