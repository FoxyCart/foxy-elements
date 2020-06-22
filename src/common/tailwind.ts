import { unsafeCSS } from 'lit-element';
export const tailwind = unsafeCSS`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none;padding:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::-ms-input-placeholder,textarea::-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}@import "./node_modules/@highlightjs/cdn-assets/styles/atom-one-dark.css";details>summary::-webkit-details-marker{display:none}details>summary{list-style:none}vaadin-select{margin-top:-4px;margin-bottom:-4px}vaadin-date-picker,vaadin-email-field,vaadin-number-field,vaadin-password-field,vaadin-text-field{padding-top:0;padding-bottom:0}vaadin-date-picker{margin-top:calc(var(--lumo-space-xs, .25rem)*-1);margin-bottom:calc(var(--lumo-space-xs, .25rem)*-1)}vaadin-button{margin:0}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}.space-y-s>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(var(--lumo-space-s, .5rem)*(1 - var(--space-y-reverse)));margin-bottom:calc(var(--lumo-space-s, .5rem)*var(--space-y-reverse))}.space-x-s>:not(template)~:not(template){--space-x-reverse:0;margin-right:calc(var(--lumo-space-s, .5rem)*var(--space-x-reverse));margin-left:calc(var(--lumo-space-s, .5rem)*(1 - var(--space-x-reverse)))}.space-y-m>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(var(--lumo-space-m, 1rem)*(1 - var(--space-y-reverse)));margin-bottom:calc(var(--lumo-space-m, 1rem)*var(--space-y-reverse))}.space-x-m>:not(template)~:not(template){--space-x-reverse:0;margin-right:calc(var(--lumo-space-m, 1rem)*var(--space-x-reverse));margin-left:calc(var(--lumo-space-m, 1rem)*(1 - var(--space-x-reverse)))}.space-y-xl>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(var(--lumo-space-xl, 2.5rem)*(1 - var(--space-y-reverse)));margin-bottom:calc(var(--lumo-space-xl, 2.5rem)*var(--space-y-reverse))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.bg-base{background-color:var(--lumo-base-color,#fff)}.bg-shade-5{background-color:var(--lumo-shade-5pct,rgba(25,59,103,.05))}.bg-shade-50{background-color:var(--lumo-shade-50pct,rgba(28,48,74,.5))}.bg-shade-90{background-color:var(--lumo-shade-90pct,rgba(25,39,57,.94))}.bg-primary{background-color:var(--lumo-primary-color,#1676f3)}.bg-error{background-color:var(--lumo-error-color,#ff4238)}.border-shade-10{border-color:var(--lumo-shade-10pct,rgba(26,57,96,.1))}.rounded{border-radius:var(--lumo-border-radius-m,.5em)}.rounded-t-l{border-top-left-radius:var(--lumo-border-radius-l,.75em);border-top-right-radius:var(--lumo-border-radius-l,.75em)}.rounded-b-l{border-bottom-right-radius:var(--lumo-border-radius-l,.75em);border-bottom-left-radius:var(--lumo-border-radius-l,.75em)}.border{border-width:1px}.border-t{border-top-width:1px}.flex{display:flex}.table{display:table}.hidden{display:none}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.font-lumo{font-family:var(--lumo-font-family,-apple-system,BlinkMacSystemFont,"Roboto","Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol")}.font-medium{font-weight:500}.font-semibold{font-weight:600}.h-m{height:var(--lumo-line-size-m,2.25rem)}.h-l{height:var(--lumo-line-size-l,2.75rem)}.text-s{font-size:var(--lumo-font-size-s,.875rem)}.text-m{font-size:var(--lumo-font-size-m,1rem)}.text-l{font-size:var(--lumo-font-size-l,1.125rem)}.text-xxl{font-size:var(--lumo-font-size-xxl,1.75rem)}.leading-s{line-height:var(--lumo-line-height-s,1.375)}.m-xs{margin:var(--lumo-space-xs,.25rem)}.-m-xs{margin:calc(var(--lumo-space-xs, .25rem)*-1)}.-my-xs{margin-top:calc(var(--lumo-space-xs, .25rem)*-1);margin-bottom:calc(var(--lumo-space-xs, .25rem)*-1)}.-mx-xs{margin-left:calc(var(--lumo-space-xs, .25rem)*-1);margin-right:calc(var(--lumo-space-xs, .25rem)*-1)}.mb-xs{margin-bottom:var(--lumo-space-xs,.25rem)}.mt-s{margin-top:var(--lumo-space-s,.5rem)}.mb-s{margin-bottom:var(--lumo-space-s,.5rem)}.ml-s{margin-left:var(--lumo-space-s,.5rem)}.mb-m{margin-bottom:var(--lumo-space-m,1rem)}.-mb-xs{margin-bottom:calc(var(--lumo-space-xs, .25rem)*-1)}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.p-s{padding:var(--lumo-space-s,.5rem)}.p-m{padding:var(--lumo-space-m,1rem)}.px-xs{padding-left:var(--lumo-space-xs,.25rem);padding-right:var(--lumo-space-xs,.25rem)}.py-s{padding-top:var(--lumo-space-s,.5rem);padding-bottom:var(--lumo-space-s,.5rem)}.px-s{padding-left:var(--lumo-space-s,.5rem);padding-right:var(--lumo-space-s,.5rem)}.px-m{padding-left:var(--lumo-space-m,1rem);padding-right:var(--lumo-space-m,1rem)}.pt-s{padding-top:var(--lumo-space-s,.5rem)}.pr-m{padding-right:var(--lumo-space-m,1rem)}.pb-m{padding-bottom:var(--lumo-space-m,1rem)}.pl-m{padding-left:var(--lumo-space-m,1rem)}.pl-l{padding-left:var(--lumo-space-l,1.5rem)}.static{position:static}.absolute{position:absolute}.relative{position:relative}.sticky{position:-webkit-sticky;position:sticky}.top-0{top:0}.right-0{right:0}.bottom-0{bottom:0}.text-base{color:var(--lumo-base-color,#fff)}.text-contrast{color:var(--lumo-contrast,#192434)}.text-primary{color:var(--lumo-primary-text-color,#1676f3)}.text-error{color:var(--lumo-error-text-color,#f52419)}.text-header{color:var(--lumo-header-text-color,#192434)}.text-body{color:var(--lumo-body-text-color,rgba(25,39,57,.94))}.text-tertiary{color:var(--lumo-tertiary-text-color,rgba(28,48,74,.5))}.hover\\:text-secondary:hover{color:var(--lumo-secondary-text-color,rgba(27,43,65,.72))}.uppercase{text-transform:uppercase}.w-l{width:var(--lumo-line-size-l,2.75rem)}.w-xl{width:var(--lumo-line-size-xl,3.5rem)}.w-full{width:100%}.transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform}.duration-150{transition-duration:.15s}@media (min-width:640px){.sm\\:space-y-0>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(0px*(1 - var(--space-y-reverse)));margin-bottom:calc(0px*var(--space-y-reverse))}.sm\\:space-x-s>:not(template)~:not(template){--space-x-reverse:0;margin-right:calc(var(--lumo-space-s, .5rem)*var(--space-x-reverse));margin-left:calc(var(--lumo-space-s, .5rem)*(1 - var(--space-x-reverse)))}.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:h-m{height:var(--lumo-line-size-m,2.25rem)}.sm\\:mb-0{margin-bottom:0}.sm\\:p-0{padding:0}.sm\\:pr-xs{padding-right:var(--lumo-space-xs,.25rem)}.sm\\:pl-xs{padding-left:var(--lumo-space-xs,.25rem)}.sm\\:w-auto{width:auto}.sm\\:w-l{width:var(--lumo-line-size-l,2.75rem)}.sm\\:w-1\\/2{width:50%}}@media (min-width:768px){.md\\:space-y-0>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(0px*(1 - var(--space-y-reverse)));margin-bottom:calc(0px*var(--space-y-reverse))}.md\\:border-shade-10{border-color:var(--lumo-shade-10pct,rgba(26,57,96,.1))}.md\\:border-r{border-right-width:1px}.md\\:flex-row{flex-direction:row}.md\\:p-l{padding:var(--lumo-space-l,1.5rem)}.md\\:w-1\\/2{width:50%}}@media (min-width:1024px){.lg\\:p-xl{padding:var(--lumo-space-xl,2.5rem)}}`;