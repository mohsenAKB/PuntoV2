import { EventPayloads, EventPayloadsMapKey, EventTopic } from './@Types/event';
import { EventEmitter } from 'events';

export class Event {
  private static instance: EventEmitter;

  // Private constructor to prevent direct instantiation
  private constructor() {
    // Initialize any properties or perform setup here
  }

  // Static method to provide access to the single instance
  public static getInstance(): EventEmitter {
    if (!Event.instance) {
      Event.instance = new EventEmitter();
    }
    return Event.instance;
  }

  public static emit<C extends EventPayloadsMapKey>(topic: C, message: EventPayloads[C]) {
    Event.getInstance().emit(topic, message);
  }

  public static on<C extends EventPayloadsMapKey>(topic: C, cb: (args: EventPayloads[C]) => void) {
    Event.getInstance().on(topic, cb);
  }

  public static off(topic: EventTopic, cb: (args: any) => void) {
    Event.getInstance().off(topic, cb);
  }
}
