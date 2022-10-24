import clsx from 'clsx';
import { ComponentPropsWithoutRef, FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Props extends ComponentPropsWithoutRef<'div'> {
  /**
   * Rating number, based on given scale
   */
  rating: number;

  /**
   * @default 10
   */
  scale?: number;

  /**
   * Vote count, to be used for display text only
   */
  count?: number;
}

const calculateRating = (rating: number, scale: number) => {
  const weightedRating = (rating / scale) * 10;

  if (weightedRating > 10) {
    return {
      floatRating: 10,
      intRating: 10,
    };
  }

  if (weightedRating < 0) {
    return {
      floatRating: 0,
      intRating: 0,
    };
  }

  return {
    floatRating: weightedRating.toFixed(1),
    intRating: Math.round(weightedRating),
  };
};

export const Rating: FC<Props> = (props) => {
  const { id, rating: baseRating, scale = 10, count } = props;
  const name = id ?? uuidv4();

  // This should be an integer from 0 - 10, inclusive
  const { floatRating, intRating } = calculateRating(baseRating, scale);

  const displayText = `${floatRating} average rating on ${count} votes`;

  const range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="tooltip" data-tip={displayText}>
      <div className="rating rating-half" aria-label={displayText}>
        {range.map((value) => {
          const className =
            value === 0
              ? 'rating-hidden hidden'
              : clsx(
                  'bg-yellow-500 mask mask-star-2',
                  value % 2 === 0 ? 'mask-half-2' : 'mask-half-1'
                );

          return (
            <input
              type="radio"
              key={value}
              aria-hidden={true}
              readOnly
              name={name}
              className={className}
              checked={value === intRating}
            />
          );
        })}
      </div>
    </div>
  );
};
