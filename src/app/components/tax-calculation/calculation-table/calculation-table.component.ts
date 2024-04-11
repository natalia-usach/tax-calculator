import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TaxCalculationTableElement } from '../../../interfaces';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tax-calculation-table',
  templateUrl: './calculation-table.component.html',
  styleUrl: './calculation-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxCalculationTableComponent {
  @Input() set tableData(data: TaxCalculationTableElement[]) {
    if (data) {
      this.dataSource = new MatTableDataSource(data);
    }
  }

  dataSource: MatTableDataSource<TaxCalculationTableElement> | null = null;
}
