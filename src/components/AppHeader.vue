<script>
import InputFilter from '../components/InputFilter.vue';
export default {
    components: { InputFilter },
    emits: ['Input-change'],
    methods: {
        getInputChange(object) {
            this.$emit('Input-change', object)
        }
    }
}
</script>

<template>
    <header>
        <h1>BOOLFLIX</h1>
        <InputFilter @input-change="getInputChange" />
    </header>
</template>

<style scoped></style>