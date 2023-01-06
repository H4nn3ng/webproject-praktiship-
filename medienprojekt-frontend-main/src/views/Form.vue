<template>
  <div class="home">
    <b-card class="m-5 padding-5 divb shadow rounded">
      <div>
        <FormTest />
      </div>
    </b-card>
  </div>
</template>

<script>
// @ is an alias to /src
import FormTest from '@/components/FormTest.vue';

export default {
  name: 'Home',
  components: {
    FormTest,
  },
};
</script>

<style scoped>
.divb {
  background-image: url('https://www.xmple.com/wallpaper/violet-blue-gradient-linear-1920x1080-c2-e2b6ff-b6c7ff-a-60-f-14.svg');
}
.b {
  background-color: transparent;
}
</style>
