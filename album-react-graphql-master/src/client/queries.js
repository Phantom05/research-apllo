import gql from 'graphql-tag';

export const ALBUM_LIST = gql`
    {
        albums(current: 1, limit: 10) {
            id
            userId
            title
        }
    }
`;

export const ALBUM_THUMBNAIL = gql`
    query albumThumbnail($albumId: Int!) {
        albumThumbnail(albumId: $albumId) {
            thumbnailUrl
        }
    }
`;

export const PHOTO_LIST = gql`
    query photos($albumId: Int!) {
        photos(albumId: $albumId, current: 1, limit: 10) {
            id
            albumId
            title
            url
        }
    }
`;
