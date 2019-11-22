import { Pair } from "ng-valibrary";

export const TRANSACTION = {
  STATUS: [
    { value: 0, text: "Pending" },
    { value: 1, text: "Success" },
    { value: 2, text: "Canceled" }
  ],

  OPTION: [
    { value: 0, text: "Inter-bank Transfer" },
    { value: 1, text: "International Transfer" }
  ],

  TYPE: [
    { value: 0, text: "Debit" },
    { value: 1, text: "Credit" }
  ],

  STATUS_PENDING: 0,
  STATUS_SUCCESS: 1,
  STATUS_CANCELED: 2,

  TYPE_DEBIT: 0,
  TYPE_CREDIT: 1,

  OPTION_INTERNAL: 0,
  OPTION_INTERBANK: 1
};
export const DEFAULT_IMAGE_URL =
  "https://res.cloudinary.com/dvnrltpfi/image/upload/v1561101906/profile/wof5e7h053kkbcpwox6q.jpg";
export const CURRENCY = "&#8358;";
export const BANK_NAME = "Naija United Bank";
export const TRANSACTION_SUFFIX = "TX";

export const IDENTIFICATION_TYPES: Pair[] = [
  { value: 0, text: "Voters Card" },
  { value: 1, text: "Drivers's Licence" }
];

export const ACCOUNT_TYPES: Pair[] = [
  { value: 0, text: "Savings" },
  { value: 1, text: "Current" },
  { value: 2, text: "Fixed Deposit" }
];

export const GENDERS: Pair[] = [
  { value: 0, text: "Male" },
  { value: 1, text: "Female" }
];

export const STATES: Pair[] = [
  { value: 0, text: "Abia" },
  { value: 1, text: "Adamawa" },
  { value: 2, text: "Akwa Ibom" },
  { value: 3, text: "Anambra" },
  { value: 4, text: "Bauchi" },
  { value: 5, text: "Bayelsa" },
  { value: 6, text: "Benue" },
  { value: 7, text: "Borno" },
  { value: 8, text: "Cross River" },
  { value: 9, text: "Delta" },
  { value: 10, text: "Ebonyi" },
  { value: 11, text: "Edo" },
  { value: 12, text: "Ekiti" },
  { value: 13, text: "Enugu" },
  { value: 14, text: "Federal Capital Territory" },
  { value: 15, text: "Gombe" },
  { value: 16, text: "Imo" },
  { value: 17, text: "Jigawa" },
  { value: 18, text: "Kaduna" },
  { value: 19, text: "Kano" },
  { value: 20, text: "Katsina" },
  { value: 21, text: "Kebbi" },
  { value: 22, text: "Kogi" },
  { value: 23, text: "Kwara" },
  { value: 24, text: "Lagos" },
  { value: 25, text: "Nasarawa" },
  { value: 26, text: "Niger" },
  { value: 27, text: "Ogun" },
  { value: 28, text: "Ondo" },
  { value: 29, text: "Osun" },
  { value: 30, text: "Oyo" },
  { value: 31, text: "Plateau" },
  { value: 32, text: "Rivers" },
  { value: 33, text: "Sokoto" },
  { value: 34, text: "Taraba" },
  { value: 35, text: "Yobe" },
  { value: 36, text: "Zamfara" }
];
