import { User } from "./user";
import { AccountSummary } from "./summary";

export interface State {
  currency?: string;
  bankName?: string;
  header?: string;
  summary?: AccountSummary;
  user?: User;
}
