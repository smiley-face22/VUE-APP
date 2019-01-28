 new Vue({
    el: '#vue-app',
    data: { 
        checked: false,
        message: 'Vue Todo-List',
        newTodo: '',
        stores: []
    },
    methods:{
        addTodo() {
          let item = {
            name:this.newTodo,
            done:false
          }
            this.stores.push(item);
            this.newTodo = '';
           
           
        },
        remove(id){
          this.stores.splice(id,1);
        }
      },
  })