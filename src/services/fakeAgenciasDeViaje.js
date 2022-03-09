const agenciasDeViaje = [
    {
      imageURL: 'https://i.postimg.cc/SNb0tRvH/viajes-Turquesa.jpg',
      _id: "5b21ca3eea7f6fbccd471815",
      altID: 'Viajes turquesa',
      siteURL: 'http://www.viajesturquesa.com.mx/'
    },    
    {
      imageURL: 'https://i.postimg.cc/sXBFbhyC/mega-Travel.jpg',
      _id: "5b21ca3eeb7f6fbccd472916",
      altID: 'Mega travel',
      siteURL: 'https://www.megatravel.com.mx/'
    },    
    {
      imageURL: 'https://i.postimg.cc/Ls8FBWbX/bojorque-Viajes.jpg',
      _id: "5b21ca3eeb7f6fbccd473017",
      altID: 'Viajes bojorquez',
      siteURL: 'https://viajesbojorquez.com/'
    },    
    {
      imageURL: 'https://i.postimg.cc/ZYdtcpVr/viajes-Fama.jpg',
      _id: "5b21ca3eec7f6fbccd473118",
      altID: 'Viajes fama',
      siteURL: 'https://www.viajesfama.com/'
    },    
    {
      imageURL: 'https://i.postimg.cc/ZqstfLGL/ibero-Mexico.jpg',
      _id: "5b21ca3eed7f6fbccd473219",
      altID: 'iberoamericana',
      siteURL: 'http://iberoamerica.com.mx/'
    },       
  ]; 
  
  export function getAgenciasDeViajes() {
    return agenciasDeViaje;
  }
  
  export function getAgenciaDeViaje(id) {
    return agenciasDeViaje.find(m => m._id === id);
  }
  