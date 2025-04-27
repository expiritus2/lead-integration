export const cleanSensitiveData = (
  data: Record<string, any>,
  sensitiveProps = ['Authorization', 'authorization'],
) => {
  return Object.entries(data).reduce<Record<string, any>>(
    (acc: Record<string, any>, [key, val]) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      acc[key] = !sensitiveProps.includes(key) ? val : '***';

      return acc;
    },
    {},
  );
};
