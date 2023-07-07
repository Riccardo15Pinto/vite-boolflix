<script>
// import header
import AppHeader from './components/AppHeader.vue';
// import main
import AppMain from './components/AppMain.vue';
// import axios
import axios from '../node_modules/axios';
// import store 
import { store } from './data/data'
// base uri
const uri = 'https://api.themoviedb.org/3/search/';
// my key api
const keyApi = '87c04791798b475aab0066ddfb567b5f';
export default {
  // rec components
  components: { AppHeader, AppMain },
  data() {
    // rec store
    return store
  },

  methods: {
    // call data from server
    fetchContent(object, endpoint, destination, target, category) {
      axios.get(`${uri}${endpoint}?api_key=${keyApi}&query=${object}&language=it-IT`)
        .then((res) => {
          store[destination] = [];
          res.data.results.forEach((element) => {
            axios.get(`https://api.themoviedb.org/3/${endpoint}/${element.id}/credits?api_key=${keyApi}`)
              .then((res) => {
                store[target].push(res.data);
                store[target].forEach((element) => {
                  element.cast.splice(5, element.cast.length - 1);
                });
                store[destination].push(element);
              });
          });
        });
      store[destination].forEach(element => {

        axios.get(`https://api.themoviedb.org/3/${endpoint}/${element.id}?api_key=${keyApi}`)
          .then((res) => {
            store[category].push(res.data)

          });
      });
    },
    // call two times fetchcontent
    getMediaContent(object) {
      this.fetchContent(object, 'movie', 'Movies', 'CastMovie', 'MovieCategory')
      this.fetchContent(object, 'tv', 'Series', 'CastSeries', 'SeriesCategory')
    },
  }
}

</script>

<template>
  <!-- header component -->
  <!-- on click call getMediaContent -->
  <AppHeader @input-change="getMediaContent" />
  <!-- main component -->
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

::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background: #818181;
}

::-webkit-scrollbar-thumb {
  background: #ff0f0f;
}

::-webkit-scrollbar-thumb:hover {
  background: #b81919;
}
</style>
