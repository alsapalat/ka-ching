import path from 'path';
import Express from 'express';

import { PATH_STYLES, PATH_STYLES_DEV, PATH_IMG, PATH_FONT, PATH_DIST, PATH_SCRIPTS, ASSETS_CONFIG  } from './config';


var app = Express();
var server;

app.set('view engine', 'jade');

app.use('/css', Express.static(PATH_STYLES, ASSETS_CONFIG));
app.use('/css', Express.static(PATH_STYLES_DEV, ASSETS_CONFIG));
app.use('/img', Express.static(PATH_IMG, ASSETS_CONFIG));
app.use('/fonts', Express.static(PATH_FONT, ASSETS_CONFIG));
app.use('/js', Express.static(PATH_SCRIPTS, ASSETS_CONFIG));

app.use(Express.static(PATH_DIST, ASSETS_CONFIG));

app.get('*', (req, res) => {
    res.render('index', {
	  	pageTitle: 	`ka-ching`,
	  	cssPath: 	`/css/common.min.css`,
	  	asPath: `/css/autosave.css`,
        jsVendor: `/js/vendors.js`,
        jsApp: `/js/bundle.js`,
        jsScript: `/js/common.min.js`
    })
});

server = app.listen(process.env.PORT || 3010, () => {
    var port = server.address().port;
    console.log('Running at localhost:%s', port);
});
