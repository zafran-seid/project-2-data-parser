export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

export interface Order {
  id: string;
  userId: string;
  amount: number;
  status: "Pending" | "Paid" | "Cancelled";
  createdAt: string;
}
