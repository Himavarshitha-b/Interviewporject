import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  insertAdmin(form: FormGroup) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
