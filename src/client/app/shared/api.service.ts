import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Config } from './config/env.config';;

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class APIService {

  /**
   * Creates a new NameListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  public getNumberPokemon(): Observable<string[]> {
    return this.http.get(Config.API + '/pokemons/count')
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  public getNumberTrainer(): Observable<string[]> {
    return this.http.get(Config.API + '/trainers/count')
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  public getNumberSpwan(): Observable<string[]> {
    return this.http.get(Config.API + '/pokemon-spawns/count')
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  public joinTheBta(mail: string): Observable<string[]> {
    let body = JSON.stringify({ email: mail });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(Config.API + '/ios-beta', body, options)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  public getNerbyPokemon() {
    return this.http.get(Config.API + '/pokemons')
                      .map((res: Response) => res.json())
                      .catch(this.handleError);
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
