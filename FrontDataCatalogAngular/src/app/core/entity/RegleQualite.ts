import {MotCle} from "./MotCle";
import {TypeRegleQualite} from "./TypeRegleQualite";

export class RegleQualite {
  idRegleQualite !: number;
  typeRegleQualite !: TypeRegleQualite;
  motCleList!: MotCle[];
  checked !: boolean;
}
