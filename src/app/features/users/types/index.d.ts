import type { UserPayload} from "../../thunks/fetchUsers";

export type User = UserPayload & { archived?: boolean; hidden?: boolean };
