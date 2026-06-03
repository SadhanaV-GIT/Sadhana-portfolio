/// <reference types="react-scripts" />

declare module 'react-icons/fi' {
  import { FC, SVGAttributes } from 'react';
  interface IconProps extends SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }
  type Icon = FC<IconProps>;
  export const FiSun: Icon;
  export const FiMoon: Icon;
  export const FiMenu: Icon;
  export const FiX: Icon;
  export const FiGithub: Icon;
  export const FiLinkedin: Icon;
  export const FiMail: Icon;
  export const FiDownload: Icon;
  export const FiExternalLink: Icon;
  export const FiBriefcase: Icon;
  export const FiCalendar: Icon;
  export const FiMapPin: Icon;
  export const FiAward: Icon;
  export const FiBook: Icon;
  export const FiTarget: Icon;
  export const FiUser: Icon;
  export const FiSend: Icon;
  export const FiArrowUp: Icon;
}

declare module 'react-icons/si' {
  import { FC, SVGAttributes } from 'react';
  interface IconProps extends SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }
  type Icon = FC<IconProps>;
  export const SiLeetcode: Icon;
  export const SiHackerrank: Icon;
}
