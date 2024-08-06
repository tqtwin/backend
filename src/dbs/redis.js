const redis = require('redis');

const CONNECTION_STRING = process.env.REDIS_URL || 'redis://default:MBM1858oMzX9rI8fwnCbtUk4ccc8JSfj@redis-11994.c1.asia-northeast1-1.gce.redns.redis-cloud.com:11994';

const connectRedis = () => {
    const client = redis.createClient({
        url: CONNECTION_STRING
    });

    client.connect().then(() => {
        console.log('Connected to Redis');
    }).catch((error) => {
        console.log(error);
    });

    return client;
}

module.exports = connectRedis();
