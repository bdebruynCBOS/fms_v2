export interface CompanySource {
  companies: Company[];
  companyCount: number;
}

export interface CompanyIn {
  id: string;
  accountCode: string;
  tradeName: string;
  userCreated: string;
  dateCreated: string;
  isActive: boolean;
}

export interface CompanyBasicIn {
  id: string;
  accountCode: string;
  tradeName: string;
  dateCreated: number;
  userCreated: string;
  isActive: boolean;
}

export interface CompanyInfoIn {
  id: string;
  companyId: string;
  typeId: string;
  registeredName: string;
  registrationNumber: string;
  vatNumber: string;
  dateCreated: string;
  userCreated: string;
  physicalAddressId: string;
  postalAddressId: string;
  sapAccountCode: string;
}

export interface AddressIn {
  id: string;
  line1: string;
  line2: string;
  line3: string;
  suburb: string;
  city: string;
  stateProvince: string;
  postalCode: string;
  countryId: string;
}

export interface Company {
  id: string;
  accountCode: string;
  tradeName: string;
  dateCreated: string;
  userCreated: string;
  isActive: boolean;
  dealerFeeGroupId: number;
}

export interface CompanyForm {
  companyDetails: CompanyDetails;
  contacts: Contact[];
  PhysicalAddress: AddressInfo;
  PostalAddress: AddressInfo;
  SameAsPhysicalAddress: boolean;
  setup: CompanySetup;
}

export interface Contact {
  id: string;
  title: string;
  name: string;
  position: string;
  email: string;
  cell: string;
  wageGradeId: string;
  type: string;
  birthday: number;
  branch: Array<string>;
  cellNumber: string;
}

export interface IAnniversary {
  accountCode: string;
  tradeName: string;
  firstname: string;
  surname: string;
  cellNo: string;
  date: number;
  years: number;
  period: string;
  type: string;
}

export interface CompanyStaff {
  id: string;
  title: string;
  name: string;
  username: string;
  position: string;
  email: string;
  cell: string;
  training: StaffTraining;
  checklistLog: UserChecklistLog;
  trainingList: StaffTraining[];
  userTrainingModuleList: UserTrainingModule[];
  roleBw: number[];
}

export class CompanyStaffGroup {
  constructor(staff: CompanyStaff[]) {
    this.staff = staff;
  }

  staff: CompanyStaff[];
}

export interface StaffTraining {
  id: string;
  trainingId: string;
  trainingName: string;
  progress: string;
  markPercentage: string;
  expiryDate: string;
  createdDate: string;
  modifiedDate: string;
}

export interface UserChecklistLog {
  id: string;
  totalScore: number;
  score: number;
  percentage: number;
  passed: boolean;
  createdDate: number;
  isComplete: boolean;
  year: number;
}

export interface AddressInfo {
  lineOne: string;
  lineTwo: string;
  suburb: string;
  city: string;
  postalCode: string;
  province: string;
  country: string;
}

export interface CompanyDetails {
  companyInfo: CompanyInfo;
  addresses: Address[];
  contacts: Contact[];
  account: CompanyAccount;
  emailAddresses: CompanyEmailAddress[];
  companyTelephoneNumbers: CompanyTelephoneNumbers;
  companyTechInfo: CompanyTechInfo;
  companyLandlord: CompanyLandlord;
  companyAgreements: CompanyAgreement[];
  companyBreakdownServiceOut?: CompanyBreakdownServiceOut;
}

export interface CompanyBreakdownServiceOut {
  id: string;
  companyId: string;
  breakdownService?: boolean;
  inBusinessHours?: boolean;
  inBusinessHoursContactNumber: string;
  truck?: boolean;
  twentyFourSeven?: boolean;
  twentyFourSevenContact: string;
  lightDutyVehicle?: boolean;
  contactDuringBusinessHours: string;
  contactAfterHours: string;
  contactNoBusinessHours: string;
  contactNoAfterHours: string;
}

export interface CompanyAgreement {
  id: string;
  companyId: string;
  startDate: number;
  endDate: number;
  companyAgreementType: string;
  companyAgreementTypeId: string;
  efileId: string;
  isActive: boolean;
  efile: EFile;
  statuses: CompanyAgreementStatus[];
}

export interface EFile {
  id: string;
  accountCode: string;
  name: string;
  partialUrl: string;
  extension: string;
  contentType: string;
}

