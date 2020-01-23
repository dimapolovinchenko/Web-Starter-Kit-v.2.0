<h1>Web Starter Kit v.2.0</h1>

<p>Author: polovinchenkodima</p>

<p>Web Starter Kit is optimized for Google PageSpeed start HTML5 template with Jquery, Bootstrap, Font Awesome, Gulp, Sass, Browsersync, Autoprefixer, Clean-CSS, Uglify, Imagemin support. The template contains a <strong>.htaccess</strong> file with caching rules for web server.</p>

<p>Web Starter Kit uses the best practices of web development and optimized for Google PageSpeed.</p>

<p>Cross-browser compatibility: IE9+.</p>

<p>The template uses a Sass with <strong>Sass</strong> syntax and project structure with source code in the directory <strong>app/</strong> and production folder <strong>dist/</strong>, that contains ready project with optimized HTML, CSS, JS and images.</p>

<h2>How to use Web Starter Kit</h2>

<ol>
	<li><a href="https://github.com/SendStormy/Web-Starter-Kit/archive/master.zip">Download</a> <strong>Web Starter Kit</strong> from GitHub;</li>
	<li>Update all package in package.json file: ncu -u</li>
	<li>Install Node Modules: <strong>npm i</strong>;</li>
	<li>Run the template: <strong>gulp</strong>.</li>
</ol>

<h2>Gulp tasks:</h2>

<ul>
	<li><strong>gulp</strong>: run default gulp task (sass, js, watch, browserSync) for web development;</li>
</ul>

<h2>Rules for working with the Web Starter Kit</h2>

<ol>
	<li>All HTML files should have similar initial content as in <strong>app/index.html</strong>;</li>
	<li><strong>Template Basic Images Start</strong> comment in app/index.html - all your custom template basic images (og:image for social networking, favicons for a variety of devices);</li>
	<li><strong>Custom Browsers Color Start</strong> comment in app/index.html: set the color of the browser head on a variety of devices;</li>
	<li><strong>Custom HTML</strong> comment in app/index.html - all your custom HTML;</li>
	<li>All custom JS located in <strong>app/js/common.js</strong>;</li>
	<li>All Sass vars placed in <strong>app/sass/_vars.sass</strong>;</li>
	<li>All Bootstrap media queries placed in <strong>app/sass/_media.sass</strong>;</li>
</ol>
