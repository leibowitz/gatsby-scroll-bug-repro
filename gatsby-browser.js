export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  const currentPosition = getSavedScrollPosition(location);
  console.log(location.key, currentPosition);

  window.scrollTo(...(currentPosition || [0, 0]));

  return false;
};
