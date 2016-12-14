<template>
  <div>
    <page-header></page-header>
    <!-- page-main></page-main>
    <page-footer></page-footer -->
  </div>
</template>

<script>
import PageHeader from './PageHeader.vue';
// import PageMain from './PageMain.vue';
// import PageFooter from './PageFooter.vue';

export default {
  components: { PageHeader }, //, PageMain, PageFooter },
};
</script>
<style lang="sass">
  $font-stack: Roboto, sans-serif;
  html {
    font-family: $font-stack;
  }
</style>
