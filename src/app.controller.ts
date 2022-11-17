import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {

  @MessagePattern({cmd: 'greeting'})
  getGreetingmessage(name: string): string {
    return `Hello ${name}`;
  }


  @MessagePattern({cmd: 'greeting-async'})
  async getGreetingMessageAsync(name: string): Promise<string> {
    return `Hello ${name}`;
  }
}
