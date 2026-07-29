export const upcomingEvents = [
  {
    slug: "guns-n-roses-guwahati-2026",
    label: "Upcoming Event",
    title: "Guns N' Roses Concert at Guwahati",
    subtitle: "Bhutan to Guns N' Roses Concert - Ultimate Rock Escape",
    date: "17 November 2026",
    location: "Guwahati, Assam, India",
    duration: "5 Days / 4 Nights",
    price: "Starting at Nu. 26,000",
    priceNote: "per person",
    brochureImage: "/guns-n-roses-concert-tour-brochure.png",
    itineraryImage: "/guns-n-roses-concert-itinerary.png",
    highlights: [
      "Travel with fellow Bhutanese rock fans",
      "Brahmaputra Sunset Cruise",
      "Kamakhya Temple visit",
      "Enjoy Brahmaputra Ropeway (ticket at own cost)",
      "Guns N' Roses live concert ticket included",
    ],
    inclusions: [
      "Accommodation during the entire tour: 2 nights in Phuentsholing and 2 nights in Guwahati",
      "Daily breakfast during Guwahati stay only",
      "Train tickets both ways",
      "Transportation for the entire tour",
      "Evening Sunset Cruise on the Brahmaputra River",
      "Guns N' Roses concert ticket",
      "Tour coordination by Unseen Himalayas Bhutan",
    ],
    exclusions: [
      "Flight tickets, available on request",
      "Lunch and dinner",
      "Personal expenses",
      "Travel insurance",
      "Additional sightseeing not mentioned",
      "Anything not listed under inclusions",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Travel to Phuentsholing",
        activities: [
          "Group arrival and hotel check-in",
          "Pre-tour briefing",
          "Overnight stay in Phuentsholing",
        ],
      },
      {
        day: "Day 2",
        title: "Transfer to Guwahati",
        activities: [
          "Travel onward to Guwahati by train",
          "Meet and greet, then hotel check-in",
          "Evening Brahmaputra Sunset Cruise",
          "Overnight stay in Guwahati",
        ],
      },
      {
        day: "Day 3",
        title: "Kamakhya Temple, Ropeway and Concert Night",
        activities: [
          "Breakfast at hotel",
          "Visit Kamakhya Temple",
          "Enjoy Brahmaputra Ropeway (ticket at own cost)",
          "Attend Guns N' Roses Live Concert",
          "Overnight stay in Guwahati",
        ],
      },
      {
        day: "Day 4",
        title: "Return to Phuentsholing",
        activities: [
          "Breakfast and check-out",
          "Return journey by train",
          "Hotel check-in in Phuentsholing",
          "Overnight stay in Phuentsholing",
        ],
      },
      {
        day: "Day 5",
        title: "Return to Thimphu",
        activities: [
          "Breakfast and check-out",
          "Transfer from Phuentsholing to Thimphu",
          "Tour concludes in Thimphu",
        ],
      },
    ],
  },
] as const;

export const featuredUpcomingEvent = upcomingEvents[0];
