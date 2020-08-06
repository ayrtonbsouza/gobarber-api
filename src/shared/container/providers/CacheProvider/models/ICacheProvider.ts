export default interface ICacheProvider {
  save<Type>(key: string, value: Type): Promise<void>;
  receive<Type>(key: string): Promise<Type | null>;
  invalidate(key: string): Promise<void>;
}
