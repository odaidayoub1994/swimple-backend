export interface Conditions {
  is_deleted?: boolean;
  email?: string;
  type?: string;
  id?: number;
  status?: string;
  address?: string;
  userId?: number;
}

export interface FindByIDConditions {
  is_deleted?: boolean;
  id: number;
}
