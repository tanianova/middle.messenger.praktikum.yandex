enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

interface Options {
  method: METHODS;
  timeout?: number;
  data?: Record<string, string>;
  headers?: Record<string, string>;
}

export default class HTTPTransport {
  static API_URL = "https://ya-praktikum.tech/api/v2";
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  public get(path = "/") {
    return this.request<Response>(this.endpoint + path);
  }

  public post<Response = void>(path: string, data?: Record<string, string>): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: METHODS.POST,
      data,
    });
  }

  public put<Response = void>(path: string, data: Record<string, string>): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: METHODS.PUT,
      data,
    });
  }

  public patch<Response = void>(path: string, data: Record<string, string>): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: METHODS.PATCH,
      data,
    });
  }

  public delete<Response>(path: string, data?: Record<string, string>): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: METHODS.DELETE,
      data,
    });
  }

  private request<Response>(url: string, options: Options = { method: METHODS.GET }): Promise<Response> {
    const {
      method,
      data,
    } = options;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method as METHODS, url);

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

      xhr.withCredentials = true;
      xhr.responseType = "json";

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        xhr.send(data);
      } else {
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
