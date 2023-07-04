import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { Subscription} from 'rxjs';
import { filter, last, map, mergeMap, share, tap } from 'rxjs/operators';
import { Breadcrumb } from '../../models/models';


@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styleUrls: ['./breadcrums.component.scss']
})
export class BreadcrumsComponent implements OnInit {

  currentRoute!: string;
  public titulo?: string;
  public tituloSubs$: Subscription;
  public breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    // this.router.events
    //   .pipe(filter(event => event instanceof NavigationEnd))
    //   .subscribe(() => {
    //     this.breadcrumbs = this.generateBreadcrumbs(this.route.root);
    //     console.log(this.breadcrumbs);
        
    //   });

    this.tituloSubs$ = this.getArgumentos().subscribe((breadcrumbs: any) => {
      // this.breadcrumbs = breadcrumbs;
      // console.log(breadcrumbs);
      //this.titulo = breadcrumbs[breadcrumbs.length - 1].;
      // breadcrumbs.forEach((element:any) => {
      //   this.titulo = element
      //   this.breadcrumbs.push(element)
      // });
    });
  }

  ngOnInit(): void {
    
  }
  
  // ngOnDestroy(): void {
  //   this.tituloSubs$.unsubscribe();
  // }

  // generateBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
  //   const routeConfig = route.routeConfig;
    
  //   if (routeConfig && routeConfig.data && routeConfig.data?.['breadcrumb']) {
  //     const breadcrumbLabel = routeConfig.data?.['breadcrumb'].titulo;
  //     if (breadcrumbLabel) {
  //       breadcrumbs.push({ titulo: breadcrumbLabel, url: url });
  //     }
  //   }
  
  //   const children: ActivatedRoute[] = route.children;
  //   if (children.length === 0) {
  //     return breadcrumbs;
  //   }
  
  //   for (const child of children) {
  //     const routeUrl: string = child.snapshot.url.map(segment => segment.path).join('/');
  //     if (routeUrl !== '') {
  //       url += `/${routeUrl}`;
  //     }
  //     return this.generateBreadcrumbs(child, url, breadcrumbs);
  //   }
  
  //   return breadcrumbs;
  // }
  

  getArgumentos() {
    return this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      map((event: ActivationEnd) => {
        const breadcrumbs: Breadcrumb[] = [];
        let route: any = event.snapshot;
        let ruta = event.snapshot.url.map(segment => segment.path).join('/');
  
        let routeBreadcrumbs = route.data?.['breadcrumb'];
        if (routeBreadcrumbs) {
          const existingIndex = this.breadcrumbs.findIndex(breadcrumb => breadcrumb.titulo === routeBreadcrumbs.titulo);
          if (existingIndex !== -1) {
            this.breadcrumbs = this.breadcrumbs.slice(0, existingIndex + 1);
          } else {
            this.breadcrumbs.push(routeBreadcrumbs);
          }
        }
        //console.log(event.snapshot);
        
        route = route.parent;
        return breadcrumbs;
      }),
      filter(breadcrumbs => breadcrumbs !== null)
    );
  }
}

