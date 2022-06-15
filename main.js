const app = Vue.createApp({
    data() {
        return {
            todos: [],
            url: "https://jsonplaceholder.typicode.com/users/1/todos"
        }
    },
    methods: {
        async addTodos() {
            const response = await fetch(this.url)
            const data = await response.json()
            this.todos = data
        },
    }
  })
  