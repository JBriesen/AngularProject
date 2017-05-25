import { StatsService } from './stats.service';

export function statsServiceFactory(i: any) {
  return i.get('StatsService');
}
export const StatsServiceProvider = {
  provide: StatsService,
  useFactory: statsServiceFactory,
  deps: ['$injector']
};