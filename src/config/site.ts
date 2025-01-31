export const siteConfig = {
  name: "Input's Land",
  description: 'Coleção de inputs construídos com shadcn-ui e radix-ui.',
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://inputs.sadmn.com',
  links: { github: 'https://github.com/ericmesmo/input-land' },
  keywords: [
    'input',
    'input field',
    'input component',
    'controlled input',
    'uncontrolled input',
    'input validation',
    'input mask',
    'input autocomplete',
    'input placeholder',
    'input icon',
    'input prefix',
    'input suffix',
    'input addon',
    'input button',
    'input group',
    'input size',
    'input variant',
    'input color',
    'input disabled',
    'input readonly',
    'input required',
    'input error',
    'input warning',
    'input success',
    'input info',
    'input label',
    'input helper',
    'input feedback',
    'input tooltip',
    'input popover',
    'filter',
    'nextjs',
    'react',
    'typescript',
    'shadcn-ui',
    'radix-ui',
  ],
}

export type SiteConfig = typeof siteConfig
