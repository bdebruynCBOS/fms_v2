export interface CompanyVisit {
  id: string;
  compnayId: string;
  month: string;
  year: number;
  isComplete: boolean;
  activeMonth: boolean;
  statusBw: number;
  status: string;
  extensionDate: string | null;
  schedules: CompanyVisitSchedule[];
}
export interface CompanyVisitSchedule {
  id?: string;
  companyVisitId?: string;
  fromDate?: number;
  toDate?: number;
  visitType?: string;
  visitStatus?: string;
  visitStatusTypeBW?: number;
}

export interface CompanyVisitView {
  displayName: string;
  groups: CompanyVisitGroup[];
}
export interface CompanyVisitGroup {
  id: string;
  statusBW: number;
  group: string;
  groupNote: string;
  score: number;
  totalScore: number;
  sections: Section[];
}
export interface Section {
  id: string;
  name: string;
  score: number;
  totalScore: number;
  actions: Action[];
}
export interface Action {
  id: string;
  sequence: number;
  name: string;
  tasks: ActionTask[];
}
export interface ActionTask {
  id: string;
  sequence: number;
  name: string;
  freq: string;
  kpi: string;
  maxScore: number;
  isActive: boolean;
  score: number;
  comments: ActionResultComment[];
  files: ActionResultFile[];
  isApplicable: boolean;
  showApplicable: boolean;
  isExemptionAllowed: boolean;
  hasAppliedForExemption: boolean;
}
export interface ActionResultComment {
  id: string;
  comment: string;
  createdDate: number;
  shareWithFranchise: boolean;
  followUp: boolean;
}
export interface ActionResultFile {
  id: string;
  name: string;
  extension: string;
  createdDate: number;
  shareWithFranchise: boolean;
  followUp: boolean;
}

export interface ActionResultCommentIn {
  id: string;
  companyId: string;
  comment: string;
  groupId: string;
  companyCheckListLogId: string;
  actionTaskId: string;
  companyVisitActionResultId: string;
  shareWithFranchise: boolean;
  followUp: boolean;
}

export interface CompanyVisitScheduleIn {
  Id: string;
  CompanyVisitId: string;
  isComplete: boolean;
  groups: CompanyVisitGroupIn[];
}


export class CompanyVisitGroupIn {
  groupId: string;
  companyCheckListLogId: string;
  date: Date | null;
  actionResults: ActionResultsIn[];

  constructor(groupId?: string, companyCheckListLogId?: string, date?: Date) {
    this.groupId = groupId || '';
    this.companyCheckListLogId = companyCheckListLogId || '';
    this.actionResults = [];
    this.date = date || null;
  }
}

export class ActionResultsIn {
  actionTaskId?: string;
  scoreWeight?: number;
  isExempted?: boolean;
  defaultQtyRequired?: number;
  qty?: number;
  isOptional?: boolean;

  constructor(args?: ActionTaskOut) {
    if (args) {
      this.actionTaskId = args.id;
      this.scoreWeight = args.maxScore || 0;
      this.isExempted = args.isExempted || false;
      this.defaultQtyRequired = args.defaultQtyRequired || 0;
      this.qty = args.qty || 0;
      this.isOptional = args.isOptional || false;
    }
  }
}

export interface CompanyVisitEvent {
  scheduleId: string;
  title: string;
  from: number;
  to: number;
}

export interface ActionTaskExemptionIn {
  companyVistId: string;
  actionTaskId: string;
  timePeriod: number;
  reason: string;
}

export interface CompanyVisitFollowUp {
  id: string;
  fromDate: number;
  toDate: number;
  isComplete: boolean;
}

export interface CompanyVisitNote {
  id: string;
  note: string;
  createdDate: number;
}

export interface CompanyVisitIn {
  companyId: string;
  startDate: number;
  endDate: number;
  visitTypeId: string;
  visitTypeBW: number;
  note: string;
}

export interface CompanyVisitHOComment {
  id: string;
  comment: string;
  createdDate: number;
}

export interface CompanyVisitHOCommentIn {
  id: string;
  companyVisitId: string;
  comment: string;
}

// export interface CompanyVisitScheduleIn {
//     id: string;
//     companyId: string;
//     startDate: number;
//     endDate: number;
// }

