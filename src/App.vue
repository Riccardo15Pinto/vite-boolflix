<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from '../node_modules/axios';
import { store } from './data/data'
const uri = 'https://api.themoviedb.org/3/search/';
const keyApi = '87c04791798b475aab0066ddfb567b5f';
export default {
  components: { AppHeader, AppMain },
  data() {
    return { store };
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

  },
}
</script>

<template>
  <AppHeader @input-change="getMediaContent" />
  <AppMain />
</template>

<style scoped></style>
