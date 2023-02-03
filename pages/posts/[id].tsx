import { useRouter } from "next/router";
import { getAllToolIds, getToolData } from "../../lib/tools";
import ToolPage from "../../components/tool-page/tool-page"

export async function getStaticProps({ params }) {
  const toolData = await getToolData(params.id);
  return {
    props: {
      toolData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllToolIds();
  return {
    paths,
    fallback: false,
  };
}

const Post = ({ toolData }) => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <>
      <h1>{id}</h1>
      <ToolPage
        id={toolData.id}
        name={toolData.name}
        image={toolData.image}
        alt={toolData.alt}
        content={{ __html: toolData.contentHtml }}
      ></ToolPage>
    </>
  )
}

export default Post;