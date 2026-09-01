export const MOCK_CERTIFICATES = [
  {
    id: 'KP-2026-004829',
    title: 'CERTIFICATE OF MASTERY',
    subtitle: 'This is proudly presented to',
    recipientName: 'Amina Babatunde',
    recipientEmail: 'amina@techflow.io',
    achievement: 'for demonstrating extraordinary technical leadership & mastering Advanced Full-Stack Architecture.',
    date: 'September 1, 2026',
    issuerName: 'Tunde Olatunji',
    issuerTitle: 'Director of Learning',
    orgName: 'Lagos Tech Academy',
    badge: 'Gold Distinction',
    borderStyle: 'cert-border-gold',
    themeColor: '#00a878',
    bgColor: '#ffffff',
    titleFont: 'Playfair Display',
    signatureFont: 'Great Vibes',
    status: 'Verified',
    verifiedAt: '2026-09-01T12:00:00Z'
  },
  {
    id: 'KP-2026-009142',
    title: 'EXCELLENCE IN LEADERSHIP',
    subtitle: 'Is hereby conferred upon',
    recipientName: 'Chidi Chukwuma',
    recipientEmail: 'chidi@pan-africa.org',
    achievement: 'in recognition of outstanding strategic innovation and leading high-impact software engineering teams.',
    date: 'August 28, 2026',
    issuerName: 'Folake Adeyemi',
    issuerTitle: 'Chief Executive Officer',
    orgName: 'Pan-African Tech Summit',
    badge: 'Executive Honor',
    borderStyle: 'cert-border-royal',
    themeColor: '#0f766e',
    bgColor: '#ffffff',
    titleFont: 'Cinzel',
    signatureFont: 'Pinyon Script',
    status: 'Verified',
    verifiedAt: '2026-08-28T14:30:00Z'
  }
];

export const MOCK_TEMPLATES = [
  {
    id: 'tpl-1',
    name: 'Academic Excellence',
    category: 'Course',
    description: 'Sleek luxury layout designed for bootcamps, masterclasses, and university programs.',
    badge: 'Most Popular',
    borderStyle: 'cert-border-gold',
    themeColor: '#00a878',
    bgColor: '#ffffff',
    titleFont: 'Playfair Display',
    signatureFont: 'Great Vibes',
    defaultData: {
      title: 'CERTIFICATE OF COMPLETION',
      subtitle: 'This is proudly presented to',
      recipientName: 'Aisha Bello',
      achievement: 'for successfully graduating from the 12-week Intensive Software Architecture Fellowship.',
      date: 'September 1, 2026',
      issuerName: 'Dr. Kalu Ndukwe',
      issuerTitle: 'Program Chair',
      orgName: 'Kpalee Learning Institute'
    }
  },
  {
    id: 'tpl-2',
    name: 'Executive Leadership Award',
    category: 'Award',
    description: 'Royal regal border designed for honors, corporate leadership awards, and keynotes.',
    badge: 'Executive',
    borderStyle: 'cert-border-royal',
    themeColor: '#0f766e',
    bgColor: '#f8faf9',
    titleFont: 'Cinzel',
    signatureFont: 'Pinyon Script',
    defaultData: {
      title: 'AWARD OF EXCELLENCE',
      subtitle: 'Is hereby proudly conferred upon',
      recipientName: 'Kwame Mensah',
      achievement: 'for visionary executive leadership and setting benchmarks of operational mastery.',
      date: 'August 20, 2026',
      issuerName: 'Zainab Danjuma',
      issuerTitle: 'Managing Director',
      orgName: 'West African Enterprise Network'
    }
  },
  {
    id: 'tpl-3',
    name: 'Cyber Tech & AI Innovation',
    category: 'Course',
    description: 'Modern tech aesthetic built for hackathons, AI workshops, and developer conferences.',
    badge: 'Tech Special',
    borderStyle: 'cert-border-minimal',
    themeColor: '#34d399',
    bgColor: '#ffffff',
    titleFont: 'Outfit',
    signatureFont: 'Dancing Script',
    defaultData: {
      title: 'CERTIFICATE OF MASTERY',
      subtitle: 'Recognizing the technical skill of',
      recipientName: 'Emmanuel Okafor',
      achievement: 'for building winning autonomous AI systems at the Global Developers Summit 2026.',
      date: 'August 15, 2026',
      issuerName: 'Victor Adeleke',
      issuerTitle: 'Lead Architect',
      orgName: 'Kpalee AI Lab'
    }
  }
];

export const MOCK_EVENTS = [
  {
    id: 'evt-lagos-tech-week',
    name: 'Lagos Tech Week 2026',
    organizer: 'Lagos Innovation Ecosystem',
    date: 'August 24–28, 2026',
    location: 'Landmark Event Centre, Victoria Island, Lagos',
    attendeesCount: 4250,
    coverColor: 'linear-gradient(135deg, #061a16 0%, #00a878 100%)',
    badgeType: 'VIP Attendee',
    badgeTitle: 'OFFICIAL DELEGATE',
    description: 'The largest gathering of tech founders, developers, investors, and digital leaders in West Africa.'
  },
  {
    id: 'evt-creative-summit',
    name: 'Creative Industry Summit',
    organizer: 'Design Collective Africa',
    date: 'September 12, 2026',
    location: 'Eko Hotel & Suites, Lagos',
    attendeesCount: 1890,
    coverColor: 'linear-gradient(135deg, #0f766e 0%, #34d399 100%)',
    badgeType: 'Creative Leader',
    badgeTitle: 'PROUD CREATIVE',
    description: 'Uniting top UX designers, brand architects, film directors, and visual creators.'
  },
  {
    id: 'evt-founder-night',
    name: 'Startup Founder Night',
    organizer: 'Venture Africa Network',
    date: 'October 5, 2026',
    location: 'Ikoyi Club, Lagos',
    attendeesCount: 820,
    coverColor: 'linear-gradient(135deg, #1b2b4e 0%, #3359df 100%)',
    badgeType: 'Founder Ticket',
    badgeTitle: 'FOUNDER & BUILDER',
    description: 'Exclusive networking for high-growth venture-backed founders and angel investors.'
  }
];

export const MOCK_ISSUER_PROJECTS = [
  {
    id: 'prj-1',
    name: 'Software Engineering Batch 8',
    recipientsCount: 145,
    issuedCount: 145,
    downloadedCount: 128,
    verifiedCount: 94,
    status: 'Active',
    date: '2026-08-15'
  },
  {
    id: 'prj-2',
    name: 'Lagos Tech Week Attendance Certificates',
    recipientsCount: 850,
    issuedCount: 850,
    downloadedCount: 790,
    verifiedCount: 610,
    status: 'Active',
    date: '2026-08-28'
  }
];

export const MOCK_EMAILS = [
  {
    id: 'email-1',
    certId: 'KP-2026-004829',
    toEmail: 'amina@techflow.io',
    recipientName: 'Amina Babatunde',
    orgName: 'Lagos Tech Academy',
    subject: 'Your Certificate for Software Architecture Fellowship is Ready! 🎉',
    date: '10 minutes ago',
    read: false
  },
  {
    id: 'email-2',
    certId: 'KP-2026-009142',
    toEmail: 'chidi@pan-africa.org',
    recipientName: 'Chidi Chukwuma',
    orgName: 'Pan-African Tech Summit',
    subject: 'Your Certificate of Excellence in Leadership is Ready! 🎉',
    date: '2 hours ago',
    read: true
  }
];
