import {useState} from "react";
import {Box, Container, Grid, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {getSecretData} from "./loader/getSecretData";
import RevealError from "../RevealError";
import StyledButton from "../../components/Button";
import SecretShareSidebar from "../../components/SecretShareSidebar";
import { BlurOverlay } from "../../components/Overlay";


const Generated: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [openSidebar, setOpenSidebar] = useState<boolean>(false);
    const [revealing, setRevealing] = useState<boolean>(false);
    const [errorCode, setErrorCode] = useState<Error | null>(null);
    const [result, setResult] = useState<SecretData | null>(null);

    const handleReveal = () => {
        if (!id) {
            setErrorCode(new Error('404'));
            return;
        }
        setRevealing(true);
        getSecretData(id).then((data) => {
            if (data) {
                setResult(data);
                setOpenSidebar(true);
            }
        }).catch((error) => {
            setErrorCode(error);
        }).finally(() => {
            setRevealing(false);
        });
    }

    return (
        <Box>
            { openSidebar ? <BlurOverlay />: null }
            {errorCode ? (
                <RevealError error={errorCode} hash={id}/>
            ) : (
                <Container>
                    <SecretShareSidebar open={openSidebar} setOpen={setOpenSidebar} data={result} isGenerating={false} />
                    <Grid container alignItems="center" direction="column" p={8}>
                        <Grid item>
                            <Typography gutterBottom variant='header'>
                                Reveal the Magic Recipe!
                            </Typography>
                        </Grid>
                        <Grid item>
                            <StyledButton
                                onClick={handleReveal}
                                disabled={revealing}
                            >
                                {revealing ? 'Revealing Secret...' : 'Reveal Secret Now'}
                            </StyledButton>
                        </Grid>
                    </Grid>
                </Container>
            )}
        </Box>
    );
};

export default Generated;
