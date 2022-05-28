import React, { useState } from "react";
import user from "../assets/user.png";
import calender from "../assets/calendar.png";
import cal from "../assets/cal.png";
import lock from "../assets/padlock.png";
import card from "../assets/credit-card.png";
import rupee from "../assets/rupee.png";
import {
  FormControl,
  FormLabel,
  GridItem,
  Input,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import './Form.css'
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../context/Appcontext";
const Form = () => {
  const [formdata, setFormData] = useState({
    cardnumber: "",
    cname: "",
    eyear: "",
    emonth: "",
    cvc: "",
    amount: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    const newdata = { ...formdata };
    // console.log(name,value)

    newdata[name] = value;
    setFormData(newdata);
  };
  // console.log(formdata);

  const { data, handelsetdata } = useContext(AppContext);
  
  const handelsubmit=()=>{
  handelsetdata(formdata);
  alert("Payment Sucessfull 😍")
    // console.log(formdata);
  }

  return (
    <VStack width="full" height="full" p={10} spacing={10} align="flex-start" marginTop='2px'>
      <p>Payment Details</p>
      <SimpleGrid columns={15} columnGap={3} rowGap={2}>
        <GridItem colSpan={15}>
          <FormControl >
            <FormLabel marginBottom="-2">CARDHOLDER NAME</FormLabel>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  style={{ marginTop: "13px" }}
                  width="20px"
                  src={user}
                ></img>
              </div>
              <div>
                <Input
                  color='blackAlpha.100'
                  marginBottom="4"
                  variant="flushed"
                  borderBottomColor="rgb(246,66,91)"
                  placeholder="Parul jamwal"
                  onChange={handelChange}
                  name="cname"
                />
              </div>
            </div>
          </FormControl>
        </GridItem>
        <GridItem colSpan={15}>
          <FormControl>
            <FormLabel marginBottom="-2">CARD NUMBER</FormLabel>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  style={{ marginTop: "13px" }}
                  width="20px"
                  src={card}
                  alt=""
                />
              </div>
              <div>
                <Input
                color='blackAlpha.100'
                  marginBottom="4"
                  variant="flushed"
                  type="number"
                  borderBottomColor="rgb(246,66,91)"
                  placeholder="5432  6577  9812  3211"
                  onChange={handelChange}
                  name="cardnumber"
                />
              </div>
            </div>
          </FormControl>
        </GridItem>
        <GridItem colSpan={6}>
          <FormControl>
            <FormLabel marginBottom="-2">EXPIRY MONTH</FormLabel>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  style={{ marginTop: "13px" }}
                  width="30px"
                  src={cal}
                  alt=""
                />
              </div>
              <div>
                <Input
                  marginBottom="4"
                  color='blackAlpha.100'
                  variant="flushed"
                  placeholder="08"
                  borderBottomColor="rgb(246,66,91)"
                  onChange={handelChange}
                  name="emonth"
                />
              </div>
            </div>
          </FormControl>
        </GridItem>
        <GridItem colSpan={5}>
          <FormControl>
            <FormLabel marginBottom="-2">EXPIREY YEAR</FormLabel>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  style={{ marginTop: "13px" }}
                  width="30px"
                  src={calender}
                  alt=""
                />
              </div>

              <div>
                <Input
                  marginBottom="4"
                  variant="flushed"
                  color='blackAlpha.100'
                  placeholder="3030"
                  type="number"
                  borderBottomColor="rgb(246,66,91)"
                  onChange={handelChange}
                  name="eyear"
                />
              </div>
            </div>
          </FormControl>
        </GridItem>
        <GridItem colSpan={4}>
          <FormControl>
            <FormLabel marginBottom="-2">CVC</FormLabel>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  style={{ marginTop: "13px" }}
                  width="40px"
                  src={lock}
                  alt=""
                />
              </div>
              <div>
                <Input
                  variant="flushed"
                  color='blackAlpha.100'
                  placeholder="145"
                  type="number"
                  borderBottomColor="rgb(246,66,91)"
                  onChange={handelChange}
                  name="cvc"
                />
              </div>
            </div>
          </FormControl>
        </GridItem>
      </SimpleGrid>
      <div style={{ display: "flex" , "fontWeight":"bolder" }}>
        <p> Amount:  </p><img src={rupee}    width="25px" height='2px'></img>
        <Input
          name="amount"
          variant="flushed"
          borderBottomColor="tomato"
          style={{ outline: "none" }}
          type="text"
          fontSize='2xl'
          color="rgb(246,66,91) !important"
          onChange={handelChange}
          placeholder='payment'
        ></Input>
      </div>
      <Button  onClick={handelsubmit}  colorScheme="rgb(246,66,91)" background="rgb(246,66,91)" p="20px 60px">
        PAY
      </Button>
    </VStack>
  );
};

export default Form;
