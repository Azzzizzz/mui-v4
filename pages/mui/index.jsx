import {
  Typography,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  makeStyles,
  TextField,
} from "@material-ui/core";

import { useState } from "react";

import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles({

  field: {
    marginTop: 20,
    marginBottom: 20,


  }

})

const Create = () => {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false)
    setDetailsError(false)

    if (title == '')
      setTitleError(true)
    if (details == '')
      setDetailsError(true)
    if (title, details)
      console.log(title, details);

  }

  return (
    <>

      <Container>
        <Typography variant="h6" component="h2" gutterBottom>
          Create a New Note
        </Typography>

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>

          <TextField
            onChange={(e) => setTitle(e.target.value)}
            className={classes.field}
            variant="filled"
            label="Note Title"
            color="secondary"
            fullWidth
            required
            error={titleError}
          />
          <TextField
            onChange={(e) => setDetails(e.target.value)}

            className={classes.field}
            label="Details"
            variant="filled"
            color="secondary"
            multiline
            rows={4}
            fullWidth
            required
            error={detailsError}
          />


          <Button
            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
          >
            SUBMIT
          </Button>
        </form>




      </Container>

    </>
  );
};

export default Create;
