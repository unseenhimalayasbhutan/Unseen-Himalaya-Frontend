export const siteConfig = {
  name: "Unseen Himalayas",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://unseenhimalaya.com",
  description:
    "Private Bhutan tours, cultural journeys, festival trips, and Himalayan trekking designed by Bhutan-based travel specialists.",
  locale: "en_US",
  defaultImage: "/cover2.png",
  contact: {
    email: "unseenhimalayasbhutan@gmail.com",
    emailHref: "mailto:unseenhimalayasbhutan@gmail.com",
    phoneDisplay: "+975 16168893",
    phoneHref: "tel:+97516168893",
    whatsappNumber: "97516168893",
    whatsappHref: "https://wa.me/97516168893",
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61591321688105",
    instagram: "https://www.instagram.com/unseen_himalayas_bhutan?igsh=bGxzOWZ3NmNueHdw&utm_source=qr",
    youtube: "https://www.youtube.com/channel/UCXxIqmh9xdUTcDE67XHY-rw",
    tiktok: "https://www.tiktok.com/",
  },
} as const;
