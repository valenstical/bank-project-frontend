import { SuperUser } from "ng-valibrary";

export interface User extends SuperUser {
  firstname?: string;
  lastname?: string;
  email?: string;
  dob?: string;
  stateId?: string;
  phone?: string;
  gender?: number;
  address?: string;
  city?: string;
  zip?: string;
  accountType?: number;
  accountNumber?: string;
  identificationType?: number;
  identificationNumber?: string;
  image?: string;
  isAdmin?: boolean;
  isActive?: boolean;
}
