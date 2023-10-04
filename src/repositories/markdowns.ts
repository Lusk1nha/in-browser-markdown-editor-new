import { LocalStorage } from "./localStorage";



class MarkdownsRepo {
  private _storage: LocalStorage;
  private table: string;

  constructor() {
    this._storage = new LocalStorage('markdowns-app')
    this.table = 'markdowns'
  }

  async getAll() {
    const items = await this._storage.get(this.table);

    if (!items?.length) {
      return []
    }

    return items
  }

  async create(obj: unknown) {
    let items: any[] = await this._storage.get(this.table);

    if(!items?.length) {
      items = []
    }

    items.push(obj)

    const response = await this._storage.create(this.table, items);

    return response
  }
}

export { MarkdownsRepo }