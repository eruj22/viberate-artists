// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from "@nivo/bar";
import PropTypes from "prop-types";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBar = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={["percentage"]}
    indexBy="city"
    margin={{ top: 0, right: 0, bottom: 0, left: 80 }}
    padding={0.5}
    layout="horizontal"
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "red_blue" }}
    labelTextColor="#ffffff"
    enableGridY={false}
    isInteractive={false}
    role="application"
    isFocusable={true}
    ariaLabel="Most popular artist in shown cities"
  />
);

MyResponsiveBar.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MyResponsiveBar;
