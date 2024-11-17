import {
  computed as g,
  createBlock as t,
  createCommentVNode as m,
  createElementBlock as o,
  createElementVNode as l,
  createTextVNode as c,
  createVNode as r,
  Fragment as i,
  openBlock as n,
  popScopeId as p,
  pushScopeId as d,
  renderList as s,
  resolveComponent as e,
  toDisplayString as u,
  withCtx as a,
} from "vue";

import { useI18n as f } from "vue-i18n";
import { useStores as h } from "@directus/extensions-sdk";
const v = {
  ts: {
    name: "TypeScript",
    icon:
      '<svg style="width: 1em; height: 1em" viewBox="0 0 128 128" fill="rgb(23, 41, 64)"><path d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"></path></svg>',
    logo:
      '<svg style="width: 2em; height: 2em" viewBox="0 0 128 128"><path fill="#007acc" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"></path></svg>',
  },
  py: {
    name: "Python",
    icon:
      '<svg style="width: 1em; height: 1em" fill="rgb(23, 41, 64)" viewBox="0 0 128 128"><path d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"></path></svg>',
    logo:
      '<svg style="width: 2em; height: 2em" viewBox="0 0 128 128"><linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#5A9FD4"></stop><stop offset="1" stop-color="#306998"></stop></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#FFD43B"></stop><stop offset="1" stop-color="#FFE873"></stop></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"></path><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"></path><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#B8B8B8" stop-opacity=".498"></stop><stop offset="1" stop-color="#7F7F7F" stop-opacity="0"></stop></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path></svg>',
  },
  oas: {
    name: "OpenAPI",
    icon:
      '<svg style="width: 1em; height: 1em" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="rgb(23, 41, 64)"><path d="M50.2,4.7c24.9,0,45.1,20.2,45.1,45.1c0,24.9-20.2,45.1-45.1,45.1c-24.9,0-45.1-20.2-45.1-45.1        C5.1,24.9,25.3,4.7,50.2,4.7 M50.2,0C22.7,0,0.3,22.4,0.3,49.8s22.4,49.8,49.8,49.8S100,77.3,100,49.8S77.6,0,50.2,0L50.2,0z"/><path d="M31.7,33.7c-0.2,1.7,0.1,3.5-0.1,5.2c-0.1,1.7-0.3,3.4-0.7,5.1c-0.5,2.4-2,4.3-4.1,5.8   c4.1,2.6,4.5,6.7,4.8,10.9c0.1,2.2,0.1,4.5,0.3,6.7c0.2,1.7,0.8,2.2,2.6,2.2c0.7,0,1.5,0,2.3,0V75c-5.3,0.9-9.6-0.6-10.7-5.1   c-0.3-1.6-0.6-3.3-0.7-5c-0.1-1.8,0.1-3.6-0.1-5.3c-0.4-4.9-1-6.5-5.7-6.8v-6.1c0.3-0.1,0.7-0.1,1-0.2c2.6-0.1,3.7-0.9,4.2-3.5   c0.3-1.4,0.4-2.9,0.5-4.3c0.2-2.8,0.1-5.6,0.6-8.4c0.7-4,3.1-5.9,7.2-6.1c1.1-0.1,2.3,0,3.6,0v5.4c-0.6,0-1,0.1-1.5,0.1   C32.1,29.8,31.9,31,31.7,33.7z M38.1,46.3L38.1,46.3c-2-0.1-3.6,1.4-3.7,3.3c-0.1,1.9,1.4,3.6,3.3,3.7h0.2c1.9,0.1,3.5-1.3,3.6-3.2   v-0.2C41.6,48,40,46.4,38.1,46.3z M50.1,46.3c-1.9-0.1-3.4,1.4-3.5,3.2c0,0.1,0,0.2,0,0.3c0,2.1,1.4,3.4,3.6,3.4   c2.1,0,3.4-1.4,3.4-3.5C53.6,47.7,52.2,46.3,50.1,46.3z M62.4,46.3c-2,0-3.6,1.5-3.6,3.5c0,2,1.6,3.5,3.5,3.5h0   c1.8,0.3,3.5-1.4,3.7-3.4C66.1,48,64.4,46.3,62.4,46.3z M79.3,46.6c-2.2-0.1-3.3-0.8-3.9-3c-0.3-1.3-0.6-2.7-0.6-4.1   c-0.2-2.6-0.1-5.2-0.3-7.7c-0.4-6.1-4.8-8.2-11.2-7.2v5.3c1,0,1.8,0,2.6,0c1.4,0,2.4,0.5,2.5,2.1c0.1,1.4,0.1,2.8,0.3,4.2   c0.3,2.8,0.4,5.6,0.9,8.3c0.4,2.3,2,3.9,3.9,5.3c-3.4,2.3-4.4,5.5-4.6,9.2c-0.1,2.5-0.2,5-0.3,7.6c-0.1,2.3-0.9,3-3.2,3.1   c-0.7,0-1.3,0.1-2,0.1v5.4c1.4,0,2.6,0.1,3.9,0c3.9-0.2,6.2-2.1,7-5.9c0.3-2.1,0.5-4.2,0.6-6.2c0.1-1.9,0.1-3.9,0.3-5.7   c0.3-3,1.6-4.2,4.6-4.4c0.3,0,0.6-0.1,0.8-0.2v-6.1C80,46.7,79.7,46.6,79.3,46.6z" /></svg>',
    logo:
      '<svg style="width: 2em; height: 2em" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path style="fill: #85ea2d" d="M50.2,97.3C24,97.3,2.7,76,2.7,49.8S24,2.4,50.2,2.4s47.5,21.3,47.5,47.5S76.3,97.3,50.2,97.3z" /><path style="fill: #173647" d="M50.2,4.7c24.9,0,45.1,20.2,45.1,45.1c0,24.9-20.2,45.1-45.1,45.1c-24.9,0-45.1-20.2-45.1-45.1        C5.1,24.9,25.3,4.7,50.2,4.7 M50.2,0C22.7,0,0.3,22.4,0.3,49.8s22.4,49.8,49.8,49.8S100,77.3,100,49.8S77.6,0,50.2,0L50.2,0z" /><path style="fill: #173647" d="M31.7,33.7c-0.2,1.7,0.1,3.5-0.1,5.2c-0.1,1.7-0.3,3.4-0.7,5.1c-0.5,2.4-2,4.3-4.1,5.8   c4.1,2.6,4.5,6.7,4.8,10.9c0.1,2.2,0.1,4.5,0.3,6.7c0.2,1.7,0.8,2.2,2.6,2.2c0.7,0,1.5,0,2.3,0V75c-5.3,0.9-9.6-0.6-10.7-5.1   c-0.3-1.6-0.6-3.3-0.7-5c-0.1-1.8,0.1-3.6-0.1-5.3c-0.4-4.9-1-6.5-5.7-6.8v-6.1c0.3-0.1,0.7-0.1,1-0.2c2.6-0.1,3.7-0.9,4.2-3.5   c0.3-1.4,0.4-2.9,0.5-4.3c0.2-2.8,0.1-5.6,0.6-8.4c0.7-4,3.1-5.9,7.2-6.1c1.1-0.1,2.3,0,3.6,0v5.4c-0.6,0-1,0.1-1.5,0.1   C32.1,29.8,31.9,31,31.7,33.7z M38.1,46.3L38.1,46.3c-2-0.1-3.6,1.4-3.7,3.3c-0.1,1.9,1.4,3.6,3.3,3.7h0.2c1.9,0.1,3.5-1.3,3.6-3.2   v-0.2C41.6,48,40,46.4,38.1,46.3z M50.1,46.3c-1.9-0.1-3.4,1.4-3.5,3.2c0,0.1,0,0.2,0,0.3c0,2.1,1.4,3.4,3.6,3.4   c2.1,0,3.4-1.4,3.4-3.5C53.6,47.7,52.2,46.3,50.1,46.3z M62.4,46.3c-2,0-3.6,1.5-3.6,3.5c0,2,1.6,3.5,3.5,3.5h0   c1.8,0.3,3.5-1.4,3.7-3.4C66.1,48,64.4,46.3,62.4,46.3z M79.3,46.6c-2.2-0.1-3.3-0.8-3.9-3c-0.3-1.3-0.6-2.7-0.6-4.1   c-0.2-2.6-0.1-5.2-0.3-7.7c-0.4-6.1-4.8-8.2-11.2-7.2v5.3c1,0,1.8,0,2.6,0c1.4,0,2.4,0.5,2.5,2.1c0.1,1.4,0.1,2.8,0.3,4.2   c0.3,2.8,0.4,5.6,0.9,8.3c0.4,2.3,2,3.9,3.9,5.3c-3.4,2.3-4.4,5.5-4.6,9.2c-0.1,2.5-0.2,5-0.3,7.6c-0.1,2.3-0.9,3-3.2,3.1   c-0.7,0-1.3,0.1-2,0.1v5.4c1.4,0,2.6,0.1,3.9,0c3.9-0.2,6.2-2.1,7-5.9c0.3-2.1,0.5-4.2,0.6-6.2c0.1-1.9,0.1-3.9,0.3-5.7   c0.3-3,1.6-4.2,4.6-4.4c0.3,0,0.6-0.1,0.8-0.2v-6.1C80,46.7,79.7,46.6,79.3,46.6z" /></svg>',
  },
};
var y = "0.6.1", b = [], x = [];
function w(e, n) {
  if (e && "undefined" != typeof document) {
    var t,
      a = !0 === n.prepend ? "prepend" : "append",
      r = !0 === n.singleTag,
      o = "string" == typeof n.container
        ? document.querySelector(n.container)
        : document.getElementsByTagName("head")[0];
    if (r) {
      var i = b.indexOf(o);
      -1 === i && (i = b.push(o) - 1, x[i] = {}),
        t = x[i] && x[i][a] ? x[i][a] : x[i][a] = s();
    } else t = s();
    65279 === e.charCodeAt(0) && (e = e.substring(1)),
      t.styleSheet
        ? t.styleSheet.cssText += e
        : t.appendChild(document.createTextNode(e));
  }
  function s() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), n.attributes) {
      for (var t = Object.keys(n.attributes), r = 0; r < t.length; r++) {
        e.setAttribute(t[r], n.attributes[t[r]]);
      }
    }
    var i = "prepend" === a ? "afterbegin" : "beforeend";
    return o.insertAdjacentElement(i, e), e;
  }
}
w(
  "\nsvg[data-v-68c152a7] {\n  height: 1em;\n  width: 1em;\n  fill: rgb(23, 41, 64);\n}\n.version .v-icon[data-v-68c152a7] {\n  color: var(--foreground-subdued);\n  transition: color var(--fast) var(--transition);\n}\n.version[data-v-68c152a7] .v-text-overflow {\n  color: var(--foreground-subdued);\n  transition: color var(--fast) var(--transition);\n}\n.version:hover .v-icon[data-v-68c152a7] {\n  color: var(--foreground-normal-alt);\n}\n.version[data-v-68c152a7]:hover .v-text-overflow {\n  color: var(--foreground-normal-alt);\n}\n",
  {},
);
var F = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [e, a] of n) t[e] = a;
  return t;
};
const k = ["innerHTML"];
var A = F({ data: () => ({ languages: v, version: y }) }, [
  ["render", function (c, u, d, p, g, m) {
    const h = e("v-icon"),
      f = e("v-list-item-icon"),
      v = e("v-text-overflow"),
      y = e("v-list-item-content"),
      b = e("v-list-item"),
      x = e("v-divider"),
      w = e("v-list");
    return n(),
      t(w, { nav: "" }, {
        default: a(
          () => [
            r(b, { to: "/generate-types/index", class: "version" }, {
              default: a(
                () => [
                  r(f, null, {
                    default: a(() => [r(h, { name: "code" })]),
                    _: 1,
                  }),
                  r(y, null, {
                    default: a(
                      () => [
                        r(
                          v,
                          {
                            class: "version",
                            text: `generate-types v${c.version}`,
                          },
                          null,
                          8,
                          ["text"],
                        ),
                      ],
                    ),
                    _: 1,
                  }),
                ],
              ),
              _: 1,
            }),
            r(x),
            (n(!0),
              o(
                i,
                null,
                s(Object.keys(c.languages), (e) => (n(),
                  t(
                    b,
                    { key: e, to: `/generate-types/${e}` },
                    {
                      default: a(
                        () => [
                          r(f, null, {
                            default: a(
                              () => [
                                l(
                                  "div",
                                  { innerHTML: c.languages[e].icon },
                                  null,
                                  8,
                                  k,
                                ),
                              ],
                            ),
                            _: 2,
                          }, 1024),
                          r(y, null, {
                            default: a(
                              () => [
                                r(v, { text: c.languages[e].name }, null, 8, [
                                  "text",
                                ]),
                              ],
                            ),
                            _: 2,
                          }, 1024),
                        ],
                      ),
                      _: 2,
                    },
                    1032,
                    ["to"],
                  ))),
                128,
              )),
          ],
        ),
        _: 1,
      });
  }],
  ["__scopeId", "data-v-68c152a7"],
  ["__file", "navigation.vue"],
]);
w(
  "\n.page[data-v-8a823808] {\n  padding: 0 var(--content-padding) var(--content-padding-bottom);\n}\ncode[data-v-8a823808] {\n  background-color: rgba(0, 0, 0, 0.05);\n  font-size: 0.9em;\n  padding: 3px 5px;\n  border-radius: 4px;\n}\nh4[data-v-8a823808] {\n  font-size: 1.3em;\n  font-weight: 700;\n}\nh4[data-v-8a823808],\np[data-v-8a823808] {\n  margin-bottom: 1em;\n}\nsvg[data-v-8a823808] {\n  width: 1em;\n  height: 1em;\n  margin-right: 5px;\n  transform: translateY(1px);\n}\na[data-v-8a823808] {\n  color: var(--primary-110);\n  font-weight: 500;\n  text-decoration: none;\n}\na[data-v-8a823808]:hover {\n  text-decoration: underline;\n}\n",
  {},
);
const _ = { components: { NavbarComponent: A }, data: () => ({ version: y }) },
  $ = (e) => (d("data-v-8a823808"), e = e(), p(), e),
  C = { class: "page" },
  S = $(() => l("code", null, "generate-types", -1)),
  z = $(
    () =>
      l(
        "p",
        null,
        " Select the language you want to generate types for on the left to start. ",
        -1,
      ),
  ),
  j = $(
    () =>
      l("p", null, [
        l("a", {
          href: "https://github.com/maltejur/directus-extension-generate-types",
        }, [
          l("svg", { viewBox: "0 0 128 128" }, [
            l("g", { fill: "currentColor" }, [
              l("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z",
              }),
              l("path", {
                d: "M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0",
              }),
            ]),
          ]),
          l("span", null, "GitHub"),
        ]),
      ], -1),
  );
