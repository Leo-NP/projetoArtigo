const { db } = require('./.env')

module.exports = {
	client: 'postgresql',
	connection: {
        database: 'artigo',
        user: 'postgres',
        password: '123456' // sua senha 
    },
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
