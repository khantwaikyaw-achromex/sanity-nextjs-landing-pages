export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec28daf11ca3787b0ed9f3b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1fxfhn7o',
                  apiId: 'b2e72486-2928-48e9-9362-83d3a4946d96'
                },
                {
                  buildHookId: '5ec28db03c9701e2b3cf7cc3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xuzfme4k',
                  apiId: 'cae2490d-3813-42a9-830a-62dddf8c11a5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/khantwaikyaw-achromex/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xuzfme4k.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
