
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  private translations: any = {};
  
  http = inject(HttpClient);

  constructor() { }
  

  
}
