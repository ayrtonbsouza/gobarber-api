import Redis, { Redis as RedisClient } from 'ioredis';
import cacheConfig from '@config/cache.config';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

export default class RedisCacheProvider implements ICacheProvider {
  private client: RedisClient;

  constructor() {
    this.client = new Redis(cacheConfig.config.redis);
  }

  public async save(key: string, value: string): Promise<void> {
    await this.client.set(key, value);
  }

  public async receive(key: string): Promise<string | null> {
    const data = await this.client.get(key);
    return data;
  }

  public async invalidate(key: string): Promise<void> {}
}
