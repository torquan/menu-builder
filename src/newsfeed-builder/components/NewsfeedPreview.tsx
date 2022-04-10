import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { truncateString } from "../utils/truncateString";
import { NewsfeedSettings } from "./types";

const data = Array.from({ length: 24 }, () => ({
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  description:
    "Lorem ipsum dolor sit amet, nam ex ridens nemore dicunt, at nam omnis lobortis. Vel legere interesset eu, usu an eros corpora partiendo, mei ea democritum constituto. Ad eos facer eripuit argumentum, principes maiestatis ei est. Ne errem eleifend intellegam vix, eos persius omnesque lucilius id. Nulla diceret probatus ea usu. Vim at wisi veniam.  Mel altera facilis hendrerit an, cum suas agam nobis no, no sea dolorem inimicus. Ex tation insolens nam, his et sint mundi libris. Pro dolor efficiantur ei, in posse noluisse conclusionemque eos. Dolor praesent pri ad, mazim audiam labitur et pro. Dolor affert praesent eu quo, sea duis timeam debitis cu.",
}));

const useStyles = makeStyles(() => ({
  newsfeedPreview: {
    position: "sticky",
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    border: "1px solid #e0e0e0",
  },
  span: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: "0 0.4rem",
    backgroundColor: "#f5f5f5",
    border: "1px solid #e0e0e0",
    borderStyle: "none solid solid none",
    // margin: "-2rem 0 0 -2rem",
    fontSiize: "0.6rem",
  },
  previewContainer: {
    border: "1px solid #e0e0e0",
    backgroundColor: "white",
    height: "50vh",
    overflow: "auto",
    resize: "both",
  },
}));

export function NewsfeedPreview({ settings }: { settings: NewsfeedSettings }) {
  const classes = useStyles();

  useEffect(() => {
    console.log(settings.image.borderRadius);
  }, [settings.image.borderRadius]);

  return (
    <div className={classes.newsfeedPreview}>
      <span className={classes.span}>Newsfeed Preview</span>
      <div className={classes.previewContainer}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: settings.layout.justifyContent,
            width: settings.layout.width,
          }}
        >
          {data.map((post, index) => (
            <div
              key={index}
              style={{
                width: `calc(100% / ${settings.layout.columns})`,
                padding: "1rem",
                minWidth: settings.layout.minWidthPost + "px",
              }}
            >
              <h3
                style={{
                  color: settings.title.color,
                  fontSize: settings.title.fontSize + "px",
                  fontFamily: settings.title.fontFamily,
                }}
              >
                {truncateString(post.title, settings.title.maxLength)}
              </h3>
              <div
                style={{
                  height: settings.image.height,
                  width: "100%",
                  borderStyle: "solid",
                  borderWidth: settings.image.borderWidth + "px",
                  borderColor: settings.image.borderColor,
                  borderRadius: settings.image.borderRadius + "px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={"https://picsum.photos/200/300"}
                  style={{
                    // @ts-ignore
                    objectFit: settings.image.objectFit,
                    width: "100%",
                    height: "100%",
                  }}
                  alt={"random picture"}
                />
              </div>
              <p
                style={{
                  fontSize: settings.text.fontSize + "px",
                  fontFamily: settings.text.fontFamily,
                  color: settings.text.color,
                }}
              >
                {truncateString(post.description, settings.text.maxLength)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