var T = F(_, [
    ["render", function (o, i, s, d, p, g) {
      const m = e("NavbarComponent"),
        h = e("v-icon"),
        f = e("v-button"),
        v = e("private-view");
      return n(),
        t(v, { title: "Generate Types" }, {
          navigation: a(() => [r(m)]),
          "title-outer:prepend": a(
            () => [
              r(f, {
                class: "header-icon",
                rounded: "",
                disabled: "",
                icon: "",
                secondary: "",
              }, { default: a(() => [r(h, { name: "code" })]), _: 1 }),
            ],
          ),
          default: a(
            () => [
              l("div", C, [
                l("h4", null, [
                  c(" Welcome to "),
                  S,
                  c(" version "),
                  l("code", null, u(p.version), 1),
                ]),
                z,
                j,
              ]),
            ],
          ),
          _: 1,
        });
    }],
    ["__scopeId", "data-v-8a823808"],
    ["__file", "index.vue"],
  ]),
  P = "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : {};
function M(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var E = { exports: {} };
!function (e) {
  var n = function (e) {
    var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
      t = 0,
      a = {},
      r = {
        manual: e.Prism && e.Prism.manual,
        disableWorkerMessageHandler: e.Prism &&
          e.Prism.disableWorkerMessageHandler,
        util: {
          encode: function e(n) {
            return n instanceof o
              ? new o(n.type, e(n.content), n.alias)
              : Array.isArray(n)
              ? n.map(e)
              : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(
                /\u00a0/g,
                " ",
              );
          },
          type: function (e) {
            return Object.prototype.toString.call(e).slice(8, -1);
          },
          objId: function (e) {
            return e.__id || Object.defineProperty(e, "__id", { value: ++t }),
              e.__id;
          },
          clone: function e(n, t) {
            var a, o;
            switch (t = t || {}, r.util.type(n)) {
              case "Object":
                if (o = r.util.objId(n), t[o]) return t[o];
                for (var i in a = {}, t[o] = a, n) {
                  n.hasOwnProperty(i) && (a[i] = e(n[i], t));
                }
                return a;
              case "Array":
                return o = r.util.objId(n),
                  t[o] ? t[o] : (a = [],
                    t[o] = a,
                    n.forEach(function (n, r) {
                      a[r] = e(n, t);
                    }),
                    a);
              default:
                return n;
            }
          },
          getLanguage: function (e) {
            for (; e;) {
              var t = n.exec(e.className);
              if (t) return t[1].toLowerCase();
              e = e.parentElement;
            }
            return "none";
          },
          setLanguage: function (e, t) {
            e.className = e.className.replace(RegExp(n, "gi"), ""),
              e.classList.add("language-" + t);
          },
          currentScript: function () {
            if ("undefined" == typeof document) return null;
            if ("currentScript" in document) return document.currentScript;
            try {
              throw new Error();
            } catch (a) {
              var e =
                (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack) || [])[1];
              if (e) {
                var n = document.getElementsByTagName("script");
                for (var t in n) if (n[t].src == e) return n[t];
              }
              return null;
            }
          },
          isActive: function (e, n, t) {
            for (var a = "no-" + n; e;) {
              var r = e.classList;
              if (r.contains(n)) return !0;
              if (r.contains(a)) return !1;
              e = e.parentElement;
            }
            return !!t;
          },
        },
        languages: {
          plain: a,
          plaintext: a,
          text: a,
          txt: a,
          extend: function (e, n) {
            var t = r.util.clone(r.languages[e]);
            for (var a in n) t[a] = n[a];
            return t;
          },
          insertBefore: function (e, n, t, a) {
            var o = (a = a || r.languages)[e], i = {};
            for (var s in o) {
              if (o.hasOwnProperty(s)) {
                if (s == n) {
                  for (var l in t) t.hasOwnProperty(l) && (i[l] = t[l]);
                }
                t.hasOwnProperty(s) || (i[s] = o[s]);
              }
            }
            var c = a[e];
            return a[e] = i,
              r.languages.DFS(r.languages, function (n, t) {
                t === c && n != e && (this[n] = i);
              }),
              i;
          },
          DFS: function e(n, t, a, o) {
            o = o || {};
            var i = r.util.objId;
            for (var s in n) {
              if (n.hasOwnProperty(s)) {
                t.call(n, s, n[s], a || s);
                var l = n[s], c = r.util.type(l);
                "Object" !== c || o[i(l)]
                  ? "Array" !== c || o[i(l)] || (o[i(l)] = !0, e(l, t, s, o))
                  : (o[i(l)] = !0, e(l, t, null, o));
              }
            }
          },
        },
        plugins: {},
        highlightAll: function (e, n) {
          r.highlightAllUnder(document, e, n);
        },
        highlightAllUnder: function (e, n, t) {
          var a = {
            callback: t,
            container: e,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
          };
          r.hooks.run("before-highlightall", a),
            a.elements = Array.prototype.slice.apply(
              a.container.querySelectorAll(a.selector),
            ),
            r.hooks.run("before-all-elements-highlight", a);
          for (var o, i = 0; o = a.elements[i++];) {
            r.highlightElement(o, !0 === n, a.callback);
          }
        },
        highlightElement: function (n, t, a) {
          var o = r.util.getLanguage(n), i = r.languages[o];
          r.util.setLanguage(n, o);
          var s = n.parentElement;
          s && "pre" === s.nodeName.toLowerCase() && r.util.setLanguage(s, o);
          var l = { element: n, language: o, grammar: i, code: n.textContent };
          function c(e) {
            l.highlightedCode = e,
              r.hooks.run("before-insert", l),
              l.element.innerHTML = l.highlightedCode,
              r.hooks.run("after-highlight", l),
              r.hooks.run("complete", l),
              a && a.call(l.element);
          }
          if (
            r.hooks.run("before-sanity-check", l),
              (s = l.element.parentElement) &&
              "pre" === s.nodeName.toLowerCase() &&
              !s.hasAttribute("tabindex") && s.setAttribute("tabindex", "0"),
              !l.code
          ) return r.hooks.run("complete", l), void (a && a.call(l.element));
          if (r.hooks.run("before-highlight", l), l.grammar) {
            if (t && e.Worker) {
              var u = new Worker(r.filename);
              u.onmessage = function (e) {
                c(e.data);
              },
                u.postMessage(
                  JSON.stringify({
                    language: l.language,
                    code: l.code,
                    immediateClose: !0,
                  }),
                );
            } else c(r.highlight(l.code, l.grammar, l.language));
          } else c(r.util.encode(l.code));
        },
        highlight: function (e, n, t) {
          var a = { code: e, grammar: n, language: t };
          if (r.hooks.run("before-tokenize", a), !a.grammar) {
            throw new Error(
              'The language "' + a.language + '" has no grammar.',
            );
          }
          return a.tokens = r.tokenize(a.code, a.grammar),
            r.hooks.run("after-tokenize", a),
            o.stringify(r.util.encode(a.tokens), a.language);
        },
        tokenize: function (e, n) {
          var t = n.rest;
          if (t) {
            for (var a in t) n[a] = t[a];
            delete n.rest;
          }
          var r = new l();
          return c(r, r.head, e),
            s(e, r, n, r.head, 0),
            function (e) {
              var n = [], t = e.head.next;
              for (; t !== e.tail;) n.push(t.value), t = t.next;
              return n;
            }(r);
        },
        hooks: {
          all: {},
          add: function (e, n) {
            var t = r.hooks.all;
            t[e] = t[e] || [], t[e].push(n);
          },
          run: function (e, n) {
            var t = r.hooks.all[e];
            if (t && t.length) { for (var a, o = 0; a = t[o++];) a(n); }
          },
        },
        Token: o,
      };
    function o(e, n, t, a) {
      this.type = e,
        this.content = n,
        this.alias = t,
        this.length = 0 | (a || "").length;
    }
    function i(e, n, t, a) {
      e.lastIndex = n;
      var r = e.exec(t);
      if (r && a && r[1]) {
        var o = r[1].length;
        r.index += o, r[0] = r[0].slice(o);
      }
      return r;
    }
    function s(e, n, t, a, l, d) {
      for (var p in t) {
        if (t.hasOwnProperty(p) && t[p]) {
          var g = t[p];
          g = Array.isArray(g) ? g : [g];
          for (var m = 0; m < g.length; ++m) {
            if (d && d.cause == p + "," + m) return;
            var h = g[m],
              f = h.inside,
              v = !!h.lookbehind,
              y = !!h.greedy,
              b = h.alias;
            if (y && !h.pattern.global) {
              var x = h.pattern.toString().match(/[imsuy]*$/)[0];
              h.pattern = RegExp(h.pattern.source, x + "g");
            }
            for (
              var w = h.pattern || h, F = a.next, k = l;
              F !== n.tail && !(d && k >= d.reach);
              k += F.value.length, F = F.next
            ) {
              var A = F.value;
              if (n.length > e.length) return;
              if (!(A instanceof o)) {
                var _, $ = 1;
                if (y) {
                  if (!(_ = i(w, k, e, v)) || _.index >= e.length) break;
                  var C = _.index, S = _.index + _[0].length, z = k;
                  for (z += F.value.length; C >= z;) {
                    z += (F = F.next).value.length;
                  }
                  if (k = z -= F.value.length, F.value instanceof o) continue;
                  for (
                    var j = F;
                    j !== n.tail && (z < S || "string" == typeof j.value);
                    j = j.next
                  ) $++, z += j.value.length;
                  $--, A = e.slice(k, z), _.index -= k;
                } else if (!(_ = i(w, 0, A, v))) continue;
                C = _.index;
                var T = _[0],
                  P = A.slice(0, C),
                  M = A.slice(C + T.length),
                  E = k + A.length;
                d && E > d.reach && (d.reach = E);
                var O = F.prev;
                if (
                  P && (O = c(n, O, P), k += P.length),
                    u(n, O, $),
                    F = c(n, O, new o(p, f ? r.tokenize(T, f) : T, b, T)),
                    M && c(n, F, M),
                    $ > 1
                ) {
                  var L = { cause: p + "," + m, reach: E };
                  s(e, n, t, F.prev, k, L),
                    d && L.reach > d.reach && (d.reach = L.reach);
                }
              }
            }
          }
        }
      }
    }
    function l() {
      var e = { value: null, prev: null, next: null },
        n = { value: null, prev: e, next: null };
      e.next = n, this.head = e, this.tail = n, this.length = 0;
    }
    function c(e, n, t) {
      var a = n.next, r = { value: t, prev: n, next: a };
      return n.next = r, a.prev = r, e.length++, r;
    }
    function u(e, n, t) {
      for (var a = n.next, r = 0; r < t && a !== e.tail; r++) a = a.next;
      n.next = a, a.prev = n, e.length -= r;
    }
    if (
      e.Prism = r,
        o.stringify = function e(n, t) {
          if ("string" == typeof n) return n;
          if (Array.isArray(n)) {
            var a = "";
            return n.forEach(function (n) {
              a += e(n, t);
            }),
              a;
          }
          var o = {
              type: n.type,
              content: e(n.content, t),
              tag: "span",
              classes: ["token", n.type],
              attributes: {},
              language: t,
            },
            i = n.alias;
          i && (Array.isArray(i)
            ? Array.prototype.push.apply(o.classes, i)
            : o.classes.push(i)), r.hooks.run("wrap", o);
          var s = "";
          for (var l in o.attributes) {
            s += " " + l + '="' +
              (o.attributes[l] || "").replace(/"/g, "&quot;") + '"';
          }
          return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + s +
            ">" + o.content + "</" + o.tag + ">";
        },
        !e.document
    ) {
      return e.addEventListener
        ? (r.disableWorkerMessageHandler ||
          e.addEventListener("message", function (n) {
            var t = JSON.parse(n.data),
              a = t.language,
              o = t.code,
              i = t.immediateClose;
            e.postMessage(r.highlight(o, r.languages[a], a)), i && e.close();
          }, !1),
          r)
        : r;
    }
    var d = r.util.currentScript();
    function p() {
      r.manual || r.highlightAll();
    }
    if (
      d &&
      (r.filename = d.src, d.hasAttribute("data-manual") && (r.manual = !0)),
        !r.manual
    ) {
      var g = document.readyState;
      "loading" === g || "interactive" === g && d && d.defer
        ? document.addEventListener("DOMContentLoaded", p)
        : window.requestAnimationFrame
        ? window.requestAnimationFrame(p)
        : window.setTimeout(p, 16);
    }
    return r;
  }(
    "undefined" != typeof window
      ? window
      : "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope
      ? self
      : {},
  );
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */ e.exports && (e.exports = n),
    void 0 !== P && (P.Prism = n),
    n.languages.markup = {
      comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
      prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
      doctype: {
        pattern:
          /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: !0,
            greedy: !0,
            inside: null,
          },
          string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
          punctuation: /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          name: /[^\s<>'"]+/,
        },
      },
      cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
      tag: {
        pattern:
          /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [{ pattern: /^=/, alias: "attr-equals" }, {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0,
              }],
            },
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: { namespace: /^[^\s>\/:]+:/ },
          },
        },
      },
      entity: [
        { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
        /&#x?[\da-f]{1,8};/i,
      ],
    },
    n.languages.markup.tag.inside["attr-value"].inside.entity =
      n.languages.markup.entity,
    n.languages.markup.doctype.inside["internal-subset"].inside =
      n.languages.markup,
    n.hooks.add("wrap", function (e) {
      "entity" === e.type &&
        (e.attributes.title = e.content.replace(/&amp;/, "&"));
    }),
    Object.defineProperty(n.languages.markup.tag, "addInlined", {
      value: function (e, t) {
        var a = {};
        a["language-" + t] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: n.languages[t],
        }, a.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var r = {
          "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: a },
        };
        r["language-" + t] = { pattern: /[\s\S]+/, inside: n.languages[t] };
        var o = {};
        o[e] = {
          pattern: RegExp(
            /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/
              .source.replace(/__/g, function () {
                return e;
              }),
            "i",
          ),
          lookbehind: !0,
          greedy: !0,
          inside: r,
        }, n.languages.insertBefore("markup", "cdata", o);
      },
    }),
    Object.defineProperty(n.languages.markup.tag, "addAttribute", {
      value: function (e, t) {
        n.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source + "(?:" + e + ")" +
              /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            "i",
          ),
          lookbehind: !0,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [t, "language-" + t],
                  inside: n.languages[t],
                },
                punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
              },
            },
          },
        });
      },
    }),
    n.languages.html = n.languages.markup,
    n.languages.mathml = n.languages.markup,
    n.languages.svg = n.languages.markup,
    n.languages.xml = n.languages.extend("markup", {}),
    n.languages.ssml = n.languages.xml,
    n.languages.atom = n.languages.xml,
    n.languages.rss = n.languages.xml,
    function (e) {
      var n =
        /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      e.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: RegExp(
            "@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + n.source +
              ")*?" + /(?:;|(?=\s*\{))/.source,
          ),
          inside: {
            rule: /^@[\w-]+/,
            "selector-function-argument": {
              pattern:
                /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: !0,
              alias: "selector",
            },
            keyword: {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: !0,
            },
          },
        },
        url: {
          pattern: RegExp(
            "\\burl\\((?:" + n.source + "|" +
              /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)",
            "i",
          ),
          greedy: !0,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: { pattern: RegExp("^" + n.source + "$"), alias: "url" },
          },
        },
        selector: {
          pattern: RegExp(
            "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + n.source +
              ")*(?=\\s*\\{)",
          ),
          lookbehind: !0,
        },
        string: { pattern: n, greedy: !0 },
        property: {
          pattern:
            /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: !0,
        },
        important: /!important\b/i,
        function: {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: !0,
        },
        punctuation: /[(){};:,]/,
      }, e.languages.css.atrule.inside.rest = e.languages.css;
      var t = e.languages.markup;
      t &&
        (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
    }(n),
    n.languages.clike = {
      comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0,
      }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0,
      },
      "class-name": {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: { punctuation: /[.\\]/ },
      },
      keyword:
        /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      boolean: /\b(?:false|true)\b/,
      function: /\b\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/,
    },
    n.languages.javascript = n.languages.extend("clike", {
      "class-name": [n.languages.clike["class-name"], {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0,
      }],
      keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 }, {
        pattern:
          /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0,
      }],
      function:
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: {
        pattern: RegExp(
          /(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" +
            /0[bB][01]+(?:_[01]+)*n?/.source + "|" +
            /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" +
            /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" +
            /\d+(?:_\d+)*n/.source + "|" +
            /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
              .source +
            ")" + /(?![\w$])/.source,
        ),
        lookbehind: !0,
      },
      operator:
        /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
    }),
    n.languages.javascript["class-name"][0].pattern =
      /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,
    n.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern: RegExp(
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
            /\//.source + "(?:" +
            /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/
              .source +
            "|" +
            /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
              .source +
            ")" +
            /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/
              .source,
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: "language-regex",
            inside: n.languages.regex,
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/,
        },
      },
      "function-variable": {
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function",
      },
      parameter: [{
        pattern:
          /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: n.languages.javascript,
      }, {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: n.languages.javascript,
      }, {
        pattern:
          /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: n.languages.javascript,
      }, {
        pattern:
          /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: n.languages.javascript,
      }],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    }),
    n.languages.insertBefore("javascript", "string", {
      hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
      "template-string": {
        pattern:
          /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          "template-punctuation": { pattern: /^`|`$/, alias: "string" },
          interpolation: {
            pattern:
              /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation",
              },
              rest: n.languages.javascript,
            },
          },
          string: /[\s\S]+/,
        },
      },
      "string-property": {
        pattern:
          /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property",
      },
    }),
    n.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern:
          /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property",
      },
    }),
    n.languages.markup &&
    (n.languages.markup.tag.addInlined("script", "javascript"),
      n.languages.markup.tag.addAttribute(
        /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
          .source,
        "javascript",
      )),
    n.languages.js = n.languages.javascript,
    function () {
      if (void 0 !== n && "undefined" != typeof document) {
        Element.prototype.matches ||
          (Element.prototype.matches = Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector);
        var e = {
            js: "javascript",
            py: "python",
            rb: "ruby",
            ps1: "powershell",
            psm1: "powershell",
            sh: "bash",
            bat: "batch",
            h: "c",
            tex: "latex",
          },
          t = "data-src-status",
          a = "loading",
          r = "loaded",
          o = "pre[data-src]:not([" + t + '="' + r + '"]):not([' + t + '="' +
            a + '"])';
        n.hooks.add("before-highlightall", function (e) {
          e.selector += ", " + o;
        }),
          n.hooks.add("before-sanity-check", function (i) {
            var s = i.element;
            if (s.matches(o)) {
              i.code = "", s.setAttribute(t, a);
              var l = s.appendChild(document.createElement("CODE"));
              l.textContent = "Loading…";
              var c = s.getAttribute("data-src"), u = i.language;
              if ("none" === u) {
                var d = (/\.(\w+)$/.exec(c) || [, "none"])[1];
                u = e[d] || d;
              }
              n.util.setLanguage(l, u), n.util.setLanguage(s, u);
              var p = n.plugins.autoloader;
              p && p.loadLanguages(u),
                function (e, n, t) {
                  var a = new XMLHttpRequest();
                  a.open("GET", e, !0),
                    a.onreadystatechange = function () {
                      4 == a.readyState &&
                        (a.status < 400 && a.responseText
                          ? n(a.responseText)
                          : a.status >= 400
                          ? t(
                            "✖ Error " + a.status + " while fetching file: " +
                              a.statusText,
                          )
                          : t("✖ Error: File does not exist or is empty"));
                    },
                    a.send(null);
                }(c, function (e) {
                  s.setAttribute(t, r);
                  var a = function (e) {
                    var n = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(
                      e || "",
                    );
                    if (n) {
                      var t = Number(n[1]), a = n[2], r = n[3];
                      return a ? r ? [t, Number(r)] : [t, void 0] : [t, t];
                    }
                  }(s.getAttribute("data-range"));
                  if (a) {
                    var o = e.split(/\r\n?|\n/g),
                      i = a[0],
                      c = null == a[1] ? o.length : a[1];
                    i < 0 && (i += o.length),
                      i = Math.max(0, Math.min(i - 1, o.length)),
                      c < 0 && (c += o.length),
                      c = Math.max(0, Math.min(c, o.length)),
                      e = o.slice(i, c).join("\n"),
                      s.hasAttribute("data-start") ||
                      s.setAttribute("data-start", String(i + 1));
                  }
                  l.textContent = e, n.highlightElement(l);
                }, function (e) {
                  s.setAttribute(t, "failed"), l.textContent = e;
                });
            }
          }),
          n.plugins.fileHighlight = {
            highlight: function (e) {
              for (
                var t, a = (e || document).querySelectorAll(o), r = 0;
                t = a[r++];
              ) n.highlightElement(t);
            },
          };
        var i = !1;
        n.fileHighlight = function () {
          i ||
          (console.warn(
            "Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.",
          ),
            i = !0), n.plugins.fileHighlight.highlight.apply(this, arguments);
        };
      }
    }();
}(E);
var O = M(E.exports);
var L = (e, n, t) =>
  new Promise((a, r) => {
    var o = (e) => {
        try {
          s(t.next(e));
        } catch (e) {
          r(e);
        }
      },
      i = (e) => {
        try {
          s(t.throw(e));
        } catch (e) {
          r(e);
        }
      },
      s = (e) => e.done ? a(e.value) : Promise.resolve(e.value).then(o, i);
    s((t = t.apply(e, n)).next());
  });
