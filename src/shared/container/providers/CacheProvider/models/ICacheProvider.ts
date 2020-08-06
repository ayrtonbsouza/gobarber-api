export default interface ICacheProvider {
  save(key: string, value: string): Promise<void>;
  receive(key: string): Promise<string | null>;
  invalidate(key: string): Promise<void>;
}
