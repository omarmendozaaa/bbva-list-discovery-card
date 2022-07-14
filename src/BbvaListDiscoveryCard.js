import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './BbvaListDiscoveryCard-styles.js';
import '@boomovie/bbva-movie-card-bs/bbva-movie-card-bs.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<bbva-list-discovery-card></bbva-list-discovery-card>
```

##styling-doc

@customElement bbva-list-discovery-card
*/
export class BbvaListDiscoveryCard extends LitElement {
  static get is() {
    return 'bbva-list-discovery-card';
  }
  getData(data) {
    this.discoveryList = data;
  }
  // Declare properties
  static get properties() {
    return {
      discoveryList: { type: Object },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('bbva-list-discovery-card-shared-styles'),
    ];
  }

  // Define a template
  render() {
    return html`
      <div class="row justify-content-center">
        ${this.discoveryList.results.map(
          (card, index) => html`
          <div class="row">
            ${index % 2 == 0 ? html`<div class="col-md-1"></div>` : html``}
            <div class="col-md-11"><bbva-movie-card-bs .movie=${card} .isextended=${true}></bbva-movie-card-bs></div>
          </div>
            `
            )}
      </div>
    `;
  }
}
