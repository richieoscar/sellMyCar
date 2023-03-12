import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from "@nestjs/common";
import { plainToClass, plainToInstance } from "class-transformer";
import { map, Observable } from "rxjs";
import { UserResponse } from "src/user/dto/user-response";
import { User } from "src/user/user-entity";


interface ClassConstructor{
    //This is any interface that enforces a CLass Type
    new (...args:any[]):{}
}

export function Serialize(dto:ClassConstructor){
    return UseInterceptors(new SerializerInterceptor(dto))
}

export class SerializerInterceptor implements NestInterceptor {
    constructor(private dto:any){}
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(
            map((data: any) => {
             return  plainToInstance(this.dto,data,{excludeExtraneousValues:true})
            })
        );

    }

}