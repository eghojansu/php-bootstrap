var n,l,u,i,t,r,o,f,e = {},c = [],s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n, l) {for (var u in l) n[u] = l[u];return n;}function h(n) {var l = n.parentNode;l && l.removeChild(n);}function v(l, u, i) {var t,r,o,f = {};for (o in u) "key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (o in l.defaultProps) void 0 === f[o] && (f[o] = l.defaultProps[o]);return y(l, f, t, r, null);}function y(n, i, t, r, o) {var f = { type: n, props: i, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o ? ++u : o };return null == o && null != l.vnode && l.vnode(f), f;}function p() {return { current: null };}function d(n) {return n.children;}function _(n, l) {this.props = n, this.context = l;}function k(n, l) {if (null == l) return n.__ ? k(n.__, n.__.__k.indexOf(n) + 1) : null;for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;return "function" == typeof n.type ? k(n) : null;}function b(n) {var l, u;if (null != (n = n.__) && null != n.__c) {for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {n.__e = n.__c.base = u.__e;break;}return b(n);}}function m(n) {(!n.__d && (n.__d = !0) && t.push(n) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(g);}function g() {for (var n; g.__r = t.length;) n = t.sort(function (n, l) {return n.__v.__b - l.__v.__b;}), t = [], n.some(function (n) {var l, u, i, t, r, o;n.__d && (r = (t = (l = n).__v).__e, (o = l.__P) && (u = [], (i = a({}, t)).__v = t.__v + 1, j(o, t, i, l.__n, void 0 !== o.ownerSVGElement, null != t.__h ? [r] : null, u, null == r ? k(t) : r, t.__h), z(u, t), t.__e != r && b(t)));});}function w(n, l, u, i, t, r, o, f, s, a) {var h,v,p,_,b,m,g,w = i && i.__k || c,A = w.length;for (u.__k = [], h = 0; h < l.length; h++) if (null != (_ = u.__k[h] = null == (_ = l[h]) || "boolean" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _ ? y(null, _, null, null, _) : Array.isArray(_) ? y(d, { children: _ }, null, null, null) : _.__b > 0 ? y(_.type, _.props, _.key, null, _.__v) : _)) {if (_.__ = u, _.__b = u.__b + 1, null === (p = w[h]) || p && _.key == p.key && _.type === p.type) w[h] = void 0;else for (v = 0; v < A; v++) {if ((p = w[v]) && _.key == p.key && _.type === p.type) {w[v] = void 0;break;}p = null;}j(n, _, p = p || e, t, r, o, f, s, a), b = _.__e, (v = _.ref) && p.ref != v && (g || (g = []), p.ref && g.push(p.ref, null, _), g.push(v, _.__c || b, _)), null != b ? (null == m && (m = b), "function" == typeof _.type && _.__k === p.__k ? _.__d = s = x(_, s, n) : s = P(n, _, p, w, b, s), "function" == typeof u.type && (u.__d = s)) : s && p.__e == s && s.parentNode != n && (s = k(p));}for (u.__e = m, h = A; h--;) null != w[h] && ("function" == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = k(i, h + 1)), N(w[h], w[h]));if (g) for (h = 0; h < g.length; h++) M(g[h], g[++h], g[++h]);}function x(n, l, u) {for (var i, t = n.__k, r = 0; t && r < t.length; r++) (i = t[r]) && (i.__ = n, l = "function" == typeof i.type ? x(i, l, u) : P(u, i, i, t, i.__e, l));return l;}function A(n, l) {return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {A(n, l);}) : l.push(n)), l;}function P(n, l, u, i, t, r) {var o, f, e;if (void 0 !== l.__d) o = l.__d, l.__d = void 0;else if (null == u || t != r || null == t.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(t), o = null;else {for (f = r, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;n.insertBefore(t, r), o = r;}return void 0 !== o ? o : t.nextSibling;}function C(n, l, u, i, t) {var r;for (r in u) "children" === r || "key" === r || r in l || H(n, r, null, u[r], i);for (r in l) t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || H(n, r, l[r], u[r], i);}function $(n, l, u) {"-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || s.test(l) ? u : u + "px";}function H(n, l, u, i, t) {var r;n: if ("style" === l) {if ("string" == typeof u) n.style.cssText = u;else {if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || $(n.style, l, "");if (u) for (l in u) i && u[l] === i[l] || $(n.style, l, u[l]);}} else if ("o" === l[0] && "n" === l[1]) r = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? i || n.addEventListener(l, r ? T : I, r) : n.removeEventListener(l, r ? T : I, r);else if ("dangerouslySetInnerHTML" !== l) {if (t) l = l.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {n[l] = null == u ? "" : u;break n;} catch (n) {}"function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));}}function I(n) {this.l[n.type + !1](l.event ? l.event(n) : n);}function T(n) {this.l[n.type + !0](l.event ? l.event(n) : n);}function j(n, u, i, t, r, o, f, e, c) {var s,h,v,y,p,k,b,m,g,x,A,P = u.type;if (void 0 !== u.constructor) return null;null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, o = [e]), (s = l.__b) && s(u);try {n: if ("function" == typeof P) {if (m = u.props, g = (s = P.contextType) && t[s.__c], x = s ? g ? g.props.value : s.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(m, x) : (u.__c = h = new _(m, x), h.constructor = P, h.render = O), g && g.sub(h), h.props = m, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = a({}, h.__s)), a(h.__s, P.getDerivedStateFromProps(m, h.__s))), y = h.props, p = h.state, v) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {if (null == P.getDerivedStateFromProps && m !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, x) || u.__v === i.__v) {h.props = m, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {n && (n.__ = u);}), h.__h.length && f.push(h);break n;}null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {h.componentDidUpdate(y, p, k);});}h.context = x, h.props = m, h.state = h.__s, (s = l.__r) && s(u), h.__d = !1, h.__v = u, h.__P = n, s = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (t = a(a({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, p)), A = null != s && s.type === d && null == s.key ? s.props.children : s, w(n, Array.isArray(A) ? A : [A], u, i, t, r, o, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;} else null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L(i.__e, u, i, t, r, o, f, c);(s = l.diffed) && s(u);} catch (n) {u.__v = null, (c || null != o) && (u.__e = e, u.__h = !!c, o[o.indexOf(e)] = null), l.__e(n, u, i);}}function z(n, u) {l.__c && l.__c(u, n), n.some(function (u) {try {n = u.__h, u.__h = [], n.some(function (n) {n.call(u);});} catch (n) {l.__e(n, u.__v);}});}function L(l, u, i, t, r, o, f, c) {var s,a,v,y = i.props,p = u.props,d = u.type,_ = 0;if ("svg" === d && (r = !0), null != o) for (; _ < o.length; _++) if ((s = o[_]) && (s === l || (d ? s.localName == d : 3 == s.nodeType))) {l = s, o[_] = null;break;}if (null == l) {if (null === d) return document.createTextNode(p);l = r ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), o = null, c = !1;}if (null === d) y === p || c && l.data === p || (l.data = p);else {if (o = o && n.call(l.childNodes), a = (y = i.props || e).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {if (null != o) for (y = {}, _ = 0; _ < l.attributes.length; _++) y[l.attributes[_].name] = l.attributes[_].value;(v || a) && (v && (a && v.__html == a.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));}if (C(l, p, y, r, c), v) u.__k = [];else if (_ = u.props.children, w(l, Array.isArray(_) ? _ : [_], u, i, t, r && "foreignObject" !== d, o, f, o ? o[0] : i.__k && k(i, 0), c), null != o) for (_ = o.length; _--;) null != o[_] && h(o[_]);c || ("value" in p && void 0 !== (_ = p.value) && (_ !== l.value || "progress" === d && !_) && H(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && H(l, "checked", _, y.checked, !1));}return l;}function M(n, u, i) {try {"function" == typeof n ? n(u) : n.current = u;} catch (n) {l.__e(n, i);}}function N(n, u, i) {var t, r;if (l.unmount && l.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M(t, null, u)), null != (t = n.__c)) {if (t.componentWillUnmount) try {t.componentWillUnmount();} catch (n) {l.__e(n, u);}t.base = t.__P = null;}if (t = n.__k) for (r = 0; r < t.length; r++) t[r] && N(t[r], u, "function" != typeof n.type);i || null == n.__e || h(n.__e), n.__e = n.__d = void 0;}function O(n, l, u) {return this.constructor(n, u);}function S(u, i, t) {var r, o, f;l.__ && l.__(u, i), o = (r = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], j(i, u = (!r && t || i).__k = v(d, null, [u]), o || e, e, void 0 !== i.ownerSVGElement, !r && t ? [t] : o ? null : i.firstChild ? n.call(i.childNodes) : null, f, !r && t ? t : o ? o.__e : i.firstChild, r), z(f, u);}function q(n, l) {S(n, l, q);}function B(l, u, i) {var t,r,o,f = a({}, l.props);for (o in u) "key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), y(l.type, f, t || l.key, r || l.ref, null);}function D(n, l) {var u = { __c: l = "__cC" + f++, __: n, Consumer: function (n, l) {return n.children(l);}, Provider: function (n) {var u, i;return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {return i;}, this.shouldComponentUpdate = function (n) {this.props.value !== n.value && u.some(m);}, this.sub = function (n) {u.push(n);var l = n.componentWillUnmount;n.componentWillUnmount = function () {u.splice(u.indexOf(n), 1), l && l.call(n);};}), n.children;} };return u.Provider.__ = u.Consumer.contextType = u;}n = c.slice, l = { __e: function (n, l) {for (var u, i, t; l = l.__;) if ((u = l.__c) && !u.__) try {if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u;} catch (l) {n = l;}throw n;} }, u = 0, i = function (n) {return null != n && void 0 === n.constructor;}, _.prototype.setState = function (n, l) {var u;u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), "function" == typeof n && (n = n(a({}, u), this.props)), n && a(u, n), null != n && this.__v && (l && this.__h.push(l), m(this));}, _.prototype.forceUpdate = function (n) {this.__v && (this.__e = !0, n && this.__h.push(n), m(this));}, _.prototype.render = d, t = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;export { S as render, q as hydrate, v as createElement, v as h, d as Fragment, p as createRef, i as isValidElement, _ as Component, B as cloneElement, D as createContext, A as toChildArray, l as options };