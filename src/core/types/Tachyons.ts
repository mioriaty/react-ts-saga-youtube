export type Tachyons =
  | 'pointer'
  | 'aspect-ratio'
  | 'aspect-ratio--16x9'
  | 'aspect-ratio--9x16'
  | 'aspect-ratio--4x3'
  | 'aspect-ratio--3x4'
  | 'aspect-ratio--6x4'
  | 'aspect-ratio--4x6'
  | 'aspect-ratio--8x5'
  | 'aspect-ratio--5x8'
  | 'aspect-ratio--7x5'
  | 'aspect-ratio--5x7'
  | 'aspect-ratio--1x1'
  | 'aspect-ratio--object'
  | 'cover'
  | 'contain'
  | 'bg-center'
  | 'bg-top'
  | 'bg-top'
  | 'bg-right'
  | 'bg-right'
  | 'bg-bottom'
  | 'bg-left'
  | 'outline'
  | 'outline-transparent'
  | 'outline-0'
  | 'ba'
  | 'bt'
  | 'br'
  | 'bb'
  | 'bl'
  | 'bn'
  | 'b--black'
  | 'b--near-black'
  | 'b--dark-gray'
  | 'b--mid-gray'
  | 'b--gray'
  | 'b--silver'
  | 'b--light-silver'
  | 'b--moon-gray'
  | 'b--light-gray'
  | 'b--near-white'
  | 'b--white'
  | 'b--white-90'
  | 'b--white-80'
  | 'b--white-70'
  | 'b--white-60'
  | 'b--white-50'
  | 'b--white-40'
  | 'b--white-30'
  | 'b--white-20'
  | 'b--white-10'
  | 'b--white-05'
  | 'b--white-025'
  | 'b--white-0125'
  | 'b--black-90'
  | 'b--black-80'
  | 'b--black-70'
  | 'b--black-60'
  | 'b--black-50'
  | 'b--black-40'
  | 'b--black-30'
  | 'b--black-20'
  | 'b--black-10'
  | 'b--black-05'
  | 'b--black-025'
  | 'b--black-0125'
  | 'b--dark-red'
  | 'b--red'
  | 'b--light-red'
  | 'b--orange'
  | 'b--gold'
  | 'b--yellow'
  | 'b--light-yellow'
  | 'b--purple'
  | 'b--light-purple'
  | 'b--dark-pink'
  | 'b--hot-pink'
  | 'b--pink'
  | 'b--light-pink'
  | 'b--dark-green'
  | 'b--green'
  | 'b--light-green'
  | 'b--navy'
  | 'b--dark-blue'
  | 'b--blue'
  | 'b--light-blue'
  | 'b--lightest-blue'
  | 'b--washed-blue'
  | 'b--washed-green'
  | 'b--washed-yellow'
  | 'b--washed-red'
  | 'b--transparent'
  | 'b--inherit'
  | 'br0'
  | 'br1'
  | 'br2'
  | 'br3'
  | 'br4'
  | 'br-100'
  | 'br-pill'
  | 'br--bottom'
  | 'br--top'
  | 'br--top'
  | 'br--right'
  | 'br--left'
  | 'b--dotted'
  | 'b--dashed'
  | 'b--solid'
  | 'b--none'
  | 'bw0'
  | 'bw1'
  | 'bw2'
  | 'bw3'
  | 'bw4'
  | 'bw5'
  | 'bt-0'
  | 'br-0'
  | 'bb-0'
  | 'bl-0'
  | 'shadow-1'
  | 'shadow-2'
  | 'shadow-3'
  | 'shadow-4'
  | 'shadow-5'
  | 'pre'
  | 'top-0'
  | 'right-0'
  | 'bottom-0'
  | 'left-0'
  | 'top-1'
  | 'right-1'
  | 'bottom-1'
  | 'left-1'
  | 'top-2'
  | 'right-2'
  | 'bottom-2'
  | 'left-2'
  | 'top--1'
  | 'right--1'
  | 'bottom--1'
  | 'left--1'
  | 'top--2'
  | 'right--2'
  | 'bottom--2'
  | 'left--2'
  | 'absolute--fill'
  | 'cf'
  | 'cl'
  | 'cr'
  | 'cb'
  | 'cn'
  | 'dn'
  | 'di'
  | 'db'
  | 'dib'
  | 'dit'
  | 'dt'
  | 'dtc'
  | 'dt-row'
  | 'dt-row-group'
  | 'dt-column'
  | 'dt-column-group'
  | 'dt--fixed'
  | 'flex'
  | 'inline-flex'
  | 'flex-auto'
  | 'flex-none'
  | 'flex-column'
  | 'flex-row'
  | 'flex-wrap'
  | 'flex-nowrap'
  | 'flex-wrap-reverse'
  | 'flex-column-reverse'
  | 'flex-row-reverse'
  | 'items-start'
  | 'items-end'
  | 'items-center'
  | 'items-baseline'
  | 'items-stretch'
  | 'self-start'
  | 'self-end'
  | 'self-center'
  | 'self-baseline'
  | 'self-stretch'
  | 'justify-start'
  | 'justify-end'
  | 'justify-center'
  | 'justify-between'
  | 'justify-around'
  | 'content-start'
  | 'content-end'
  | 'content-center'
  | 'content-between'
  | 'content-around'
  | 'content-stretch'
  | 'order-0'
  | 'order-1'
  | 'order-2'
  | 'order-3'
  | 'order-4'
  | 'order-5'
  | 'order-6'
  | 'order-7'
  | 'order-8'
  | 'order-last'
  | 'flex-grow-0'
  | 'flex-grow-1'
  | 'flex-shrink-0'
  | 'flex-shrink-1'
  | 'fl'
  | 'fr'
  | 'fr'
  | 'fn'
  | 'sans-serif'
  | 'serif'
  | 'system-sans-serif'
  | 'system-serif'
  | 'courier'
  | 'helvetica'
  | 'avenir'
  | 'athelas'
  | 'georgia'
  | 'times'
  | 'bodoni'
  | 'calisto'
  | 'garamond'
  | 'baskerville'
  | 'i'
  | 'fs-normal'
  | 'normal'
  | 'b'
  | 'fw1'
  | 'fw2'
  | 'fw3'
  | 'fw4'
  | 'fw5'
  | 'fw6'
  | 'fw7'
  | 'fw8'
  | 'fw9'
  | 'input-reset'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h-25'
  | 'h-50'
  | 'h-75'
  | 'h-100'
  | 'min-h-100'
  | 'vh-25'
  | 'vh-50'
  | 'vh-75'
  | 'vh-100'
  | 'min-vh-100'
  | 'h-auto'
  | 'h-inherit'
  | 'tracked'
  | 'tracked-tight'
  | 'tracked-mega'
  | 'lh-solid'
  | 'lh-title'
  | 'lh-copy'
  | 'link'
  | 'list'
  | 'mw-100'
  | 'mw1'
  | 'mw2'
  | 'mw3'
  | 'mw4'
  | 'mw5'
  | 'mw6'
  | 'mw7'
  | 'mw8'
  | 'mw9'
  | 'mw-none'
  | 'w1'
  | 'w2'
  | 'w3'
  | 'w4'
  | 'w5'
  | 'w-10'
  | 'w-20'
  | 'w-25'
  | 'w-30'
  | 'w-33'
  | 'w-34'
  | 'w-40'
  | 'w-50'
  | 'w-60'
  | 'w-70'
  | 'w-75'
  | 'w-80'
  | 'w-90'
  | 'w-100'
  | 'w-third'
  | 'w-two-thirds'
  | 'w-auto'
  | 'overflow-visible'
  | 'overflow-hidden'
  | 'overflow-scroll'
  | 'overflow-auto'
  | 'overflow-x-visible'
  | 'overflow-x-hidden'
  | 'overflow-x-scroll'
  | 'overflow-x-auto'
  | 'overflow-y-visible'
  | 'overflow-y-hidden'
  | 'overflow-y-scroll'
  | 'overflow-y-auto'
  | 'static'
  | 'relative'
  | 'absolute'
  | 'fixed'
  | 'o-100'
  | 'o-90'
  | 'o-80'
  | 'o-70'
  | 'o-60'
  | 'o-50'
  | 'o-40'
  | 'o-30'
  | 'o-20'
  | 'o-10'
  | 'o-05'
  | 'o-025'
  | 'o-0'
  | 'rotate-45'
  | 'rotate-90'
  | 'rotate-135'
  | 'rotate-180'
  | 'rotate-225'
  | 'rotate-270'
  | 'rotate-315'
  | 'black-90'
  | 'black-80'
  | 'black-70'
  | 'black-60'
  | 'black-50'
  | 'black-40'
  | 'black-30'
  | 'black-20'
  | 'black-10'
  | 'black-05'
  | 'white-90'
  | 'white-80'
  | 'white-70'
  | 'white-60'
  | 'white-50'
  | 'white-40'
  | 'white-30'
  | 'white-20'
  | 'white-10'
  | 'black'
  | 'near-black'
  | 'dark-gray'
  | 'mid-gray'
  | 'gray'
  | 'silver'
  | 'light-silver'
  | 'moon-gray'
  | 'light-gray'
  | 'near-white'
  | 'white'
  | 'dark-red'
  | 'red'
  | 'light-red'
  | 'orange'
  | 'gold'
  | 'yellow'
  | 'light-yellow'
  | 'purple'
  | 'light-purple'
  | 'dark-pink'
  | 'hot-pink'
  | 'pink'
  | 'light-pink'
  | 'dark-green'
  | 'green'
  | 'light-green'
  | 'navy'
  | 'dark-blue'
  | 'blue'
  | 'light-blue'
  | 'lightest-blue'
  | 'washed-blue'
  | 'washed-green'
  | 'washed-yellow'
  | 'washed-red'
  | 'color-inherit'
  | 'bg-black-90'
  | 'bg-black-80'
  | 'bg-black-70'
  | 'bg-black-60'
  | 'bg-black-50'
  | 'bg-black-40'
  | 'bg-black-30'
  | 'bg-black-20'
  | 'bg-black-10'
  | 'bg-black-05'
  | 'bg-white-90'
  | 'bg-white-80'
  | 'bg-white-70'
  | 'bg-white-60'
  | 'bg-white-50'
  | 'bg-white-40'
  | 'bg-white-30'
  | 'bg-white-20'
  | 'bg-white-10'
  | 'bg-black'
  | 'bg-near-black'
  | 'bg-dark-gray'
  | 'bg-mid-gray'
  | 'bg-gray'
  | 'bg-silver'
  | 'bg-light-silver'
  | 'bg-moon-gray'
  | 'bg-light-gray'
  | 'bg-near-white'
  | 'bg-white'
  | 'bg-transparent'
  | 'bg-dark-red'
  | 'bg-red'
  | 'bg-light-red'
  | 'bg-orange'
  | 'bg-gold'
  | 'bg-yellow'
  | 'bg-light-yellow'
  | 'bg-purple'
  | 'bg-light-purple'
  | 'bg-dark-pink'
  | 'bg-hot-pink'
  | 'bg-pink'
  | 'bg-light-pink'
  | 'bg-dark-green'
  | 'bg-green'
  | 'bg-light-green'
  | 'bg-navy'
  | 'bg-dark-blue'
  | 'bg-blue'
  | 'bg-light-blue'
  | 'bg-lightest-blue'
  | 'bg-washed-blue'
  | 'bg-washed-green'
  | 'bg-washed-yellow'
  | 'bg-washed-red'
  | 'bg-inherit'
  | 'pa0'
  | 'pa1'
  | 'pa2'
  | 'pa3'
  | 'pa4'
  | 'pa5'
  | 'pa6'
  | 'pa7'
  | 'pl0'
  | 'pl1'
  | 'pl2'
  | 'pl3'
  | 'pl4'
  | 'pl5'
  | 'pl6'
  | 'pl7'
  | 'pr0'
  | 'pr1'
  | 'pr2'
  | 'pr3'
  | 'pr4'
  | 'pr5'
  | 'pr6'
  | 'pr7'
  | 'pb0'
  | 'pb1'
  | 'pb2'
  | 'pb3'
  | 'pb4'
  | 'pb5'
  | 'pb6'
  | 'pb7'
  | 'pt0'
  | 'pt1'
  | 'pt2'
  | 'pt3'
  | 'pt4'
  | 'pt5'
  | 'pt6'
  | 'pt7'
  | 'pv0'
  | 'pv1'
  | 'pv2'
  | 'pv3'
  | 'pv4'
  | 'pv5'
  | 'pv6'
  | 'pv7'
  | 'ph0'
  | 'ph1'
  | 'ph2'
  | 'ph3'
  | 'ph4'
  | 'ph5'
  | 'ph6'
  | 'ph7'
  | 'ma0'
  | 'ma1'
  | 'ma2'
  | 'ma3'
  | 'ma4'
  | 'ma5'
  | 'ma6'
  | 'ma7'
  | 'ml0'
  | 'ml1'
  | 'ml2'
  | 'ml3'
  | 'ml4'
  | 'ml5'
  | 'ml6'
  | 'ml7'
  | 'mr0'
  | 'mr1'
  | 'mr2'
  | 'mr3'
  | 'mr4'
  | 'mr5'
  | 'mr6'
  | 'mr7'
  | 'mb0'
  | 'mb1'
  | 'mb2'
  | 'mb3'
  | 'mb4'
  | 'mb5'
  | 'mb6'
  | 'mb7'
  | 'mt0'
  | 'mt1'
  | 'mt2'
  | 'mt3'
  | 'mt4'
  | 'mt5'
  | 'mt6'
  | 'mt7'
  | 'mv0'
  | 'mv1'
  | 'mv2'
  | 'mv3'
  | 'mv4'
  | 'mv5'
  | 'mv6'
  | 'mv7'
  | 'mh0'
  | 'mh1'
  | 'mh2'
  | 'mh3'
  | 'mh4'
  | 'mh5'
  | 'mh6'
  | 'mh7'
  | 'na1'
  | 'na2'
  | 'na3'
  | 'na4'
  | 'na5'
  | 'na6'
  | 'na7'
  | 'nl1'
  | 'nl2'
  | 'nl3'
  | 'nl4'
  | 'nl5'
  | 'nl6'
  | 'nl7'
  | 'nr1'
  | 'nr2'
  | 'nr3'
  | 'nr4'
  | 'nr5'
  | 'nr6'
  | 'nr7'
  | 'nb1'
  | 'nb2'
  | 'nb3'
  | 'nb4'
  | 'nb5'
  | 'nb6'
  | 'nb7'
  | 'nt1'
  | 'nt2'
  | 'nt3'
  | 'nt4'
  | 'nt5'
  | 'nt6'
  | 'nt7'
  | 'collapse'
  | 'strike'
  | 'underline'
  | 'no-underline'
  | 'tl'
  | 'tr'
  | 'tc'
  | 'tj'
  | 'ttc'
  | 'ttl'
  | 'ttu'
  | 'ttn'
  | 'f-headline'
  | 'f-subheadline'
  | 'f1'
  | 'f2'
  | 'f3'
  | 'f4'
  | 'f5'
  | 'f6'
  | 'f7'
  | 'measure'
  | 'measure-wide'
  | 'measure-narrow'
  | 'indent'
  | 'small-caps'
  | 'truncate'
  | 'overflow-container'
  | 'center'
  | 'mr-auto'
  | 'ml-auto'
  | 'clip'
  | 'ws-normal'
  | 'nowrap'
  | 'pre'
  | 'v-base'
  | 'v-mid'
  | 'v-top'
  | 'v-btm'
  | 'dim'
  | 'hide-child'
  | 'child'
  | 'grow'
  | 'grow-large'
  | 'shadow-hover'
  | 'shadow-hover'
  | 'z-0'
  | 'z-1'
  | 'z-2'
  | 'z-3'
  | 'z-4'
  | 'z-5'
  | 'z-999'
  | 'z-9999'
  | 'z-max'
  | 'z-inherit'
  | 'z-initial'
  | 'z-unset'
  | 'debug-grid'
  | 'debug-grid-16'
  | 'debug-grid-8-solid'
  | 'debug-grid-16-solid'
  | 'aspect-ratio-ns'
  | 'aspect-ratio--16x9-ns'
  | 'aspect-ratio--9x16-ns'
  | 'aspect-ratio--4x3-ns'
  | 'aspect-ratio--3x4-ns'
  | 'aspect-ratio--6x4-ns'
  | 'aspect-ratio--4x6-ns'
  | 'aspect-ratio--8x5-ns'
  | 'aspect-ratio--5x8-ns'
  | 'aspect-ratio--7x5-ns'
  | 'aspect-ratio--5x7-ns'
  | 'aspect-ratio--1x1-ns'
  | 'aspect-ratio--object-ns'
  | 'cover-ns'
  | 'contain-ns'
  | 'bg-center-ns'
  | 'bg-top-ns'
  | 'bg-top-ns'
  | 'bg-right-ns'
  | 'bg-right-ns'
  | 'bg-bottom-ns'
  | 'bg-left-ns'
  | 'outline-ns'
  | 'outline-transparent-ns'
  | 'outline-0-ns'
  | 'ba-ns'
  | 'bt-ns'
  | 'br-ns'
  | 'bb-ns'
  | 'bl-ns'
  | 'bn-ns'
  | 'br0-ns'
  | 'br1-ns'
  | 'br2-ns'
  | 'br3-ns'
  | 'br4-ns'
  | 'br-100-ns'
  | 'br-pill-ns'
  | 'br--bottom-ns'
  | 'br--top-ns'
  | 'br--top-ns'
  | 'br--right-ns'
  | 'br--left-ns'
  | 'b--dotted-ns'
  | 'b--dashed-ns'
  | 'b--solid-ns'
  | 'b--none-ns'
  | 'bw0-ns'
  | 'bw1-ns'
  | 'bw2-ns'
  | 'bw3-ns'
  | 'bw4-ns'
  | 'bw5-ns'
  | 'bt-0-ns'
  | 'br-0-ns'
  | 'bb-0-ns'
  | 'bl-0-ns'
  | 'shadow-1-ns'
  | 'shadow-2-ns'
  | 'shadow-3-ns'
  | 'shadow-4-ns'
  | 'shadow-5-ns'
  | 'top-0-ns'
  | 'left-0-ns'
  | 'right-0-ns'
  | 'bottom-0-ns'
  | 'top-1-ns'
  | 'left-1-ns'
  | 'right-1-ns'
  | 'bottom-1-ns'
  | 'top-2-ns'
  | 'left-2-ns'
  | 'right-2-ns'
  | 'bottom-2-ns'
  | 'top--1-ns'
  | 'right--1-ns'
  | 'bottom--1-ns'
  | 'left--1-ns'
  | 'top--2-ns'
  | 'right--2-ns'
  | 'bottom--2-ns'
  | 'left--2-ns'
  | 'absolute--fill-ns'
  | 'cl-ns'
  | 'cr-ns'
  | 'cb-ns'
  | 'cn-ns'
  | 'dn-ns'
  | 'di-ns'
  | 'db-ns'
  | 'dib-ns'
  | 'dit-ns'
  | 'dt-ns'
  | 'dtc-ns'
  | 'dt-row-ns'
  | 'dt-row-group-ns'
  | 'dt-column-ns'
  | 'dt-column-group-ns'
  | 'dt--fixed-ns'
  | 'flex-ns'
  | 'inline-flex-ns'
  | 'flex-auto-ns'
  | 'flex-none-ns'
  | 'flex-column-ns'
  | 'flex-row-ns'
  | 'flex-wrap-ns'
  | 'flex-nowrap-ns'
  | 'flex-wrap-reverse-ns'
  | 'flex-column-reverse-ns'
  | 'flex-row-reverse-ns'
  | 'items-start-ns'
  | 'items-end-ns'
  | 'items-center-ns'
  | 'items-baseline-ns'
  | 'items-stretch-ns'
  | 'self-start-ns'
  | 'self-end-ns'
  | 'self-center-ns'
  | 'self-baseline-ns'
  | 'self-stretch-ns'
  | 'justify-start-ns'
  | 'justify-end-ns'
  | 'justify-center-ns'
  | 'justify-between-ns'
  | 'justify-around-ns'
  | 'content-start-ns'
  | 'content-end-ns'
  | 'content-center-ns'
  | 'content-between-ns'
  | 'content-around-ns'
  | 'content-stretch-ns'
  | 'order-0-ns'
  | 'order-1-ns'
  | 'order-2-ns'
  | 'order-3-ns'
  | 'order-4-ns'
  | 'order-5-ns'
  | 'order-6-ns'
  | 'order-7-ns'
  | 'order-8-ns'
  | 'order-last-ns'
  | 'flex-grow-0-ns'
  | 'flex-grow-1-ns'
  | 'flex-shrink-0-ns'
  | 'flex-shrink-1-ns'
  | 'fl-ns'
  | 'fr-ns'
  | 'fr-ns'
  | 'fn-ns'
  | 'i-ns'
  | 'fs-normal-ns'
  | 'normal-ns'
  | 'b-ns'
  | 'fw1-ns'
  | 'fw2-ns'
  | 'fw3-ns'
  | 'fw4-ns'
  | 'fw5-ns'
  | 'fw6-ns'
  | 'fw7-ns'
  | 'fw8-ns'
  | 'fw9-ns'
  | 'h1-ns'
  | 'h2-ns'
  | 'h3-ns'
  | 'h4-ns'
  | 'h5-ns'
  | 'h-25-ns'
  | 'h-50-ns'
  | 'h-75-ns'
  | 'h-100-ns'
  | 'min-h-100-ns'
  | 'vh-25-ns'
  | 'vh-50-ns'
  | 'vh-75-ns'
  | 'vh-100-ns'
  | 'min-vh-100-ns'
  | 'h-auto-ns'
  | 'h-inherit-ns'
  | 'tracked-ns'
  | 'tracked-tight-ns'
  | 'tracked-mega-ns'
  | 'lh-solid-ns'
  | 'lh-title-ns'
  | 'lh-copy-ns'
  | 'mw-100-ns'
  | 'mw1-ns'
  | 'mw2-ns'
  | 'mw3-ns'
  | 'mw4-ns'
  | 'mw5-ns'
  | 'mw6-ns'
  | 'mw7-ns'
  | 'mw8-ns'
  | 'mw9-ns'
  | 'mw-none-ns'
  | 'w1-ns'
  | 'w2-ns'
  | 'w3-ns'
  | 'w4-ns'
  | 'w5-ns'
  | 'w-10-ns'
  | 'w-20-ns'
  | 'w-25-ns'
  | 'w-30-ns'
  | 'w-33-ns'
  | 'w-34-ns'
  | 'w-40-ns'
  | 'w-50-ns'
  | 'w-60-ns'
  | 'w-70-ns'
  | 'w-75-ns'
  | 'w-80-ns'
  | 'w-90-ns'
  | 'w-100-ns'
  | 'w-third-ns'
  | 'w-two-thirds-ns'
  | 'w-auto-ns'
  | 'overflow-visible-ns'
  | 'overflow-hidden-ns'
  | 'overflow-scroll-ns'
  | 'overflow-auto-ns'
  | 'overflow-x-visible-ns'
  | 'overflow-x-hidden-ns'
  | 'overflow-x-scroll-ns'
  | 'overflow-x-auto-ns'
  | 'overflow-y-visible-ns'
  | 'overflow-y-hidden-ns'
  | 'overflow-y-scroll-ns'
  | 'overflow-y-auto-ns'
  | 'static-ns'
  | 'relative-ns'
  | 'absolute-ns'
  | 'fixed-ns'
  | 'rotate-45-ns'
  | 'rotate-90-ns'
  | 'rotate-135-ns'
  | 'rotate-180-ns'
  | 'rotate-225-ns'
  | 'rotate-270-ns'
  | 'rotate-315-ns'
  | 'pa0-ns'
  | 'pa1-ns'
  | 'pa2-ns'
  | 'pa3-ns'
  | 'pa4-ns'
  | 'pa5-ns'
  | 'pa6-ns'
  | 'pa7-ns'
  | 'pl0-ns'
  | 'pl1-ns'
  | 'pl2-ns'
  | 'pl3-ns'
  | 'pl4-ns'
  | 'pl5-ns'
  | 'pl6-ns'
  | 'pl7-ns'
  | 'pr0-ns'
  | 'pr1-ns'
  | 'pr2-ns'
  | 'pr3-ns'
  | 'pr4-ns'
  | 'pr5-ns'
  | 'pr6-ns'
  | 'pr7-ns'
  | 'pb0-ns'
  | 'pb1-ns'
  | 'pb2-ns'
  | 'pb3-ns'
  | 'pb4-ns'
  | 'pb5-ns'
  | 'pb6-ns'
  | 'pb7-ns'
  | 'pt0-ns'
  | 'pt1-ns'
  | 'pt2-ns'
  | 'pt3-ns'
  | 'pt4-ns'
  | 'pt5-ns'
  | 'pt6-ns'
  | 'pt7-ns'
  | 'pv0-ns'
  | 'pv1-ns'
  | 'pv2-ns'
  | 'pv3-ns'
  | 'pv4-ns'
  | 'pv5-ns'
  | 'pv6-ns'
  | 'pv7-ns'
  | 'ph0-ns'
  | 'ph1-ns'
  | 'ph2-ns'
  | 'ph3-ns'
  | 'ph4-ns'
  | 'ph5-ns'
  | 'ph6-ns'
  | 'ph7-ns'
  | 'ma0-ns'
  | 'ma1-ns'
  | 'ma2-ns'
  | 'ma3-ns'
  | 'ma4-ns'
  | 'ma5-ns'
  | 'ma6-ns'
  | 'ma7-ns'
  | 'ml0-ns'
  | 'ml1-ns'
  | 'ml2-ns'
  | 'ml3-ns'
  | 'ml4-ns'
  | 'ml5-ns'
  | 'ml6-ns'
  | 'ml7-ns'
  | 'mr0-ns'
  | 'mr1-ns'
  | 'mr2-ns'
  | 'mr3-ns'
  | 'mr4-ns'
  | 'mr5-ns'
  | 'mr6-ns'
  | 'mr7-ns'
  | 'mb0-ns'
  | 'mb1-ns'
  | 'mb2-ns'
  | 'mb3-ns'
  | 'mb4-ns'
  | 'mb5-ns'
  | 'mb6-ns'
  | 'mb7-ns'
  | 'mt0-ns'
  | 'mt1-ns'
  | 'mt2-ns'
  | 'mt3-ns'
  | 'mt4-ns'
  | 'mt5-ns'
  | 'mt6-ns'
  | 'mt7-ns'
  | 'mv0-ns'
  | 'mv1-ns'
  | 'mv2-ns'
  | 'mv3-ns'
  | 'mv4-ns'
  | 'mv5-ns'
  | 'mv6-ns'
  | 'mv7-ns'
  | 'mh0-ns'
  | 'mh1-ns'
  | 'mh2-ns'
  | 'mh3-ns'
  | 'mh4-ns'
  | 'mh5-ns'
  | 'mh6-ns'
  | 'mh7-ns'
  | 'na1-ns'
  | 'na2-ns'
  | 'na3-ns'
  | 'na4-ns'
  | 'na5-ns'
  | 'na6-ns'
  | 'na7-ns'
  | 'nl1-ns'
  | 'nl2-ns'
  | 'nl3-ns'
  | 'nl4-ns'
  | 'nl5-ns'
  | 'nl6-ns'
  | 'nl7-ns'
  | 'nr1-ns'
  | 'nr2-ns'
  | 'nr3-ns'
  | 'nr4-ns'
  | 'nr5-ns'
  | 'nr6-ns'
  | 'nr7-ns'
  | 'nb1-ns'
  | 'nb2-ns'
  | 'nb3-ns'
  | 'nb4-ns'
  | 'nb5-ns'
  | 'nb6-ns'
  | 'nb7-ns'
  | 'nt1-ns'
  | 'nt2-ns'
  | 'nt3-ns'
  | 'nt4-ns'
  | 'nt5-ns'
  | 'nt6-ns'
  | 'nt7-ns'
  | 'strike-ns'
  | 'underline-ns'
  | 'no-underline-ns'
  | 'tl-ns'
  | 'tr-ns'
  | 'tc-ns'
  | 'tj-ns'
  | 'ttc-ns'
  | 'ttl-ns'
  | 'ttu-ns'
  | 'ttn-ns'
  | 'f-headline-ns'
  | 'f-subheadline-ns'
  | 'f1-ns'
  | 'f2-ns'
  | 'f3-ns'
  | 'f4-ns'
  | 'f5-ns'
  | 'f6-ns'
  | 'f7-ns'
  | 'measure-ns'
  | 'measure-wide-ns'
  | 'measure-narrow-ns'
  | 'indent-ns'
  | 'small-caps-ns'
  | 'truncate-ns'
  | 'center-ns'
  | 'mr-auto-ns'
  | 'ml-auto-ns'
  | 'clip-ns'
  | 'ws-normal-ns'
  | 'nowrap-ns'
  | 'pre-ns'
  | 'v-base-ns'
  | 'v-mid-ns'
  | 'v-top-ns'
  | 'v-btm-ns'
  | 'aspect-ratio-m'
  | 'aspect-ratio--16x9-m'
  | 'aspect-ratio--9x16-m'
  | 'aspect-ratio--4x3-m'
  | 'aspect-ratio--3x4-m'
  | 'aspect-ratio--6x4-m'
  | 'aspect-ratio--4x6-m'
  | 'aspect-ratio--8x5-m'
  | 'aspect-ratio--5x8-m'
  | 'aspect-ratio--7x5-m'
  | 'aspect-ratio--5x7-m'
  | 'aspect-ratio--1x1-m'
  | 'aspect-ratio--object-m'
  | 'cover-m'
  | 'contain-m'
  | 'bg-center-m'
  | 'bg-top-m'
  | 'bg-top-m'
  | 'bg-right-m'
  | 'bg-right-m'
  | 'bg-bottom-m'
  | 'bg-left-m'
  | 'outline-m'
  | 'outline-transparent-m'
  | 'outline-0-m'
  | 'ba-m'
  | 'bt-m'
  | 'br-m'
  | 'bb-m'
  | 'bl-m'
  | 'bn-m'
  | 'br0-m'
  | 'br1-m'
  | 'br2-m'
  | 'br3-m'
  | 'br4-m'
  | 'br-100-m'
  | 'br-pill-m'
  | 'br--bottom-m'
  | 'br--top-m'
  | 'br--top-m'
  | 'br--right-m'
  | 'br--left-m'
  | 'b--dotted-m'
  | 'b--dashed-m'
  | 'b--solid-m'
  | 'b--none-m'
  | 'bw0-m'
  | 'bw1-m'
  | 'bw2-m'
  | 'bw3-m'
  | 'bw4-m'
  | 'bw5-m'
  | 'bt-0-m'
  | 'br-0-m'
  | 'bb-0-m'
  | 'bl-0-m'
  | 'shadow-1-m'
  | 'shadow-2-m'
  | 'shadow-3-m'
  | 'shadow-4-m'
  | 'shadow-5-m'
  | 'top-0-m'
  | 'left-0-m'
  | 'right-0-m'
  | 'bottom-0-m'
  | 'top-1-m'
  | 'left-1-m'
  | 'right-1-m'
  | 'bottom-1-m'
  | 'top-2-m'
  | 'left-2-m'
  | 'right-2-m'
  | 'bottom-2-m'
  | 'top--1-m'
  | 'right--1-m'
  | 'bottom--1-m'
  | 'left--1-m'
  | 'top--2-m'
  | 'right--2-m'
  | 'bottom--2-m'
  | 'left--2-m'
  | 'absolute--fill-m'
  | 'cl-m'
  | 'cr-m'
  | 'cb-m'
  | 'cn-m'
  | 'dn-m'
  | 'di-m'
  | 'db-m'
  | 'dib-m'
  | 'dit-m'
  | 'dt-m'
  | 'dtc-m'
  | 'dt-row-m'
  | 'dt-row-group-m'
  | 'dt-column-m'
  | 'dt-column-group-m'
  | 'dt--fixed-m'
  | 'flex-m'
  | 'inline-flex-m'
  | 'flex-auto-m'
  | 'flex-none-m'
  | 'flex-column-m'
  | 'flex-row-m'
  | 'flex-wrap-m'
  | 'flex-nowrap-m'
  | 'flex-wrap-reverse-m'
  | 'flex-column-reverse-m'
  | 'flex-row-reverse-m'
  | 'items-start-m'
  | 'items-end-m'
  | 'items-center-m'
  | 'items-baseline-m'
  | 'items-stretch-m'
  | 'self-start-m'
  | 'self-end-m'
  | 'self-center-m'
  | 'self-baseline-m'
  | 'self-stretch-m'
  | 'justify-start-m'
  | 'justify-end-m'
  | 'justify-center-m'
  | 'justify-between-m'
  | 'justify-around-m'
  | 'content-start-m'
  | 'content-end-m'
  | 'content-center-m'
  | 'content-between-m'
  | 'content-around-m'
  | 'content-stretch-m'
  | 'order-0-m'
  | 'order-1-m'
  | 'order-2-m'
  | 'order-3-m'
  | 'order-4-m'
  | 'order-5-m'
  | 'order-6-m'
  | 'order-7-m'
  | 'order-8-m'
  | 'order-last-m'
  | 'flex-grow-0-m'
  | 'flex-grow-1-m'
  | 'flex-shrink-0-m'
  | 'flex-shrink-1-m'
  | 'fl-m'
  | 'fr-m'
  | 'fr-m'
  | 'fn-m'
  | 'i-m'
  | 'fs-normal-m'
  | 'normal-m'
  | 'b-m'
  | 'fw1-m'
  | 'fw2-m'
  | 'fw3-m'
  | 'fw4-m'
  | 'fw5-m'
  | 'fw6-m'
  | 'fw7-m'
  | 'fw8-m'
  | 'fw9-m'
  | 'h1-m'
  | 'h2-m'
  | 'h3-m'
  | 'h4-m'
  | 'h5-m'
  | 'h-25-m'
  | 'h-50-m'
  | 'h-75-m'
  | 'h-100-m'
  | 'min-h-100-m'
  | 'vh-25-m'
  | 'vh-50-m'
  | 'vh-75-m'
  | 'vh-100-m'
  | 'min-vh-100-m'
  | 'h-auto-m'
  | 'h-inherit-m'
  | 'tracked-m'
  | 'tracked-tight-m'
  | 'tracked-mega-m'
  | 'lh-solid-m'
  | 'lh-title-m'
  | 'lh-copy-m'
  | 'mw-100-m'
  | 'mw1-m'
  | 'mw2-m'
  | 'mw3-m'
  | 'mw4-m'
  | 'mw5-m'
  | 'mw6-m'
  | 'mw7-m'
  | 'mw8-m'
  | 'mw9-m'
  | 'mw-none-m'
  | 'w1-m'
  | 'w2-m'
  | 'w3-m'
  | 'w4-m'
  | 'w5-m'
  | 'w-10-m'
  | 'w-20-m'
  | 'w-25-m'
  | 'w-30-m'
  | 'w-33-m'
  | 'w-34-m'
  | 'w-40-m'
  | 'w-50-m'
  | 'w-60-m'
  | 'w-70-m'
  | 'w-75-m'
  | 'w-80-m'
  | 'w-90-m'
  | 'w-100-m'
  | 'w-third-m'
  | 'w-two-thirds-m'
  | 'w-auto-m'
  | 'overflow-visible-m'
  | 'overflow-hidden-m'
  | 'overflow-scroll-m'
  | 'overflow-auto-m'
  | 'overflow-x-visible-m'
  | 'overflow-x-hidden-m'
  | 'overflow-x-scroll-m'
  | 'overflow-x-auto-m'
  | 'overflow-y-visible-m'
  | 'overflow-y-hidden-m'
  | 'overflow-y-scroll-m'
  | 'overflow-y-auto-m'
  | 'static-m'
  | 'relative-m'
  | 'absolute-m'
  | 'fixed-m'
  | 'rotate-45-m'
  | 'rotate-90-m'
  | 'rotate-135-m'
  | 'rotate-180-m'
  | 'rotate-225-m'
  | 'rotate-270-m'
  | 'rotate-315-m'
  | 'pa0-m'
  | 'pa1-m'
  | 'pa2-m'
  | 'pa3-m'
  | 'pa4-m'
  | 'pa5-m'
  | 'pa6-m'
  | 'pa7-m'
  | 'pl0-m'
  | 'pl1-m'
  | 'pl2-m'
  | 'pl3-m'
  | 'pl4-m'
  | 'pl5-m'
  | 'pl6-m'
  | 'pl7-m'
  | 'pr0-m'
  | 'pr1-m'
  | 'pr2-m'
  | 'pr3-m'
  | 'pr4-m'
  | 'pr5-m'
  | 'pr6-m'
  | 'pr7-m'
  | 'pb0-m'
  | 'pb1-m'
  | 'pb2-m'
  | 'pb3-m'
  | 'pb4-m'
  | 'pb5-m'
  | 'pb6-m'
  | 'pb7-m'
  | 'pt0-m'
  | 'pt1-m'
  | 'pt2-m'
  | 'pt3-m'
  | 'pt4-m'
  | 'pt5-m'
  | 'pt6-m'
  | 'pt7-m'
  | 'pv0-m'
  | 'pv1-m'
  | 'pv2-m'
  | 'pv3-m'
  | 'pv4-m'
  | 'pv5-m'
  | 'pv6-m'
  | 'pv7-m'
  | 'ph0-m'
  | 'ph1-m'
  | 'ph2-m'
  | 'ph3-m'
  | 'ph4-m'
  | 'ph5-m'
  | 'ph6-m'
  | 'ph7-m'
  | 'ma0-m'
  | 'ma1-m'
  | 'ma2-m'
  | 'ma3-m'
  | 'ma4-m'
  | 'ma5-m'
  | 'ma6-m'
  | 'ma7-m'
  | 'ml0-m'
  | 'ml1-m'
  | 'ml2-m'
  | 'ml3-m'
  | 'ml4-m'
  | 'ml5-m'
  | 'ml6-m'
  | 'ml7-m'
  | 'mr0-m'
  | 'mr1-m'
  | 'mr2-m'
  | 'mr3-m'
  | 'mr4-m'
  | 'mr5-m'
  | 'mr6-m'
  | 'mr7-m'
  | 'mb0-m'
  | 'mb1-m'
  | 'mb2-m'
  | 'mb3-m'
  | 'mb4-m'
  | 'mb5-m'
  | 'mb6-m'
  | 'mb7-m'
  | 'mt0-m'
  | 'mt1-m'
  | 'mt2-m'
  | 'mt3-m'
  | 'mt4-m'
  | 'mt5-m'
  | 'mt6-m'
  | 'mt7-m'
  | 'mv0-m'
  | 'mv1-m'
  | 'mv2-m'
  | 'mv3-m'
  | 'mv4-m'
  | 'mv5-m'
  | 'mv6-m'
  | 'mv7-m'
  | 'mh0-m'
  | 'mh1-m'
  | 'mh2-m'
  | 'mh3-m'
  | 'mh4-m'
  | 'mh5-m'
  | 'mh6-m'
  | 'mh7-m'
  | 'na1-m'
  | 'na2-m'
  | 'na3-m'
  | 'na4-m'
  | 'na5-m'
  | 'na6-m'
  | 'na7-m'
  | 'nl1-m'
  | 'nl2-m'
  | 'nl3-m'
  | 'nl4-m'
  | 'nl5-m'
  | 'nl6-m'
  | 'nl7-m'
  | 'nr1-m'
  | 'nr2-m'
  | 'nr3-m'
  | 'nr4-m'
  | 'nr5-m'
  | 'nr6-m'
  | 'nr7-m'
  | 'nb1-m'
  | 'nb2-m'
  | 'nb3-m'
  | 'nb4-m'
  | 'nb5-m'
  | 'nb6-m'
  | 'nb7-m'
  | 'nt1-m'
  | 'nt2-m'
  | 'nt3-m'
  | 'nt4-m'
  | 'nt5-m'
  | 'nt6-m'
  | 'nt7-m'
  | 'strike-m'
  | 'underline-m'
  | 'no-underline-m'
  | 'tl-m'
  | 'tr-m'
  | 'tc-m'
  | 'tj-m'
  | 'ttc-m'
  | 'ttl-m'
  | 'ttu-m'
  | 'ttn-m'
  | 'f-headline-m'
  | 'f-subheadline-m'
  | 'f1-m'
  | 'f2-m'
  | 'f3-m'
  | 'f4-m'
  | 'f5-m'
  | 'f6-m'
  | 'f7-m'
  | 'measure-m'
  | 'measure-wide-m'
  | 'measure-narrow-m'
  | 'indent-m'
  | 'small-caps-m'
  | 'truncate-m'
  | 'center-m'
  | 'mr-auto-m'
  | 'ml-auto-m'
  | 'clip-m'
  | 'ws-normal-m'
  | 'nowrap-m'
  | 'pre-m'
  | 'v-base-m'
  | 'v-mid-m'
  | 'v-top-m'
  | 'v-btm-m'
  | 'aspect-ratio-l'
  | 'aspect-ratio--16x9-l'
  | 'aspect-ratio--9x16-l'
  | 'aspect-ratio--4x3-l'
  | 'aspect-ratio--3x4-l'
  | 'aspect-ratio--6x4-l'
  | 'aspect-ratio--4x6-l'
  | 'aspect-ratio--8x5-l'
  | 'aspect-ratio--5x8-l'
  | 'aspect-ratio--7x5-l'
  | 'aspect-ratio--5x7-l'
  | 'aspect-ratio--1x1-l'
  | 'aspect-ratio--object-l'
  | 'cover-l'
  | 'contain-l'
  | 'bg-center-l'
  | 'bg-top-l'
  | 'bg-top-l'
  | 'bg-right-l'
  | 'bg-right-l'
  | 'bg-bottom-l'
  | 'bg-left-l'
  | 'outline-l'
  | 'outline-transparent-l'
  | 'outline-0-l'
  | 'ba-l'
  | 'bt-l'
  | 'br-l'
  | 'bb-l'
  | 'bl-l'
  | 'bn-l'
  | 'br0-l'
  | 'br1-l'
  | 'br2-l'
  | 'br3-l'
  | 'br4-l'
  | 'br-100-l'
  | 'br-pill-l'
  | 'br--bottom-l'
  | 'br--top-l'
  | 'br--top-l'
  | 'br--right-l'
  | 'br--left-l'
  | 'b--dotted-l'
  | 'b--dashed-l'
  | 'b--solid-l'
  | 'b--none-l'
  | 'bw0-l'
  | 'bw1-l'
  | 'bw2-l'
  | 'bw3-l'
  | 'bw4-l'
  | 'bw5-l'
  | 'bt-0-l'
  | 'br-0-l'
  | 'bb-0-l'
  | 'bl-0-l'
  | 'shadow-1-l'
  | 'shadow-2-l'
  | 'shadow-3-l'
  | 'shadow-4-l'
  | 'shadow-5-l'
  | 'top-0-l'
  | 'left-0-l'
  | 'right-0-l'
  | 'bottom-0-l'
  | 'top-1-l'
  | 'left-1-l'
  | 'right-1-l'
  | 'bottom-1-l'
  | 'top-2-l'
  | 'left-2-l'
  | 'right-2-l'
  | 'bottom-2-l'
  | 'top--1-l'
  | 'right--1-l'
  | 'bottom--1-l'
  | 'left--1-l'
  | 'top--2-l'
  | 'right--2-l'
  | 'bottom--2-l'
  | 'left--2-l'
  | 'absolute--fill-l'
  | 'cl-l'
  | 'cr-l'
  | 'cb-l'
  | 'cn-l'
  | 'dn-l'
  | 'di-l'
  | 'db-l'
  | 'dib-l'
  | 'dit-l'
  | 'dt-l'
  | 'dtc-l'
  | 'dt-row-l'
  | 'dt-row-group-l'
  | 'dt-column-l'
  | 'dt-column-group-l'
  | 'dt--fixed-l'
  | 'flex-l'
  | 'inline-flex-l'
  | 'flex-auto-l'
  | 'flex-none-l'
  | 'flex-column-l'
  | 'flex-row-l'
  | 'flex-wrap-l'
  | 'flex-nowrap-l'
  | 'flex-wrap-reverse-l'
  | 'flex-column-reverse-l'
  | 'flex-row-reverse-l'
  | 'items-start-l'
  | 'items-end-l'
  | 'items-center-l'
  | 'items-baseline-l'
  | 'items-stretch-l'
  | 'self-start-l'
  | 'self-end-l'
  | 'self-center-l'
  | 'self-baseline-l'
  | 'self-stretch-l'
  | 'justify-start-l'
  | 'justify-end-l'
  | 'justify-center-l'
  | 'justify-between-l'
  | 'justify-around-l'
  | 'content-start-l'
  | 'content-end-l'
  | 'content-center-l'
  | 'content-between-l'
  | 'content-around-l'
  | 'content-stretch-l'
  | 'order-0-l'
  | 'order-1-l'
  | 'order-2-l'
  | 'order-3-l'
  | 'order-4-l'
  | 'order-5-l'
  | 'order-6-l'
  | 'order-7-l'
  | 'order-8-l'
  | 'order-last-l'
  | 'flex-grow-0-l'
  | 'flex-grow-1-l'
  | 'flex-shrink-0-l'
  | 'flex-shrink-1-l'
  | 'fl-l'
  | 'fr-l'
  | 'fr-l'
  | 'fn-l'
  | 'i-l'
  | 'fs-normal-l'
  | 'normal-l'
  | 'b-l'
  | 'fw1-l'
  | 'fw2-l'
  | 'fw3-l'
  | 'fw4-l'
  | 'fw5-l'
  | 'fw6-l'
  | 'fw7-l'
  | 'fw8-l'
  | 'fw9-l'
  | 'h1-l'
  | 'h2-l'
  | 'h3-l'
  | 'h4-l'
  | 'h5-l'
  | 'h-25-l'
  | 'h-50-l'
  | 'h-75-l'
  | 'h-100-l'
  | 'min-h-100-l'
  | 'vh-25-l'
  | 'vh-50-l'
  | 'vh-75-l'
  | 'vh-100-l'
  | 'min-vh-100-l'
  | 'h-auto-l'
  | 'h-inherit-l'
  | 'tracked-l'
  | 'tracked-tight-l'
  | 'tracked-mega-l'
  | 'lh-solid-l'
  | 'lh-title-l'
  | 'lh-copy-l'
  | 'mw-100-l'
  | 'mw1-l'
  | 'mw2-l'
  | 'mw3-l'
  | 'mw4-l'
  | 'mw5-l'
  | 'mw6-l'
  | 'mw7-l'
  | 'mw8-l'
  | 'mw9-l'
  | 'mw-none-l'
  | 'w1-l'
  | 'w2-l'
  | 'w3-l'
  | 'w4-l'
  | 'w5-l'
  | 'w-10-l'
  | 'w-20-l'
  | 'w-25-l'
  | 'w-30-l'
  | 'w-33-l'
  | 'w-34-l'
  | 'w-40-l'
  | 'w-50-l'
  | 'w-60-l'
  | 'w-70-l'
  | 'w-75-l'
  | 'w-80-l'
  | 'w-90-l'
  | 'w-100-l'
  | 'w-third-l'
  | 'w-two-thirds-l'
  | 'w-auto-l'
  | 'overflow-visible-l'
  | 'overflow-hidden-l'
  | 'overflow-scroll-l'
  | 'overflow-auto-l'
  | 'overflow-x-visible-l'
  | 'overflow-x-hidden-l'
  | 'overflow-x-scroll-l'
  | 'overflow-x-auto-l'
  | 'overflow-y-visible-l'
  | 'overflow-y-hidden-l'
  | 'overflow-y-scroll-l'
  | 'overflow-y-auto-l'
  | 'static-l'
  | 'relative-l'
  | 'absolute-l'
  | 'fixed-l'
  | 'rotate-45-l'
  | 'rotate-90-l'
  | 'rotate-135-l'
  | 'rotate-180-l'
  | 'rotate-225-l'
  | 'rotate-270-l'
  | 'rotate-315-l'
  | 'pa0-l'
  | 'pa1-l'
  | 'pa2-l'
  | 'pa3-l'
  | 'pa4-l'
  | 'pa5-l'
  | 'pa6-l'
  | 'pa7-l'
  | 'pl0-l'
  | 'pl1-l'
  | 'pl2-l'
  | 'pl3-l'
  | 'pl4-l'
  | 'pl5-l'
  | 'pl6-l'
  | 'pl7-l'
  | 'pr0-l'
  | 'pr1-l'
  | 'pr2-l'
  | 'pr3-l'
  | 'pr4-l'
  | 'pr5-l'
  | 'pr6-l'
  | 'pr7-l'
  | 'pb0-l'
  | 'pb1-l'
  | 'pb2-l'
  | 'pb3-l'
  | 'pb4-l'
  | 'pb5-l'
  | 'pb6-l'
  | 'pb7-l'
  | 'pt0-l'
  | 'pt1-l'
  | 'pt2-l'
  | 'pt3-l'
  | 'pt4-l'
  | 'pt5-l'
  | 'pt6-l'
  | 'pt7-l'
  | 'pv0-l'
  | 'pv1-l'
  | 'pv2-l'
  | 'pv3-l'
  | 'pv4-l'
  | 'pv5-l'
  | 'pv6-l'
  | 'pv7-l'
  | 'ph0-l'
  | 'ph1-l'
  | 'ph2-l'
  | 'ph3-l'
  | 'ph4-l'
  | 'ph5-l'
  | 'ph6-l'
  | 'ph7-l'
  | 'ma0-l'
  | 'ma1-l'
  | 'ma2-l'
  | 'ma3-l'
  | 'ma4-l'
  | 'ma5-l'
  | 'ma6-l'
  | 'ma7-l'
  | 'ml0-l'
  | 'ml1-l'
  | 'ml2-l'
  | 'ml3-l'
  | 'ml4-l'
  | 'ml5-l'
  | 'ml6-l'
  | 'ml7-l'
  | 'mr0-l'
  | 'mr1-l'
  | 'mr2-l'
  | 'mr3-l'
  | 'mr4-l'
  | 'mr5-l'
  | 'mr6-l'
  | 'mr7-l'
  | 'mb0-l'
  | 'mb1-l'
  | 'mb2-l'
  | 'mb3-l'
  | 'mb4-l'
  | 'mb5-l'
  | 'mb6-l'
  | 'mb7-l'
  | 'mt0-l'
  | 'mt1-l'
  | 'mt2-l'
  | 'mt3-l'
  | 'mt4-l'
  | 'mt5-l'
  | 'mt6-l'
  | 'mt7-l'
  | 'mv0-l'
  | 'mv1-l'
  | 'mv2-l'
  | 'mv3-l'
  | 'mv4-l'
  | 'mv5-l'
  | 'mv6-l'
  | 'mv7-l'
  | 'mh0-l'
  | 'mh1-l'
  | 'mh2-l'
  | 'mh3-l'
  | 'mh4-l'
  | 'mh5-l'
  | 'mh6-l'
  | 'mh7-l'
  | 'na1-l'
  | 'na2-l'
  | 'na3-l'
  | 'na4-l'
  | 'na5-l'
  | 'na6-l'
  | 'na7-l'
  | 'nl1-l'
  | 'nl2-l'
  | 'nl3-l'
  | 'nl4-l'
  | 'nl5-l'
  | 'nl6-l'
  | 'nl7-l'
  | 'nr1-l'
  | 'nr2-l'
  | 'nr3-l'
  | 'nr4-l'
  | 'nr5-l'
  | 'nr6-l'
  | 'nr7-l'
  | 'nb1-l'
  | 'nb2-l'
  | 'nb3-l'
  | 'nb4-l'
  | 'nb5-l'
  | 'nb6-l'
  | 'nb7-l'
  | 'nt1-l'
  | 'nt2-l'
  | 'nt3-l'
  | 'nt4-l'
  | 'nt5-l'
  | 'nt6-l'
  | 'nt7-l'
  | 'strike-l'
  | 'underline-l'
  | 'no-underline-l'
  | 'tl-l'
  | 'tr-l'
  | 'tc-l'
  | 'tj-l'
  | 'ttc-l'
  | 'ttl-l'
  | 'ttu-l'
  | 'ttn-l'
  | 'f-headline-l'
  | 'f-subheadline-l'
  | 'f1-l'
  | 'f2-l'
  | 'f3-l'
  | 'f4-l'
  | 'f5-l'
  | 'f6-l'
  | 'f7-l'
  | 'measure-l'
  | 'measure-wide-l'
  | 'measure-narrow-l'
  | 'indent-l'
  | 'small-caps-l'
  | 'truncate-l'
  | 'center-l'
  | 'mr-auto-l'
  | 'ml-auto-l'
  | 'clip-l'
  | 'ws-normal-l'
  | 'nowrap-l'
  | 'pre-l'
  | 'v-base-l'
  | 'v-mid-l'
  | 'v-top-l'
  | 'v-btm-l';
