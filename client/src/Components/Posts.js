import { useQuery, gql } from "@apollo/client";

const posts = gql`
  query GET_ALL_POSTS {
    getAllPosts {
      title
      content
    }
  }
`;

const Posts = () => {
  const { data, loading, error } = useQuery(posts);
  if (loading) return <p>Loading...🚀 </p>;
  if (error) return <p>Error 🇪🇹 </p>;
  return (
    <div>
      {data.getAllPosts.length > 0 &&
        data.getAllPosts.map(({ title, content }) => {
          return (
            <div key={title}>
              <p>{content}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Posts;
