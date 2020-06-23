import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { VIEW_GET_HOME } from 'lib/defines';
import { HomeForm } from 'components/common/form';

function HomeContainer() {
  const { loading, error, data } = useQuery(VIEW_GET_HOME);

  console.log(data);
  const handleClick = config => {
    console.log(config);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      <ul>
        {data.continents.map(({ code, name }) => (
          <li key={code}>{name}</li>
        ))}
      </ul>
      <HomeForm
        onClick={val => handleClick({ ...val, type: 'form' })}

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
      />
    </div>
  );
}

export default HomeContainer;
