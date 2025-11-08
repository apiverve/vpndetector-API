declare module '@apiverve/vpndetector' {
  export interface vpndetectorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface vpndetectorResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class vpndetectorWrapper {
    constructor(options: vpndetectorOptions);

    execute(callback: (error: any, data: vpndetectorResponse | null) => void): Promise<vpndetectorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: vpndetectorResponse | null) => void): Promise<vpndetectorResponse>;
    execute(query?: Record<string, any>): Promise<vpndetectorResponse>;
  }
}
