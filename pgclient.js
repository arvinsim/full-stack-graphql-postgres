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
  const scoresResp = await pool.query(
    "select scores.id as score_id, score, name, player_id, date_created from scores join players p on scores.player_id = p.id",
  );
  await pool.end();

  console.log(scoresResp)
}

module.exports = pgClient;
