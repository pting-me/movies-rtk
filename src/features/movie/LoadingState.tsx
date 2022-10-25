import clsx from 'clsx';
import { ComponentPropsWithoutRef, FC } from 'react';

interface Props extends ComponentPropsWithoutRef<'div'> {
  message?: string;
}

export const LoadingState: FC<Props> = (props) => {
  const { message = 'Loading...', className, ...rest } = props;

  return (
    <div className={clsx('p-8', className)} {...rest}>
      {message}
    </div>
  );
};
