"use strict";var mix=require("laravel-mix");mix.config.fileLoaderDirs.fonts="assets/fonts",mix.js("resources/js/app.js","public/js").sass("resources/sass/app.scss","public/css").js("resources/js/pages/home.js","public/js/pages").sass("resources/sass/pages/home.scss","public/css/pages").js("resources/js/pages/about.js","public/js/pages").sass("resources/sass/pages/about.scss","public/css/pages").js("resources/js/pages/contact.js","public/js/pages").sass("resources/sass/pages/contact.scss","public/css/pages").js("resources/js/pages/login.js","public/js/pages").sass("resources/sass/pages/login.scss","public/css/pages").js("resources/js/pages/forget.js","public/js/pages").sass("resources/sass/pages/forget.scss","public/css/pages").js("resources/js/pages/reset.js","public/js/pages").sass("resources/sass/pages/reset.scss","public/css/pages").js("resources/js/pages/register.js","public/js/pages").sass("resources/sass/pages/register.scss","public/css/pages").js("resources/js/pages/services.js","public/js/pages").sass("resources/sass/pages/services.scss","public/css/pages").js("resources/js/pages/show.js","public/js/pages").sass("resources/sass/pages/show.scss","public/css/pages").js("resources/js/cars/addcar.js","public/js/cars").sass("resources/sass/cars/addcar.scss","public/css/cars").js("resources/js/seller/viewseller.js","public/js/seller").sass("resources/sass/seller/viewseller.scss","public/css/seller").js("resources/js/seller/addseller.js","public/js/seller").sass("resources/sass/seller/addseller.scss","public/css/seller").js("resources/js/renter/renter.js","public/js/renter").sass("resources/sass/renter/renter.scss","public/css/renter").js("resources/js/admin/dashboard.js","public/js/admin").sass("resources/sass/admin/dashboard.scss","public/css/admin").js("resources/js/admin/settings.js","public/js/admin").sass("resources/sass/admin/settings.scss","public/css/admin");