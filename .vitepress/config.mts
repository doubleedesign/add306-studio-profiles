import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "content",
    base: '/add306-studio-profiles/', // needed for GitHub Pages routes to work
    title: "ADD306 Leesa Ward",
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [],

        sidebar: [
            {
                text: 'Research Investigation',
                items: [
                    {text: 'Case Study 1', link: '/pollen'},
                    {text: 'Case Study 2', link: '/case-study-2'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/doubleedesign/add306-studio-profiles'}
        ]
    }
})
