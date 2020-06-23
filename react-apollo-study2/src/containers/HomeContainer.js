import React from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { VIEW_GET_HOME } from 'lib/defines';
import { HomeForm } from 'components/common/form';

function HomeContainer() {
  const { loading, error, data, refetch, networkStatus } = useQuery(VIEW_GET_HOME, {
    notifyOnNetworkStatusChange: true,
  });
  const [getTetst, { loading: testLoading, data: testData }] = useLazyQuery(VIEW_GET_HOME);

  const handleClick = config => {
    const { type } = config;
    /**
     * 다시 fetch 하고싶으면 refect를 뽑고 두번째 인자로 조절을 해주면댐
     * 아니면 LazqQuery를 해주든지
     *  */

    if (type === 'lazy') {
      getTetst({ variables: { breed: 'test' } });
    }
    if (type === 'refetch') {
      refetch();
    }
  };

  console.log(testData?.continents, 'testData');
  console.log(data?.continents, 'data');

  if (networkStatus === 4) return <p>Refetching!</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      <button onClick={() => handleClick({ type: 'lazy' })}>Click Lazy</button>
      <button onClick={() => handleClick({ type: 'refetch' })}>Refetch Click</button>
      <HomeForm onClick={val => handleClick({ ...val, type: 'form' })} />
    </div>
  );
}

export default HomeContainer;

// onClick={async () => {
//   const result = await client.mutate({
//     mutation: DELETE_COMMENT,
//     variables: { input: { id: comment.id } }
//   })
//   const deletedCommentId = result.data.deleteComment.comment.id
//   const cacheData = client.readQuery({
//     query: GET_ARTICLE_COMMENTS,
//     variables: { slug }
//   })
//   cacheData.article.comments = cacheData.article.comments.filter(
//     x => x.id !== deletedCommentId
//   )
//   client.writeQuery({
//     query: GET_ARTICLE_COMMENTS,
//     data: cacheData
//   })
// }}
