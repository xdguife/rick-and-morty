<template>
  <input
    type="text"
    v-model="localValue"
    @input="updateValue"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchInput',
  data() {
    return {
      localValue: '',
    };
  },
  props: {
    value: String,
    placeholder: String,
  },
  setup(props, { emit }) {
    // method to change value as you type, used by parent component
    const updateValue = (event: Event) => {
      const newValue = (event.target as HTMLInputElement).value;
      emit('update:value', newValue);
    };

    return {
      updateValue,
    };
  },
});
</script>

<style>
.custom-input {
  display: inline-block;
  position: relative;
}

input {
  display: block;
  flex: 1;
  width: 100%;
  padding: 10px 25px;
  font-size: 20px;
  border: 1px solid #303a39;
  border-radius: 50px;
  box-sizing: border-box;
  background-color: #303a39;
  color: #a1a1a1;
  z-index: 10;
}

input:focus {
  outline: none;
  border-color: #2d9cdb;
  box-shadow: 0 0 0 2px #2d9cdb33;
}
</style>
