import { defineArrayMember, defineField, defineType } from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Job Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isCurrent',
      title: 'Current Role',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'period',
      title: 'Period / Dates',
      type: 'string',
      description: 'e.g., "Feb 2025 – Present"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location / Work Mode',
      type: 'string',
      description: 'e.g., "Remote", "Hybrid", "Freelance"',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies / Tags',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'responsibilities',
      title: 'Responsibilities / Key Achievements',
      type: 'array',
      of: [defineArrayMember({ type: 'text', rows: 2 })],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
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
      title: 'role',
      subtitle: 'company',
    },
  },
})