export interface CompanyAgreementIn {
  id: string;
  companyId: string;
  startDate: number;
  endDate: number;
  CompanyAgreementTypeId: string;
  efileId: string;
  isActive: boolean;
  Statuses: CompanyAgreementStatusIn[];
}

export interface CompanyAgreementStatusIn {
  id: string | null;
  companyAgreementId: string;
  agreementStatusTypeId: string;
  isLetterSent: boolean;
  letterSentDate: number | null;
  followUpNote: string;
  isActive: boolean | null;
  efiles: string[];
}

export interface CompanyDetailsIn {
  companyInfoIn: CompanyInfoIn;
  addressesIn: AddressIn[];
  accountIn: CompanyAccountIn;
  emailAddressesIn: CompanyEmailAddressIn[];
  companyTelephoneNumbersIn: CompanyTelephoneNumbersIn;
  companyTechInfoIn: CompanyTechInfoIn;
  companyLandlordIn: CompanyLandlordIn;
  companyBreakdownService: ICompanyBreakdownService;
}

export interface CompanyLandlord {
  id: string;
  name: string;
  postalAddress: string;
  emailAddress: string;
  telephoneNo: string;
  faxNo: string;
}

export interface CompanyLandlordIn {
  id: string;
  companyId: string;
  name: string;
  postalAddress: string;
  emailAddress: string;
  telephoneNo: string;
  faxNo: string;
}

export interface Address {
  id: string;
  line1: string;
  line2: string;
  line3: string;
  suburb: string;
  city: string;
  stateProvince: string;
  postalCode: string;
  countryName: string;
  countryId: string;
}

export interface AddressIn {
  id: string;
  line1: string;
  line2: string;
  line3: string;
  suburb: string;
  city: string;
  stateProvince: string;
  postalCode: string;
  countryId: string;
}

export interface CompanyInfo {
  id: string;
  companyId: string;
  typeId: string;
  storeNumber: string;
  vatNumber: string;
  registeredName: string;
  registrationNumber: string;
  officialDateOnProgram: string;
  dateOnProgram: string;
  terminationDate: string;
  userCreated: string;
  dateCreated: string;
  physicalAddressId: string;
  postalAddressId: string;
  marketingAreaId: string;
  regionalCouncilId: string;
  sapAccountCode: string;
  cbumId: string;
  bpId: string;
  technicalManagerId: string;
  companyGeoTypeId: string;
  companyRegistrationTypeId: string;
  masterListContactId: string;
  storeManagerContactId: string;
  sqMeters: number;
  gpsLong: string;
  gpsLat: string;
  mapSearch: string;
  isInFranchiseGroup: boolean;
  franchiseGroupHead: boolean;
  franchiseGroupId: string;
  franchiseGroupName: string;
  isBsCommercialAccredited: boolean;
  companyStatusId: string;
  franchiseEmail: string;
  franchiseAdminEmail: string;
  accountId: string;
  companyTelephoneNumbersId: string;
  hoursOpenMonday: string;
  hoursOpenTuesday: string;
  hoursOpenWednesday: string;
  hoursOpenThursday: string;
  hoursOpenFriday: string;
  hoursOpenMondayFriday: string;
  hoursOpenSaturday: string;
  hoursOpenSunday: string;
  hoursOpenPublicHolidays: string;
  rmiMembershipNumber: string;
  wasteTyreBureauNumber: string;
}

export interface CompanyInfoIn {
  id: string;
  companyId: string;
  typeId: string;
  storeNumber: string;
  vatNumber: string;
  registeredName: string;
  registrationNumber: string;
  officialDateOnProgram: string;
  dateOnProgram: string;
  terminationDate: string;
  userCreated: string;
  dateCreated: string;
  physicalAddressId: string;
  postalAddressId: string;
  marketingAreaId: string;
  regionalCouncilId: string;
  sapAccountCode: string;
  cbumId: string;
  bpId: string;
  technicalManagerId: string;
  companyGeoTypeId: string;
  companyRegistrationTypeId: string;
  masterListContactId: string;
  storeManagerContactId: string;
  sqMeters: number;
  gpsLong: string;
  gpsLat: string;
  mapSearch: string;
  isInFranchiseGroup: boolean;
  franchiseGroupHead: boolean;
  franchiseGroupId: string;
  franchiseGroupName: string;
  isBsCommercialAccredited: boolean;
  companyStatusId: string;
  franchiseEmail: string;
  franchiseAdminEmail: string;
  accountId: string;
  companyTelephoneNumbersId: string;
  hoursOpenMondayFriday: string;
  hoursOpenSaturday: string;
  hoursOpenSunday: string;
  hoursOpenPublicHolidays: string;
  isActive: boolean;
  rmiMembershipNumber: string;
  wasteTyreBureauNumber: string;
}

