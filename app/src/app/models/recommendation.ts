export class Recommendation {

    public category: Array<string>;
    public description: string;
    public title: string;
    public type: string;
    public industry: Array<string>;
    public link: string;
    public imageUrl: string;

    constructor(category: Array<string>, title: string, description: string, type: string,
        industry: Array<string>, link: string, imageUrl: string) {
        this.category = category;
        this.title = title;
        this.description = description;
        this.type = type;
        this.industry = industry;
        this.link = link;
        this.imageUrl = imageUrl;
    }

}