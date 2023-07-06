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

    fetchContent(object, endpoint, destination, target) {
      axios.get(`${uri}${endpoint}?api_key=${keyApi}&query=${object}&language=it-IT`).then(res => {
        store[destination] = res.data.results;
        store[destination].forEach(element => {
          axios.get(`https://api.themoviedb.org/3/${endpoint}/${element.id}/credits?api_key=${keyApi}`).then(res => {
            store[target].push(res.data);
          });
        });
      });
    },

    getMediaContent(object) {
      this.fetchContent(object, 'movie', 'Movies', 'CastMovie')
      this.fetchContent(object, 'tv', 'Series', 'CastSeries')
    },

  },
}
</script>

<template>
  <AppHeader @input-change="getMediaContent" />
  <AppMain />
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
