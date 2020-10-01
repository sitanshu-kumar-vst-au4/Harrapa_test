import React ,{useState} from 'react';
import axios from "axios";
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


export default function AddFarmerForm() {
  const classes = useStyles();
  const [farmerName, setfarmerName] = useState("");
  const [village, setVillage] = useState("");
  const [age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
 
  
 
 
  const handleSubmit = async (e) => {
    e.preventDefault()
      const data={Name:farmerName,villageName:village,age:age,gender:Gender,phoneNumber:phone}
    try {
      const response = await axios.post('/farmer_create',data);
      console.log('👉 Returned data:', response);
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
  };
  
 
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
         
        <Typography component="h1" variant="h5">
        Add Farmer
        </Typography>
        <form className={classes.form} noValidate>

        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Farmer Name"
            name="email"
            autoFocus
            onChange={(event)=>setfarmerName(event.target.value)}
          />
       
       <div>
       <FormControl style={{width:"24rem"}}>
        <InputLabel id="demo-simple-select-label">Choose Farmer Village</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={village}
          onChange={(event)=>setVillage(event.target.value)}
        >
          <MenuItem value="GopalPur">GopalPur</MenuItem>
          <MenuItem  value="ParamPur">ParamPur</MenuItem>
          <MenuItem  value="Sahjanna">Sahjanna</MenuItem>
        </Select>
      </FormControl>
       </div>

       <div>
       <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter Age"
            autoFocus
            onChange={(event)=>setAge(event.target.value)}
          />
       </div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter Gender"
            autoFocus
            onChange={(event)=>setGender(event.target.value)}
          />

        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter Phone Number"
            autoFocus
            onChange={(event)=>setPhone(event.target.value)}
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