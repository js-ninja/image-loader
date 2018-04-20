export class MyComponent {
    constructor() {
        this.styling = "";
        this.bg = false;
        this.initcolor = 'transparent';
        this.alt = "Lazy Image";
        this.innerHTML = "";
    }
    componentWillLoad() {
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
    }
    static get is() { return "lazy-load"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "alt": { "type": String, "attr": "alt" }, "bg": { "type": Boolean, "attr": "bg" }, "initcolor": { "type": String, "attr": "initcolor" }, "innerHTML": { "state": true }, "src": { "type": String, "attr": "src" }, "styling": { "type": String, "attr": "styling" } }; }
    static get style() { return "/**style-placeholder:lazy-load:**/"; }
}
