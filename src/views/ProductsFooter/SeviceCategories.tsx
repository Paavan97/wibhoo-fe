import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const categories = [
  {
    title: "Wellbeing & Care",
    subtitle: "Holistic health & Ayurveda",
    path: "/use/wellbeing-care",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/2788ebc7-3951-4f83-a449-a764ff376637.png",
  },
  {
    title: "Eco-Tourism",
    subtitle: "Agro, Forest, and Adventure",
    path: "/use/eco-tourism",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/eea039dd-df9c-42a1-9aa0-deb3a5429c9e.jpeg",
  },
  {
    title: "Waste Management",
    subtitle: "Collection, Recycling, & Management",
    path: "/use/waste-management",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/6c82a1fe-2502-4ff7-a9fb-606853cda517.jpeg",
  },
  {
    title: "Home & Garden",
    subtitle: "Maintainance, Housekeeping, & Fixing",
    path: "/use/home-garden",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/7c9fc849-0eb6-4c73-a8a5-7412732a4eb9.jpeg",
  },
  {
    title: "Event Planning",
    subtitle: "Weddings, Corporates, & Shows",
    path: "/use/event-planning",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/0f92adaf-987d-4769-9d5b-316692b2e55f.jpeg",
  },
  {
    title: "Building & Architecture",
    subtitle: "Architecture, Interior, and Solutions",
    path: "/use/building-architecture",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/8a4e6007-d04f-422c-8167-3dac007d56a0.jpeg",
  },
  {
    title: "Transport & Logistic",
    subtitle: "Traveling, Shipping & more",
    path: "/use/transport-logistic",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/fb10fd53-7ea2-4186-80f0-681c0a640a6d.jpeg",
  },
  {
    title: "Green Energy & Audits",
    subtitle: "Energy saving, Certificates & Auditing",
    path: "/use/green-energy-audits",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/ffa65d48-1064-4068-b2da-9c20fd5ccdf6.jpeg",
  },
];

const ServiceCategories = () => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-around">
      {categories.map((category, index) => (
        <Box
          key={index}
          sx={{
            width: 400,
            height: 600,
            margin: 2,
            position: "relative",
            backgroundImage: 'url("../../../public/Cards/redCard.png")', // replace with your static image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Card
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              background: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              height="290"
              sx={{ width: "80%", marginTop: 10 }}
              image={category.image}
              alt={category.title}
            />

            <CardContent
              sx={{
                textAlign: "center",
                width: "100%",
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                color="#111917"
                sx={{ marginBottom: 1, marginTop: "100%" }}
              >
                {category.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="white"
                sx={{ marginBottom: 2 }}
              >
                {category.subtitle}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#111917",
                  color: "#9cf5b8",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#111917",
                  },
                }}
                href={category.path} // Optional: Add link to the button
              >
                Access It
              </Button>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default ServiceCategories;
