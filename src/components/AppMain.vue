<script>
import { store } from '../data/data'
import CardMain from './CardMain.vue';
export default {
    components: { CardMain },
    data() {
        return store
    }
}
</script>

<template>
    <main>
        <section v-show="Movies.length > 0">
            <h2>FILM</h2>
            <div class="container-card">
                <CardMain v-for="movie in Movies" :key="movie.id" :title="movie.title"
                    :original_title="movie.original_title" :image="movie.poster_path" :vote="movie.vote_average"
                    :id="movie.id" :original_language="movie.original_language" />
            </div>
        </section>
        <section v-show="Series.length > 0">
            <h2>SERIE</h2>
            <div class="container-card">
                <CardMain v-for="episode in Series" :key="episode.id" :title="episode.name"
                    :original_title="episode.original_name" :image="episode.poster_path" :vote="episode.vote_average"
                    :id="episode.id" :original_language="episode.original_language" />
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
main {
    background-color: rgb(44, 44, 44);
    height: calc(100vh - 150px);
    overflow: auto;

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

