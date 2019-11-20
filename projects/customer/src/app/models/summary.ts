export interface AccountSummary {
  balance?: {
    total?: number;
    count?: number;
  };
  credits?: {
    total?: number;
    count?: number;
  };
  debits?: {
    total?: number;
    count?: number;
  };
}
