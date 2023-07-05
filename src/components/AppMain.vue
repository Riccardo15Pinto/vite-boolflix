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
        <h2>FILM</h2>
        <ul>
            <CardMain v-for="movie in Movies" :key="movie.id" :title="movie.title" :original_title="movie.original_title"
                :image="movie.poster_path" :vote="movie.vote_average" :id="movie.id"
                :original_language="movie.original_language" />
        </ul>

        <h2>SERIE</h2>
        <ul>
            <CardMain v-for="episode in Series" :key="episode.id" :title="episode.name"
                :original_title="episode.original_name" :image="episode.poster_path" :vote="episode.vote_average"
                :id="episode.id" :original_language="episode.original_language" />
        </ul>
    </main>
</template>

<style scoped></style>

