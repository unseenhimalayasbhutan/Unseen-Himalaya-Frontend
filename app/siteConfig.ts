export const siteConfig = {
  name: "Unseen Himalayas Bhutan",
  alternateName: "Unseen Himalayas ",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.theunseenhimalayas.com",
  description:
    "Unseen Himalayas is a licensed Bhutan-based destination management company offering private Bhutan tours, cultural journeys, festival tours, hotel reservations, guides, transportation, and tailor-made travel experiences.",
  locale: "en_US",
  defaultImage: "/cover/background-optimized.jpg",
  address: {
    streetAddress: "Theengh's Apartments, Babesa",
    addressLocality: "Thimphu",
    addressCountry: "BT",
  },
  contact: {
    email: "unseenhimalayasbhutan@gmail.com",
    emailHref: "mailto:unseenhimalayasbhutan@gmail.com",
    phoneDisplay: "+975 16168893",
    phoneDisplayAll: "+975 16168893 / +975 16192762",
    phoneHref: "tel:+97516168893",
    secondaryPhoneDisplay: "+975 16192762",
    secondaryPhoneHref: "tel:+97516192762",
    whatsappNumber: "97516168893",
    whatsappHref: "https://wa.me/97516168893",
    secondaryWhatsappHref: "https://wa.me/97516192762",
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61591321688105",
    instagram: "https://www.instagram.com/unseen_himalayas_bhutan?igsh=bGxzOWZ3NmNueHdw&utm_source=qr",
    youtube: "https://www.youtube.com/channel/UCXxIqmh9xdUTcDE67XHY-rw",
    tiktok: "https://www.tiktok.com/@unseen.himalayas.bhutan?is_from_webapp=1&sender_device=pc",
  },
} as const;
