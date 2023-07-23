import React from 'react'
import {
    Box,
    Button,
    Typography,
    Card,
    Modal,
    CardContent,
    CardMedia,
    Stack,
  } from "@mui/material";
  
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

function UserModal(props) {
    const handleDownload = () => {
        if (props.url) {
          const link = document.createElement("a");
          link.href = props.url;
          link.download = "removed_background.png";
          link.click();
        }
    };
  return (
     <Modal open={props.open} onClose={props.close}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "230vh",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 250 }}
                image={props.url}
                title="green iguana"
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom variant="h6">
                  Background Removed Photo 💫
                </Typography>
              </CardContent>

              <Stack
                direction="row"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "15px",
                  padding: "5px",
                }}
              >
                <Button
                  size="small"
                  onClick={handleDownload}
                  variant="outlined"
                  endIcon={<FileDownloadOutlinedIcon />}
                >
                  Download
                </Button>
                <Button
                  size="small"
                  onClick={props.close}
                  variant="outlined"
                  endIcon={<CancelOutlinedIcon />}
                >
                  Close
                </Button>
              </Stack>
            </Card>
          </Box>
        </Modal>
  )
}

export default UserModal