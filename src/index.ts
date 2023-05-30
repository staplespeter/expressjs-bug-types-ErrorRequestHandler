import express, { NextFunction } from 'express';

const expressApp = express();
expressApp.use((req, res, next) => {});
expressApp.use((err, req, res, next) => {});
expressApp.use((err: any, req: any, res: any, next: NextFunction) => {});