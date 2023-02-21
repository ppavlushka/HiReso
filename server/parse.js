import _ from "lodash";

export default function (data) {
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
  ].sort((link1, link2) => {
    if (link1.width === link2.width) {
      return link1.height > link2.height ? -1 : 1;
    }
    return link1.width > link2.width ? -1 : 1;
  });
  return { ...data, images: _.uniqBy(images, "link") };
}
