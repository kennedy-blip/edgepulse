export type Health='HEALTHY'|'DEGRADED'|'DOWN'
export type Region={id:string;name:string;location:string;weight:number;rtt:number;health:Health;fallback:string;flag:string}
export type Policy={id:string;clientRegion:string;primary:string;pathPrefix:string;enabled:boolean}
export type Resolution={requestId:string;clientRegion:string;path:string;policyId:string;primaryPop:string;selectedPop:string|null;failoverChain:string[];failedOver:boolean;status:string;computedRttMs:number|null;cacheStatus:string;evaluatedAt:string}
export type AuditEntry={id:string;time:string;path:string;origin:string;primary:string;selected:string|null;rtt:number|null;failedOver:boolean;status:string}
