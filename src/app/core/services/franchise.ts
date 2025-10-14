import { inject, Injectable, signal } from '@angular/core';
import { Company } from '../interfaces/company';
import { CompanyVisit, CompanyVisitNote, Section } from '../interfaces/company-visit';
import { DataService } from './data';

@Injectable({
  providedIn: 'root'
})
export class FranchiseService {
  currentFranchise = signal<Company | null>(null);
  franchisees = signal<Company[]>([]);
  currentCompanyVisitSections = signal<Section[]>([]);
  showAll = false;

  companyVisit = signal<CompanyVisit | null>(null);
  companyVisitNotes = signal<CompanyVisitNote[]>([]);

  private ds = inject(DataService);

  // async loadMyFranchisees() {
  //   const promise = new Promise(resolve => {
  //     this.ds.getUserCompanies(this.showAll).subscribe((data: c.Company[]) => {
  //       this.franchisees = data;
  //       this.currentFranchise = this.franchisees[0];
  //       resolve(null);
  //     });
  //   });
  //   return promise;
  // }

  // loadBPFranchisees(bpId: string) {
  //   const promise = new Promise(resolve => {
  //     this.ds.getUsersCompanies(bpId, this.showAll).subscribe((data: c.Company[]) => {
  //       this.franchisees = data;
  //       this.currentFranchise = this.franchisees[0];
  //       resolve(null);
  //     });
  //   });
  //   return promise;
  // }

  // loadCurrentFranchisee(id: string) {
  //   const promise = new Promise(resolve => {
  //     this.ds.getCompany(id).subscribe((data: c.Company) => {
  //       this.currentFranchise = data;
  //       resolve(null);
  //     });
  //   });
  //   return promise;
  // }
}
