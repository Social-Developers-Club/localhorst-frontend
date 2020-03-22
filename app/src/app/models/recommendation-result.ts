import { Recommendation } from './recommendation';

export class RecommendationResult {

    public id: string;
    public score: number;
    public doc: Recommendation;

    constructor(id: string, score: number, doc: Recommendation) {
        this.id = id;
        this.score = score;
        this.doc = doc;
    }

}