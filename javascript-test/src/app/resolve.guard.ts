import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TestApiService } from './test-api.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {
  constructor(private testService: TestApiService){}  
  
  resolve(route: ActivatedRouteSnapshot) {
    let testId = route.params['id'];  
    return this.testService.getTest(testId);
    }
}
