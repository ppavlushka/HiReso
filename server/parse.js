import _ from "lodash";
import { encrypt, initEncryption } from "../lib/encryption";

export default async function parse(data, limit = 6) {
  const images = [
    ..._.get(data, "image_results", []).map(
      ({ original_image: image }) => image
    ),
    ..._.flatten(Object.values(_.get(data, "image_sizes", {}))).map((image) => {
      const [width, height] = _.get(image, "size", "").split(/\D/).map(Number);
      return {
        width,
        height,
        ...image,
      };
    }),
  ]
    .sort((link1, link2) => {
      if (link1.width === link2.width) {
        return link1.height > link2.height ? -1 : 1;
      }
      return link1.width > link2.width ? -1 : 1;
    })
    .slice(0, limit)
    .map((image) => _.pick(image, ["link", "width", "height"]));
  const uniqImages = _.uniqBy(images, "link");
  // iterate over images and add encrypted link
  await initEncryption();
  for (let i = 0; i < uniqImages.length; i++) {
    uniqImages[i].hash = await encrypt(uniqImages[i].link);
    delete uniqImages[i].link;
  }
  return { images: uniqImages };
}
