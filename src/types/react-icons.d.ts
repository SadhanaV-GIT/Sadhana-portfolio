declare module 'react-icons/lib/esm/iconBase' {
  import { FC, SVGAttributes } from 'react';
  export interface IconBaseProps extends SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }
  export type IconType = FC<IconBaseProps>;
}

declare module 'react-icons/lib/iconBase' {
  export { IconType, IconBaseProps } from 'react-icons/lib/esm/iconBase';
}
