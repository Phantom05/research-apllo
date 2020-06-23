import { getPhotos, getAlbums, getAlbumThumbnail } from '../database/database';

const resolvers = {
  Query: {
    photos: (context, { albumId, current, limit }) => getPhotos(albumId, current, limit),
    albums: (context, { current, limit }) => getAlbums(current, limit),
    albumThumbnail: (context, { albumId } ) => getAlbumThumbnail(albumId),
  }
};

export default resolvers;
