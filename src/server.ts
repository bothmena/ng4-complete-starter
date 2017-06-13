/**
 * Created by bothmena on 30/05/17.
 */

import { enableProdMode } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';
import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app.server.module.ngfactory';

const PORT = 4000;

enableProdMode();

const app = express();

const template = readFileSync( join( __dirname, '..', 'dist', 'index.html' ) ).toString();

app.engine( 'html', ( _, options, callback ) => {
    const opts = { document: template, url: options.req.url };

    renderModuleFactory( AppServerModuleNgFactory, opts )
        .then( html => callback( null, html ) );
} );

app.set( 'view engine', 'html' );
app.set( 'views', 'src' );

app.get( '*.*', express.static( join( __dirname, '..', 'dist' ) ) );

app.get( '*', ( req, res ) => {
    res.render( 'index', { req } );
} );

app.listen( PORT, () => {
    console.log( `listening on http://localhost:${PORT}!` );
} );
