import { Pipe, Injectable, PipeTransform } from "@angular/core";

@Pipe({
    name: 'genderFilter'
})

@Injectable()
export class genderFilter implements PipeTransform {
    transform(val: number): string {
        if(val == 1) return 'wife';
        if(val == 0) return 'husband';
    }
}
