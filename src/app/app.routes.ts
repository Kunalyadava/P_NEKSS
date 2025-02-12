import { Routes } from '@angular/router';
import { TrackerComponent } from './tracker/tracker.component';
import { DeptWiseOPDSummaryReportComponent } from './dept-wise-opdsummary-report/dept-wise-opdsummary-report.component';
import { NameComponentComponent } from './name/name-component/name-component.component';
import { TableComponent } from './name/table/table.component';
import { DatesearchComponent } from './name/datesearch/datesearch.component';
import { MonthsearchComponent } from './name/monthsearch/monthsearch.component';
import { SelectwholeyearComponent } from './name/selectwholeyear/selectwholeyear.component';

export const routes: Routes = [
    { path: '', redirectTo: 'tracker', pathMatch: 'full' },
    {path:"tracker",component:TrackerComponent} ,
    {path:"summary",component:DeptWiseOPDSummaryReportComponent} ,
    {path:"name",component:NameComponentComponent},
    {path:"table",component:TableComponent},
    {path:"date",component:DatesearchComponent},
    {path:"month",component:MonthsearchComponent},
    {path:"year",component:SelectwholeyearComponent}
];