export interface CompanySetup {
  geographicalArea: string;
  locationType: string;
  gpsLong: string;
  gpslat: string;
  mapSearch: string;
  area: string;
}

export interface CompanyList {
  companies: CompanyGrid;
  companyCount: number;
}

export interface CompanyGrid {
  id: string;
  accountCode: string;
  tradeName: string;
  isActive: boolean;
  selected: boolean;
}

export interface CompanyType {
  id: string;
  name: string;
  typeBw: number;
}

export interface Staff {
  title: string;
  name: string;
  position: string;
  email: string;
  cell: string;
}

export interface FranchiseGroup {
  id: string;
  name: string;
}

export interface CompanyAccount {
  id: string;
  accountCode: string;
  bankName: string;
  accountName: string;
  branchCode: string;
  accountNo: string;
  accountTypeId: string;
  accountContactId: string;
  accountingSystemId: string;
  signedAgreement: boolean;
  sendEmail: boolean;
  overrideContactPerson: string;
  overrideEmail: string;
  feeReceived: boolean;
  feeAmount: number;
  debitOrderReceived: boolean;
  auditingAccountingFirm: string;
  auditingAccountingOfficer: string;
  postalAddress: string;
  emailAddress: string;
  telephoneNo: string;
  faxNo: string;
  speedPointSupplier: string;
  speedPointNumber: string;
}

export interface CompanyAccountIn {
  id: string;
  accountCode: string;
  bankName: string;
  accountName: string;
  branchCode: string;
  accountNo: string;
  accountTypeId: string;
  accountContactId: string;
  accountingSystemId: string;
  signedAgreement: boolean;
  sendEmail: boolean;
  overrideContactPerson: string;
  overrideEmail: string;
  feeReceived: boolean;
  feeAmount: number;
  debitOrderReceived: boolean;
  auditingAccountingFirm: string;
  auditingAccountingOfficer: string;
  postalAddress: string;
  emailAddress: string;
  telephoneNo: string;
  faxNo: string;
  speedPointSupplier: string;
  speedPointNumber: string;
}

export interface CompanyTechInfo {
  id: string;
  lowLevelBays: Number;
  twoPostLiftBays: Number;
  fourPostLiftBays: Number;
  postHoistWheelAlignmentBays: Number;
  pitRackWheelAlignment: Number;
  wheelBalancingMachines: Number;
  tyreStrippingMachines: Number;
  hasTyres: boolean;
  hasBatteries: boolean;
  hasBreaks: boolean;
  hasShocks: boolean;
  hasExhaust: boolean;
  hasTowbars: boolean;
  hasAgriTyres: boolean;
  hasTBRTyres: boolean;
  hasOTRTyres: boolean;
  hasTyreRetread: boolean;
  hasBikeTyres: boolean;
  hasWheels: boolean;
  hasRimRepair: boolean;
  hasBreakSkimming: boolean;
  hasBalancing: boolean;
  hasWheelAlignment: boolean;
  hasNitrogen: boolean;
  hasSuspension: boolean;
  hasWindscreenWipers: boolean;
  hasDiagnosticTest: boolean;
  hasMinorService: boolean;
  hasWindScreenRepairs: boolean;
  hasAirconRegas: boolean;
  hasRoofRack: boolean;
  hasCattleRails: boolean;
  hasVenterTrailers: boolean;
  hasCarWash: boolean;
  hasNumberPlates: boolean;
  hasOther: boolean;
  hasGenerator: boolean;
  hasInverter: boolean;
  hasSolarSolution: boolean;
  hasOtherEnergySupply: boolean;
  hasMajorServices: boolean;
}

