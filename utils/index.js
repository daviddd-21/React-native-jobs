export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|webp|bmp|gif)$",
      "i"
    );
    return pattern.test(url);
  }
};
