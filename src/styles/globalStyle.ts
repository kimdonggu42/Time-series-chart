import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
      all: unset;
      display: revert;
  }

  *,
  *::before,
  *::after {
      box-sizing: border-box;
  }

  a, button {
      cursor: revert;
  }

  ol, ul, menu {
      list-style: none;
  }

  img {
      max-inline-size: 100%;
      max-block-size: 100%;
  }

  table {
      border-collapse: collapse;
  }

  input, textarea {
      -webkit-user-select: auto;
  }

  textarea {
      white-space: revert;
  }

  meter {
      -webkit-appearance: revert;
      appearance: revert;
  }

  :where(pre) {
      all: revert;
  }

  ::placeholder {
      color: unset;
  }

  ::marker {
      content: initial;
  }

  :where([hidden]) {
      display: none;
  }

  :where([contenteditable]:not([contenteditable="false"])) {
      -moz-user-modify: read-write;
      -webkit-user-modify: read-write;
      overflow-wrap: break-word;
      -webkit-line-break: after-white-space;
      -webkit-user-select: auto;
  }

  :where([draggable="true"]) {
      -webkit-user-drag: element;
  }

  :where(dialog:modal) {
      all: revert;
  }
`;
