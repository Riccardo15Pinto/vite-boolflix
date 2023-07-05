<script>
import axios from '../node_modules/axios';
import { store } from './data/data'
const uri = 'https://api.themoviedb.org/3/search/';
const keyApi = '87c04791798b475aab0066ddfb567b5f';
export default {
  data() {
    return {
      store,
      userSearch: '',
    }
  },

  computed: {
    currentMovieUserSearch() {
      return `${uri}movie?api_key=${keyApi}&query=${this.userSearch}&language=it-IT`;
    },
    currentSeriesUserSearch() {
      return `${uri}tv?api_key=${keyApi}&query=${this.userSearch}&language=it-IT`;
    }
  },
  methods: {
    getMovieContent(target) {
      axios.get(target).then(res => {
        store.Movies = res.data.results;
      })
    },

    getSeriesContent(target) {
      axios.get(target).then(res => {
        store.Series = res.data.results;
      })
    },
  },
}
</script>

<template>
  <input type="text" v-model.trim="userSearch">
  <button @click="getMovieContent(currentMovieUserSearch),
    getSeriesContent(currentSeriesUserSearch)">Cerca
  </button>

  <h2>film</h2>
  <ul>
    <li v-for="movie in store.Movies" :key="movie.id">
      <h5>{{ movie.title }}</h5>
      <h5>{{ movie.original_title }}</h5>
      <h5>{{ movie.original_language }}</h5>
      <h5>{{ movie.vote_average }}</h5>
    </li>
  </ul>
  <hr>
  <h2>serie</h2>

  <ul>
    <li v-for="episode in store.Series" :key="episode.id">
      <h5>{{ episode.name }}</h5>
      <h5>{{ episode.original_name }}</h5>
      <h5>{{ episode.original_language }}</h5>
      <h5>{{ episode.vote_average }}</h5>
    </li>
  </ul>
</template>

<style scoped></style>
