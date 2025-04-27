import { AxiosError } from 'axios';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

export const handleError = (error: AxiosError) => {
  if (error instanceof AxiosError) {
    const axiosError = error;

    if (axiosError.response) {
      const status = axiosError.response.status;
      const message =
        (axiosError.response.data as AxiosError)?.message ||
        'Error while processing the request';

      if (status === 400) {
        throw new BadRequestException(message);
      }

      if (status >= 500) {
        throw new InternalServerErrorException(
          'Server error. Please try again later.',
        );
      }
    } else {
      throw new InternalServerErrorException(
        'Unknown error. Please try again later.',
      );
    }
  } else {
    throw new InternalServerErrorException(
      'Unknown error. Please try again later.',
    );
  }
};
