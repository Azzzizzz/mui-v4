import {
  Typography,
  Button,
  ButtonGroup,
  Container,
  IconButton,
} from "@material-ui/core";

import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import SendIcon from "@material-ui/icons/Send";

const Create = () => {
  return (
    <>
      <Container>
        <Typography variant="h6" component="h2" gutterBottom>
          Create a New Note
        </Typography>
        <Button
          onClick={() => console.log("btn clicked")}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
        <AcUnitOutlinedIcon />
        <AcUnitOutlinedIcon color="secondary" fontSize="large" />   </Container>
      
    </>
  );
};

export default Create;
