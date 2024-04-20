import { createClient } from 'redis';

const redis = createClient({
	socket: {
		host: process.env.REDIS_HOST,
		port: Number(process.env.REDIS_PORT)
	}
});

if (!redis.isOpen) {
	redis.connect();
}

export default redis;
