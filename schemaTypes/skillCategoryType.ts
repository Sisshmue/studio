import { defineArrayMember, defineField, defineType } from 'sanity'

export const skillCategoryType = defineType({
  name: 'skillCategory',
  title: 'Skill Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'skills',
      title: 'Skills List',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'skillItem',
          title: 'Skill Item',
          fields: [
            defineField({
              name: 'name',
              title: 'Skill Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'isPrimary',
              title: 'Primary / Highlighted',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'isPrimary',
            },
            prepare({ title, subtitle }) {
              return {
                title,
                subtitle: subtitle ? '★ Primary' : 'Secondary',
              }
            },
          },
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      skills: 'skills',
    },
    prepare({ title, skills = [] }) {
      return {
        title,
        subtitle: `${skills.length} skills`,
      }
    },
  },
})
