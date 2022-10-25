import { UserIcon } from '@heroicons/react/24/solid';
import { FC, useState } from 'react';
import { CamelCasedProperties } from 'type-fest';
import { CastMemberDto } from './types';

const basePath = 'https://image.tmdb.org/t/p/w185';

interface Props {
  castMember: CamelCasedProperties<CastMemberDto>;
}

export const CastMemberAvatar: FC<Props> = (props) => {
  const {
    castMember: { name, profilePath },
  } = props;
  const [hasImage, setHasImage] = useState(Boolean(profilePath));

  const handleImgError = () => {
    setHasImage(false);
  };
  return (
    <div className="avatar">
      <div className="w-16 rounded-full bg-neutral">
        {hasImage ? (
          <img
            className="w-16"
            src={`${basePath}${profilePath}`}
            alt={name}
            onError={handleImgError}
          />
        ) : (
          <div className="flex h-full justify-center items-center">
            <UserIcon className="w-8 h-8 fill-neutral-content" />
          </div>
        )}
      </div>
    </div>
  );
};
