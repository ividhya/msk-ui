import propertyTypes from 'msk-property-types';
import themes from 'msk-themes';

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.dark.shadowPurple,
    required: true
  },
  headlineText: {
    name: 'Headline text',
    type: propertyTypes.STRING,
    value: 'About Me',
    required: true
  },
  paragraphs: {
    name: 'Paragraph',
    type: propertyTypes.ARRAY,
    value: [
      {
        name: 'Paragraph text',
        type: propertyTypes.STRING_MULTI_LINE,
        value:
          'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        required: true
      }
    ],
    required: true
  }
};

export default properties;
