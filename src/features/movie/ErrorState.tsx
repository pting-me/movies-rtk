import clsx from 'clsx';
import { ComponentPropsWithoutRef, FC } from 'react';

interface Props extends ComponentPropsWithoutRef<'div'> {
  message?: string;
}

export const ErrorState: FC<Props> = (props) => {
  const { message = 'An error occurred.', className, ...rest } = props;

  return (
    <div className={clsx('p-8', className)} {...rest}>
      {message}
    </div>
  );
};
