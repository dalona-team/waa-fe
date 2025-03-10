// src/types/dog.ts
export type Gender = 'MALE' | 'FEMALE';
export type Status = 'PRE_ADOPTION' | 'ADOPTION' | 'ADOPTED';
export type PottyTraining = 'OUTDOOR' | 'INDOOR' | 'BOTH';

export interface Dog {
  id: number;
  organizationId: number;
  name: string;
  gender: Gender;
  birthDate: string;
  birthDateIsEstimated: boolean;
  status: Status;
  adoptionAddress: string;
  rescueDate: string;
  rescueLocation: string;
  weight: number;
  neutered: boolean;
  heartworm: boolean;
  kennelCough: boolean;
  dentalScaling: boolean;
  healthNotes: string;
  barkingLevel: number;
  separationAnxiety: number;
  pottyTraining: PottyTraining;
  behaviorNotes: string;
  rescueContext: string;
  additionalStory: string;
  createdAt: string;
  updatedAt: string;
  createdBy: number;
  updatedBy: number;
}

export interface GetDogsResponse {
  dogs: Dog[];
}