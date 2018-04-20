import { Component, Prop, State } from '@stencil/core';

@Component({
    tag: 'p-loader',
    styleUrl: 'p-loader.css',
    shadow: true
})
export class MyComponent {

    @State() src: string;
    @Prop() styling: string = "";
    @Prop() bg: boolean = false;
    @Prop() initcolor: string = 'transparent';
    @Prop() alt: string = "Lazy Image";
    @State() innerHTML: string = "";
    @Prop() lowres: string = "";
    @Prop() highres: string = "";


    componentWillLoad() {
        if(this.lowres != ''){
            this.src = this.lowres;
        }else{
            this.src = this.highres;
        }
        this.innerHTML = "<div style='background-color:" + this.initcolor + "; " + this.styling + "'></div>";
    }

    render() {
        return (
            <div class="full">
                <div class="full" innerHTML={this.innerHTML}>
                </div>
                <img class="hide" src={this.src} onLoad={() => this.imgloaded()} />
            </div>
        );
    }


    imgloaded() {
        if (this.bg) {
            this.innerHTML = "<div style='background-image:url(" + this.src + "); " + this.styling + "'></div>";
        } else {
            this.innerHTML = "<img alt='" + this.alt + "' src='" + this.src + "' style='" + this.styling + "' />";
        }
        if (this.src != this.highres && this.highres != '') {
            this.src = this.highres;
        }
    }
}
