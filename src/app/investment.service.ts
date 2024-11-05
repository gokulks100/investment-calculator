import { Injectable, signal } from "@angular/core";
import { annualData, userData } from "./data.model";


@Injectable({
  'providedIn':'root'
})

export class InvestmentSerivce
{
  results = signal<annualData[] | undefined>(undefined)

  resultData!:annualData[];

  calculateInvestmentResults(data: userData) {
    const { initialInvestment, expectedReturn, duration, annualInvestment } =  data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    // this.resultsData = annualData;
    this.results.set(annualData)
  }
}
