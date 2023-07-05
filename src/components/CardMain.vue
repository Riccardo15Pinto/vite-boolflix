<script>
export default {
    props: {
        title: 'string',
        original_title: 'string',
        image: 'string',
        vote: 'string',
        id: 'string',
        original_language: 'string'
    },
    computed: {
        getCeilAvarage() {
            return Math.ceil(this.vote / 2);
        },
    },

    methods: {
        getImagePath(target) {
            const url = new URL(`../assets/img/${target}.png`, import.meta.url);
            return url.href;
        },

        getImagePoster(object) {
            return `https://image.tmdb.org/t/p/w342${object}`;
        },
    }
}
</script>
<template>
    <li :key="id">
        <h5>{{ title }}</h5>
        <h5>{{ original_title }}</h5>
        <div>
            <img v-if="image" :src="getImagePoster(image)" alt="">
            <img v-if="!image" src="https://arice.leggere.it/arimg.ashx?e=9788871191959&k=gb&w=300&h=500" alt="">
        </div>
        <div>
            <FontAwsomeIcon :icon="['fas', 'star']" v-for="n in getCeilAvarage" />
            <FontAwsomeIcon :icon="['far', 'star']" v-for="n in 5 - getCeilAvarage" />
        </div>
        <h5 v-show="original_language != 'en' && original_language != 'it'">{{ original_language }}</h5>
        <div>
            <img v-if="original_language == 'en' || original_language == 'it'" :src="getImagePath(original_language)"
                alt="">
        </div>
    </li>
</template>

<style scoped></style>