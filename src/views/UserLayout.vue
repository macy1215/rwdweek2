<template>
  <Navbar-Component></Navbar-Component>
  <RouterView></RouterView>
  <Footer-Component></Footer-Component>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss">
@import '../src/assets/scss/helper/_main.scss';
</style>
