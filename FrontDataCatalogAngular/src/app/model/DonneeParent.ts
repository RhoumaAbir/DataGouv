import { Historique } from '../model/historique';
export interface DonneeParent {
idDonneeParent?: number;
NomTechniqueParent: string;
nomTechniqueParent: string;
typeDonnee: string;
nbrLigne: number;
commentaire: string;
TailleEnOctets: number;
NombreDonneeFils: number;
//donneeFilsList?: DonneeFils[];
//trace?: Trace;
historiqueList?: Historique[];}