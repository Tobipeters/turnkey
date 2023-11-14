export interface IService {
  title: string;
  details: string;
  link: string;
  photo: any;
  sub_services: ISubService[];
}

export interface ISubService {
  name: string;
  link: string;
}

export interface IGoal {
  title: string;
  details: string;
  icon: any;
}
