export enum BPTaskTypes {
  LinkToChecklist = 1,
  LinkToPage = 2,
  LinkToReport = 4
}

export enum ActionTaskKeyTypes {
  TechBays = 1,
  TechWheelAlignmentBays = 2,
  TechWheelAlignmentPost = 4,
  TechWheelAlignmentPit = 8,
  TechTyreStrippingMachine = 16,
  TechWheelAlignmentMachines = 32,
  TechExhaust = 64,
  TechTowBars = 128,
  TechLowLevelBays = 256,
  TechTwoPostLiftBays = 512,
  TechFourPostLiftBays = 1024
}

export enum Roles {
  Administrator = 1,
  ConsumerExecutive = 2,
  ChannelBusinessUnitManager = 4,
  BusinessPartner = 8,
  OperationsAdmin = 16,
  ClientsLiasonOfficer = 32,
  AccountsAdmin = 64,
  Marketing = 128,
  HOManager = 256,
  FleetAdmin = 512,
  DealerPrincipalNonActive = 1024,
  DealerPrincipalActive = 2048,
  BranchManager = 4096,
  CounterSales = 8192,
  AdminStaff = 16384,
  SalesManager = 32768,
  Storeman = 65536,
  Driver = 131072,
  Foreman = 262144,
  Fitter = 524288,
  Receptionist = 1048576,
  WheelAlignmentTechnician = 2097152,
  TechnicalManager = 4194304,
  TeaLady = 8388608,
  FinanceView = 16777216
}

export enum IBTDuplicateFilterTypes {
  IBTs = 1,
  Duplicates = 2
}

export enum IBTDuplicateSearchRanges {
  Current = 0,
  Archive = 1,
  All = 2
}

export enum TurnoverTrxSearchFilterTypes {
  Transaction = 1,
  StockItem = 2
}

export enum BonusRebatesSetupPageTypes {
  Import = 1,
  Dealer = 2,
  RebatesBonuses = 3
}

export enum SupplierImportColumnPositions {
  ExtAccountCode = 1,
  ExtDealerName = 2,
  ExtProductCode = 3,
  ExtProductDesc = 4,
  Quantity = 5,
  Amount = 6,
  RebateRate = 7,
  RebateAmt = 8,
  AccountCode = 9,
  AmountBon = 10,
  SubSupplierCode = 11
}

export enum TransactionActions {
  DebDeposit = 1,
  DebSettle = 2,
  DebWriteOff = 3,
  DebOffset = 4,
  CrdPay = 5,
  CrdPayPBon = 6,
  CrdWriteOff = 7,
  CrdOffset = 8,
  // The Following 2 is for when they want to create an empty Journal transaction
  DebJournal = 888,
  CrdJournal = 999
}

export enum PaymentMethodTypes {
  ADO = 1,
  Electronic = 2,
  Cheque = 3
}

export enum StatusFilterOptions {
  All = 1,
  Outstanding = 2,
  Provisional = 4,
  Returned = 8,
  Queried = 16,
  Invoiced = 32,
  NotCreated = 64,
  DealerApproval = 128,
  Scheduled = 256,
  Ignored = 512
}

export enum AdviceStatuses {
  Outstanding = 0,
  Queried = 1,
  Approval = 2,
  Returned = 3,
  Invoiced = 4,
  Ignored = 5
}

export enum AcceptTypeCodeOptions {
  ThisTrxOnly = 1,
  FixStockMaster = 2
}

export enum FixStockMasterOptions {
  ThisDealerOnly = 1,
  SelectedDealers = 2
}

export enum ResolveOptions {
  Unselected = 0,
  Ibt = 1,
  NewTypeCode = 2,
  DifferentStockItem = 3,
  NewStockItem = 4,
  Reject = 5,
  Dupliacte = 6,
  Reverse = 7
}

export enum DealerAddType {
  NewDealer = 1,
  NewDealerOnExistingSite = 2,
  DealerOwnershipChange = 0,
  ConvertDealer = 3
}

export enum WorkingBudgetTypes {
  Total = 1,
  Expenses = 2,
  AveSelPricePerUnit = 4,
  AveSelPriceAlignPerUnit = 8,
  AveSelPriceBalPerUnit = 16,
  AveSelPricBatPerUnit = 32,
  AveSelPriceBrakePerUnit = 64,
  AveSelPriceTowBarPerUnit = 108,
  AveSelPriceShockPerUnit = 216,
  AveSelPriceSuspPerUnit = 432,
  PercOfTotalSalesTyres = 864,
  PercOfBop = 1728,
  WorkDays = 3456,
  GP = 6912
}

export enum CentralisedBillingFileTypes {
  Invoice = 1,
  Authorization = 2
}

export enum SupplierTypes {
  Rebate = 1,
  Fleet = 2,
  NonActiveRebates = 3,
  Accounting = 641,
  Operational = 642,
  PointOfSale = 643,
  Marketing = 644
}

export enum CalendarMonths {
  January = 1,
  February = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12
}
