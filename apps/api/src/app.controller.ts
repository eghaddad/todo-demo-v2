import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot() {
    return {
      service: 'Todo Demo V2 API',
      version: process.env.RAILWAY_GIT_COMMIT_SHA || 'unknown',
      status: 'running',
      endpoints: {
        health: '/api/health',
        version: '/api/version',
        todos: '/api/todos'
      }
    };
  }
  
  @Get('api/health')
  getHealth() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
  
  @Get('api/version')
  getVersion() {
    return {
      commit: process.env.RAILWAY_GIT_COMMIT_SHA || 'unknown',
      timestamp: new Date().toISOString()
    };
  }
}
