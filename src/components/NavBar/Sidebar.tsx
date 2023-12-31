import { Link, NavLink, useLoaderData } from 'react-router-dom';
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListSubheader,
} from '@mui/material';
import { baseUrl, buildUrl } from '../../utils/buildUrl';

const Sidebar = () => {
  const data = useLoaderData() as IData;

  return (
    <Box sx={{ width: '300px', flexShrink: 0 }}>
      <Link to="/">
        <img
          src="https://fontmeme.com/permalink/231222/961e93a132f502836d150739ef93c39f.png"
          alt="logo"
          style={{ padding: '1rem 2rem' }}
        />
      </Link>
      <Divider />
      <List
        sx={{
          '& .active': {
            backgroundColor: 'rgba(220,26,40)',
            color: 'white',
          },
        }}
      >
        <ListSubheader>Categories</ListSubheader>
        {data.genres.map((genre) => (
          <ListItemButton
            key={genre.id}
            component={NavLink}
            to={`/genre/${genre.id}`}
          >
            {genre.name}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;

interface IData {
  genres: {
    id: number;
    name: string;
  }[];
}

export async function loader() {
  const url = buildUrl(baseUrl + 'genre/movie/list')
  const res = await fetch(url);
  if (!res.ok) throw new Error('Error downloading genres');

  return (await res.json()) as IData;
}