var H = {
  props: {
    value: String,
    language: String,
    downloadName: String,
    loading: Boolean,
  },
  computed: {
    rendered() {
      return O.highlight(this.value, O.languages[this.language], this.language);
    },
  },
  methods: {
    downloadTypes() {
      !function (e, n, t = "text/plain") {
        var a = new Blob([e], { type: t }), r = document.createElement("a");
        r.download = n,
          r.innerHTML = "Download File",
          null != window.webkitURL
            ? r.href = window.webkitURL.createObjectURL(a)
            : (r.href = window.URL.createObjectURL(a),
              r.style.display = "none",
              document.body.appendChild(r)),
          r.click();
      }(this.value, this.downloadName, "application/json");
    },
  },
  setup(e) {
    const { useNotificationsStore: n } = h(),
      t = n(),
      { t: a } = f(),
      { isCopySupported: r, copyToClipboard: o } = function () {
        const { t: e } = f();
        return {
          isCopySupported: g(() => {
            var e;
            return !!(null ==
                (e = null == navigator ? void 0 : navigator.clipboard)
              ? void 0
              : e.writeText);
          }),
          isPasteSupported: g(() => {
            var e;
            return !!(null ==
                (e = null == navigator ? void 0 : navigator.clipboard)
              ? void 0
              : e.readText);
          }),
          copyToClipboard: function (n, t, a) {
            return L(this, null, function* () {
              var r, o, i;
              try {
                return yield null ==
                    (r = null == navigator ? void 0 : navigator.clipboard)
                  ? void 0
                  : r.writeText(n),
                  t.add({
                    title: null != (o = null == a ? void 0 : a.success)
                      ? o
                      : e("copy_raw_value_success"),
                  }),
                  !0;
              } catch (n) {
                return t.add({
                  type: "error",
                  title: null != (i = null == a ? void 0 : a.fail)
                    ? i
                    : e("copy_raw_value_fail"),
                }),
                  !1;
              }
            });
          },
          pasteFromClipboard: function (n, t) {
            return L(this, null, function* () {
              var a, r, o;
              try {
                const o = yield null ==
                    (a = null == navigator ? void 0 : navigator.clipboard)
                  ? void 0
                  : a.readText();
                return n.add({
                  title: null != (r = null == t ? void 0 : t.success)
                    ? r
                    : e("paste_raw_value_success"),
                }),
                  o;
              } catch (a) {
                return n.add({
                  type: "error",
                  title: null != (o = null == t ? void 0 : t.fail)
                    ? o
                    : e("paste_raw_value_fail"),
                }),
                  null;
              }
            });
          },
        };
      }();
    return {
      isCopySupported: r,
      copyValue: function () {
        return n = this,
          a = null,
          r = function* () {
            yield o(e.value, t);
          },
          new Promise((e, t) => {
            var o = (e) => {
                try {
                  s(r.next(e));
                } catch (e) {
                  t(e);
                }
              },
              i = (e) => {
                try {
                  s(r.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              s = (n) =>
                n.done ? e(n.value) : Promise.resolve(n.value).then(o, i);
            s((r = r.apply(n, a)).next());
          });
        var n, a, r;
      },
      t: a,
    };
  },
};
w(
  "\n.code[data-v-95e87a91] {\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n  max-width: 100%;\n  margin-top: 10px;\n  margin-bottom: 25px;\n  margin-right: 25px;\n}\n.generate-types-textarea[data-v-95e87a91] {\n  position: relative;\n  width: 100%;\n  height: auto;\n  max-height: 65vh;\n  padding: 15px;\n  overflow: auto;\n  background-color: var(--theme--form--field--input--background);\n  border: var(--theme--border-width) solid var(--theme--form--field--input--border-color);\n  border-radius: var(--theme--border-radius);\n  transition: all var(--fast) var(--transition);\n  box-shadow: var(--theme--form--field--input--box-shadow);\n}\n.generate-types-textarea[data-v-95e87a91]:hover:not(.disabled) {\n  border-color: var(--theme--form--field--input--border-color-hover);\n  box-shadow: var(--theme--form--field--input--box-shadow-hover);\n}\n.generate-types-textarea[data-v-95e87a91]:focus:not(.disabled),\n.generate-types-textarea[data-v-95e87a91]:focus-within:not(.disabled) {\n  border-color: var(--primary);\n}\n.buttonRow[data-v-95e87a91] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-top: 15px;\n}\n.buttonRow > div[data-v-95e87a91] {\n  margin-left: 15px;\n}\n.inline-progress[data-v-95e87a91] {\n  --v-progress-circular-size: 1em;\n  display: inline;\n  /* vertical-align: sub; */\n  margin: 0 5px;\n}\n",
  {},
);
w(
  "\n.generate-types-textarea,\n.generate-types-textarea * {\n  user-select: text;\n}\n",
  {},
);
const D = { class: "code" },
  I = { class: "generate-types-textarea" },
  N = ["innerHTML"],
  B = { class: "buttonRow" };
var R = F(H, [
  ["render", function (i, s, d, p, g, h) {
    const f = e("v-progress-circular"), v = e("v-icon"), y = e("v-button");
    return n(),
      o("div", D, [
        l("i", null, [
          c(u(d.downloadName) + " ", 1),
          d.loading && h.rendered
            ? (n(),
              t(f, { key: 0, indeterminate: "", class: "inline-progress" }))
            : m("v-if", !0),
        ]),
        l("div", I, [
          h.rendered
            ? (n(), o("pre", { key: 0, innerHTML: h.rendered }, null, 8, N))
            : (n(), t(f, { key: 1, indeterminate: "" })),
        ]),
        l("div", B, [
          p.isCopySupported
            ? (n(),
              t(
                y,
                { key: 0, class: "copyBtn", onClick: p.copyValue },
                {
                  default: a(
                    () => [
                      r(
                        v,
                        {
                          name: "content_copy",
                          style: { "margin-right": "8px" },
                          disabled: !i.types,
                        },
                        null,
                        8,
                        ["disabled"],
                      ),
                      c(" " + u(p.t("copy")), 1),
                    ],
                  ),
                  _: 1,
                },
                8,
                ["onClick"],
              ))
            : m("v-if", !0),
          this.downloadName
            ? (n(),
              t(
                y,
                { key: 1, class: "downloadBtn", onClick: h.downloadTypes },
                {
                  default: a(
                    () => [
                      r(
                        v,
                        {
                          name: "cloud_download",
                          style: { "margin-right": "8px" },
                          disabled: !i.types,
                        },
                        null,
                        8,
                        ["disabled"],
                      ),
                      c(" " + u(p.t("download")), 1),
                    ],
                  ),
                  _: 1,
                },
                8,
                ["onClick"],
              ))
            : m("v-if", !0),
        ]),
      ]);
  }],
  ["__scopeId", "data-v-95e87a91"],
  ["__file", "code.vue"],
]);
function Z(e) {
  console.warn(
    `%c[directus-extension-generate-types]%c\n${e}`,
    "font-weight: bold;",
  );
}
var U = Object.defineProperty,
  V = Object.defineProperties,
  G = Object.getOwnPropertyDescriptors,
  q = Object.getOwnPropertySymbols,
  W = Object.prototype.hasOwnProperty,
  J = Object.prototype.propertyIsEnumerable,
  Y = (e, n, t) =>
    n in e
      ? U(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : e[n] = t,
  X = (e, n) => {
    for (var t in n || (n = {})) W.call(n, t) && Y(e, t, n[t]);
    if (q) { for (var t of q(n)) J.call(n, t) && Y(e, t, n[t]); }
    return e;
  },
  K = (e, n) => V(e, G(n)),
  Q = (e, n, t) =>
    new Promise((a, r) => {
      var o = (e) => {
          try {
            s(t.next(e));
          } catch (e) {
            r(e);
          }
        },
        i = (e) => {
          try {
            s(t.throw(e));
          } catch (e) {
            r(e);
          }
        },
        s = (e) => e.done ? a(e.value) : Promise.resolve(e.value).then(o, i);
      s((t = t.apply(e, n)).next());
    });
function ee(e) {
  return Q(this, null, function* () {
    const n = (yield e.get("/collections?limit=-1")).data.data, t = {};
    n.sort((e, n) => e.collection.localeCompare(n.collection)).forEach(
      (e) => t[e.collection] = K(X({}, e), { fields: [] }),
    );
    (yield e.get("/fields?limit=-1")).data.data.sort(
      (e, n) => e.field.localeCompare(n.field),
    ).forEach((e) => {
      t[e.collection]
        ? t[e.collection].fields.push(e)
        : Z(`${e.collection} not found`);
    }),
      Object.keys(t).forEach((e) => {
        0 === t[e].fields.length && delete t[e];
      });
    return (yield e.get("/relations?limit=-1")).data.data.forEach((e) => {
      var n, a;
      if (!e.meta) {
        return void Z(
          `Relation on field '${e.field}' in collection '${e.collection}' has no meta. Maybe missing a relation inside directus_relations table.`,
        );
      }
      const r = null == (n = t[e.meta.one_collection])
          ? void 0
          : n.fields.find((n) => n.field === e.meta.one_field),
        o = null == (a = t[e.meta.many_collection])
          ? void 0
          : a.fields.find((n) => n.field === e.meta.many_field);
      r && (r.relation = { type: "many", collection: e.meta.many_collection }),
        o && (o.relation = { type: "one", collection: e.meta.one_collection });
    }),
      t;
  });
}
function ne(e, n = !1, t = !0) {
  return a = this,
    r = null,
    o = function* () {
      const a = yield ee(e);
      let r = "";
      const o = [];
      return Object.values(a).forEach((e) => {
        var a;
        const i = e.collection,
          s = te(i),
          l = !0 === (null == (a = e.meta) ? void 0 : a.singleton);
        o.push(t ? `${i}: ${s}${l ? "" : "[]"}` : `${i}: ${s}`),
          r += `export type ${s} = {\n`,
          e.fields.forEach((e) => {
            var t, a, o;
            (null == (a = null == (t = e.meta) ? void 0 : t.interface)
              ? void 0
              : a.startsWith("presentation-")) ||
              (r += "  ",
                r += e.field.includes("-") ? `"${e.field}"` : e.field,
                (null == (o = e.schema) ? void 0 : o.is_nullable) && (r += "?"),
                r += ": ",
                r += function (e, n = !1) {
                  var t;
                  let a;
                  return a = e.relation && "many" === e.relation.type
                    ? "any[]"
                    : ["integer", "bigInteger", "float", "decimal"].includes(
                        e.type,
                      )
                    ? "number"
                    : ["boolean"].includes(e.type)
                    ? "boolean"
                    : ["json", "csv"].includes(e.type)
                    ? "unknown"
                    : "string",
                    e.relation &&
                    (a += n ? " & " : " | ",
                      a += e.relation.collection
                        ? te(e.relation.collection)
                        : "any",
                      "many" === e.relation.type && (a += "[]")),
                    (null == (t = e.schema) ? void 0 : t.is_nullable) &&
                    (e.relation && n ? a = `(${a}) | null` : a += " | null"),
                    a;
                }(e, n),
                r += ";\n");
          }),
          r += "};\n\n";
      }),
        r += "export type CustomDirectusTypes = {\n" + o.map((e) =>
          `  ${e};`
        ).join("\n") +
          "\n};",
        r += "\n",
        r;
    },
    new Promise((e, n) => {
      var t = (e) => {
          try {
            s(o.next(e));
          } catch (e) {
            n(e);
          }
        },
        i = (e) => {
          try {
            s(o.throw(e));
          } catch (e) {
            n(e);
          }
        },
        s = (n) => n.done ? e(n.value) : Promise.resolve(n.value).then(t, i);
      s((o = o.apply(a, r)).next());
    });
  var a, r, o;
}
function te(e) {
  return e.split(" ").flatMap((e) => e.split("_")).flatMap((e) => e.split("-"))
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join("");
}
var ae = {
  components: { NavbarComponent: A, CodeComponent: R },
  inject: ["api"],
  data() {
    const e = "true" ===
        localStorage.getItem(
          "directus-extension-generate-types-use-intersection-types",
        ),
      n = "false" !==
        localStorage.getItem("directus-extension-generate-types-sdk11");
    return {
      types: "",
      languages: v,
      useIntersectionTypes: e,
      sdk11: n,
      loading: !1,
    };
  },
  methods: {
    generateTypes() {
      console.log(window.localStorage),
        localStorage.setItem(
          "directus-extension-generate-types-use-intersection-types",
          this.useIntersectionTypes,
        ),
        localStorage.setItem(
          "directus-extension-generate-types-sdk11",
          this.sdk11,
        ),
        ne(this.api, this.useIntersectionTypes, this.sdk11).then((e) => {
          this.types = e, this.loading = !1;
        });
    },
    exampleCode() {
      return this.sdk11
        ? 'import { createDirectus } from "@directus/sdk";\nimport { rest } from "@directus/sdk/rest";\nimport { CustomDirectusTypes } from "./types";\n\nconst client = createDirectus<CustomDirectusTypes>("<directus url>").with(rest());'
        : 'import { Directus } from "@directus/sdk";\nimport { CustomDirectusTypes } from "./types";\n\nconst directus = new Directus<CustomDirectusTypes>("<directus url>");';
    },
  },
  mounted() {
    this.generateTypes();
  },
};
w(
  "\n.page[data-v-fb16b857] {\n  padding: 0 var(--content-padding);\n  display: flex;\n}\n@media (max-width: 1500px) {\n.page[data-v-fb16b857] {\n    flex-direction: column;\n}\n}\ncode[data-v-fb16b857] {\n  background-color: rgba(0, 0, 0, 0.05);\n  font-size: 0.9em;\n  padding: 3px;\n  border-radius: 4px;\n}\n.type-title[data-v-fb16b857] {\n  margin: 10px 0;\n}\na[data-v-fb16b857] {\n  color: var(--primary-110);\n  font-weight: 500;\n  text-decoration: none;\n}\na[data-v-fb16b857]:hover {\n  text-decoration: underline;\n}\n",
  {},
);
const re = (e) => (d("data-v-fb16b857"), e = e(), p(), e),
  oe = ["innerHTML"],
  ie = { class: "page" },
  se = { class: "div" },
  le = re(
    () =>
      l("p", null, [
        c(" To use these types with the "),
        l("code", null, "@directus/sdk"),
        c(", include the "),
        l("code", null, "types.ts"),
        c(" like this: "),
      ], -1),
  ),
  ce = re(() => l("h3", { class: "type-title" }, "Options", -1)),
  ue = re(
    () =>
      l("span", null, [
        c(" Use Intersection Types ("),
        l("code", null, "&"),
        c(") instead of Union Types ("),
        l("code", null, "|"),
        c(") for relational fields. "),
        l("a", {
          href:
            "https://github.com/maltejur/directus-extension-generate-types/pull/3#issuecomment-1037243032",
        }, " Learn more "),
      ], -1),
  ),
  de = re(
    () => l("span", null, " Generate Types for Directus SDK >= v11 ", -1),
  );
var pe = F(ae, [
  ["render", function (o, i, s, c, u, d) {
    const p = e("NavbarComponent"),
      g = e("CodeComponent"),
      m = e("v-checkbox"),
      h = e("private-view");
    return n(),
      t(h, { title: "Types for TypeScript" }, {
        navigation: a(() => [r(p)]),
        "title-outer:prepend": a(
          () => [l("div", { innerHTML: u.languages.ts.logo }, null, 8, oe)],
        ),
        default: a(
          () => [
            l("div", ie, [
              r(
                g,
                {
                  value: u.types,
                  language: "typescript",
                  downloadName: "types.ts",
                  loading: u.loading,
                },
                null,
                8,
                ["value", "loading"],
              ),
              l("div", se, [
                le,
                r(
                  g,
                  { value: d.exampleCode(), language: "typescript" },
                  null,
                  8,
                  ["value"],
                ),
                ce,
                r(
                  m,
                  {
                    modelValue: u.useIntersectionTypes,
                    "onUpdate:modelValue": i[0] ||
                      (i[0] = (e) => u.useIntersectionTypes = e),
                    onClick: d.generateTypes,
                  },
                  { default: a(() => [ue]), _: 1 },
                  8,
                  ["modelValue", "onClick"],
                ),
                r(
                  m,
                  {
                    modelValue: u.sdk11,
                    "onUpdate:modelValue": i[1] || (i[1] = (e) => u.sdk11 = e),
                    onClick: d.generateTypes,
                  },
                  { default: a(() => [de]), _: 1 },
                  8,
                  ["modelValue", "onClick"],
                ),
              ]),
            ]),
          ],
        ),
        _: 1,
      });
  }],
  ["__scopeId", "data-v-fb16b857"],
  ["__file", "ts.vue"],
]);
function ge(e) {
  return n = this,
    t = null,
    a = function* () {
      const n = yield e.get("/server/specs/oas");
      return JSON.stringify(n.data, null, 2);
    },
    new Promise((e, r) => {
      var o = (e) => {
          try {
            s(a.next(e));
          } catch (e) {
            r(e);
          }
        },
        i = (e) => {
          try {
            s(a.throw(e));
          } catch (e) {
            r(e);
          }
        },
        s = (n) => n.done ? e(n.value) : Promise.resolve(n.value).then(o, i);
      s((a = a.apply(n, t)).next());
    });
  var n, t, a;
}
var me = {
  components: { NavbarComponent: A, CodeComponent: R },
  inject: ["api"],
  data: () => ({ types: "", languages: v }),
  mounted() {
    ge(this.api).then((e) => this.types = e);
  },
};
w(
  "\n.page[data-v-dfc35bc1] {\n  padding: 0 var(--content-padding);\n  display: flex;\n}\n@media (max-width: 1500px) {\n.page[data-v-dfc35bc1] {\n    flex-direction: column;\n}\n}\np[data-v-dfc35bc1] {\n  max-width: 600px;\n}\na[data-v-dfc35bc1] {\n  color: var(--primary-110);\n  font-weight: 500;\n  text-decoration: none;\n}\na[data-v-dfc35bc1]:hover {\n  text-decoration: underline;\n}\n",
  {},
);
const he = (e) => (d("data-v-dfc35bc1"), e = e(), p(), e),
  fe = ["innerHTML"],
  ve = { class: "page" },
  ye = he(
    () =>
      l("p", null, [
        c(" You can use the OpenAPI Specification to automatically generate a Documentation for your Directus project with something like "),
        l("a", { href: "https://swagger.io/" }, "Swagger"),
        c(". "),
      ], -1),
  );
var be = F(me, [
  ["render", function (o, i, s, c, u, d) {
    const p = e("NavbarComponent"),
      g = e("CodeComponent"),
      m = e("private-view");
    return n(),
      t(m, { title: "OpenAPI Specification" }, {
        navigation: a(() => [r(p)]),
        "title-outer:prepend": a(
          () => [l("div", { innerHTML: u.languages.oas.logo }, null, 8, fe)],
        ),
        default: a(
          () => [
            l("div", ve, [
              r(
                g,
                { value: u.types, language: "json", downloadName: "oas.json" },
                null,
                8,
                ["value"],
              ),
              ye,
            ]),
          ],
        ),
        _: 1,
      });
  }],
  ["__scopeId", "data-v-dfc35bc1"],
  ["__file", "oas.vue"],
]);
function xe(e) {
  return n = this,
    t = null,
    a = function* () {
      const n = yield ee(e);
      let t = "";
      const a = [];
      return t += "from typing import TypedDict\n\n",
        t += Object.values(n).map((e) => {
          const n = e.collection,
            t = n.split("_").map((e) => e.charAt(0).toUpperCase() + e.slice(1))
              .join("");
          return a.push(`${n}: ${t}`),
            `class ${t}(TypedDict):\n${
              Object.values(e.fields).map((e) => {
                return `  ${e.field}: ${n = e.type,
                  ["integer", "bigInteger"].includes(n)
                    ? "int"
                    : ["float", "decimal"].includes(n)
                    ? "float"
                    : ["boolean"].includes(n)
                    ? "bool"
                    : "str"}`;
                var n;
              }).join("\n")
            }`;
        }).join("\n\n"),
        t += "\n\n",
        t += `class CustomDirectusTypes(TypedDict):\n${
          a.map((e) => `  ${e}`).join("\n")
        }\n`,
        t += "\n",
        t;
    },
    new Promise((e, r) => {
      var o = (e) => {
          try {
            s(a.next(e));
          } catch (e) {
            r(e);
          }
        },
        i = (e) => {
          try {
            s(a.throw(e));
          } catch (e) {
            r(e);
          }
        },
        s = (n) => n.done ? e(n.value) : Promise.resolve(n.value).then(o, i);
      s((a = a.apply(n, t)).next());
    });
  var n, t, a;
}
var we = {
  components: { NavbarComponent: A, CodeComponent: R },
  inject: ["api"],
  data: () => ({ types: "", languages: v }),
  mounted() {
    xe(this.api).then((e) => this.types = e);
  },
};
w(
  "\n.page[data-v-19430aef] {\n  padding: 0 var(--content-padding);\n  display: flex;\n}\n@media (max-width: 1500px) {\n.page[data-v-19430aef] {\n    flex-direction: column;\n}\n}\ncode[data-v-19430aef] {\n  background-color: rgba(0, 0, 0, 0.05);\n  font-size: 0.9em;\n  padding: 3px;\n  border-radius: 4px;\n}\n",
  {},
);
const Fe = ["innerHTML"], ke = { class: "page" };
var Ae = F(we, [
  ["render", function (o, i, s, c, u, d) {
    const p = e("NavbarComponent"),
      g = e("CodeComponent"),
      m = e("private-view");
    return n(),
      t(m, { title: "Type Hints for Python" }, {
        navigation: a(() => [r(p)]),
        "title-outer:prepend": a(
          () => [l("div", { innerHTML: u.languages.py.logo }, null, 8, Fe)],
        ),
        default: a(
          () => [
            l("div", ke, [
              r(
                g,
                {
                  value: u.types,
                  language: "python",
                  downloadName: "types.py",
                },
                null,
                8,
                ["value"],
              ),
            ]),
          ],
        ),
        _: 1,
      });
  }],
  ["__scopeId", "data-v-19430aef"],
  ["__file", "py.vue"],
]);
w(
  '/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\n\ncode[class*="language-"],\npre[class*="language-"] {\n\tcolor: black;\n\tbackground: none;\n\ttext-shadow: 0 1px white;\n\tfont-family: Consolas, Monaco, \'Andale Mono\', \'Ubuntu Mono\', monospace;\n\tfont-size: 1em;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\npre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,\ncode[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\npre[class*="language-"]::selection, pre[class*="language-"] ::selection,\ncode[class*="language-"]::selection, code[class*="language-"] ::selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\n@media print {\n\tcode[class*="language-"],\n\tpre[class*="language-"] {\n\t\ttext-shadow: none;\n\t}\n}\n\n/* Code blocks */\npre[class*="language-"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n\tbackground: #f5f2f0;\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray;\n}\n\n.token.punctuation {\n\tcolor: #999;\n}\n\n.token.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #905;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #690;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n\tcolor: #9a6e3a;\n\t/* This background color was intended by the author of this theme. */\n\tbackground: hsla(0, 0%, 100%, .5);\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n\tcolor: #07a;\n}\n\n.token.function,\n.token.class-name {\n\tcolor: #DD4A68;\n}\n\n.token.regex,\n.token.important,\n.token.variable {\n\tcolor: #e90;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n',
  {},
),
  Prism.languages.clike = {
    comment: [{
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: !0,
      greedy: !0,
    }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0,
    },
    "class-name": {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ },
    },
    keyword:
      /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/,
  },
  Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [Prism.languages.clike["class-name"], {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0,
    }],
    keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 }, {
      pattern:
        /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0,
    }],
    function:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" +
          /0[bB][01]+(?:_[01]+)*n?/.source + "|" +
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" +
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" +
          /\d+(?:_\d+)*n/.source + "|" +
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
            .source +
          ")" + /(?![\w$])/.source,
      ),
      lookbehind: !0,
    },
    operator:
      /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
  }),
  Prism.languages.javascript["class-name"][0].pattern =
    /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,
  Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
          /\//.source + "(?:" +
          /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/
            .source +
          "|" +
          /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
            .source +
          ")" +
          /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/
            .source,
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: Prism.languages.regex,
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/,
      },
    },
    "function-variable": {
      pattern:
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function",
    },
    parameter: [{
      pattern:
        /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: Prism.languages.javascript,
    }, {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: Prism.languages.javascript,
    }, {
      pattern:
        /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: Prism.languages.javascript,
    }, {
      pattern:
        /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: Prism.languages.javascript,
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
  }),
  Prism.languages.insertBefore("javascript", "string", {
    hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
    "template-string": {
      pattern:
        /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": { pattern: /^`|`$/, alias: "string" },
        interpolation: {
          pattern:
            /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation",
            },
            rest: Prism.languages.javascript,
          },
        },
        string: /[\s\S]+/,
      },
    },
    "string-property": {
      pattern:
        /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property",
    },
  }),
  Prism.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern:
        /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property",
    },
  }),
  Prism.languages.markup &&
  (Prism.languages.markup.tag.addInlined("script", "javascript"),
    Prism.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
        .source,
      "javascript",
    )),
  Prism.languages.js = Prism.languages.javascript,
  Prism.languages.json = {
    property: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      lookbehind: !0,
      greedy: !0,
    },
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: !0,
      greedy: !0,
    },
    comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: { pattern: /\bnull\b/, alias: "keyword" },
  },
  Prism.languages.webmanifest = Prism.languages.json,
  function (e) {
    e.languages.typescript = e.languages.extend("javascript", {
      "class-name": {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      builtin:
        /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
    }),
      e.languages.typescript.keyword.push(
        /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
        /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
        /\btype\b(?=\s*(?:[\{*]|$))/,
      ),
      delete e.languages.typescript.parameter,
      delete e.languages.typescript["literal-property"];
    var n = e.languages.extend("typescript", {});
    delete n["class-name"],
      e.languages.typescript["class-name"].inside = n,
      e.languages.insertBefore("typescript", "function", {
        decorator: {
          pattern: /@[$\w\xA0-\uFFFF]+/,
          inside: {
            at: { pattern: /^@/, alias: "operator" },
            function: /^[\s\S]+/,
          },
        },
        "generic-function": {
          pattern:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: !0,
          inside: {
            function:
              /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
            generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: n },
          },
        },
      }),
      e.languages.ts = e.languages.typescript;
  }(Prism),
  Prism.languages.python = {
    comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
    "string-interpolation": {
      pattern:
        /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
      greedy: !0,
      inside: {
        interpolation: {
          pattern:
            /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
          lookbehind: !0,
          inside: {
            "format-spec": { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0 },
            "conversion-option": {
              pattern: /![sra](?=[:}]$)/,
              alias: "punctuation",
            },
            rest: null,
          },
        },
        string: /[\s\S]+/,
      },
    },
    "triple-quoted-string": {
      pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
      greedy: !0,
      alias: "string",
    },
    string: {
      pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
      greedy: !0,
    },
    function: {
      pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
      lookbehind: !0,
    },
    "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
    decorator: {
      pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
      lookbehind: !0,
      alias: ["annotation", "punctuation"],
      inside: { punctuation: /\./ },
    },
    keyword:
      /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin:
      /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:False|None|True)\b/,
    number:
      /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/,
  },
  Prism.languages.python["string-interpolation"].inside.interpolation.inside
    .rest = Prism.languages.python,
  Prism.languages.py = Prism.languages.python;
var _e = {
  id: "generate-types",
  name: "Generate Types",
  icon: "code",
  routes: [
    { path: "", redirect: "/generate-types/index" },
    { path: "/generate-types/index", component: T },
    { path: "/generate-types/ts", component: pe },
    { path: "/generate-types/oas", component: be },
    { path: "/generate-types/py", component: Ae },
  ],
  hidden: !1,
  preRegisterCheck(e) {
    var n;
    return (null == (n = e.role) ? void 0 : n.admin_access) || e.admin_access;
  },
};
export { _e as default };
