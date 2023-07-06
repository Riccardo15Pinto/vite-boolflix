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

<style scoped lang="scss">
header {
    height: 150px;
    background-color: rgb(247, 46, 46);
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        color: white;
        margin-left: 20px;
        text-shadow: 0 0 10px black;
    }

    #form-container {
        margin-right: 20px;
    }
}
</style>