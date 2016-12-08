/**
 * Routers paths configuration
 * Created by ccn1069 on 2015/6/26.
 */

routers = [
    {path: "/", routerPath: "./routes/index"},
    {path: "/users", routerPath: "./routes/users"},
    {path: "/hello", routerPath: "./routes/sayHello"},
    {path: "/data", routerPath: "./routes/data"}
];

module.exports = routers;