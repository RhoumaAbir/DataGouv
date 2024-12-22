import { DonneeFils } from "./donnee-fils";
import { Source } from "./source";

export class DonneeParent {
    idDonneeParent!:number;
    nomTechniqueParent!:string;
    typeDonnee!:string;
    nbrLigne!:number;
    commentaire!:string;
    tailleEnOctets!:number;
    nombreDonneeFils!:string;
    donneeFilsList!:DonneeFils;
    sourceList!:Source;


}
