const ota = [
    {
      imageURL: 'https://i.postimg.cc/4yDQn0Y0/wotif.jpg',
      _id: "lb21ca3eeb7f6fbccd471815",
      altID: 'Wotif',
      siteURL: 'https://www.wotif.com/'
    },    
    {
      imageURL: 'https://i.postimg.cc/L4JdYZqk/cheap.jpg',
      _id: "kb21ca3eeb7f6fbccd472916",
      altID: 'Cheap Flights',
      siteURL: 'https://www.cheapflights.com/'
    },    
    {
      imageURL: 'https://i.postimg.cc/zBqMGVsh/cheapAir.jpg',
      _id: "jb21ca3eeb7f6fbccd472917",
      altID: 'Cheap O air',
      siteURL: 'https://www.cheapoair.com/'
    },    
    {
      imageURL: 'https://i.postimg.cc/tTDcZ9bM/cheap-Tickets.jpg',
      _id: "hb21ca3eeb7f6fbccd472918",
      altID: 'Cheap tickets',
      siteURL: 'https://www.cheaptickets.com/'
    },    
    {
      imageURL: 'https://i.postimg.cc/PJxR10rr/dohop.jpg',
      _id: "ab21ca3eeb7f6fbccd472919",
      altID: 'DoHop',
      siteURL: 'https://www.dohop.com/'
    },    
    {
      imageURL: 'https://i.postimg.cc/sxN0mKvP/ebookers.jpg',
      _id: "bb21ca3eeb7f6fbccd472920",
      altID: 'eBookers',
      siteURL: 'https://www.ebookers.com/'
    },    
    {
      imageURL: 'https://i.postimg.cc/kM1Z7MfV/edreams.jpg',
      _id: "cb21ca3eeb7f6fbccd472921",
      altID: 'eDreams',
      siteURL: 'https://www.edreams.com/'
    },    
    {
      imageURL: 'https://i.postimg.cc/zGWPwC5W/expedia.jpg',
      _id: "db21ca3eeb7f6fbccd472922",
      altID: 'Expedia',
      siteURL: 'https://www.expedia.com/Flights'
    },    
    {
      imageURL: 'https://i.postimg.cc/X7tzyHM4/hoteles.jpg',
      _id: "eb21ca3eeb7f6fbccd472923",
      altID: 'Hoteles.com',
      siteURL: 'https://www.hoteles.com/'
    },    
    {
      imageURL: 'https://i.postimg.cc/jdD12VFM/hotwire.jpg',
      _id: "fb21ca3eeb7f6fbccd472924",
      altID: 'hotwire',
      siteURL: 'https://www.hotwire.com/'
    },    
    {
      imageURL: 'https://i.postimg.cc/xCjxSBmy/ixigo.jpg',
      _id: "gb21ca3eeb7f6fbccd472925",
      altID: 'ixigo',
      siteURL: 'https://www.ixigo.com/'
    },    
    {
      imageURL: 'https://i.postimg.cc/NF5dKTpK/kayak.jpg',
      _id: "0b21ca3eeb7f6fbccd472926",
      altID: 'Kayak',
      siteURL: 'https://www.kayak.com.mx/'
    },    
    {
      imageURL: 'https://i.postimg.cc/pr4qzT6q/mobissimo.jpg',
      _id: "1b21ca3eeb7f6fbccd472927",
      altID: 'mobissimo',
      siteURL: 'http://www.mobissimo.com/company/about-es.html'
    },    
    {
      imageURL: 'https://i.postimg.cc/4NH8Z6YM/momondo.jpg',
      _id: "2b21ca3eeb7f6fbccd472928",
      altID: 'momondo',
      siteURL: 'https://www.momondo.mx/?ispredir=true'
    },    
    {
      imageURL: 'https://i.postimg.cc/XNz2THYd/opodo.jpg',
      _id: "3b21ca3eeb7f6fbccd472929",
      altID: 'opodo',
      siteURL: 'http://www.opodo.com.mx/'
    },    
    {
      imageURL: 'https://i.postimg.cc/RZrg0Wf0/orbitz.jpg',
      _id: "4b21ca3eeb7f6fbccd472930",
      altID: 'orbitz',
      siteURL: 'https://www.orbitz.com/'
    },    
    {
      imageURL: 'https://i.postimg.cc/d0wn8g5P/priceline.jpg',
      _id: "5b21ca3eeb7f6fbccd472931",
      altID: 'price line',
      siteURL: 'https://www.priceline.com/'
    },    
    {
      imageURL: 'https://i.postimg.cc/bwQ3SqH9/skyscanner.jpg',
      _id: "6b21ca3eeb7f6fbccd472932",
      altID: 'sky scanner',
      siteURL: 'https://www.skyscanner.com.mx/'
    },    
    {
      imageURL: 'https://i.postimg.cc/vHyXwhBG/travelocity.jpg',
      _id: "7b21ca3eeb7f6fbccd472933",
      altID: 'travelocity',
      siteURL: 'https://www.travelocity.com/'
    },    
    {
      imageURL: 'https://i.postimg.cc/02CnkSMD/webjet.jpg',
      _id: "8b21ca3eeb7f6fbccd472934",
      altID: 'webjet',
      siteURL: 'https://www.webjet.com.au/'
    },    
    {
      imageURL: 'https://i.postimg.cc/wjTV7BLP/wego.jpg',
      _id: "9b21ca3eeb7f6fbccd472935",
      altID: 'wego',
      siteURL: 'https://www.wego.mx/'
    },    
    
   
  ];
    
  
  export function getOTAs() {
    return ota;
  }
  
  export function getOTA(id) {
    return ota.find(m => m._id === id);
  }
  