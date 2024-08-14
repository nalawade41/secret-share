import {useEffect, useState} from 'react';
import { Box} from '@mui/material';
import Sidebar from "../Sidebar";
import { DecryptMessage } from '../../utilities/encryption/decoding';

const getSecretData = (data: SecretData) => {
    if (!data) return '';
    return DecryptMessage(data.secretText, data.hash);
};

const createLink = (data: SecretData) => {
    if (!data) return '';
    return `${window.location.origin}/generated/${data.hash}`;
}

const SecretShareSidebar:  React.FC<SecretShareSidebarProps>  = ({ open, setOpen, data, isGenerating = true }) => {
    const [sidebarData, setSidebarData] = useState<string>('');

    useEffect(() => {
        if (data) {
            if (isGenerating) {
                setSidebarData(createLink(data));
            } else {
                setSidebarData(getSecretData(data));
            }
        }
    },  [data, isGenerating]);

    const title = isGenerating ? 'Magic!' : 'Voila!';
    const subTitle = isGenerating ? 'The magic to encrypt the secret complete! Copy the below encrypted secret to share.' : 'Magic revealed!';

    return (
        <Box p={2}>
            <Sidebar
                open={open}
                setOpen={setOpen}
                data={sidebarData}
                title={title}
                subTitle={subTitle}
                reShare={!isGenerating}
                isPersisted={!isGenerating}
            />
        </Box>
    );
};

export default SecretShareSidebar;