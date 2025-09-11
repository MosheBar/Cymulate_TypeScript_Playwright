import { test } from '@playwright/test';

export function step(message: string) {
  return function actualDecorator(originalMethod: any) {
    async function replacementMethod(this: any, ...args: any[]): Promise<any> {
      const paramNames = originalMethod
        .toString()
        .match(/\(([^)]*)\)/)[1]
        .split(',')
        .map((param: string) => param.trim());
      const params =
        args.length > 0
          ? ` | Parameters: ${paramNames.map((name: string, index: number) => `${name}: ${JSON.stringify(args[index])}`).join(', ')}`
          : '';
      const dynamicMessage = `Step: ${message}${params}`;
      return await test.step(dynamicMessage, async () => {
        return originalMethod.call(this, ...args);
      });
    }
    return replacementMethod;
  };
}

