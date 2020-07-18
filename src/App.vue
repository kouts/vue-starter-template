<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import '@/scss/styles.scss';

const defaultLayout = 'default';

export default {
  computed: {
    layout() {
      return this.$route.meta.layout ? `layout-${this.$route.meta.layout}` : `layout-${defaultLayout}`;
    }
  }
};
</script>
