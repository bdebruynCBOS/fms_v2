import { inject, Injectable, signal } from '@angular/core';
import { Company } from '../interfaces/company';
import { CompanyVisit, CompanyVisitNote, Section } from '../interfaces/company-visit';
import { DataService } from './data';
import { firstValueFrom } from 'rxjs';

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


  async loadMyFranchisees() {
    const data = await firstValueFrom(this.ds.getUserCompanies(this.showAll));

    this.franchisees.update(() => data);
    this.currentFranchise.update(() => data[0]);

    return;
  }

  async loadBPFranchisees(bpId: string) {
    const data = await firstValueFrom(this.ds.getUsersCompanies(bpId, this.showAll));

    this.franchisees.update(() => data);
    this.currentFranchise.update(() => data[0]);

    return;
  }

  async loadCurrentFranchisee(id: string) {
    const  data = await firstValueFrom(this.ds.getCompany(id));
    this.currentFranchise.update(() => data);
    
    return;
  }
}
