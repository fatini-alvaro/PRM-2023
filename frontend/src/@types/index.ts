export interface ICredential {
  username: string;
  password: string;
}

export interface IUser {
  id?: number;
  fullname: string;
  username: string;
  password?: string;
  description?: string;
}