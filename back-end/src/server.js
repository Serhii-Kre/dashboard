import express from 'express';
import { routes } from './routes/index.js';
import { routesProtected } from './routesProtected/index.js';

const PORT = process.env.PORT || 8080;

const app = express();

// This allows us to access the body of POST/PUT
// requests in our route handlers (as req.body)
app.use(express.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});
routesProtected.forEach(route => {
    app[route.method](route.path, route.handler);
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
