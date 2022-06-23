import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CandidateServiceService {
  insertCandidate(form: FormGroup) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
