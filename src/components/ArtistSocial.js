import React from "react";
import ReactTooltip from "react-tooltip";
import { tooltipContent } from "../utils/functions";
import PropTypes from "prop-types";

function ArtistSocial({ artistData }) {
  const { social_links } = artistData;
  const urlOrigin = window.location.origin;

  const getSocialSvgs = require.context("../../public/svg", true, /\.svg$/);
  const allSocialSvgs = getSocialSvgs
    .keys()
    .map((path) => ({ path, file: getSocialSvgs(path) }));

  return (
    <>
      <ReactTooltip
        place="bottom"
        html={true}
        clickable={true}
        event="mouseover"
        eventOff="mouseout"
        offset={{ right: "100%" }}
        arrowColor="transparent"
        backgroundColor="#000"
        delayHide={300}
      />

      <div className="artist__social">
        <div className="artist__links">
          {social_links.map((socialLink) => {
            const { channel, link } = socialLink;

            const newChannel = channel.replaceAll("_", "");
            const currentSvg = allSocialSvgs.filter((item) =>
              item.path.includes(newChannel)
            );

            const svgLinkBlack = currentSvg[0].path.replace(".", "");
            const svgLinkColor = currentSvg[1].path.replace(".", "");

            return (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="artist__socialLink"
                key={channel}
              >
                <img
                  src={`/svg${svgLinkBlack}`}
                  alt={newChannel}
                  className="artist__socialImg"
                  onMouseOver={(e) => {
                    e.currentTarget.src = `${urlOrigin}/svg${svgLinkColor}`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.src = `${urlOrigin}/svg${svgLinkBlack}`;
                  }}
                />
              </a>
            );
          })}
        </div>
        <button
          className="btn btn--filled btn__add"
          data-tip={tooltipContent("info")}
        ></button>
      </div>
    </>
  );
}

ArtistSocial.propTypes = {
  artistData: PropTypes.object.isRequired,
};

export default ArtistSocial;
