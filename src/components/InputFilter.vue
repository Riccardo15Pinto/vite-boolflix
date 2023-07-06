<script>
export default {
    data() {
        return {
            // input result
            userSearch: '',
        }
    },
    // on click emit
    emits: ['Input-change'],
}
</script>

<template>
    <!-- container form -->
    <div id="form-container">
        <!-- form -->
        <form @submit.prevent="$emit('Input-change', userSearch)">
            <!-- input -->
            <input type="text" v-model.trim="userSearch" placeholder="Cerca....">
            <!-- button -->
            <button>Cerca</button>
        </form>
    </div>
</template>

<style scoped lang="scss">
input {
    width: 250px;
    padding: 10px;
    border: 2px solid transparent;
    border-radius: 30px;
    margin-right: 20px;


    &:focus {
        border: black;
    }
}

button {
    padding: 10px 20px;
    background-color: red;
    color: white;
    border-radius: 30px;
}
</style>

