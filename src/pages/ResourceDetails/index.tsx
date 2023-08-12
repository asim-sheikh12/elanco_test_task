/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getResourceDetails } from '../../services';
import { IResourceDetails } from '../../interfaces';
import { CustomDetailTable } from '../../components';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { capitalize } from '@mui/material';
import { columns } from '../../constants';

export const ResourceDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<IResourceDetails[]>([]);
  const fetchResourceDetails = async () => {
    const result = await getResourceDetails(name!);
    setData(result);
  };
  useEffect(() => {
    fetchResourceDetails();
  }, [name]);

  return (
    <div>
      <h3
        style={{
          margin: 30,
          display: 'flex',
          alignItems: 'center',
          color: '#605C7B',
          fontWeight: 600,
        }}
      >
        <KeyboardBackspaceIcon
          sx={{ margin: 1, cursor: 'pointer' }}
          onClick={() => navigate(-1)}
        />
        {`Resources > ${capitalize(name!)} Details`}
      </h3>
      <div style={{ margin: 30 }}>
        <CustomDetailTable data={data} columns={columns} />
      </div>
    </div>
  );
};
