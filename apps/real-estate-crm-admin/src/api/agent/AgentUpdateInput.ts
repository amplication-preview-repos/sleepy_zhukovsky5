import { AppointmentUpdateManyWithoutAgentsInput } from "./AppointmentUpdateManyWithoutAgentsInput";
import { PropertyUpdateManyWithoutAgentsInput } from "./PropertyUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutAgentsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  properties?: PropertyUpdateManyWithoutAgentsInput;
};
