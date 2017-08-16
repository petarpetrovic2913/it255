import {Pipe} from 'angular2/core';
@Pipe({
 brojKreveta: 'SearchPipe',
})
export class SearchPipe {

transform (value, [queryString]) {
 if (value==null) {
 return null;
 }
 console.log('transform');
 return value.filter(item=>item.brojKreveta.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
 }
}