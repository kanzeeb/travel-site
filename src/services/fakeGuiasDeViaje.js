const guiasDeViaje = [
    {
      imageURL: 'https://i.postimg.cc/g0bT2mr3/anaya.jpg',
      _id: "5b21ca3eeb7f6fbccd471815",
      altID: 'Anaya Touring',
      siteURL: 'https://www.guiasdeviajeanaya.es/'
    },    
    {
      imageURL: 'https://i.postimg.cc/639bCcr3/guia-Viajero.jpg',
      _id: "5b21ca3eeb7f6fbccd472916",
      altID: 'Guias del viajero SRE',
      siteURL: 'https://www.gob.mx/sre/acciones-y-programas/guia-del-viajero-26153'
    },    
    {
      imageURL: 'https://i.postimg.cc/G2q7KDKj/guia-Viajes.jpg',
      _id: "5b21ca3eeb7f6fbccd473017",
      altID: 'myguiadeviajes',
      siteURL: 'http://www.myguiadeviajes.com/'
    },    
    {
      imageURL: 'https://i.postimg.cc/Y2DDm1hr/tripadvisor.jpg',
      _id: "5b21ca3eeb7f6fbccd473118",
      altID: 'Guia Mundial de Viajes ',
      siteURL: 'https://www.guiamundialdeviajes.com/'
    },    
    {
      imageURL: 'https://i.postimg.cc/fyPHnh6t/mundial-Viajes.jpg',
      _id: "5b21ca3eeb7f6fbccd473219",
      altID: 'Trip Advisor',
      siteURL: 'https://www.tripadvisor.com.mx/'
    },    
   
  ];
    
  
  export function getGuiasDeViajes() {
    return guiasDeViaje;
  }
  
  export function getGuiasDeViaje(id) {
    return guiasDeViaje.find(m => m._id === id);
  }
  