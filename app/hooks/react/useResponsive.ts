import { useMediaQuery } from "react-responsive";

export const useResponsive = (query: number) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${query}px)` });
  return { isMobile };
};
