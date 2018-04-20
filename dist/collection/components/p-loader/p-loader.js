export class MyComponent {
    constructor() {
        this.styling = "";
        this.bg = false;
        this.initcolor = 'transparent';
        this.alt = "Lazy Image";
        this.innerHTML = "";
        this.lowres = "";
        this.highres = "";
    }
    componentWillLoad() {
        if (this.lowres != '') {
            this.src = this.lowres;
        }
        else {
            this.src = this.highres;
        }
        this.innerHTML = "<div style='background-color:" + this.initcolor + "; " + this.styling + "'></div>";
    }
    render() {
        return (h("div", { class: "full" },
            h("div", { class: "full", innerHTML: this.innerHTML }),
            h("img", { class: "hide", src: this.src, onLoad: () => this.imgloaded() })));
    }
    imgloaded() {
        if (this.bg) {
            this.innerHTML = "<div style='background-image:url(" + this.src + "); " + this.styling + "'></div>";
        }
        else {
            this.innerHTML = "<img alt='" + this.alt + "' src='" + this.src + "' style='" + this.styling + "' />";
        }
        if (this.src != this.highres && this.highres != '') {
            this.src = this.highres;
        }
    }
    static get is() { return "p-loader"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "alt": { "type": String, "attr": "alt" }, "bg": { "type": Boolean, "attr": "bg" }, "highres": { "type": String, "attr": "highres" }, "initcolor": { "type": String, "attr": "initcolor" }, "innerHTML": { "state": true }, "lowres": { "type": String, "attr": "lowres" }, "src": { "state": true }, "styling": { "type": String, "attr": "styling" } }; }
    static get style() { return "/**style-placeholder:p-loader:**/"; }
}
