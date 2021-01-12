const { DataSource } = require("apollo-datasource");
const { InMemoryLRUCache } = require("apollo-server-caching");
const postgres = require('postgres');

class PostgresDataSource extends DataSource {
    constructor(postgresUrl = null, postgresConfig = null) {
        super();

        this.context;
        this.cache;

        if (typeof postgresConfig === "function") {
            this.db = postgresConfig;
        }
        else {
            this.db = postgres(postgresUrl, postgresConfig);
        }

        this.postgres = this.db;
    }
    initialize(config) {
        this.context = config.context;
        this.cache = new InMemoryLRUCache();
    }
}

module.exports = { PostgresDataSource };