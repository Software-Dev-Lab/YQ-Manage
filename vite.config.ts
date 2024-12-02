import {defineConfig} from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import path from "path";
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";
import {viteMockServe} from 'vite-plugin-mock'


// import {loadEnv} from 'vite'
// export default defineConfig(({command, mode}) => {
//     let env = loadEnv(mode, process.cwd())
//     return ({
//         // ...
//         plugins: [
//             vue(),
//             // elme-plus 按需引入
//             AutoImport({
//                 resolvers: [ElementPlusResolver()],
//             }),
//             Components({
//                 resolvers: [ElementPlusResolver()],
//             }),
//             // svg图标引入
//             createSvgIconsPlugin({
//                 // 指定需要缓存的图标文件夹
//                 iconDirs: [
//                     // 这里分为了一般icon文件夹和文件图标类型文件夹，方便管理，可以按照需求设置更多分类
//                     path.resolve(process.cwd(), "src/assets/icons"),
//                 ],
//                 // 指定symbolId格式
//                 symbolId: "icon-[dir]-[name]"
//             }),
//             viteMockServe({
//                 mockPath: 'mock',
//                 enable: command === 'serve',
//             }),
//         ],
//         resolve: {
//             alias: {
//                 "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
//             }
//         },
//         css: {
//             preprocessorOptions: {
//                 scss: {
//                     javascriptEnabled: true,
//                     additionalData: `@import "@/styles/variables.scss";`
//                 }
//             }
//         },
//         server: {
//             proxy: {
//                 [env.VITE_APP_BASE_API]: {
//                     //获取数据服务器地址的设置
//                     target: env.VITE_SERVE,
//                     //需要代理跨域
//                     changeOrigin: true,
//                     //路径重写
//                     rewrite: (path) => path.replace(/^\/api/, ''),
//                 },
//             }
//         }
//     });
// })

// export default defineConfig(({command}) => {
//
//     return ({
//         // ...
//         plugins: [
//             vue(),
//             // elme-plus 按需引入
//             AutoImport({
//                 resolvers: [ElementPlusResolver()],
//             }),
//             Components({
//                 resolvers: [ElementPlusResolver()],
//             }),
//             // svg图标引入
//             createSvgIconsPlugin({
//                 // 指定需要缓存的图标文件夹
//                 iconDirs: [
//                     // 这里分为了一般icon文件夹和文件图标类型文件夹，方便管理，可以按照需求设置更多分类
//                     path.resolve(process.cwd(), "src/assets/icons"),
//                 ],
//                 // 指定symbolId格式
//                 symbolId: "icon-[dir]-[name]"
//             }),
//             viteMockServe({
//                 mockPath: 'mock',
//                 enable: command === 'serve',
//             }),
//         ],
//         resolve: {
//             alias: {
//                 "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
//             }
//         },
//         css: {
//             preprocessorOptions: {
//                 scss: {
//                     javascriptEnabled: true,
//                     additionalData: `@import "@/styles/variables.scss";`
//                 }
//             }
//         },
//         server: {
//             proxy: {
//                 "/api/admin/acl": { // 更新代理规则以匹配新的路径
//                     target: "http://sph-api.atguigu.cn", // 目标后端服务
//                     changeOrigin: true,
//                     rewrite: (path) => path.replace(/^\/api/, ''),
//                 },
//                 "/api": {
// //获取数据的服务器地址设置
//                     target: "http://39.98.123.211:8510",
// //需要代理跨域
//                     changeOrigin: true,
// //路径重写
//                     rewrite: (path) => path.replace(/^\/api/, ''),
//                 }
//             }
//
//
//         }
//     });
// })

export default defineConfig(({command}) => {

    return ({
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
            // mock
            viteMockServe({
                mockPath: 'mock',
                enable: command === 'serve',
            }),
        ],
        resolve: {
            alias: {
                "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    javascriptEnabled: true,
                    additionalData: `@import "@/styles/variables.scss";`
                }
            }
        },
        server: {
            proxy: {
                "/api/admin/product/fileUpload": { // 更新代理规则以匹配新的路径
                    target: "http://sph-api.atguigu.cn", // 目标后端服务
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
            }


        }

    });
})