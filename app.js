const app = require('./config/server.js');

const homeRoute = require('./app/routes/home.js');
homeRoute(app);

const listRoute = require('./app/routes/list.js');
listRoute(app);

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port 3000');
});
