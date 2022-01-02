import EventObserver from '../helpers/EventObserver';
import { ModelOptions, ModelCallback } from './types';
import defaultOptions from './default';
import { calcDifference } from '../helpers/utils';

export default class Model extends EventObserver<ModelCallback, ModelOptions> {
  private options = {} as ModelOptions;

  constructor(options?: ModelOptions) {
    super();

    if (options) {
      this.setOptions(options);
    } else {
      this.setOptions(defaultOptions);
    }
  }

  getOptions(): ModelOptions {
    return { ...this.options };
  }

  updateOptions(options: ModelOptions): void {
    this.setOptionsWithoutBroadcast(options);
  }

  setOptions(options: ModelOptions): void {
    const newOptions = calcDifference(this.options, options);
    this.validateOptions(newOptions);
    this.setOptionsWithoutBroadcast(newOptions);
    this.broadcast(options);
  }

  private setOptionsWithoutBroadcast(options: Partial<ModelOptions>) {
    this.options = { ...this.options, ...options };
    // TODO
  }

  private validateOptions(options: Partial<ModelOptions>): void {
    const newOptions = { ...this.options, ...options };
    const {
      min,
      max,
    } = newOptions;

    if (min >= max) {
      throw new Error('min cannot be greater than or equal to max');
    }
    if (max <= min) {
      throw new Error('max cannot be less than or equal to min');
    }
    // TODO
  }
}
