import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css' ,'resources/sass/Navbar.scss','resources/sass/profilio.scss','resources/sass/services.scss','resources/sass/skills.scss','resources/sass/contact.scss','resources/js/app.js','resources/js/services.js','resources/js/skills.js','resources/js/contact.js'],
            refresh: true,
        }),
    ],
});
