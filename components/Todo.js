app.component('todo-list' , {
    props:{
        todos:{
            type: Array,
            required: true
        }
        
    },

    template:
    /*html*/
    `
        <div class="todo-container">
            <h3>Todos:</h3>
            <table id="todo-table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Task</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="todo in todos">
                        <td>{{todo.id}}</td>
                        <td>{{todo.title}}</td>
                        <td>{{todo.completed}}</td>
                    </tr>
                </tbody>
            
            </table>
        </div>
    `,

    
    mounted(){
        $(document).ready( function () {
            $('#todo-table').dataTable();
        } );
    }
})