import { Injectable, Inject, Optional } from '@angular/core';
import { Http, Headers, Request } from '@angular/http';

import { JSONSearchParams } from './search-params.service';
import { ErrorHandler } from './error-handler.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export abstract class RequestService {

  constructor(
    @Inject(Http) protected http: Http,
    @Inject(JSONSearchParams) protected searchParams: JSONSearchParams,
    @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler
  ) {
    if (!errorHandler) {
      this.errorHandler = new ErrorHandler();
    }
  }

  /**
   * Process request
   * @param string  method    Request method (GET, POST, PUT)
   * @param string  url       Request url (my-host/my-url/:id)
   * @param any     urlParams Values of url parameters
   * @param any     params    Parameters for building url (filter and other)
   * @param any     data      Request body
   * @param boolean isio      Request socket connection
   */

  public request(method: string, url: string, urlParams: any = {},params: any = {}, data: any = null) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let requestUrl = url;
    let key: string;

    for (key in urlParams) {
      requestUrl = requestUrl.replace(new RegExp(':' + key + '(\/|$)', 'g'), urlParams[key] + '$1');
    }

    this.searchParams.setJSON(params);
    let request = new Request({
      headers: headers,
      method: method,
      url: requestUrl,
      search: this.searchParams.getURLSearchParams(),
      body: data ? JSON.stringify(data) : undefined,
      withCredentials: true
    });

    return this.http.request(request).map(res => res.json())
      .catch(this.errorHandler.handleError);
  }
}
