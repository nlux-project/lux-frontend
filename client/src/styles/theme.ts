const weight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
}

const font = {
  weight,
  size: {
    normal: '1em',
  },
  desktop: {
    h1: {
      weight: weight.extraLight,
      size: '3.1em',
      lineHeight: '72px',
    },
    h2: {
      weight: weight.extraLight,
      size: '2rem',
      lineHeight: '56px',
    },
    h3: {
      weight: weight.light,
      size: '1.5em',
      lineHeight: '40px',
    },
    h4: {
      weight: weight.bold,
      size: '24px',
      lineHeight: '32px',
    },
    h5: {
      weight: weight.medium,
      size: '24px',
      lineHeight: '32px',
    },
    h6: {
      weight: weight.bold,
      size: '20px',
      lineHeight: '24px',
    },
    bodyRegular: {
      weight: weight.regular,
      size: '16px',
      lineHeight: '24px',
    },
    bodyLight: {
      weight: weight.light,
      size: '16px',
      lineHeight: '24px',
    },
    tabNavigation: {
      weight: weight.bold,
      size: '16px',
      lineHeight: '24px',
    },
  },
  mobile: {
    h1: {
      weight: weight.extraLight,
      size: '40px',
      lineHeight: '48px',
    },
    h2: {
      weight: weight.extraLight,
      size: '1.5em',
      lineHeight: '40px',
    },
    h3: {
      weight: weight.extraLight,
      size: '1.25em',
      lineHeight: '30px',
    },
    h4: {
      weight: weight.medium,
      size: '18px',
      lineHeight: '26px',
    },
    h5: {
      weight: weight.bold,
      size: '16px',
      lineHeight: '24px',
    },
    bodyRegular: {
      weight: weight.regular,
      size: '16px',
      lineHeight: '24px',
    },
    bodyLight: {
      weight: weight.light,
      size: '16px',
      lineHeight: '24px',
    },
  },
}

const color = {
  // Neutral, minimal palette inspired by simple white/grey designs
  black: '#111111',
  black65: 'rgba(17,17,17,0.65)',
  gray90: '#222222',
  gray70: '#666666',
  gray50: '#999999',
  lightGray: '#E9E9EB',
  offWhite: '#FFFFFF',
  offPanel: '#FAFAFB',
  borderShadow: '#E6E6E6',
  link: '#2B6CB0',
  button: '#6B6B6B',

  white: '#FFFFFF',

  // Muted accents for optional components
  primary: {
    blue: '#2B6CB0',
    darkBlue: '#1E4E7A',
    teal: '#6BA3B8',
  },

  graphs: {
    itemProductionDate: { focused: '#7A3F5C', unFocused: 'rgba(122, 63, 92, 0.15)' },
    itemEncounteredDate: { focused: '#5A2B7A', unFocused: 'rgba(90, 43, 122, 0.12)' },
    itemIncludedDate: { focused: '#2E5A9A', unFocused: 'rgba(46, 90, 154, 0.12)' },
    workPublicationDate: { focused: '#8D6E63', unFocused: 'rgba(141, 110, 99, 0.12)' },
    workCreationDate: { focused: '#2E7D32', unFocused: 'rgba(46, 125, 50, 0.12)' },
    workGeneratedBy: { focused: '#00838F', unFocused: 'rgba(0, 131, 143, 0.12)' },
    workCreationOrPublicationDate: { focused: '#000000', unFocused: 'rgba(0, 0, 0, 0.08)' },
    setAboutDate: { focused: '#2D60B4', unFocused: 'rgba(45, 96, 180, 0.12)' },
    setCausedByDate: { focused: '#283593', unFocused: 'rgba(40, 53, 147, 0.12)' },
    setCreationDate: { focused: '#700370', unFocused: 'rgba(112, 3, 112, 0.12)' },
    setPublicationDate: { focused: '#6e6e6e', unFocused: 'rgba(110, 110, 110, 0.08)' },
  },

  advancedSearch: { addRowText: '#8A8A8A' },
}

const spacing = {
  // Left-most and right-most gutter for sections
  sectionAbsMarginX: '12px',

  // To offset the default Bootstrap container/col padding of 12px
  cancelDefaultPadding: '-12px',

  // Absolute distance from the left edge of the window,
  // of the location where typical text of the outermost section begins
  // contentAbsMarginX: '40px',
  contentAbsMarginX: '37px',

  // Vertical gap between sections
  sectionGap: '16px',
  landingPageSectionGap: '24px',

  // Horizontal padding of section inside container
  // = contentAbsMarginX + cancelDefaultPadding
  // = 40px - 12px = 28px
  // sectionPaddingX: '28px',
  sectionPaddingX: '25px',
  tabPaddingX: '10px',

  // Spacing between line items
  verticalItemSingleSpacing: '0.5rem',
  verticalItemDoubleSpacing: '1rem',
}

const breakpoints = {
  xs: 576,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
}

const border = {
  radius: '8px',
}

const colWidths = {
  keyClass: 'col-12 col-sm-4 col-md-12 col-lg-4 col-xl-3',
  valueClass: 'col-12 col-sm-8 col-md-12 col-lg-8 col-xl-9',
}

const theme = {
  color,
  font,
  spacing,
  border,
  breakpoints,
  colWidths,

  searchBox: {
    width: '816px',
    borderRadius: '24px',
    borderRadiusMobile: '16px',
  },

  landingPage: {
    sectionPaddingTop: '37px',
    heroImageSection: {
      minHeight: '440px',
    },
  },

  contentPage: {
    headerGap: '32px', // gap between title (h1) and body
    footerGap: '64px', // gap between body and footer

    h2: {
      fontSize: '3em',
      fontWeight: font.weight.extraLight,
      letterSpacing: 0,
      lineHeight: '56px',
      color: color.black,
      marginBottom: '15px',
    },
    ul: {
      paddingLeft: '32px',
    },
  },

  faqPage: {
    h1: {
      paddingY: '33px',
    },
    h2: {
      paddingY: '1rem',
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.5em',
      fontWeight: font.weight.bold,
      lineHeight: '80px',
    },
    // Distance between accordions column and the sidebar
    columnsGap: '24px',
  },
}

export default theme
