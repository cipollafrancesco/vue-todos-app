<template>
    <div class="search-bar" id="search-bar">
        <input @change="$emit('search-change', search)"
               placeholder="Search your todo..."
               type="text"
               v-model="search"
        >
    </div>
</template>

<script>
    export default {
        name: 'SearchBar',
        data() {
            return ({
                search: '',
            })
        }
    }
</script>

<style scoped>

    .search-bar {
        display: flex;
    }

    input[type="text"] {
        flex: 12;
        padding: 10px;
        margin-bottom: 15px;
    }
</style>