<template>
    <div id="add-todo">
        <form @submit="handleSubmit">

            <input id="title-input"
                   name="title"
                   placeholder="Type your new todo..."
                   type="text"
                   v-model="title">

            <!-- SUBMIT -->
            <button class="btn" type="submit" value="Add">
                Add
            </button>

        </form>
    </div>
</template>

<script>

    export default {
        name: 'AddTodo',
        data() {
            return ({
                title: ''
            })
        },
        methods: {
            handleSubmit(event) {
                event.preventDefault()

                // CREO UN TO DO DA PROPAGARE
                const newTodo = {
                    title: this.title,
                    completed: false,
                }

                // SEND UP TO PARENT
                this.title && // prevent empty todos
                this.$emit('add-todo', newTodo)

                this.title = '' // CLEAN UP
            }
        },
    }
</script>

<style scoped>
    form {
        display: flex;
    }

    input[type="text"] {
        flex: 10;
        padding: 5px;
    }

    input[type="submit"] {
        flex: 2;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>