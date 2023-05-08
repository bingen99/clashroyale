import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // agrega el token JWT al encabezado de autorización de la solicitud
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjY0YzYwYzU2LTAyMjgtNGUyZS1hYTMwLTI2ZWZhNDdlMGY5OCIsImlhdCI6MTY4MjAwMTAxNiwic3ViIjoiZGV2ZWxvcGVyL2YzYzBhMmE1LTE5OTUtMGY5Ni0zYmYzLWY2NDM0NTEwMjgzNyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI4MS4yMi4yMzMuNSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.JWqZOi2d9P4XrZu6wnZQLcet9SLUVhF7OM6bjNliCY6dWtz13Qf0V8LAzK7D4iKqrQwLxlOVW8FD_WkNeUsicA';
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(request);
    }
}
