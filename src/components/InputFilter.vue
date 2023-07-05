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
    <div>
        <input type="text" v-model.trim="userSearch">
        <button @click="$emit('Input-change', userSearch)">Cerca</button>
    </div>
</template>

<style scoped></style>