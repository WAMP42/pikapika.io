import { Injectable, Inject, Optional } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { JSONSearchParams, ErrorHandler, RequestService } from './utils/index'
import { Config } from './config/env.config';;

@Injectable()
export class APIService extends RequestService  {
  constructor(
  @Inject(Http) http: Http,
  @Inject(JSONSearchParams) protected searchParams: JSONSearchParams,
  @Optional() @Inject(ErrorHandler) errorHandler: ErrorHandler
  ) {
    super(http, searchParams, errorHandler);
  }

  public getAllPokemon() {

  let method: string = 'GET';
  let url: string = Config.API + '/pokemon/pokemon_count';

  let urlParams: any = {};
  let params: any = {};

  let result = this.request(method, url, urlParams, params);

  return result;
}
}
