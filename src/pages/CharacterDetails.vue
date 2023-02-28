<template>
  <div class="character-details-screen">
    <div>
      <button class="go-back-button" @click="goBack">{{ '< Voltar' }}</button>
    </div>

    <LoadingScreen v-if="loading" />

    <div style="text-align: center" v-else>
      <h2 class="title-name">{{ character.name }}</h2>

      <div class="character-details-container">
        <div class="main-details">
          <q-row class="row">
            <q-col
              class="col-6 col-xs-12 col-sm-12 col-md-12 col-lg-3"
              style="justify-content: center; display: flex"
            >
              <img
                class="character-image"
                :src="character.image"
                alt="Rick and Morty Logo"
              />
            </q-col>
            <q-col class="col-6 col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div class="character">
                <h3 class="title-info">Character</h3>
                <div>
                  <q-row class="row">
                    <q-col class="col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="info-content">
                        <span class="info-label">Name: </span>
                        <span class="info-result">{{ character.name }}</span>
                      </div>
                    </q-col>
                    <q-col class="col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="info-content">
                        <span class="info-label">Species: </span>
                        <span class="info-result">{{ character.species }}</span>
                      </div>
                    </q-col>
                    <q-col class="col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="info-content">
                        <span class="info-label">Status: </span>
                        <span class="info-result">{{ character.status }}</span>
                      </div>
                    </q-col>
                    <q-col class="col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="info-content">
                        <span class="info-label">Gender: </span>
                        <span class="info-result">{{ character.gender }}</span>
                      </div>
                    </q-col>
                  </q-row>
                </div>
              </div>
            </q-col>
            <q-col class="col-6 col-xs-12 col-sm-12 col-md-12 col-lg-5">
              <div class="character">
                <h3 class="title-info">Origin</h3>
                <div>
                  <q-row class="row">
                    <q-col class="col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="info-content">
                        <span class="info-label">Name: </span>
                        <span class="info-result">{{
                          character.origin?.name
                        }}</span>
                      </div>
                    </q-col>
                    <q-col class="col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="info-content">
                        <span class="info-label">Dimension: </span>
                        <span class="info-result">{{
                          character.origin?.dimension
                        }}</span>
                      </div>
                    </q-col>
                    <q-col class="col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="info-content">
                        <span class="info-label">Type: </span>
                        <span class="info-result">{{
                          character.origin?.type
                        }}</span>
                      </div>
                    </q-col>
                    <q-col class="col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="info-content">
                        <span class="info-label">Amount of Residentes:</span>
                        <span class="info-result">{{
                          character.origin?.residents.length
                        }}</span>
                      </div>
                    </q-col>
                  </q-row>
                </div>
              </div>
            </q-col>
            <q-col
              class="col-6 col-xs-12 col-sm-12 col-md-12 col-lg-3"
              style="justify-content: center; display: flex"
            >
            </q-col>
            <q-col class="col-6 col-xs-12 col-sm-12 col-md-12 col-lg-9">
              <div class="character">
                <h3 class="title-info">Location</h3>
                <div>
                  <q-row class="row">
                    <q-col class="col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="info-content">
                        <span class="info-label">Name: </span>
                        <span class="info-result">{{
                          character.location?.name
                        }}</span>
                      </div>
                    </q-col>
                    <q-col class="col-6 col-xs-12 col-sm-12 col-md-5 col-lg-6">
                      <div class="info-content">
                        <span class="info-label">Dimension: </span>
                        <span class="info-result">{{
                          character.location?.dimension
                        }}</span>
                      </div>
                    </q-col>
                    <q-col class="col-6 col-xs-12 col-sm-12 col-md-5 col-lg-6">
                      <div class="info-content">
                        <span class="info-label">Type: </span>
                        <span class="info-result">{{
                          character.location?.type
                        }}</span>
                      </div>
                    </q-col>
                  </q-row>
                </div>
              </div>
            </q-col>
          </q-row>
        </div>
      </div>

      <div class="episodes-container">
        <h3 class="title-info">Episodes</h3>
        <p class="episodes-text">{{ namesString }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

// Apollo
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

// Components
import LoadingScreen from '../components/LoadingScreen.vue';

const SINGLE_CHARACTER_QUERY = gql`
  query getUserById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
        type
        dimension
        residents {
          id
        }
      }
      location {
        id
        name
        type
        dimension
        residents {
          id
        }
      }
      image
      episode {
        id
        name
      }
      created
    }
  }
`;

export default defineComponent({
  name: 'CharacterDetails',
  components: {
    LoadingScreen,
  },
  data() {
    return {
      character: {
        episode: [{ name: '' }],
      },
      loading: false,
    };
  },
  computed: {
    // to display all episodes, string concatenation is required
    namesString() {
      if (this.character) {
        return this.character.episode.reduce((accumulator, currentItem) => {
          let separator;

          if (accumulator) {
            separator = ', ';
          } else {
            separator = ' ';
          }

          return accumulator + separator + currentItem.name;
        }, '');
      }
      return null;
    },
  },
  mounted() {
    this.getCharacterDetails();
  },
  methods: {
    // method to load the information of the character selected in the previous screen
    async getCharacterDetails() {
      this.loading = true;

      const router = useRouter();

      const characterId = router.currentRoute.value.params.id;

      const variables = ref({
        id: characterId,
      });

      const { result, loading } = await useQuery(
        SINGLE_CHARACTER_QUERY,
        variables
      );

      // waits for the return of the api to update the state of variables
      watchEffect(() => {
        if (result.value) {
          this.character = result.value.character;
          this.loading = loading.value;
        }
      });
    },
  },
  setup() {
    const router = useRouter();

    // back to main screen
    const goBack = () => {
      router.go(-1);
    };

    return {
      goBack,
    };
  },
});
</script>

<style scoped>
.character-details-screen {
  background-image: url('../assets/character-background.jpg');
  background-size: cover;
  background-position: center;
  height: 100%;
  flex-direction: column;
  padding: 50px 150px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.go-back-button {
  border: none;
  background-color: inherit;
  padding: 0px 10px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  color: #ffffff;
  font-size: 25px;
}

.character-details-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #375c5acc;
  border-radius: 8px;
  padding-bottom: 50px;
  text-align: start;
}

.title-name {
  font-family: 'GET_SCHWIFTY';
  color: #ffffff;
  margin-bottom: 120px;
}

.character-image {
  height: 300px;
  margin-left: 20px;
  margin-top: -40px;
  border-radius: 8px;
  box-shadow: -10px 10px 5px 0px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: -10px 10px 5px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: -10px 10px 5px 0px rgba(0, 0, 0, 0.6);
}

@media (max-width: 1024px) {
  .character {
    text-align: center;
  }
}

.main-details {
  margin-left: 20px;
  width: 100%;
}

.info-content {
  margin: 0 10px;
  display: inline-block;
}

.info-label {
  font-size: 25px;
  color: #badfdf;
}

.info-result {
  font-size: 25px;
  color: #ffffff;
  font-weight: 800;
}

.title-info {
  color: #42b4ca;
  width: bold;
}

.episodes-container {
  padding: 100px 0px;
  text-align: start;
}

.episodes-text {
  font-size: 25px;
  color: #ffffff;
}
</style>