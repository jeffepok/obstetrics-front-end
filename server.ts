import 'zone.js/dist/zone-node';
// import adminRoute from './src/backend/routes/adminPanel';
import { PregnantWomanRoute } from './src/backend/routes/pregnantWoman';
import {AuthRoute} from './src/backend/routes/auth';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
import { Request, Response} from 'express';
import * as mongoose from 'mongoose';
import 'localstorage-polyfill'
import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';

global['localStorage'] = localStorage;
const pregnantWomanRoute: PregnantWomanRoute = new PregnantWomanRoute();
const authRoute: AuthRoute = new AuthRoute();
// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  // Connect to mongodb
  mongoose.connect('mongodb://localhost/obstetricsDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>  console.log('connection to database successful'))
  .catch((err) => console.error(err));

  const server = express();
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  const distFolder = join(process.cwd(), 'dist/obstetrics/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  pregnantWomanRoute.pregnantWomanRouter(server);
  authRoute.authRouter(server);
  // server.use('/admin', adminRoute);


  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });
  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
