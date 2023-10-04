import localforage from "localforage";



class LocalStorage {
  public storage: LocalForage;

  constructor(name: string, description?: string) {
    this.storage = localforage.createInstance({
      driver: localforage.INDEXEDDB,
      name,
      description
    })
  }

  async get(key: string): Promise<any> {
    try {
      const item = await this.storage.getItem(key);
      return item;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }

      throw new Error('Unexpected error!')
    }
  }

  async create(key: string, value: any, callback?: ((err: any, value: any) => void) | undefined): Promise<unknown> {
    try {
      await this.storage.setItem(key, value, callback);
      const response = this.storage.getItem(key);

      return response
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }

      throw new Error('Unexpected error!')
    }
  }
}

export {
  LocalStorage
}