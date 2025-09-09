import { IResTablePage } from '../work-page';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: Date;
  departments: string[];
  createdAt: string;
  updatedAt: string;
  login: string;
  email: string;
  password: string;
  roleId: string;
  telegramId: string | null;
}
export interface ICreateUser {
  firstName: string;
  lastName: string;
  middleName?: string | null;
  birthDate: string;
  departments: string[];
  login: string;
  email: string;
  password: string;
  telegramId: string | null;
  // creatorId: string;
}
export interface IUpdateUser extends ICreateUser {
  id: string;
}

export interface IRole {
  name: string;
}

export interface IGetUser {
  user: IUser;
  userRole: IRole;
}

export interface IUserRoles {
  id: string;
  name: string;
}
export interface ICreateDepartment {
  name: string;
  description: string;
}
export interface ICreateDepartmentResponse extends ICreateDepartment {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
export interface IDeleteDepartmentResponse {
  affected: number;
}


export interface IGetUser {
  name: string;
  page: number;
  size: number;
  totalCount: number;
  totalPages: number;
}

export interface IGetRole {
  name: string;
  page: number;
  size: number;
  totalCount: number;
  totalPages: number;
}

export interface IUserRole {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  creatorId: string;
}

export interface IUserDepartment {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  creatorId: string;
}
export interface IGetdepartment {
  name: string;
  page: number;
  size: number;
  totalCount: number;
  totalPages: number;
}
export interface IDeleteRole {
  userId: string;
  roleId: string;
}

export interface IDeleteUser {
  adminId: string;
  userId: string;
}

export interface IDeleteDepartment {
  adminId: string;
  departmentId: string;
}
export type TResGetUsers = IResTablePage<IUser>;
export type TResGetRoles = IResTablePage<IUserRole>;
export type TResGetDepartment = IResTablePage<IUserDepartment>;
