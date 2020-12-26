import { GiFilmProjector as icon } from 'react-icons/gi';
import CharactersLeft from '../components/CharactersLeft';

export default {
  // Computer Name
  name: 'project',
  // visible title
  title: 'Projects',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      description: "Name of the project [This field's data will appear on: the works page, the individual project page]",
      validation: Rule => Rule.required().error('A project name is required'),
    },
    {
      name: 'subtitle',
      title: 'Project Subtitle',
      type: 'string',
      description: "Supplemental project details [This field's data will appear on: the works page, the individual project page]",
      validation: Rule => Rule.required().error('A project subtitle is required'),
    },
    {
      name: 'coverPhoto',
      title: 'Cover Photo',
      type: 'picture',
      validation: Rule => Rule.required().error('A cover photo is required'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: "A single paragraph description of your project. 550 characters or less required",
      validation: Rule => Rule.max(550).error('A description of less than 550 characters is required'),
      // inputComponent: CharactersLeft,
    },
    {
      name: 'slug',
      title: 'URL endpoint',
      description: "A URL endpoint must follow these guidlines: all lowercased letters; separate words may only be separated by a dash [-]. It is recommended to use the generate button intead of configuring this manually.",
      type: 'slug',
      validation: Rule => Rule.required().error('A URL endpoint is required'),
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'videoURL',
      title: 'Video Link from Youtube or Vimeo',
      type: 'video',
    },
    {
      name: 'image_Gallery',
      title: 'Image Gallery',
      description: "The add button will open a utility to added images to your image gallery. Image order may be rearranged.",
      type: 'array',
      of: [{ type: 'picture'
      }]
    },
  ],
};
