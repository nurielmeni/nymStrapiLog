module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 15432),
        database: env('DATABASE_NAME', 'nymediaLog'),
        username: env('DATABASE_USERNAME', 'nymediauser'),
        password: env('DATABASE_PASSWORD', 'nymlog2021'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
