import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    // Top-level doc
    'intro',

    // tutorial-basics folder
    {
      type: 'category',
      label: 'Tutorial Basics',
      collapsible: true,
      collapsed: false,
      items: [
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/create-a-page',
        'tutorial-basics/markdown-features',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/congratulations',
      ],
    },

    // tutorial-extras folder
    {
      type: 'category',
      label: 'Tutorial Extras',
      collapsible: true,
      collapsed: true,
      items: [
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
      ],
    },
  ],
};

export default sidebars;