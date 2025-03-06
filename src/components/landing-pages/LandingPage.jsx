import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router";
import { useContaxt } from "../../context/Context";
import { KrollVoicemessageTestimonial } from "./funnel-components/KrollVoicemessageTestimonial";
import { LandingPageBenefits } from "./funnel-components/LandingPageBenefits";
import { LandingPageChatPreview } from "./funnel-components/LandingPageChatPreview";
import { LandingPageCTAButton } from "./funnel-components/LandingPageCTAButton";
import { LandingPageHeading } from "./funnel-components/LandingPageHeading";
import { LandingPageImage } from "./funnel-components/LandingPageImage";
import { LandingPageText } from "./funnel-components/LandingPageText";
import { LandingPageWhatsAppAudio } from "./funnel-components/LandingPageWhatsAppAudio";
import { ProjectPlanerContactPerson } from "./funnel-components/projectplaner/contact-form/ProjectPlanerContactPerson";
import { LandingPageProjectPlaner } from "./funnel-components/projectplaner/LandingPageProjectPlaner";
import { LandingPageWrapper } from "./LandingPageWrapper";

export function LandingPage({ content }) {
  const { cookies } = useContaxt();
  const location = useLocation();

  useEffect(() => {
    if (cookies) {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search,
        title: "Landing Page Pageview",
      });
    }
  }, [location]);

  return (
    <LandingPageWrapper spacing={"25px"}>
      {content?.map((contentBlock, i) => {
        switch (contentBlock.type) {
          case "image":
            return <LandingPageImage key={i} {...contentBlock} />;
          case "header":
            return (
              <LandingPageHeading
                key={i}
                text={contentBlock?.text}
                {...contentBlock}
              />
            );
          case "text":
            return (
              <LandingPageText
                key={i}
                text={contentBlock?.text}
                {...contentBlock}
              />
            );

          case "projectplaner":
            return <LandingPageProjectPlaner key={i} {...contentBlock} />;

          case "contactPerson":
            return <ProjectPlanerContactPerson key={i} {...contentBlock} />;

          case "krollTestimonial":
            return <KrollVoicemessageTestimonial key={i} {...contentBlock} />;

          case "callToAction":
            return <LandingPageCTAButton key={i} {...contentBlock} />;

          case "benefits":
            return (
              <LandingPageBenefits
                key={i}
                title={contentBlock?.title}
                benefits={contentBlock?.benefits}
                {...contentBlock}
              />
            );

          case "chatPreview":
            return (
              <LandingPageChatPreview
                key={i}
                title={contentBlock?.title}
                src={contentBlock?.src}
                {...contentBlock}
              />
            );

          case "whatsAppAudio":
            return (
              <LandingPageWhatsAppAudio
                key={i}
                title={contentBlock?.title}
                image={contentBlock?.image}
                audio={contentBlock?.audio}
                audioType={contentBlock?.audioType}
                {...contentBlock}
              />
            );
        }
      })}
    </LandingPageWrapper>
  );
}
