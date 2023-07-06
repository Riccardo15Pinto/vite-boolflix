<script>
export default {
    props: {
        // props for cards
        title: 'string',
        original_title: 'string',
        image: 'string',
        vote: 'string',
        id: 'string',
        original_language: 'string',
        overwiev: 'string',
        cast: 'array'
    },
    computed: {
        // check vote_average in card and return number 1 to 5
        getCeilAvarage() {
            return Math.ceil(this.vote / 2);
        },
    },

    methods: {
        // get absolute url
        getImagePath(target) {
            const url = new URL(`../assets/img/${target}.png`, import.meta.url);
            return url.href;
        },
        // get image poster
        getImagePoster(object) {
            return `https://image.tmdb.org/t/p/w342${object}`;
        },
    }
}
</script>
<template>
    <!-- card -->
    <div :key="id" class="card">
        <!-- poster/image section -->
        <div class="poster">
            <!-- if poster not contains image -->
            <img v-if="!image" src="https://arice.leggere.it/arimg.ashx?e=9788871191959&k=gb&w=300&h=500" alt="">
            <!-- image -->
            <img v-else :src="getImagePoster(image)" alt="">
        </div>

        <!-- info card -->
        <div class="info-poster">
            <!-- title -->
            <h2>Titolo:{{ title }}</h2>
            <h2 v-if="title !== original_title">Titolo originale:{{ original_title }}</h2>
            <!-- grades -->
            <div>
                <h2>
                    Voto:
                    <FontAwsomeIcon :icon="['fas', 'star']" v-for="n in getCeilAvarage" class="full-star" />
                    <FontAwsomeIcon :icon="['far', 'star']" v-for="n in 5 - getCeilAvarage" />
                </h2>
            </div>
            <!-- language -->
            <h2>
                Lingua:
                <span v-show="original_language != 'en' && original_language != 'it'">{{ original_language }}</span>
                <img v-if="original_language == 'en' || original_language == 'it'" :src="getImagePath(original_language)"
                    alt="" class="flag">
            </h2>
            <!-- overview -->
            <h2 v-if="overwiev">
                Trama:
                {{ overwiev }}
            </h2>
            <!-- cast -->
            <div v-if="cast.length > 0">
                <h2>Cast:</h2>
                <ul>
                    <li v-for="actor in cast">{{ actor.original_name || actor.name }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    margin: 10px;
    position: relative;
    cursor: pointer;

    .poster {
        width: 300px;
        height: 400px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .info-poster>* {
        padding: 10px 0;
    }

    .info-poster {
        display: none;
        color: white;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 10px;
        overflow: auto;

        .full-star {
            color: gold;
        }

        .flag {
            width: 60px;
            height: 30px;
        }
    }

    &:hover .info-poster {
        display: block;
    }
}
</style>