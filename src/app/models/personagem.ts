import { Location } from "./location";
import { Origin } from "./origin";

export class Personagens {
    id!:number;
    name!:string;
    status!:string;
    species!:string;
    type!:string;
    origin!:Origin;
    location!: Location;
    image!:string;
    episode!: Array<string>;
    url!: string;
    created!: string;
}
