import { NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CallHandler } from '@nestjs/common';
export declare class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
