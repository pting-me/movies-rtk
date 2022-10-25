import clsx from 'clsx';
import { ComponentPropsWithoutRef, FC } from 'react';

interface Props extends ComponentPropsWithoutRef<'div'> {
  message?: string;
}

export const EmptyState: FC<Props> = (props) => {
  const { message = 'No data found.', className, ...rest } = props;

  return (
    <div className={clsx('p-8', className)} {...rest}>
      {message}
    </div>
  );
};
