import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

interface ICacheData {
  [key: string]: string;
}

export default class FakeCacheProvider implements ICacheProvider {
  private cache: ICacheData = {};

  public async save<Type>(key: string, value: Type): Promise<void> {
    this.cache[key] = JSON.stringify(value);
  }

  public async receive<Type>(key: string): Promise<Type | null> {
    const data = await this.cache[key];
    if (!data) {
      return null;
    }
    const parsedData = JSON.parse(data);
    return parsedData as Type;
  }

  public async invalidate(key: string): Promise<void> {
    delete this.cache[key];
  }

  public async invalidatePrefix(prefix: string): Promise<void> {
    const keys = Object.keys(this.cache).filter(key =>
      key.startsWith(`${prefix}:`),
    );
    keys.forEach(key => {
      delete this.cache[key];
    });
  }
}
