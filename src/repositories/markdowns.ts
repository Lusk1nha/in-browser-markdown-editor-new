import Markdown from "../services/Markdown";
import { LocalStorage } from "./localStorage";

// MarkdownsRepo class for managing CRUD operations on Markdown objects using local storage
class MarkdownsRepo {
  // Instance of LocalStorage for storage operations
  private _storage: LocalStorage;

  // Name of the table in local storage
  private table: string;

  // Constructor to initialize the MarkdownsRepo instance
  constructor() {
    // Create a LocalStorage instance with the specified name
    this._storage = new LocalStorage("markdowns-app");
    // Set the name of the table in local storage
    this.table = "markdowns";
  }

  // Asynchronously retrieve all Markdown objects from local storage
  async getAll() {
    // Get items from local storage associated with the table
    const items = await this._storage.get(this.table);

    // If no items are found, return an empty array
    if (!items) {
      return [];
    }

    // Return the retrieved items
    return items;
  }

  // Asynchronously create a new Markdown object in local storage
  async create(obj: Markdown) {
    // Get existing items from local storage associated with the table
    let items = await this._storage.get(this.table);

    // If no items are found, initialize the items array
    if (!items) {
      items = [];
    }

    // Add the new Markdown object to the items array
    items.push(obj);

    // Save the updated items array in local storage and return the response
    const response = await this._storage.create(this.table, items);

    return response;
  }

  // Asynchronously edit an existing Markdown object in local storage
  async edit(id: string, obj: Markdown) {
    // Get existing items from local storage associated with the table
    let items = (await this._storage.get(this.table)) as Markdown[];

    // If no items are found, initialize the items array
    if (!items) {
      items = [];
    }

    // Filter the items array to find the Markdown object with the specified ID
    const filteredItem = items?.filter((item) => item.id === id);

    // If no matching item is found, throw an error
    if (!filteredItem) {
      throw new Error("Item could not be found");
    }

    // Map the items array to update the target Markdown object
    const mappedItems = items?.map((item) => {
      if (item.id !== id) {
        return item;
      }

      // Merge the properties of the existing object with the new properties
      return {
        ...item,
        ...obj,
      };
    });

    // Save the updated items array in local storage and return the response
    const response = await this._storage.create(this.table, mappedItems);

    return response;
  }

  // Asynchronously delete an existing Markdown object from local storage
  async delete(id: string) {
    // Get existing items from local storage associated with the table
    let items = (await this._storage.get(this.table)) as Markdown[];

    // If no items are found, initialize the items array
    if (!items) {
      items = [];
    }

    // Filter the items array to exclude the Markdown object with the specified ID
    const itemsWithoutId = items?.filter((item) => item.id !== id);

    // If no matching item is found, throw an error
    if (!itemsWithoutId) {
      throw new Error("Item could not be found");
    }

    // Save the updated items array in local storage and return the response
    const response = await this._storage.create(this.table, itemsWithoutId);

    return response;
  }
}

// Export the MarkdownsRepo class for external use
export { MarkdownsRepo };
