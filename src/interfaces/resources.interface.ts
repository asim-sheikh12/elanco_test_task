export interface IResource {
  names: string[];
}
export interface IResourceDetails {
  id: number;
  ConsumedQuantity: string;
  Cost: string;
  Date: string;
  InstanceId: string;
  MeterCategory: string;
  ResourceGroup: string;
  ResourceLocation: string;
  Tags: {
    appName: string;
    environment: string;
    businessUnit: string;
  };
  UnitOfMeasure: string;
  Location: string;
  ServiceName: string;
}
