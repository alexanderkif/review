export interface Section {
  id: number;
  name: string;
  active: boolean;
  year: string;
  content: Content;
  images: string[];
  bg: BgStyles;
}

export interface Content {
  title: string;
  stack: string;
  description: string;
  github: string;
  deploy?: string;
}

export interface GradientObject {
  color: string;
  percent: number;
}

export interface BgStyles {
  color?: string;
  gradient?: GradientObject[];
  image?: string;
  wave?: {
    color1: string;
    color2: string;
  };
}
