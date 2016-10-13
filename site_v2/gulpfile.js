var elixir = require('laravel-elixir');

elixir.config.assetsPath = "src/assets"
elixir.config.publicPath="dist";

elixir(function(mix){
	var nodemodules = "node_modules/";
	var bower = "bower_components/";
	var sourceJs = "src/assets/js/";
	var sourceCss = "src/assets/css/";

	var distFile = "dist/";

	mix
		.copy(bower + 'bootstrap/dist/js/bootstrap.min.js', sourceJs + 'bootstrap.min.js')
        .copy(bower + 'jquery/dist/jquery.min.js', sourceJs + 'jquery.min.js')
        .copy(bower + 'js-xlsx/dist/xlsx.core.min.js', sourceJs + 'xlsx.core.min.js')
        .copy(nodemodules + 'jsbarcode/dist/JsBarcode.all.min.js', sourceJs + 'JsBarcode.all.min.js')

        // css
        .copy(bower + 'bootstrap/dist/css/bootstrap.min.css', sourceCss + 'bootstrap.min.css')
        .copy(bower + 'font-awesome/css/font-awesome.min.css', sourceCss + 'font-awesome.min.css')
        .copy(nodemodules + 'react-select/dist/react-select.min.css', sourceCss + 'react-select.min.css')
        
        .copy(bower + 'font-awesome/fonts', distFile + '/fonts/font-awesome')
        .copy(bower + 'bootstrap/fonts', distFile + '/fonts/glyphicons/')

        .scripts([
            'jquery.min.js',
            'bootstrap.min.js',
            'xlsx.core.min.js',
            'JsBarcode.all.min.js'
    	],'dist/js/common.min.js')

		.styles([
			'bootstrap.min.css',
            'font-awesome.min.css',
            'style.css',
            'animate.css',            
            'fixed-data-table.min.css',
            'react-select.min.css'
		],'dist/css/common.min.css')
})