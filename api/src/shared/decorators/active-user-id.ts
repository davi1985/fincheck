import { createParamDecorator, UnauthorizedException } from '@nestjs/common';

interface AuthenticatedRequest extends Request {
  userId: string;
}

export const ActiveUserId = createParamDecorator<undefined>((_, context) => {
  const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
  const userId = request.userId;

  if (!userId) {
    throw new UnauthorizedException('User is not authenticated');
  }

  return userId;
});