export interface CalendarEventIn {
  id: string;
  companyId: string;
  startDate: number;
  eventTypeId: string;
}

export interface CompanyVisitNoteIn {
  id: string;
  companyVisitId: string;
  note: string;
}

export interface CompanyVisitFollowUpNoteIn {
  id: string;
  companyVisitFollowUpId: string;
  note: string;
}

export interface CompanyVisitFollowUpNote {
  id: string;
  note: string;
  createdDate: number;
}

export interface Section {
  id: string;
  name: string;
  actions: Action[];
}

export interface CompanyVisitActionPlan {
  companyVisitId: string;
  actionTaskId: string;
  comment: string;
  score: number;
}

export interface CompanyVisitActionPlanIn {
  companyVisitId: string;
  actionTaskId: string;
  comment: string;
  score: number;
}

export interface CompanyVisitResultView {
  id: string;
  fromDate: number;
  toDate: number;
  visitType: string;
  sections: SectionView[];
}
export interface SectionView {
  id: string;
  name: string;
  actions: ActionView[];
}
export interface ActionView {
  actionTypeBW: number;
  sequence: number;
  name: string;
  ActionTasks: ActionTaskView[];
}
export interface ActionTaskView {
  actionTask: string;
  maxScore: number;
  comment: string;
  score: number;
  createdDate: number;
}

export interface CompanyVisitActionPlanView {
  id: string;
  ActionTasks: ActionTaskView[];
}

export interface CompanyVisitFollowUpIn {
  startDate: number;
  endDate: number;
  companyVisitId: string;
}

export interface CompanyVisitFollowUpView {
  id: string;
  displayName: string;
  fromDate: number;
  toDate: number;
  visitType: string;
  actionTasks: ActionTaskView[];
}

// NEW
export interface CompanyVisitCheckListLog {
  totalScore: number;
  score: number;
  percentage: number;
  passed: boolean;
  createdDate: number;
  isComplete: boolean;
  year: number;
}

export interface CompanyVisitCheckList {
  companyId: string;
  accountCode: string;
  displayName: string;
  month: string;
  status: string;
  statusBw: number;
  monthValue: number;
  createdDate: Date | null;
  extensionDate: Date | null;
  group: CompanyVisitCBPGroup;
}

export interface ICompanyVisitCheckListOut {
  checkList: CompanyVisitCheckList;
  posSystem: string;
  prevActionPlanData: CompanyVisitActionPlan[] | null;
}

export interface ICompanyVisitActionPlan {
  comments: ICBPtaskResultCommentArchive[];
  createdDate: number | null;
  cBPTaskName: string;
  finished: boolean | null;
}

export interface ICBPtaskResultCommentArchive {
  id: string;
  comment: string;
  createdDate: number | null;
  shareWithFranchise: boolean | null;
  dueDate: number | null;
  followUp: boolean | null;
}

export interface CompanyVisitCBPGroup {
  id: string;
  statusBW: number;
  name: string;
  note: string;
  sections: CBPSection[];
}
export interface CBPSection {
  id: string;
  name: string;
  statusBW: number;
  actions: CBPAction[];
}
export interface CBPAction {
  id: string;
  sequence: number;
  name: string;
  tasks: CBPTask[];
}
export interface CBPTask {
  id: string;
  sequence: number;
  name: string;
  isActive: boolean;
  finished: boolean;
  showDiscussion: boolean;
  cbptaskType: string;
  cbptaskTypeBW: number;
  cbpTaskKeyValues: CBPTaskKeyValues[];
  comments: CBPtaskResultComment[];
}
export interface CBPTaskKeyValues {
  name: string;
  key: string;
  value: string;
  typeBW: number;
  checklistLog: any;
}
export interface CBPtaskResultComment {
  id: string;
  comment: string;
  createdDate: number;
  shareWithFranchise: boolean;
  dueDate: number;
  followUp: boolean;
}

export interface CBPtaskResultCommentIn {
  id: string;
  companyVisitId: string;
  cbptaskId: string;
  comment: string;
  shareWithFranchise: boolean;
  followUp: boolean;
  dueDate: number;
}

export class CompanyVisitResultViewIn {
  scheduleId: string;
  companyVisitId: string;
  isComplete: boolean;
  results: CompanyVisitResultIn[] = [];

