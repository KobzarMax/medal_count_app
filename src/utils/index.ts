import {
  aut,
  blr,
  can,
  chn,
  fra,
  ger,
  ita,
  ned,
  nor,
  rus,
  sui,
  swe,
  usa,
} from "@/static/icons";
import type { CodeType } from "@/types";

export const handleFlagImage = (code: CodeType) => {
  switch (code) {
    case "usa":
      return usa;
    case "aut":
      return aut;
    case "blr":
      return blr;
    case "can":
      return can;
    case "chn":
      return chn;
    case "fra":
      return fra;
    case "ger":
      return ger;
    case "ita":
      return ita;
    case "ned":
      return ned;
    case "nor":
      return nor;
    case "rus":
      return rus;
    case "sui":
      return sui;
    case "swe":
      return swe;
  }
};
