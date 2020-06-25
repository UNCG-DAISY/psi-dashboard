module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Coastal Image Labeler',
      items: [
        'indexDoc',
        'code_of_conduct',
        'contactUsDoc',
      ],
    },
    {
      type: 'category',
      label: 'Code Documentation',
      items: [
        "code_documentation/codeDocOverview",
        "code_documentation/packages",
        "code_documentation/project_structure",
        "code_documentation/auth0",
        "code_documentation/database",
        {
          type: 'category',
          label: 'CLI',
          items: [
            "code_documentation/cli",
            "code_documentation/adding_images",
          ],
        },
        
        "code_documentation/deployment",
        "code_documentation/data_exporting",
        "code_documentation/maintenance",
        {
          type: 'category',
          label: 'Extending',
          items: [
            "code_documentation/extensions/form/new_images",
            "code_documentation/extensions/form/adding_new_question_set",
          ],
        },
        "code_documentation/tools",
        {
          type: 'category',
          label: 'Full VM Deployment',
          items: [
            "code_documentation/full_deployment/overview",
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'User Documentation',
      items: [
        "user_documentation/userDocOverview",
        "user_documentation/imageTaggingProcess",
        "user_documentation/data_sources"
      ],
    },
    {
      type: 'category',
      label: 'Question Sets',
      items: [
        "question_sets/questionSetDocOverview",
        "question_sets/duneQuestionSet",
        "question_sets/stormQuestionSet",
      ],
    },
    {
      type: 'category',
      label: 'Other',
      items: [
        "other/styleGuide",
        "other/mdx"
      ],
    },
    {
      type: 'category',
      label: 'Docing the Docs',
      items: [
        "docing_the_docs/indexId",
      ],
    }
  ],
  v3Plan:[
    {
      type: 'category',
      label: 'V3 Plan',
      items: [
        //Path to the file relative from Coastal-Image-Labeler/doc/docs/ 
        //With the filename being replace with the ID 
        "v3_plan/overview",
        "v3_plan/TypeScript",
        "v3_plan/Frontend",
        
      ],
    }
  ]
  // "3rdLabel": [
  //   {
  //     type: 'category',
  //     label: 'Test',
  //     items: [
  //       'announcements/index',
  //     ],
  //   }, 
  // ],
};
