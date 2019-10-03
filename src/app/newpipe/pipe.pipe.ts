import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "customFilter"
})
export class PIPEPipe implements PipeTransform {
  /* transform(value: any, ...args: any[]):any {
    console.log(value);
    console.log(args);
    const result =
      value.length > args[0] ? value.substring(0, args[0]) + "..." : value;
    return result;*/

  /* transform(value: any, args?: any) {
    return args === undefined ? value : value.filter(el => el.price === args);
  }*/

  transform(value: any, arg?: any): any {
    return arg === undefined
      ? value
      : value.filter(
          el => el.heading.toLowerCase().indexOf(arg.toLowerCase()) !== -1
        );
  }
}
