<template>
  <div class="row">
    <div class="col">
      <h1>{{ msg }}</h1>
      <p>
        A project setup using vue-cli, created to easily scaffold new Vue.js projects.<br />
        Find out more at <a class="custom" href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
  a.custom {
    color: $secondary;
  }
</style>
