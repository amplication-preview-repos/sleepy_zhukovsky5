import { Appointment } from "../appointment/Appointment";
import { Property } from "../property/Property";

export type Agent = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  properties?: Array<Property>;
  updatedAt: Date;
};
