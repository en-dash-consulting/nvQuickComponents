/*! Built with http://stenciljs.com */
const{h:e}=window.NvqComponents;class t{constructor(){this.max=100}render(){return this.el.style.setProperty("--current-value",this.value.toString()),this.el.style.setProperty("--max-value",this.max.toString()),e("div",{class:"progress-container"},e("div",{class:"progress-bar"}," "),e("div",{class:"progress-bar-remainder"}))}static get is(){return"nvq-progress-bar"}static get encapsulation(){return"shadow"}static get properties(){return{el:{elementRef:!0},max:{type:Number,attr:"max"},value:{type:Number,attr:"value"}}}static get style(){return"\@charset \"UTF-8\";[data-nvq-progress-bar-host]   .progress-container[data-nvq-progress-bar]{display:-webkit-box;display:-ms-flexbox;display:flex;height:var(--progress-height,20px);background:var(--progress-background,#d3d3d3);overflow:hidden;border-radius:20px}[data-nvq-progress-bar-host]   .progress-container[data-nvq-progress-bar]   .progress-bar[data-nvq-progress-bar]{background:var(--progress-color,#add8e6);width:calc(var(--current-value,0) * 100% / var(--max-value,100))}[data-nvq-progress-bar-host]   .progress-container[data-nvq-progress-bar]   .progress-bar-remainder[data-nvq-progress-bar]{-webkit-box-flex:1;-ms-flex:1;flex:1}"}}export{t as NvqProgressBar};