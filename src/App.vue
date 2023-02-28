<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Apollo
import { provideApolloClient } from '@vue/apollo-composable';

// Custom Apollo Client
import apolloClient from './api/apollo';

export default defineComponent({
  name: 'App',
  setup() {
    provideApolloClient(apolloClient);
  },
});
</script>
