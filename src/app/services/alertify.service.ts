import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import * as alertyfy from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }


success(message: string) {
  alertyfy.success(Message);
}

warning(message: string) {
  alertyfy.warning(Message);
}

error(message: string) {
  alertyfy.error(Message);
}
}
