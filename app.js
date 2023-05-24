//createApp
//destructuring
const {createApp} = Vue;

createApp({
  data() {
    return{
      titulo: "Contador en Vue",
      counter : 0
 
    }  
  },
  created() {
    this.calculoFuncion()
  },
  methods:{
    calculoFuncion() {
      //this.a = 20;
      //this.b = 20;
      
    },
    increment : function(){
      this.counter += 1
      },
      decrement : function(){
          this.counter -= 1
      },
  
   
  },
  computed: {
    sumaComputed() {
      return this.numero + 200
    }
  }
}).mount("#app")