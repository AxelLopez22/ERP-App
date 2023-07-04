import { Injectable } from '@angular/core';
import { Breadcrumb } from '../models/models';
import { BehaviorSubject, filter } from 'rxjs';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumService {
  private readonly _breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);

  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

  constructor(private router: Router){
    // this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((event) => {

    //     //Obtener url
    //     const root = this.router.routerState.snapshot.root;

    //     const breadcrumbs: Breadcrumb[] = [];

    //     this.addBreadcrumb(root.firstChild!, [], breadcrumbs);

    //     this._breadcrumbs$.next(breadcrumbs);
    //   });
  }

  // private addBreadcrumb(
  //   route: ActivatedRouteSnapshot,
  //   parentUrl: string[],
  //   breadcrumbs: Breadcrumb[]
  // ) {
  //   if (route) {
  //     // Get the route url
  //     const routeUrl = parentUrl.concat(route.url.map((url) => url.path));

  //     let constituentFolders: string[] = new Array();
  //     constituentFolders = routeUrl.toString().split(',');

  //     // I need to add 'home' route at the start to match with the empty '' url.
  //     //constituentFolders.splice(0, 0, 'home');

  //     for (let i = 0; i < constituentFolders.length; i++) {
  //       // Add a breadcrumb link
  //       const breadcrumb = {
  //         label: this.getLabel(constituentFolders[i]),
  //         url: this.buildDepth(i, constituentFolders),
  //       };
  //       breadcrumbs.push(breadcrumb);

  //       this.addBreadcrumb(route.firstChild!, routeUrl, breadcrumbs);
  //     }
  //   }
  // }

  // getLabel(input: string) {
  //   return input.replace(/-/g, ' ');
  // }

  // buildDepth(iterations: number, constituentFolders: string[]) {

  //   var depthStr = '';

  //   for (let i = 1; i <= iterations; i++) {
  //     // Add each of the folders to the string
  //     depthStr = depthStr + '/' + constituentFolders[i];
  //   }

  //   return depthStr;
  // }
}