export interface CompanyTechInfoIn {
  id: string;
  lowLevelBays: Number;
  twoPostLiftBays: Number;
  fourPostLiftBays: Number;
  postHoistWheelAlignmentBays: Number;
  pitRackWheelAlignment: Number;
  wheelBalancingMachines: Number;
  tyreStrippingMachines: Number;
  hasTyres: boolean;
  hasBatteries: boolean;
  hasBreaks: boolean;
  hasShocks: boolean;
  hasExhaust: boolean;
  hasTowbars: boolean;
  //New Fields
  hasAgriTyres: boolean;
  hasTBRTyres: boolean;
  hasOTRTyres: boolean;
  hasTyreRetread: boolean;
  hasBikeTyres: boolean;
  hasWheels: boolean;
  hasRimRepair: boolean;
  hasBreakSkimming: boolean;
  hasBalancing: boolean;
  hasWheelAlignment: boolean;
  hasNitrogen: boolean;
  hasSuspension: boolean;
  hasWindscreenWipers: boolean;
  hasDiagnosticTest: boolean;
  hasMinorService: boolean;
  hasWindScreenRepairs: boolean;
  hasAirconRegas: boolean;
  hasRoofRack: boolean;
  hasCattleRails: boolean;
  hasVenterTrailers: boolean;
  hasCarWash: boolean;
  hasNumberPlates: boolean;
  hasOther: boolean;
  hasGenerator: boolean;
  hasInverter: boolean;
  hasSolarSolution: boolean;
  hasOtherEnergySupply: boolean;
  hasMajorServices: boolean;
}

export interface CompanyEmailAddress {
  id: string;
  emailTypeId: string;
  ownerId: string;
  email: string;
  typeBw: number;
}

export interface CompanyEmailAddressIn {
  id: string;
  emailTypeId: string;
  ownerId: string;
  email: string;
}

export interface CompanyTelephoneNumbers {
  id: string;
  companyId: string;
  businessTelephone: string;
  businessFax: string;
  accountsTelephone: string;
  accountsFax: string;
  speedDial: string;
}

export interface CompanyTelephoneNumbersIn {
  id: string;
  companyId: string;
  businessTelephone: string;
  businessFax: string;
  accountsTelephone: string;
  accountsFax: string;
  speedDial: string;
}

export interface CompanySelect {
  id: string;
  accountCode: string;
  tradeName: string;
}

export interface CompanyAgreementStatus {
  id: string;
  companyAgreementId: string;
  bsafAcc: string;
  accountCode: string;
  tradeName: string;
  startDate: number | null;
  endDate: number | null;
  isLetterSent: boolean | null;
  letterSentDate: number | null;
  followUpNote: string;
  type: string;
  typeBw: number;
  typeId: string;
}

export interface CompanyBankDetail {
  accountName: string;
  bankName: string;
  accountNo: string;
  branchCode: string;
  accountTypeId: string | null;
}

export interface DealersSpecialJournalSort {
  accountCode: string;
  dealer: string;
  sort: number;
}

export interface UserTrainingModule {
  id: string;
  title: string;
  courseDate: number | null;
  attended: boolean | null;
  competent: boolean | null;
  facilitator: string;
  cost: string;
  duration: string;
  filename: string;
  extension: string;
  url: string;
  comments: string;
}

export interface CompanyFolder {
  id: string;
  folderName: string;
  displayName: string;
}

export interface BussinessHours {
  hoursOpenMonday: string;
  hoursOpenTuesday: string;
  hoursOpenWednesday: string;
  hoursOpenThursday: string;
  hoursOpenFriday: string;
  hoursOpenSaturday: string;
  hoursOpenSunday: string;
  hoursOpenPublicHolidays: string;
}

export interface BusinessHourIn {
  companyId: string;
  time: string;
  day: number;
}

export interface CompanyServices {
  companyId: number;
  generalManagerGuid: string;
  generalManagerName: string;
  areaManagerGuid: string;
  areaManagerName: string;
  stateProvince: string;
  tradeName: string;
}

export interface UpdateFeeGroupIn {
  accountCode: string;
  fs_month: number;
  fs_year: number;
  feeGroupId: number;
}

export interface StoreType {
  id: string;
  storeTypeDesc: string;
}

export interface ICompanyBreakdownService {
  areaManager: string;
  franchiseEmail: string;
  secondaryEmail: string;
  breakdownService?: boolean;
  inBusinessHours?: boolean;
  inBusinessHoursContactNumber: string;
  truck?: boolean;
  twentyFourSeven?: boolean;
  twentyFourSevenContact: string;
  lightDutyVehicle?: boolean;
  contactDuringBusinessHours: string;
  contactAfterHours: string;
  contactNoBusinessHours: string;
  contactNoAfterHours: string;
}