  constructor(scheduleId?: string, companyVisitId?: string, isComplete?: boolean) {
    this.scheduleId = scheduleId || '';
    this.companyVisitId = companyVisitId || '';
    this.isComplete = isComplete || false;
    this.results = [];
  }
}

export class CompanyVisitResultIn {
  cbptaskId: string;
  finished: boolean;

  constructor(args?: CBPTask) {
    this.cbptaskId = args ? args.id : '';
    this.finished = args ? args.finished : false;
  }
}

export interface CheckListResultFile {
  id: string;
  name: string;
  createdDate: number;
  shareWithFranchise: boolean;
  followUp: boolean;
  extension: string;
  partialUrl: string;
}

export interface CompanyVisitExemption {
  id: string;
  company: string;
  actionTask: string;
  exemptionExpireMonth: string;
  createdDate: number;
  exemptionStatus: ExemptionStatus;
  companyVisitExemptionLog: CompanyVisitExemptionLogItem[];
}

export interface ExemptionStatus {
  id: string;
  name: string;
  description: string;
  typeBw: number;
}

export interface CompanyVisitExemptionLogItem {
  id: string;
  reason: string;
  createdDate: number;
  createdUser: number;
  createdUserId: string;
}

export interface CompanyVisitExemptionIn {
  id: string;
  reason: string;
  createdUserId: string;
}

export interface CompanyInjury {
  id: string;
  injuryAmount: number;
  injuryType: string;
  monthName: string;
  month: number;
  year: number;
}

export interface CompanyInjuryComment {
  id: string;
  comment: string;
  createdDate: number;
  createdUserId: string;
  companyInjuryId: string;
  username: string;
}

export interface CompanyInjuryIn {
  id: string | null;
  companyId: string;
  year: number;
  month: number;
  injuryAmount: number;
  injuryType: string;
}

export interface ChecklistLite {
  id: string;
  name: string;
}

export interface JourneyExcellenceQuestion {
  id: string;
  title: string;
  question: string;
  isActive: boolean;
  sequence: number;
  comments: JourneyExcellenceQuestionComments[];
  showDiscussion: boolean;
  checkList: JourneyExcellenceQuestionaireCheckListResults;
}

export interface JourneyExcellenceQuestionComments {
  id?: string;
  companyVisitId: string;
  journeyQuestionaireId: string;
  comment: string;
  createdDateTime?: string;
  showDiscussion?: boolean;
}

export interface JourneyExcellenceQuestionaireCheckListResults {
  id: string;
  CompanyVisitId: string;
  JourneyQuestionaireId: string;
  Value: boolean;
}

export interface PatchCBPTask {
  companyVisitId: string;
  cbpTaskIds: string[];
}


// NEW
export interface CompanyVisitGroupChecklistOut {
  isComplete: boolean | null;
  groupId: string;
  companyCheckListLogId: string | null;
  name: string;
  note: string;
  sections: SectionOut[];
  companyCheckListLog: CompanyCheckListLogOut;
  prevCheckListLog: CompanyCheckListLogOut;
}
export interface SectionOut {
  id: string;
  name: string;
  score: number | null;
  totalScore: number | null;
  actions: ActionOut[];
}

export interface ActionOut {
  id: string;
  sequence: number;
  name: string;
  tasks: ActionTaskOut[];
}

export interface ActionTaskOut {
  id: string;
  sequence: number;
  name: string;
  kpi: string;
  exemptedExpireMonth: string;
  maxScore: number | null;
  defaultQtyRequired: number | null;
  qty: number | null;
  isOptional: boolean | null;
  isActive: boolean;
  isExemptionAllowed: boolean;
  isExempted: boolean;
  hasAppliedForExemption: boolean;
  prevQty: number | null;
  comments: ActionResultComment[];
  files: CheckListResultFile[];
  prevComments: ActionResultComment[];
  prevFiles: CheckListResultFile[];
  actionTaskType: ActionTaskType;
}
export interface ActionTaskType {
  name: string;
  typeBW: number | null;
}

export interface CompanyCheckListLogOut {
  totalScore: number | null;
  score: number | null;
  percentage: number | null;
  passed: boolean | null;
  createdDate: number | null;
  isComplete: boolean | null;
  year: number | null;
}