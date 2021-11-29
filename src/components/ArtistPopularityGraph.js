import { ResponsiveBar } from "@nivo/bar";
import PropTypes from "prop-types";

const ArtistPopularityGraph = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={["percentage"]}
    indexBy="city"
    margin={{ top: 0, right: 0, bottom: 0, left: 80 }}
    padding={0.5}
    layout="horizontal"
    colors={{ scheme: "red_blue" }}
    labelTextColor="#ffffff"
    enableGridY={false}
    isInteractive={false}
    role="application"
    isFocusable={true}
    ariaLabel="Most popular artist in shown cities"
  />
);

ArtistPopularityGraph.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ArtistPopularityGraph;
