import { parse, join } from "path";
import { createWriteStream, createReadStream } from "fs";
import { URL } from "../config/index.js";

export default {
  Query: {
    info: () => "Hello I am image resolver method",
  },
  Mutation: {
    imageUploader: async (_, { file }) => {
      let { filename, createReadStream } = await file;
      let stream = createReadStream();
      let { ext, name } = parse(filename);

      name = name.replace(/([^a-z0-9 ]+)/gi, "-").replace(" ", "_");
      let serverFile = join(
        __dirname,
        `../uploads/${name}-${new Date()}${ext}`
      );
      let writeStream = await createWriteStream(serverFile);
      await stream.pipe(writeStream);

      serverFile = `${URL}${serverFile.split("uploads")[1]}`;

      return serverFile;
    },
  },
};
