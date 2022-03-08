export default function() {
  this.namespace = '/api';

  const rentals = [{
    type: 'rentals',
    id: 'grand-old-mansion',
    attributes: {
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      category: 'Estate',
      bedrooms: 15,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests."
    }
  }, {
    type: 'rentals',
    id: 'urban-living',
    attributes: {
      title: 'Urban Living',
      owner: 'Mike Teavee',
      city: 'Seattle',
      category: 'Condo',
      bedrooms: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
      description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro."
    }
  }, {
    type: 'rentals',
    id: 'downtown-charm',
    attributes: {
      title: 'Downtown Charm',
      owner: 'Violet Beauregarde',
      city: 'Portland',
      category: 'Apartment',
      bedrooms: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
      description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
    }
  }]

  const blogs = [{
    type: 'blogs',
    id: 'blog-1',
    attributes: {
      title: 'Selecting tiles for bathroom',
      author: 'Phoebe Simon',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: "There are many options available for tiles today"
    }
  }, {
    type: 'blogs',
    id: 'blog-2',
    attributes: {
      title: 'How to create a focus wall',
      author: 'Rebecca George',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: "First you need to pick a wall directly opposity your entry way"
    }
  }, {
    type: 'blogs',
    id: 'blog-3',
    attributes: {
      title: 'Low light plants',
      author: 'Violet Beauregarde',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
      description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
    }
  }]

  const products = [{
    type: 'products',
    id: 'product-1',
    attributes: {
      title: 'Ficus tree',
      cost: '$15',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Pilea_peperomia_and_pups.jpg/220px-Pilea_peperomia_and_pups.jpg',
    }
  }, {
    type: 'products',
    id: 'product-2',
    attributes: {
      title: 'Azela plant',
      cost: '$5',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Pilea_peperomia_and_pups.jpg/220px-Pilea_peperomia_and_pups.jpg',
    }
  }, {
    type: 'products',
    id: 'product-3',
    attributes: {
      title: 'Snake plant',
      cost: '$2',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Pilea_peperomia_and_pups.jpg/220px-Pilea_peperomia_and_pups.jpg',
    }
  }]
  
  this.get('/rentals', function(db, request) {
      if(request.queryParams.city !== undefined) {
        let filteredRentals = rentals.filter(function(i) {
          return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
        });
        return { data: filteredRentals };
      } else {
        return { data: rentals };
      }
  });

  this.get('/rentals/:id', function (db, request) {
    return { data: blogs.find((rental) => request.params.id === rental.id) };
  });

  this.get('/blogs', function() {
    return { data: blogs };
  });

  this.get('/blogs/:id', function (db, request) {
    return { data: blogs.find((rental) => request.params.id === rental.id) };
  });

  this.get('/products', function() {
    return { data: products };
  });

  this.get('/products/:id', function (db, request) {
    return { data: products.find((rental) => request.params.id === rental.id) };
  });


}



  // These comments are here to help you get started. Feel free to delete them.

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */

