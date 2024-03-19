import mysql from 'mysql2/promise';



const pool = mysql.createPool({
	host: process.env.DB_HOSTNAME,
	user: process.env.USER_NAME,
	password: process.env.USER_PASSWORD,
	database: process.env.DATABASE_NAME,
	waitForConnections: true,
	connectionLimit: 10,
	maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
	idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
	queueLimit: 0,
	enableKeepAlive: true,
	keepAliveInitialDelay: 0,
  });


export const query = async (sql: string, values: any[] = []) => {
	const connection = await pool.getConnection();
	try {
		const [rows] = await connection.query(sql, values);
		return rows;
	} catch (error) {
		throw error;
	} finally {
		connection.release();
	}
}






