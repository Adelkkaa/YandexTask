import { MutableRefObject, useEffect } from "react";

export const useInnovationVideoPlay = (
  videoRef: MutableRefObject<HTMLVideoElement | null>
) => {
  const video = videoRef?.current;

  const playFullScreen = () => {
    if (!video) {
      return;
    }

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  useEffect(() => {
    const onChangeFullScreenMode = (e: Event) => {
      if (!video) {
        return;
      }

      if (e.target == video) {
        const isFullScreenMode = document.fullscreenElement;
        if (isFullScreenMode) {
          video.controls = true;
          video.play();
        } else {
          video.controls = false;
          video.pause();
        }
      }
    };

    document.addEventListener("fullscreenchange", onChangeFullScreenMode);

    return () => {
      document.removeEventListener("fullscreenchange", onChangeFullScreenMode);
    };
  }, [video]);

  return { playFullScreen };
};
