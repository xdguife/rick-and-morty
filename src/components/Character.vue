<template>
  <div class="container-character">
    <div class="character-info">
      <p class="character-name">
        {{ character.name }}
      </p>

      <img class="character" :src="character.image" alt="Descrição da imagem" />
    </div>

    <img class="portal" src="../assets/portal.png" alt="Descrição da imagem" />
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

interface CharacterProps {
  id: number;
  name: string;
  image: string;
}

export default defineComponent({
  name: 'CharacterComponent',
  props: {
    character: {
      type: Object as PropType<CharacterProps>,
      required: true,
    },
  },
});
</script>

<style scoped>
.container-character {
  display: flex;
  width: 150px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

/* hover animation effect */
.container-character:hover {
  cursor: pointer;
}

.container-character:hover > .character-info {
  margin-top: -30px;
}

.container-character > .character-info {
  transition: margin-top 0.1s linear;
}

.character-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 150px;
  overflow: hidden;
}

.character-name {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-family: 'GET_SCHWIFTY';
  font-size: 20px;
  color: white;
  text-align: center;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.character {
  width: 110px;
  border-radius: 50%;
  z-index: 1;
}

.portal {
  margin-top: -50px;
  width: 150px;
}
</style>