import { Injectable, Inject, Optional } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { JSONSearchParams, ErrorHandler, RequestService } from './utils/index';

@Injectable()
export class IosBetaService extends RequestService  {
  constructor(
  @Inject(Http) http: Http,
  @Inject(JSONSearchParams) protected searchParams: JSONSearchParams,
  @Optional() @Inject(ErrorHandler) errorHandler: ErrorHandler
  ) {
    super(http, searchParams, errorHandler);
  }
}
