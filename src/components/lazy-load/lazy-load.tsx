import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'lazy-load',
  styleUrl: 'lazy-load.css',
  shadow: true
})
export class MyComponent {

  @Prop() src: string;
  @Prop() styling: string;
  @Prop() bg: boolean = false;
  @Prop() alt: string = "Lazy Image";
  @State() srcClass: string = "hide";
  @State() innerHTML: string = "";


  componentWillLoad() {
  }

  render() {
    if (!this.bg) {
      return (
        <div class="full" innerHTML={this.innerHTML}>
          <img class="hide" src={this.src} onLoad={() => this.imgloaded()} />
        </div>
      );
    } else {
      return (
        <div class={this.srcClass} innerHTML={this.innerHTML}>
          <img src={this.src} class="hide" onLoad={() => this.imgloaded()} />
        </div>
      );
    }
  }


  imgloaded() {
    this.srcClass = "show";
    if (this.bg) {
      this.innerHTML = "<div style='background-image:url(" + this.src + "); " + this.styling + "'></div>";
    } else {
      this.innerHTML = "<img alt='" + this.alt + "' src='" + this.src + "' style='" + this.styling + "' />";
    }
  }
}
