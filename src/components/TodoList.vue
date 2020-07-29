<template>
    <div id="list">

        <div class="placeholder" v-if="!todos.length">
            <span class="label"> Nothing to show </span>
            <span class="material-icons">sentiment_satisfied_alt</span>
        </div>

        <TodoItem v-bind:key="todo.id"
                  v-bind:todo="todo"
                  v-for="todo in todos"
                  v-on:del-todo="$emit('del-todo', todo.id)"
        />
    </div>
</template>

<script>

    import TodoItem from './TodoItem'

    export default {
        name: 'TodoList',
        components: {
            TodoItem,
        },
        props: ['todos'],
    }
</script>

<style scoped>
    .placeholder {
        color: lightgray;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .label {
        font-weight: bold;
        font-size: x-large;
        margin-right: 5px;
    }

</style>