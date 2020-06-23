import axios from 'axios';

const BASE_API_URL = 'https://jsonplaceholder.typicode.com';
const ALBUM_LIST_URL = `${BASE_API_URL}/albums`;
const PHOTO_LIST_URL = `${BASE_API_URL}/photos`;

const calcStartPointByCurrent = (current, limit) => {
  return current ? current * limit : 0;
};

export const getAlbums = async (current, limit = 10) => {
  const result = await axios(ALBUM_LIST_URL, {
    params: {
      _start: calcStartPointByCurrent(current, limit), // 현재 페이지 입력 하면 페이지에 맞는 시작 위치를 반환.
      _limit: limit
    }
  });

  return result.data;
};

export const getAlbumThumbnail = async (albumId) => {
  const result = await axios(PHOTO_LIST_URL, {
    params: { albumId: albumId }
  });

  return result.data[0]; // 대표 이미지로 첫번째 1개만 반환.
};

export const getPhotos = async (albumId, current, limit = 10) => {
  const result = await axios(PHOTO_LIST_URL, {
    params: {
      albumId: albumId,
      _start: calcStartPointByCurrent(current, limit), // 현재 페이지 입력 하면 페이지에 맞는 시작 위치를 반환.
      _limit: limit
    }
  });

  return result.data;
};
