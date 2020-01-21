import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DonationForm from "./DonationForm";
import {
  Button,
  TextInput,
  Autocomplete,
  SideSheet,
  Pane,
  Heading
} from "evergreen-ui";

const Center = styled.div`
  text-align: center;
`;

class Home extends Component {
  static propTypes = {
    getInputProps: PropTypes.func,
    getRef: PropTypes.string,
    inputValue: PropTypes.number,
    openMenu: PropTypes.func
  };
  render() {
    return (
      <Center>
        <div
          style={{
            width: "100%",
            height: "70vh",
            background: 'url("/image/1.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
          }}
        ></div>
        <Paragraph />
        <Donation />
        <NewsCenter />
      </Center>
    );
  }
}

const ParagraphStyles = styled.div`
  display: grid;
  grid-template-columns: 30% auto;
  grid-column-gap: 5rem;
  padding: 10rem 20rem;
  background: ${props => props.theme.lightgrey};
  color: ${props => props.theme.black};

  @media (max-width: 1300px) {
    padding: 3rem 10rem;
  }

  div {
    text-align: left;
    padding: 2rem;
  }
`;

const Paragraph = props => (
  <ParagraphStyles>
    <div>
      <h1>Why Protect Big Cats?</h1>
    </div>
    <div>
      <p>
        Around the world, big cats are among the most recognized and admired
        animals, at the top of the food chain. Yet all seven species are listed
        as Threatened or Near Threatened on the IUCN Red List, with the tiger
        categorized as Endangered. WCS is in a unique position to help—we work
        to conserve all seven.
      </p>
      <p>
        In addition to habitat degradation and loss of prey, many of these
        iconic predators are hunted directly for their fur, bones, or other body
        parts. They are also threatened by conflicts with people—their need for
        space leads them to range outside protected areas and to become a real
        or perceived threat to local people and their livestock.
      </p>
      <Button appearance="primary" marginRight={16} intent="warning">
        Read More
      </Button>
    </div>
  </ParagraphStyles>
);

const DonationStyles = styled.div`
  padding: 5rem 20rem;
  background: url("/image/donationbg.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 50vh;
  color: white;
`;

const Donation = () => {
  const [isShown, setIsShown] = useState(false);
  const [amount, setAmount] = useState(0);

  return (
    <>
      <DonationStyles>
        <form style={{ textAlign: "left", paddingLeft: "2rem" }}>
          <Autocomplete
            height={50}
            onChange={changedItem => setAmount(changedItem)}
            items={[25, 50, 100, 200, 500]}
          >
            {props => {
              const { getInputProps, getRef, inputValue, openMenu } = props;
              return (
                <div>
                  <h1>Donate</h1>
                  <TextInput
                    placeholder="Choose or Enter an Amount"
                    value={inputValue}
                    innerRef={getRef}
                    {...getInputProps({
                      onFocus: () => {
                        openMenu();
                      }
                    })}
                  />
                  <h1>to save the world's wild cats.</h1>
                </div>
              );
            }}
          </Autocomplete>
          <Button
            height={50}
            marginRight={16}
            appearance="primary"
            intent="success"
            iconBefore="heart"
            onClick={e => {
              e.preventDefault();
              setIsShown(true);
            }}
          >
            Donate!
          </Button>
        </form>
      </DonationStyles>
      <SideSheet
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
        containerProps={{
          display: "flex",
          flex: "1",
          flexDirection: "column"
        }}
      >
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
          <Pane padding={16}>
            <Heading size={600}>Donation</Heading>
          </Pane>
        </Pane>

        <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
          <img
            style={{ width: "100%", margin: "0 auto" }}
            src="/image/cubs.jpeg"
          />
          <DonationForm amount={amount} />
        </Pane>
      </SideSheet>
    </>
  );
};

const NewsCenterStyles = styled.div`
  padding: 10rem 20rem;
  text-align: left;
  background: ${props => props.theme.lightgrey};
  color: ${props => props.theme.black};
  min-height: 50vh;

  h1 {
    color: ${props => props.theme.darkBlue};
    font-size: 3.5rem;
    padding-bottom: 2rem;
  }

  .columns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 5rem;
  }

  img {
    width: 100%;
  }
`;

const NewsCenter = () => (
  <NewsCenterStyles>
    <h1>News Center</h1>
    <div className="columns">
      <div>
        <div>
          <img src="/image/news.jpg" alt="news-image" />
        </div>
        <div>
          <h4>Caracal</h4>
          <p>
            Caracals (Caracal caracal) are found across much of southern and
            central Africa. They have long powerful legs that enable them to
            leap as high as 10 feet, and hunt birds on the wing.
          </p>
          <p>Soruce: BBC Wildlife</p>
        </div>
      </div>
      <div>
        <div>
          <img src="/image/news.jpg" alt="news-image" />
        </div>
        <div>
          <h4>Caracal</h4>
          <p>
            Caracals (Caracal caracal) are found across much of southern and
            central Africa. They have long powerful legs that enable them to
            leap as high as 10 feet, and hunt birds on the wing.
          </p>
          <p>Soruce: BBC Wildlife</p>
        </div>
      </div>
      <div>
        <div>
          <img src="/image/news.jpg" alt="news-image" />
        </div>
        <div>
          <h4>Caracal</h4>
          <p>
            Caracals (Caracal caracal) are found across much of southern and
            central Africa. They have long powerful legs that enable them to
            leap as high as 10 feet, and hunt birds on the wing.
          </p>
          <p>Soruce: BBC Wildlife</p>
        </div>
      </div>
    </div>
  </NewsCenterStyles>
);

export default Home;
