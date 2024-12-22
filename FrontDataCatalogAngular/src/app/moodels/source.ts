import { Collection } from "./collection";
import { DonneeParent } from "./donnee-parent";

export class Source {
    idSource!:number;
    nomSource!:string;
    fournisseurSource!:string;
    commmentaireSource!:string;
    path!:string;
    userName!:string;
    motDePasee!:string;
    collection!:Collection;
    donneeParentList!:DonneeParent;
}