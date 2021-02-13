import Trans from "next-translate/Trans";

/* Trans Component is used for translations with HTML Tags in it */
const ShortStoryParagraph = () => {
  return (
    <p>
      <Trans
        i18nKey="aboutMeSection:shortStory.text"
        components={{
          strongTag: <strong />,
        }}
      />
    </p>
  );
};

export default ShortStoryParagraph;
