import MediaBelive from "../components/molecules/Media/MediaBelive";
import MediaCards from "../components/molecules/Media/MediaCards";
import MediaContact from "../components/molecules/Media/MediaContact";
import MediaGurantee from "../components/molecules/Media/MediaGurantee";
import MediaOpportunity from "../components/molecules/Media/MediaOpportunity";
import MediaProgress from "../components/molecules/Media/MediaProgress";
import MediaSliderContent from "../components/molecules/Media/MediaSliderContent";
import MediaStatus from "../components/molecules/Media/MediaStatus";
import MainLayouts from "../layouts/MainLayouts";

const Media = () => {
  return (
    <MainLayouts title="Альфа Медиа">
      <MediaSliderContent />

      <MediaStatus />

      <MediaOpportunity />

      <MediaGurantee />

      <MediaCards />

      <MediaProgress />

      <MediaBelive />

      <MediaContact />
    </MainLayouts>
  );
};

export default Media;
