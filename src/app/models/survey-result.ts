export class SurveyResult {

    public companyType: string = undefined;
    public customerCount: number = undefined;
    public financialSituationRating: number = undefined;

    public isComplete(): boolean {
        if (this.companyType && this.customerCount && this.financialSituationRating) {
            return true;
        }
        return false;
    }

}