import { a as useSeoMeta$1 } from '../virtual/entry.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import 'nostics';
import 'nostics/formatters/ansi';
import 'unhead/plugins';
import 'unhead/utils';
import '../routes/renderer.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'mongoose';
import 'unhead/server';
import 'unhead/legacy';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue-router';
import '@vue/shared';
import 'pinia';
import 'fnv1a-64';
import 'object-identity';

//#region app/pages/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "WordPanda",
			description: "Dictionary workspace for German verb families and prefix variants."
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "page-shell" }, _attrs))}><section class="hero-card"><p class="eyebrow">Nuxt 4 Starter</p><h1>WordPanda is ready for a proper full-stack foundation.</h1><p class="hero-copy"> This scaffold already includes Nuxt 4, Nitro, Pinia, PWA wiring, Mongo entry points, and server API stubs. </p></section><section class="grid-two"><article class="info-card"><h2>App layer</h2><ul><li>\`app/pages/index.vue\` and \`app/pages/family/[id].vue\` are in place.</li><li>\`app/components/\` is ready for shared UI.</li><li>\`shared/types/verbs.ts\` holds the domain model.</li></ul></article><article class="info-card"><h2>Server layer</h2><ul><li>\`server/plugins/mongodb.ts\` is ready for Atlas connection.</li><li>\`server/models/\` contains initial mongoose models.</li><li>\`server/api/\` contains starter routes for auth, search and family details.</li></ul></article></section></main>`);
		};
	}
});
//#endregion
//#region app/pages/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = index_vue_vue_type_script_setup_true_lang_default;

export { pages_default as default };
//# sourceMappingURL=pages-BZAyEmyb.mjs.map
