_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [17], {
        "/0+H": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.isInAmpMode = a, t.useAmp = function() {
                return a(o.default.useContext(i.AmpStateContext))
            };
            var r, o = (r = n("q1tI")) && r.__esModule ? r : {
                    default: r
                },
                i = n("lwAK");

            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.ampFirst,
                    n = void 0 !== t && t,
                    r = e.hybrid,
                    o = void 0 !== r && r,
                    i = e.hasQuery,
                    a = void 0 !== i && i;
                return n || o && a
            }
        },
        "7ljp": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "MDXContext", (function() {
                return l
            })), n.d(t, "MDXProvider", (function() {
                return d
            })), n.d(t, "mdx", (function() {
                return h
            })), n.d(t, "useMDXComponents", (function() {
                return p
            })), n.d(t, "withMDXComponents", (function() {
                return f
            }));
            var r = n("q1tI"),
                o = n.n(r);

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        i(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function s(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            var l = o.a.createContext({}),
                f = function(e) {
                    return function(t) {
                        var n = p(t.components);
                        return o.a.createElement(e, a({}, t, {
                            components: n
                        }))
                    }
                },
                p = function(e) {
                    var t = o.a.useContext(l),
                        n = t;
                    return e && (n = "function" === typeof e ? e(t) : u(u({}, t), e)), n
                },
                d = function(e) {
                    var t = p(e.components);
                    return o.a.createElement(l.Provider, {
                        value: t
                    }, e.children)
                },
                y = {
                    inlineCode: "code",
                    wrapper: function(e) {
                        var t = e.children;
                        return o.a.createElement(o.a.Fragment, {}, t)
                    }
                },
                m = o.a.forwardRef((function(e, t) {
                    var n = e.components,
                        r = e.mdxType,
                        i = e.originalType,
                        a = e.parentName,
                        c = s(e, ["components", "mdxType", "originalType", "parentName"]),
                        l = p(n),
                        f = r,
                        d = l["".concat(a, ".").concat(f)] || l[f] || y[f] || i;
                    return n ? o.a.createElement(d, u(u({
                        ref: t
                    }, c), {}, {
                        components: n
                    })) : o.a.createElement(d, u({
                        ref: t
                    }, c))
                }));

            function h(e, t) {
                var n = arguments,
                    r = t && t.mdxType;
                if ("string" === typeof e || r) {
                    var i = n.length,
                        a = new Array(i);
                    a[0] = m;
                    var c = {};
                    for (var u in t) hasOwnProperty.call(t, u) && (c[u] = t[u]);
                    c.originalType = e, c.mdxType = "string" === typeof e ? e : r, a[1] = c;
                    for (var s = 2; s < i; s++) a[s] = n[s];
                    return o.a.createElement.apply(null, a)
                }
                return o.a.createElement.apply(null, n)
            }
            m.displayName = "MDXCreateElement"
        },
        "8Kt/": function(e, t, n) {
            "use strict";
            n("lSNA");
            t.__esModule = !0, t.defaultHead = l, t.default = void 0;
            var r, o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var t = s();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                i = (r = n("Xuae")) && r.__esModule ? r : {
                    default: r
                },
                a = n("lwAK"),
                c = n("FYa8"),
                u = n("/0+H");

            function s() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return s = function() {
                    return e
                }, e
            }

            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [o.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return e || t.push(o.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function f(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce((function(e, t) {
                    return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
                }), [])) : e.concat(t)
            }
            var p = ["name", "httpEquiv", "charSet", "itemProp"];

            function d(e, t) {
                return e.reduce((function(e, t) {
                    var n = o.default.Children.toArray(t.props.children);
                    return e.concat(n)
                }), []).reduce(f, []).reverse().concat(l(t.inAmpMode)).filter(function() {
                    var e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return function(o) {
                        var i = !0;
                        if (o.key && "number" !== typeof o.key && o.key.indexOf("$") > 0) {
                            var a = o.key.slice(o.key.indexOf("$") + 1);
                            e.has(a) ? i = !1 : e.add(a)
                        }
                        switch (o.type) {
                            case "title":
                            case "base":
                                t.has(o.type) ? i = !1 : t.add(o.type);
                                break;
                            case "meta":
                                for (var c = 0, u = p.length; c < u; c++) {
                                    var s = p[c];
                                    if (o.props.hasOwnProperty(s))
                                        if ("charSet" === s) n.has(s) ? i = !1 : n.add(s);
                                        else {
                                            var l = o.props[s],
                                                f = r[s] || new Set;
                                            f.has(l) ? i = !1 : (f.add(l), r[s] = f)
                                        }
                                }
                        }
                        return i
                    }
                }()).reverse().map((function(e, t) {
                    var n = e.key || t;
                    return o.default.cloneElement(e, {
                        key: n
                    })
                }))
            }

            function y(e) {
                var t = e.children,
                    n = (0, o.useContext)(a.AmpStateContext),
                    r = (0, o.useContext)(c.HeadManagerContext);
                return o.default.createElement(i.default, {
                    reduceComponentsToState: d,
                    headManager: r,
                    inAmpMode: (0, u.isInAmpMode)(n)
                }, t)
            }
            y.rewind = function() {};
            var m = y;
            t.default = m
        },
        "8OQS": function(e, t) {
            e.exports = function(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }
        },
        Aiso: function(e, t, n) {
            e.exports = n("dQHF")
        },
        Bnag: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        EbDI: function(e, t) {
            e.exports = function(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
        },
        HDwi: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/blog/[slug]", function() {
                return n("rfmo")
            }])
        },
        Ijbi: function(e, t, n) {
            var r = n("WkPL");
            e.exports = function(e) {
                if (Array.isArray(e)) return r(e)
            }
        },
        J3Rv: function(e, t, n) {
            n("aoOK");
            var r = n("q1tI"),
                o = n("7ljp");
            e.exports = function(e, t) {
                var n = e.compiledSource,
                    i = e.renderedOutput,
                    a = e.scope || {},
                    c = t && t.components || {},
                    u = r.useState(r.createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: i
                        }
                    })),
                    s = u[0],
                    l = u[1];
                return "undefined" === typeof window || r.useEffect((function() {
                    var e = window.requestIdleCallback((function() {
                        var t = Object.assign({
                                mdx: o.mdx
                            }, c, a),
                            i = Object.keys(t),
                            u = Object.values(t),
                            s = Reflect.construct(Function, ["React"].concat(i).concat(n + "\nreturn React.createElement(MDXContent, {});")),
                            f = s.apply(s, [r].concat(u)),
                            p = r.createElement(o.MDXProvider, {
                                components: c
                            }, f);
                        l(p), window.cancelIdleCallback(e)
                    }))
                }), [n]), s
            }
        },
        R055: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== i(e) && "function" !== typeof e) return {
                    default: e
                };
                var t = o();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var c = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = e[a]
                    } n.default = e, t && t.set(e, n);
                return n
            }(n("q1tI"));

            function o() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return o = function() {
                    return e
                }, e
            }

            function i(e) {
                return (i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function c(e, t) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function u(e, t) {
                return !t || "object" !== i(t) && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }

            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var f = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t)
                }(p, e);
                var t, n, o, i, f = (t = p, function() {
                    var e, n = l(t);
                    if (s()) {
                        var r = l(this).constructor;
                        e = Reflect.construct(n, arguments, r)
                    } else e = n.apply(this, arguments);
                    return u(this, e)
                });

                function p() {
                    var e;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, p), (e = f.call(this)).state = {
                        maxIsVisible: 0
                    }, e
                }
                return n = p, (o = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this,
                            t = r.default.Children.count(this.props.children),
                            n = 0;
                        this.interval = setInterval((function() {
                            ++n > t && clearInterval(e.interval), e.setState({
                                maxIsVisible: n
                            })
                        }), this.delay)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearInterval(this.interval)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.transitionDuration,
                            n = this.props.wrapperTag || "div",
                            o = this.props.childTag || "div";
                        return r.default.createElement(n, {
                            className: this.props.className
                        }, r.default.Children.map(this.props.children, (function(n, i) {
                            return r.default.createElement(o, {
                                className: e.props.childClassName,
                                style: {
                                    transition: "opacity ".concat(t, "ms, transform ").concat(t, "ms"),
                                    transform: e.state.maxIsVisible > i ? "none" : "translateY(20px)",
                                    opacity: e.state.maxIsVisible > i ? 1 : 0
                                }
                            }, n)
                        })))
                    }
                }, {
                    key: "delay",
                    get: function() {
                        return this.props.delay || 50
                    }
                }, {
                    key: "transitionDuration",
                    get: function() {
                        return this.props.transitionDuration || 400
                    }
                }]) && a(n.prototype, o), i && a(n, i), p
            }(r.Component);
            t.default = f
        },
        RIqP: function(e, t, n) {
            var r = n("Ijbi"),
                o = n("EbDI"),
                i = n("ZhPi"),
                a = n("Bnag");
            e.exports = function(e) {
                return r(e) || o(e) || i(e) || a()
            }
        },
        UWYU: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.imageConfigDefault = t.VALID_LOADERS = void 0;
            t.VALID_LOADERS = ["default", "imgix", "cloudinary", "akamai"];
            t.imageConfigDefault = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                path: "/_next/image",
                loader: "default",
                domains: []
            }
        },
        Xuae: function(e, t, n) {
            "use strict";
            var r = n("RIqP"),
                o = n("lwsE"),
                i = n("W8MJ"),
                a = (n("PJYZ"), n("7W2i")),
                c = n("a1gu"),
                u = n("Nsbk");

            function s(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            t.__esModule = !0, t.default = void 0;
            var l = n("q1tI"),
                f = function(e) {
                    a(n, e);
                    var t = s(n);

                    function n(e) {
                        var i;
                        return o(this, n), (i = t.call(this, e))._hasHeadManager = void 0, i.emitChange = function() {
                            i._hasHeadManager && i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances), i.props))
                        }, i._hasHeadManager = i.props.headManager && i.props.headManager.mountedInstances, i
                    }
                    return i(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.emitChange()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), n
                }(l.Component);
            t.default = f
        },
        YFqc: function(e, t, n) {
            e.exports = n("cTJO")
        },
        aoOK: function(e, t) {
            "undefined" !== typeof window && (window.requestIdleCallback = window.requestIdleCallback || function(e) {
                var t = Date.now();
                return setTimeout((function() {
                    e({
                        didTimeout: !1,
                        timeRemaining: function() {
                            return Math.max(0, 50 - (Date.now() - t))
                        }
                    })
                }), 1)
            }, window.cancelIdleCallback = window.cancelIdleCallback || function(e) {
                clearTimeout(e)
            })
        },
        cTJO: function(e, t, n) {
            "use strict";
            var r = n("J4zp"),
                o = n("284h");
            t.__esModule = !0, t.default = void 0;
            var i = o(n("q1tI")),
                a = n("elyg"),
                c = n("nOHt"),
                u = n("vNVm"),
                s = {};

            function l(e, t, n, r) {
                if ((0, a.isLocalURL)(t)) {
                    e.prefetch(t, n, r).catch((function(e) {
                        0
                    }));
                    var o = r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
                    s[t + "%" + n + (o ? "%" + o : "")] = !0
                }
            }
            var f = function(e) {
                var t = !1 !== e.prefetch,
                    n = (0, c.useRouter)(),
                    o = n && n.pathname || "/",
                    f = i.default.useMemo((function() {
                        var t = (0, a.resolveHref)(o, e.href, !0),
                            n = r(t, 2),
                            i = n[0],
                            c = n[1];
                        return {
                            href: i,
                            as: e.as ? (0, a.resolveHref)(o, e.as) : c || i
                        }
                    }), [o, e.href, e.as]),
                    p = f.href,
                    d = f.as,
                    y = e.children,
                    m = e.replace,
                    h = e.shallow,
                    b = e.scroll,
                    v = e.locale;
                "string" === typeof y && (y = i.default.createElement("a", null, y));
                var g = i.Children.only(y),
                    w = g && "object" === typeof g && g.ref,
                    O = (0, u.useIntersection)({
                        rootMargin: "200px"
                    }),
                    j = r(O, 2),
                    x = j[0],
                    _ = j[1],
                    P = i.default.useCallback((function(e) {
                        x(e), w && ("function" === typeof w ? w(e) : "object" === typeof w && (w.current = e))
                    }), [w, x]);
                (0, i.useEffect)((function() {
                    var e = _ && t && (0, a.isLocalURL)(p),
                        r = "undefined" !== typeof v ? v : n && n.locale,
                        o = s[p + "%" + d + (r ? "%" + r : "")];
                    e && !o && l(n, p, d, {
                        locale: r
                    })
                }), [d, p, _, v, t, n]);
                var S = {
                    ref: P,
                    onClick: function(e) {
                        g.props && "function" === typeof g.props.onClick && g.props.onClick(e), e.defaultPrevented || function(e, t, n, r, o, i, c, u) {
                            ("A" !== e.currentTarget.nodeName || ! function(e) {
                                var t = e.currentTarget.target;
                                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && (0, a.isLocalURL)(n)) && (e.preventDefault(), null == c && (c = r.indexOf("#") < 0), t[o ? "replace" : "push"](n, r, {
                                shallow: i,
                                locale: u
                            }).then((function(e) {
                                e && c && (window.scrollTo(0, 0), document.body.focus())
                            })))
                        }(e, n, p, d, m, h, b, v)
                    },
                    onMouseEnter: function(e) {
                        (0, a.isLocalURL)(p) && (g.props && "function" === typeof g.props.onMouseEnter && g.props.onMouseEnter(e), l(n, p, d, {
                            priority: !0
                        }))
                    }
                };
                return (e.passHref || "a" === g.type && !("href" in g.props)) && (S.href = (0, a.addBasePath)((0, a.addLocale)(d, "undefined" !== typeof v ? v : n && n.locale, n && n.defaultLocale))), i.default.cloneElement(g, S)
            };
            t.default = f
        },
        dEHY: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.toBase64 = function(e) {
                return window.btoa(e)
            }
        },
        dQHF: function(e, t, n) {
            "use strict";
            var r = n("J4zp"),
                o = n("RIqP"),
                i = n("TqRt");
            t.__esModule = !0, t.default = function(e) {
                var t = e.src,
                    n = e.sizes,
                    i = e.unoptimized,
                    c = void 0 !== i && i,
                    l = e.priority,
                    p = void 0 !== l && l,
                    d = e.loading,
                    m = e.className,
                    h = e.quality,
                    b = e.width,
                    O = e.height,
                    j = e.objectFit,
                    x = e.objectPosition,
                    _ = (0, a.default)(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition"]),
                    P = n ? "responsive" : "intrinsic",
                    S = !1;
                "unsized" in _ ? (S = Boolean(_.unsized), delete _.unsized) : "layout" in _ && (_.layout && (P = _.layout), delete _.layout);
                0;
                var E = !p && ("lazy" === d || "undefined" === typeof d);
                t && t.startsWith("data:") && (c = !0, E = !1);
                var M, k, C, A = (0, f.useIntersection)({
                        rootMargin: "200px",
                        disabled: !E
                    }),
                    I = r(A, 2),
                    T = I[0],
                    D = I[1],
                    R = !E || D,
                    N = w(b),
                    q = w(O),
                    z = w(h),
                    L = {
                        visibility: R ? "visible" : "hidden",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: j,
                        objectPosition: x
                    };
                if ("undefined" !== typeof N && "undefined" !== typeof q && "fill" !== P) {
                    var H = q / N,
                        F = isNaN(H) ? "100%" : "".concat(100 * H, "%");
                    "responsive" === P ? (M = {
                        display: "block",
                        overflow: "hidden",
                        position: "relative",
                        boxSizing: "border-box",
                        margin: 0
                    }, k = {
                        display: "block",
                        boxSizing: "border-box",
                        paddingTop: F
                    }) : "intrinsic" === P ? (M = {
                        display: "inline-block",
                        maxWidth: "100%",
                        overflow: "hidden",
                        position: "relative",
                        boxSizing: "border-box",
                        margin: 0
                    }, k = {
                        boxSizing: "border-box",
                        display: "block",
                        maxWidth: "100%"
                    }, C = '<svg width="'.concat(N, '" height="').concat(q, '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')) : "fixed" === P && (M = {
                        overflow: "hidden",
                        boxSizing: "border-box",
                        display: "inline-block",
                        position: "relative",
                        width: N,
                        height: q
                    })
                } else "undefined" === typeof N && "undefined" === typeof q && "fill" === P && (M = {
                    display: "block",
                    overflow: "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    boxSizing: "border-box",
                    margin: 0
                });
                var W = {
                    src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                };
                R && (W = function(e) {
                    var t = e.src,
                        n = e.unoptimized,
                        r = e.layout,
                        i = e.width,
                        a = e.quality,
                        c = e.sizes;
                    if (n) return {
                        src: t
                    };
                    var u = function(e, t) {
                            if ("number" !== typeof e || "fill" === t || "responsive" === t) return {
                                widths: y,
                                kind: "w"
                            };
                            return {
                                widths: o(new Set([e, 2 * e, 3 * e].map((function(e) {
                                    return v.find((function(t) {
                                        return t >= e
                                    })) || v[v.length - 1]
                                })))),
                                kind: "x"
                            }
                        }(i, r),
                        s = u.widths,
                        l = u.kind,
                        f = s.length - 1,
                        p = s.map((function(e, n) {
                            return "".concat(g({
                                src: t,
                                quality: a,
                                width: e
                            }), " ").concat("w" === l ? e : n + 1).concat(l)
                        })).join(", ");
                    c || "w" !== l || (c = "100vw");
                    return {
                        src: t = g({
                            src: t,
                            quality: a,
                            width: s[f]
                        }),
                        sizes: c,
                        srcSet: p
                    }
                }({
                    src: t,
                    unoptimized: c,
                    layout: P,
                    width: N,
                    quality: z,
                    sizes: n
                }));
                S && (M = void 0, k = void 0, L = void 0);
                return u.default.createElement("div", {
                    style: M
                }, k ? u.default.createElement("div", {
                    style: k
                }, C ? u.default.createElement("img", {
                    style: {
                        maxWidth: "100%",
                        display: "block"
                    },
                    alt: "",
                    "aria-hidden": !0,
                    role: "presentation",
                    src: "data:image/svg+xml;base64,".concat((0, s.toBase64)(C))
                }) : null) : null, u.default.createElement("img", Object.assign({}, _, W, {
                    decoding: "async",
                    className: m,
                    ref: T,
                    style: L
                })))
            };
            var a = i(n("8OQS")),
                c = i(n("pVnL")),
                u = i(n("q1tI")),
                s = n("dEHY"),
                l = n("UWYU"),
                f = n("vNVm");
            var p = new Map([
                    ["imgix", function(e) {
                        var t = e.root,
                            n = e.src,
                            r = e.width,
                            o = e.quality,
                            i = ["auto=format", "fit=max", "w=" + r],
                            a = "";
                        o && i.push("q=" + o);
                        i.length && (a = "?" + i.join("&"));
                        return "".concat(t).concat(O(n)).concat(a)
                    }],
                    ["cloudinary", function(e) {
                        var t = e.root,
                            n = e.src,
                            r = e.width,
                            o = e.quality,
                            i = ["f_auto", "c_limit", "w_" + r, "q_" + (o || "auto")].join(",") + "/";
                        return "".concat(t).concat(i).concat(O(n))
                    }],
                    ["akamai", function(e) {
                        var t = e.root,
                            n = e.src,
                            r = e.width;
                        return "".concat(t).concat(O(n), "?imwidth=").concat(r)
                    }],
                    ["default", function(e) {
                        var t = e.root,
                            n = e.src,
                            r = e.width,
                            o = e.quality;
                        0;
                        return "".concat(t, "?url=").concat(encodeURIComponent(n), "&w=").concat(r, "&q=").concat(o || 75)
                    }]
                ]),
                d = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default"
                } || l.imageConfigDefault,
                y = d.deviceSizes,
                m = d.imageSizes,
                h = d.loader,
                b = d.path,
                v = (d.domains, [].concat(o(y), o(m)));

            function g(e) {
                var t = p.get(h);
                if (t) return t((0, c.default)({
                    root: b
                }, e));
                throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "), ". Received: ").concat(h))
            }

            function w(e) {
                return "number" === typeof e ? e : "string" === typeof e ? parseInt(e, 10) : void 0
            }

            function O(e) {
                return "/" === e[0] ? e.slice(1) : e
            }
            y.sort((function(e, t) {
                return e - t
            })), v.sort((function(e, t) {
                return e - t
            }))
        },
        "dmF/": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            });
            var r, o = (r = n("R055")) && r.__esModule ? r : {
                default: r
            }
        },
        g4pe: function(e, t, n) {
            e.exports = n("8Kt/")
        },
        lSNA: function(e, t) {
            e.exports = function(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
        },
        lwAK: function(e, t, n) {
            "use strict";
            var r;
            t.__esModule = !0, t.AmpStateContext = void 0;
            var o = ((r = n("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            t.AmpStateContext = o
        },
        pVnL: function(e, t) {
            function n() {
                return e.exports = n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, n.apply(this, arguments)
            }
            e.exports = n
        },
        rePB: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        rfmo: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "__N_SSG", (function() {
                return T
            })), n.d(t, "default", (function() {
                return D
            }));
            var r = n("nKUr"),
                o = n("dmF/"),
                i = n.n(o),
                a = n("Aiso"),
                c = n.n(a),
                u = n("g4pe"),
                s = n.n(u),
                l = n("rePB"),
                f = n("YFqc"),
                p = n.n(f),
                d = n("q1tI"),
                y = n.n(d);

            function m(e) {
                return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
            }

            function h(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports), t.exports
            }
            var b = h((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = "function" == typeof Symbol && Symbol.for,
                    r = n ? Symbol.for("react.element") : 60103,
                    o = n ? Symbol.for("react.portal") : 60106,
                    i = n ? Symbol.for("react.fragment") : 60107,
                    a = n ? Symbol.for("react.strict_mode") : 60108,
                    c = n ? Symbol.for("react.profiler") : 60114,
                    u = n ? Symbol.for("react.provider") : 60109,
                    s = n ? Symbol.for("react.context") : 60110,
                    l = n ? Symbol.for("react.async_mode") : 60111,
                    f = n ? Symbol.for("react.concurrent_mode") : 60111,
                    p = n ? Symbol.for("react.forward_ref") : 60112,
                    d = n ? Symbol.for("react.suspense") : 60113,
                    y = n ? Symbol.for("react.memo") : 60115,
                    m = n ? Symbol.for("react.lazy") : 60116;

                function h(e) {
                    if ("object" == typeof e && null !== e) {
                        var t = e.$$typeof;
                        switch (t) {
                            case r:
                                switch (e = e.type) {
                                    case l:
                                    case f:
                                    case i:
                                    case c:
                                    case a:
                                    case d:
                                        return e;
                                    default:
                                        switch (e = e && e.$$typeof) {
                                            case s:
                                            case p:
                                            case u:
                                                return e;
                                            default:
                                                return t
                                        }
                                }
                                case m:
                                case y:
                                case o:
                                    return t
                        }
                    }
                }

                function b(e) {
                    return h(e) === f
                }
                t.typeOf = h, t.AsyncMode = l, t.ConcurrentMode = f, t.ContextConsumer = s, t.ContextProvider = u, t.Element = r, t.ForwardRef = p, t.Fragment = i, t.Lazy = m, t.Memo = y, t.Portal = o, t.Profiler = c, t.StrictMode = a, t.Suspense = d, t.isValidElementType = function(e) {
                    return "string" == typeof e || "function" == typeof e || e === i || e === f || e === c || e === a || e === d || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === y || e.$$typeof === u || e.$$typeof === s || e.$$typeof === p)
                }, t.isAsyncMode = function(e) {
                    return b(e) || h(e) === l
                }, t.isConcurrentMode = b, t.isContextConsumer = function(e) {
                    return h(e) === s
                }, t.isContextProvider = function(e) {
                    return h(e) === u
                }, t.isElement = function(e) {
                    return "object" == typeof e && null !== e && e.$$typeof === r
                }, t.isForwardRef = function(e) {
                    return h(e) === p
                }, t.isFragment = function(e) {
                    return h(e) === i
                }, t.isLazy = function(e) {
                    return h(e) === m
                }, t.isMemo = function(e) {
                    return h(e) === y
                }, t.isPortal = function(e) {
                    return h(e) === o
                }, t.isProfiler = function(e) {
                    return h(e) === c
                }, t.isStrictMode = function(e) {
                    return h(e) === a
                }, t.isSuspense = function(e) {
                    return h(e) === d
                }
            }));
            m(b), m(h((function(e, t) {})));
            h((function(e) {
                e.exports = b
            }));
            var v = Object.getOwnPropertySymbols,
                g = Object.prototype.hasOwnProperty,
                w = Object.prototype.propertyIsEnumerable;
            (function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                            return t[e]
                        })).join("")) return !1;
                    var r = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        r[e] = e
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                } catch (e) {
                    return !1
                }
            })() && Object.assign;

            function O(e, t, n, r, o) {}
            O.resetWarningCache = function() {};
            Function.call.bind(Object.prototype.hasOwnProperty);

            function j() {}

            function x() {}
            x.resetWarningCache = j;
            var _ = h((function(e) {
                    e.exports = function() {
                        function e(e, t, n, r, o, i) {
                            if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== i) {
                                var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                                throw a.name = "Invariant Violation", a
                            }
                        }

                        function t() {
                            return e
                        }
                        e.isRequired = e;
                        var n = {
                            array: e,
                            bool: e,
                            func: e,
                            number: e,
                            object: e,
                            string: e,
                            symbol: e,
                            any: e,
                            arrayOf: t,
                            element: e,
                            elementType: e,
                            instanceOf: t,
                            node: e,
                            objectOf: t,
                            oneOf: t,
                            oneOfType: t,
                            shape: t,
                            exact: t,
                            checkPropTypes: x,
                            resetWarningCache: j
                        };
                        return n.PropTypes = n, n
                    }()
                })),
                P = [],
                S = function(e) {
                    function t() {
                        e.apply(this, arguments), this.state = {
                            isLoading: !0
                        }
                    }
                    return e && (t.__proto__ = e), (t.prototype = Object.create(e && e.prototype)).constructor = t, t.prototype.loadTweetForProps = function(e) {
                        var t = this,
                            n = function() {
                                window.twttr.ready().then((function(n) {
                                    var r = n.widgets;
                                    t._div && (t._div.innerHTML = "");
                                    var o = e.onTweetLoadSuccess,
                                        i = e.onTweetLoadError;
                                    r.createTweetEmbed(t.props.id, t._div, e.options).then((function(e) {
                                        t.setState({
                                            isLoading: !1
                                        }), o && o(e)
                                    })).catch(i)
                                }))
                            },
                            r = window.twttr;
                        r && r.ready ? n() : function(e, t) {
                            if (0 === P.length) {
                                P.push(t);
                                var n = document.createElement("script");
                                n.setAttribute("src", e), n.onload = function() {
                                    return P.forEach((function(e) {
                                        return e()
                                    }))
                                }, document.body.appendChild(n)
                            } else P.push(t)
                        }((window.location.protocol.indexOf("file") >= 0 ? this.props.protocol : "") + "//platform.twitter.com/widgets.js", n)
                    }, t.prototype.componentDidMount = function() {
                        this.loadTweetForProps(this.props)
                    }, t.prototype.shouldComponentUpdate = function(e, t) {
                        return this.props.id !== e.id || this.props.className !== e.className
                    }, t.prototype.componentWillUpdate = function(e, t) {
                        this.props.id !== e.id && this.loadTweetForProps(e)
                    }, t.prototype.render = function() {
                        var e = this;
                        return y.a.createElement("div", {
                            className: this.props.className,
                            ref: function(t) {
                                e._div = t
                            }
                        }, this.state.isLoading && this.props.placeholder)
                    }, t
                }(y.a.Component);
            S.propTypes = {
                id: _.string,
                options: _.object,
                protocol: _.string,
                onTweetLoadSuccess: _.func,
                onTweetLoadError: _.func,
                className: _.string
            }, S.defaultProps = {
                protocol: "https:",
                options: {},
                className: null
            };
            var E = S;

            function M(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? M(Object(n), !0).forEach((function(t) {
                        Object(l.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var C = {
                    Image: c.a,
                    a: function(e) {
                        var t = e.href;
                        return t && (t.startsWith("/") || t.startsWith("#")) ? Object(r.jsx)(p.a, {
                            href: t,
                            children: Object(r.jsx)("a", k({}, e))
                        }) : Object(r.jsx)("a", k({
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, e))
                    },
                    Tweet: E
                },
                A = n("J3Rv"),
                I = n.n(A),
                T = !0;

            function D(e) {
                var t = e.source,
                    n = e.frontMatter,
                    o = I()(t, {
                        components: C
                    });
                return Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsxs)(s.a, {
                        children: [Object(r.jsx)("title", {
                            children: n.title
                        }), Object(r.jsx)("meta", {
                            property: "og:title",
                            content: n.title
                        }), Object(r.jsx)("meta", {
                            property: "description",
                            content: n.excerpt
                        }), Object(r.jsx)("meta", {
                            property: "og:description",
                            content: n.excerpt
                        })]
                    }), Object(r.jsxs)(i.a, {
                        className: "w-full flex flex-col justify-center max-w-3xl mx-auto mb-16 sm:px-0",
                        children: [Object(r.jsx)("h1", {
                            className: "text-5xl font-bold mr-4",
                            children: n.title
                        }), Object(r.jsxs)("div", {
                            className: "mt-6 flex flex-row items-center",
                            children: [Object(r.jsx)(c.a, {
                                className: "rounded-full",
                                src: "/wallace.png",
                                alt: "vjacksonen profile picture",
                                quality: 35,
                                width: 24,
                                height: 24
                            }), Object(r.jsxs)("p", {
                                className: "ml-2",
                                children: [Object(r.jsx)("a", {
                                    className: "focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200",
                                    href: "https://twitter.com/jacksondenke",
                                    rel: "noopener",
                                    target: "_blank",
                                    children: n.author
                                }), " ", "\u2022 published on ", n.date, " \u2022 ", n.readingTime.text]
                            })]
                        }), Object(r.jsx)("article", {
                            className: "max-w-none w-full mt-8 prose prose-lg dark:prose-dark",
                            children: o
                        })]
                    })]
                })
            }
        },
        vNVm: function(e, t, n) {
            "use strict";
            var r = n("J4zp"),
                o = n("TqRt");
            t.__esModule = !0, t.useIntersection = function(e) {
                var t = e.rootMargin,
                    n = e.disabled || !c,
                    o = (0, i.useRef)(),
                    s = (0, i.useState)(!1),
                    l = r(s, 2),
                    f = l[0],
                    p = l[1],
                    d = (0, i.useCallback)((function(e) {
                        o.current && (o.current(), o.current = void 0), n || f || e && e.tagName && (o.current = function(e, t, n) {
                            var r = function(e) {
                                    var t = e.rootMargin || "",
                                        n = u.get(t);
                                    if (n) return n;
                                    var r = new Map,
                                        o = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var t = r.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            }))
                                        }), e);
                                    return u.set(t, n = {
                                        id: t,
                                        observer: o,
                                        elements: r
                                    }), n
                                }(n),
                                o = r.id,
                                i = r.observer,
                                a = r.elements;
                            return a.set(e, t), i.observe(e),
                                function() {
                                    i.unobserve(e), 0 === a.size && (i.disconnect(), u.delete(o))
                                }
                        }(e, (function(e) {
                            return e && p(e)
                        }), {
                            rootMargin: t
                        }))
                    }), [n, t, f]);
                return (0, i.useEffect)((function() {
                    c || f || (0, a.default)((function() {
                        return p(!0)
                    }))
                }), [f]), [d, f]
            };
            var i = n("q1tI"),
                a = o(n("0G5g")),
                c = "undefined" !== typeof IntersectionObserver;
            var u = new Map
        }
    },
    [
        ["HDwi", 0, 1, 2]
    ]
]);