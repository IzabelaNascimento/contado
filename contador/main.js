var app = new Vue({
   el: '#app',
   data: {
      numero: 0,
   },
   methods: {
    somar(){
      this.numero++
    },
    diminuir(){
      this.numero--
    },
    resetar(){
      this.numero = 0
    }

   }
})

