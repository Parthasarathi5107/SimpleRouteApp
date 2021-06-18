import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'textpipe'})
export class Mypipe implements PipeTransform{
    transform(value:string)
    {
    
       return value.substring(0,4)+"...";

    }
}
