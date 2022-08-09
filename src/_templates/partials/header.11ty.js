exports.html = `
  <header id="mainHead" class="header">
    <h1><a class="logo" href="/index.html">Cranach Digital Archive</a></h1>

    <div id="viewSwitcher" class="view-switcher">
      <button class="btn card-view" data-view="card-view">
      <svg id="icon-list-view" class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path
      d="M3 9h4V5H3v4zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM3 19h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h4v-4h-4v4zm0-14v4h4V5h-4z" fill="#fff" />
      </svg>
    </button>
    <button class="btn list-view" data-view="list-view">
      <svg id="icon-card-view" class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="sharp-view_compact-24px">
            <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
            <path d="M3,19 L22,19 L22,15 L3,15 L3,19 Z M3,5 L3,9 L22,9 L22,5 L3,5 Z M3,10 L3,14 L22,14 L22,10 L3,10 Z"
              id="Shape" fill="#fff" fill-rule="nonzero"></path>
          </g>
        </g>
      </svg>
    </button> 
    </div>

  </header>
`;