import { colorConfig } from '@/config/colors.config';

export const getColor = (color: keyof typeof colorConfig) => colorConfig[color];
