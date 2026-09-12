import { defineField, defineType } from 'sanity'

export const educationType = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'degree',
      title: 'Degree',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'institution',
      title: 'Institution / University',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'honors',
      title: 'Honors / Distinction',
      type: 'string',
      description: 'e.g., "First Class Honors"',
    }),
    defineField({
      name: 'gpa',
      title: 'GPA',
      type: 'string',
      description: 'e.g., "3.94"',
    }),
    defineField({
      name: 'period',
      title: 'Period / Graduation Year',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'degree',
      subtitle: 'institution',
    },
  },
})
