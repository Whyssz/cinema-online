export const IS_SERVER = typeof window === 'undefined';
export const IS_CLIENT = typeof window !== 'undefined';
export const IS_PRODUCTION = process.env.APP_ENV === 'production';

export const accentColor = '#E30B13';
export const bgColor = '#181B1E';
