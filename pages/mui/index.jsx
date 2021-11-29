import {
  Typography,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  makeStyles,
} from "@material-ui/core";

import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles({
  btn:{
    fontSize: 60,
    backgroundColor: 'royalblue',
    "&:hover":{
      backgroundColor:'violet'
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom:20,
  }

})

const Create = () => {
  const classes = useStyles()
  return (
    <>
      <Container>
        <Typography className={classes.title} variant="h6" component="h2" gutterBottom>
          Create a New Note
        </Typography>
        <Button
          className={classes.btn}
          onClick={() => console.log("btn clicked")}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
        <AcUnitOutlinedIcon   />
        <AcUnitOutlinedIcon color="secondary" fontSize="large" />
      </Container>
      
    </>
  );
};

export default Create;
