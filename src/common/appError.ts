import {ErrorHandler} from '@angular/core';

export class AppError implements ErrorHandler{
    handleError(err){
        console.log(err);
    }
}