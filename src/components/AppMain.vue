<script>
// import store
import { store } from '../data/data'
// and card
import CardMain from './CardMain.vue';
export default {
    // rec component
    components: { CardMain },
    // and store
    data() {
        return store
    }
}
</script>

<template>
    <!-- main content -->
    <main>
        <!-- movie section -->
        <section v-show="Movies.length > 0">
            <h2>FILM</h2>
            <div class="container-card">
                <!-- card parametres -->
                <CardMain v-for="(movie, i) in Movies" :key="movie.id" :title="movie.title"
                    :original_title="movie.original_title" :image="movie.poster_path" :vote="movie.vote_average"
                    :id="movie.id" :original_language="movie.original_language" :overwiev="movie.overview"
                    :cast="CastMovie[i].cast" :type="MovieCategory[i].genres" />
            </div>
        </section>
        <!-- series section -->
        <section v-show="Series.length > 0">
            <h2>SERIE</h2>
            <!-- card parametres -->
            <div class="container-card">
                <CardMain v-for="(episode, i) in Series" :key="episode.id" :title="episode.name"
                    :original_title="episode.original_name" :image="episode.poster_path" :vote="episode.vote_average"
                    :id="episode.id" :original_language="episode.original_language" :overwiev="episode.overview"
                    :cast="CastSeries[i].cast" :type="SeriesCategory[i].genres" />
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
main {
    background-color: rgb(44, 44, 44);
    height: calc(100vh - 150px);
    overflow: auto;

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

    h2 {
        color: white;
        padding: 30px;
        text-align: center;
    }

    .container-card {
        display: flex;
        flex-wrap: wrap;
        max-width: 1600px;
        margin: 0 auto;

        .card {
            flex-basis: calc(100% / 5 - 20px);
        }
    }
}
</style>

