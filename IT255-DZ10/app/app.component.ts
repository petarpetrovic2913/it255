import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { MainPageComponent } from 'app/mainpage/mainpage.component';
import { AboutUsComponent } from 'app/aboutus/aboutus.component';
import {Pipe} from 'angular2/core';
@Component({
 selector: 'moja-aplikacija',
templateUrl: 'app/router.html',
directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
 {path:'/', name: 'MainPage', component: MainPageComponent, useAsDefault: true},
 {path:'/aboutus', name:'AboutUs', component: AboutUsComponent}
])
export class AppComponent {
}