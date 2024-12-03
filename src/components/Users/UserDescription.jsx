import React from 'react'
import './UserDescription.css'
import icon from "../../assets/icon.svg";
import search from "../../assets/search.svg";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import more from '../../assets/more.svg'
import { Link } from 'react-router-dom';
const products = [

  {    
      name: "Shadrack Kiplagat",
      userID : "#876G456",
      post: "shaddy@gmail.com",
      role: "Advert Supervisor",
      roleinfo: "Fulltime",
      status: " active",
      addedon: "Added on 16th/Oct/2024",
      company: "shaddiecomp",
      details: "view more",
    },
    {    
      name: "Shadrack Kiplagat",
      userID : "#876G456",
      post: "shaddy@gmail.com",
      role: "Advert Supervisor",
      roleinfo: "Fulltime",
      status: " active",
      addedon: "Added on 16th/Oct/2024",
      company: "shaddiecomp",
      details: "view more",
    },
    {    
      name: "Shadrack Kiplagat",
      userID : "#876G456",
      post: "shaddy@gmail.com",
      role: "Advert Supervisor",
      roleinfo: "Fulltime",
      status: " active",
      addedon: "Added on 16th/Oct/2024",
      company: "shaddiecomp",
      details: "view more",
    },
    {    
      name: "Shadrack Kiplagat",
      userID : "#876G456",
      post: "shaddy@gmail.com",
      role: "Advert Supervisor",
      roleinfo: "Fulltime",
      status: " active",
      addedon: "Added on 16th/Oct/2024",
      company: "shaddiecomp",
      details: "view more",
    },
    {    
      name: "Shadrack Kiplagat",
      userID : "#876G456",
      post: "shaddy@gmail.com",
      role: "Advert Supervisor",
      roleinfo: "Fulltime",
      status: " active",
      addedon: "Added on 16th/Oct/2024",
      company: "shaddiecomp",
      details: "view more",
    },
    {    
      name: "Shadrack Kiplagat",
      userID : "#876G456",
      post: "shaddy@gmail.com",
      role: "Advert Supervisor",
      roleinfo: "Fulltime",
      status: " active",
      addedon: "Added on 16th/Oct/2024",
      company: "shaddiecomp",
      details: "view more",
    },
    {    
      name: "Shadrack Kiplagat",
      userID : "#876G456",
      post: "shaddy@gmail.com",
      role: "Advert Supervisor",
      roleinfo: "Fulltime",
      status: " active",
      addedon: "Added on 16th/Oct/2024",
      company: "shaddiecomp",
      details: "view more",
    },
    {    
      name: "Shadrack Kiplagat",
      userID : "#876G456",
      post: "shaddy@gmail.com",
      role: "Advert Supervisor",
      roleinfo: "Fulltime",
      status: " active",
      addedon: "Added on 16th/Oct/2024",
      company: "shaddiecomp",
      details: "view more",
    },
    {    
      name: "Shadrack Kiplagat",
      userID : "#876G456",
      post: "shaddy@gmail.com",
      role: "Advert Supervisor",
      roleinfo: "Fulltime",
      status: " active",
      addedon: "Added on 16th/Oct/2024",
      company: "shaddiecomp",
      details: "view more",
    },
    {    
      name: "Shadrack Kiplagat",
      userID : "#876G456",
      post: "shaddy@gmail.com",
      role: "Advert Supervisor",
      roleinfo: "Fulltime",
      status: " active",
      addedon: "Added on 16th/Oct/2024",
      company: "shaddiecomp",
      details: "view more",
    },
    {    
      name: "Shadrack Kiplagat",
      userID : "#876G456",
      post: "shaddy@gmail.com",
      role: "Advert Supervisor",
      roleinfo: "Fulltime",
      status: " active",
      addedon: "Added on 16th/Oct/2024",
      company: "shaddiecomp",
      details: "view more",
    },
    
  ];
  
const USERDESCRIPTION = () => {
  return (
    <div className='users-description'>
       <div className="user-top-bar">
        <p className="all-users">All Users</p>
        <div className="user-add-exp-btn">
          <button className="user-export-btn">
            <img src={icon} alt="" />
            <p className="user-export-text"> Export</p>
          </button>
        
           <button className="add-user-btn">
           <Link to='/Adduser' > <p className="add-user-txt">+ Add User</p></Link>
          </button>
          
        </div>
      </div>
      <div>
        <ul className="nav-list-roles">
          <li>All</li>
          <li>Managers</li>
          <li>overdue</li>
        </ul>
        <hr/>
        <br />
        <div className="filter-box">

        </div>
        <div className="company-search-container"style={{position: 'relative'}}>
          <img src={search} alt="" className="search-container-company" style={{position: 'absolute' ,left: '2px', top: '5px'}}   />
          <input
          
            placeholder="Search users by Name, Email or Date "
            className="search-input-box"
          />
        </div>
      </div>
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
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  User ID
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Role
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  status
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Company
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
                    {product.userID}
                  </Typography>
                </TableCell>
                
                <TableCell>
                <Typography
                        variant="h7"
                        sx={{
                          fontWeight: "600",
                        }}
                      >
                        {product.role}
                      </Typography>
                  <Typography
                        color="textSecondary"
                        sx={{
                          fontSize: "13px",
                        }}
                      >
                        {product.roleinfo}
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
                <Typography
                        variant="h7"
                        sx={{
                          fontWeight: "600",
                        }}
                      >
                        {product.company}
                      </Typography>
                </TableCell>
                <TableCell>
                <Typography
                      
                        fontSize={'14px'}px
                        sx={{
                          fontWeight: "400",
                        }}
                      >
                        {product.details}
                      </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </div>
  )
}

export default USERDESCRIPTION
