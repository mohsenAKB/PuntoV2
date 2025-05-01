import { ChangeProfilePayload } from './change-profile-payload';

export enum EventTopic {
  ChangeProfile = 'ChangeProfile',
}

export type EventPayloadsMapKey = keyof EventPayloads;

export interface EventPayloads {
  [EventTopic.ChangeProfile]: ChangeProfilePayload;
}
