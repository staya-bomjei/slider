import Progress from './subviews/Progress';
import Scale from './subviews/Scale';
import ScaleItem from './subviews/ScaleItem';
import Thumb from './subviews/Thumb';
import Tooltip from './subviews/Tooltip';
import Track from './subviews/Track';

type ProgressOptions = {
  from: number,
  to: number,
  visible: boolean,
};

type ScaleOptions = {
  min: number,
  max: number,
  step: number,
  strings?: Array<string>,
  partsCounter: number,
  visible: boolean,
};

type ScaleItemOptions = {
  position: number,
  text: string,
};

type ThumbOptions = {
  position: number,
  visible: boolean,
  isHigher: boolean,
};

type TooltipOptions = {
  text: string,
  visible: boolean,
};

type ViewEvent = {
  view: Thumb | ScaleItem | Track,
  event: MouseEvent,
}

// Это объявление типа, поэтому переменная не используется
// eslint-disable-next-line no-unused-vars
type EventCallback = (data: ViewEvent) => void;

type ViewOptions = {
  isVertical: boolean,
  progress: ProgressOptions,
  scale: ScaleOptions,
  leftThumb: ThumbOptions,
  rightThumb: ThumbOptions,
  leftTooltip: TooltipOptions,
  rightTooltip: TooltipOptions,
};

// Это объявление типа, поэтому переменная не используется
// eslint-disable-next-line no-unused-vars
type ViewCallback = (data: ViewOptions) => void;

type SubViews = {
  track: Track,
  progress: Progress,
  scale: Scale,
  leftThumb: Thumb,
  rightThumb: Thumb,
  leftTooltip: Tooltip,
  rightTooltip: Tooltip,
};

interface IView {
  readonly el: HTMLElement;
}

export {
  ProgressOptions,
  ScaleOptions,
  ScaleItemOptions,
  ThumbOptions,
  TooltipOptions,
  ViewEvent,
  EventCallback,
  ViewOptions,
  ViewCallback,
  SubViews,
  IView,
};