import { Box, Typography, useMediaQuery } from "@mui/material";
import splash from "../../../public/images/footerBackSplash.png";

const Terms = () => {
  const isTablet = useMediaQuery("(max-width:1113px)");
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Box
        component="img"
        src={splash}
        alt="Background Splash"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          opacity: 0.7,
          width: isTablet ? "120%" : "70%", // Adjust the width as needed
          height: "auto", // Maintain aspect ratio
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "relative",
          width: isTablet ? "90%" : "70%",

          zIndex: 2, // Ensure this content is above the background image
          padding: 2,
        }}
      >
        <Box
          sx={{
            padding: !isTablet ? "50px 140px 50px 50px" : "7px",
            textAlign: "justify",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#9cf5b8", marginBottom: 2, marginTop: 3 }}
          >
            Terms Of Service
          </Typography>
          <br />
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            Welcome to wibhoo! <br /> <br /> ​These terms and conditions outline
            the rules and regulations for the use of WIBHOO's Website, located
            at https://www.wibhoo.shop. By accessing this website we assume you
            accept these terms and conditions. Do not continue to use wibhoo if
            you do not agree to take all of the terms and conditions stated on
            this page. The following terminology applies to these Terms and
            Conditions, Privacy Statement and Disclaimer Notice and all
            Agreements: "Client", "You" and "Your" refers to you, the person log
            on this website and compliant to the Company’s terms and conditions.
            "The Company", "Ourselves", "We", "Our" and "Us", refers to our
            Company. "Party", "Parties", or "Us", refers to both the Client and
            ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client’s needs in respect of
            provision of the Company’s stated services, in accordance with and
            subject to, prevailing law of Netherlands. Any use of the above
            terminology or other words in the singular, plural, capitalization
            and/or he/she or they, are taken as interchangeable and therefore as
            referring to same.
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "#9cf5b8", marginBottom: 2, marginTop: 7 }}
          >
            Cookies
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            We employ the use of cookies. By accessing wibhoo, you agreed to use
            cookies in agreement with the WIBHOO's Privacy Policy. Most
            interactive websites use cookies to let us retrieve the user’s
            details for each visit. Cookies are used by our website to enable
            the functionality of certain areas to make it easier for people
            visiting our website. Some of our affiliate/advertising partners may
            also use cookies.
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "#9cf5b8", marginBottom: 2, marginTop: 7 }}
          >
            License
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            Unless otherwise stated, WIBHOO and/or its licensors own the
            intellectual property rights for all material on wibhoo. All
            intellectual property rights are reserved. You may access this from
            wibhoo for your own personal use subjected to restrictions set in
            these terms and conditions.
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            You Must Not:
          </Typography>
          <ul
            style={{
              listStyle: "circle",
              color: "white",
              textAlign: "justify",
              lineHeight: 2,
              fontSize: "18px",
            }}
          >
            <li>Republish material from wibhoo</li>
            <li>Sell, rent or sub-license material from wibhoo</li>
            <li>Reproduce, duplicate or copy material from wibhoo</li>
            <li>Redistribute content from wibhoo</li>
          </ul>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            This Agreement shall begin on the date hereof.
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            Parts of this website offer an opportunity for users to post and
            exchange opinions and information in certain areas of the website.
            WIBHOO does not filter, edit, publish or review Comments prior to
            their presence on the website. Comments do not reflect the views and
            opinions of WIBHOO,its agents and/or affiliates. Comments reflect
            the views and opinions of the person who post their views and
            opinions. To the extent permitted by applicable laws, WIBHOO shall
            not be liable for the Comments or for any liability, damages or
            expenses caused and/or suffered as a result of any use of and/or
            posting of and/or appearance of the Comments on this website.
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            WIBHOO reserves the right to monitor all Comments and to remove any
            Comments which can be considered inappropriate, offensive or causes
            breach of these Terms and Conditions.
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            You warrant and represent that:
          </Typography>
          <ul
            style={{
              listStyle: "circle",
              color: "white",
              textAlign: "justify",
              lineHeight: 2,
              fontSize: "18px",
            }}
          >
            <li>
              You are entitled to post the Comments on our website and have all
              necessary licenses and consents to do so;
            </li>
            <li>
              The Comments do not invade any intellectual property right,
              including without limitation copyright, patent or trademark of any
              third party;
            </li>
            <li>
              The Comments do not contain any defamatory, libelous, offensive,
              indecent or otherwise unlawful material which is an invasion of
              privacy
            </li>
            <li>
              The Comments will not be used to solicit or promote business or
              custom or present commercial activities or unlawful activity.
            </li>
          </ul>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            You hereby grant WIBHOO a non-exclusive license to use, reproduce,
            edit and authorize others to use, reproduce and edit any of your
            Comments in any and all forms, formats or media.:
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "#9cf5b8", marginBottom: 2, marginTop: 7 }}
          >
            Hyperlinking to our Content
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            The following organizations may link to our Website without prior
            written approval:
          </Typography>
          <ul
            style={{
              listStyle: "circle",
              color: "white",
              textAlign: "justify",
              lineHeight: 2,
              fontSize: "18px",
            }}
          >
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>
              Online directory distributors may link to our Website in the same
              manner as they hyperlink to the Websites of other listed
              businesses; and
            </li>
            <li>
              System wide Accredited Businesses except soliciting non-profit
              organizations, charity shopping malls, and charity fundraising
              groups which may not hyperlink to our Web site.
            </li>
          </ul>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            These organizations may link to our home page, to publications or to
            other Website information so long as the link: (a) is not in any way
            deceptive; (b) does not falsely imply sponsorship, endorsement or
            approval of the linking party and its products and/or services; and
            (c) fits within the context of the linking party’s site.
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            We may consider and approve other link requests from the following
            types of organizations:
          </Typography>
          <ul
            style={{
              listStyle: "circle",
              color: "white",
              textAlign: "justify",
              lineHeight: 2,
              fontSize: "18px",
            }}
          >
            <li>
              commonly-known consumer and/or business information sources;
            </li>
            <li>dot.com community sites;</li>
            <li>associations or other groups representing charities;</li>
            <li>online directory distributors;</li>
            <li>internet portals;</li>
            <li>accounting, law and consulting firms; and</li>
            <li>educational institutions and trade associations.</li>
          </ul>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            We will approve link requests from these organizations if we decide
            that: (a) the link would not make us look unfavorably to ourselves
            or to our accredited businesses; (b) the organization does not have
            any negative records with us; (c) the benefit to us from the
            visibility of the hyperlink compensates the absence of WIBHOO; and
            (d) the link is in the context of general resource information.
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            These organizations may link to our home page so long as the link:
            (a) is not in any way deceptive; (b) does not falsely imply
            sponsorship, endorsement or approval of the linking party and its
            products or services; and (c) fits within the context of the linking
            party’s site.
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            If you are one of the organizations listed in paragraph 2 above and
            are interested in linking to our website, you must inform us by
            sending an e-mail to WIBHOO. Please include your name, your
            organization name, contact information as well as the URL of your
            site, a list of any URLs from which you intend to link to our
            Website, and a list of the URLs on our site to which you would like
            to link. Wait 2-3 weeks for a response.
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            Approved organizations may hyperlink to our Website as follows:
          </Typography>
          <ul
            style={{
              listStyle: "circle",
              color: "white",
              textAlign: "justify",
              lineHeight: 2,
              fontSize: "18px",
            }}
          >
            <li>By use of our corporate name; or</li>
            <li>By use of the uniform resource locator being linked to; or</li>
            <li>
              By use of any other description of our Website being linked to
              that makes sense within the context and format of content on the
              linking party’s site.
            </li>
          </ul>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            No use of WIBHOO's logo or other artwork will be allowed for linking
            absent a trademark license agreement.
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "#9cf5b8", marginBottom: 2, marginTop: 7 }}
          >
            iFrames
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            Without prior approval and written permission, you may not create
            frames around our Webpages that alter in any way the visual
            presentation or appearance of our Website.
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "#9cf5b8", marginBottom: 2, marginTop: 7 }}
          >
            Content Liability
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            We shall not be hold responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that is rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene or criminal, or
            which infringes, otherwise violates, or advocates the infringement
            or other violation of, any third party rights.
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "#9cf5b8", marginBottom: 2, marginTop: 7 }}
          >
            Your Privacy
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            Please read Privacy Policy
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "#9cf5b8", marginBottom: 2, marginTop: 7 }}
          >
            Reservation of Rights
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            We reserve the right to request that you remove all links or any
            particular link to our Website. You approve to immediately remove
            all links to our Website upon request. We also reserve the right to
            amen these terms and conditions and it’s linking policy at any time.
            By continuously linking to our Website, you agree to be bound to and
            follow these linking terms and conditions.
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "#9cf5b8", marginBottom: 2, marginTop: 7 }}
          >
            Removal of links from our website
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            If you find any link on our Website that is offensive for any
            reason, you are free to contact and inform us any moment. We will
            consider requests to remove links but we are not obligated to or so
            or to respond to you directly.
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            We do not ensure that the information on this website is correct, we
            do not warrant its completeness or accuracy; nor do we promise to
            ensure that the website remains available or that the material on
            the website is kept up to date.
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "#9cf5b8", marginBottom: 2, marginTop: 7 }}
          >
            Disclaimer
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            To the maximum extent permitted by applicable law, we exclude all
            representations, warranties and conditions relating to our website
            and the use of this website. Nothing in this disclaimer will:
          </Typography>
          <ul
            style={{
              listStyle: "circle",
              color: "white",
              textAlign: "justify",
              lineHeight: 2,
              fontSize: "18px",
            }}
          >
            <li>
              limit or exclude our or your liability for death or personal
              injury;
            </li>
            <li>
              limit or exclude our or your liability for fraud or fraudulent
              misrepresentation;
            </li>
            <li>
              limit any of our or your liabilities in any way that is not
              permitted under applicable law; or
            </li>
            <li>
              exclude any of our or your liabilities that may not be excluded
              under applicable law.
            </li>
          </ul>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            The limitations and prohibitions of liability set in this Section
            and elsewhere in this disclaimer: (a) are subject to the preceding
            paragraph; and (b) govern all liabilities arising under the
            disclaimer, including liabilities arising in contract, in tort and
            for breach of statutory duty.
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            As long as the website and the information and services on the
            website are provided free of charge, we will not be liable for any
            loss or damage of any nature.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Terms;
