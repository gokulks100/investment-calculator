import { Component, computed, inject, input, Input } from '@angular/core';
import { annualData } from '../data.model';
import { InvestmentSerivce } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // @Input() annualData?:annualData[]

  investmentService = inject(InvestmentSerivce)

  annualData = input<annualData[]>();

  results = computed(()=>this.investmentService.results() )

  // results  = this.investmentService.results.asReadonly();


}
