import Redis, { Redis as RedisClient } from 'ioredis';
import cacheConfig from '@config/cache.config';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

export default class RedisCacheProvider implements ICacheProvider {
  private client: RedisClient;

  constructor() {
    this.client = new Redis(cacheConfig.config.redis);
  }

  public async save<Type>(key: string, value: Type): Promise<void> {
    await this.client.set(key, JSON.stringify(value));
  }

  public async receive<Type>(key: string): Promise<Type | null> {
    const data = await this.client.get(key);
    if (!data) {
      return null;
    }
    const parsedData = JSON.parse(data) as Type;
    return parsedData;
  }

  public async invalidate(key: string): Promise<void> {}
}
