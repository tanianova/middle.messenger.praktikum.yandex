import { HTTPTransport } from "../utils/HttpTransport";

export abstract class BaseAPI {
  protected http: HTTPTransport;

  protected constructor(endpoint: string) {
    this.http = new HTTPTransport(endpoint);
  }

  public abstract create?(data: unknown): Promise<unknown>;

  public abstract read?(identifier?: string): Promise<unknown>;

  public abstract update?(data: unknown, identifier: string): Promise<unknown>;

  public abstract delete?(identifier: string | number): Promise<unknown>;
}

