<template>
  <div class="" style="background: #000">
    <!-- Section 1: Search characters and logo -->
    <section class="search-characters-container">
      <img
        class="image-logo"
        src="../assets/rick-and-morty-logo.png"
        alt="Rick and Morty Logo"
      />
      <div class="search-container">
        <SearchInput
          :value="searchName"
          @input="updateValue"
          placeholder="Search Character Name"
        />
      </div>
      <div class="fade"></div>
    </section>

    <!-- Section 2: List result characters -->
    <section class="list-characters-section">
      <LoadingScreen v-if="loading" />

      <q-row class="row" v-else>
        <q-col
          class="col-6 col-xs-12 col-sm-6 col-md-3 col-lg-2"
          style="justify-content: center; display: flex"
          v-for="character in characters.results"
          :key="character.id"
        >
          <Character
            :character="character"
            @click="() => handleClick(character.id)"
          />
        </q-col>
      </q-row>
    </section>

    <div class="pagination-container">
      <button
        class="pagination-btn"
        v-if="currentPage > 1"
        @click="previousPage()"
      >
        {{ '< Previous' }}
      </button>
      <span> {{ currentPage }} of {{ characters.info?.pages }} </span>
      <button
        class="pagination-btn"
        v-if="currentPage < `${parseInt(characters.info?.pages)}`"
        @click="() => nextPage()"
      >
        Next >
      </button>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, watchEffect, ref } from 'vue';
import { useRouter } from 'vue-router';

// Apollo
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';

// Components
import LoadingScreen from '../components/LoadingScreen.vue';
import Character from '../components/Character.vue';
import SearchInput from '../components/SearchInput.vue';

const ALL_CHARACTERS_QUERY = gql`
  query getAllCharacters($name: String!, $page: Int!) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`;

export default defineComponent({
  name: 'HomeScreen',
  components: {
    SearchInput,
    Character,
    LoadingScreen,
  },
  data() {
    return {
      searchName: '',
      currentPage: 1,
      loading: true,
      characters: [],
    };
  },
  watch: {
    // whenever pagination changes, reload characters results
    currentPage(newPage) {
      this.getCharacters(newPage);
    },
    searchName() {
      let searchTimeout: ReturnType<typeof setTimeout> | undefined;

      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }

      // wait time to call API while typing
      searchTimeout = setTimeout(() => {
        try {
          this.currentPage = 1;
          this.getCharacters();
        } catch (error) {
          console.error(error);
        }
      }, 2000);
    },
  },
  mounted() {
    this.getCharacters();
  },
  methods: {
    updateValue(event: any) {
      this.$data.searchName = event.target.value;
    },

    // calls the graphql api to load the characters
    async getCharacters(page = 1) {
      this.loading = true;

      const variables = ref({
        name: this.$data.searchName,
        page,
      });

      const { result, loading } = await useQuery(
        ALL_CHARACTERS_QUERY,
        variables
      );

      // waits for the return of the api to update the state of variables
      watchEffect(() => {
        if (result.value) {
          this.characters = result.value.characters;
          this.loading = loading.value;
        }
      });
    },
    nextPage() {
      this.$data.currentPage += 1;
    },
    previousPage() {
      this.$data.currentPage -= 1;
    },
  },
  setup() {
    const router = useRouter();

    // navigate to character page
    const handleClick = (id: number) => {
      router.push(`/character-details/${id}`);
    };

    return {
      handleClick,
    };
  },
});
</script>

<style scoped>
/* Search section */
.search-characters-container {
  background-image: url('../assets/home-background.png');
  background-size: cover;
  background-position: center;
  height: 55vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
}

.image-logo {
  background-repeat: no-repeat;
  background-size: cover;
  margin: 80px auto;
  object-fit: contain;
}

.search-container {
  display: flex;
  flex: 1;
  align-items: flex-end;
  width: 50vh;
  margin-bottom: 0px;
}

.fade {
  /* style to help organize the layout of the characters */
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;
  width: 100%;
  height: 100px;
  background-image: linear-gradient(transparent, #000000);
  z-index: 9;
  align-items: center;
  justify-content: center;
}

/* list characters section */
.list-characters-section {
  background-color: #000000;
  padding: 50px 100px;
  height: 100%;
}

@media (min-width: 1170px) {
  .list-characters-section {
    padding: 50px 200px;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
}

.pagination-container {
  /* style to help organize the layout of the characters */
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-image: linear-gradient(transparent, #000000);
  z-index: 10;
  align-items: center;
  justify-content: center;
  color: #badfdf;
  font-size: 25px;
}

.pagination-btn {
  border: none;
  background-color: inherit;
  padding: 0px 10px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  color: #badfdf;
  font-size: 25px;
}
</style>