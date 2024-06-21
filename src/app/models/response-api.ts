import { Personagens } from "./personagem";

export class ResponseApi {
    info!: {
        count: number;
        pages: number;
        next: string;
        prev: string;
    };
    results!: Personagens[];
}

