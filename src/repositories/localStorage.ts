import localforage from "localforage";

class LocalStorage {
  public storage: LocalForage;

  constructor(name: string, description?: string) {
    this.storage = localforage.createInstance({
      driver: localforage.INDEXEDDB,
      name,
      description,
    });
  }

  async get(key: string): Promise<unknown[]> {
    try {
      const item = await this.storage.getItem(key);
      return item as unknown[];
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error("Unexpected error!");
    }
  }

  async create(
    key: string,
    value: unknown,
    callback?: ((err: string, value: unknown) => void) | undefined,
  ): Promise<unknown> {
    try {
      await this.storage.setItem(key, value, callback);
      const response = this.storage.getItem(key);

      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error("Unexpected error!");
    }
  }
}

export { LocalStorage };
