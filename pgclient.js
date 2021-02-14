const { Pool } = require("pg");

async function pgClient() {
  const pool = new Pool({
    user: "docker",
    host: "localhost",
    database: "postgres",
    password: "docker",
    port: 5432,
  });

  // Test the connection
  const tableCountResp = await pool.query(
    "select count(*) from information_schema.tables where table_schema = $1;",
    ["docker"]
  );
  await pool.end();

  console.log(
    "Connected to PostgreSQL | Tables count:",
    tableCountResp.rows[0].count
  );
}

module.exports = pgClient;
