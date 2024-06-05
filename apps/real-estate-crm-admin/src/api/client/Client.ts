import { Appointment } from "../appointment/Appointment";

export type Client = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  interest?: Array<"Option1">;
  lastName: string | null;
  phone: string | null;
  updatedAt: Date;
};
