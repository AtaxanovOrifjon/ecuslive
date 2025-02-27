export const  Icons = {
   likeIcon:(props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path fill="#fff" fillOpacity={0} d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
      <path fill="none" d="M0 0h32v32H0z" />
      <g clipPath="url(#a)">
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M6 11.95c0 2.2.87 7.44 9.48 12.74.16.09.33.14.52.14.18 0 .35-.05.51-.14C25.12 19.39 26 14.15 26 11.95 26 9.21 23.76 7 21 7c-2.77 0-5 3-5 3s-2.24-3-5-3c-2.77 0-5 2.21-5 4.95Z"
        />
      </g>
    </svg>
  ),
  cartIcon:(props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path fill="#fff" fillOpacity={0} d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
      <path fill="none" d="M0 0h32v32H0z" />
      <g
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={1.5}
        clipPath="url(#a)"
      >
        <path d="M11 27c-.56 0-1-.45-1-1 0-.56.44-1 1-1 .55 0 1 .44 1 1 0 .55-.45 1-1 1ZM25 27c-.56 0-1-.45-1-1 0-.56.44-1 1-1 .55 0 1 .44 1 1 0 .55-.45 1-1 1Z" />
        <path strokeLinecap="round" d="M3 5h4l3 17h16" />
        <path
          strokeLinecap="round"
          d="M10 16.66h15.59c.11 0 .22-.04.31-.11s.15-.18.18-.29l1.8-9a.545.545 0 0 0-.11-.42c-.04-.05-.1-.1-.17-.13a.537.537 0 0 0-.21-.05H8"
        />
      </g>
    </svg>
  ),
  quetIcon:(props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path fill="#fff" fillOpacity={0} d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
      <path fill="none" d="M0 0h24v24H0z" />
      <g
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={1.5}
        clipPath="url(#a)"
      >
        <path d="M21.25 13.03C19.76 14.98 16.18 19 12 19c-4.19 0-7.77-4.02-9.26-5.97-.23-.29-.36-.66-.36-1.03 0-.38.13-.75.36-1.04C4.23 9.01 7.81 5 12 5c4.18 0 7.76 4.01 9.25 5.96.48.62.48 1.45 0 2.07Z" />
        <path d="M12 15c-1.66 0-3-1.35-3-3 0-1.66 1.34-3 3-3 1.65 0 3 1.34 3 3 0 1.65-1.35 3-3 3Z" />
      </g>
    </svg>
  ),
  search:(props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path fill="#fff" fillOpacity={0} d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
      <path fill="none" d="M0 0h24v24H0z" />
      <g clipPath="url(#a)">
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={1.5}
          d="m20 20-3.78-3.79m-.01 0a7.12 7.12 0 0 1-5.06 2.1c-1.9 0-3.72-.75-5.06-2.1A7.151 7.151 0 0 1 4 11.15c0-1.9.75-3.72 2.09-5.06A7.151 7.151 0 0 1 11.15 4c1.9 0 3.72.75 5.06 2.09a7.12 7.12 0 0 1 2.1 5.06c0 1.9-.75 3.72-2.1 5.06Z"
        />
      </g>
    </svg>
  ),
  deliverIcon:(props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      fill="none"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path fill="#fff" fillOpacity={0} d="M0 0h40v40H0z" />
        </clipPath>
      </defs>
      <path fill="none" d="M0 0h40v40H0z" />
      <g
        stroke="#FAFAFA"
        strokeLinejoin="round"
        strokeWidth={2}
        clipPath="url(#a)"
      >
        <path d="M11.66 31.66c-1.84 0-3.33-1.49-3.33-3.33S9.82 25 11.66 25 15 26.49 15 28.33s-1.5 3.33-3.34 3.33ZM28.33 31.66c-1.84 0-3.33-1.49-3.33-3.33S26.49 25 28.33 25s3.33 1.49 3.33 3.33-1.49 3.33-3.33 3.33Z" />
        <path d="M8.33 28.33H6.99c-1.1 0-2-.9-2-2v-4.67M3.33 8.33h16.33c1.11 0 2 .89 2 2v18m-6.66 0h10m6.66 0H33c1.1 0 2-.9 2-2v-8l-4.42-7.36a1.98 1.98 0 0 0-1.72-.97h-7.2M35 18.33H21.66" />
        <path d="M8 28H6.66c-1.1 0-2-.9-2-2v-4.67M3 8h16.33a2 2 0 0 1 2 2v18M15 28h9.66M32 28h.66a2 2 0 0 0 2-2v-8l-4.42-7.37c-.36-.6-1.01-.97-1.71-.97h-7.2M34.66 18H21.33" />
        <path
          strokeLinecap="round"
          d="M5 11.81h6.66M1.81 15.45h6.67M5 19.09h6.66"
        />
      </g>
    </svg>
  ),
  secoureIcon: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      fill="none"
      {...props}
    >
      <path fill="none" d="M0 0h40v40H0z" />
      <path
        fill="#FAFAFA"
        d="M20 37.93c-1.82 0-3.62-.54-5.04-1.58L7.8 31c-1.9-1.42-3.39-4.39-3.39-6.74v-12.4c0-2.57 1.89-5.3 4.3-6.2l8.32-3.12c1.65-.61 4.25-.61 5.9 0l8.32 3.12c2.41.9 4.3 3.63 4.3 6.2v12.39c0 2.36-1.49 5.31-3.39 6.73L25 36.33c-1.39 1.06-3.19 1.6-5 1.6ZM17.91 4.89 9.6 8.01c-1.42.53-2.67 2.34-2.67 3.87v12.38c0 1.59 1.12 3.8 2.37 4.74l7.16 5.35c1.92 1.43 5.15 1.43 7.09 0L30.71 29c1.27-.96 2.37-3.15 2.37-4.74v-12.4c0-1.51-1.25-3.32-2.67-3.86L22.1 4.88c-1.14-.4-3.07-.4-4.19.01Z"
      />
      <path
        stroke="#FAFAFA"
        d="M14.96 36.35 7.8 31c-1.9-1.42-3.39-4.39-3.39-6.74v-12.4c0-2.57 1.89-5.3 4.3-6.2l8.32-3.12c1.65-.61 4.25-.61 5.9 0l8.32 3.12c2.41.9 4.3 3.63 4.3 6.2v12.39c0 2.36-1.49 5.31-3.39 6.73L25 36.33c-1.39 1.06-3.19 1.6-5 1.6-1.82 0-3.62-.54-5.04-1.58ZM9.6 8.01c-1.42.53-2.67 2.34-2.67 3.87v12.38c0 1.59 1.12 3.8 2.37 4.74l7.16 5.35c1.92 1.43 5.15 1.43 7.09 0L30.71 29c1.27-.96 2.37-3.15 2.37-4.74v-12.4c0-1.51-1.25-3.32-2.67-3.86L22.1 4.88c-1.14-.4-3.07-.4-4.19.01L9.6 8.01Z"
      />
      <path
        fill="#FAFAFA"
        d="M17.76 23.71c-.31 0-.63-.11-.88-.36l-2.68-2.69a1.25 1.25 0 0 1 0-1.77c.48-.48 1.28-.48 1.76 0l1.8 1.81 6.29-6.29c.48-.48 1.28-.48 1.76 0 .49.48.49 1.29 0 1.77l-7.16 7.17c-.25.25-.57.36-.89.36Z"
      />
      <path
        stroke="#FAFAFA"
        d="m16.88 23.35-2.68-2.69a1.25 1.25 0 0 1 0-1.77c.48-.48 1.28-.48 1.76 0l1.8 1.81 6.29-6.29c.48-.48 1.28-.48 1.76 0 .49.48.49 1.29 0 1.77l-7.16 7.17c-.25.25-.57.36-.89.36-.31 0-.63-.11-.88-.36Z"
      />
    </svg>
  ),
  kostemourIcon:(props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      fill="none"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path fill="#fff" fillOpacity={0} d="M0 0h40v40H0z" />
        </clipPath>
      </defs>
      <g stroke="#FFF" strokeLinejoin="round" strokeWidth={2} clipPath="url(#a)">
        <path d="M13.33 25v3.33c0 1.84-1.49 3.33-3.34 3.33-1.84 0-3.33-1.49-3.33-3.33V25c0-1.85 1.49-3.34 3.33-3.34 1.85 0 3.34 1.49 3.34 3.34ZM33.33 25v3.33c0 1.84-1.49 3.33-3.34 3.33-1.84 0-3.33-1.49-3.33-3.33V25c0-1.85 1.49-3.34 3.33-3.34 1.85 0 3.34 1.49 3.34 3.34Z" />
        <path
          strokeLinecap="round"
          d="M6.66 25v-5c0-3.54 1.41-6.93 3.91-9.43s5.89-3.91 9.42-3.91c3.54 0 6.93 1.41 9.43 3.91s3.91 5.89 3.91 9.43v5M30 31.66c0 1.33-1.06 2.6-2.93 3.54-1.88.93-4.42 1.46-7.07 1.46"
        />
      </g>
    </svg>
  ),
  linkedinIcon: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path fill="#fff" fillOpacity={0} d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path
          fill="#FFF"
          d="M11.5 9.04c.91-.93 2.11-1.54 3.5-1.54 1.45 0 2.85.57 3.88 1.61A5.47 5.47 0 0 1 20.5 13v7.5h-2V13c0-.93-.37-1.82-1.03-2.48A3.49 3.49 0 0 0 15 9.5c-.93 0-1.82.36-2.48 1.02-.66.66-1.02 1.55-1.02 2.48v7.5h-2V8h2v1.04ZM4.5 6c-.4 0-.78-.16-1.07-.44a1.53 1.53 0 0 1 0-2.13 1.53 1.53 0 0 1 2.13 0c.28.29.44.67.44 1.07 0 .39-.16.77-.44 1.06-.29.28-.67.44-1.06.44Zm-1 2h2v12.5h-2V8Z"
        />
      </g>
    </svg>
  ),
  instagramIcon:(props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path fill="#fff" fillOpacity={0} d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path
          stroke="#FFF"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 3c-1.07 0-2.08.42-2.83 1.17S3 5.93 3 7v10c0 1.06.42 2.07 1.17 2.82S5.93 21 7 21h10c1.06 0 2.07-.43 2.82-1.18A3.99 3.99 0 0 0 21 17V7c0-1.07-.43-2.08-1.18-2.83A3.98 3.98 0 0 0 17 3H7Z"
        />
        <path
          stroke="#FFF"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14.82 14.82A3.99 3.99 0 0 0 16 12c0-1.07-.43-2.08-1.18-2.83A3.98 3.98 0 0 0 12 8c-1.07 0-2.08.42-2.83 1.17S8 10.93 8 12c0 1.06.42 2.07 1.17 2.82S10.93 16 12 16c1.06 0 2.07-.43 2.82-1.18Z"
        />
        <path
          fill="#FFF"
          d="M17.5 7.5c.26 0 .51-.11.7-.3.19-.19.3-.44.3-.7a1 1 0 0 0-.3-.71.984.984 0 0 0-.7-.29.99.99 0 0 0-1 1c0 .26.1.51.29.7a1 1 0 0 0 .71.3Z"
        />
      </g>
    </svg>
  ),
  twitterIcon:(props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path fill="#fff" fillOpacity={0} d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
      <path fill="none" d="M0 0h24v24H0z" />
      <g clipPath="url(#a)">
        <path
          fill="#FFF"
          d="M15.9 6c-.76 0-1.49.29-2.03.83-.54.53-.86 1.25-.87 2.01l-.03 1.58c0 .08-.02.17-.06.24-.03.08-.08.15-.15.2-.06.06-.14.1-.22.12-.08.03-.16.03-.25.02l-1.56-.21c-2.05-.28-4.02-1.23-5.91-2.8-.6 3.31.57 5.6 3.38 7.37l1.75 1.1c.08.05.15.12.2.21.05.08.08.18.08.28 0 .1-.02.19-.06.28a.51.51 0 0 1-.19.22l-1.59 1.17c.95.06 1.85.01 2.6-.13 4.71-.95 7.85-4.5 7.85-10.35 0-.48-1.01-2.14-2.94-2.14ZM11 8.81c.02-.97.32-1.9.87-2.7.54-.79 1.31-1.41 2.21-1.76.89-.36 1.88-.45 2.82-.25.94.19 1.81.67 2.49 1.35.71 0 1.31.18 2.66-.64-.33 1.64-.5 2.35-1.21 3.33 0 7.64-4.7 11.36-9.46 12.31-3.27.65-8.02-.42-9.38-1.84.69-.06 3.51-.36 5.14-1.55-1.38-.91-6.87-4.14-3.26-12.83 1.69 1.98 3.41 3.33 5.15 4.04 1.16.47 1.44.46 1.97.54Z"
        />
        <path
          fill="#000"
          fillRule="evenodd"
          d="M19.39 5.45A4.925 4.925 0 0 0 16.9 4.1c-.94-.2-1.93-.11-2.82.25-.9.35-1.67.97-2.21 1.76-.51.74-.81 1.6-.86 2.5-.01.06-.01.13-.01.2l-.2-.03c-.42-.05-.77-.1-1.77-.51-1.69-.69-3.36-1.98-5.01-3.87l-.14-.17-.09.21c-3.3 8.19 1.57 11.45 3.17 12.5.01.01.03.02.04.03.05.03.1.06.14.09l-.18.12c-1.48.98-3.77 1.31-4.7 1.4-.11.01-.2.02-.26.03.05.06.12.12.19.18 1.58 1.33 6.06 2.28 9.19 1.66 4.76-.95 9.46-4.67 9.46-12.31.67-.93.86-1.61 1.16-3.07.02-.08.04-.17.05-.26-.08.04-.15.09-.23.13-.99.56-1.56.54-2.11.52-.11-.01-.21-.01-.32-.01Zm2.38-.25q-.57.29-1.05.4-.27.05-.55.06-.16.01-.46 0-.22-.01-.32-.01h-.09l-.06-.06q-.24-.24-.52-.45-.27-.21-.57-.37-.31-.17-.63-.29-.32-.12-.66-.19t-.68-.09q-.35-.02-.69.01-.35.03-.68.11-.33.08-.66.21-.32.13-.62.3-.29.18-.56.39-.27.22-.51.47-.23.25-.43.53-.2.29-.35.6-.15.31-.26.64-.1.33-.16.66-.05.3-.06.61l.36.36-.59-.08-.18-.03q-.42-.05-.7-.12-.44-.12-1.14-.41-2.54-1.04-5.01-3.84-1.08 2.72-1.07 5.02.01 1.75.65 3.23.09.21.2.42.65 1.27 1.78 2.3.41.38.89.73.28.2.72.49.1.06.14.09l.24.16-.23.17q-1.08.79-3 1.23-.66.16-1.37.26-.21.03-.41.05.45.33 1.17.64 1.03.43 2.36.71 1.36.28 2.72.32 1.45.05 2.61-.18 1.67-.33 3.13-1.07l.3-.16q1.29-.7 2.32-1.68.34-.32.66-.67.25-.29.48-.59 1.02-1.33 1.61-3 .8-2.22.8-4.94v-.07l.04-.05q.26-.35.43-.68.16-.32.29-.68.11-.34.23-.83.05-.23.14-.63Zm-7.58 1.11q-.24.16-.46.37-.22.22-.39.46-.17.25-.29.53-.12.28-.18.57-.06.3-.07.6l-.03 1.57q0 .05-.01.08-.01.05-.03.09-.01.04-.04.07l-.06.06q-.03.03-.07.05-.03.02-.07.03-.05.01-.09.02-.04 0-.08-.01l-1.56-.21q-2.99-.41-5.81-2.75l-.26-.22-.07.33q-.45 2.52.43 4.39.86 1.81 3.05 3.19l1.74 1.1q.05.03.08.06l.06.08q.02.04.04.09.01.04.01.09 0 .05-.01.1t-.03.09q-.02.05-.05.09-.03.03-.07.06l-2.04 1.49.55.04q1.5.09 2.64-.14 1.82-.36 3.28-1.21.96-.56 1.73-1.3.43-.42.81-.89 1.07-1.36 1.63-3.13.57-1.82.57-4.01 0-.25-.21-.64-.23-.4-.6-.76-.33-.31-.71-.53-.13-.07-.27-.13-.22-.1-.46-.16-.43-.12-.89-.12-.3 0-.6.05-.29.06-.57.18-.29.11-.54.28ZM15.9 6c-.76 0-1.49.29-2.03.83-.54.53-.86 1.25-.87 2.01l-.03 1.58c0 .08-.02.17-.06.24-.03.08-.08.15-.15.2-.06.06-.14.1-.22.12-.08.03-.16.03-.25.02l-1.56-.21C8.74 10.52 6.83 9.62 5 8.14l-.18-.15c-.01.08-.03.15-.04.23-.5 3.19.68 5.41 3.42 7.14l1.75 1.1c.08.05.15.12.2.21.05.08.08.18.08.28 0 .1-.02.19-.06.28a.51.51 0 0 1-.19.22l-1.33.98-.26.19c.11 0 .22.01.32.01.83.03 1.61-.01 2.28-.14 4.71-.95 7.85-4.5 7.85-10.35 0-.48-1.01-2.14-2.94-2.14Z"
        />
      </g>
    </svg>
  ),
  facebookIcon:(props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path fill="#fff" fillOpacity={0} d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path
          fill="#FFF"
          d="M13 10h4.5l-.5 2h-4v9h-2v-9H7v-2h4V8.12c0-1.78.18-2.43.53-3.08.34-.64.87-1.17 1.51-1.51.65-.35 1.3-.53 3.08-.53.53 0 .98.04 1.38.14V5h-1.38c-1.32 0-1.72.07-2.13.29-.31.16-.53.39-.7.7-.22.41-.29.81-.29 2.13V10Z"
        />
      </g>
    </svg>
  ),
  phoneIcon:(props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={56}
      height={56}
      fill="none"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path fill="#fff" fillOpacity={0} d="M0 0h56v56H0z" />
        </clipPath>
      </defs>
      <g stroke="#000" clipPath="url(#a)">
        <path
          strokeLinejoin="round"
          strokeWidth={2}
          d="M38.93 6.12c1.51 0 2.74 1.22 2.74 2.73v38.29c0 1.51-1.23 2.73-2.74 2.73H17.06c-1.51 0-2.74-1.22-2.74-2.73V8.85c0-1.51 1.23-2.73 2.74-2.73h21.87Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M25.66 7h5.47"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M28 44v.03"
        />
        <path strokeWidth={2} d="M15.167 39.833h25.666" />
      </g>
    </svg>
  ),
  kampyuterIcon:(props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={56}
      height={56}
      fill="none"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path fill="#fff" fillOpacity={0} d="M0 0h56v56H0z" />
        </clipPath>
      </defs>
      <path fill="none" d="M0 0h56v56H0z" />
      <g stroke="#000" strokeWidth={2} clipPath="url(#a)">
        <path
          strokeLinejoin="round"
          d="M46.66 9.33c1.29 0 2.34 1.04 2.34 2.33V35a2.34 2.34 0 0 1-2.34 2.33H9.33C8.04 37.33 7 36.28 7 35V11.66c0-1.29 1.04-2.33 2.33-2.33h37.33Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.33 46.66h23.33M21 37.33v9.33M35 37.33v9.33"
        />
        <path strokeLinecap="round" d="M8 32h40" />
      </g>
    </svg>
  ),
  smartchIcon:(props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={56}
      height={56}
      fill="none"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path fill="#fff" fillOpacity={0} d="M0 0h56v56H0z" />
        </clipPath>
      </defs>
      <g stroke="#000" strokeWidth={2} clipPath="url(#a)">
        <path
          strokeLinejoin="round"
          d="M35 14c3.86 0 7 3.13 7 7v14c0 3.86-3.14 7-7 7H21c-3.87 0-7-3.14-7-7V21c0-3.87 3.13-7 7-7h14Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 42v7h14v-7M21 14V7h14v7"
        />
        <path strokeLinecap="round" d="M24 22v13M28 27v8M32 25v10" />
      </g>
    </svg>
  ),
  cameraIcon:(props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={56}
      height={56}
      fill="none"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path fill="#fff" fillOpacity={0} d="M0 0h56v56H0z" />
        </clipPath>
      </defs>
      <g stroke="#FFF" strokeLinejoin="round" strokeWidth={2} clipPath="url(#a)">
        <path d="M14 16.33c1.23 0 2.42-.49 3.29-1.37.88-.87 1.37-2.06 1.37-3.3 0-.62.25-1.21.69-1.65.43-.44 1.03-.68 1.65-.68h14c.61 0 1.21.24 1.64.68.44.44.69 1.03.69 1.65 0 1.24.49 2.43 1.37 3.3.87.88 2.06 1.37 3.3 1.37h2.33A4.679 4.679 0 0 1 49 21v21c0 1.23-.5 2.42-1.37 3.29-.88.88-2.06 1.37-3.3 1.37H11.66A4.663 4.663 0 0 1 7 42V21c0-1.24.49-2.43 1.36-3.3.88-.88 2.06-1.37 3.3-1.37H14Z" />
        <path d="M28 37.33c-3.87 0-7-3.14-7-7 0-3.87 3.13-7 7-7 3.86 0 7 3.13 7 7 0 3.86-3.14 7-7 7Z" />
      </g>
    </svg>
  ),
  HeadPhonesIcon:(props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={56}
      height={56}
      fill="none"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path fill="#fff" fillOpacity={0} d="M0 0h56v56H0z" />
        </clipPath>
      </defs>
      <path fill="none" d="M0 0h56v56H0z" />
      <g stroke="#000" strokeLinejoin="round" strokeWidth={2} clipPath="url(#a)">
        <path d="M16.33 30.33c2.58 0 4.67 2.09 4.67 4.67v7c0 2.57-2.09 4.66-4.67 4.66H14c-2.58 0-4.67-2.09-4.67-4.66v-7c0-2.58 2.09-4.67 4.67-4.67h2.33ZM42 30.33c2.57 0 4.66 2.09 4.66 4.67v7c0 2.57-2.09 4.66-4.66 4.66h-2.34C37.08 46.66 35 44.57 35 42v-7a4.66 4.66 0 0 1 4.66-4.67H42Z" />
        <path
          strokeLinecap="round"
          d="M9.33 35v-7c0-4.96 1.97-9.7 5.47-13.2S23.04 9.33 28 9.33c4.95 0 9.69 1.97 13.19 5.47 3.51 3.5 5.47 8.24 5.47 13.2v7"
        />
      </g>
    </svg>
  ),
  gamingIcon:(props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={56}
      height={56}
      fill="none"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path fill="#fff" fillOpacity={0} d="M0 0h56v56H0z" />
        </clipPath>
      </defs>
      <path fill="none" d="M0 0h56v56H0z" />
      <g stroke="#000" strokeLinejoin="round" clipPath="url(#a)">
        <path
          strokeWidth={2}
          d="M46.66 14a4.66 4.66 0 0 1 4.67 4.66v18.67c0 2.58-2.09 4.67-4.67 4.67H9.33c-2.58 0-4.67-2.09-4.67-4.67V18.66A4.66 4.66 0 0 1 9.33 14h37.33ZM14 28h9.33m-4.67-4.67v9.33"
        />
        <path
          strokeLinecap="round"
          strokeWidth={3}
          d="M35 25.66v.03M42 30.33v.02"
        />
      </g>
    </svg>
  )

}