import { GiFilmProjector as icon } from 'react-icons/gi';

export default {
  // Computer Name
  name: 'about',
  // visible title
  title: 'About',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Creator Name',
      type: 'string',
      description: 'Name of the project',
    },
    {
      name: 'aboutData',
      title: 'About Page Data',
      type: 'array',
      of: [{ type: 'aboutPicture'
      }]
    },
  ],
};
