import { defineArrayMember, defineField, defineType } from 'sanity'

export const profileType = defineType({
  name: 'profile',
  title: 'Profile / About',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      description: 'e.g., "Software Engineer"',
    }),
    defineField({
      name: 'focus',
      title: 'Focus / Sub-bio',
      type: 'string',
      description: 'e.g., "Mobile • Web • Backend"',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        }),
      ],
    }),
    defineField({
      name: 'headline',
      title: 'Hero Heading',
      type: 'string',
      description: 'e.g., "SOFTWARE ENGINEER"',
    }),
    defineField({
      name: 'bio',
      title: 'Summary / Bio Paragraph',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'stats',
      title: 'Stats / Key Metrics',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'statItem',
          title: 'Stat Item',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'e.g., "+2", "1K+", "+5"',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g., "YEARS OF EXPERIENCE"',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'heroChips',
      title: 'Hero Technology Chips',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social & Contact Links',
      type: 'object',
      fields: [
        defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
        defineField({ name: 'github', title: 'GitHub URL', type: 'url' }),
        defineField({ name: 'whatsapp', title: 'WhatsApp URL / Phone Link', type: 'url' }),
        defineField({ name: 'email', title: 'Email Address', type: 'string' }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'profileImage',
    },
  },
})
