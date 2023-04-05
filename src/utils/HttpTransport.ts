import { BASE_URL } from "../helpers/const";

type HTTPMethod<Response = void> = (url: string, options?: Options) => Promise<Response>

enum Methods {
  Get = "Get",
  Post = "Post",
  Put = "Put",
  Patch = "Patch",
  Delete = "Delete",
}

interface Options {
  method: Methods;
  timeout?: number;
  data?: unknown;
  headers?: Record<string, string>;
}

export class HTTPTransport {
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${BASE_URL}${endpoint}`;
  }

  public get: HTTPMethod = (path = "/") => {
    return this.request(this.endpoint + path);
  };

  public post: HTTPMethod = (path, data?) => {
    return this.request(this.endpoint + path, {
      method: Methods.Post,
      data,
    });
  };

  public put: HTTPMethod = (path, data?) => {
    return this.request(this.endpoint + path, {
      method: Methods.Put,
      data,
    });
  };

  public patch: HTTPMethod = (path, data?) => {
    return this.request(this.endpoint + path, {
      method: Methods.Patch,
      data,
    });
  };

  public delete: HTTPMethod = (path, data?) => {
    return this.request(this.endpoint + path, {
      method: Methods.Delete,
      data,
    });
  };

  private request: HTTPMethod = (url, options = { method: Methods.Get }) => {
    const {
      method,
      data,
    } = options;
    const isFormData = data instanceof FormData;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.onabort = () => reject({ reason: "abort" });
      xhr.onerror = () => reject({ reason: "network error" });
      xhr.ontimeout = () => reject({ reason: "timeout" });

      if (!isFormData) xhr.setRequestHeader("Content-Type", "application/json");

      xhr.withCredentials = true;
      xhr.responseType = "json";

      if (method === Methods.Get || !data) {
        xhr.send();
      } else {
        xhr.send(isFormData ? data : JSON.stringify(data));
      }
    });
  };
}
