"use strict";
(self.webpackChunk = self.webpackChunk || []).push(
    [
        [7655],
        {
            5054: function (e, t, n) {
                n.r(t); var o = n(6726), c = n.n(o);
                const a = e => {
                    e.style.height = e.contentDocument.documentElement.offsetHeight + "px"
                },
                    d = function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null; if (null !== n) for (let [o, c] of Object.entries(t)) n[o] !== c && e.contentDocument.documentElement.classList.toggle("is-".concat(o)); else for (let [n, o] of Object.entries(t)) o && e.contentDocument.documentElement.classList.add("is-".concat(n))
                    },
                    i = (e, t, n, o) => ({ "xlarge-up": window.matchMedia("(min-width: ".concat(e, ")")).matches, "medium-up": window.matchMedia("(min-width: ".concat(t, ")")).matches, "large-down": window.matchMedia("(max-width: ".concat(n, ")")).matches, "medium-down": window.matchMedia("(max-width: ".concat(o, ")")).matches }); t.default = e => {
                        switch (e.name) {
                            case "load:CATALOGIFRAMES_MODULE": {
                                const e = document.querySelectorAll(".catalog-iframe"),
                                    t = getComputedStyle(document.documentElement),
                                    n = t.getPropertyValue("--xlarge-up-bp"),
                                    o = t.getPropertyValue("--medium-up-bp"),
                                    l = t.getPropertyValue("--large-down-bp"),
                                    m = t.getPropertyValue("--medium-down-bp");
                                let u = i(n, o, l, m);
                                if (e.forEach(
                                    (
                                        e => "complete" === e.contentDocument.readyState ? (d(e, u),
                                        void a(e)) : void e.addEventListener(
                                            "DOMContentLoaded",
                                            (() => { d(e, u), a(e) }),
                                            !1
                                        )
                                    )
                                ), 0 === e.length) return;
                                const r = c()((() => { let t = u; u = i(n, o, l, m), e.forEach((e => { d(e, u, t), a(e) })) }), 150);
                                window.addEventListener("resize", r);
                                break
                            }
                        }
                    }
            }
        }
    ]);