import contentful from "contentful";

const getByContentModel = async (contentModel) => {
  const { CONTENTFUL_SPACE_ID = "", CONTENTFUL_ACCESS_TOKEN = "" } = (await import("./envVariables.js")).default();

  const client = contentful.createClient({
    space: CONTENTFUL_SPACE_ID || "",
    accessToken: CONTENTFUL_ACCESS_TOKEN || "",
  });

  const { items } = await client.getEntries({
    content_type: contentModel,
    include: 10,
  });

  return items;
};

export default getByContentModel;
