import localforage from "localforage";

// LocalStorage class for handling interactions with local storage using localforage
class LocalStorage {
  // Instance of localforage for storage operations
  public storage: LocalForage;

  // Constructor to initialize the LocalStorage instance
  constructor(name: string, description?: string) {
    // Create a localforage instance with INDEXEDDB as the storage driver
    this.storage = localforage.createInstance({
      driver: localforage.INDEXEDDB,
      name,
      description,
    });
  }

  // Asynchronously get the value associated with a key from local storage
  async get(key: string): Promise<unknown[]> {
    try {
      // Retrieve the item from local storage
      const item = await this.storage.getItem(key);
      // Return the item as an array of unknown type
      return item as unknown[];
    } catch (error) {
      // Handle potential errors
      if (error instanceof Error) {
        // If it's a standard Error, rethrow it with a specific error message
        throw new Error(error.message);
      }

      // If it's an unexpected error, throw a generic error message
      throw new Error("Unexpected error!");
    }
  }

  // Asynchronously create or update a key-value pair in local storage
  async create(
    key: string,
    value: unknown,
    callback?: ((err: string, value: unknown) => void) | undefined
  ): Promise<unknown> {
    try {
      // Set the item in local storage
      await this.storage.setItem(key, value, callback);
      // Retrieve and return the stored item for confirmation
      const response = this.storage.getItem(key);

      return response;
    } catch (error) {
      // Handle potential errors
      if (error instanceof Error) {
        // If it's a standard Error, rethrow it with a specific error message
        throw new Error(error.message);
      }

      // If it's an unexpected error, throw a generic error message
      throw new Error("Unexpected error!");
    }
  }
}

// Export the LocalStorage class for external use
export { LocalStorage };
