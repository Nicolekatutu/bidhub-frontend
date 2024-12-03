
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import more from '../../../assets/Shape/Shape/More.svg'
const products = [
  {
    company : "#876G456",
    post: "rainblue.org",
    name: "Rainblue solutions",
    location: "Nairobi",
    locationinfo: "Westlands",
    status: " active",
    addedon: "Added on 16th/Oct/2024",
    allusers: "12",
    details: "view more",
  },
  {
    company : "#876G456",
    post: "rainblue.org",
    name: "Rainblue solutions",
    location: "Nairobi",
    locationinfo: "Westlands",
    status: " active",
    addedon: "Added on 16th/Oct/2024",
    allusers: "12",
    details: "view more",
  },
  {
    company : "#876G456",
    post: "rainblue.org",
    name: "Rainblue solutions",
    location: "Nairobi",
    locationinfo: "Westlands",
    status: " active",
    addedon: "Added on 16th/Oct/2024",
    allusers: "12",
    details: "view more",
  },
  {
    company : "#876G456",
    post: "rainblue.org",
    name: "Rainblue solutions",
    location: "Nairobi",
    locationinfo: "Westlands",
    status: " active",
    addedon: "Added on 16th/Oct/2024",
    allusers: "12",
    details: "view more",
  },
  {
    company : "#876G456",
    post: "rainblue.org",
    name: "Rainblue solutions",
    location: "Nairobi",
    locationinfo: "Westlands",
    status: " active",
    addedon: "Added on 16th/Oct/2024",
    allusers: "12",
    details: "view more",
  },
  {
    company : "#876G456",
    post: "rainblue.org",
    name: "Rainblue solutions",
    location: "Nairobi",
    locationinfo: "Westlands",
    status: " active",
    addedon: "Added on 16th/Oct/2024",
    allusers: "12",
    details: "view more",
  },
  {
    company : "#876G456",
    post: "rainblue.org",
    name: "Rainblue solutions",
    location: "Nairobi",
    locationinfo: "Westlands",
    status: " active",
    addedon: "Added on 16th/Oct/2024",
    allusers: "12",
    details: "view more",
  },
  
];

const ExTable = () => {
  return (
    <Table
      aria-label="simple table"
      sx={{
        mt: 3,
        whiteSpace: "nowrap",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Company 
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Company ID
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Location
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              status
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              All Users
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Details
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              <img src={more} alt="" />
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.name}>
            <TableCell>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="h7"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  >
                    {product.post}
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {product.company}
              </Typography>
            </TableCell>
            
            <TableCell>
            <Typography
                    variant="h7"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {product.location}
                  </Typography>
              <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  >
                    {product.locationinfo}
                  </Typography>
            </TableCell>
            <TableCell>
            <Typography
                    variant="p"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {product.status}
                  </Typography>
              <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  >
                    {product.addedon}
                  </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {product.allusers}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {product.details}
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExTable;
