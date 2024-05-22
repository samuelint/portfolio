import { twMerge } from 'tailwind-merge';


interface Props {
  className?: string
}

export function QuebecIcon({ className }: Props = {}) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1200" 
      height="800" 
      viewBox="0 0 9600 6400"
      className={twMerge('size-12', className)}
    >
      <title>Québec</title>
      <path fill="#fff" d="m0 0h9600v6400H0z"/>
      <g id="h">
        <g id="q">
          <path fill="#003da5" d="m4000 0v2400H0V0zm-1691 1622v-129h-115c0-66 32-130 66-150 20-17 65-25 104-5 51 29 54 113 28 151 243-45 219-280 136-365-67-69-140-79-196-58-128 46-214 199-218 427h-67c0-207 36-273 130-534 48-123 19-275-65-415-31-50-69-95-112-144-43 49-81 94-112 144-84 140-113 292-65 415 94 261 130 327 130 534h-67c-4-228-90-381-218-427-56-21-129-11-196 58-83 85-107 320 136 365-26-38-23-122 28-151 39-20 84-12 104 5 34 20 66 84 66 150h-115v129h239c-3 67-39 119-106 148 8 28 49 85 105 81 11 60 21 94 71 149 50-55 60-89 71-149 56 4 97-53 105-81-67-29-103-81-106-148z"/>
        </g>
        <use xlinkHref="#q" x="5600"/>
      </g>
      <use xlinkHref="#h" y="4000"/>
    </svg>
  );
}


