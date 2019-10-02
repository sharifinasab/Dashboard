import React, { useState, useEffect } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();

  const [profile, setProfile] = useState({
    first_name: "",
    last_name: "",
    user_name: "",
    company: "",
    city: "",
    email: "",
    country: "",
    postal_code: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://localhost:4000/profile/edit/5d8f486a409d3c1d2ca599f3"/* + this.props.match.params.id */
      );
      setProfile(result.data);
    };

    fetchData();
  }, []);

  const onChangeFirstName = e => {
    setProfile({
      ...profile,
      first_name: e.target.value
    });
  };
  const onChangeLastName = e => {
    setProfile({
      ...profile,
      last_name: e.target.value
    });
  };
  const onChangeUserName = e => {
    setProfile({
      ...profile,
      user_name: e.target.value
    });
  };
  const onChangeCompany = e => {
    setProfile({
      ...profile,
      company: e.target.value
    });
  };
  const onChangePostalCode = e => {
    setProfile({
      ...profile,
      postal_code: e.target.value
    });
  };
  const onChangeCity = e => {
    setProfile({
      ...profile,
      city: e.target.value
    });
  };
  const onChangeEmail = e => {
    setProfile({
      ...profile,
      email: e.target.value
    });
  };
  const onChangeCountry = e => {
    setProfile({
      ...profile,
      country: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    //    const obj = {
    //      person_name: this.state.person_name,
    //      business_name: this.state.business_name,
    //      business_gst_number: this.state.business_gst_number
    //    };
    axios
      .post(
        "http://localhost:4000/profile/update/5d8f486a409d3c1d2ca599f3" /*+this.props.match.params.id*/,
        profile
      )
      .then(res => console.log(res));

    //    this.props.history.push('/index');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                <p className={classes.cardCategoryWhite}>
                  Complete your profile
                </p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Company (disabled)"
                      id="company-disabled"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        // disabled: true
                        onChange: onChangeCompany,
                        value: profile.company
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Username"
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        // disabled: true
                        onChange: onChangeUserName,
                        value: profile.user_name
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Email address"
                      id="email-address"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: onChangeEmail,
                        value: profile.email
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="First Name"
                      id="first-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: onChangeFirstName,
                        value: profile.first_name
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Last Name"
                      id="last-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: onChangeLastName,
                        value: profile.last_name
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="City"
                      id="city"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: onChangeCity,
                        value: profile.city
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Country"
                      id="country"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: onChangeCountry,
                        value: profile.country
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Postal Code"
                      id="postal-code"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: onChangePostalCode,
                        value: profile.postal_code
                      }}
                    />
                  </GridItem>
                </GridContainer>
                {/* <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <CustomInput
                   labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                   id="about-me"
                   formControlProps={{
                     fullWidth: true
                   }}
                   inputProps={{
                     multiline: true,
                     rows: 5
                   }}
                 />
               </GridItem>
             </GridContainer> */}
              </CardBody>
              <CardFooter>
                <Button color="primary" type="submit">Update Profile</Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                <h4 className={classes.cardTitle}>Alec Thompson</h4>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button color="primary" round>
                  Follow
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </form>
    </div>
  );
}
