import { ArgumentMetadata, ParseEnumPipe } from '@nestjs/common';

export class OptionalParseEnumPipe<T = any> extends ParseEnumPipe<T> {
  override async transform(
    value: T | undefined,
    metadata: ArgumentMetadata,
  ): Promise<T> {
    if (value === undefined) {
      return undefined as unknown as T;
    }

    return super.transform(value, metadata);
  }
}
