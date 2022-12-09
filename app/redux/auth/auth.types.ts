export type TStepAuthLogin = {
  phoneNumber: number;
  password: string;
};
export type TAuthAllUserItem = {
  createdAt: string;
  phoneNumber: string;
  role: string;
  createdBy: string;
  name: string;
  userId: number;
};
export type TAuthAllMeItem = {
  createdAt: string;
  phoneNumber: string;
  role: string;
  createdBy: string;
  name: string;
  userId: number;
};
export type TCreateUser = {
  password: string;
  name: string;
  phoneNumber: string;
  roleName: string;
};
export interface IAuthMe {
  data: TAuthAllMeItem;
}
