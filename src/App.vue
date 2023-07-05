<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from '../node_modules/axios';
import { store } from './data/data'
const uri = 'https://api.themoviedb.org/3/search/';
const keyApi = '87c04791798b475aab0066ddfb567b5f';
export default {
  component: { AppHeader, AppMain },
  data() {
    return {
      store,
    };
  },

  methods: {

    getMovieContent(object) {
      axios.get(`${uri}movie?api_key=${keyApi}&query=${object}&language=it-IT`).then(res => {
        store.Movies = res.data.results;
      });
    },

    getSeriesContent(object) {
      axios.get(`${uri}tv?api_key=${keyApi}&language=it-IT&query=${object}`).then(res => {
        store.Series = res.data.results;
      });
    },

    getMediaContent(object) {
      this.getMovieContent(object);
      this.getSeriesContent(object)
    },

    getImagePath(target) {
      const url = new URL(`./assets/img/${target}.png`, import.meta.url);
      return url.href;
    },

    getCeilAvarage(object) {
      return Math.ceil(object / 2);
    },

    getImagePoster(object) {
      return `https://image.tmdb.org/t/p/w342${object}`;
    },
  },
  components: { AppHeader }
}
</script>

<template>
  <AppHeader @input-change="getMediaContent" />

  <h2>film</h2>
  <ul>
    <li v-for=" movie  in  store.Movies " :key="movie.id">
      <h5>{{ movie.title }}</h5>
      <h5>{{ movie.original_title }}</h5>
      <div>
        <img v-if="movie.backdrop_path" :src="getImagePoster(movie.backdrop_path)" alt="">
        <img v-if="!movie.backdrop_path" src="https://arice.leggere.it/arimg.ashx?e=9788871191959&k=gb&w=300&h=500"
          alt="">
      </div>
      <h5>{{ getCeilAvarage(movie.vote_average) }}</h5>
      <div>
        <FontAwsomeIcon :icon="['fas', 'star']" />
      </div>
      <h5 v-show="movie.original_language != 'en' && movie.original_language != 'it'">{{ movie.original_language }}</h5>
      <div>
        <img v-if="movie.original_language == 'en' || movie.original_language == 'it'"
          :src="getImagePath(movie.original_language)" alt="">
      </div>
    </li>
  </ul>
  <hr>
  <h2>serie</h2>

  <ul>
    <li v-for=" episode  in  store.Series " :key="episode.id">
      <h5>{{ episode.name }}</h5>
      <h5>{{ episode.original_name }}</h5>
      <div>
        <img v-if="episode.backdrop_path" :src="getImagePoster(episode.backdrop_path)" alt="">
        <img v-if="!episode.backdrop_path" src="https://arice.leggere.it/arimg.ashx?e=9788871191959&k=gb&w=300&h=500"
          alt="">
      </div>
      <h5>{{ getCeilAvarage(episode.vote_average) }}</h5>
      <div>
        <FontAwsomeIcon :icon="['fas', 'star']" />
      </div>
      <h5 v-show="episode.original_language != 'en' && episode.original_language != 'it'">{{ episode.original_language
      }}
      </h5>
      <div>
        <img v-if="episode.original_language == 'en' || episode.original_language == 'it'"
          :src="getImagePath(episode.original_language)" alt="">
      </div>
    </li>
  </ul>
</template>

<style scoped></style>
