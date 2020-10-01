import React ,{useState} from 'react';
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
 
const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function TransportationForm() {
  const classes = useStyles();
  const [vechileType, setvechileType] = useState("");
  const [vechileNumber, setvechileNumber] = useState("");
  const [driverName, setDriverName] = useState("");
  const [AmountPaid, setAmountPaid] = useState("");
  
  const handleSubmit= async (e)=>{
   e.preventDefault()
      const data={VechileType:vechileType,VechileNumber:vechileNumber,DriverName:driverName,AmounttoPaid:AmountPaid}
    try {
      const response = await axios.post('/transporation_create',data);
      console.log('👉 Returned data:', response);
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
    
  }
 
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
         
        <Typography component="h1" variant="h5">
         Transportation form
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Vehicle Type"
            autoFocus
            onChange={(event)=>setvechileType(event.target.value)}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Vehicle number"
            autoFocus
            onChange={(event)=>setvechileNumber(event.target.value)}
          /> 
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Name of the driver"
            autoFocus
            onChange={(event)=>setDriverName(event.target.value)}
          /> 
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Amount paid to the driver"
            autoFocus
            onChange={(event)=>setAmountPaid(event.target.value)}
          /> 
        
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
           Submit
          </Button>
         
        </form>
      </div>
     
    </Container>
  );
}