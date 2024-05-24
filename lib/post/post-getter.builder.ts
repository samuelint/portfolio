import { Post, PostGetter } from "./post.type";

export class PostGetterBuilder implements PostGetter {

  public constructor(private getters: PostGetter[] = []) { }

  public add(getter: PostGetter): this { 
    this.getters.push(getter);
    return this;
  }

  public async get(): Promise<Post[]> {
    return (await Promise.all(this.getters.map(getter => getter.get()))).flat();
  }
}