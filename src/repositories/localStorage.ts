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

      throw new Error('Unknown error')
    }
  }

  async set(key: string, value: any, callback?: ((err: any, value: any) => void) | undefined): Promise<void> {
    try {
      await this.storage.setItem(key, value, callback);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }

      throw new Error('Unknown error')
    }
  }
}

export {
  LocalStorage
}