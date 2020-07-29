<template>
    <!-- AGGIUNTA DI UNA CLASSE SU CONDIZIONE (FIGO)-->
    <div class="todo-item">

        <!-- INPUT CON EVENT HANDLER -->
        <input type="checkbox" v-model="todo.completed" v-on:change="markComplete">

        <!-- TITLE -->
        <p class="todo-infos">
            <span v-bind:class="{'is-complete':todo.completed}">{{todo.title}}</span>
            <br>
            <span class="todo-date">{{todo.date || new Date().toLocaleDateString()}}</span>
        </p>

        <!-- DELETE BTN (emetto un mio event passando come params l'id)-->
        <span @click="$emit('del-todo', todo.id)" class="material-icons delete">clear</span>

    </div>
</template>

<script>

    export default {
        name: 'TodoItem',
        props: ['todo'],
        methods: {
            markComplete(event) {
                console.log('MARKING COMPLETE >>', event.target.checked)
                this.todo.completed = event.target.checked
            }
        }
    }
</script>

<style scoped>

    .todo-item {
        border: 1px solid lightgray;
        margin-bottom: 5px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
    }

    .is-complete {
        text-decoration: line-through;
    }

    .delete {
        float: right;
        margin-right: 15px;
        cursor: pointer;
    }

    .todo-infos {
        text-align: left;
        width: 80%;
    }

    .todo-date {
        font-style: italic;
    }


</style>