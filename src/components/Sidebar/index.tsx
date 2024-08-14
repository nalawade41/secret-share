import { Box, Drawer, Stack, TextareaAutosize, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StyledButton, { CloseButton } from "../Button";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar: React.FC<SidebarProps> = ({
    open,
    setOpen,
    data,
    reShare,
    title,
    subTitle,
    isPersisted,
}) => {
    const navigate = useNavigate();

    const toggleDrawer = (state: boolean) => () => {
        setOpen(state);
    };

    const handleCopyToShare = () => {
        navigator.clipboard.writeText(data).then(
            () => {
                console.log("Copied to clipboard successfully!");
            },
            (err) => {
                console.error("Failed to copy: ", err);
            }
        );
    };

    return (
        <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            variant={isPersisted ? "persistent" : "temporary"}
        >
            {!isPersisted &&
                <CloseButton onClick={toggleDrawer(false)}>
                    <CloseIcon/>
                </CloseButton>}
            <Box sx={{ width: 380, maxWidth: "100%", p: 4 }} role="presentation">
                <Stack gap={4} justifyContent="center">
                    <Stack justifyContent="center" alignItems="center">
                        <Typography variant="header">{title}</Typography>
                        <Typography variant="subtitle">{subTitle}</Typography>
                    </Stack>
                    <TextareaAutosize
                        aria-label="textarea"
                        placeholder="Decrypted Secret..."
                        style={{ height: 200, padding: 10, borderRadius: 4 }}
                        readOnly
                        value={data}
                    />
                    <StyledButton variant="outlined" color="primary" onClick={handleCopyToShare}>
                        Copy to Share
                    </StyledButton>
                    {reShare && (<StyledButton variant="outlined" color="primary" onClick={() => navigate("/")}>
                        Share another secret
                    </StyledButton>)}
                </Stack>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
