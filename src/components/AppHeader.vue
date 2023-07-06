<script>
// import input component
import InputFilter from '../components/InputFilter.vue';
export default {
    // rec component
    components: { InputFilter },
    // rec emits
    emits: ['Input-change'],
    methods: {
        // get data from input component to header to app
        getInputChange(object) {
            this.$emit('Input-change', object)
        }
    }
}
</script>

<template>
    <!-- header content -->
    <header>
        <!-- title -->
        <h1>BOOLFLIX</h1>
        <!-- input component -->
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
        text-shadow: 0 0 20px black;
    }

    #form-container {
        margin-right: 20px;
    }
}
</style>