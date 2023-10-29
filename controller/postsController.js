const { client } = require("../utils/contentful");

const getPosts = async () => {
  const body = {
    content_type: "post",
    select: "fields",
  };
  const entries = await client.getEntries(body);
  const sanitizedEntries = entries.items.map((item) => {
    const imageUrl = item.fields.image.fields.file.url;
    return {
      ...item.fields,
      imageUrl,
    };
  });

  return sanitizedEntries;
};

module.exports = { getPosts };
