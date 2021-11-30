import {
  Typography,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  makeStyles,
} from "@material-ui/core";

import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles({


})

const Create = () => {
  const classes = useStyles()
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
          endIcon={<KeyboardArrowRightIcon />}
        >
          SUBMIT
        </Button>



      </Container>

    </>
  );
};

export default Create;
