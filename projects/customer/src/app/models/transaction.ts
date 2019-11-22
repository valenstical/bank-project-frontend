export interface Transaction {
  id?: number;
  amount?: number;
  type?: number;
  description?: string;
  transactionDate?: string;
  status?: number;
  receiverBank?: string;
  receiverAccount?: string;
  receiverEmail?: string;
  receiverPhone?: string;
  ifscCode?: string;
  option?: number;
  activationCode?: number;
  accountNumber?: string;
  createdAt?: string;
  updatedAt?: string;
  receiverName?: string;
}
