const config = {
    development: { port: process.env.port || 8080 },
    production: {},
    DB_CONNECTION: 'mongodb://localhost:27017/carlitodb',
    saltRounds: 11,
    secret: "Qq6feotXsomp&zPa222",
    cookie: "x_auth_token"
}

module.exports = config