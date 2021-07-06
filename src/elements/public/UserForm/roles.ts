import { SVGTemplateResult, svg } from 'lit-html';

import { Rels } from '@foxy.io/sdk/backend';
import { Resource } from '@foxy.io/sdk/core';

type Role = {
  property: keyof Resource<Rels.User>;
  icon: SVGTemplateResult;
  key: string;
};

export const roles: Role[] = [
  {
    property: 'is_merchant',
    icon: svg`<svg class="fill-current h-full w-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.8961 8.89L21.7932 4.52C21.5622 3.62 20.7429 3 19.7871 3H5.1979C4.25259 3 3.42283 3.63 3.20225 4.52L2.0994 8.89C1.84732 9.91 2.07839 10.95 2.75061 11.77C2.83464 11.88 2.95017 11.96 3.0447 12.06V19C3.0447 20.1 3.99001 21 5.14538 21H19.8501C21.0055 21 21.9508 20.1 21.9508 19V12.06C22.0453 11.97 22.1609 11.88 22.2449 11.78C22.9171 10.96 23.1587 9.91 22.8961 8.89ZM19.7556 4.99L20.8584 9.36C20.9635 9.78 20.8689 10.2 20.5958 10.53C20.4488 10.71 20.1337 11 19.6085 11C18.9678 11 18.4111 10.51 18.3376 9.86L17.7284 5L19.7556 4.99ZM13.5481 5H15.6067L16.1739 9.52C16.2264 9.91 16.1004 10.3 15.8273 10.59C15.5962 10.85 15.2601 11 14.8295 11C14.1258 11 13.5481 10.41 13.5481 9.69V5ZM8.81106 9.52L9.38874 5H11.4474V9.69C11.4474 10.41 10.8697 11 10.0925 11C9.73536 11 9.40975 10.85 9.15767 10.59C8.89509 10.3 8.76905 9.91 8.81106 9.52ZM4.13705 9.36L5.1979 5H7.26706L6.65787 9.86C6.57384 10.51 6.02766 11 5.38696 11C4.87229 11 4.54669 10.71 4.41014 10.53C4.12655 10.21 4.03202 9.78 4.13705 9.36ZM5.14538 19V12.97C5.22941 12.98 5.30293 13 5.38696 13C6.30075 13 7.13052 12.64 7.73971 12.05C8.36992 12.65 9.21019 13 10.166 13C11.0798 13 11.8991 12.64 12.5082 12.07C13.1279 12.64 13.9682 13 14.9135 13C15.7958 13 16.6361 12.65 17.2663 12.05C17.8755 12.64 18.7052 13 19.619 13C19.7031 13 19.7766 12.98 19.8606 12.97V19H5.14538Z" /></svg>`,
    key: 'merchant',
  },
  {
    property: 'is_programmer',
    icon: svg`<svg class="fill-current h-full w-full" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V15C20 16.6569 18.6569 18 17 18H3C1.34315 18 0 16.6569 0 15V3ZM3 2C2.44772 2 2 2.44772 2 3V15C2 15.5523 2.44772 16 3 16H17C17.5523 16 18 15.5523 18 15V3C18 2.44772 17.5523 2 17 2H3ZM4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L9.70711 8.29289C9.89464 8.48043 10 8.73478 10 9C10 9.26522 9.89464 9.51957 9.70711 9.70711L5.70711 13.7071C5.31658 14.0976 4.68342 14.0976 4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929L7.58579 9L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289ZM9 13C9 12.4477 9.44771 12 10 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H10C9.44771 14 9 13.5523 9 13Z"/></svg>`,
    key: 'backend_developer',
  },
  {
    property: 'is_front_end_developer',
    icon: svg`<svg class="fill-current h-full w-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.2747 4.03847C14.8058 4.1902 15.1132 4.74368 14.9615 5.27472L10.9615 19.2747C10.8098 19.8058 10.2563 20.1132 9.72528 19.9615C9.19424 19.8098 8.88675 19.2563 9.03848 18.7253L13.0385 4.72528C13.1902 4.19424 13.7437 3.88675 14.2747 4.03847ZM6.70711 7.29289C7.09763 7.68342 7.09763 8.31658 6.70711 8.7071L3.41421 12L6.70711 15.2929C7.09763 15.6834 7.09763 16.3166 6.70711 16.7071C6.31658 17.0976 5.68342 17.0976 5.29289 16.7071L1.29289 12.7071C0.902369 12.3166 0.902369 11.6834 1.29289 11.2929L5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289ZM17.2929 7.29289C17.6834 6.90237 18.3166 6.90237 18.7071 7.29289L22.7071 11.2929C22.8946 11.4804 23 11.7348 23 12C23 12.2652 22.8946 12.5196 22.7071 12.7071L18.7071 16.7071C18.3166 17.0976 17.6834 17.0976 17.2929 16.7071C16.9024 16.3166 16.9024 15.6834 17.2929 15.2929L20.5858 12L17.2929 8.70711C16.9024 8.31658 16.9024 7.68342 17.2929 7.29289Z" /></svg>`,
    key: 'frontend_developer',
  },
  {
    property: 'is_designer',
    icon: svg`<svg class="fill-current h-full w-full" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 20C4.49 20 0 15.51 0 10C0 4.49 4.49 0 10 0C15.51 0 20 4.04 20 9C20 12.31 17.31 15 14 15H12.23C11.95 15 11.73 15.22 11.73 15.5C11.73 15.62 11.78 15.73 11.86 15.83C12.27 16.3 12.5 16.89 12.5 17.5C12.5 18.88 11.38 20 10 20ZM10 2C5.59 2 2 5.59 2 10C2 14.41 5.59 18 10 18C10.28 18 10.5 17.78 10.5 17.5C10.5 17.34 10.42 17.22 10.36 17.15C9.95 16.69 9.73 16.1 9.73 15.5C9.73 14.12 10.85 13 12.23 13H14C16.21 13 18 11.21 18 9C18 5.14 14.41 2 10 2Z" /><path d="M4.5 11C5.32843 11 6 10.3284 6 9.5C6 8.67157 5.32843 8 4.5 8C3.67157 8 3 8.67157 3 9.5C3 10.3284 3.67157 11 4.5 11Z" /><path d="M7.5 7C8.32843 7 9 6.32843 9 5.5C9 4.67157 8.32843 4 7.5 4C6.67157 4 6 4.67157 6 5.5C6 6.32843 6.67157 7 7.5 7Z" /><path d="M12.5 7C13.3284 7 14 6.32843 14 5.5C14 4.67157 13.3284 4 12.5 4C11.6716 4 11 4.67157 11 5.5C11 6.32843 11.6716 7 12.5 7Z" /><path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" /></svg>`,
    key: 'designer',
  },
];
