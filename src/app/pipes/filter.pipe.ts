import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class Filter implements PipeTransform {
    transform(listData: any[], value: any) {
        console.log('filter');
        console.log(listData);
        console.log(value);
        console.log('end filter');
        return listData.filter(data => data.canFly);
    }
}