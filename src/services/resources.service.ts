import type { IResource, IResourceDetails } from '../interfaces';

import { ApiVersions, Resources } from '../constants';
import { apiService } from './api.service';

/**
 * @description Get all /applications
 * @param {}
 * @return {IResource[]}
 * @url /resources
 */
export const getResourceData = (): Promise<IResource[]> => {
  return apiService.get<IResource[], object>(
    Resources.ALL_RESOURCES,
    ApiVersions.V1
  );
};
export const getResourceDetails = (
  resourceName: string
): Promise<IResourceDetails[]> => {
  return apiService.get<IResourceDetails[], object>(
    `${Resources.ALL_RESOURCES}/${resourceName}`,
    ApiVersions.V1
  );
};
