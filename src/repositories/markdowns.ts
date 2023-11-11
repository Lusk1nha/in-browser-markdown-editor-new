import Markdown from "../services/Markdown";
import { LocalStorage } from "./localStorage";

class MarkdownsRepo {
  private _storage: LocalStorage;
  private table: string;

  constructor() {
    this._storage = new LocalStorage("markdowns-app");
    this.table = "markdowns";
  }

  async getAll() {
    const items = await this._storage.get(this.table);

    if (!items) {
      return [];
    }

    return items;
  }

  async create(obj: Markdown) {
    let items = await this._storage.get(this.table);

    if (!items) {
      items = [];
    }

    items.push(obj);

    const response = await this._storage.create(this.table, items);

    return response;
  }

  async edit(id: string, obj: Markdown) {
    let items = (await this._storage.get(this.table)) as Markdown[];

    if (!items) {
      items = [];
    }

    const filteredItem = items?.filter((item) => item.id === id);

    if (!filteredItem) {
      throw new Error("Item could not be found");
    }

    const mappedItems = items?.map((item) => {
      if (item.id !== id) {
        return item;
      }

      return {
        ...item,
        ...obj,
      };
    });

    const response = await this._storage.create(this.table, mappedItems);

    return response;
  }

  async delete(id: string) {
    let items = (await this._storage.get(this.table)) as Markdown[];

    if (!items) {
      items = [];
    }

    const itemsWithoutId = items?.filter((item) => item.id !== id);

    if (!itemsWithoutId) {
      throw new Error("Item could not be found");
    }

    const response = await this._storage.create(this.table, itemsWithoutId);

    return response;
  }
}

export { MarkdownsRepo };
