export type CodeType =
  | "usa"
  | "aut"
  | "blr"
  | "can"
  | "chn"
  | "fra"
  | "ger"
  | "ita"
  | "ned"
  | "nor"
  | "rus"
  | "sui"
  | "swe";

export type MedalType = {
  code: CodeType;
  gold: number;
  silver: number;
  bronze: number;
};
