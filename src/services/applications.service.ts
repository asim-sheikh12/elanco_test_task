import type { IApplication, IApplicationDetails } from '../interfaces';

import { ApiVersions, Associations } from '../constants';
import { apiService } from './api.service';

/**
 * @description Get all /applications
 * @param {}
 * @return {IApplication[]}
 * @url /applications
 */
export const getApplicationData = (): Promise<IApplication[]> => {
  return apiService.get<IApplication[], object>(
    Associations.ALL_ASSOCIATIONS,
    ApiVersions.V1
  );
};
export const getApplicationDetails = (
  applicationName: string
): Promise<IApplicationDetails[]> => {
  return apiService.get<IApplicationDetails[], object>(
    `${Associations.ALL_ASSOCIATIONS}/${applicationName}`,
    ApiVersions.V1
  );
};
