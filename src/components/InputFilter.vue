<script>

export default {
    data() {
        return {
            userSearch: '',
        }
    },
    emits: ['Input-change'],
}
</script>

<template>
    <div id="form-container">
        <form @submit.prevent="$emit('Input-change', userSearch)">
            <input type="text" v-model.trim="userSearch">
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

