import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type userData } from '../data.model';
import { InvestmentSerivce } from '../investment.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Output() submitData = new EventEmitter<userData>();
  // submitData = output<userData>()

  constructor(private _investmentService: InvestmentSerivce) {}

  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  onSubmit() {
    const data = {
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    };

    this._investmentService.calculateInvestmentResults(data);
    // this.submitData.emit(data);
    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }
}
