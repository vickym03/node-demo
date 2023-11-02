import { Body, Controller, Get, Post, Res, Param } from '@nestjs/common';
import { DemoService } from './demo.service';
import { Demodto } from './dto/demo.dto';

@Controller('movies')
export class DemoController {
  constructor(private readonly DemoService: DemoService) {}

  @Get('/')
  async allmovies() {
    return await this.DemoService.allmovies();
  }

  @Post('/movie/:movieName')
  async movies(@Param('movieName') movieName: string) {
    return this.DemoService.movies(movieName);
  }
}
