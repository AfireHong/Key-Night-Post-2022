export const createThrottle = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  callback: Function,
  delay?: number,
  thisArg?: unknown
  // eslint-disable-next-line @typescript-eslint/ban-types
): Function => {
  let lastInvokeTime: number = Date.now();
  const _delay = Number(delay) || 200;
  return (...args: unknown[]): void => {
    const now = Date.now();
    if (now - _delay <= lastInvokeTime) {
      return;
    }
    lastInvokeTime = now;
    callback.call(thisArg, ...args);
  };
};
