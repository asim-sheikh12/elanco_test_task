/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getApplicationDetails } from '../../services';
import { IApplicationDetails } from '../../interfaces';
import { CustomDetailTable } from '../../components';
import { capitalize } from '../../shared';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { columns } from '../../constants';

export const ApplicationDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<IApplicationDetails[]>([]);
  const fetchApplicationDetails = async () => {
    const result = await getApplicationDetails(name!);
    setData(result);
  };
  useEffect(() => {
    fetchApplicationDetails();
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
        {`Applications > ${capitalize(name)} Details`}
      </h3>
      <div style={{ margin: 30 }}>
        <CustomDetailTable data={data} columns={columns} />
      </div>
    </div>
  );
};
