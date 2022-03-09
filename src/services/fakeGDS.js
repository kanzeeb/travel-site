const globalizadores= [
    {
      imageURL: 'https://i.postimg.cc/XvzbQrXs/amadeus.jpg',
      _id: "5b21ca3eeb7f6fbcds471801",
      altID: 'Amadeus',
      siteURL: 'https://amadeus.com/es'
    },    
    {
      imageURL: 'https://i.postimg.cc/0ySD8S1w/sabre.jpg',
      _id: "5b21ca3eeb7f6fbcab472902",
      altID: 'Sabre',
      siteURL: 'https://www.sabre.com/page/sabrered360/en/'
    },    
    {
      imageURL: 'https://i.postimg.cc/q7dng7pZ/travelport.jpg',
      _id: "5b21ca3eeb7f6fbcba473003",
      altID: 'travelport',
      siteURL: 'https://marketing.cloud.travelport.com/es-la-platform'
    },    
    {
      imageURL: 'https://i.postimg.cc/x8Q0WQZ7/travelsky.png',
      _id: "5b21ca3eeb7f6fbcde473104",
      altID: 'travelsky',
      siteURL: 'https://travelskyir.com/html/about_profile.php'
    },    
    {
      imageURL: 'https://i.postimg.cc/T3N3hZyL/kiu-logo.png',
      _id: "5b21ca3eeb7f6fbced473205",
      altID: 'KIU',
      siteURL: 'https://www.kiusys.com/solutions/gds'
    },    
   
  ];
    
  
  export function getGlobalizador() {
    return globalizadores;
  }
  
  export function getGlobalizadores(id) {
    return globalizadores.find(m => m._id === id);
  }
  