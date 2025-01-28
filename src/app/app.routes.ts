import { Routes } from '@angular/router';
import { TrackerComponent } from './tracker/tracker.component';
import { DeptWiseOPDSummaryReportComponent } from './dept-wise-opdsummary-report/dept-wise-opdsummary-report.component';

export const routes: Routes = [
    { path: '', redirectTo: 'tracker', pathMatch: 'full' },
    {path:"tracker",component:TrackerComponent} ,
    {path:"summary",component:DeptWiseOPDSummaryReportComponent} 
];
