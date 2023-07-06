<script>
export default {
    props: {
        title: 'string',
        original_title: 'string',
        image: 'string',
        vote: 'string',
        id: 'string',
        original_language: 'string',
        overwiev: 'string'
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
    <div :key="id" class="card">
        <div class="poster">
            <img v-if="!image" src="https://arice.leggere.it/arimg.ashx?e=9788871191959&k=gb&w=300&h=500" alt="">
            <img v-else :src="getImagePoster(image)" alt="">
        </div>
        <div class="info-poster">

            <h2>Titolo:{{ title }}</h2>
            <h2 v-if="title !== original_title">Titolo originale:{{ original_title }}</h2>
            <div>
                <h2>
                    Voto:
                    <FontAwsomeIcon :icon="['fas', 'star']" v-for="n in getCeilAvarage" class="full-star" />
                    <FontAwsomeIcon :icon="['far', 'star']" v-for="n in 5 - getCeilAvarage" />
                </h2>
            </div>

            <h2>
                Lingua:
                <span v-show="original_language != 'en' && original_language != 'it'">{{ original_language }}</span>
                <img v-if="original_language == 'en' || original_language == 'it'" :src="getImagePath(original_language)"
                    alt="" class="flag">
            </h2>
            <h2>
                Trama:
                {{ overwiev }}
            </h2>

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