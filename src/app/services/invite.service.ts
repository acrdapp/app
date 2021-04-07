import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Lean } from '../types/entity-types';

@Injectable({
  providedIn: 'root'
})
export class InviteService {
  private endpoint = `${environment.rootEndpoint}/invites`;

  constructor(
    private http: HttpClient,
  ) {}

  public fetch(id: string): Promise<Lean.Invite> {
    return this.http.get(`${this.endpoint}/${id}`).toPromise() as any;
  }
}
