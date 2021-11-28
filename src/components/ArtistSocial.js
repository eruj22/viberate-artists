import React from "react";

function ArtistSocial({ artistData }) {
  const { social_links } = artistData;
  const urlOrigin = window.location.origin;

  const reqSvgs = require.context("../../public/svg", true, /\.svg$/);
  const svgs = reqSvgs.keys().map((path) => ({ path, file: reqSvgs(path) }));

  return (
    <div className="artist__social">
      <div className="artist__links">
        {social_links.map((socialLink) => {
          const { channel, link } = socialLink;
          const newChannel = channel.replaceAll("_", "");
          const svg = svgs.filter((item) => item.path.includes(newChannel));

          const svgLinkBlack = svg[0].path.replace(".", "");
          const svgLinkColor = svg[1].path.replace(".", "");
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
      <button className="btn btn--filled btn--add"></button>
    </div>
  );
}

export default ArtistSocial;
