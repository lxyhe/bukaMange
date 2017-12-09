export class homeObj {
  imgUrl: string;
  clientName: string;
  clientType: string;
  clinetDemand: string;
  clientTime: string | number;
  status: number;
  details?: clientDetalis;
}
export class clientDetalis {
  imgUrl: string;
  clientName: string;
  clientType: number;
  clinetDemand: string;
  clientTime: string | number;
  status: number;
}


