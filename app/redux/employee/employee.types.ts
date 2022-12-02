export type TEmployeeItem = {
  employeeId: number;
  createdAt: string;
  createdBy: string;
  name: string;
  phoneNumber: string;
  comment: string;
  balance: {
    amount: number;
  };
};
export interface IEmployee {
  data: TEmployeeItem[];
  message: string;
}
