import typescript from "rollup-plugin-typescript2";
import commonjs from '@rollup/plugin-commonjs';
export default {
  input: "src/index.ts", //入口
  plugins: [
    typescript({ module: 'ESNext' }),
    // resolve(),
    commonjs()
    // css({ output(style) {
    //         // 压缩 css 写入 dist/vue-rollup-component-template.css
    //         writeFileSync('dist/vueLibs.css', new CleanCSS().minify(style).styles)
    //     } }),
    // css: false 将<style>块转换为导入语句，rollup-plugin-css-only可以提取.vue文件中的样式
    // vue({ css: true }),
    // babel({ babelHelpers: "bundled" }),
  ],
};
