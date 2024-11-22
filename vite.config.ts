import {defineConfig} from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import path from "path";
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";
import {viteMockServe} from 'vite-plugin-mock'


export default defineConfig(({command}) => ({
    // ...
    plugins: [
        vue(),
        // elme-plus 按需引入
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        // svg图标引入
        createSvgIconsPlugin({
            // 指定需要缓存的图标文件夹
            iconDirs: [
                // 这里分为了一般icon文件夹和文件图标类型文件夹，方便管理，可以按照需求设置更多分类
                path.resolve(process.cwd(), "src/assets/icons"),
            ],
            // 指定symbolId格式
            symbolId: "icon-[dir]-[name]"
        }),
        viteMockServe({
            mockPath: 'mock',
            enable: command === 'serve',
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve("./src")
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                javascriptEnabled: true,
                additionalData: `@import "@/styles/variables.scss";`
            }
        }
    }
}))