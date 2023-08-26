import { useWindowSize } from "./useWindowSize";

type WidthRange = {
  min: number;
  max: number;
};

class AppLayoutService {
  constructor(
    readonly breakpoints: {
      mobile: WidthRange;
      laptop: WidthRange;
      desktop: WidthRange;
    }
  ) {}

  isMobile(width: number) {
    return this.compare(width, this.breakpoints.mobile);
  }
  isLaptop(width: number) {
    return this.compare(width, this.breakpoints.laptop);
  }
  isDesktop(width: number) {
    return this.compare(width, this.breakpoints.desktop);
  }

  private compare(width: number, range: WidthRange) {
    return width <= range.max && width >= range.min;
  }

  getAll(width: number) {
    return {
      isMobile: this.isMobile(width),
      isLaptop: this.isLaptop(width),
      isDesktop: this.isDesktop(width),
    };
  }
}

const appLayoutService = new AppLayoutService({
  mobile: {
    min: 0,
    max: 939,
  },
  laptop: {
    min: 940,
    max: 1439,
  },
  desktop: {
    min: 1440,
    max: 10000,
  },
});

export const useBreakpoint = () => {
  const { width } = useWindowSize();
  return appLayoutService.getAll(width);
};
