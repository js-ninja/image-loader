/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface LazyLoad {
      'alt': string;
      'bg': boolean;
      'initcolor': string;
      'src': string;
      'styling': string;
    }
  }

  interface HTMLLazyLoadElement extends StencilComponents.LazyLoad, HTMLStencilElement {}

  var HTMLLazyLoadElement: {
    prototype: HTMLLazyLoadElement;
    new (): HTMLLazyLoadElement;
  };
  interface HTMLElementTagNameMap {
    'lazy-load': HTMLLazyLoadElement;
  }
  interface ElementTagNameMap {
    'lazy-load': HTMLLazyLoadElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lazy-load': JSXElements.LazyLoadAttributes;
    }
  }
  namespace JSXElements {
    export interface LazyLoadAttributes extends HTMLAttributes {
      'alt'?: string;
      'bg'?: boolean;
      'initcolor'?: string;
      'src'?: string;
      'styling'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface PLoader {
      'alt': string;
      'bg': boolean;
      'highres': string;
      'initcolor': string;
      'lowres': string;
      'styling': string;
    }
  }

  interface HTMLPLoaderElement extends StencilComponents.PLoader, HTMLStencilElement {}

  var HTMLPLoaderElement: {
    prototype: HTMLPLoaderElement;
    new (): HTMLPLoaderElement;
  };
  interface HTMLElementTagNameMap {
    'p-loader': HTMLPLoaderElement;
  }
  interface ElementTagNameMap {
    'p-loader': HTMLPLoaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'p-loader': JSXElements.PLoaderAttributes;
    }
  }
  namespace JSXElements {
    export interface PLoaderAttributes extends HTMLAttributes {
      'alt'?: string;
      'bg'?: boolean;
      'highres'?: string;
      'initcolor'?: string;
      'lowres'?: string;
      'styling'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
