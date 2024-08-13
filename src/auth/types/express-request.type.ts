import { Request } from 'express';

type AdminType = {
  id: number;
  login: string;
  group: string;
};

export type ExpressRequestType = Request & {
  user?: AdminType;
};
