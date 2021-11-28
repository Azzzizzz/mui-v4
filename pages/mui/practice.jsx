import { Typography, Button, ButtonGroup } from "@material-ui/core";
import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined"


const Practice = () => {
  return (
    <div>
      <div>
        <Typography variant="h1" color="primary" align="center">
          h1 Heading
        </Typography>
        <Typography variant="h2" gutterBottom color="secondary">
          h2 Heading
        </Typography>
        <Typography variant="h3" color="textPrimary" align="center">
          h3 Heading
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" align="right">
          h4 Heading
        </Typography>
        <Typography variant="button" color="secondary" align="right">
          Button
        </Typography>
        <Typography variant="body1" color="secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, nulla.
        </Typography>
      </div>

      <div>
        <Button variant="contained" color="primary">
          Submit
        </Button>
        <Button variant="outlined" color="secondary">
          Submit
        </Button>
        <Button variant="" color="primary">
          Submit
        </Button>
        <Button variant="contained" color="primary" disabled>
          Submit
        </Button>

        <ButtonGroup color="secondary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <div>
      <AcUnitOutlinedIcon />
        <AcUnitOutlinedIcon color="secondary"  fontSize="large"/>
      </div>
      
    </div>
  );
};

export default Practice;
