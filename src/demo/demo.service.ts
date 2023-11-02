import { Demodto } from './dto/demo.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { movies } from './utiles';

@Injectable()
export class DemoService {
  async allmovies() {
    try {
      return {
        movieDetails: movies,
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error,
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  async movies(movieId) {
    try {
      const val =
        movieId.length > 1
          ? movies.filter((data) => {
              if (
                data.name.toLowerCase().includes(movieId.slice(1).toLowerCase())
              ) {
                return {
                  movies: data,
                  status: HttpStatus.FORBIDDEN,
                };
              }
            })
          : [];
      console.log(val);
      return {
        movies: val,
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error,
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
