var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
    {
      path: '/entourage-bills/',
      url: 'entourage-bills.html',
    },
     {
      path: '/entourage-roses/',
      url: 'entourage-roses.html',
    },
     {
      path: '/entourage-candles/',
      url: 'entourage-candles.html',
    },
     {
      path: '/entourage-treasures/',
      url: 'entourage-treasures.html',
    },
    {
      path: '/meals-appetizer/',
      url: 'meals-appetizer.html',
    },
     {
      path: '/meals-mc/',
      url: 'meals-mc.html',
    },
     {
      path: '/meals-dessert/',
      url: 'meals-dessert.html',
    },
    {
      path: '/clothes/',
      url: 'clothes.html',
    },
    {
      path: '/clothes-men/',
      url: 'clothes-men.html',
    },
    {
      path: '/clothes-theme/',
      url: 'clothes-theme.html',
    },
    {
      path: '/location/',
      url: 'location.html',
    },
    {
      path: '/timeline/',
      url: 'timeline.html',
    },
    {
      path: '/developer/',
      url: 'developer.html',
    },
    {
      path: '/developer1/',
      url: 'developer1.html',
    },
    {
      path: '/developer2/',
      url: 'developer2.html',
    },
    
  ],
  // ... other parameters
  theme: "auto"
});

var mainView = app.views.create('.view-main');



