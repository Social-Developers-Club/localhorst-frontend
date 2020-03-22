export class Recommendation {

    public category: Array<string>;
    public recommendation: string;
    public type: string;
    public industry: Array<string>;
    public link: string;

    constructor(category: Array<string>, recommendation: string, type: string,
        industry: Array<string>, link: string) {
        this.category = category;
        this.recommendation = recommendation;
        this.type = type;
        this.industry = industry;
        this.link = link;
    }

}