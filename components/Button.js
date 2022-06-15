app.component('button-component', {
  template: 
  /*html*/
  `
  <div class="btn-container"><button v-on:click="getTodos" class="button">Generate My Todo List</button></div>
  

  `,
  methods: {
      getTodos() {
          this.$emit('get-todos')
      },

  },
})