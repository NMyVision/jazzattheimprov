// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/github/nmyvision/jazzattheimprov/node_modules/.pnpm/vite@5.0.11_@types+node@18.19.6/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/github/nmyvision/jazzattheimprov/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@5.0.11_vue@3.4.13/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/github/nmyvision/jazzattheimprov/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.0.11_vue@3.4.13/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import AutoImport from "file:///D:/github/nmyvision/jazzattheimprov/node_modules/.pnpm/unplugin-auto-import@0.17.3_@vueuse+core@10.7.2/node_modules/unplugin-auto-import/dist/vite.js";
var __vite_injected_original_import_meta_url = "file:///D:/github/nmyvision/jazzattheimprov/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue({
      script: {
        propsDestructure: true,
        defineModel: true
      }
    }),
    vueJsx(),
    AutoImport({
      dts: true,
      imports: ["vue", "vue-router", "pinia"]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxnaXRodWJcXFxcbm15dmlzaW9uXFxcXGphenphdHRoZWltcHJvdlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcZ2l0aHViXFxcXG5teXZpc2lvblxcXFxqYXp6YXR0aGVpbXByb3ZcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2dpdGh1Yi9ubXl2aXNpb24vamF6emF0dGhlaW1wcm92L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5cbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoe1xuICAgICAgc2NyaXB0OiB7XG4gICAgICAgIHByb3BzRGVzdHJ1Y3R1cmU6IHRydWUsXG4gICAgICAgIGRlZmluZU1vZGVsOiB0cnVlXG4gICAgICB9XG4gICAgfSksXG4gICAgdnVlSnN4KCksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBkdHM6IHRydWUsXG4gICAgICBpbXBvcnRzOiBbXCJ2dWVcIiwgXCJ2dWUtcm91dGVyXCIsIFwicGluaWFcIl1cbiAgICB9KVxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtUyxTQUFTLGVBQWUsV0FBVztBQUV0VSxTQUFTLG9CQUFvQjtBQUU3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZ0JBQWdCO0FBTjhKLElBQU0sMkNBQTJDO0FBU3RPLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLFFBQVE7QUFBQSxRQUNOLGtCQUFrQjtBQUFBLFFBQ2xCLGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsSUFDUCxXQUFXO0FBQUEsTUFDVCxLQUFLO0FBQUEsTUFDTCxTQUFTLENBQUMsT0FBTyxjQUFjLE9BQU87QUFBQSxJQUN4QyxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
