var app = new Vue({
  el: '#app',
  data: {
      bokuapi:"https://myheroacademiaapi.com/api/character/",
      pokes:{},
      ages:[],
      images:[]
  },//fin de data
    methods: {
        buscar: async function(){
         + document.getElementById('inputnombre').value
            console.log(document.getElementById('inputnombre').value)            
            const response = await fetch(this.bokuapi + document.getElementById('inputnombre').value);
            this.pokes= await response.json();
            console.log(this.pokes)
        },
        image: async function(pokes_images){
            console.log(this.pokes.images);
            const response = await fetch(this.pokes.images);
            this.images = await response.json();
            console.log(pokes_images);
        }
    }

})
