<template>
    <div class="" id="todo-app">
        <!-- TITLE WITH CUSTOM NAME -->
        <h1> {{name ? `${name}'s`: ''}} Todos App </h1>

        <SearchBar v-on:search-change="handleSearch"/>

        <TodoList v-bind:todos="filteredTodos"
                  v-on:del-todo="handleTodoDelete"/>

        <AddTodo v-on:add-todo="handleTodoAdd"/>
    </div>
</template>

<script>

    import TodoList from './TodoList'
    import AddTodo from './AddTodo'
    import SearchBar from './SearchBar'

    export default {
        name: 'TodoApp',
        components: {
            TodoList,
            AddTodo,
            SearchBar,
        },
        props: ['name'],
        data() {
            return ({
                todos: [],
                filteredTodos: [],
            })
        },
        methods: {
            handleSearch(search) {
                console.log('SEARCH -->', search)
                this.filteredTodos = search ? this.todos.filter(todo => todo.title.includes(search)) : this.todos
            },
            async handleTodoDelete(id) {
                console.log('DELETING TODO with ID >>>', id)
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {method: 'DELETE'})
                if (response) {
                    this.todos = this.todos.filter(todo => todo.id !== id)
                    this.filteredTodos = this.todos
                }
            },
            async handleTodoAdd(todo) {
                const {title, completed} = todo
                const REQUEST_INIT = {method: 'POST', body: JSON.stringify({title, completed})}
                const response = await fetch('https://jsonplaceholder.typicode.com/todos', REQUEST_INIT)
                const {id} = await response.json()
                this.todos = [...this.todos, {id, title, completed}]
                this.filteredTodos = this.todos
            },
        },
        // COMPONENT DID MOUNT
        async created() {
            console.log('FETCHING TODOS...')
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            this.todos = this.filteredTodos = await response.json()
        },
    }
</script>

<style scoped>

</style>