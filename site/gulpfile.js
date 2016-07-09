var elixir = require('laravel-elixir');

elixir.config.assetsPath = "src/client"
elixir.config.publicPath="dist";

elixir(function(mix){
	var nodemodules = "node_modules/";
	var bower = "bower_components/";
	var sourceJs = "src/client/js/";
	var sourceCss = "src/client/css/";

	var distFile = "dist/";

	mix
		.copy(bower + 'bootstrap/dist/js/bootstrap.min.js', sourceJs + 'bootstrap.min.js')
        .copy(bower + 'jquery/dist/jquery.min.js', sourceJs + 'jquery.min.js')

        // css
        .copy(bower + 'bootstrap/dist/css/bootstrap.min.css', sourceCss + 'bootstrap.min.css')
        .copy(bower + 'bootstrap/dist/css/bootstrap-theme.min.css', sourceCss + 'bootstrap-theme.min.css')
        .copy(bower + 'font-awesome/css/font-awesome.min.css', sourceCss + 'font-awesome.min.css')
        
        .copy(bower + 'font-awesome/fonts', distFile + 'fonts/')
        //.copy(bower + 'bootstrap/dist/fonts', distFile + 'fonts')

        .scripts([
            'jquery.min.js',
            'bootstrap.min.js'
    	],'dist/js/common.min.js')

		.styles([
			'bootstrap.min.css',
            'font-awesome.min.css',
            //'bootstrap-theme.min.css',
            'style.css',
            'animate.css'
		],'dist/css/common.min.css')
})