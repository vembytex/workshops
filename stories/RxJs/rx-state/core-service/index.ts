export { Service } from "./service/Service";

export type { SetStateAction, Selector } from "./service/Service";

export { EventHub } from "./event/EventHub";

export {
  ActionEventHub,
  ScopedActionEventHub,
  ActionStatus,
} from "./event/ActionEventHub";

export type { IActionEventHubMessage } from "./event/ActionEventHub";

export type {
  IEmitableObservable,
  ActionDecorator,
  ServiceEventKeys,
  EventStatusKeys,
  NoneEmittableKeys,
  OmitNoneEmittable,
  CanEmit,
  IsEmitableMethod,
} from "./decorators/Action";

export { Action } from "./decorators/Action";

export {
  ServiceDescriptor,
  DESCRIPTOR,
  MEMBERS,
  PartialService,
} from "./service/ServiceDescriptor";

export type {
  InferService,
  IPropertyDescriptor,
} from "./service/ServiceDescriptor";

export { ServiceCollection } from "./service/ServiceCollection";

export type { ICollection } from "./service/ServiceCollection";

export type {
  OptimisticSource,
  StateAccept,
  StateCancel,
  StateReducer,
  IOptimisticUpdateConfig,
} from "./service/State";

export { State } from "./service/State";

export {
  EventKind,
  dispatchEvent,
  dispatchActionEvent,
} from "./operators/dispatchEvent";

export {
  takeAll,
  takeLatest,
  headAndTail,
} from "./decorators/execution/operators";
export type {
  IExecutionOperator,
  ExecutionOperatorFunction,
} from "./decorators/execution/ActionHandler";
export { ActionExecution } from "./decorators/execution/ActionExecution";
export type { IActionExecutionOptions } from "./decorators/execution/ActionExecution";
