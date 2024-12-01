export interface prnData {
  name: string; // Name
  subj: string; // Subjective
  obj: string; // Objective
  poss: string; // Possessive
  possDeter: string; // Possessive Determiner
  refl: string; // Reflexive
  top: string; // Type of person
}

export function capatialize(s: string): string {
  return String(s[0]).toUpperCase() + String(s).slice(1);
}