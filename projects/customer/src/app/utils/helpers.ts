import { Transaction } from "../models/transaction";
import { User } from "../models/user";
import { Store } from "../services/store";

export const getReceiverInfo = (
  user: User,
  store: Store,
  transaction: Transaction
): any => {
  const receiver = {
    name: `${user.firstname} ${user.lastname}`,
    account: `${user.accountNumber}`,
    bank: `${store.get("bankName")}`
  };
  if (transaction.receiverName) {
    receiver.account = transaction.receiverAccount;
    receiver.bank = transaction.receiverBank;
    receiver.name = transaction.receiverName;
  }
  return receiver;
};
